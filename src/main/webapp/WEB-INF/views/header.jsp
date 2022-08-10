<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Gowun+Dodum&display=swap');
</style>
<html>
<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Black+And+White+Picture&family=Gowun+Dodum&family=Noto+Sans+KR:wght@100;300;400&display=swap">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <script type="text/javascript" src="https://service.iamport.kr/js/iamport.payment-1.1.5.js"></script>
    <link rel="stylesheet" href="css/header.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/common.css">
    <title>Main</title>
    <title>header</title>
</head>
    <%
        if(session.getAttribute("log") == null) {
            String url = "/";
            request.getRequestDispatcher(url).forward(request, response);
        }
        else {
            int log = (Integer) session.getAttribute("log");

    %>
<body id="body">
    <div class="header">
        <div class="header_contents_wrap">
            <a href="/main" id="logo"><img src="img/logo.PNG" style="height: 36px"></a>
            <div class="search_area">
                <input type="text" class="search" name="search" placeholder="아이디를 검색하세요">
                <input type="button" value="찾기" id="search_btn">
            </div>
            <div class="topMenu">
                <a onclick="file_upload_pop(<%=log%>)">
                    <p class="writeBoard"><img class="header_img" src="img/add.jpg"></p>
                </a>
                <p class="myPage" onclick="location.href='/myPage'"><img class="header_img" src="img/myPage.png"></p>
                <p class="logout" onclick="location.href='/logout'">로그아웃</p>
            </div>
        </div>
    </div>
<%}%>