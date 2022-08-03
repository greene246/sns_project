<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<c:import url="/WEB-INF/views/header.jsp"/>
<div class="main_wrap">

    <%
        if (session.getAttribute("log") == null) {
            String url = "/";
            request.getRequestDispatcher(url).forward(request, response);
        }
    %>
    <div class="all_contents">
        <div class="section">
            <!-- 프로필 박스 -->
            <div class="profile_box">
                <span id="profile_img_wrap"><img src="/img/cute.JPG" id="profile_img"></span>
                <div id="userid">


                </div>
            </div>
            <span id="main_img"><img src="https://i.ibb.co/tZ52Dmf/image.png" class="contents_img"></span>
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
            <span class="id"></span>
            <%--<div class="contents">집에 가고싶다 집에 보내줘 샹sssssssssssssssssssssssssssssssssssssssss</div>--%>

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
            <img src="/img/cute.JPG" class="contents_img">
        </div>
        <div class="detail_coments">
            <h1>test 댓글창</h1>
        </div>
    </div>
    <c:import url="/WEB-INF/views/writeForm.jsp"/>
</div>
</div>
<script src="./script/validation.js"></script>
<script type="text/javascript"></script>
<script src="./script/writeJs.js"></script>
</body>
<html>
