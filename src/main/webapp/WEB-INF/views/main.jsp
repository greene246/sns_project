<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Black+And+White+Picture&family=Gowun+Dodum&family=Noto+Sans+KR:wght@100;300;400&display=swap" rel="stylesheet">

<html>
<head>
    <link rel="stylesheet" href="css/main.css">
    <title>Main</title>

</head>
<body>
    <c:import url="/WEB-INF/views/header.jsp"/>

<div class="wrap">

    <div class="section">

        <div class="box">
            <img class="profile" src="/img/cute.JPG">
            <a class="userid"> user id</a>
        </div>

        <img src="./img/backpic.jpg">
        <div class="icon">
            <div class="three">
            <img src="./img/heart.png">
            <img src="./img/message.png">
            <img src="./img/direct.png">

            </div>
            <div class="bookmark">
                <img src="./img/bookmark_off.png">
            </div>
        </div>
        <div class="word"> 좋아요 <%=1%>개</div>
        <div>회원 아이디</div>
        <div>contents</div>
    </div>

    <div class="serve">

    </div>

</div>

<html>