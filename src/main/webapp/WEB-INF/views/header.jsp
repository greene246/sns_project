<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <link rel="stylesheet" href="css/header.css">
    <title>header</title>
</head>
<body>
  <div class="header">
      <a href="/main" id="logo">LOGO</a>
      <div class="topMenu">
          <input type="text" class="search" name="search" placeholder="검색">
          <p class="writeBoard" onclick="location.href='/writeBoard'">추가</p>
          <p class="myPage" onclick="location.href='/myPage'">마이페이지</p>

      </div>
  </div>

</body>
</html>
