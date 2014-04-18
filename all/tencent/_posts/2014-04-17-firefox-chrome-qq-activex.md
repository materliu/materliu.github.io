---
layout: post
title: 如何在FireFox和Chrome中使用QQ ActiveX控件 
---

## 如何在FireFox和Chrome中使用QQ ActiveX控件

QQ安装包即将在1.85版本中为FireFox和Chrome安装ActiveX转发功能的NP插件.  此插件的用途为: 在FireFox和Chrome可以调用ActiveX插件.
插件MIME type为qscall-plugin.
 
用Object或者embed标签均可声明插件对象, type需指定为qscall-plugin, 大小为0(示例中不为0是为了演示效果),hidden为true
插件首先需要调用InitActiveX,参数为ActiveX控件的ProgID.
然后可以调用ActiveX控件的方法,插件会将此方法转发到对应的ActiveX控件中
使用范例如下:
 
目前QQ提供的2个ActiveX控件的功能:
CPHelper API Reference
    int     AddCustomPanel(string strUrl, string strName);
    string  About();
    int     AddCustomEmotion(string strUrl);
    int     AddCustomEmotions(var vValue);
    int     SendCustomEmotion(string strUrl, int dwUin, int dwToUin);
    int     PutRSInfo(int dwUin, int dwRsID, string strRSPrompt, string strParam);
    int     AddToNetDisk(string strUrl);
    int     SendMMS(string strUrl);
    string  InsertOnlineState();
    boolean StartupIM(string bsAccount);
    int     AddMemoNote(string strTitle, string strContent, int dwParam1, int dwParam2, string strTime, int dwCookie);
    string  GetQPlusVersion();
    int     RunQPlus( string bsCommandLine ); // To get help about the returned value, see to ShellExecute API
    boolean IsQPlusInstalled();
    boolean CallFingerFrame( int dwUin );
    boolean CallFriendCircleFrame( int dwUin, int dwTargetUin, int dwCircleId );
    boolean CallOpenFriendCircleFrame( int dwUin );
    boolean CallGroupChatFrame( int dwUin, int dwGin );
    boolean SetFriendCircleTempChatInfo( int dwUin, int dwTargetUin, string stringRemarkname, string stringValidateInfo );
    boolean TestFriendCircleSupported();
    boolean IsExistSchoolFellowIcon(int dwUin);
    boolean UpdateQQ(int dwUin);
    boolean ChangeHead(int dwUin);
    boolean ChangeSkin(int dwUin);
    boolean QQLevelPK(int dwUin);
             
TimwpDll API Reference
    double  GetVersion();
    string  About();
    boolean IsSBuddyInstall();
    boolean CheckCommand(string strCommand);
    boolean CheckProtocol(string strProtocol);
    boolean InputParameter(string strParameter);
    boolean CheckValid();
    boolean CheckQQRunning();
    int     GetLastQQVersion();
    int     GetLastTMVersion();
    int     GetHummerQQVersion();
    int     GetHummerTMVersion();
    boolean IsQQMusicInstall();
    string  GetQQInfo();


我们已经封装好的js包[下载](/attachments/2014-04-17-cphelper.zip)

