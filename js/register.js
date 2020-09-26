window.addEventListener('load', function() {


    var tel = document.querySelector('#tel');
    var name = document.querySelector('#name');
    var info = document.querySelector('#info');
    var pass = document.querySelector('#pass');
    var passw = document.querySelector('#passw');


    var rg = /^1[3|4|5|7|8]\d{9}$/;
    var rgname = /^[\u4E00-\u9FA5A-Za-z0-9_]+$/;
    var rgpass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
    var rginfo = /^\d{6}$/;

    regexp(tel, rg);
    regexp(name, rgname);
    regexp(pass, rgpass);
    regexp(info, rginfo);

    function regexp(ele, reg) {
        ele.onblur = function() {
            if (reg.test(this.value)) {
                this.nextElementSibling.className = 'success';
                this.nextElementSibling.innerHTML = '<i class="success_icon"></i>恭喜您输入正确!';
            } else {
                this.nextElementSibling.className = 'error';
                this.nextElementSibling.innerHTML = '<i class="error_icon"></i>格式错误，请重新输入!';
            }
        }
    };
    passw.onblur = function() {
        if (this.value == pass.value) {
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = '<i class="success_icon"></i>恭喜您输入正确!';
        } else {
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i>密码不相同，请重新输入!';
        }
    };
    var eye = document.getElementById('eye');
    var eye2 = document.getElementById('eye2');
    // 2. 注册事件 处理程序
    var flag = 0;
    var flag2 = 0;
    eye.onclick = function() {
        // 点击一次之后， flag 一定要变化
        if (flag == 0) {
            pass.type = 'text';
            eye.src = 'images/open.png';
            flag = 1; // 赋值操作
        } else {
            pass.type = 'password';
            eye.src = 'images/close.png';
            flag = 0;
        }

    };
    eye2.onclick = function() {
        // 点击一次之后， flag 一定要变化
        if (flag2 == 0) {
            passw.type = 'text';
            eye2.src = 'images/open.png';
            flag2 = 1; // 赋值操作
        } else {
            passw.type = 'password';
            eye2.src = 'images/close.png';
            flag2 = 0;
        }

    }
});