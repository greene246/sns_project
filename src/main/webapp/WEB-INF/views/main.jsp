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
        <div class="main_section"></div>
        <div class="serve_section"></div>
    </div>

    <div class="black" onclick="javascript:cancel()"></div>
    <div class="contents_detail" style="display: none">
        <div class="detail_img">
            <img src=${Board.img_url}>
            <!--  <img src="/img/cute.JPG">-->
        </div>
        <div class="detail_coments">
            <h1>test 댓글창</h1>
        </div>
    </div>

    <c:import url="/WEB-INF/views/writeForm.jsp"/>
</div>
<script src="./js/validation.js"></script>
<script src="./js/main.js"></script>
<script>
    getBoards(0,<%=log%>);
    getBoards(1,<%=log%>);
    serveShow(<%=log%>);
</script>
<%}%>
</body>
</html>