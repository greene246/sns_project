<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2022-07-26
  Time: 오후 6:30
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Join</title>
</head>
<body>
<form method="post" action="/main">
    ID<input type="text" id="id" placeholder="id" required><br>
    <span style="display: none" id="msg_error">사용할 수 없는 아이디입니다.<br></span>
    <span style="display: none" id="msg_ok">멋진 아이디이네요!<br></span>
    PW<input type="password" id="password" placeholder="password" required><br>
    <input type="button" value="로그인" onclick="checkLogin()">
    <input type="button" value="회원가입" onclick="location.href='/join'"/>
</form>

<c:import url="/WEB-INF/views/footer.jsp"/>

<script src="script/validation.js"></script>
</body>
</html>
