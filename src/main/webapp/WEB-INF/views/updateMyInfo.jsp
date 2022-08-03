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


        <form method="post" action="/update">

<%--            table--%>
            <%--<input type="hidden" name="user_id" value="<%=user_id%>">
            <input type="hidden" name="user_pw" value="<%=user_pw%>">

            <table class="tableMyInfo">
                <tbody>
                    <tr>
                        <th><span class="_img">프로필 사진</span></th>
                        <td>
                            <span class="img"><img src="./img/cute.JPG"></span>
                            <input type="file">
                        </td>
                    </tr>
                    <tr>
                        <th><span class="_name">이름</span></th>
                        <td>
                            <input type="text" name="name" class="name" value="<%=name%>" placeholder="이름" required>
                        </td>
                    </tr>
                    <tr>
                        <th><span class="_email">이메일</span></th>
                        <td>
                            <input type="email" name="email" class="email" value="<%=email%>" placeholder="이메일" required>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="button">
                <input type="submit" name="update" value="수정">
            </div>--%>


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
