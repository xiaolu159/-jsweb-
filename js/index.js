window.addEventListener('load', function() {
    var dropdown_lis = document.querySelectorAll('.box_dropdown');
    for (var i = 0; i < dropdown_lis.length; i++) {
        dropdown_lis[i].addEventListener('mouseover', function() {
            this.children[0].style.backgroundColor = '#fff'
            this.children[0].style.borderColor = '#cfcfcf'
            this.children[1].style.display = 'block';
        })
        dropdown_lis[i].addEventListener('mouseout', function() {
            this.children[0].style.backgroundColor = ''
            this.children[0].style.borderColor = ''
            this.children[1].style.display = 'none';
        })
    }
    var dt = document.querySelector('.dt');
    var dd = document.querySelector('.dd');
    var a = document.querySelector('.more');
    var flag = 1;
    dt.addEventListener('click', function(e) {
        if (flag == 1) {
            dd.style.display = 'none';
            a.innerHTML = '';
            flag = 0;
        } else {
            dd.style.display = 'block';
            a.innerHTML = '';
            a.style.mariginTop = 20 + 'px ';
            flag = 1;
        }
    });
    var jiadian = document.querySelector('.jiadian');
    var shouji = document.querySelector('.shouji');
    var diannao = document.querySelector('.diannao');
    var jiaju = document.querySelector('.jiaju');
    var shenghuo = document.querySelector('.shenghuo');
    var dianshi = document.querySelector('.dianshi');
    var jiadianTop = jiadian.offsetTop;
    var shoujiTop = shouji.offsetTop;
    var diannaoTop = diannao.offsetTop;
    var jiajuTop = jiaju.offsetTop;
    var shenghuoTop = shenghuo.offsetTop;
    var dianshiTop = dianshi.offsetTop;
    var recommend = document.querySelector('.recommend');
    var recommendTop = recommend.offsetTop;
    var daohang = document.querySelector('.daohang');
    var fixedtool = document.querySelector('.fixedtool');
    var fixedtoolTop = fixedtool.offsetTop - recommendTop;
    var goback = document.querySelector('.goback');
    document.addEventListener('scroll', function() {
        // console.log(window.pageYOffset);
        if (window.pageYOffset >= recommendTop) {
            fixedtool.style.position = 'fixed';
            fixedtool.style.top = fixedtoolTop + 'px';
            goback.style.display = 'block';
        } else {
            fixedtool.style.position = 'absolute';
            fixedtool.style.top = 700 + 'px';
            goback.style.display = 'none';
        }
        if (window.pageYOffset >= jiadianTop - 20 && window.pageYOffset < shoujiTop - 20) {
            daohang.children[1].className = 'current';
        } else {
            daohang.children[1].className = '';
        }
        if (window.pageYOffset >= shoujiTop - 20 && window.pageYOffset < diannaoTop - 20) {
            daohang.children[2].className = 'current';
        } else {
            daohang.children[2].className = '';
        }
        if (window.pageYOffset >= diannaoTop - 20 && window.pageYOffset < jiajuTop - 20) {
            daohang.children[3].className = 'current';
        } else {
            daohang.children[3].className = '';
        }
        if (window.pageYOffset >= jiajuTop - 20 && window.pageYOffset < shenghuoTop - 20) {
            daohang.children[4].className = 'current';
        } else {
            daohang.children[4].className = '';
        }
        if (window.pageYOffset >= shenghuoTop - 20 && window.pageYOffset < dianshiTop - 20) {
            daohang.children[5].className = 'current';
        } else {
            daohang.children[5].className = '';
        }
        if (window.pageYOffset >= dianshiTop - 20) {
            daohang.children[6].className = 'current';
        } else {
            daohang.children[6].className = '';
        }
    })
    goback.addEventListener('click', function() {
        // window.scroll(0, 0);
        animate(window, 0);
    });

    function animate(obj, target, callback) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function() {
            var step = (target - window.pageYOffset) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (window.pageYOffset == target) {
                clearInterval(obj.timer);
                callback && callback();
            }
            // obj.style.left = window.pageYOffset + step + 'px';
            window.scroll(0, window.pageYOffset + step);
        }, 15);
    }
    var jia = document.querySelector('.jia');
    var shou = document.querySelector('.shou');
    var nao = document.querySelector('.nao');
    var ju = document.querySelector('.ju');
    var sheng = document.querySelector('.sheng');
    var shi = document.querySelector('.shi');
    jia.addEventListener('click', function() {
        // window.scroll(0, 0);
        animate(window, jiadianTop);
    });
    shou.addEventListener('click', function() {
        // window.scroll(0, 0);
        animate(window, shoujiTop);
    });
    nao.addEventListener('click', function() {
        // window.scroll(0, 0);
        animate(window, 1690);
    });
    ju.addEventListener('click', function() {
        // window.scroll(0, 0);
        animate(window, jiajuTop);
    });

    sheng.addEventListener('click', function() {
        // window.scroll(0, 0);
        animate(window, shenghuoTop);
    });
    shi.addEventListener('click', function() {
        // window.scroll(0, 0);
        animate(window, dianshiTop);
    });
})