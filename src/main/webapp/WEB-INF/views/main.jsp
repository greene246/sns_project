<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<c:import url="/WEB-INF/views/header.jsp"/>
    <%
        if(session.getAttribute("log") == null) {
            String url = "/";
            response.sendRedirect(url);
        }
        else {
            int log = (Integer) session.getAttribute("log");

    %>

<div class="main_wrap">
    <div class="all_contents">
    <div class="main_section">

    </div>

    <div class="serve_section">
        serve
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
                    <span id="profile_img_wrap"><img class="detail_profile_img"></span>
                    <a class="detail_user_id"></a>
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


<script src="./js/validation.js"></script>
<script src="./js/main.js"></script>
<script src="./js/writeJs.js"></script>
<script src="./js/eventJs.js"></script>
<script>
    getBoards(0,<%=log%>);
</script>
</body>
</html>
<%}%>
