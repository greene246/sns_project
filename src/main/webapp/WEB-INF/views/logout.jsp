<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
  <title>Logout</title>
</head>
<body>
<%
  session.invalidate();
  String url = "/";
  request.getRequestDispatcher(url).forward(request,response);
%>
</body>
</html>