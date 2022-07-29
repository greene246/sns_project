<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <title>myPage</title>
</head>
<body>
<c:import url="/WEB-INF/views/header.jsp"></c:import>
<%
    String user_id = (String) session.getAttribute("user_id");
    String user_pw = (String) session.getAttribute("user_pw");
%>
<%=user_id%><br>
<%=user_pw%><br>
<input type="button" name="updateBtn" value="프로필 편집" onclick="location.href='/updateMyInfo'"><br>
myPage 입니다.


</body>
</html>