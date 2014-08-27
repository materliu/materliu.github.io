---
layout: post
title: java实现发送邮件短信
---

## java实现发送邮件短信

    1.发送电子邮件

    首先应该构建JavaMail的开发环境，在JDK中配置JavaMail的相关类和包。在构建JavaMail开发环境中，需要mail.jar和activation.jar这两个文件。这两个文件的获得可以通过SUN公司的官方网站下载。
    JavaMail对STMP、POP3、IMAP提供支持，封装了电子邮件功能中的邮件对象、发送、身份验证、接收等功能。

    在发送各种类型的邮件时，主要应用到下面几个类：
    1）Session类。用户要想发送邮件首先需要创建Session类的对象，利用这个对象创建邮件对象、指定邮件服务器认证的客户端属性。它的类层次为javax.mail.Session。
    2）InternetAddress类。邮件发送的地址类，类层次结构是javax.mail.internet.InternetAddress，它继承自抽象类javax.mail.Address。
    3）MimeMessage类。邮件消息类，它的类层次结构是javax.mail.internet.MimeMessage，继承自抽象类javax.mail.Message。
    4）Transport类。邮件发送类，它的类层次结构是javax.mail.Transport。
    5）Authenticator类。授权者类，JavaMail通过使用Authenticator类以用户名、密码的方式访问那些受到保护的资源，在这里“资源”就是邮件服务器。其类层次结构为javax.mail.Authenticator。
    6）Store类。用来从邮件服务器上接受邮件，其类层次结构为javax.mail.Store。
    7）Folder类。邮件文件夹类，它的类层次结构为javax.mail.Folder。


    实现过程：

    <%@ page import="java.io.*"%>
    <%@ page import="java.util.*"%>
    <%@ page import="javax.mail.*"%>
    <%@ page import="javax.mail.internet.*"%>
    <%@ page import="javax.activation.*"%>

    <%
    try{
     request.setCharacterEncoding("gb2312");
     String from = request.getParameter("jname");
     String to = request.getParameter("sname");
     String subject = request.getParameter("title");
     String messageText = request.getParameter("message");
     String password = request.getParameter("password");
     String S = request.getParameter("jname");
     int n = S.indexOf('@');
     int m = S.length();
     String server = S.substring(n+1,m);
     //建立邮件会话
     Properties pro = new Properties();
     pro.put("mail.smtp.host","smtp."+server);
     pro.put("mail.stmp.auth","true");
     Session sess = Session.getInstance(pro);
     sess.setDebug(true);
     MimeMessage message = new MimeMessage(mess);//新建一个消息对象
     //设置发件人
     InternetAddress from_mail = new InternetAddress(from);
     message.setFrom(from_mail);
     //设置收件人
     InternetAddress to_mail = new InternetAddress(to);
     message.setRecipient(Message.RecipientType.TO,to_mail);
     message.setSubject(subject);//设置主题
     message.setText(messageText);//设置内容
     message.setSentDate(new Date());//设置发送时间
     //发送邮件
     message.saveChanges();//保存邮件信息
     Transport transport = sess.getTransport("smtp");
     transport.connect("smtp."+server,from,password);
     transport.sendMessage(message,message.getAllRecipients());
     transport.close();
     out.print("邮件发送成功");
    }catch(Exception e){
     out.print("发送邮件失败，原因可能是<ul>");
     out.println(e.getMessage());
    }
    %>


    2.发送HTML格式的邮件

    MimeMultipart对象来存储HTML文件的具体内容，在设置内容的同时应该设置对象的格式。

    MimeMultipart类的类层次结构是javax.mail.Internet.MimeMultipart。一般保存电子邮件内容的容器是Multipart抽象类，它定义了增加、删除及获得电子邮件不同内容的方法。由于Multipart是抽象类，所以必须使用一个具体的子类，JavaMail API提供javax.mail.Internet.MimeMultipart类来使用MimeMessage对象。
    语法：
    Multipart mul = new MimeMultipart();
    说明：使用MimeMultipart对象时常用的一个方法是addBodyPart()，它可以在电子邮件的内容里添加BodyPart对象，消息可以有很多部分，一个BodyPart可以代表一个部分。
    MimeBodyPart类的类层次结构是javax.mail.Internet.MimeBodyPart。MimeBodyPart是BodyPart具体于MimeMessage的一个子类。MimeBodyPart对象代表一个MimeMessage对象内容的一部分，每个MimeBodyPart被认为由两部分组成：一个MIME类型和匹配这个类型的内容。
    语法：
    BodyPart mdp = new MimeBodyPart();//新建一个存放信件内容的BodyPart对象
    String messageText = "Hello World!";
    //定义MIME类型为text/html，并设置MimeBodyPart的内容
    mdp.setContent(messageText,"text/html");


    实现过程：

    <%@ page import="java.io.*"%>
    <%@ page import="java.util.*"%>
    <%@ page import="javax.mail.*"%>
    <%@ page import="javax.mail.internet.*"%>
    <%@ page import="javax.activation.*"%>

    <%
    try{
     request.setCharacterEncoding("gb2312");
     String from_mail = request.getParameter("sname");
     String to_mail = request.getParameter("rname");
     String subject = request.getParameter("title");
     String messageText = request.getParameter("message");
     String password = request.getParameter("password");
     String S = request.getParameter("sname");
     int n = S.indexOf('@');
     int m = S.length();
     String server = S.substring(n+1,m);
     Properties prop = new Properties();
     prop.put("mail.smtp.host","smtp."+server);
     prop.put("mail.smtp.auth","true");
     Session sess = Session.getInstance(prop);
     sess.setDebug(true);
     MimeMessage message = new MimeMessage(sess);
     //给消息对象设置收件人、发件人、主题、发信时间
     InternetAddress from = new InternetAddress(from_mail);
     message.setFrom(from);
     InternetAddress to = new InternetAddress(to_mail);
     message.setRecipient(Message.RecipientType.TO,to);
     message.setSubject(subject);
     message.setSentDate(new Date());
     Multipart mul = new Multipart();//新建一个MimeMultipart对象来存放多个BodyPart对象
     BodyPart mdp = new MimeBodyPart();//新建一个存放信件内容的BodyPart对象
     mdp.setContent(messageText,"text/html;charset=gb2312");
     mul.addBodyPart(mdp);//将含有信件内容的BodyPart加入到MimeMultipart对象中
     message.saveChanges();
     Transport transport = sess.getTransport("smtp");
     transport.connect("smtp."+server,from_mail,password);
     transport.sendMessage(message,message.getAllRecipients());
     transport.close();
     out.println("邮件发送成功！");
    }catch(Exception e){
     out.print("发送邮件失败，原因可能是<ul>");
     out.println(e.getMessage());
    }
    %>

    3.带附件的邮件发送

    一般，在设计带有附件的邮件发送程序时可以遵循以下步骤：
    1）发送带有附件的邮件需要建立邮件的各个邮件体部分，在第一个部分（即邮件内容文字）后增加一个具有DataHandler的附件。
    2）如果将文件作为附件发送，则要建立FileDataSource类型的对象作为附件数据源；如果从URL读取数据作为附件发送，则要建立URLDataSource类型的对象作为附件数据源。
    3）将数据源（FileDataSource或是URLDataSource）对象作为DataHandler类的构造方法的参数传入，从而建立一个DataHandler对象作为数据源的DataHandler。
    4）将这个DataHandler设置为邮件体部分的DataHandler，这样就完成了邮件体与附件之间的关联工作。下面的工作就是用BodyPart的setFileName()方法设置附件名为原文件名。
    5）将两个邮件体放入到Multipart，设置邮件内容为这个容器的Multipart，发送邮件。


    实现过程：

    <%@ page import="java.io.*"%>
    <%@ page import="java.util.*"%>
    <%@ page import="javax.mail.*"%>
    <%@ page import="javax.mail.internet.*"%>
    <%@ page import="javax.activation.*"%>
    <%@ page import="java.net.*"%>

    <%
    try{
     request.setCharacterEncoding("gb2312");
     String from_mail = request.getParameter("sname");
     Stirng to_mail = request.getParameter("rname");
     String from_psd = request.getParameter("password");
     String title = request.getParameter("title");
     String content = request.getParameter("content");
     String path = request.getParameter("attachement");
     String S = request.getParameter("sname");
     int n = S.indexOf('@');
     int m = S.length();
     String server = S.substring(n+1,m);
     Properties prop = new Properties();
     prop.put("mail.smtp.host","smtp."+server);
     prop.put("mail.smtp.auth","true");
     Session sess = Session.getInstance(prop);
     session.setDebug(true);
     MimeMessage message = new MimeMessage(sess);
     //给消息对象设置收件人、发件人、主题
     InternetAddress from = new InternetAddress(from_mail);
     message.setFrom(from);
     InternetAddress to = new InternetAddress(to_mail);
     message.setRecipient(Message.RecipientType.TO,to);
     message.setSubject(title);
     Multipart mul = new MimeMultipart();//新建一个MimeMultipart对象来存放多个BodyPart对象
     BodyPart mdp = new MimeBodyPart();//新建一个存放信件内容的BodyPart对象
     mdp.setContent(content,"text/html;charset=gb2312");
     mul.addBodyPart(mdp);//将含有信件内容的BodyPart加入到MimeMultipart对象中
     //设置信件的附件
     mdp = new MimeBodyPart();//新建一个存放附件的BodyPart
     DataHandler handler = new DataHandler("JAVAMAIL附件测试","text/plain;charset=gb2312");//新建一个DataHandler对象，并设置其内容、格式和编码方式
     mdp.setFileName("mrsoft");//可以和源文件名不一致
     mdp.setDataHandler(handler);
     mul.addBodyPart(mdp);
     message.setContent(mul);//把mul作为消息对象的内容
     message.saveChanges();
     Transport transport = sess.getTransport("smtp");
     transport.connect("smtp."+server,from_mail,from_psd);
     transport.sendMessage(message,message.getAllRecipients());
     transport.close();
     out.println("附件发送成功！");
    }catch(Exception ex){
     out.print("邮件发送失败，原因可能是：<ul>");
     out.println(ex.getMessage());
    }
    %>

    4.邮件群发

    将收件人的地址设置为tomail+i的形式，利用For循环向这些地址发送邮件，以实现群发的目的。
    利用Address类设置邮件信息的收件人和发件人信息，在创建了邮件地址类后，通过message的setFrom()方法设置邮件的发件人，代码如下：
    message.setFrom(from_mail);
    设置收件人地址时使用setRecipient()方法设置收信人地址，代码如下：
    message.setRecipient(type,address);
    参数type为收件人类型。可以使用以下3个常量来区分收件人的类型：
    1）Message.RecipientType.TO--发送。
    2）Message.RecipientType.CC--抄送。
    3）Message.RecipientType.BCC--暗送。
    说明：在日常的使用中，经常会用到抄送和暗送这两种形式的邮件发送。抄送和暗送虽然都是将一封E-mail同时发送到多个信箱，但是它们之

    间有一定的区别的，其区别在于暗送隐藏了其他抄送人的地址，只让收信人看到自己的收信地址，可以起到保密和预防垃圾邮件的作用。


    实现过程：

    <%@ page import="java.io.*"%>
    <%@ page import="java.util.*"%>
    <%@ page import="javax.mail.*"%>
    <%@ page import="javax.mail.internet.*"%>
    <%@ page import="javax.activation.*"%>

    <%
    try{
    int i = 1;
    for(i=1;i<4;i++){
     request.setCharacterEncoding("gb2312");
     String from = request.getParameter("from_mail");
     String to = request.getParameter("tomail"+i);
     String subject = request.getParameter("subject");
     String messageText = request.getParameter("message");
     String password = request.getParameter("password");
     String S = request.getParameter("from_mail");
     int n = S.indexOf('@');
     int m = S.length();
     String server = S.substring(n+1,m);
     //建立邮件会话
     Properties pro = new Properties();
     pro.put("mail.smtp.host","smtp."+server);
     pro.put("mail.smtp.auth","true");
     Session sess = Session.getInstance(pro);
     sess.setDebug(true);
     MimeMessage message = new MimeMessage(sess);//新建一个消息对象
     InternetAddress from_mail = new InternetAddress(from);//设置发件人
     message.setFrom(from_mail);
     //设置收件人
     InternetAddress to = new InternetAddress(to);
     message.setRecipient(Message.RecipientType.TO,to_mail);
     message.setSubject(subject);//设置主题
     message.setText(messageText);//设置内容
     message.setSentDate(new Date());//设置发送时间
     message.saveChanges();//保存邮件信息
     Transport transport = sess.getTransport("smtp");
     transport.connect("smtp."+server,from,password);
     transport.sendMessage(message,message.getAllRecipients());
     transport.close();
     if(i==3){
      out.print("发送邮件成功");
     }
    }
    }catch(Exception e){
     out.print("发送邮件失败，原因可能是<ul>");
     out.println(e.getMessage());
    }
    %>

    5.Spring利用WebService发送手机短信

    通过编程实现短信息的发送是一件比较繁琐的事情，目前一般的解决方法是通过计算机和手机的连线，使用手机编程语言编写相关的短信程序，而这种方法不仅需要耗费时间和精力，还需要有相应的硬件设施，并且必须懂得手机编程的相关知识。可以通过Web Service技术远程访问现有的短信发送服务器，并通过调用服务器的方法来发送短信。


    技术要点：

    利用现有资源：一个可发送短信的Web Service远程服务。这个Web Service是新浪网站提供的，它可供用户直接调用远程服务来发送消息。这个服务的服务名称是SMSWS，服务端口是SMSWebServiceSoapPort。在这个远程服务中提供了一个发送短消息的方法sendXml()。此方法的定义如下：
    public String sendXml(String carrier,String id,String password,String toMobile,String message,String msgtype)
    功能：根据用户给定的参数发送短信到目标用户的手机中。
    参数说明：
    sendXml()方法中的6个参数均为String类型，sendXml()方法的返回值也是String类型。以下是sendXml()方法中的6个参数的具体说明。
    1）carrier:运营商名称，具体使用时此参数并没有什么具体要求，即这里面可以随便输入，输入的字符串不会在对方手机中有任何显示。
    2）id:在新浪网上注册的手机号。使用新浪服务发送手机短信时，需要在新浪网站上进行手机注册，注册网址为：http://sms.sina.com.cn。
    3）password:在新浪网成功注册手机后，新浪网所反馈来的密码。
    4）toMobile:对方接收短信的手机号码。
    5）message:所要发送短消息的内容。
    6）msgtype:发送短消息的类型，由于发送的不是彩信，所以输入Text。
    调用sendXml()方法需在Spring中配置JaxRpcPortProxyFactoryBean的实例，然后定义包含此方法的接口，Spring会自动获得远程服务的接口。


    实现过程：

    ApplicationContext ac = new ClassPathXmlApplicationContext("applicationContext.xml");
    SMSWebService sendSms = (SMSWebService)ac.getBean("helloWorldService");
    String carrier = "lzwsky";
    String id = userid.getText();
    String password = passwordField.getText();
    String toMobile = toMobileField.getText();
    String message = messageField.getText();
    String msgtype = "Text";
    sendSms.sendXml(carrier,id,password,toMobile,message,msgtype);


