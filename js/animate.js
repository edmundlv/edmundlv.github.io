


//兼容写法的获取页面scroll.top/left  的函数
function scroll(){
    if(window.pageYOffset != null){
        return{
            left:window.pageXOffset,
            top:window.pageYOffset
        }
    }
    else if(document.compatMode === "CSS1Compat"){
        return{
            left:document.documentElement.scrollLeft,
            top:document.documentElement.scrollTop
        }
    }
    return{
        left:document.body.scrollLeft,
        top:document.body.scrollTop
    }
}

//兼容写法的获取页面可视区域的宽高
function client(){
    if(window.innerWidth!=null){
        return{
            width:window.innerWidth,
            height:window.innerHeight
        }
    }
    else if(document.compatMode === "CSS1Compat"){
        return{
            width:document.documentElement.clientWidth,
            height:document.documentElement.clientHeight
        }
    }
    return{
        width:document.body.clientWidth,
        height:document.body.clientHeight
    }
}
//window.onscroll = function(){
//       document.title = scroll().top;
//   }

//获取元素的属性值函数
function getstyle(box,shuxing){
    if(box.currentStyle){
        //alert(box.currentStyle[shuxing]);
        return box.currentStyle[shuxing];
    }
    //alert(window.getComputedStyle(box,null)[shuxing]);
    return window.getComputedStyle(box,null)[shuxing];
}

//缓动动画封装函数
function huandong(box,json,fn){
    clearInterval(box.clear);
    box.clear = setInterval(function(){
        var flag = true;
        for(var k in json){
            if(k == "opacity"){
                var leader = getstyle(box,k)*100||100;    //有个bug如果它的opacity为0，它会返回100
                // alert(leader);
            }                                             //这里是由于opacity这个小数不方便运算，所以要在
            // 遍历json的时候做个区分，将opacity小数乘以100，方便运算
            else{
                var leader = parseInt(getstyle(box,k))||0;
            }
            var stp = (json[k]-leader)/10;
            stp = stp>0?Math.ceil(stp):Math.floor(stp);
            leader = leader+ stp;
            if(k=="opacity"){
                box.style.opacity = leader/100;
                box.style.filter = "alpha(opacity="+leader+")";
            }
            else if(k=="zIndex"){
                box.style.zIndex = json[k];
            }
            else{
                box.style[k] = leader+"px";
            }
            if(leader != json[k]){
                flag = false;
            }
            //console.log(stp);
        }
        if(flag){
            clearInterval(box.clear);
            if(fn){
                fn();
            }
        }
    },30)
}