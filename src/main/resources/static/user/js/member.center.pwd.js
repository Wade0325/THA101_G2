(() => {
    const msg = document.querySelector("#msg")
    const oldPassword = document.querySelector("#oldPassword")
    const newPassword = document.querySelector("#newPassword")
    const confirmPassword = document.querySelector("#confirmPassword")

    $("#btn_update_address").on("click", function () {
        if (oldPassword.value == '') {
            msg.textContent = '舊密碼不得為空';
            return;
        }

        if (newPassword.value == '') {
            msg.textContent = '新密碼不得為空';
            return;
        }

        if (confirmPassword.value == '') {
            msg.textContent = '確認新密碼不得為空';
            return;
        }

        if (window.confirm("確定要修改密碼?")) {
            msg.textContent = '';
            if (newPassword.value == confirmPassword.value) {
                console.log(newPassword.value)
                fetch('userController/updatePwd', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        userNewPassword: newPassword.value,
                        userPassword: oldPassword.value
                    }),
                })
                    .then(resp => resp.json())
                    .then(body => {
                        const { successful } = body;
                        if (successful) {
                            window.alert("更新成功")
                            window.location.href = "/petpet/user/login.html"
                        } else {
                            window.alert("舊密碼錯誤")
                            oldPassword.value = ''
                            newPassword.value = ''
                            confirmPassword.value = ''
                        }
                    })

            } else {
                msg.textContent = '';
                window.confirm("新密碼與確認密碼不相符")
            }
        }

    })

})()