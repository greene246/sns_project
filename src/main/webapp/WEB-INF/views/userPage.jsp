<%@ page import="java.util.List" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
  <link rel="stylesheet" href="css/common.css">
  <link rel="stylesheet" href="css/myPage.css">
  <title>userPage</title>
</head>
<body>
<c:import url="/WEB-INF/views/header.jsp"></c:import>

<div class="wrap">
  <div class="myPageBody">
    <span class="img"><img src="./img/도라에몽.png"></span>
    <span class="id"></span>
    <span class="name"></span>

    <input type="button" class="followBtn" name="followBtn" value="팔로우">


  </div>
</div>
<script>$(document).ready(function(){
  getUser(<%=log%>);
})
</script>
<script src="js/user.js"></script>
</body>
</html>