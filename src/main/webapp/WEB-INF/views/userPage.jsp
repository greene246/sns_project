<%@ page import="java.util.List" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Black+And+White+Picture&family=Gowun+Dodum&family=Noto+Sans+KR:wght@100;300;400&display=swap">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
  <link rel="stylesheet" href="css/common.css">
  <link rel="stylesheet" href="css/myPage.css">
  <title>userPage</title>
</head>
<body>
<%
  if (session.getAttribute("log") == null) {
    String url = "/";
    response.sendRedirect(url);
  }
  else {
    int log = (Integer) session.getAttribute("log");
    String user_id = (String) request.getParameter("user_id");
    String my_id = (String) request.getParameter("my_id");
%>
<c:import url="/WEB-INF/views/header.jsp"></c:import>
<c:import url="/WEB-INF/views/searchResult.jsp"/>
<div class="wrap">
  <div class="myPageBody">

    <div class="thumbnail"></div>
    <div class="_userIdName">
      <div class="_userIdBtn">
        <div class="user_id"></div>
        <div class="btn">
          <input type="button" class="followBtn" name="followBtn" value="팔로우" onclick="follow('<%=log%>','<%=user_id%>')">
          <input type="button" class="unFollowBtn" name="unFollowBtn" value="언팔로우" onclick="unfollow('<%=log%>','<%=user_id%>')">
        </div>
      </div>
      <div class="name"></div>
      <div class="follow">
        <span>게시물</span><div class="boardCnt"></div>
        <span>팔로워</span><div class="followCnt"></div>
        <span>팔로우</span><div class="followingCnt"></div>
      </div>
    </div>


  </div>

  <div class="userPageContent"></div>

</div>

<div class="black">

  <c:import url="/WEB-INF/views/writeForm.jsp"/>

  <div class="contents_detail">
    <input type="hidden" value="" id="detail_board_id">
    <div class="detail_img">
      <img src="" id="detail_img_main">
    </div>
    <div class="detail_comments">
      <div class="user_comments_owner">
        <span id="profile_img_wrap"><div class="_thumbnail"></div></span>
        <div class="_user_id"></div>
      </div>

      <div class="contents">
        <a class="_contents"></a>
      </div>

      <div class="all_comments">

      </div>
      <div class="input_comment">
        <input type="text" placeholder="친구와 소통해보세요! (300자 이내)" id="detail_comments_val">
        <input class="detail_btn" type="button" value="댓글" onclick="upload_comments_in_detail(<%=log%>)">
      </div>
    </div>
  </div>
</div>

<script>$(document).ready(function () {
  userPageUser(<%=log%>, '<%=user_id%>' ,'<%=my_id%>');
  checkFollow('<%=log%>','<%=user_id%>');
  followCount('<%=log%>','<%=user_id%>');
  CommentCount('<%=user_id%>');
})
</script>
<script src="js/userPage.js"></script>
<script src="js/validation.js"></script>
<script src="./js/writeJs.js"></script>
<script src="./js/eventJs.js"></script>
<script src="js/follow.js"></script>
<%
  }
%>
</body>
</html>