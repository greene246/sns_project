<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2022-07-26
  Time: 오후 6:30
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
  <title>JOIN</title>
</head>
<body>
<form id="join" method="post" action="/joinUser">
  ID<input type="text" name="user_id" class="user_id" placeholder="ID" required><br>
  <span style="display: none" name="msg_err" id="msg_err">사용할 수 없는 아이디입니다.<br></span>
  <span style="display: none" name="msg_ok" id="msg_ok">사용할 수 있는 아이디입니다.<br></span>
  PW<input type="password" name="user_pw" id="user_pw" placeholder="Password" required><br>
  이름<input type="text" name="name" id="name" placeholder="이름" required><br>
  E-mail<input type="email" name="email" id="email" placeholder="이메일" required><br>


  <input type="submit" value="회원가입"><br>
  <input type="button" value="로그인 하러가기" onclick="location.href='/'">


</form>
<script src="js/user.js"></script>
</body>
</html>