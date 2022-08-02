<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2022-07-26
  Time: 오후 6:30
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
  <head>
    <link rel="stylesheet" href="css/index.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <title>Join</title>
  </head>
  <body>
  <%if(request.getParameter("check")!= null){ %>
  <script>
    alert("회원정보를 확인하세요.");
  </script>

  <%}%>
  <div class="wrap">
    <div class="joinbox">
      <form id="join" method="post" action="/joinUser">
        <h3>몬스타그램</h3>
        <h4 class="h4">친구들의 사진과 동영상을 보려면 가입하세요.</h4>
        <input type="text" name="user_id" id="user_id" placeholder="ID" class="req" required><br>
        <span style="display: none" name="msg_err" id="msg_err">사용할 수 없는 아이디입니다.<br></span>
        <span style="display: none" name="msg_ok" id="msg_ok">사용할 수 있는 아이디입니다.<br></span>
        <input type="password" name="user_pw" id="user_pw" placeholder="Password" class="req" required><br>
        <input type="text" name="name" id="name" placeholder="이름" class="req" required><br>
        <input type="email" name="email" id="email" placeholder="이메일" class="req" required><br>


        <input type="submit" value="회원가입"><br>
        <div class="hr-sect">또는</div>
        <input type="button" value="로그인 하러가기" onclick="location.href='/'">
      </form>
    </div>
  </div>

<script src="js/user.js"></script>
</body>
</html>
