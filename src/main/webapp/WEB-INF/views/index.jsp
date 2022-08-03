
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <title>Index</title>
</head>
<body>
<form id="login" method="post" action="/login">
    ID<input type="text" name="user_id" id="user_id" placeholder="ID" required><br>
    PW<input type="password" name="user_pw" id="user_pw" placeholder="Password" required><br>

    <input type="submit" value="로그인">
    <input type="button" value="회원가입" onclick="location.href='/join'"/>
</form>


<script src="js/user.js"></script>

</body>
</html>