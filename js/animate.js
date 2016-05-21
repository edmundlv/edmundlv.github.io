


//����д���Ļ�ȡҳ��scroll.top/left  �ĺ���
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

//����д���Ļ�ȡҳ���������Ŀ��
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

//��ȡԪ�ص�����ֵ����
function getstyle(box,shuxing){
    if(box.currentStyle){
        //alert(box.currentStyle[shuxing]);
        return box.currentStyle[shuxing];
    }
    //alert(window.getComputedStyle(box,null)[shuxing]);
    return window.getComputedStyle(box,null)[shuxing];
}

//����������װ����
function huandong(box,json,fn){
    clearInterval(box.clear);
    box.clear = setInterval(function(){
        var flag = true;
        for(var k in json){
            if(k == "opacity"){
                var leader = getstyle(box,k)*100||100;    //�и�bug�������opacityΪ0�����᷵��100
                // alert(leader);
            }                                             //����������opacity���С�����������㣬����Ҫ��
            // ����json��ʱ���������֣���opacityС������100����������
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