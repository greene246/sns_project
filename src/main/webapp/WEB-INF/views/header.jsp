<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <link rel="stylesheet" href="css/header.css">
    <title>header</title>
</head>
<body>
<div class="header">
    <a href="/main" id="logo">LOGO</a>
    <input type="text" class="search" name="search" placeholder="검색">
    <div class="topMenu">
        <p class="writeForm" onclick="location.href='/writeForm'"><img src="image/add.jpg"></p>
        <p class="myPage" onclick="location.href='/myPage'"><img src="image/myPage.png"></p>
    </div>
</div>

</body>
</html>