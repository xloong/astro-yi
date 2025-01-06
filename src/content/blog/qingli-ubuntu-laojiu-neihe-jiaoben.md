---
title: 清理ubuntu老旧内核的脚本
description: 夜火我对内核的东西也是一知半解的，不敢随便乱删旧内核，骨头写的这个post/qingli-ubuntu-laojiu-neihe-jiaoben.html">清理ubuntu老旧内核的脚本很实用，转之~，给和我一样不知道post/qingli-ubuntu-laojiu-neihe-jiaoben.html">怎么删除ubuntu老旧内核的朋友借鉴借鉴。话说骨头的站好像有问题，暂时无法访问。/tags/Ubuntu">ubuntu用久了，升级了几次内核以后，就免不了需要post/qingli-ubuntu-laojiu-neihe-jiaoben.html">清理一下老的内核，毕竟一套内核就有170多M的空间呢。但是每次都打一堆字来清理也烦了。虽然Ubuntu命令技巧（这里再罗嗦几句：如果还有ubuntuer没看过这个，强烈建议看一遍。）里有删除旧内核的命令，而且就一行：……
date: 2010-03-17 10:08:24
category: 技术文章
tags: ['Ubuntu', '内核', '脚本Script']
post_id: 1093
alias: qingli-ubuntu-laojiu-neihe-jiaoben
ViewNums: 3446
---

[夜火](http://www.15897.com/)我对内核的东西也是一知半解的，不敢随便乱删旧内核，[骨头](http://li2z.cn)写的这个[清理ubuntu老旧内核的脚本](/blog/qingli-ubuntu-laojiu-neihe-jiaoben)很实用，转之~，给和我一样不知道[怎么删除ubuntu老旧内核](/blog/qingli-ubuntu-laojiu-neihe-jiaoben)的朋友借鉴借鉴。话说骨头的站好像有问题，暂时无法访问。

[ubuntu](/tags/Ubuntu)用久了，升级了几次内核以后，就免不了需要[清理一下老的内核](/blog/qingli-ubuntu-laojiu-neihe-jiaoben)，毕竟一套内核就有170多M的空间呢。但是每次都打一堆字来清理也烦了。虽然[Ubuntu 命令技巧](http://wiki.ubuntu.org.cn/index.php?title=UbuntuSkills)（这里再罗嗦几句：如果还有ubuntuer没看过这个，强烈建议看一遍。）里有[删除旧内核](http://wiki.ubuntu.org.cn/index.php?title=UbuntuSkills&variant=zh-cn#.E5.88.A0.E9.99.A4.E6.97.A7.E5.86.85.E6.A0.B8)的命令，而且就一行：

```shell
sudo aptitude purge ~ilinux-image-.*(!`uname -r`)
```

但是我却不是很喜欢，因为这这个没有把linux-headers-xxx删除掉。
于是自己写了个繁的，需要的可以自己保存，以便不时之需。

```shell
#!/bin/sh
# 清理ubuntu的老内核
# by bones7456
# http://li2z.cn
CURRENT="`uname -r | awk -F"-" '{print $1"-"$2}'`"
HEADERS=""
IMAGES=""
for HEADER in `dpkg --get-selections | grep ^linux-headers |
grep -vE "(generic|386|virtual)" | awk '{gsub(/linux-headers-/,"",$1);print $1}'`
do
    if [[ "$CURRENT" < "$HEADER" ]]
    then
        echo "正在运行的内核不是最新的。 $CURRENT < $HEADER"
        echo "Running kernel is not the newest. $CURRENT < $HEADER"
        exit 1
    else
        [[ "$CURRENT" != "$HEADER" ]] && {
            HEADERS="${HEADERS} linux-headers-${HEADER}"
            IMAGE="`dpkg --get-selections | grep ^linux-image |
                grep "${HEADER}" | awk '{print $1}'`"
            IMAGES="${IMAGES} $IMAGE"
        }
    fi
done

if [[ x"$HEADERS" == x"" ]]
then
    echo "没有要清理的老内核."
    echo "No old kernel need to clean."
    exit 0
fi
CMD="sudo apt-get purge $HEADERS $IMAGES"
echo "$CMD"
if [ "$1" == "-e" ]
then
    sh -c "$CMD"
else
    echo "请确定以上命令是否正确，然后输入 $0 -e 来执行以上命令。"
    echo "Be sure this command is right, then type $0 -e to execute."
fi
```
