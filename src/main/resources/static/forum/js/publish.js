// document.getElementById("postForm").addEventListener("submit", function (event) {
//     event.preventDefault(); // 防止表單提交的默認行為

//     var postContent = document.getElementById("postContent").value;
//     var postImage = document.getElementById("postImage").files[0];

//     // 在這裡可以將文章內容和圖片提交到後端進行處理



 

//     // 清空表單
//     document.getElementById("postContent").value = "";
//     document.getElementById("postImage").value = "";
// });

// -------------------------------------------------- // 
// 6.2晚測試，能發送出去標題和內容，但是304 not modified 然後方法是get， 但是圖片方面會報錯，看看怎麼處理 => 已處理
(() => {
    const btn = document.querySelector('.btn');
    const postForm = document.querySelector('#postForm');
    const postTitle = document.querySelector('#postTitle');
    const postContent = document.querySelector('#postContent');
    const postImage = document.querySelector("#postImage");
    const articleGroupId = document.querySelector("#articleGroupId");

    btn.addEventListener('click', (e) => {
        e.preventDefault(); //組織按鈕的默認點擊行為  

        //進行表單驗證
        if (postTitle.value.trim() === '') {
            alert('請輸入文章標題');
            return;
        }

        if (postContent.value.trim() === '') {
            alert('請輸入文章內容');
            return;
        }

        //創建formdata物件，用於將表單的資料以multipart/form-data 發送出去(上述資料)
        const formData = new FormData();
        const currentTime = new Date()
       

        formData.append('postTitle', postTitle.value);
        formData.append('postContent', postContent.value);
        formData.append('articleCreateTime', currentTime);
        formData.append('modiferTime', currentTime);
        formData.append('articleGroupId', articleGroupId.value);

        if(postImage.files.length > 0){
            formData.append('postImage', postImage.files[0]);
        }


        //發送POST請求
        fetch('http://localhost:8080/petpet/forum/publish', {
            method: 'POST',
            body: formData,
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.successful) {
                    alert('發表成功');
                    postForm.reset(); //重置表單
                    return 'http://localhost:8080/petpet/forum/forum.html';
                } else {
                    alert('發表失敗');
                }
            })
            .catch(error => {
                console.error('發生錯誤', error);
            });

    });

    // 添加文章分組選擇的事件監聽器
    articleGroupId.addEventListener('change', function() {
        const selectedGroupId = articleGroupId.value;
        // console.log(selectedGroupId);
        // 在此處執行根據選擇的分組值進行的邏輯處理
    });

})();
