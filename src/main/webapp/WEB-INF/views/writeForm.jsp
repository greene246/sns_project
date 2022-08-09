<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<link rel="stylesheet" href="css/writeForm.css">
<div class="write_wrap">
    <span class="close">&times;</span>
    <form method="post" id="write_form" action="/upload">
        <!-- POST로 넘겨 작업 할 소스들 -->
        <div class="sources">
            <input type="hidden" name="user_id" id="user_id">    <!-- getAttribute로 user_id 추출 -->
            <input type='hidden' id='img_url' name='img_url'>
            <input type='hidden' id='del_url' name='del_url'>
        </div>

        <!-- section1 : 파일 업로드 버튼-->
        <div id="upload_section1">
            <div id="section1_main" class="write_section">
                <span>새 게시물 만들기</span>
            </div>
            <div>
                <img src="/img/image_icon.png">
            </div>
            <div>
                <label for="input_img" style="display: flex; justify-content: center">
                    <div class="btn_upload">파일 선택하기</div>
                </label>
                <input type="file" multiple name="uploadFile" accept="image/png, image/gif, image/jpeg"
                       id="input_img" onchange="setThumbnail(this)"/>
            </div>
        </div>
        <!-- section2 : 파일 선택 후 사진 미리보기 -->
        <!-- 이미지 선택 후 이미지가 담기는 구역 -->
        <div id="upload_section2" style="display: none">
            <div id="section2_main" class="write_section" >
                <input type="button" class="del_img" value="이전" onclick="del_img()">
                <span>자르기</span>
                <input type="button" class="next_btn" value="다음" onclick="next_section()">
            </div>
            <div id="image_container">
                <div id="image_contain">

                </div>
            </div>
        </div>


        <!-- section3 : 게시글에 대한 내용 / 범위 작성 후 업로드 하는 최종 구간-->
        <div id="upload_section3" style="display: none">
            <div id="section3_main" class="write_section" >
                <input type="button" class="back_btn" value="이전" onclick="back_btn()">
                <select name="public_scope" id="scope">
                    <option value="0" selected>전체 공개</option>
                    <option value="1">친구만 공개</option>
                    <option value="2">비공개</option>
                </select>
                <input type="button" id="write" onclick="uploadImg(form)" value="게시">
            </div>
            <textarea name="contents" placeholder="what's issue?" id="b_contents"></textarea>
        </div>

    </form>
</div>
