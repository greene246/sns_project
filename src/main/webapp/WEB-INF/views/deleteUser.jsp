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
<div class = "wrap">
    <%
        String user_id = (String) session.getAttribute("user_id");
        String name = (String) session.getAttribute("name");
        String email = (String) session.getAttribute("email");
        String user_pw = (String) session.getAttribute("user_pw");
    %>
    <div class="menu">
        <div>
            <p class="updateMe" onclick="location.href='/updateMyInfo'">내 프로필</p>
            <p class="updatePw" onclick="location.href='/updateMyPw'">비밀번호 변경</p>
            <p class="deleteUser" onclick="location.href='/deleteUser'">회원탈퇴</p>
        </div>
    </div>

    <h2 class="updateTitle">회원 탈퇴</h2>

    <%=user_id%><br>

    <form method="post" action="/deleteUser">
        <div class="content">
            <div class="updateUser">

                <input type="hidden" name="name" value="<%=name%>">
                <input type="hidden" name="email" value="<%=email%>">
                <input type="hidden" name="user_id" id="user_id" value="<%=user_id%>">


                <p class="_pw">비밀번호</p> <input type="password" name="user_pw" id="user_pw" required><br>
                <span style="display: none" id="msg_error">비밀번호가 일치하지 않습니다.</span>
            </div>
            <div class="button">
                <input type="submit" name="delete" value="탈퇴">
            </div>

        </div>

    </form>
</div>
</body>
</html>
