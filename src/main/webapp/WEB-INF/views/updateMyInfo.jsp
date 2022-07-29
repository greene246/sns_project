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
        String user_id = (String) session.getAttribute("user_id");
        String name = (String) session.getAttribute("name");
        String email = (String) session.getAttribute("email");
        String user_pw = (String) session.getAttribute("user_pw");
    %>
    <div class="menu">
        <div>
            <p class="updateMe" onclick="location.href='/updateMyInfo'">내 프로필</p>
            <p class="updatePw" onclick="location.href='/updateMyPw'">비밀번호 변경</p>
        <%--<input type="button" name="updateMe" value="내 프로필" onclick="location.href='/updateMyInfo'">
        <input type="button" name="updatePw" value="비밀번호 변경" onclick="location.href='/updateMyPw'">--%>
        </div>
    </div>

    <h2>프로필 편집</h2>

    <%=user_id%><br>

    <%--<table>
        <tr>
            <thead>
                이름
            </thead>
            <td>
                <input type="text" name="name" class="name" value="<%=name%>" placeholder="이름" required>
            </td>
        </tr>
    </table>--%>
    <form method="post" action="/update" onsubmit="updateCheck()">
        <div class="content">
            <div class="updateUser">

                <input type="hidden" name="user_id" value="<%=user_id%>">

                <div class="con1">
                    <div class="_name">이름</div> <input type="text" name="name" class="name" value="<%=name%>" placeholder="이름" required><br>
                </div>
                <div class="con2">
                    <div class="_email">이메일</div> <input type="email" name="email" class="email" value="<%=email%>" placeholder="이메일" required><br>
                </div>

                <input type="hidden" name="user_pw" value="<%=user_pw%>">

            </div>
            <div class="button">
                <input type="submit" name="update" value="수정">
            </div>
        </div>
    </form>
</div>
</body>
<script src="js/update.js"></script>
</html>
