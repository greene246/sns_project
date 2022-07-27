<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html>
<head>
    <link rel="stylesheet" href="css/index.css">
    <title>index</title>
</head>
<body>
   <%-- <jsp:include page="header.jsp"></jsp:include> --%>

    <form method = "post" action="/login">

        <input class="req1" name = "id" type="text" placeholder="id" title="아이디를 입력하세요" required >
        <input class="req2" name = "password" type="text" placeholder="password" title="비밀번호를 입력하세요" required ><br><br>

        <div class="buttons">
            <input type="button" onclick="location.href='./join'" value="회원가입">
            <input type="submit" value="로그인" >
        </div>

    </form>

    <script src="./script/validation.js"></script>

