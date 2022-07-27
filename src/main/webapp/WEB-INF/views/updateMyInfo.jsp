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
    <h2>프로필 편집</h2>

    <%=userId%><br>

    <input type="button" name="updateMe" value="프로필 수정" onclick="location.href='/updateMyInfo'">
    <input type="button" name="updatePw" value="비밀번호 변경" onclick="location.href='/updateMyPw'">

    <form method="post" action="/update">
        <div class="content">
            <div class="updateUser">
                <div class="con1">
                    <p class="_name">이름</p> <input type="text" name="name" class="name" value="<%=name%>" placeholder="이름" required><br>
                </div>
                <div class="con2">
                    <p class="_email">이메일</p> <input type="email" name="email" class="email" value="<%=email%>" placeholder="이메일" required><br>
                </div>

                <input type="hidden" name="userPw" value="<%=userPw%>">

            </div>
            <div class="button">
                <input type="submit" name="update" value="수정">
            </div>

        </div>

    </form>

</body>
</html>
