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
    String user_id = (String) session.getAttribute("user_id");
    String name = (String) session.getAttribute("name");
    String user_pw = (String) session.getAttribute("user_pw");
%>
<div class="wrap">
    <div class="myPageBody">
        <%--        <%=user_id%><br>--%>

        <span class="img"><img src="./img/cute.JPG"></span>
        <span class="user_id"><%=user_id%></span>
        <span class="name"><%=name%></span>

        <input type="button" class="btn" name="updateBtn" value="프로필 편집" onclick="location.href='/updateMyInfo'"><br>
        myPage 입니다.
    </div>

    <div class="myPageContent">

    </div>
</div>
</body>
</html>
