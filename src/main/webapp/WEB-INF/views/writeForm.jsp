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
    <script  src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <link rel="stylesheet" href="css/writeForm.css">
    <title>WriteForm</title>
</head>
<%
    if(session.getAttribute("log") == null) {
        String url = "/";
        request.getRequestDispatcher(url).forward(request, response);
    }
%>
<body>
<div class="write_wrap" style="display: none">
    <form method="post" id="write_form" action="/upload">
        <!-- POST로 넘겨 작업 할 소스들 -->
        <div class="sources">
            <input type="hidden" name="user_id" id="user_id">    <!-- getAttribute로 user_id 추출 -->
            <input type='hidden' id='img_url' name='img_url'>
            <input type='hidden' id='del_url' name='del_url'>
        </div>

        <!-- section.1 : 파일 선택 후 사진 미리보기 -->
        <!-- 이미지 선택 후 이미지가 담기는 구역 -->
        <div id="image_container"></div>

        <input type="file" multiple name="uploadFile" accept="image/png, image/gif, image/jpeg" id="input_img"
               onchange="setThumbnail(this)"/>
        <textarea name="contents" placeholder="what's issue?" id="contents"></textarea>
        <select name="public_scope" id="scope">
            <option value="0" selected>전체 공개</option>
            <option value="1">친구만 공개</option>
            <option value="2">비공개</option>
        </select>
        <input type="button" id="write" onclick="uploadImg(form)" value="올리기"></input>
    </form>
</div>
</body>
<script src="js/writeJs.js"></script>
</html>