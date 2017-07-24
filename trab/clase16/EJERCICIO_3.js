(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.Interpolación6 = function() {
	this.initialize();

	// Capa 1
	this.text = new cjs.Text("CANVAS", "25px 'Elephant'", "#0000FF");
	this.text.lineHeight = 27;
	this.text.lineWidth = 136;
	this.text.setTransform(-70,-18.1);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-70,-18.1,140,36.3);


(lib.Interpolación5 = function() {
	this.initialize();

	// Capa 1
	this.text = new cjs.Text("CANVAS", "25px 'Elephant'", "#FFFF00");
	this.text.lineHeight = 27;
	this.text.lineWidth = 153;
	this.text.setTransform(-78.5,-18.1);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-78.5,-18.1,157,36.3);


(lib.Interpolación4 = function() {
	this.initialize();

	// Capa 1
	this.text = new cjs.Text("CANVAS", "25px 'Elephant'", "#3300FF");
	this.text.lineHeight = 27;
	this.text.lineWidth = 125;
	this.text.setTransform(-64.5,-25.3);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-64.5,-25.3,129,50.6);


(lib.Interpolación2 = function() {
	this.initialize();

	// Capa 1
	this.text = new cjs.Text("CANVAS", "25px 'Elephant'", "#CC0000");
	this.text.lineHeight = 27;
	this.text.lineWidth = 127;
	this.text.setTransform(-65.5,-22.8);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-65.5,-22.8,131,45.6);


(lib.Interpolación1 = function() {
	this.initialize();

	// Capa 1
	this.text = new cjs.Text("CANVAS", "25px 'Elephant'", "#FF0000");
	this.text.lineHeight = 27;
	this.text.lineWidth = 158;
	this.text.setTransform(-81,-20.3);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-81,-20.3,162,40.6);


(lib.Símbolo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 2
	this.instance = new lib.Interpolación1("synched",0);
	this.instance.setTransform(0,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},13).wait(1));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0033CC").s().p("Ego6AHHIAAuNMBR1AAAIAAONg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-261.9,-45.5,524,91);


(lib.Símbolo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 5
	this.instance = new lib.Interpolación4("synched",0);
	this.instance.setTransform(397.5,228.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-379.4,y:253.7},19).wait(1));

	// Capa 4
	this.instance_1 = new lib.Interpolación5("synched",0);
	this.instance_1.setTransform(168.5,363.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:174.5,y:-87.5},19).wait(1));

	// Capa 3
	this.instance_2 = new lib.Interpolación2("synched",0);
	this.instance_2.setTransform(-155.4,-88.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:384.2},19).wait(1));

	// Capa 2
	this.instance_3 = new lib.Interpolación6("synched",0);
	this.instance_3.setTransform(-379.9,95.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:374},19).wait(1));

	// Capa 1
	this.instance_4 = new lib.Símbolo1();

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-449.9,-111.6,912,493.3);


// stage content:
(lib.EJERCICIO_3 = function() {
	this.initialize();

	// Capa 1
	this.instance = new lib.Símbolo2();
	this.instance.setTransform(276,57.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ego6gHGMBR1AAAIAAONMhR1AAAg");
	this.shape.setTransform(276,57.5);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(101,145.9,912,493.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;