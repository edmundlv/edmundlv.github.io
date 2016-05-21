
$(function(){
    var width = window.innerWidth*2/3;
    var height = window.innerHeight;
    var cenx = width/3;
    var ceny = height/2;
    var stage = new Konva.Stage({
        container:"canvas",
        width:width,
        height:height
    });
    var layer = new Konva.Layer();
    stage.add(layer);
    var maxout = new Konva.Circle({
        x:cenx,
        y:ceny,
        radius: 430 / 2,
        stroke: '#E0E4EE',
        dash: [4,4]
    })
    layer.add(maxout);
    var out = new Konva.Circle({
        x:cenx,
        y:ceny,
        radius: 274 / 2,
        stroke: '#E0E4EE',
        dash: [4,4]
    })
    layer.add(out);
    var minout = new Konva.Circle({
        x:cenx,
        y:ceny,
        radius: 252 / 2,
        stroke: '#2A3466',
        dash: [8,4]
    })
    layer.add(minout);
    var ring = new Konva.Ring({
        x:cenx,
        y:ceny,
        innerRadius:130/2,
        outerRadius:180/2,
        fill:"black",
        opacity:0.1
    })
    layer.add(ring);
    var inner = new Konva.Circle({
        x:cenx,
        y:ceny,
        radius: 130 / 2,
        fill: "#2A3466"
    })
    layer.add(inner);
    var innertext = new Konva.Text({
        x:cenx-inner.radius(),
        y:ceny-10,
        width:2*inner.radius(),
        text: 'WEB前端',
        fontSize: 20,
        fontFamily: 'Calibri',
        fill: '#fff',
        align: "center"
    });
    layer.add(innertext);
    var outGroup = new Konva.Group({
        x:cenx,
        y:ceny
    });
    layer.add(outGroup);
    var outone = new c({
        x:0+maxout.radius()*Math.cos(0*Math.PI/180),
        y:0+maxout.radius()*Math.sin(0*Math.PI/180),
        innerRadius:39,
        outerRadius:50,
        innerfill:"#e0ba4b",
        outerfill:"#e0ba4b",
        text:"Node.js",
        fontSize:15,
        textColor:"#000",
        innerOpacity:0.8,
        outerOpacity:0.3
    });
    outone.addgroup();
    outone.add1(outGroup);
    var outtwo = new c({
        x:0+maxout.radius()*Math.cos(72*Math.PI/180),
        y:0+maxout.radius()*Math.sin(72*Math.PI/180),
        innerRadius:39,
        outerRadius:50,
        innerfill:"#3f5d7d",
        outerfill:"#3f5d7d",
        text:"BootStrap",
        fontSize:15,
        textColor:"#000",
        innerOpacity:0.8,
        outerOpacity:0.3
    });
    outtwo.addgroup();
    outtwo.add1(outGroup);
    var outthree = new c({
        x:0+maxout.radius()*Math.cos(72*2*Math.PI/180),
        y:0+maxout.radius()*Math.sin(72*2*Math.PI/180),
        innerRadius:39,
        outerRadius:50,
        innerfill:"#279b61",
        outerfill:"#279b61",
        text:"Ajax",
        fontSize:15,
        textColor:"#000",
        innerOpacity:0.8,
        outerOpacity:0.3
    });
    outthree.addgroup();
    outthree.add1(outGroup);
    var outfour = new c({
        x:0+maxout.radius()*Math.cos(72*3*Math.PI/180),
        y:0+maxout.radius()*Math.sin(72*3*Math.PI/180),
        innerRadius:39,
        outerRadius:50,
        innerfill:"#ffcc33",
        outerfill:"#ffcc33",
        text:"移动Web",
        fontSize:15,
        textColor:"#000",
        innerOpacity:0.8,
        outerOpacity:0.3
    });
    outfour.addgroup();
    outfour.add1(outGroup);
    var outfive = new c({
        x:0+maxout.radius()*Math.cos(72*4*Math.PI/180),
        y:0+maxout.radius()*Math.sin(72*4*Math.PI/180),
        innerRadius:39,
        outerRadius:50,
        innerfill:"#cc6699",
        outerfill:"#cc6699",
        text:"JavaScript",
        fontSize:15,
        textColor:"#000",
        innerOpacity:0.8,
        outerOpacity:0.3
    });
    outfive.addgroup();
    outfive.add1(outGroup);
    var innerGroup = new Konva.Group({
        x:cenx,
        y:ceny
    });
    layer.add(innerGroup);
    var innerone = new c({
        x:0+minout.radius()*Math.cos(0*Math.PI/180),
        y:0+minout.radius()*Math.sin(0*Math.PI/180),
        innerRadius:30,
        outerRadius:40,
        innerfill:"#ffff7a",
        outerfill:"#ffff7a",
        text:"HTML5",
        fontSize:15,
        textColor:"#000",
        innerOpacity:0.8,
        outerOpacity:0.3
    });
    innerone.addgroup();
    innerone.add1(innerGroup);
    var innertwo = new c({
        x:0+minout.radius()*Math.cos(90*Math.PI/180),
        y:0+minout.radius()*Math.sin(90*Math.PI/180),
        innerRadius:30,
        outerRadius:40,
        innerfill:"#cc3333",
        outerfill:"#cc3333",
        text:"CSS3",
        fontSize:15,
        textColor:"#000",
        innerOpacity:0.8,
        outerOpacity:0.3
    });
    innertwo.addgroup();
    innertwo.add1(innerGroup);
    var innerthree = new c({
        x:0+minout.radius()*Math.cos(90*2*Math.PI/180),
        y:0+minout.radius()*Math.sin(90*2*Math.PI/180),
        innerRadius:30,
        outerRadius:40,
        innerfill:"#95cae4",
        outerfill:"#95cae4",
        text:"OOP",
        fontSize:15,
        textColor:"#000",
        innerOpacity:0.8,
        outerOpacity:0.3
    });
    innerthree.addgroup();
    innerthree.add1(innerGroup);
    var innerfour = new c({
        x:0+minout.radius()*Math.cos(90*3*Math.PI/180),
        y:0+minout.radius()*Math.sin(90*3*Math.PI/180),
        innerRadius:30,
        outerRadius:40,
        innerfill:"#008ab8",
        outerfill:"#008ab8",
        text:"Jquery",
        fontSize:15,
        textColor:"#000",
        innerOpacity:0.8,
        outerOpacity:0.3
    });
    innerfour.addgroup();
    innerfour.add1(innerGroup);
    layer.draw();
    var deg = 100;
    var animation = new Konva.Animation(function(frame){
        var rata = frame.timeDiff*deg/1000;
        outGroup.rotate(rata);
        innerGroup.rotate(-rata);
        var innerc = innerGroup.getChildren();
        var outc = outGroup.getChildren();
        for(var i=0;i<outc.length;i++){
            outc[i].rotate(-rata);

        };
        for(var i=0;i<innerc.length;i++){
            innerc[i].rotate(rata);
        }
    },layer);
    animation.start();
    layer.addEventListener("mouseenter",function(){
        deg = 20;
    });
    layer.addEventListener("mouseleave",function(){
        deg = 60;
    });
})