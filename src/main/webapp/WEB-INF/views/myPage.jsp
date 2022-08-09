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
        response.sendRedirect(url);
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
                <div class="btn_" name="updateBtn_" onclick="location.href='/updateMyInfo'"><img class="updateImg" src="img/update.png"></div>
            </div>
            <span class="name"></span>
            <div class="follow">
                <div class="boardCnt"></div>
                <div class="followCnt"></div>
                <div class="followingCnt"></div>
            </div>
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
                    <input type="image" src="img/delBtn.png" class="del_btn" onclick=deleteBoardId()>
                </div>

                <div class="contents">
                    <a class="_contents"></a>
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
    myFollowCnt(<%=log%>);
    myCommentCount(<%=log%>);

})
</script>
<script src="js/myPage.js"></script>
<script src="js/validation.js"></script>
<script src="./js/writeJs.js"></script>
<script src="./js/eventJs.js"></script>
<script src="/js/follow.js"></script>
<%
    }
%>

</body>
</html>