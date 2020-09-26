window.addEventListener('load', function() {
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var focus = document.querySelector('.focus');
    var focusWidth = focus.offsetWidth;
    focus.addEventListener('mouseenter', function() {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
        timer = null;
    })
    focus.addEventListener('mouseleave', function() {
            arrow_l.style.display = 'none';
            arrow_r.style.display = 'none';
            timer = setInterval(function() {
                arrow_r.click();
            }, 4000);
        })
        // 3.动态生成小圆圈 有几张图 就生成几个小圆圈
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('ol');
    for (var i = 0; i < ul.children.length; i++) {
        // 创建一个小li
        var li = document.createElement('li');
        //记录当前小圆圈的索要号 通过自定义属性来做
        li.setAttribute('index', i);
        //把小li插入到ol里面
        ol.appendChild(li);
        //4.小圆圈的排他思想 
        li.addEventListener('click', function() {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            // 5.点击小圆圈 移动图片 当然移动的是 
            // ul的移动距离 小圆圈的索引号 × 图片的宽度 注意是负值
            // 当我们点击了某个小li 就拿到当前小li的 索引号
            var index = this.getAttribute('index');
            //当我们点击了某个小li 就把这个li索引号给num
            num = index;
            //当我们点击了某个小圆圈 就把这个圆圈索引号给num
            circle = index;
            this.className = 'current';
            animate(ul, -index * focusWidth)
        })

    }
    //把ol里面的第一个小li设置类名为current 
    ol.children[0].className = 'current';
    //6.克隆第一张图片 放在最后面
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    //7.点击右侧按钮 ，图片滚动下一张
    var num = 0;
    //控制小圆圈的变化
    var circle = 0;
    var flag1 = true;
    arrow_r.addEventListener('click', function() {
        if (flag1) {
            flag1 = false;
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * focusWidth, function() {
                flag1 = true;
            })
            circle++;
            if (circle == ol.children.length) {
                circle = 0;
            }
            circleChange();
        }

    })
    arrow_l.addEventListener('click', function() {
        if (flag1) {
            flag1 = false;
            if (num == 0) {
                ul.style.left = -(ul.children.length - 1) * focusWidth + 'px';
                num = ul.children.length - 1;
            }
            num--;
            animate(ul, -num * focusWidth, function() {
                flag1 = true;
            })
            circle--;
            // if (circle < 0) {
            //     circle = ol.children.length-1;
            // }
            circle = circle < 0 ? ol.children.length - 1 : circle;
            circleChange();
        }
    })

    function circleChange() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
    }
    //10.自动播放轮播图
    var timer = setInterval(function() {
        arrow_r.click();
    }, 4000);
})