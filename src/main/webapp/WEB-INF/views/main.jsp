<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<c:import url="/WEB-INF/views/header.jsp"/>

<div class="main_wrap">

    <input type="hidden" value="cntBoards()">
    <div class="all_contents">
    <%
        if(session.getAttribute("log") == null) {
            String url = "/";
            request.getRequestDispatcher(url).forward(request, response);
        }
        else {
            int log = (Integer) session.getAttribute("log");

    %>

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
    getBoards(0,<%=log%>);
</script>
<%
    }
%>
</body>
<html>