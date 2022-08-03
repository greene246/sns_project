<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <link rel="stylesheet" href="css/common.css">
    <link rel="stylesheet" href="css/myPage.css">
    <title>myPage</title>
</head>
<body>

<c:import url="/WEB-INF/views/header.jsp"></c:import>
<%
    int log = (Integer) session.getAttribute("log");

    if(session.getAttribute("user_id") == null) {
        String url = "/";
        request.getRequestDispatcher(url).forward(request, response);
    }
%>
<div class="wrap">
    <div class="myPageBody">
        <%--        <%=user_id%><br>--%>

        <span class="img"><img src="./img/cute.JPG"></span>
        <span class="user_id"></span>
        <span class="name"></span>

        <input type="button" class="btn" name="updateBtn" value="프로필 편집" onclick="location.href='/updateMyInfo'"><br>
        myPage 입니다.
    </div>

    <div class="myPageContent">

    </div>
</div>
<script src="js/user.js">$(document).ready(getUser(<%=log%>))</script>
</body>
</html>
