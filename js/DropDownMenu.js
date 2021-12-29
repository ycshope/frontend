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

function Run(){
    nav=document.getElementsByClassName("nav")[0];
    list=nav.getElementsByTagName("li")[0];
    course=list.getElementsByClassName("course")[0];
    submenu=list.getElementsByTagName("ul");

    
    course.onmouseover=function(){
        DisplaySubment();
    };

    course.onmouseout=function(){
        HiddenSubment();
    };
}

window.onload=function(){
    TopBtm = document.getElementById("Return2TopBtm");
    Run();
}