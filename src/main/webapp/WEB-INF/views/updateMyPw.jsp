<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <link rel="stylesheet" href="css/update.css">
    <title>updateMyInfo</title>
</head>
<body>
<c:import url="/WEB-INF/views/header.jsp"></c:import>
<%
    String userId = (String) session.getAttribute("userId");
    String name = (String) session.getAttribute("name");
    String email = (String) session.getAttribute("email");
    String userPw = (String) session.getAttribute("userPw");
%>
    <h2>비밀번호 변경</h2>

    <%=userId%><br>

    <input type="button" name="updateMe" value="프로필 수정" onclick="location.href='/updateMyInfo'">
    <input type="button" name="updatePw" value="비밀번호 변경" onclick="location.href='/updateMyPw'">

    <form method="post" action="/update">
        <div class="content">
            <div class="updateUser">

                <input type="hidden" name="name" value="<%=name%>">
                <input type="hidden" name="email" value="<%=email%>">

                <p class="_pw">이전 비밀번호</p> <input type="password" class="password" required><br>
                <p class="_pw">새 비밀번호</p> <input type="password" name="userPw" class="password" required><br>
                <p class="_pw">새 비밀번호 확인</p> <input type="password" name="userPw" class="password" required>
            </div>
            <div class="button">
                <input type="submit" name="update" value="수정">
            </div>

        </div>

    </form>

</body>
</html>
