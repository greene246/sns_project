<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <link rel="stylesheet" href="css/common.css">
    <link rel="stylesheet" href="css/myPage.css">
    <title>myPage</title>
</head>
<%
    if (session.getAttribute("log") == null) {
        String url = "/";
        request.getRequestDispatcher(url).forward(request, response);
    } else {
        int log = (Integer) session.getAttribute("log");
%>
<body>
<c:import url="/WEB-INF/views/header.jsp"></c:import>
<div class="wrap">
    <div class="myPageBody">

        <div class="thumbnail"></div>
        <div class="_userIdName">
            <div class="_userIdBtn">
                <span class="user_id"></span>
                <input type="button" class="btn" name="updateBtn" value="프로필 편집"
                       onclick="location.href='/updateMyInfo'"><br>
            </div>
            <span class="name"></span>
        </div>

    </div>

    <div class="myPageContent"></div>

    <div class="black">

        <c:import url="/WEB-INF/views/writeForm.jsp"/>

        <div class="contents_detail">
            <input type="hidden" value="" id="detail_board_id">
            <div class="detail_img">
                <img src="" id="detail_img_main">
            </div>
            <div class="detail_comments">
                <div class="comments_owner">
                    <span id="profile_img_wrap"><div class="_thumbnail"></div></span>
                    <div class="_user_id"></div>
                </div>
                <div class="all_comments">

                </div>
                <div class="input_comments">
                    <input type="text" placeholder="댓글달기" id="detail_comments_val">
                    <input type="button" value="댓글" onclick="upload_comments(<%=log%>, '', 'comments_${Board.id}')">
                </div>
            </div>
        </div>
    </div>

</div>

<script>$(document).ready(function () {
    myPageUser(<%=log%>);
})
</script>
<script src="./js/myPage.js"></script>
<script src="./js/validation.js"></script>
<script src="./js/writeJs.js"></script>
<script src="./js/eventJs.js"></script>
<%
    }
%>

</body>
</html>
