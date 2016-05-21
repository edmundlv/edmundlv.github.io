function c(opt){
    this.chuancan(opt);
}
c.prototype = {
    chuancan:function(opt){
        this.x = opt.x;
        this.y = opt.y;
        this.innerRadius = opt.innerRadius;
        this.outerRadius = opt.outerRadius;
        this.innerfill = opt.innerfill;
        this.outerfill = opt.outerfill;
        this.text = opt.text;
        this.fontSize = opt.fontSize;
        this.textColor = opt.textColor;
        this.innerOpacity = opt.innerOpacity;
        this.outerOpacity = opt.outerOpacity;
    },
    addgroup:function(){
        this.group = new Konva.Group({
            x:this.x,
            y:this.y
        });
        var innerCircle = new Konva.Circle({
            x:0,
            y:0,
            radius:this.innerRadius,
            fill:this.innerfill,
            opacity:this.innerOpacity
        });
        this.group.add(innerCircle);
        var outring = new Konva.Ring({
            x:0,
            y:0,
            innerRadius:this.innerRadius,
            outerRadius:this.outerRadius,
            fill:this.outerfill,
            opacity:this.outerOpacity
        });
        this.group.add(outring);
        var text1 = new Konva.Text({
            x: 0 - this.innerRadius,
            y: 0 - this.fontSize/2,
            width:2*this.innerRadius,
            text:this.text,
            fill:this.textColor,
            fontSize:this.fontSize,
            align:"center"
        })
        this.group.add(text1);
    },
    add1:function(duixiang){
        duixiang.add(this.group);
    }
}
