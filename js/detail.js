window.addEventListener('load', function() {
    var add = document.querySelector('.add');
    var reduce = document.querySelector('.reduce');
    var input_a = document.querySelector('.choose_amount').querySelector('input');
    var preview_img = document.querySelector('.preview_img').querySelector('img');;
    var list_item = document.querySelector('.list_item');
    var list_item_lis = document.querySelectorAll('.current_li');
    var choose_color_as = document.querySelector('.choose_color').querySelectorAll('a');
    var choose_version_as = document.querySelector('.choose_version').querySelectorAll('a');
    var choose_type_as = document.querySelector('.choose_type').querySelectorAll('a');
    var choose_type2_as = document.querySelector('.choose_type2').querySelectorAll('a');
    var tab_list_lis = document.querySelector('.tab_list').querySelectorAll('li');
    var detail_list_lis = document.querySelector('.detail_list').querySelectorAll('li');
    var items = document.querySelectorAll('.item');
    var cons = document.querySelectorAll('.tab_con');
    var list_item_imgs = document.querySelector('.list_item').querySelectorAll('img');
    var big_img = document.querySelector('.big').querySelector('img');

    for (var i = 0; i < list_item_imgs.length; i++) {
        //普通函数方法
        // list_item_imgs[i].index = i;
        // list_item_imgs[i].onmouseover = function() {
        //     preview_img.src = 'upload/' + (this.index + 1) + '.jpg';
        // }
        //闭包的方法
        (function(i) {
            list_item_imgs[i].onmouseover = function() {
                preview_img.src = 'upload/' + (i + 1) + '.jpg';
                big_img.src = 'upload/' + (i + 11) + '.jpg';
            }
        })(i);
    }

    for (var i = 0; i < list_item_lis.length; i++) {
        list_item_lis[i].addEventListener('mouseover', function() {
            for (var i = 0; i < list_item_lis.length; i++) {
                list_item_lis[i].className = '';
            }
            this.className = 'current';

        })
    }
    for (var i = 0; i < choose_color_as.length; i++) {
        choose_color_as[i].onclick = function() {
            for (var i = 0; i < choose_color_as.length; i++) {
                choose_color_as[i].className = '';
            }
            this.className = 'current';
        }
    }

    for (var i = 0; i < choose_version_as.length; i++) {
        choose_version_as[i].onclick = function() {
            for (var i = 0; i < choose_version_as.length; i++) {
                choose_version_as[i].className = '';
            }
            this.className = 'current';
        }
    }
    for (var i = 0; i < choose_type_as.length; i++) {
        choose_type_as[i].onclick = function() {
            for (var i = 0; i < choose_type_as.length; i++) {
                choose_type_as[i].className = '';
            }
            this.className = 'current';
        }
    }
    for (var i = 0; i < choose_type2_as.length; i++) {
        choose_type2_as[i].onclick = function() {
            for (var i = 0; i < choose_type2_as.length; i++) {
                choose_type2_as[i].className = '';
            }
            this.className = 'current';
        }
    }
    add.addEventListener('click', function() {
        i = parseFloat(input_a.value) + 1;
        input_a.value = i;
        if (i > 1) {
            reduce.style.cursor = 'pointer';
            reduce.style.color = '';
        } else {
            reduce.style.cursor = 'not-allowed';
            reduce.style.color = '#ccc';
        }

    })
    reduce.addEventListener('click', function() {
        i = parseFloat(input_a.value) - 1;
        input_a.value = i;
        if (i > 1) {
            reduce.style.cursor = 'pointer';
            reduce.style.color = '';
        } else {
            reduce.style.cursor = 'not-allowed';
            reduce.style.color = '#ccc';
            input_a.value = 1;
        }

    })
    for (var i = 0; i < tab_list_lis.length; i++) {
        tab_list_lis[i].setAttribute('index', i);
        tab_list_lis[i].onclick = function() {
            for (var i = 0; i < tab_list_lis.length; i++) {
                tab_list_lis[i].classList.remove("current");
            }
            this.classList.add("current");
            //下面的显示内容模板
            var index = this.getAttribute('index');
            console.log(index);
            //干掉所有人，让其余的item 这些div隐藏
            for (var i = 0; i < cons.length; i++) {
                cons[i].style.display = 'none';
            }
            //留下自己，让对应的item显示出来
            cons[index].style.display = 'block';
        }
    }
    for (var i = 0; i < detail_list_lis.length; i++) {
        detail_list_lis[i].setAttribute('index', i);
        detail_list_lis[i].onclick = function() {
            for (var i = 0; i < detail_list_lis.length; i++) {
                detail_list_lis[i].className = '';
            }
            this.className = 'current';
            //下面的显示内容模板
            var index = this.getAttribute('index');
            console.log(index);
            //干掉所有人，让其余的item 这些div隐藏
            for (var i = 0; i < items.length; i++) {
                items[i].style.display = 'none';
            }
            //留下自己，让对应的item显示出来
            items[index].style.display = 'block';
        }
    }
    var preview_imgs = document.querySelector('.preview_img');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    preview_imgs.addEventListener('mouseover', function() {
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    preview_imgs.addEventListener('mouseout', function() {
        mask.style.display = 'none';
        big.style.display = 'none';
    })
    preview_imgs.addEventListener('mousemove', function(e) {
        // (1). 先计算出鼠标在盒子内的坐标
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        // console.log(x, y);
        // (2) 减去盒子高度 300的一半 是 150 就是我们mask 的最终 left 和top值了
        // (3) 我们mask 移动的距离
        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetHeight / 2;
        // (4) 如果x 坐标小于了0 就让他停在0 的位置
        // 遮挡层的最大移动距离
        var maskMax = preview_imgs.offsetWidth - mask.offsetWidth;
        if (maskX <= 0) {
            maskX = 0;
        } else if (maskX >= maskMax) {
            maskX = maskMax;
        }
        if (maskY <= 0) {
            maskY = 0;
        } else if (maskY >= maskMax) {
            maskY = maskMax;
        }
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';
        // 3. 大图片的移动距离 = 遮挡层移动距离 * 大图片最大移动距离 / 遮挡层的最大移动距离
        // 大图
        var bigIMg = document.querySelector('.bigImg');
        // 大图片最大移动距离
        var bigMax = bigIMg.offsetWidth - big.offsetWidth;
        // 大图片的移动距离 X Y
        var bigX = maskX * bigMax / maskMax;
        var bigY = maskY * bigMax / maskMax;
        bigIMg.style.left = -bigX + 'px';
        bigIMg.style.top = -bigY + 'px';
    })
})