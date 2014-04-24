---
layout: post
title: tomcat报错的各种情况
---

## tomcat报错的各种情况

1. can't load .... jar文件

一般是因为项目中的lib下的jar包跟tomcat下的lib下的jar包有重复，用lib下的重复或者冲突的jar包代替tomcat下的jar包或者删除项目中lib下重复或者冲突的jar包（如果可以的话）


2. tomcat5下jsp出现getOutputStream() has already been called for for this response

    在tomcat5下jsp中出现此错误一般都是在jsp中使用了输出流（如输出图片验证码，文件下载等），
    没有妥善处理好的原因。
    具体的原因就是
    在tomcat中jsp编译成servlet之后在函数_jspService(HttpServletRequest request, HttpServletResponse response)的最后
    有一段这样的代码
    finally {
          if (_jspxFactory != null) _jspxFactory.releasePageContext(_jspx_page_context);
        }
    这里是在释放在jsp中使用的对象，会调用response.getWriter(),因为这个方法是和
    response.getOutputStream()相冲突的！所以会出现以上这个异常。
    然后当然是要提出解决的办法，其实挺简单的（并不是和某些朋友说的那样--
    将jsp内的所有空格和回车符号所有都删除掉），
    在使用完输出流以后调用以下两行代码即可：
    out.clear();
    out = pageContext.pushBody();
    最后这里是一个输出彩色验证码例子（这样的例子几乎随处可见）
    imag.jsp
    <%@ page  import="java.awt.*,java.awt.image.*,java.util.*,javax.imageio.*" %>
    <%@ page import="java.io.OutputStream" %>
    <%!
    Color getRandColor(int fc,int bc){
    Random random = new Random();
    if(fc>255) fc=255;
    if(bc>255) bc=255;
    int r=fc+random.nextInt(bc-fc);
    int g=fc+random.nextInt(bc-fc);
    int b=fc+random.nextInt(bc-fc);
    return new Color(r,g,b);
    }
    %>
    <%
    try{
    response.setHeader("Pragma","No-cache");
    response.setHeader("Cache-Control","no-cache");
    response.setDateHeader("Expires", 0);
    int width=60, height=20;
    BufferedImage image = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);
    OutputStream os=response.getOutputStream();
    Graphics g = image.getGraphics();
    Random random = new Random();
    g.setColor(getRandColor(200,250));
    g.fillRect(0, 0, width, height);
    g.setFont(new Font("Times New Roman",Font.PLAIN,18));
    g.setColor(getRandColor(160,200));
    for (int i=0;i<155;i++)
    {
    int x = random.nextInt(width);
    int y = random.nextInt(height);
    int xl = random.nextInt(12);
    int yl = random.nextInt(12);
    g.drawLine(x,y,x+xl,y+yl);
    }
    String sRand="";
    for (int i=0;i<4;i++){
    String rand=String.valueOf(random.nextInt(10));
    sRand+=rand;
    g.setColor(new Color(20+random.nextInt(110),20+random.nextInt(110),20+random.nextInt(110)));
    g.drawString(rand,13*i+6,16);
    }
    session.setAttribute("rand",sRand);
    g.dispose();
    ImageIO.write(image, "JPEG",os);
    os.flush();
    os.close();
    os=null;
    response.flushBuffer();
    out.clear();
    out = pageContext.pushBody();
    }
    catch(IllegalStateException e)
    {
    System.out.println(e.getMessage());
    e.printStackTrace();
    }%>
