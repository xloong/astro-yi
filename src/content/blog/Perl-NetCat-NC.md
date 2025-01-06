---
title: Perl版NetCat(NC)
description: 这个机器有多古老？4.6-RELEASEFreeBSD，没有gcc，没有make，连系统都乱七八糟的，port都不好使，pkg_add-r安装包都会有问题，真是无语了，还好有安装了一个Perl5.8.8。修理Port花了半天时间，硬是没搞好。想想也不划算，把紧急要用的一些小工具花一会儿功夫自己做一个出来算了，于是有了这个简单的Perl版NC，不过我没支持-e参数，用不着。
date: 2008-11-04 09:48:38
category: 技术文章
tags: ['Perl', '技术类']
post_id: 668
alias: Perl-NetCat-NC
ViewNums: 2759
---

这个机器有多古老？4.6-RELEASE [FreeBSD](/blog/freebsd-71-beta2)，没有gcc，没有make，连系统都乱七八糟的，port都不好使，pkg_add -r安装包都会有问题，真是无语了，还好有安装了一个Perl 5.8.8。修理Port花了半天时间，硬是没搞好。想想也不划算，把紧急要用的一些小工具花一会儿功夫自己做一个出来算了，于是有了这个简单的**Perl 版NC**，不过我没支持-e参数，用不着。
```
1. #!/usr/bin/perl
3. use strict;
4. use IO::Socket;
5. use IO::Select;
6. use Getopt::Std;
8. my %option;
9. getopts('lp:', %option);
11. # listen on local port
12. if( defined $option{'l'} )
13. {
14. if( !defined $option{'p'} )
15. {
16. &Usage( );
17. exit( -1 );
18. }
20. my $port = $option{'p'};
21. my $listen = IO::Socket::INET->new(Proto => 'tcp',
22. LocalPort => $port,
23. Listen => 1,
24. Reuse => 1) or die "Listen on port $port error: $!n";
26. while( my $client_sock = $listen->accept() )
27. {
28. &ProcessData( $client_sock );
29. }
30. }
32. # if has no -l argument, maybe want to connect to other host
33. if( @ARGV != 2 )
34. {
35. &Usage( );
36. exit( -1 );
37. }
39. my $client_sock = IO::Socket::INET->new(Proto => 'tcp', PeerHost => $ARGV[0], PeerPort => $ARGV[1] ) || die "Connect to $ARGV[0]:$ARGV[1] error:$!n";
40. &ProcessData( $client_sock );
42. sub ProcessData
43. {
44. my $client_sock = shift;
46. my $select = IO::Select->new( );
48. $select->add( *STDIN );
49. $select->add( $client_sock );
51. my $buffer;
52. while( 1 )
53. {
54. if( ! $select->exists( $client_sock ) )
55. {
56. print "waiting connection....n";
57. last;
58. }
60. my @ready = $select->can_read;
62. for my $tmp_sock(@ready)
63. {
64. if( $tmp_sock eq *STDIN )
65. {
66. if( my $recv_len = sysread( *STDIN, $buffer, 1024 )  )
67. {
68. if( ! syswrite($client_sock, $buffer) )
69. {
70. $select->remove( $client_sock );
71. $select->remove( *STDIN );
72. close( $client_sock );
74. last;
75. }
76. }
77. else
78. {
79. $select->remove( $client_sock );
80. $select->remove( *STDIN );
81. close( $client_sock );
83. last;
84. }
85. }
87. elsif( $tmp_sock eq $client_sock )
88. {
89. if( my $recv_len = sysread( $client_sock, $buffer, 1024*5 ) )
90. {
91. if( ! syswrite( *STDOUT, $buffer) )
92. {
93. $select->remove( $client_sock );
94. $select->remove( *STDIN );
95. close( $client_sock );
97. last;
98. }
99. }
100. else
101. {
102. print "socket disconnected.n";
103. $select->remove( $client_sock );
104. $select->remove( *STDIN );
105. close( $client_sock );
107. last;
108. }
109. }
110. }
111. }
112. }
114. sub Usage
115. {
116. print "simple nc.pl, code by wustyunshu@hotmail.comn";
117. print "this script don't support -e cmd.exe, ^_^n";
118. print "Usage:n";
119. print "t  -l -p 99n";
120. print "t 192.168.0.1 80n";
121. }
```
**Author:云舒**

