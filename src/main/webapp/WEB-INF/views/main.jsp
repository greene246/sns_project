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
        <div class="black"></div>

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
                         <img src="./img/message.png">
                        </a>
                        <img src="./img/direct.png">

                    </div>
                    <div class="bookmark">
                        <img src="./img/bookmark_off.png">
                    </div>
                </div>
                <div class="word"> 좋아요 <%=1%>개</div>

                <div class="id"><%=id%></div>
                <div class="contents">집에 가고싶다 집에 보내줘 샹sssssssssssssssssssssssssssssssssssssssss</div>
            </div>
        </div>

        <div class="serve">
             serveserveserveserveserveseveserve
        </div>
<%--     ////////////////--%>

        <div class="wrap">

            <jsp:include page="header.jsp"></jsp:include>
            <div class="container">
                <div class="black"></div>
                <div class="subs">
                    <div class="pop1" >


                        <button class="cancel" id="cancel">X</button>
                        <img src="">
                        <h1>sssssssssssssssss</h1>
                    </div>

                </div>

            </div>
        </div>
        <script src="./js/validation.js"></script>
        <script type="text/javascript">
            jQuery.fn.center = function () {
                this.css("position","absolute");
                this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()-60) + "px");
                this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + "px");

                return this;
            }
            showPopup = function() {
                $(".pop1").show();
                $(".pop1").center();
            }

        </script>
<%--     /////////////    --%>
    </div>

    </div>


</body>
<html>