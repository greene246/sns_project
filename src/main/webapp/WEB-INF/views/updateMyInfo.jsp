<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <title>updateMyInfo</title>
</head>
<body>
<c:import url="/WEB-INF/views/header.jsp"></c:import>
    <h2>프로필 편집</h2>

<%--    이름, 비밀번호, 이메일--%>

    <form method="post" action="/update">
        <div class="updateUser">
            <input type="text" class="name" placeholder="이름" required><br>
            <input type="email" class="email" placeholder="이메일" required><br>
            <input type="password" class="password" placeholder="이전 비밀번호" required><br>
            <input type="password" class="password" placeholder="새 비밀번호" required><br>
            <input type="password" class="password" placeholder="새 비밀번호 확인" required>
        </div>
        <div class="button">
            <input type="submit" name="update" value="수정">
        </div>

    </form>

</body>
</html>
