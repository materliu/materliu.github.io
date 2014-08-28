---
layout: post
title: mac下finder展示隐藏文件和隐藏文件夹
---
    
# mac下finder展示隐藏文件和隐藏文件夹

方法很简单：

show:

defaults write com.apple.finder AppleShowAllFiles TRUE

killall Finder

hide:

defaults write com.apple.finder AppleShowAllFiles FALSE

killall Finder