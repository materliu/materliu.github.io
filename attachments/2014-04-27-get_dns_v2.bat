@ECHO OFF
COLOR 1A
ECHO 现在开始获取您的网络信息。。。

netsh interface ip set address name="本地连接" source=dhcp 
echo 修改DNS,自动获取DNS...
netsh interface ip set dns name="本地连接" source=dhcp 

ipconfig /all > ./result.txt
echo 以下是nslookup 信息 >> ./result.txt
nslookup http://vm.qplus.com >> ./result.txt
nslookup www.qplus.com >> ./result.txt
echo tracert info >> ./result.txt
tracert www.qplus.com >> ./result.txt
ECHO 设置成功！
PAUSE
