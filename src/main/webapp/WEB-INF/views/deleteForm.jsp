<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>deleteForm</title>
</head>
<body>
<div class="delete_pop" style="display: block">                 <!-- value 수정해야함 -->
    <h3 class="delete_msg">게시글을 삭제하시겠어요?</h3>
    <form method="POST" action="/delete">
        <input type="hidden" value="board_id" name="board_id">
        <input type="hidden" value="id" name="id">
        <input type="hidden" value='"https://i.ibb.co/LCLqhC8/image.jpg""' name="img_url">
        <input type="hidden" value="apple" name="user_id">
        <input type="submit" name="delete_ok" value="삭제" style="color: red">
        <input type="button" name="delete_no" value="아니요">
    </form>
</div>
</body>
</html>