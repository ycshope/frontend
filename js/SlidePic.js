function PlayImg()
{
    // setInterval的函数不会立刻执行,等过了第一delay后才会执行;
    timer=setInterval(
        function(){
            /*这种写法貌似不太好?
            b站用的是多图片重叠在一起,显示的标签
            style="overflow: hidden; transform: translateX(-488px);
             transition: transform 0ms ease 0s; width: 4880px;"
            */
            Pic.src="../img/banner"+PicIndex+".jpg";
            PicIndex=(PicIndex+1)%PicNum;
        },
        Delay
    )
}

function StopImg()
{
    if(timer!=null) clearTimeout(timer);
}

function DisplaySubment(){
    for(var i=0;i<submenu.length;i++)
    {
        submenu[i].style.display="block";
    }
}

function HiddenSubment(){
    for(var i=0;i<submenu.length;i++)
    {
        submenu[i].style.display="none";
    }
}

// 浏览器向下滑动到800px时,出现按钮
function ScrollFuntion(){
    if(document.body.scrollTop > 800 || document.documentElement.scrollTop > 800){
        TopBtm.style.display = "block";
        TopBtm.style.zIndex = 999;
    }
    else{
        TopBtm.style.display = "none";
    }
}

//当用户点击按钮时,返回顶部
function TopFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function Run()
{
    // 图片滑动
    Pic=document.getElementById("pic");
    Delay=2000;
    PicNum=3;
    PicIndex=0;
    // 分成两种情况:
    // case1:onmouseover时候不播放
    Pic.onmouseover=function(){
        StopImg();
    };
    // case2：onmouseout和一开始加载的时候都会播放
    Pic.onmouseout=function(){
        PlayImg();
    };
    // Pic.onmouseout;   //Q:直接触发无法执行?
    PlayImg();

// --------------------------------------------------------------------------

    // 下拉菜单栏
    nav=document.getElementsByClassName("nav")[0];
    list=nav.getElementsByTagName("li")[0];
    course=list.getElementsByClassName("selected_course")[0];
    submenu=list.getElementsByTagName("ul");
    
    course.onmouseover=function(){
        DisplaySubment();
    };

    course.onmouseout=function(){
        HiddenSubment();
    };


// --------------------------------------------------------------------------
    // 滑动到顶部
    TopBtm = document.getElementById("Return2TopBtm");
    //当浏览器触发滚动时,触发滚动函数
    window.onscroll = function() {ScrollFuntion()}; 
    //获取按钮点击事件
    TopBtm.onclick = function() {TopFunction()};
}

window.onload = function(){
    // Q:不用onload无法记载?
    Run();
}