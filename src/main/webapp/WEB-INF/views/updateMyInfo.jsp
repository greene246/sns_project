<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <link rel="stylesheet" href="css/update.css">
    <link rel="stylesheet" href="css/common.css">
    <title>updateMyInfo</title>
</head>
<%
    if (session.getAttribute("log") == null) {
        String url = "/";
        request.getRequestDispatcher(url).forward(request, response);
    } else {
        int log = (Integer) session.getAttribute("log");
%>
<body>
<c:import url="/WEB-INF/views/header.jsp"></c:import>
<div class="wrap">
    <div class="_wrap">
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
                <div class="user_id"></div>
                <br>
            </div>

            <div id="updateMyContent">

                <form method="post">
                    <input type="hidden" name="user_id" id="user_id" value="">

                    <div class="_img">프로필 사진</div>
                    <br>
                    <div class="image-container">

                        <input type="hidden" name="img_url" id="img_url">
                        <input type="hidden" name="preview" id="preview" value="">
                        <img style="width: 150px;" id="preview-image" src=""><br>
                        <input type="file" name="input_img" id="input_img" onchange="show_img(event)">
                    </div>

                    <div class="__name">
                        <div class="_name">이름</div>
                        <input type="text" name="name" class="name" value="" placeholder="이름" required><br>
                    </div>

                    <div class="__email">
                        <div class="_email">이메일</div>
                        <input type="email" name="email" class="email" value="" placeholder="이메일" required><br>
                    </div>

                    <div class="button">
                        <input type="button" name="update" value="수정" onclick="uploadToCloud(form)">
                    </div>

                </form>

            </div>

        </div>

    </div>

    <script>$(document).ready(function () {
        getUpdateId(<%=log%>);
    })
    </script>
    <script src="js/update.js"></script>
    <%
        }
    %>

</div>

</div>
</body>
</html>
