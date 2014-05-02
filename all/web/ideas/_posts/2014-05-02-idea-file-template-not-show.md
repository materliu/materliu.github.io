---
layout: post
title: 创建的file template 在新建文件的列表中没有
---
    
# 创建的file template 在新建文件的列表中没有

已经创建好的file template，在新建文件的列表中却没有，原因有三个：

1. The template is associated with a facet that your module doesn't have. In such a case, you may want to add the corresponding facet to your module.

2. The corresponding file type is inappropriate for the current location. For example, you may be trying to create a Java class outside of Java source or test directory which is not possible.

3. The template you are looking for is a custom template whose file name
extension (template extension) does not match registered patterns of any of the recognized file types. In such a case, you may want to register the corresponding pattern for an existing recognized file type or add a new file type and register the corresponding pattern for this new type. For more information, see Creating and Registering File Types.

像我遇到的这种情况就是，把markdown的插件去掉后，创建的jekyll md的模板就不会出现在新建文件的列表中了，原因就是上边的第三条，所以新增一种filetype类型就好了， 具体做法是：

1. Open the IDE Settings by choosing File | Settings | IDE Settings . Then select File Types. Find more on page Accessing the IDE Settings.

2. On the File Types page that opens, click the Add button add.

3. In the New File Type dialog box that opens, specify the name of the new type
 and optionally provide a description.

4. In the Syntax Highlighting section, specify the characters for line and block comments, hex prefixes, and number postfixes.

5. In the Keywords section, specify sets of keywords using the tabs from 1 to 4
. To do so, select the desired tab, click add (Alt+Insert), and enter the keyword name in the Add New Keyword dialog box that opens.

Tip

Each set of keywords has its own highlighting. You can change the highlighting color scheme for each set, on the Colors and Fonts settings page. Click the Custom tab and edit the Keyword1, Keyword2, Keyword3, and Keyword4 properties.