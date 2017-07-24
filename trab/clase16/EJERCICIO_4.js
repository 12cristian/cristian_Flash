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



(lib.Interpolación3 = function() {
	this.initialize();

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AH+AAQAADTiWCVQiVCWjTAAQjSAAiWiWQiViVAAjTQAAjSCViWQCWiVDSAAQDTAACVCVQCWCWAADSg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0033FF").s().p("AloFoQiViVAAjTQAAjSCViWQCWiUDSAAQDTAACVCUQCWCWAADSQAADTiWCVQiVCWjTAAQjSAAiWiWg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52,-52,104,104);


// stage content:
(lib.EJERCICIO_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.Interpolación3("synched",0);
	this.instance.setTransform(64,74);
	this.instance.alpha = 0.371;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:440,y:335,alpha:1},21).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(287,222,104,104);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;