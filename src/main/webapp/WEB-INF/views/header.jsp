<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Black+And+White+Picture&family=Gowun+Dodum&family=Noto+Sans+KR:wght@100;300;400&display=swap"
      rel="stylesheet">
<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <script type="text/javascript" src="https://service.iamport.kr/js/iamport.payment-1.1.5.js"></script>
    <link rel="stylesheet" href="css/header.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/common.css">
    <title>Main</title>
    <title>header</title>
</head>
<body>
<div id="total_wrap">
    <div class="header">
        <div class="header_contents_wrap">
            <a href="/main" id="logo">LOGO</a>
            <div class="topMenu">
                <input type="text" class="search" name="search" placeholder="검색">
                <a href="javascript:;" onclick="showWriteForm()",>
                    <p class="writeBoard">추가</p>
                </a>
                <p class="myPage" onclick="location.href='/myPage'">마이페이지</p>
                <p class="logout" onclick="location.href='/logout'">로그아웃</p>
            </div>
        </div>
    </div>