<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page import="com.example.sns.sns_project.domain.BoardVO" %>
<%@ page import="java.util.List" %>
<%@ page import="com.example.sns.sns_project.controller.BoardController" %>

<c:import url="/WEB-INF/views/header.jsp"/>
<div class="main_wrap">
    <%
        String id = (String) session.getAttribute("user_id");
    %>
    <div class="all_contents">
        <div class="section">
            <!-- 프로필 박스 -->
            <div class="profile_box">
                <span style="width: 100px"><img src="/img/cute.JPG" id="profile_img"></span>
                <div id="userid">
                    <a><%=id%></a>
                </div>
            </div>

           <span id="main_img"><div class="main2" id="contents_img"></div></span>

            <!-- icon 모음 -->
            <div class="icon">
                <!-- 좋아요 / 댓글 / 디엠 -->
                <div class="three">
                    <img src="./img/heart.png" class="icon_img">
                    <%--<img src="./img/message.png">--%>
                    <a href="javascript:;" onclick="javascript:showPopup()">
                        <img src="./img/message.png" onclick="javascript:black_block()" class="icon_img">
                    </a>
                    <img src="./img/direct.png" class="icon_img">
                </div>
                <!-- 북마크 -->
                <span><img src="./img/bookmark_off.png" class="icon_img"></span>
            </div>
            <span class="word"> 좋아요 <%=1%>개</span>
            <span class="id"><%=id%></span>

            <div class="contents">
                편하긴 엄청 편합니다. 단지 발볼이 조금 넓으신 분들은 신으실때 불편할수도...? 신다보면 괜찮을거같아요 편하긴 엄청 편합니다. 단지 발볼이 조금 넓으신 분들은 신으실때
                불편할수도...? 신다보면 괜찮을거같아요 다보면 괜찮을거 다보면 괜찮을거
            </div>
        </div>
    </div>

    <div class="serve_section">
        serve

    </div>

    <div class="black" onclick="javascript:cancel()"></div>
    <div class="contents_detail" style="display: none">
        <div class="detail_img">
            <img src="/img/cute.JPG">
        </div>
        <div class="detail_coments">
            <h1>test 댓글창</h1>
        </div>
    </div>
    <c:import url="/WEB-INF/views/writeForm.jsp"/>
</div>
</div>
<script src="./js/validation.js"></script>

<script src="./js/main.js"></script>
<script type="text/javascript">
    $(document).ready(function() {
        getBoards(0);
        getBoards(1);
    });
</script>
</body>
<html>