<<<<<<< HEAD
<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2022-07-26
  Time: 오후 6:29
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<form method="post" action="/main">
    ID<input type="text" id="userId" placeholder="ID" required><br>
    PW<input type="password" id="userPw" placeholder="Password" required><br>
    <input type="button" value="로그인" onclick="checkUser()">
    <input type="button" value="회원가입" onclick="location.href='/join'"/>
</form>

<%--<c:import url="/WEB-INF/views/footer.jsp"/>--%>

<script src="script/validation.js"></script>

</body>
</html>
