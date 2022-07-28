<%--
  Created by IntelliJ IDEA.
  User: gimminjeong
  Date: 2022/07/26
  Time: 7:04 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <title>WriteForm</title>
</head>
<%
//    if(request.getAttribute("userId") == null){
//        response.sendRedirect("./");
//    }
//    else{
//        String userId = (String) request.getAttribute("userId");
%>
<body>
    <div class="wrap">
        <form action="/main">
            <input type="hidden" name="userId" value="apple" id="userId"/>
            <img src=`$('#img').val`>
            <input type="file" accept="image/png, image/gif, image/jpeg" id="img"/>
            <textarea name="contents" placeholder="what's issue?" id="contents"></textarea>
            <button type="button" onclick="apply(form)" id="write"></button>
        </form>
    </div>
</body>
<script src="js/writeJs.js"></script>
<%
//    }
%>
</html>
