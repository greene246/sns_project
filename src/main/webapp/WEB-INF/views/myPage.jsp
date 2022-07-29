<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <link rel="stylesheet" href="css/common.css">
    <title>myPage</title>
</head>
<body>
<c:import url="/WEB-INF/views/header.jsp"></c:import>
<div class="wrap">
    <%
        String user_id = (String) session.getAttribute("user_id");
        String user_pw = (String) session.getAttribute("user_pw");
    %>
    <%=user_id%><br>
    <%=user_pw%><br>
    <input type="button" name="updateBtn" value="프로필 편집" onclick="location.href='/updateMyInfo'"><br>
    myPage 입니다.

</div>
</body>
</html>
