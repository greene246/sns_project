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

    <input type="hidden" value="cntBoards()">
    <div class="all_contents">
<%--        <div class="section">--%>
<%--            <!-- 프로필 박스 -->--%>
<%--            <div class="profile_box">--%>
<%--                <span style="width: 100px"><img src="/img/cute.JPG" id="profile_img"></span>--%>
<%--                <div id="userid">--%>
<%--                    <a><%=id%></a>--%>
<%--                </div>--%>
<%--            </div>--%>

<%--           <span id="main_img" src=""></span>--%>

<%--            <!-- icon 모음 -->--%>
<%--            <div class="icon">--%>
<%--                <!-- 좋아요 / 댓글 / 디엠 -->--%>
<%--                <div class="three">--%>
<%--                    <img src="./img/heart.png" class="icon_img">--%>
<%--                    &lt;%&ndash;<img src="./img/message.png">&ndash;%&gt;--%>
<%--                    <a href="javascript:;" onclick="javascript:showPopup()">--%>
<%--                        <img src="./img/message.png" onclick="javascript:black_block()" class="icon_img">--%>
<%--                    </a>--%>
<%--                    <img src="./img/direct.png" class="icon_img">--%>
<%--                </div>--%>
<%--                <!-- 북마크 -->--%>
<%--                <span><img src="./img/bookmark_off.png" class="icon_img"></span>--%>
<%--            </div>--%>
<%--            <span class="word"> 좋아요 <div class="main2" id="likeCnt"></div>개</span>--%>
<%--            <span class="id"><%=id%></span>--%>

<%--            <div class="main3" id="contents"></div>--%>
<%--            <div class="main4" id="createdAt"></div>--%>
<%--        </div>--%>
<%--    </div>--%>

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
<script>
    getBoards(0);
</script>
</body>
<html>