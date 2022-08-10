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
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Black+And+White+Picture&family=Gowun+Dodum&family=Noto+Sans+KR:wght@100;300;400&display=swap">
    <link rel="stylesheet" href="css/index.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <title>Join</title>
</head>
<body>
<%if(request.getParameter("check")!= null){ %>
<script>
    alert("회원정보를 확인하세요.");
</script>

<%}%>
<div class="wrap">
    <div class="joinbox">
        <form id="join" method="post" action="/joinUser">
            <img src="img/logo.PNG" class="__logo">
            <h4 class="h4">친구들의 사진과 동영상을 보려면 가입하세요.</h4>
            <input type="text" name="user_id" id="user_id" placeholder="ID" class="req" required><br>
            <span style="display: none" name="msg_err" id="msg_err" class="msg">사용할 수 없는 아이디입니다.<br></span>
            <span style="display: none" name="msg_ok" id="msg_ok" class="msg">사용할 수 있는 아이디입니다.<br></span>
            <input type="password" name="user_pw" id="user_pw" placeholder="Password" class="req" required><br>
            <input type="text" name="name" id="name" placeholder="이름" class="req" required><br>
            <input type="email" name="email" id="email" placeholder="이메일" class="req" required><br>


            <input type="submit" value="회원가입"><br>
            <div class="hr-sect">또는</div>
            <input type="button" value="로그인 하러가기" onclick="location.href='/'">
        </form>
    </div>

<script src="js/user.js"></script>
<c:import url="/WEB-INF/views/footer.jsp"/>