<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Black+And+White+Picture&family=Gowun+Dodum&family=Noto+Sans+KR:wght@100;300;400&display=swap">
    <link rel="stylesheet" href="css/index.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <title>Index</title>
</head>
<body>
    <%if(request.getParameter("check")!= null){%>
<script>
    alert("회원정보를 확인하세요.");
</script>
    <%}%>
    <%
        if(session.getAttribute("log") != null) {
            String url = "/main";
            request.getRequestDispatcher(url).forward(request,response);
        }
%>


<div class="wrap">
    <div class="mainimg">
        <img class="main1" src="img/main1.png">
        <img class="main2" src="img/main2.png">
    </div>
    <div class="loginbox">
        <form id="login" method="post" action="/login">

            <img src="img/logo.PNG" class="_logo">
            <input type="text" name="user_id" id="user_id" placeholder="ID" class="req" required><br>
            <input type="password" name="user_pw" id="user_pw" placeholder="Password" class="req" required><br>

            <input type="submit" value="로그인"><br>

            <div class="hr-sect">또는</div>

            <input type="button" value="회원가입" onclick="location.href='/join'"/><br>
            <div class="a">
                <a class="fi" href="/findIdPage">아이디 찾기</a>,<a class="fp" href="/findPwPage">비밀번호 찾기</a>
            </div>
        </form>
    </div>
    <script src="js/validation.js"></script>
<c:import url="/WEB-INF/views/footer.jsp"/>