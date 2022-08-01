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
            <p class="deleteUser" onclick="location.href='/deleteUser'">회원탈퇴</p>
        </div>
    </div>

    <div id="myContent">
        <div class="c_header">
            <h2 class="updateTitle">프로필 편집</h2>
            <div class="myId"><%=user_id%><br></div>
        </div>


        <form method="post" action="/update">
<%--            <input type="hidden" name="user_id" value="<%=user_id%>">--%>
<%--            <input type="hidden" name="user_pw" value="<%=user_pw%>">--%>

            <%--<table class="tableMyInfo">
                <thead>
                    <th>이름</th>
                    <th>이메일</th>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type="text" name="name" class="name" value="<%=name%>" placeholder="이름" required>
                        </td>
                        <td>
                            <input type="email" name="email" class="email" value="<%=email%>" placeholder="이메일" required>
                        </td>
                    </tr>
                </tbody>
            </table>--%>


            <div class="content">
                <div class="updateUser">

                    <input type="hidden" name="user_id" value="<%=user_id%>">

                        <p class="_name">이름</p> <input type="text" name="name" class="name" value="<%=name%>" placeholder="이름" required><br>
                        <p class="_email">이메일</p> <input type="email" name="email" class="email" value="<%=email%>" placeholder="이메일" required><br>

                    <input type="hidden" name="user_pw" value="<%=user_pw%>">

                </div>
                <div class="button">
                    <input type="submit" name="update" value="수정">
                </div>
            </div>

        </form>

    </div>

</div>
</body>
<script src="js/update.js"></script>
</html>
