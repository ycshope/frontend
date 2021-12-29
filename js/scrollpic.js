index=0;
timer=null;
banner=document.getElementById("banner");
pics=banner.getElementsByTagName("a");
pic_num=pic.length;

function changeImg()
{
    for (var i=0;i<pic_num;i++);{
        pics[i].className="pic";
    }
    pics[index].className="pic picactive";
}
 
function PlayImg()
{
    timer=setInterval(
        function(){
            // 切换到的图片索引
            index=(index+1)%pic_num;
            changeImg(); 
        },
        2000
    ) //2000ms,等于2s
}

function SlideImg()
{
    banner.onmouseout=function() {
        PlayImg()
    };

    // banner.onmouseover=function() {
    //     StopImg()
    // };

    banner.onmouseout();
}