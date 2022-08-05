<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <link rel="stylesheet" href="css/update.css">
    <link rel="stylesheet" href="css/common.css">
    <title>updateMyPw</title>
</head>
    <%
        if(session.getAttribute("log") == null) {
            String url = "/";
            request.getRequestDispatcher(url).forward(request, response);
        }
        else {
            int log = (Integer) session.getAttribute("log");
    %>
<body>
<c:import url="/WEB-INF/views/header.jsp"></c:import>
<div class = "wrap">
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
            <h2 class="updateTitle">비밀번호 변경</h2>
        </div>

        <form method="post">
            <div class="content">
                <div class="updateUser">
                    <input type="hidden" name="user_id" id="user_id">

                    <p class="_pw">이전 비밀번호</p> <input type="password" name="pw_past" id="pw_past" required><br>
                        <span style="display: none" id="msg_err">비밀번호를 확인하세요</span>
                        <span style="display: none" id="msg_ok">비밀번호 일치</span>
                    <p class="_pw">새 비밀번호</p> <input type="password" name="pw_new" id="pw_new" required><br>
                    <p class="_pw">비밀번호 재확인</p> <input type="password" name="pw_check" id="pw_check" required><br>
                        <span style="display: none" id="msg_error">비밀번호가 일치하지 않습니다.</span>
                        <span style="display: none" id="msg_okay">비밀번호가 일치합니다.</span>
                </div>

                <div class="button">
                    <input type="button" name="update" value="수정" onclick="_update()">
                </div>

            </div>
        </form>
    </div>

    </div>
</div>

<script>$(document).ready(function(){
    getUserId(<%=log%>);
})
</script>
<script src="js/updatePw.js"></script>
<%
    }
%>
    </div>

</div>

</body>
</html>
