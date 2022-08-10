<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Black+And+White+Picture&family=Gowun+Dodum&family=Noto+Sans+KR:wght@100;300;400&display=swap">
    <link rel="stylesheet" href="css/index.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <title>Find ID</title>
</head>
<body>
    <%
    String id = (String) session.getAttribute("id");
    if(session.getAttribute("id") != null){
%>
<script>
    alert("회원님의 아이디는 <%=id%> 입니다");
    location.href='/';
</script>
    <%}
    if (request.getParameter("check") != null) {%>
<script>
    alert("회원정보를 확인해주세요");
</script>
    <%}%>


<div class="wrap">
    <div class="fibox">
        <form id="fi" method="post" action="/findId">
            <h3>로그인에 문제가 있나요?</h3>
            <div class="info">찾으시는 아이디의 입력한 이름과 이메일이
                같으면 아이디를 찾을 수 있습니다</div>
            <input type="text" name="name" id="name" placeholder="이름" class="req" required><br>
            <input type="email" name="email" id="email" placeholder="email" class="req" required><br>
            <input type="submit" value="아이디 찾기"><br>
        </form>
        <div class="bottom">
            <div class="hr-sect">또는</div>
            비밀번호가 기억나지 않으신가요? <br>
            <a class="fp" href="/findPwPage">비밀번호 찾기</a><br>
            <div class="gl">
                <a class="login" href="/">로그인으로 돌아가기</a>
            </div>
        </div>

    </div>
        <%
    session.invalidate();
%>
<c:import url="/WEB-INF/views/footer.jsp"/>