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
    <link rel="stylesheet" href="css/index.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <title>Index</title>
</head>
<body>

<div class="wrap">
    <div class="mainimg">
        <img class="main" src="/img/cute.JPG">

    </div>
    <div class="loginbox">
        <form id="login" method="post" action="/login">

            <h3>몬스타그램</h3>
            <input type="text" name="user_id" id="user_id" placeholder="ID" class="req" required><br>
            <input type="password" name="user_pw" id="user_pw" placeholder="Password" class="req" required><br>

            <input type="submit" value="로그인"><br>

            <div class="hr-sect">또는</div>

            <input type="button" value="회원가입" onclick="location.href='/join'"/>
        </form>
    </div>
<%--<c:import url="/WEB-INF/views/footer.jsp"/>--%>
</div>
<script src="js/user.js"></script>

</body>
</html>
