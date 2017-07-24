(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#00FF33",
	manifest: []
};



// symbols:



// stage content:
(lib.EJERCICIO_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 5
	this.text = new cjs.Text("POLIGON0", "25px 'Elephant'");
	this.text.lineHeight = 27;
	this.text.lineWidth = 169;
	this.text.setTransform(308,340.4);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(64).to({_off:false},0).wait(6));

	// Capa 4
	this.text_1 = new cjs.Text("ESTRELLA", "25px 'Elephant'", "#FF0000");
	this.text_1.lineHeight = 27;
	this.text_1.lineWidth = 173;
	this.text_1.setTransform(15,352.4);
	this.text_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_1).wait(45).to({_off:false},0).to({_off:true},4).wait(21));

	// Capa 3
	this.text_2 = new cjs.Text("CUADRADO", "25px 'Elephant'", "#0000FF");
	this.text_2.lineHeight = 27;
	this.text_2.lineWidth = 173;
	this.text_2.setTransform(375,112.4);
	this.text_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_2).wait(25).to({_off:false},0).to({_off:true},5).wait(40));

	// Capa 2
	this.text_3 = new cjs.Text("CIRCULO", "25px 'Elephant'", "#FF0000");
	this.text_3.lineHeight = 27;
	this.text_3.lineWidth = 147;
	this.text_3.setTransform(0,117.5);
	this.text_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text_3).wait(4).to({_off:false},0).to({_off:true},5).wait(61));

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AHYAAQAADDiKCLQiLCKjDAAQjCAAiLiKQiKiLAAjDQAAjCCKiLQCLiKDCAAQDDAACLCKQCKCLAADCg");
	this.shape.setTransform(62.3,70.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC9900").s().p("AlMFOQiLiLAAjDQAAjCCLiLQCKiKDCAAQDDAACLCKQCKCLAADCQAADDiKCLQiLCKjDAAQjCAAiKiKg");
	this.shape_1.setTransform(62.3,70.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AnbgWQAOi4CQiDQCQiCDEAAQA2AAAyAJQB7AkBfBpQCCCQAADDQgOC5iPCCQiQCDjEAAQg2AAgxgKQh8gkhfhpQiDiQAAjCg");
	this.shape_2.setTransform(87,70.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C3900F").s().p("Ah9HKQh8gkhfhpQiDiQABjCIAAgBQAOi4CPiDQCQiCDEAAQA2AAAyAJQB7AkBfBpQCCCQABDDQgOC5iRCCQiQCDjDAAQg2AAgxgKg");
	this.shape_3.setTransform(87,70.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AneguQAcisCWh6QCVh7DGAAQA2AAAzAJQB0AsBZBtQB6CWAADEQgcCuiVB7QiWB5jFAAQg3AAgygIQh0gthZhsQh7iWAAjFg");
	this.shape_4.setTransform(111.7,70.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BA871E").s().p("AiWHGQh0gshZhtQh7iVAAjEIAAgBQAcitCWh6QCVh7DGAAQA2ABAzAIQB0AsBZBtQB6CWAADFQgcCtiVB7QiWB5jFAAQg3AAgygJg");
	this.shape_5.setTransform(111.7,70.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AnhhFQApihCchyQCbhyDHAAQA3AAA0AIQBsA0BTBxQByCbAADHQgqCiibByQibByjHAAQg3AAg0gIQhsg1hThxQhyiaAAjHg");
	this.shape_6.setTransform(136.5,70.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B17E2D").s().p("AiwHDQhsg1hThxQhyiaAAjHIAAgBQApihCchyQCahyDIAAQA3AAA0AIQBsA0BTBxQByCbAADHQgpCiicByQiaByjIAAQg3AAg0gIg");
	this.shape_7.setTransform(136.5,70.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AnkhdQA3iVCghqQCghqDLAAQA4AAA0AIQBkA8BOB1QBpChAADJQg3CWigBqQihBqjKAAQg4AAg0gHQhlg+hNh0QhpigAAjKg");
	this.shape_8.setTransform(161.3,70.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A8753C").s().p("AjJHAQhlg9hNh1QhpigAAjJIAAgBQA3iWChhqQCghqDJAAQA4AAA1AIQBkA8BOB1QBqChAADJQg4CWigBqQihBqjKAAQg3AAg1gHg");
	this.shape_9.setTransform(161.3,70.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("Anoh0QBFiKCnhiQClhiDNAAQA4AAA1AHQBdBFBHB5QBiCmAADLQhFCLimBiQimBijMAAQg5AAg1gHQhdhGhHh5QhiilAAjMg");
	this.shape_10.setTransform(186,70.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#9F6C4B").s().p("AjiG8QhdhGhHh5QhiilAAjMIAAAAQBFiKCnhiQClhiDNAAQA4AAA1AHQBdBFBHB5QBiCmAADLQhFCLimBiQimBijMAAQg5AAg1gHg");
	this.shape_11.setTransform(186,70.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("AnriMQBSh+CthaQCrhZDOAAQA5AAA3AGQBUBNBCB9QBZCsAADNQhSB/isBaQisBZjOAAQg5AAg2gGQhVhOhCh9QhZirAAjNg");
	this.shape_12.setTransform(210.7,70.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#96635A").s().p("Aj7G4QhVhOhCh9QhZirAAjNIAAgBQBSh+CthaQCrhZDOAAQA5AAA3AGQBUBNBCB9QBZCsAADNQhSB/isBaQisBZjOAAQg5AAg2gGg");
	this.shape_13.setTransform(210.7,70.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("AnvijQBhhzCyhSQCwhRDRAAQA5AAA4AGQBNBVA7CBQBSCxAADQQhhBzixBSQixBRjQAAQg6AAg3gGQhOhWg7iBQhSiwAAjQg");
	this.shape_14.setTransform(235.5,71);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8D5A69").s().p("AkUG0QhOhWg7iBQhSiwAAjQIAAAAQBhhzCyhSQCwhRDRAAQA5AAA4AGQBNBVA7CBQBSCxAADQQhhBzixBSQixBRjQAAQg6AAg3gGg");
	this.shape_15.setTransform(235.5,71);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("Anyi7QBuhnC3hKQC3hJDSAAQA7AAA4AFQBFBeA2CFQBJC3AADRQhuBoi4BKQi2BJjSAAQg6AAg5gFQhFhfg2iFQhJi2AAjRg");
	this.shape_16.setTransform(260.2,71.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#845178").s().p("AkuGxQhFhfg2iFQhJi2AAjRIAAgBQBuhnC3hKQC3hJDSAAQA7AAA4AFQBFBeA2CFQBJC3AADRQhuBoi4BKQi2BJjSAAQg6AAg5gFg");
	this.shape_17.setTransform(260.2,71.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1).p("An1jSQB7hcC+hBQC7hCDVAAQA7AAA5AFQA+BnAvCJQBBC7AADUQh8Bci8BBQi8BCjUAAQg8AAg5gFQg+hmgviJQhBi8AAjUg");
	this.shape_18.setTransform(285,71.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7B4887").s().p("AlHGtQg+hmgviJQhBi8AAjUIAAAAQB7hcC+hBQC7hCDVAAQA7AAA5AFQA+BnAvCJQBBC7AADUQh8Bci8BBQi8BCjUAAQg8AAg5gFg");
	this.shape_19.setTransform(285,71.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1,1,1).p("An5jqQCKhQDCg5QDAg5DYAAQA8AAA6AEQA2BvAqCNQA5C+AADYQiKBRjDA5Qi+A5jZAAQg8AAg6gEQg2hugqiNQg5i/AAjYg");
	this.shape_20.setTransform(309.7,71.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#723F96").s().p("AlgGpQg2hugqiNQg5i/AAjYIAAgBQCKhQDCg5QDAg5DYAAQA8AAA6AEQA2BvAqCNQA5C+AADYQiKBRjDA5Qi+A5jZAAQg8AAg6gEg");
	this.shape_21.setTransform(309.7,71.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(1,1,1).p("An8kBQCXhFDIgxQDFgxDbAAQA8AAA7AEQAvB3AjCRQAxDEAADaQiYBFjIAxQjEAxjaAAQg9AAg7gDQgvh3gjiRQgxjFAAjag");
	this.shape_22.setTransform(334.5,71.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#6936A5").s().p("Al5GmQgvh3gjiRQgxjFAAjaIAAAAQCXhFDIgxQDFgxDbAAQA8AAA7AEQAvB3AjCRQAxDEAADaQiYBFjIAxQjEAxjaAAQg9AAg7gDg");
	this.shape_23.setTransform(334.5,71.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(1,1,1).p("AoAkZQCmg5DNgpQDLgpDcAAQA+AAA8ADQAmCAAeCVQApDJAADdQimA5jOApQjJApjdAAQg9AAg9gDQgmh/geiVQgpjKAAjcg");
	this.shape_24.setTransform(359.2,71.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#602DB4").s().p("AmTGiQgmh/geiVQgpjKAAjcIAAgBQCmg5DNgpQDLgpDcAAQA+AAA8ADQAmCAAeCVQApDJAADdQimA5jOApQjJApjdAAQg9AAg9gDg");
	this.shape_25.setTransform(359.2,71.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(1,1,1).p("AoDkwQCzguDTghQDQggDfAAQA+AAA9ACQAfCIAXCZQAhDPAADeQizAvjUAgQjPAhjfAAQg+AAg9gDQgfiHgYiZQggjQAAjeg");
	this.shape_26.setTransform(384,71.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#5724C3").s().p("AmsGeQgfiIgYiYQggjQAAjeQCzguDTghQDRggDegBQA+AAA9ACQAfCJAYCZQAgDPAADeQizAujUAhQjOAgjgABQg9gBg+gCg");
	this.shape_27.setTransform(384,71.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(1,1,1).p("AoHlIQDCgiDYgZQDWgYDhAAQA/AAA9ACQAXCQASCdQAZDUAADhQjCAjjYAYQjVAYjhAAQg+AAg/gBQgXiQgSidQgZjVAAjhg");
	this.shape_28.setTransform(408.7,71.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#4E1BD2").s().p("AnFGbQgXiQgSidQgZjVAAjhQDCgiDZgZQDVgYDhAAQA/AAA9ACQAXCQASCdQAYDUABDhQjBAjjaAYQjUAYjhAAQg/AAg+gBg");
	this.shape_29.setTransform(408.7,71.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(1,1,1).p("AoKlgQDPgWDegRQDbgQDjAAQA/AAA/ABQAPCYAMCiQARDaAADjQjPAXjfAQQjaAQjjAAQg/AAg/gBQgQiYgMihQgQjaAAjkg");
	this.shape_30.setTransform(433.5,71.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#4512E1").s().p("AneGXQgQiZgMihQgQjaAAjiQDPgXDegRQDbgQDjAAIB+ABQAPCYAMChQARDbAADiQjPAYjfAPQjaARjjAAIh+gBg");
	this.shape_31.setTransform(433.5,71.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(1,1,1).p("AoNl3QDcgLDkgIQDggJDmAAQBAAAA/ABQAIChAGClQAIDfAADlQjdAMjkAIQjfAIjlAAQhAAAhBgBQgHiggGilQgIjgAAjlg");
	this.shape_32.setTransform(458.2,71.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#3C09F0").s().p("An4GTQgHiggGilQgIjgAAjlQDcgLDkgIQDhgJDlAAIB/ABQAIChAGClQAIDfAADlQjcAMjkAIQjgAIjlAAIiBgBg");
	this.shape_33.setTransform(458.2,71.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(1,1,1).p("AoRmPIQjAAIAAMfIwjAAg");
	this.shape_34.setTransform(483,72);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#3300FF").s().p("AoRGPIAAsdIQjAAIAAMdg");
	this.shape_35.setTransform(483,72);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(1,1,1).p("AoZmAIF8AAIFmgeIExAaIAAA5IAgFcIgZFwIlWAeIlzgTIk/AOIgEgxIAKl5g");
	this.shape_36.setTransform(458.7,84.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#3300FF").s().p("AjJGMIk+AOIgEgyIAKl4IgYlxIF8AAIFmgdIExAaIAAA5IAgFcIgZFvIlVAeg");
	this.shape_37.setTransform(458.7,84.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(1,1,1).p("AohlzIGEAAIFag6IEkAzIADA6IA+FHIgyFqIk2A9Il2gmIlBAcIgIgsIAUl+g");
	this.shape_38.setTransform(434.4,97.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#3300FF").s().p("Ai8GIIlBAdIgIgsIAUl/IgwltIGEABIFag7IEkAzIADA6IA+FIIgyFpIk2A9g");
	this.shape_39.setTransform(434.4,97.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(1,1,1).p("AoqllIGMABIFPhXIEYBMIAEA7IBeE0IhNFiIkXBbIl3g4IlEAqIgMglIAemHg");
	this.shape_40.setTransform(410.2,110.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#3300FF").s().p("AiwGEIlEArIgMgmIAemGIhIlpIGMABIFPhWIEYBLIAEA8IBeE0IhNFiIkXBbg");
	this.shape_41.setTransform(410.2,110.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(1,1,1).p("AoylYIGTACIFEh0IEMBlIAGA8IB8EeIhlFeIj4B4Il6hKIlFA5IgQggIAnmNg");
	this.shape_42.setTransform(385.9,123.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#3300FF").s().p("AikGBIlGA5IgQggIAomNIhgllIGTACIFDh0IENBlIAGA8IB8EeIhmFeIj3B4g");
	this.shape_43.setTransform(385.9,123.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(1,1,1).p("Ao6lKIGbACIE3iRIEBB+IAHA9ICcEJIh/FYIjZCXIl7hdIlJBHIgUgZIAymUg");
	this.shape_44.setTransform(361.7,136.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#3300FF").s().p("AiYF9IlIBHIgUgZIAxmUIh3lhIGbACIE3iRIEBB+IAHA9ICcEJIh/FYIjZCXg");
	this.shape_45.setTransform(361.7,136.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(1,1,1).p("ApDk8IGkABIEritID1CXIAIA+IC7D0IiYFTIi6C1Il9hwIlLBWIgYgUIA7mag");
	this.shape_46.setTransform(337.4,148.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#3300FF").s().p("AiLF5IlLBWIgYgUIA7maIiQldIGkABIEritID1CXIAIA+IC7D0IiYFTIi6C1g");
	this.shape_47.setTransform(337.4,148.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(1,1,1).p("ApLkvIGrADIEfjLIDqCxIAJA+IDaDfIiyFOIiaDTIl/iCIlOBjIgcgNIBGmgg");
	this.shape_48.setTransform(313.1,161.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#3300FF").s().p("Ah/F2IlOBjIgcgNIBGmgIiolbIGrADIEfjLIDqCxIAJA+IDaDfIiyFOIiaDTg");
	this.shape_49.setTransform(313.1,161.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(1,1,1).p("ApUkhIG0ACIETjnIDeDKIALA/ID5DKIjMFIIh7DyImBiVIlQByIgggIIBQmmg");
	this.shape_50.setTransform(288.9,174.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#3300FF").s().p("AhzFzIlQBxIgggIIBQmmIjBlXIG0ACIETjnIDeDKIALA/ID5DKIjMFIIh7Dyg");
	this.shape_51.setTransform(288.9,174.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(1,1,1).p("ApckTIG7ACIEIkEIDRDjIANBBIEYC0IjlFDIhdEQImCinIlTB/IgkgBIBamtg");
	this.shape_52.setTransform(264.6,187.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#3300FF").s().p("AhnFvIlSCAIgkgCIBamtIjZlTIG7ACIEIkEIDSDjIAMBBIEYC0IjkFEIhdEPg");
	this.shape_53.setTransform(264.6,187.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(1,1,1).p("AplkFIHEADID7kiIDHD8IANBCIE4CfIj+E+Ig/EuImDi6IlWCOIgoAEIBkmzg");
	this.shape_54.setTransform(240.4,200.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#3300FF").s().p("AhaFrIlWCOIgoAEIBkmzIjxlPIHDADID9kiIDGD8IANBCIE4CfIj+E+Ig+Eug");
	this.shape_55.setTransform(240.4,200.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(1,1,1).p("Aptj4IHLAEIDwk/IC6EWIAPBCIFXCKIkYE5IgeFMImGjMIlYCcIgsAKIBum5g");
	this.shape_56.setTransform(216.1,213);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#3300FF").s().p("AhOFoIlYCcIgsAKIBum6IkJlMIHLADIDwk+IC6EWIAPBCIFXCKIkYE5IgeFMg");
	this.shape_57.setTransform(216.1,213);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(1,1,1).p("Ap1jqIHTAEIDklcICuEvIARBEIF1B0IkxE0IABFqImIjfIlaCqIgwARIB3nAg");
	this.shape_58.setTransform(191.8,225.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#3300FF").s().p("AhCFkIlaCqIgwAQIB3m/IkglJIHTAEIDklcICuEvIARBEIF1B0IkxE0IABFqg");
	this.shape_59.setTransform(191.8,225.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(1,1,1).p("Ap+jcIHbAEIDYl5ICjFIIASBFIGUBfIlKEuIAgGJImKjyIldC5Ig0AWICCnGg");
	this.shape_60.setTransform(167.6,238.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#3300FF").s().p("Ag1FgIldC5Ig1AWICCnGIk4lFIHaAEIDZl5ICiFIIASBFIGVBfIlLEuIAgGJg");
	this.shape_61.setTransform(167.6,238.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(1,1,1).p("AqGjOIHiAEIDNmWICXFiIATBFIG0BKIlkEpIA+GnImKkEImYDjICLnMg");
	this.shape_62.setTransform(143.3,251.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#3300FF").s().p("AgpFdImYDjICMnMIlRlCIHjADIDNmVICWFhIATBGIG0BKIljEpIA+Gng");
	this.shape_63.setTransform(143.3,251.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(1,1,1).p("AqOjBIHqAFIDBmzICLF7IAVBGIHSA1Il9EkIBeHFImNkXImeD3ICVnSg");
	this.shape_64.setTransform(119,264.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#3300FF").s().p("AgdFZImeD3ICVnSIlok/IHqAFIDBmzICLF7IAVBGIHSA1Il9EkIBeHFg");
	this.shape_65.setTransform(119,264.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(1,1,1).p("AF+J/ImPkqImlEMICgnZImBk7IHzAFIC1nQICVHcIHyAfImXEfg");
	this.shape_66.setTransform(94.8,277.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#3300FF").s().p("AgRFVImlEMICgnZImBk7IHzAFIC1nQICVHcIHyAfImXEfIB9Hjg");
	this.shape_67.setTransform(94.8,277.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(1,1,1).p("AqXizIHzAFIC1nQICVHcIHyAfImXEfIB9HjImPkqImlEMICgnZg");
	this.shape_68.setTransform(94.8,277.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(1,1,1).p("AqWiwIHngLIC+nBICgHMIHoAsImEElIBtHdImPkXImkD7ICNnTg");
	this.shape_69.setTransform(114.9,276.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#4000EF").s().p("AgPFnImkD7ICOnTIlxlAIHngKIC+nCICgHNIHoAsImFElIBtHdg");
	this.shape_70.setTransform(114.9,276.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(1,1,1).p("AqViuIHcgZIDHm0ICrG9IHdA4IlyErIBdHXImOkEImjDrIB7nNg");
	this.shape_71.setTransform(135,276.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#4D00DF").s().p("AgNF4ImjDrIB7nNIlglEIHcgZIDHm0ICrG9IHdA4IlyErIBdHXg");
	this.shape_72.setTransform(135,276.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(1,1,1).p("AqVirIHSgpIDPmmIC3GuIHSBFIlgExIBOHRImPjxImiDaIBqnHg");
	this.shape_73.setTransform(155.2,275.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#5900CF").s().p("AgMGKImiDaIBqnHIlRlIIHSgpIDPmmIC3GuIHSBFIlhExIBPHRg");
	this.shape_74.setTransform(155.2,275.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(1,1,1).p("AqUioIHHg5IDYmYIDCGfIHIBSIlPE3IA/HKImPjeImhDKIBYnCg");
	this.shape_75.setTransform(175.3,275.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#6600BF").s().p("AgKGbImhDLIBYnCIlBlMIHHg5IDYmYIDCGfIHIBSIlPE3IA/HLg");
	this.shape_76.setTransform(175.3,275.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(1,1,1).p("AqTilIG8hIIDhmKIDNGQIG9BeIk8E9IAwHEImQjLImgC5IBGm8g");
	this.shape_77.setTransform(195.4,274.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#7300AF").s().p("AgIGtImgC5IBGm8IkxlPIG8hIIDhmKIDMGQIG+BeIk8E9IAvHEg");
	this.shape_78.setTransform(195.4,274.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(1,1,1).p("AqSiiIGxhXIDpl9IDYGBIGzBqIkqFEIAgG+ImPi5ImfCqIA0m3g");
	this.shape_79.setTransform(215.5,274.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#80009F").s().p("AgGG/ImfCoIA0m2IkhlTIGxhYIDpl8IDYGBIGzBqIkqFEIAgG+g");
	this.shape_80.setTransform(215.5,274.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(1,1,1).p("AqSigIGnhmIDylvIDjFyIGpB3IkaFKIASG4ImPilImeCYIAimxg");
	this.shape_81.setTransform(235.6,274.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#8C008F").s().p("AgFHRImdCYIAimxIkRlYIGlhmIDzluIDjFxIGpB3IkZFJIARG4g");
	this.shape_82.setTransform(235.6,274.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(1,1,1).p("AqRidIGbh2ID7lgIDvFiIGeCEIkHFPIACGyImQiSImcCIIAPmrg");
	this.shape_83.setTransform(255.7,273.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#990080").s().p("AgDHiImcCIIAPmrIkBlcIGbh2ID7lgIDvFiIGeCEIkHFPIACGyg");
	this.shape_84.setTransform(255.7,273.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(1,1,1).p("AqQiaIGPiGIEFlSID5FTIGUCRIj1FVIgNGsImRiAImaB4IgDmlg");
	this.shape_85.setTransform(275.9,273.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#A60070").s().p("AgBHzImbB4IgDmlIjxlgIGPiGIEFlSID5FTIGUCRIj1FVIgNGsg");
	this.shape_86.setTransform(275.9,273.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(1,1,1).p("AqPiXIGEiVIENlEIEFFEIGJCdIjjFbIgcGmImRhtImZBnIgVmfg");
	this.shape_87.setTransform(296,272.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#B30060").s().p("AAAIFImZBnIgVmfIjhllIGEiUIENlEIEFFEIGJCcIjjFcIgcGmg");
	this.shape_88.setTransform(296,272.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(1,1,1).p("AqPiVIF6ikIEWk2IEQE0IF+CqIjRFhIgsGgImShZImXBWIgnmag");
	this.shape_89.setTransform(316.1,272.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#BF0050").s().p("AAAIXImWBWIgnmZIjSlpIF6ikIEWk2IEQE0IF+CrIjRFgIgsGgg");
	this.shape_90.setTransform(316.1,272.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(1,1,1).p("AqOiSIFvizIEfkpIEbEmIF0C2IjAFnIg7GaImShHImWBGIg5mUg");
	this.shape_91.setTransform(336.2,271.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#CC0040").s().p("AACIoImWBGIg5mUIjBlsIFvizIEfkpIEbEmIF0C2IjAFnIg7Gag");
	this.shape_92.setTransform(336.2,271.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(1,1,1).p("AqNiQIFkjDIEpkbIElEXIFpDDIitFtIhLGTImSg0ImUA2IhLmOg");
	this.shape_93.setTransform(356.3,271.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#D90030").s().p("AnbDgIiylwIFkjDIEpkaIEkEWIFqDDIitFtIhLGUImSg1ImVA2g");
	this.shape_94.setTransform(356.3,271.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(1,1,1).p("AqMiPIFZjSIEykNIEvEIIFfDQIibFyIhZGOImUghImTAmIhdmJg");
	this.shape_95.setTransform(376.4,271.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#E60020").s().p("AnrDlIihl0IFZjSIEykNIEvEIIFfDQIibFyIhZGOImUghImTAmg");
	this.shape_96.setTransform(376.4,271.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(1,1,1).p("AqMiNIFOjhIE7j/IE7D4IFVDcIiKF5IhpGHImTgOImSAVIhvmDg");
	this.shape_97.setTransform(396.6,271);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#F20010").s().p("An6DrIiRl4IFOjhIE7j/IE6D4IFVDcIiKF5IhoGHImUgOImSAVg");
	this.shape_98.setTransform(396.6,271);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(1,1,1).p("AGcJlIskAJIkDr5IKHniIKQHSg");
	this.shape_99.setTransform(416.7,270.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FF0000").s().p("AqLiLIKHniIKQHSIjwMAIskAJg");
	this.shape_100.setTransform(416.7,270.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(1,1,1).p("AqLiLIKHniIKQHSIjwMAIskAJg");
	this.shape_101.setTransform(416.7,270.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},4).to({state:[{t:this.shape_1},{t:this.shape}]},4).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_67},{t:this.shape_68}]},1).to({state:[{t:this.shape_67},{t:this.shape_68}]},1).to({state:[{t:this.shape_67},{t:this.shape_68}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_72},{t:this.shape_71}]},1).to({state:[{t:this.shape_74},{t:this.shape_73}]},1).to({state:[{t:this.shape_76},{t:this.shape_75}]},1).to({state:[{t:this.shape_78},{t:this.shape_77}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_82},{t:this.shape_81}]},1).to({state:[{t:this.shape_84},{t:this.shape_83}]},1).to({state:[{t:this.shape_86},{t:this.shape_85}]},1).to({state:[{t:this.shape_88},{t:this.shape_87}]},1).to({state:[{t:this.shape_90},{t:this.shape_89}]},1).to({state:[{t:this.shape_92},{t:this.shape_91}]},1).to({state:[{t:this.shape_94},{t:this.shape_93}]},1).to({state:[{t:this.shape_96},{t:this.shape_95}]},1).to({state:[{t:this.shape_98},{t:this.shape_97}]},1).to({state:[{t:this.shape_100},{t:this.shape_99}]},1).to({state:[{t:this.shape_100},{t:this.shape_101}]},1).to({state:[{t:this.shape_100},{t:this.shape_101}]},1).to({state:[{t:this.shape_100},{t:this.shape_101}]},1).to({state:[{t:this.shape_100},{t:this.shape_99}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;