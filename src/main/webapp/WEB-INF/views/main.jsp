<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Black+And+White+Picture&family=Gowun+Dodum&family=Noto+Sans+KR:wght@100;300;400&display=swap" rel="stylesheet">

<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <script type="text/javascript" src="https://service.iamport.kr/js/iamport.payment-1.1.5.js"></script>

    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/common.css">
    <title>Main</title>
</head>
<body>
    <c:import url="/WEB-INF/views/header.jsp"/>

    <div class="wrap">

        <%
            String id = (String) session.getAttribute("user_id");

        %>
        <div class="section">

            <div class="contents_wrap">

                <div class="box">
                    <span class="profile_wrap"><span><img class="profile" src="/img/cute.JPG"></span></span>
                    <a class="userid"> <%=id%></a>
                </div>

                <span class="img_wrap"><img src="./img/backpic.jpg"></span>

                <div class="icon">

                    <div class="three">
                    <img src="./img/heart.png">
    <%--                <img src="./img/message.png">--%>
                        <a href="javascript:;" onclick="javascript:showPopup()">
                         <img src="./img/message.png"onclick="javascript:black_block()">
                        </a>
                        <img src="./img/direct.png">

                    </div>

                    <div class="bookmark">
                        <img src="./img/bookmark_off.png">
                    </div>

                </div>
                <div class="word"> 좋아요 <%=1%>개</div>

                <div class="id"><%=id%></div>
<%--                <div class="contents">집에 가고싶다 집에 보내줘 샹sssssssssssssssssssssssssssssssssssssssss</div>--%>
                <div class="box">
                    <div class="content">
                        편하긴 엄청 편합니다. 단지 발볼이 조금 넓으신 분들은 신으실때 불편할수도...? 신다보면 괜찮을거같아요 편하긴 엄청 편합니다. 단지 발볼이 조금 넓으신 분들은 신으실때 불편할수도...? 신다보면 괜찮을거같아요 다보면 괜찮을거 다보면 괜찮을거
                    </div>
                </div>

            </div>
        </div>

        <div class="serve">
             serveserveserveserveserveseveserve
        </div>

                <div class="black" onclick="javascript:cancel()"></div>

                    <div class="pop1" style="display: none">

                        <div class="popBottom">
                            <div class="popimg">
                             <img src="/img/cute.JPG">
                            </div>
                            <div class="popword">
                                <h1>sssssssdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddsss</h1>
                            </div>
                        </div>
                    </div>


    </div>
        <script src="./script/validation.js"></script>
        <script type="text/javascript"></script>
</body>
<html>