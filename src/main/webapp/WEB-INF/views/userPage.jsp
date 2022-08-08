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
<%
    int log = (Integer) session.getAttribute("log");
    String user_id = (String) request.getParameter("user_id");
%>
<c:import url="/WEB-INF/views/header.jsp"></c:import>
<div class="wrap">
    <c:import url="/WEB-INF/views/writeForm.jsp"/>

    <div class="pageBody">

        <div class="myPageBody">
            <input type="hidden" value="" id="detail_board_id">

            <div class="thumbnail"></div>
            <div class="_userIdName">
                <div class="_userIdBtn">
                    <div class="user_id"></div>
                    <div class="btn">
                        <input type="button" class="followBtn" name="followBtn" value="팔로우">
                        <input type="button" class="followingBtn" name="following" value="팔로잉">
                    </div>
                </div>
                <div class="name"></div>
            </div>

        </div>

        <div class="userPageContent"></div>
    </div>

</div>

<script>$(document).ready(function () {
    userPageUser(<%=log%>, '<%=user_id%>');
})
</script>
<script src="js/userPage.js"></script>
<script src="js/validation.js"></script>
</body>
</html>
