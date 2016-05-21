window.onload = function(){
    var wrap = document.getElementById("wrap");
    var arrow = document.getElementById("arrow");
    var left = document.getElementById("left");
    var right = document.getElementById("right");
    var lis = document.querySelectorAll("#slide li");
    console.log(lis.length);
    var ul = wrap.children[0].children[0];
//    alert(lis.length);
    var a = arrow.children;
    var json = [
        {   //  1
            width:400,
            top:20,
            left:50,
            opacity:20,
            z:2
        },
        {  // 2
            width:600,
            top:70,
            left:0,
            opacity:80,
            z:3
        },
        {   // 3
            width:800,
            top:100,
            left:200,
            opacity:100,
            z:4
        },
        {  // 4
            width:600,
            top:70,
            left:600,
            opacity:80,
            z:3
        },
        {   //5
            width:400,
            top:20,
            left:750,
            opacity:20,
            z:2
        }
    ];
    var flag = true;
    //wrap.onmouseover = function(){
    //    //alert(window.getComputedStyle(arrow,null)["opacity"]);
    //    huandong(arrow,{"opacity":100});
    //}
    //wrap.onmouseout = function(){
    //    huandong(arrow,{opacity:0});
    //}
    right.onclick = function(){

    }
    fn();
    right.onclick = function(){
        if(flag==true){
            json.push(json.shift());
            fn();
            flag = false;
        }

    }
    left.onclick = function(){
        if(flag==true){
            json.unshift(json.pop());
            fn();
            flag = false;
        }
    }

    function fn(){
        for(var i = 0 ; i<json.length;i++){
            //console.log(lis[i]);
            huandong(lis[i],{
                width:json[i].width,
                top:json[i].top,
                left:json[i].left,
                opacity:json[i].opacity,
                zIndex:json[i].z
            },function(){flag = true})
        }
    }
}
