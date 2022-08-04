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

        <div class="update_user">


            <div class="content">
                <div class="updateUser">

<%--                    <input type="hidden" name="user_id" value="<%=user_id%>">--%>

                        <p class="_img">프로필 사진</p><br>
                        <%--<div class="image-container">
                            <input type="hidden" name="img_url" id="img_url">
                            <input type="hidden" name="preview" id="preview" value=<%=thumbnail%>>
                            <img style="width: 150px;" id="preview-image" src=<%=thumbnail%>><br>
                            <input type="file" id="input_img">
                        </div>--%>

                        <p class="_name">이름</p> <input type="text" name="name" class="name" value="<%=name%>" placeholder="이름" required><br>

                        <p class="_email">이메일</p> <input type="email" name="email" class="email" value="<%=email%>" placeholder="이메일" required><br>

                    <input type="hidden" name="user_pw" value="<%=user_pw%>">

                </div>
                <div class="button">
                    <input type="button" name="update" value="수정" onclick="uploadToCloud(form)">
                </div>
            </div>

        </form>

    </div>

</div>

<script>$(document).ready(function(){
    getUser(<%=log%>);
})
</script>
<script src="js/user.js"></script>
<script src="js/update.js"></script>
<script src="js/writeJs.js"></script>
<%
    }
%>

</body>
</html>
