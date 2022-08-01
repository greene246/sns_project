<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <title>WriteForm</title>
</head>
<%
//    if(request.getAttribute("user_id") == null){
//        response.sendRedirect("./");
//    }
//    else{
        String user_id = (String) request.getAttribute("user_id");
%>
<body>
    <div class="wrap">
        <form method="POST" id="write_form" action="/upload">
            <input type="hidden" name="user_id" value="<%=user_id%>" id="user_id"/>    <!-- getAttribute로 user_id 추출 -->
            <input type="hidden" name="img_url" value="1" id="img_url"/>                <!-- write.js에서 업로드 후 img_url값 추출 -->
            <input type="hidden" name="delete_url" value="2" id="delete_url"/><!-- write.js에서 업로드 후 delete_url값 추출 -->
            <div id="image_container"></div>
            <input type="file" multiple name="uploadFile" accept="image/png, image/gif, image/jpeg" id="input_img" onchange="setThumbnail(event)"/>
            <textarea name="contents" placeholder="what's issue?" id="contents"></textarea>
            <select name="public_scope" id="scope">
                <option value="0" selected>전체 공개</option>
                <option value="1">친구만 공개</option>
                <option value="2">비공개</option>
            </select>
            <input type="button" id="write" onclick="uploadToCloud(form)">올리기</input>
        </form>
    </div>
</body>
<script src="js/writeJs.js"></script>
<%--<%--%>
<%--    }--%>
<%--%>--%>
</html>
