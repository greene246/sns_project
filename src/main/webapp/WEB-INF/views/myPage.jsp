<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <title>myPage</title>
</head>
<body>
<c:import url="/WEB-INF/views/header.jsp"></c:import>
    <%
        String userId = (String) session.getAttribute("userId");
        String userPw = (String) session.getAttribute("userPw");
    %>
    <%=userId%><br>
    <%=userPw%><br>
    <input type="button" name="updateBtn" value="프로필 편집" onclick="location.href='/updateMyInfo'"><br>
    myPage 입니다.


</body>
</html>
