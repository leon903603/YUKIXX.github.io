//獲取容器
var pics=document.getElementById("pics");
var n=1;
//設置時間空件
setInterval(function(){
    //alert(n);
    //n++;
    if(n>4) n=0;
    pics.innerHTML="<img src='byg%20("+n+").jpg' />";
    n++;
},2000);