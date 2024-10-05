:start
title [PUSH][PROXY]萌界参考手册 by 晓空
chcp 65001
set http_proxy=socks5://127.0.0.1:10808
set https_proxy=socks5://127.0.0.1:10808
:main
git push origin master
:exit
pause