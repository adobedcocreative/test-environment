(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.BG = function() {
	this.initialize(img.BG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,470,600);


(lib.BG2 = function() {
	this.initialize(img.BG2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,505,600);


(lib.bg3 = function() {
	this.initialize(img.bg3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,556,600);


(lib.BG_blur = function() {
	this.initialize(img.BG_blur);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,470,600);


(lib.bg_blur2 = function() {
	this.initialize(img.bg_blur2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,505,600);


(lib.bg_blur3 = function() {
	this.initialize(img.bg_blur3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,556,600);


(lib.FG = function() {
	this.initialize(img.FG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,470,600);


(lib.fg2 = function() {
	this.initialize(img.fg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,505,600);


(lib.fg3 = function() {
	this.initialize(img.fg3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,556,600);


(lib.FG_Blur = function() {
	this.initialize(img.FG_Blur);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,470,600);


(lib.fg_blur2 = function() {
	this.initialize(img.fg_blur2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,505,600);


(lib.fg_blur3 = function() {
	this.initialize(img.fg_blur3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,556,600);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.txt_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Tween7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgiBMQgbgQgLgfQgKgdALgeQALgdAbgRQAbgQAfAEQAfAFAWAXIgWAUQgOgPgVgDQgVgDgSALQgSALgHAUQgHATAGAUQAHAUASALQASALAUgCQAWgDAOgPIAWAVQgWAXggADIgMABQgYAAgVgOg");
	this.shape.setTransform(2.0202,-0.7048,0.8766,0.8766,135.0007);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgmgTIBNAAIgnAmg");
	this.shape_1.setTransform(-5.3,2.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.2,-7.8,18.4,15.8);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhlhA/fMAZHh+9MCx8AAAMgZJB+9g");
	this.shape.setTransform(0.95,-2.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-648.8,-408.3,1299.6,816.7);


(lib.ms = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#737373").s().p("ARIDTQgXgYAAgyIAAieIhtAAIAAD5IhJAAIAAj5Ig0AAIAAg8IA0AAIAAgrQAAgwAfggQAggfAyAAIAXABIATAEIAAA/IgNgFQgJgDgMAAQgWAAgNAPQgNAPAAAbIAAAlIBtAAIAAhFIBJgXIAABcIBKAAIAAA8IhKAAIAACQQAAAcALAMQAKAMAWAAQAHAAAJgDQALgEAEgDIAAA8QgHAEgQADQgTAEgNAAQguAAgXgZgAIrDBQgqgqAAhJQAAhNArgsQAsgtBNAAQBJAAAoArQApArAABJQAABMgrAsQgsAthKAAQhHAAgsgrgAJjAAQgWAaAAAxQAAAwAWAaQAWAaApAAQAoAAAUgaQAVgZAAgzQAAgygVgYQgWgZgnAAQgoAAgWAagAE7DnQgYgFgQgHIAAhIQASANAZAJQAWAIATAAQAaAAALgHQAMgGAAgRQAAgPgNgKQgMgLgigNQgngQgSgWQgRgVAAghQAAgpAhgbQAigbA1AAQAPAAAVAEQARADARAGIAABGQgOgKgUgHQgUgHgSAAQgVAAgMAIQgLAJAAANQAAAPAKAJQAJAJAjAOQArARASAWQASAXAAAeQAAArgiAbQgiAbg5AAQgQAAgagFgAgiDBQgrgqAAhJQAAhNAsgsQArgtBMAAQBJAAApArQAoAsAABIQAABLgrAtQgrAthLAAQhIAAgpgrgAAUAAQgVAaAAAxQAAAwAVAaQAWAaApAAQAoAAAVgaQAVgZAAgzQAAgxgWgZQgVgZgnAAQgpAAgWAagAoDDAQgrgrAAhDQAAhKAsgwQAsgxBQAAQATAAAWAGQAVAFAMAHIAABGQgRgNgRgGQgSgHgSAAQgrAAgbAbQgaAdAAAvQAAAvAZAaQAaAaArAAQARAAATgIQAUgHAQgMIAABDQgTALgUAEQgYAGgZAAQhEAAgrgsgAkFDkIAAk1IBJAAIAAAxIABAAQAKgZAUgPQAUgOAdAAIAQABIALADIAABKQgEgDgMgFQgMgEgPAAQgbAAgSAWQgTAWAAAwIAACcgAqqDkIAAk1IBJAAIAAE1gAs7DkIAAlSIgBAAIiGFSIgyAAIiJlSIgBAAIAAFSIhFAAIAAmvIBrAAIB8E/IACAAICDk/IBnAAIAAGvgAqkiMQgNgNAAgRQAAgSANgMQANgNASAAQATAAANANQANANAAARQAAASgNAMQgNAMgTAAQgSAAgNgMg");
	this.shape.setTransform(-0.0145,0.0987,0.2986,0.2986);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#737373").s().p("Ah+DKIAAhDQArAcAqAAQArAAAbgWQAbgWAAgmQAAgkgbgVQgbgUgyAAQgWAAgxADIAPjiIDUAAIAAA8IiZAAIgIBsIAmgBQBEAAAlAjQAmAigBA9QAABAgrAnQgqAnhLAAQg/AAgegSg");
	this.shape_1.setTransform(64.1669,0.5765,0.2986,0.2986);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#737373").s().p("AhoCqQgogzAAheQAAhLAXg3QAWg4ArgeQAqgfA2AAQAyAAAaAMIAAA/QgjgSgmAAQgzAAggArQggAtgBBKIACAAQANgYAagPQAagOAcAAQA4AAAiAkQAhAkAAA9QAAApgTAiQgTAigfATQghASgoAAQhDAAgog1gAgxAUQgUAXAAAfQgBAZAKAUQAJAVARANQAQAMAWAAQAhAAATgWQATgXAAgmQAAgngTgWQgTgVgiAAQgeAAgWAUg");
	this.shape_2.setTransform(55.0447,0.4645,0.2986,0.2986);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#737373").s().p("AhWDYQgegHgOgKIAAhEQAUAQAbAJQAcAKAbAAQAoAAAYgUQAYgTAAggQAAgkgcgSQgcgTg0AAIgmAAIAAg5IAkAAQAuAAAYgRQAZgRAAghQAAgegTgRQgUgQgjAAQguAAgnAfIAAhAQASgKAcgIQAbgGAfAAQAmAAAcAOQAeANAPAYQAPAXAAAfQAAAqgWAbQgXAbgpAMIAAAAQAvAGAbAbQAbAbAAApQAAA8grAjQgqAkhJAAQggAAgbgHg");
	this.shape_3.setTransform(45.706,0.4645,0.2986,0.2986);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ms, new cjs.Rectangle(-36.4,-6.9,104.4,14.100000000000001), null);


(lib.cta_arrow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYBIIA4g1IiBAAIAAgkICBAAIg5g2IAuAAIBNBHIhNBIg");
	this.shape.setTransform(0.1794,0.0354,0.576,0.576);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_arrow, new cjs.Rectangle(-5.4,-4.1,11.2,8.3), null);


(lib.cta = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.aMask = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#33CC00").s().p("A2GFAIAAp/MAsNAAAIAAJ/g");
	this.shape.setTransform(141.5038,32.0005);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.aMask, new cjs.Rectangle(0,0,283,64), null);


(lib.logo_box = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEBA00").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape.setTransform(5.6253,5.6753);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#03A5EA").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape_1.setTransform(-5.6749,5.6753);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7CBB01").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape_2.setTransform(5.6253,-5.6249);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F25022").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape_3.setTransform(-5.6749,-5.6249);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo_box, new cjs.Rectangle(-10.8,-10.7,21.6,21.5), null);


(lib.img3_b_bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bg_blur3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.img3_b_bg, new cjs.Rectangle(0,0,556,600), null);


(lib.img2_fg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bg_blur2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.img2_fg, new cjs.Rectangle(0,0,505,600), null);


(lib.img2_bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.fg_blur2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.img2_bg, new cjs.Rectangle(0,0,505,600), null);


(lib.front_slideer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.247)","rgba(255,255,255,0.447)"],[0,1],-200.1,0,200.2,0).s().p("A/RTjMAHvgnGMA2zAAAMgHvAnGg");
	this.shape.setTransform(195.15,126.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.front_slideer, new cjs.Rectangle(-5,1.1,400.3,250.3), null);


(lib.f1_blur_fg1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.FG_Blur();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.f1_blur_fg1, new cjs.Rectangle(0,0,470,600), null);


(lib.f1_blur_fg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.fg_blur3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.f1_blur_fg, new cjs.Rectangle(0,0,556,600), null);


(lib.f1_blur_bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.BG_blur();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.f1_blur_bg, new cjs.Rectangle(0,0,470,600), null);


(lib.cta_glare = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_9 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.478)","rgba(255,255,255,0)"],[0,0.51,1],-125.2,-0.1,-58.4,-0.1).s().p("Ao9CXIAAktIR6AAIAAEtg");
	this.shape.setTransform(57.35,15.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.478)","rgba(255,255,255,0)"],[0,0.51,1],58.5,-0.9,125.3,-0.9).s().p("Ao9CXIAAktIR6AAIAAEtg");
	this.shape_1.setTransform(57.35,15.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},7).to({state:[]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,114.7,30.3);


(lib.backslider = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.447)").s().p("A/RTjMAHvgnGMA2zAAAMgHvAnGg");
	this.shape.setTransform(208.65,125.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.backslider, new cjs.Rectangle(8.5,0,400.3,250.3), null);


(lib.arrow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgYBIIA4g1IiBAAIAAgkICBAAIg5g2IAuAAIBNBHIhNBIg");
	this.shape.setTransform(5.6294,4.1854,0.576,0.576);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.arrow, new cjs.Rectangle(0,0,11.3,8.4), null);


(lib.sliders = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// front
	this.front = new lib.front_slideer();
	this.front.name = "front";
	this.front.setTransform(164.15,123.9,1,1,0,0,0,150.6,125);

	this.timeline.addTween(cjs.Tween.get(this.front).wait(1));

	// Back
	this.back = new lib.backslider();
	this.back.name = "back";
	this.back.setTransform(189.5,125,1,1,0,0,0,189.5,125);

	this.timeline.addTween(cjs.Tween.get(this.back).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sliders, new cjs.Rectangle(8.5,0,400.4,250.3), null);


(lib.replay_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {out:0,over:1,down:2,hit:3};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer 6
	this.instance = new lib.Tween7("synched",0);
	this.instance.setTransform(-18.15,16.65,1.754,1.754);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:16.55,alpha:1},1).to({_off:true},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.3,0,32.199999999999996,30.6);


(lib.cta_arrowmo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_52 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(52).call(this.frame_52).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhIBJQgegfAAgqQAAgpAegfQAfgeApAAQAqAAAfAeQAeAfAAApQAAAqgeAfQgfAegqAAQgpAAgfgeg");

	// Layer 4
	this.instance = new lib.arrow();
	this.instance.setTransform(-18.15,0.05,1,1,0,0,0,5.6,4.2);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).to({x:2.15},8,cjs.Ease.get(1)).wait(1).to({x:2},0).wait(1).to({x:1.35},0).wait(1).to({x:0.4},0).wait(1).to({x:-0.4},0).wait(1).to({x:-0.9},0).wait(1).to({x:-1.05},0).wait(1).to({x:-0.95},0).wait(1).to({x:-0.6},0).wait(1).to({x:-0.15},0).wait(1).to({x:0.25},0).wait(1).to({x:0.5},0).wait(1).to({x:0.55},0).wait(2).to({x:0.4},0).wait(1).to({x:0.25},0).wait(1).to({x:0.1},0).wait(1).to({x:0},0).wait(1).to({x:-0.05},0).wait(1).to({x:0},0).wait(1).to({x:0.05},0).wait(1).to({x:0.1},0).wait(1).to({x:0.15},0).wait(11));

	// Layer 2
	this.instance_1 = new lib.arrow();
	this.instance_1.setTransform(0.15,0.05,1,1,0,0,0,5.6,4.2);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-1.15},8,cjs.Ease.get(1)).wait(2).to({x:19.85},8,cjs.Ease.get(-1)).to({_off:true},1).wait(34));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.2,-4.1,20.5,8.3);


(lib.MSFT_logo_sq = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.logo_box.cache(-22,-22,44,44,2)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.logo_box = new lib.logo_box();
	this.logo_box.name = "logo_box";
	this.logo_box.setTransform(-40,1.4);

	this.timeline.addTween(cjs.Tween.get(this.logo_box).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MSFT_logo_sq, new cjs.Rectangle(-50.8,-9.3,21.599999999999998,21.5), null);


(lib.MSFT_Logo_anim = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.ms.cache(-67.3,-10.95,270,44,2)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.ms = new lib.ms();
	this.ms.name = "ms";
	this.ms.setTransform(14.7,1.2,1.017,1.017);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEBA00").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape.setTransform(-34.0958,7.3542,1.017,1.017);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#03A5EA").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape_1.setTransform(-45.5879,7.3542,1.017,1.017);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7CBB01").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape_2.setTransform(-34.0958,-4.1379,1.017,1.017);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F25022").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape_3.setTransform(-45.5879,-4.1379,1.017,1.017);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.ms}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MSFT_Logo_anim, new cjs.Rectangle(-50.8,-9.3,134.6,21.9), null);


(lib.logos = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_69 = function() {
		exportRoot.tl1.play();
	}
	this.frame_100 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(69).call(this.frame_69).wait(31).call(this.frame_100).wait(3));

	// Layer_2
	this.instance = new lib.MSFT_logo_sq();
	this.instance.setTransform(71,904.2,0.1916,0.1916,0,0,0,-40,1.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({regY:1.4,scaleX:3.1699,scaleY:3.1699,x:71.25},13,cjs.Ease.quadOut).to({x:-112.3},12,cjs.Ease.quadInOut).to({_off:true},1).wait(76));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_14 = new cjs.Graphics().p("EgVOBJTIAAqsMA68AAAIAAKsg");
	var mask_graphics_15 = new cjs.Graphics().p("EgVbBJTIAAqsMA68AAAIAAKsg");
	var mask_graphics_16 = new cjs.Graphics().p("EgWBBJTIAAqsMA68AAAIAAKsg");
	var mask_graphics_17 = new cjs.Graphics().p("EgXBBJTIAAqsMA68AAAIAAKsg");
	var mask_graphics_18 = new cjs.Graphics().p("EgYaBJTIAAqsMA68AAAIAAKsg");
	var mask_graphics_19 = new cjs.Graphics().p("EgaNBJTIAAqsMA68AAAIAAKsg");
	var mask_graphics_20 = new cjs.Graphics().p("EgcaBJTIAAqsMA68AAAIAAKsg");
	var mask_graphics_21 = new cjs.Graphics().p("EgddBJTIAAqsMA67AAAIAAKsg");
	var mask_graphics_22 = new cjs.Graphics().p("EgddBJTIAAqsMA67AAAIAAKsg");
	var mask_graphics_23 = new cjs.Graphics().p("EgddBJTIAAqsMA67AAAIAAKsg");
	var mask_graphics_24 = new cjs.Graphics().p("EgddBJTIAAqsMA67AAAIAAKsg");
	var mask_graphics_25 = new cjs.Graphics().p("EgddBJTIAAqsMA67AAAIAAKsg");
	var mask_graphics_26 = new cjs.Graphics().p("EgddBJTIAAqsMA67AAAIAAKsg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_graphics_14,x:241.3681,y:469.1436}).wait(1).to({graphics:mask_graphics_15,x:240.0923,y:469.1436}).wait(1).to({graphics:mask_graphics_16,x:236.2648,y:469.1436}).wait(1).to({graphics:mask_graphics_17,x:229.8856,y:469.1436}).wait(1).to({graphics:mask_graphics_18,x:220.9548,y:469.1436}).wait(1).to({graphics:mask_graphics_19,x:209.4722,y:469.1436}).wait(1).to({graphics:mask_graphics_20,x:195.438,y:469.1436}).wait(1).to({graphics:mask_graphics_21,x:174.1596,y:469.1436}).wait(1).to({graphics:mask_graphics_22,x:151.1945,y:469.1436}).wait(1).to({graphics:mask_graphics_23,x:133.3328,y:469.1436}).wait(1).to({graphics:mask_graphics_24,x:120.5744,y:469.1436}).wait(1).to({graphics:mask_graphics_25,x:112.9194,y:469.1436}).wait(1).to({graphics:mask_graphics_26,x:110.4382,y:469.1436}).wait(1).to({graphics:null,x:0,y:0}).wait(76));

	// Layer 3
	this.instance_1 = new lib.MSFT_Logo_anim();
	this.instance_1.setTransform(-212.85,900.4,3.1699,3.1699,0,0,0,0.1,0.2);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({x:14.85},12,cjs.Ease.quadInOut).to({_off:true},40).wait(37));

	// White_box (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_67 = new cjs.Graphics().p("EhlhCYRMAZHkwhMCx8AAAMgZIEwhg");
	var mask_1_graphics_68 = new cjs.Graphics().p("EhlhCYRMAZHkwhMCx8AAAMgZIEwhg");
	var mask_1_graphics_69 = new cjs.Graphics().p("EhlhCYRMAZHkwhMCx8AAAMgZIEwhg");
	var mask_1_graphics_70 = new cjs.Graphics().p("EhlhCYRMAZHkwhMCx8AAAMgZIEwhg");
	var mask_1_graphics_71 = new cjs.Graphics().p("EhlhCYRMAZHkwhMCx8AAAMgZIEwhg");
	var mask_1_graphics_72 = new cjs.Graphics().p("EhlhCYRMAZHkwhMCx8AAAMgZIEwhg");
	var mask_1_graphics_73 = new cjs.Graphics().p("EhlhCYRMAZHkwhMCx8AAAMgZIEwhg");
	var mask_1_graphics_74 = new cjs.Graphics().p("EhlhCYRMAZHkwhMCx8AAAMgZIEwhg");
	var mask_1_graphics_75 = new cjs.Graphics().p("EhlhCYRMAZHkwhMCx8AAAMgZIEwhg");
	var mask_1_graphics_76 = new cjs.Graphics().p("EhlhCYRMAZHkwhMCx8AAAMgZIEwhg");
	var mask_1_graphics_77 = new cjs.Graphics().p("EhlhCYRMAZHkwhMCx8AAAMgZIEwhg");
	var mask_1_graphics_78 = new cjs.Graphics().p("EhlhCYRMAZHkwhMCx8AAAMgZIEwhg");
	var mask_1_graphics_79 = new cjs.Graphics().p("EhlhCYRMAZHkwhMCx8AAAMgZIEwhg");
	var mask_1_graphics_80 = new cjs.Graphics().p("EhlhCYRMAZHkwhMCx8AAAMgZIEwhg");
	var mask_1_graphics_81 = new cjs.Graphics().p("EhlhCYRMAZHkwhMCx8AAAMgZIEwhg");
	var mask_1_graphics_82 = new cjs.Graphics().p("EhlhCYRMAZHkwhMCx8AAAMgZIEwhg");
	var mask_1_graphics_83 = new cjs.Graphics().p("EhlhCYRMAZHkwhMCx8AAAMgZIEwhg");
	var mask_1_graphics_84 = new cjs.Graphics().p("EhlhCYRMAZHkwhMCx8AAAMgZIEwhg");
	var mask_1_graphics_85 = new cjs.Graphics().p("EhlhCYRMAZHkwhMCx8AAAMgZIEwhg");
	var mask_1_graphics_86 = new cjs.Graphics().p("EhlhCYRMAZHkwhMCx8AAAMgZIEwhg");
	var mask_1_graphics_87 = new cjs.Graphics().p("EhlhCYRMAZHkwhMCx8AAAMgZIEwhg");
	var mask_1_graphics_88 = new cjs.Graphics().p("EhlhCYRMAZHkwhMCx8AAAMgZIEwhg");
	var mask_1_graphics_89 = new cjs.Graphics().p("EhlhCYRMAZHkwhMCx8AAAMgZIEwhg");
	var mask_1_graphics_90 = new cjs.Graphics().p("EhlhCYRMAZHkwhMCx8AAAMgZIEwhg");
	var mask_1_graphics_91 = new cjs.Graphics().p("EhlhCYRMAZHkwhMCx8AAAMgZIEwhg");
	var mask_1_graphics_92 = new cjs.Graphics().p("EhlhCYRMAZHkwhMCx8AAAMgZIEwhg");
	var mask_1_graphics_93 = new cjs.Graphics().p("EhlhCYRMAZHkwhMCx8AAAMgZIEwhg");
	var mask_1_graphics_94 = new cjs.Graphics().p("EhoOCYRMAZHkwhMCx8AAAMgZIEwhg");
	var mask_1_graphics_95 = new cjs.Graphics().p("EhvDCYRMAZHkwhMCx8AAAMgZIEwhg");
	var mask_1_graphics_96 = new cjs.Graphics().p("Eh2ZCYRMAZHkwhMCx8AAAMgZIEwhg");
	var mask_1_graphics_97 = new cjs.Graphics().p("Eh+QCYRMAZHkwhMCx8AAAMgZJEwhg");
	var mask_1_graphics_98 = new cjs.Graphics().p("EiGqCYRMAZHkwhMCx8AAAMgZJEwhg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(67).to({graphics:mask_1_graphics_67,x:74.55,y:906.4433}).wait(1).to({graphics:mask_1_graphics_68,x:74.5115,y:906.4433}).wait(1).to({graphics:mask_1_graphics_69,x:74.2416,y:906.4433}).wait(1).to({graphics:mask_1_graphics_70,x:73.509,y:906.4433}).wait(1).to({graphics:mask_1_graphics_71,x:72.0825,y:906.4433}).wait(1).to({graphics:mask_1_graphics_72,x:69.7306,y:906.4433}).wait(1).to({graphics:mask_1_graphics_73,x:66.2221,y:906.4433}).wait(1).to({graphics:mask_1_graphics_74,x:61.3256,y:906.4433}).wait(1).to({graphics:mask_1_graphics_75,x:54.8097,y:906.4433}).wait(1).to({graphics:mask_1_graphics_76,x:46.4432,y:906.4433}).wait(1).to({graphics:mask_1_graphics_77,x:35.9947,y:906.4433}).wait(1).to({graphics:mask_1_graphics_78,x:23.233,y:906.4433}).wait(1).to({graphics:mask_1_graphics_79,x:7.9265,y:906.4433}).wait(1).to({graphics:mask_1_graphics_80,x:-10.1559,y:906.4433}).wait(1).to({graphics:mask_1_graphics_81,x:-31.2456,y:906.4433}).wait(1).to({graphics:mask_1_graphics_82,x:-55.574,y:906.4433}).wait(1).to({graphics:mask_1_graphics_83,x:-83.3724,y:906.4433}).wait(1).to({graphics:mask_1_graphics_84,x:-114.872,y:906.4433}).wait(1).to({graphics:mask_1_graphics_85,x:-150.3043,y:906.4433}).wait(1).to({graphics:mask_1_graphics_86,x:-189.9006,y:906.4433}).wait(1).to({graphics:mask_1_graphics_87,x:-233.8921,y:906.4433}).wait(1).to({graphics:mask_1_graphics_88,x:-282.5103,y:906.4433}).wait(1).to({graphics:mask_1_graphics_89,x:-335.9865,y:906.4433}).wait(1).to({graphics:mask_1_graphics_90,x:-394.5519,y:906.4433}).wait(1).to({graphics:mask_1_graphics_91,x:-458.438,y:906.4433}).wait(1).to({graphics:mask_1_graphics_92,x:-527.8761,y:906.4433}).wait(1).to({graphics:mask_1_graphics_93,x:-603.0974,y:906.4433}).wait(1).to({graphics:mask_1_graphics_94,x:-667.0716,y:906.4433}).wait(1).to({graphics:mask_1_graphics_95,x:-710.8126,y:906.4433}).wait(1).to({graphics:mask_1_graphics_96,x:-757.7922,y:906.4433}).wait(1).to({graphics:mask_1_graphics_97,x:-808.1261,y:906.4433}).wait(1).to({graphics:mask_1_graphics_98,x:-861.93,y:906.4433}).wait(5));

	// Logo
	this.instance_2 = new lib.MSFT_Logo_anim();
	this.instance_2.setTransform(14.85,900.4,3.1699,3.1699,0,0,0,0.1,0.2);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(66).to({_off:false},0).to({_off:true},35).wait(2));

	// White_box1
	this.instance_3 = new lib.Tween1("synched",0);
	this.instance_3.setTransform(73.6,911.3,1,2.3984);
	this.instance_3.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(67).to({startPosition:0},0).to({x:-1075},31,cjs.Ease.cubicIn).to({_off:true},3).wait(2));

	// White_box2
	this.instance_4 = new lib.Tween1("synched",0);
	this.instance_4.setTransform(73.6,911.3,1,2.3984);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:0.4492},49,cjs.Ease.cubicInOut).wait(20).to({startPosition:0},0).to({x:-1075},31,cjs.Ease.cubicIn).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1723.8,-68.1,2448.2,1949.1);


(lib.FG3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.f3_blur_fg = new lib.f1_blur_fg();
	this.f3_blur_fg.name = "f3_blur_fg";
	this.f3_blur_fg.setTransform(-67.3,138.3,1,1,0,0,0,207.7,138.3);

	this.timeline.addTween(cjs.Tween.get(this.f3_blur_fg).wait(1));

	// Layer_1
	this.instance = new lib.fg3();
	this.instance.setTransform(-275,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FG3, new cjs.Rectangle(-275,0,556,600), null);


(lib.f2FG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.f2_blur_fg = new lib.img2_bg();
	this.f2_blur_fg.name = "f2_blur_fg";
	this.f2_blur_fg.setTransform(-38.7,129.6,1,1,0,0,0,172.3,129.6);

	this.timeline.addTween(cjs.Tween.get(this.f2_blur_fg).wait(1));

	// Layer_1
	this.instance = new lib.fg2();
	this.instance.setTransform(-211,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.f2FG, new cjs.Rectangle(-211,0,505,600), null);


(lib.f2bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.f2_blur_bg = new lib.img2_fg();
	this.f2_blur_bg.name = "f2_blur_bg";
	this.f2_blur_bg.setTransform(-38.7,129.6,1,1,0,0,0,172.3,129.6);

	this.timeline.addTween(cjs.Tween.get(this.f2_blur_bg).wait(1));

	// Layer_1
	this.instance = new lib.BG2();
	this.instance.setTransform(-211,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.f2bg, new cjs.Rectangle(-211,0,505,600), null);


(lib.f1FG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.f1_blur_fg = new lib.f1_blur_fg1();
	this.f1_blur_fg.name = "f1_blur_fg";
	this.f1_blur_fg.setTransform(-14.8,129.1,1,1,0,0,0,170.2,129.1);
	this.f1_blur_fg.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.f1_blur_fg).wait(1));

	// Layer_1
	this.instance = new lib.FG();
	this.instance.setTransform(-185,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.f1FG, new cjs.Rectangle(-185,0,470,600), null);


(lib.f1BG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.f1_blur_bg = new lib.f1_blur_bg();
	this.f1_blur_bg.name = "f1_blur_bg";
	this.f1_blur_bg.setTransform(-14.8,129.1,1,1,0,0,0,170.2,129.1);
	this.f1_blur_bg.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.f1_blur_bg).wait(1));

	// Layer_1
	this.instance = new lib.BG();
	this.instance.setTransform(-185,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.f1BG, new cjs.Rectangle(-185,0,470,600), null);


(lib.BG3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.f3_blur_bg = new lib.img3_b_bg();
	this.f3_blur_bg.name = "f3_blur_bg";
	this.f3_blur_bg.setTransform(-67.3,138.3,1,1,0,0,0,207.7,138.3);

	this.timeline.addTween(cjs.Tween.get(this.f3_blur_bg).wait(1));

	// Layer_1
	this.instance = new lib.bg3();
	this.instance.setTransform(-275,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BG3, new cjs.Rectangle(-275,0,556,600), null);


(lib.arrowMain = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 1
	this.arrow = new lib.cta_arrow();
	this.arrow.name = "arrow";
	this.arrow.setTransform(10.75,10.75);

	this.arrow_1 = new lib.cta_arrowmo();
	this.arrow_1.name = "arrow_1";
	this.arrow_1.setTransform(10.75,10.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.arrow}]}).to({state:[{t:this.arrow_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,0.5,20.5,20.5);


(lib.CTA_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 3
	this.arrow = new lib.arrowMain();
	this.arrow.name = "arrow";
	this.arrow.setTransform(-32.35,2.3,0.6158,0.5649,0,0,0,13.6,10.7);

	this.timeline.addTween(cjs.Tween.get(this.arrow).wait(1));

	// CTA_text
	this.cta_glare = new lib.cta_glare();
	this.cta_glare.name = "cta_glare";
	this.cta_glare.setTransform(-42.75,-2.45,1,1,0,0,0,57.4,15.1);

	this.timeline.addTween(cjs.Tween.get(this.cta_glare).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0078D7").s().p("AmsB8IAAj3INZAAIAAD3g");
	this.shape.setTransform(-59.4,2.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA_btn, new cjs.Rectangle(-102.3,-10.3,85.9,24.8), null);


(lib.mainMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// MSoftLogo
	this.logo_intro = new lib.logos();
	this.logo_intro.name = "logo_intro";
	this.logo_intro.setTransform(58.05,21,0.3087,0.3087,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.logo_intro).wait(1));

	// Logo
	this.s_logo = new lib.MSFT_Logo_anim();
	this.s_logo.name = "s_logo";
	this.s_logo.setTransform(52.95,23.05,0.7282,0.7282,0,0,0,0.1,0.5);

	this.timeline.addTween(cjs.Tween.get(this.s_logo).wait(1));

	// replay
	this.replay_btn = new lib.replay_btn();
	this.replay_btn.name = "replay_btn";
	this.replay_btn.setTransform(146.05,3.95,0.3475,0.3475,0,0,180,-0.3,0);

	this.timeline.addTween(cjs.Tween.get(this.replay_btn).wait(1));

	// txt
	this.txt = new lib.txt_mc();
	this.txt.name = "txt";
	this.txt.setTransform(70.5,70.55,1,1,0,0,0,70.5,70.5);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// CTA
	this.txtCta = new lib.cta();
	this.txtCta.name = "txtCta";
	this.txtCta.setTransform(75.65,570.8,1,1,0,0,0,0.7,0.1);

	this.timeline.addTween(cjs.Tween.get(this.txtCta).wait(1));

	// CTA_BG
	this.cta = new lib.CTA_btn();
	this.cta.name = "cta";
	this.cta.setTransform(179.15,568.1,1.1404,1.1404,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(1));

	// slider 2
	this.sliders2 = new lib.sliders();
	this.sliders2.name = "sliders2";
	this.sliders2.setTransform(-58.05,0,1,2.3971);

	this.timeline.addTween(cjs.Tween.get(this.sliders2).wait(1));

	// slider
	this.sliders = new lib.sliders();
	this.sliders.name = "sliders";
	this.sliders.setTransform(-58.05,0,1,2.3971);

	this.timeline.addTween(cjs.Tween.get(this.sliders).wait(1));

	// FG2
	this.FG2 = new lib.f2FG();
	this.FG2.name = "FG2";
	this.FG2.setTransform(229.75,90,1,1,0,0,0,79,90);
	this.FG2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.FG2).wait(1));

	// BG2
	this.BG2 = new lib.f2bg();
	this.BG2.name = "BG2";
	this.BG2.setTransform(332.75,232.5,1,1,0,0,0,155,232.5);
	this.BG2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.BG2).wait(1));

	// FG3
	this.FG3 = new lib.FG3();
	this.FG3.name = "FG3";
	this.FG3.setTransform(79,371.1,1,1,0,0,0,79,371.1);
	this.FG3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.FG3).wait(1));

	// BG3
	this.BG3 = new lib.BG3();
	this.BG3.name = "BG3";
	this.BG3.setTransform(79,371.1,1,1,0,0,0,79,371.1);
	this.BG3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.BG3).wait(1));

	// FG1
	this.FG1 = new lib.f1FG();
	this.FG1.name = "FG1";
	this.FG1.setTransform(220.5,125,1,1,0,0,0,220.5,125);

	this.timeline.addTween(cjs.Tween.get(this.FG1).wait(1));

	// BG1
	this.BG1 = new lib.f1BG();
	this.BG1.name = "BG1";
	this.BG1.setTransform(220.5,147,1,1,0,0,0,220.5,147);

	this.timeline.addTween(cjs.Tween.get(this.BG1).wait(1));

	// BG
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(80.0011,299.9992,0.5333,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mainMC, new cjs.Rectangle(-275,0,746.8,601.6), null);


// stage content:
(lib.M365_FY21Q2WorkRemote2_USA_160x600_BAN_YPHeadphones_EN_NA_Standard_ANI_BN_NA_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var mc = exportRoot.mainMC
		exportRoot.replayAnim = "inProgress"
		
		
		this.initBanner = function (data) {
			
			exportRoot.isReplay = false;
			exportRoot.shadowReplay = false;
			
			Object.keys = function(obj) {
				var keys = [];
		
				for (var i in obj) {
				  if (obj.hasOwnProperty(i)) {
					keys.push(i);
				  }
				}
				return keys
			}
			var keys = Object.keys(data)
			
				for (var i in keys) {
					var id = keys[i].substr(0, 4);
						if (id == "head") {
							exportRoot['' + keys[i]] = new Array()
							exportRoot.fillHead(data[keys[i]], exportRoot['' + keys[i]])
						} else if (id == "word") {
							exportRoot['' + keys[i]] = new Array()
							exportRoot.fillDocument(data[keys[i]], exportRoot['' + keys[i]])
						} else if (id == "CTA" && data[keys[i]].length > 1) {
							exportRoot.fillCta(data[keys[i]])
						} else if (id == "CTAa") {
							mc.cta.arrow.visible = data[keys[i]][0]
							mc.cta.arrow.x += data[keys[i]][1]
							mc.cta.arrow.y += data[keys[i]][2]
						}
				}
		}
		
		
		this.fillHead = function (txtDetails, aVar) {
			var text = txtDetails[0]
			var size = txtDetails[1]
			var xOffset = txtDetails[2]
			var yOffset = txtDetails[3]
			var lineSpacing = txtDetails[4]
			var lineWidth = txtDetails[5]
			var align = txtDetails[6]
		
			var aSentenceLine = this.getTheSentences(text, size, xOffset, yOffset, lineSpacing, lineWidth, align)
		
			for (var i = 0; i < aSentenceLine.length; i++) {
				var mc = new createjs.MovieClip();
				mc.y = (i * parseInt(lineSpacing))
				mc.y += yOffset
				mc.y += parseInt(size)
				mc.x += xOffset
		
				var txtWidth = 0
				for (var j = 0; j < aSentenceLine[i].length; j++) {
					var text = new createjs.Text(aSentenceLine[i][j].txt, "normal " + size + " Segoe Pro", aSentenceLine[i][j].color);
					text.textAlign = "Left"
					text.x = txtWidth
					text.textBaseline = "alphabetic"
					txtWidth += (text.getTransformedBounds().width)
					mc.addChild(text)
				}
				if (align == "center") mc.x = mc.x - mc.getTransformedBounds().width / 2
				if (align == "right") mc.x = mc.x - mc.getTransformedBounds().width
				if (mc.getTransformedBounds()) mc.cache(mc.getTransformedBounds().width*-1,mc.getTransformedBounds().height*-1,mc.getTransformedBounds().width*2,mc.getTransformedBounds().height*2,1.8)
				exportRoot.mainMC.txt.addChild(mc);
				aVar.push(mc)
			}
		}
		this.fillDocument = function (txtDetails, aVar) {
			var text = txtDetails[0]
			var size = txtDetails[1]
			var xOffset = txtDetails[2]
			var yOffset = txtDetails[3]
			var lineSpacing = txtDetails[4]
			var lineWidth = txtDetails[5]
			var align = txtDetails[6]
		
			var aSentenceLine = this.getTheSentences(text, size, xOffset, yOffset, lineSpacing, lineWidth, align)
		
			for (var i = 0; i < aSentenceLine.length; i++) {
				var mc = new createjs.MovieClip();
				mc.y = (i * parseInt(lineSpacing))
				mc.y += yOffset
				mc.y += parseInt(size)
				mc.x += xOffset
		
				var txtWidth = 0
				for (var j = 0; j < aSentenceLine[i].length; j++) {
					var text = new createjs.Text(aSentenceLine[i][j].txt, "normal " + size + " Segoe Pro", aSentenceLine[i][j].color);
					text.textAlign = "Left"
					text.x = txtWidth
					text.textBaseline = "alphabetic"
					txtWidth += (text.getTransformedBounds().width)
					mc.addChild(text)
				}
				if (align == "center") mc.x = mc.x - mc.getTransformedBounds().width / 2
				if (align == "right") mc.x = mc.x - mc.getTransformedBounds().width
				if (mc.getTransformedBounds()) mc.cache(mc.getTransformedBounds().width*-1,mc.getTransformedBounds().height*-1,mc.getTransformedBounds().width*2,mc.getTransformedBounds().height*2,1.8)
				exportRoot.mainMC.addChild(mc);
				aVar.push(mc)
			}
		}
		
		
		
		this.fillCta = function (txtDetails) {
			var text = txtDetails[0]
			var size = txtDetails[1]
			var xOffset = txtDetails[2]
			var yOffset = txtDetails[3]
			var lineSpacing = txtDetails[4]
			var lineWidth = txtDetails[5]
			var align = txtDetails[6]
		
		
			var aSentenceLine = this.getTheSentences(text, size, xOffset, yOffset, lineSpacing, lineWidth, align)
		
			for (var i = 0; i < aSentenceLine.length; i++) {
				var mc = new createjs.MovieClip();
				mc.y = (i * parseInt(lineSpacing))
				mc.y += yOffset
				mc.y += (parseInt(size) * 0.90)
				mc.x += xOffset
		
				var txtWidth = 0
				for (var j = 0; j < aSentenceLine[i].length; j++) {
					var text = new createjs.Text(aSentenceLine[i][j].txt, "normal " + size + " Segoe Pro", aSentenceLine[i][j].color);
					text.textAlign = "Left"
					text.x = txtWidth
					text.textBaseline = "alphabetic"
					txtWidth += (text.getTransformedBounds().width)
					mc.addChild(text)
				}
				if (align == "center") mc.x = mc.x - mc.getTransformedBounds().width / 2
				if (align == "right") mc.x = mc.x - mc.getTransformedBounds().width
				mc.y = mc.y - (mc.getTransformedBounds().height / 2)
				if (mc.getTransformedBounds()) mc.cache(mc.getTransformedBounds().width*-1,mc.getTransformedBounds().height*-1,mc.getTransformedBounds().width*2,mc.getTransformedBounds().height*2,1.5)
				this.mainMC.txtCta.addChild(mc);
			}
		}
		
		this.getTheSentences = function (text, size, xOffset, yOffset, lineSpacing, lineWidth, align) {
			var sentences = new Array()
			var aSentenceLine = new Array()
			var aStr = text.substr(0);
			sentences = aStr.split("|");
			var lastColor = "#000000"
			// Figure out the setence lines
		
			for (var i = 0; i < sentences.length; i++) {
				var aS = sentences[i].substr(0);
				var aSplit = new Array()
				aSplit = aS.split("<");
				aSplit = aSplit.filter(Boolean)
				var wholeSentence = new Array()
		
				for (var j = 0; j < aSplit.length; j++) {
		
					var checkColor = aSplit[j].indexOf("#")
					var color = (checkColor == -1) ? lastColor : aSplit[j].substr(0, 7);
					lastColor = color
					var txt = (checkColor == -1) ? aSplit[j].substr(0) : aSplit[j].substr(8);
					var subSentence = {
						color: color,
						txt: txt
					};
					wholeSentence.push(subSentence)
				}
				aSentenceLine.push(wholeSentence)
			}
			return aSentenceLine
		}
		
		
		var mc = exportRoot.mainMC;
		
		//var blur1 = mc.img1_blur
		
		
		mc.cta.alpha = 0;
		mc.replay_btn.alpha = 0;
		
		
		
		this.runBanner = function() {
				
				mc.s_logo.alpha = 0;
				mc.cta.alpha = 1;
				mc.replay_btn.alpha = 1;
				mc.FG1.f1_blur_fg.alpha = 1;
				mc.BG1.f1_blur_bg.alpha = 1;
				mc.FG2.f2_blur_fg.alpha = 1;
				mc.BG2.f2_blur_bg.alpha = 1;
				mc.FG3.f3_blur_fg.alpha = 1;
				mc.BG3.f3_blur_bg.alpha = 1;
				
						
						
				this.tl1 = new TimelineLite();
				
				this.tl1.to(mc.FG1.f1_blur_fg, 2, {alpha:0, ease:Power2.easeInOut}, "-=0.5");
				this.tl1.to(mc.BG1.f1_blur_bg, 2, {alpha:0, ease:Power2.easeInOut}, "-=2");
				this.tl1.to(mc.s_logo, 0.5, {alpha:1, ease:Power2.easeInOut}, "-=1");
				this.tl1.from(mc.FG1, 2, {x: "+=35", ease:Power2.easeOut}, "-=1.5");
				this.tl1.from(mc.BG1, 2, {x: "+=15", ease:Power2.easeOut}, "-=2");
				
				this.tl1.from(mc.sliders.front, 1, {x: "+=400", ease:Power4.easeOut}, "+=0.4");
				this.tl1.from(mc.sliders.back, 1, {x: "+=400", ease:Power4.easeOut}, "-=0.9");
		
				this.tl1.to(mc.FG1, 1, {x: "-=18", ease:Power2.easeInOut}, "-=1.5");
				this.tl1.to(mc.BG1, 1, {x: "-=10", ease:Power2.easeInOut}, "-=1.5");
				this.tl1.to(mc.FG1.f1_blur_fg, 1, {alpha:1, ease:Power2.easeInOut}, "-=1.5");
				this.tl1.to(mc.BG1.f1_blur_bg, 1, {alpha:1, ease:Power2.easeInOut}, "-=1.5");
				
				
		
				
		// 1st text
		
				this.tl1.from(exportRoot.headline1, 0.2, { y: "+=0", alpha: 0, ease:Power4.easeOut}, "-=0.6");
				this.tl1.to(exportRoot.headline1, 0.2, { y: "+=0", alpha: 0, ease:Power4.easeOut}, "-=0.2");
					
				this.tl1.from(exportRoot.headline2, 0.2, { y: "+=0", alpha: 0, ease:Power4.easeOut}, "-=0.2");
				this.tl1.to(exportRoot.headline2, 0.2, { y: "+=0", alpha: 0, ease:Power4.easeOut}, "+=0.2");
			
				this.tl1.from(exportRoot.headline3, 0.2, { y: "+=0", alpha: 0, ease:Power4.easeOut}, "-=0.2");
		//		this.tl1.from(exportRoot.headline3a, 0.2, { y: "+=0", alpha: 0, ease:Power4.easeOut}, "-=0.2");
				this.tl1.to(exportRoot.headline3, 0.2, { y: "+=0", alpha: 0, ease:Power4.easeOut}, "+=0.5");
		//		this.tl1.to(exportRoot.headline3a, 0.2, { y: "+=0", alpha: 0, ease:Power4.easeOut}, "-=0.2");
				
				this.tl1.from(exportRoot.headline4, 0.2, { y: "+=0", alpha: 0, ease:Power4.easeOut}, "-=0.2");
				this.tl1.to(exportRoot.headline4, 0.2, { y: "+=0", alpha: 0, ease:Power4.easeOut}, "+=0.2");
				
				this.tl1.from(exportRoot.headline5, 0.2, { y: "+=0", alpha: 0, ease:Power4.easeOut}, "-=0.2");
		//		this.tl1.from(exportRoot.headline5a, 0.2, { y: "+=0", alpha: 0, ease:Power4.easeOut}, "-=0.2");
				this.tl1.to(exportRoot.headline5, 0.2, { y: "+=0", alpha: 0, ease:Power4.easeOut}, "+=0.8");
		//		this.tl1.to(exportRoot.headline5a, 0.2, { y: "+=0", alpha: 0, ease:Power4.easeOut}, "-=0.2");
		
		////////////////
				this.tl1.to(mc.FG1, 1.5, {alpha:0, ease:Power2.easeOut}, "-=1.5");
				this.tl1.to(mc.BG1, 1.5, {alpha:0, ease:Power2.easeOut}, "-=1.5");
				
				this.tl1.to(mc.FG2, 1.5, {alpha:1, ease:Power2.easeInOut}, "-=1.6");
				this.tl1.to(mc.BG2, 1.5, {alpha:1, ease:Power2.easeInOut}, "-=1.6");
				
				this.tl1.to(mc.sliders.front, 1, {x: "-=400", ease:Power4.easeIn}, "-=0.4");
				this.tl1.to(mc.sliders.back, 1, {x: "-=400", ease:Power4.easeIn}, "-=0.9");
		
				this.tl1.to(mc.FG2, 1.5, {x: "-=158", ease:Power2.easeInOut}, "-=1");
				this.tl1.to(mc.BG2, 1.5, {x: "-=150", ease:Power2.easeInOut}, "-=1.5");
				
				this.tl1.to(mc.FG2.f2_blur_fg, 1, {alpha:0, ease:Power4.easeOut}, "-=1");
				this.tl1.to(mc.BG2.f2_blur_bg, 1, {alpha:0, ease:Power4.easeOut}, "-=1");
		
				
				this.tl1.from(mc.sliders2.front, 1, {x: "+=400", ease:Power4.easeOut}, "+=1");
				this.tl1.from(mc.sliders2.back, 1, {x: "+=400", ease:Power4.easeOut}, "-=0.9");
				
				this.tl1.to(mc.FG2, 1, {x: "-=18", ease:Power2.easeInOut}, "-=1.5");
				this.tl1.to(mc.BG2, 1, {x: "-=10", ease:Power2.easeInOut}, "-=1.5");
				this.tl1.to(mc.FG2.f2_blur_fg, 1, {alpha:1, ease:Power2.easeInOut}, "-=1.5");
				this.tl1.to(mc.BG2.f2_blur_bg, 1, {alpha:1, ease:Power2.easeInOut}, "-=1.5");
		
				
		// 2nd text	
				this.tl1.from(exportRoot.headline6, 0.2, { y: "+=0", alpha: 0, ease:Power4.easeOut}, "-=0.6");
				this.tl1.to(exportRoot.headline6, 0.2, { y: "+=0", alpha: 0, ease:Power4.easeOut}, "-=0.2");
					
				this.tl1.from(exportRoot.headline7, 0.2, { y: "+=0", alpha: 0, ease:Power4.easeOut}, "-=0.2");
				this.tl1.to(exportRoot.headline7, 0.2, { y: "+=0", alpha: 0, ease:Power4.easeOut}, "+=0.2");
			
				this.tl1.from(exportRoot.headline8, 0.2, { y: "+=0", alpha: 0, ease:Power4.easeOut}, "-=0.2");
				this.tl1.to(exportRoot.headline8, 0.2, { y: "+=0", alpha: 0, ease:Power4.easeOut}, "+=0.5");
				
				this.tl1.from(exportRoot.headline9, 0.2, { y: "+=0", alpha: 0, ease:Power4.easeOut}, "-=0.2");
				this.tl1.to(exportRoot.headline9, 0.2, { y: "+=0", alpha: 0, ease:Power4.easeOut}, "+=0.2");
				
				this.tl1.from(exportRoot.headline10, 0.2, { y: "+=0", alpha: 0, ease:Power4.easeOut}, "-=0.2");
		//		this.tl1.from(exportRoot.headline10a, 0.2, { y: "+=0", alpha: 0, ease:Power4.easeOut}, "-=0.2");
				this.tl1.to(exportRoot.headline10, 0.2, { y: "+=0", alpha: 0, ease:Power4.easeOut}, "+=0.2");
		//		this.tl1.to(exportRoot.headline10a, 0.2, { y: "+=0", alpha: 0, ease:Power4.easeOut}, "-=0.2");
				
				this.tl1.from(exportRoot.headline11, 0.2, { y: "+=0", alpha: 0, ease:Power4.easeOut}, "-=0.2");
				this.tl1.to(exportRoot.headline11, 0.2, { y: "+=0", alpha: 0, ease:Power4.easeOut}, "+=0.8");
		/////////////
				
				
				this.tl1.to(mc.FG2, 1.5, {alpha:0, ease:Power2.easeOut}, "-=1.5");
				this.tl1.to(mc.BG2, 1.5, {alpha:0, ease:Power2.easeOut}, "-=1.5");
				
				this.tl1.to(mc.FG3, 1.5, {alpha:1, ease:Power2.easeInOut}, "-=1.6");
				this.tl1.to(mc.BG3, 1.5, {alpha:1, ease:Power2.easeInOut}, "-=1.6");
				
				this.tl1.to(mc.sliders2.front, 1, {x: "-=400", ease:Power4.easeIn}, "-=0.4");
				this.tl1.to(mc.sliders2.back, 1, {x: "-=400", ease:Power4.easeIn}, "-=0.9");
		
				this.tl1.to(mc.FG3, 1.5, {x: "-=18", ease:Power2.easeInOut}, "-=1");
				this.tl1.to(mc.BG3, 1.5, {x: "-=10", ease:Power2.easeInOut}, "-=1.5");
				
				this.tl1.to(mc.FG3.f3_blur_fg, 1, {alpha:0, ease:Power4.easeOut}, "-=1");
				this.tl1.to(mc.BG3.f3_blur_bg, 1, {alpha:0, ease:Power4.easeOut}, "-=1");
				
				this.tl1.to(mc.BG3, 1.5, {scale: 0.412,x:"+=37",y:"+=17", ease:Power2.easeInOut}, "+=1");
				this.tl1.to(mc.FG3, 1.5, {scale: 0.412,x:"+=45",y:"+=17", ease:Power2.easeInOut}, "-=1.5");
						
				
				
				
				for (var i = 0; i < exportRoot.headline20.length; i++) {
					if (i==0) this.tl1.from(exportRoot.headline20[i], 0.8, { y: "+=30", alpha: 0, ease:Power4.easeOut}, "-=0.6");
					if (i!=0) this.tl1.from(exportRoot.headline20[i], 0.8, { y: "+=30", alpha: 0, ease:Power4.easeOut}, "-=0.6");
				}
		
				for (var i = 0; i < exportRoot.headline30.length; i++) {
					if (i==0) this.tl1.from(exportRoot.headline30[i], 0.8, { y: "+=30", alpha: 0, ease:Power4.easeOut}, "-=0.6");
					if (i!=0) this.tl1.from(exportRoot.headline30[i], 0.8, { y: "+=30", alpha: 0, ease:Power4.easeOut}, "-=0.8");
				}
				
				
			
				
				this.tl1.from(mc.cta, 0.6, { x: "+=150", ease:Power4.easeOut}, "-=1");
				this.tl1.from(mc.txtCta, 0.6, { x: "+=150", ease:Power4.easeOut}, "-=1");
				this.tl1.from(mc.replay_btn, 1, { alpha: 0, onStart:function(){exportRoot.isReplay = true;}}, "-=0.4");
				
				this.tl1.stop();
				
				mc.logo_intro.gotoAndPlay(1);
				
		
			
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// mainMC
	this.mainMC = new lib.mainMC();
	this.mainMC.name = "mainMC";
	this.mainMC.setTransform(0,0.1,0.9968,0.9997,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.mainMC).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-194.1,299.9,664.4,301.4);
// library properties:
lib.properties = {
	id: '90A26FE74B042E4A89CA750D1DA2DF1F',
	width: 160,
	height: 600,
	fps: 40,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/BG.jpg", id:"BG"},
		{src:"images/BG2.jpg", id:"BG2"},
		{src:"images/bg3.jpg", id:"bg3"},
		{src:"images/BG_blur.jpg", id:"BG_blur"},
		{src:"images/bg_blur2.jpg", id:"bg_blur2"},
		{src:"images/bg_blur3.jpg", id:"bg_blur3"},
		{src:"images/FG.png", id:"FG"},
		{src:"images/fg2.png", id:"fg2"},
		{src:"images/fg3.png", id:"fg3"},
		{src:"images/FG_Blur.png", id:"FG_Blur"},
		{src:"images/fg_blur2.png", id:"fg_blur2"},
		{src:"images/fg_blur3.png", id:"fg_blur3"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['90A26FE74B042E4A89CA750D1DA2DF1F'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;