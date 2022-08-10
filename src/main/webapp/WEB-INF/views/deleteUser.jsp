<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <link rel="stylesheet" href="css/update.css">
    <link rel="stylesheet" href="css/common.css">
    <title>회원 탈퇴</title>
</head>
<body>
<c:import url="/WEB-INF/views/header.jsp"></c:import>
<c:import url="/WEB-INF/views/searchResult.jsp"/>
<div class="wrap">
    <div class="_wrap">
        <%if (request.getParameter("check") != null) { %>
        <script>
            alert("회원정보를 확인하세요.");
        </script>

        <%}%>

        <%
            if (session.getAttribute("log") == null) {
                String url = "/";
                response.sendRedirect(url);
            } else {
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

            <h2 class="updateTitle">회원 탈퇴</h2>

            <form method="post" action="/removeUser">
                <div class="content">
                    <div class="updateUser">

                        <input type="hidden" name="log" value="<%=log%>">


                        <p class="_pw">비밀번호</p> <input type="password" name="user_pw" id="user_pw" required><br>
                    </div>
                    <div class="button">
                        <input type="submit" name="delete" value="탈퇴">
                    </div>

                </div>

            </form>

        </div>
    </div>
</div>
<script>$(document).ready(function () {
    getUser(<%=log%>);
})
</script>
<script src="js/user.js"></script>
<script src="./js/validation.js"></script>
<%
    }
%>
</body>
</html>