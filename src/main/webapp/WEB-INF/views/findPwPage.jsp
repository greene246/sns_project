<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2022-08-01
  Time: 오후 7:27
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <link rel="stylesheet" href="css/index.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <title>Find Password</title>
</head>
<body>
    <div class="wrap">
        <div class="fpbox">
            <form id="fi" method="post" action="">
              <h3>로그인에 문제가 있나요?</h3>
                <div class="info">찾으시는 비밀번호의 정보가
                같으면 비밀번호를 찾을 수 있습니다</div>
                <input type="text" name="user_id" id="user_id" placeholder="ID" class="req" required><br>
                <input type="text" name="name" id="name" placeholder="이름" class="req" required><br>
                <input type="email" name="email" id="email" placeholder="email" class="req" required><br>
                 <input type="submit" value="아이디 찾기"><br>
                <div class="hr-sect">또는</div>
                아이디가 기억나지 않으신가요? <br>
                <a class="fi" href="/findIdPage">아이디 찾기</a><br>
                <a class="login" href="/">로그인으로 돌아가기</a>
            </form>
        </div>
    </div>
</body>
</html>
