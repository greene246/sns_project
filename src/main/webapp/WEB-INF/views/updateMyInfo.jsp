<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <link rel="stylesheet" href="css/update.css">
    <link rel="stylesheet" href="css/common.css">
    <title>updateMyInfo</title>
</head>
<body>
<c:import url="/WEB-INF/views/header.jsp"></c:import>
<div class="wrap">
    <%
        if(session.getAttribute("log") == null) {
            String url = "/";
            request.getRequestDispatcher(url).forward(request, response);
        }
        else {
            int log = (Integer) session.getAttribute("log");
    %>
    <div class="menu">
        <div>
            <p class="updateMe" onclick="location.href='/updateMyInfo'">내 프로필</p>
            <p class="updatePw" onclick="location.href='/updateMyPw'">비밀번호 변경</p>
            <p class="deleteUser" onclick="location.href='/deleteUser'">회원탈퇴</p>
        </div>
    </div>

    <div id="myContent">
        <div class="c_header">
            <h2 class="updateTitle">프로필 편집</h2>
            <div class="user_id"></div><br>
        </div>

        <div class="update_user">

        </div>

    </div>

</div>

<script>$(document).ready(function(){
    updateUser(<%=log%>);
})
</script>
<script src="js/update.js"></script>
<%
    }
%>

</body>
</html>