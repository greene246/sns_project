<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <link rel="stylesheet" href="css/common.css">
    <link rel="stylesheet" href="css/myPage.css">
    <title>userPage</title>
</head>
<body>
<c:import url="/WEB-INF/views/header.jsp"></c:import>
    <%
        int log = (Integer) session.getAttribute("log");
    %>
<div class="wrap">
    <div class="myPageBody">
        <span class="img"><img src="./img/도라에몽.png"></span>

        <input type="button" class="followBtn" name="followBtn" value="팔로우">
        <input type="button" class="followingBtn" name="following" value="팔로잉">


    </div>
</div>

</body>
</html>
