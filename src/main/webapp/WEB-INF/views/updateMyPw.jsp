<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <link rel="stylesheet" href="css/update.css">
    <title>updateMyInfo</title>
</head>
<body>
<c:import url="/WEB-INF/views/header.jsp"></c:import>
<%
    String user_id = (String) session.getAttribute("user_id");
    String name = (String) session.getAttribute("name");
    String email = (String) session.getAttribute("email");
    String user_pw = (String) session.getAttribute("user_pw");
%>
    <h2>비밀번호 변경</h2>

    <%=user_id%><br>

    <input type="button" name="updateMe" value="프로필 수정" onclick="location.href='/updateMyInfo'">
    <input type="button" name="updatePw" value="비밀번호 변경" onclick="location.href='/updateMyPw'">

    <form method="post" action="/updatePw">
        <div class="content">
            <div class="updateUser">

                <input type="hidden" name="name" value="<%=name%>">
                <input type="hidden" name="email" value="<%=email%>">
                <input type="hidden" name="user_id" id="user_id" value="<%=user_id%>">

                <p class="_pw">이전 비밀번호</p> <input type="password" name="pw_past" id="pw_past" required><br>
                    <span style="display: none" id="msg_err">비밀번호를 확인하세요</span>
                <p class="_pw">새 비밀번호</p> <input type="password" name="pw_new" id="pw_new" required><br>
                <p class="_pw">비밀번호 재확인</p> <input type="password" name="pw_check" id="pw_check" required><br>
                    <span style="display: none" id="msg_error">비밀번호가 일치하지 않습니다.</span>
            </div>
            <div class="button">
                <input type="submit" name="update" value="수정">
            </div>

        </div>

    </form>
<script src="./js/validation.js"></script>
</body>
</html>
