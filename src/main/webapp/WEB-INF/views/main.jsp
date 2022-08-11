<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<c:import url="/WEB-INF/views/header.jsp"/>
<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Black+And+White+Picture&family=Gowun+Dodum&family=Noto+Sans+KR:wght@100;300;400&display=swap">
    <style>
        *{
            font-family: 'Noto Sans KR', sans-serif;
        }
    </style>
</head>
<body>
    <%
        if(session.getAttribute("log") == null) {
            String url = "/";
            response.sendRedirect(url);
        }
        else {
            int log = (Integer) session.getAttribute("log");

    %>
<c:import url="/WEB-INF/views/searchResult.jsp"/>
</div>
<div class="main_wrap">
    <div class="all_contents">
        <div class="main_section"></div>
        <div class="serve_section"></div>
    </div>
</div>
</div>
<div class="black">
    <c:import url="/WEB-INF/views/writeForm.jsp"/>

    <div class="contents_detail">
        <input type="hidden" value="" id="detail_board_id">
        <div class="detail_img">
            <img src="" id="detail_img_main">
        </div>
        <div class="detail_comments">
            <div class="comments_owner">
                <div class="comments_owner_section">
                    <span id="profile_img_wrap"><img class="detail_profile_img" onclick="location.href='/'"></span>
                    <a class="detail_user_id"></a>
                </div>
                <div class="del_btn_section"></div>
            </div>

            <div class="contents">
                <a class="_contents"></a>
            </div>

            <div class="all_comments">

            </div>
            <div class="input_comment">
                <textarea type="text" placeholder="친구와 소통해보세요! (300자 이내)" id="detail_comments_val"></textarea>
                <input class="detail_btn" type="button" value="댓글" onclick="upload_comments_in_detail(<%=log%>)">
            </div>
        </div>
    </div>
</div>


<script src="./js/validation.js"></script>
<script src="./js/main.js"></script>
<script src="./js/writeJs.js"></script>
<script src="./js/eventJs.js"></script>
<script>
    pageCnt(<%=log%>);
    serveShow(<%=log%>);
    getBoards(<%=log%>)
    <%}%>
</script>
</body>
</html>

