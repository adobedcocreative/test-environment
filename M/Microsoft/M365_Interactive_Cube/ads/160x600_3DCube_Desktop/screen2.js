(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"screen2_atlas_1", frames: [[0,0,256,344],[0,346,256,256]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
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



(lib.OneDriveimg = function() {
	this.initialize(ss["screen2_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Share_OneDrive_16x9_160x600_1_img = function() {
	this.initialize(ss["screen2_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.static2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Share_OneDrive_16x9_160x600_1_img();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.static2, new cjs.Rectangle(0,0,256,256), null);


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


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.OneDriveimg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,256,344), null);


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
		this.ms.cache(-105,-16,210,32,1.5)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.ms = new lib.ms();
	this.ms.name = "ms";
	this.ms.setTransform(13.65,1.05);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEBA00").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape.setTransform(-34.375,7.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#03A5EA").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape_1.setTransform(-45.675,7.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7CBB01").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape_2.setTransform(-34.375,-4.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F25022").s().p("AgyAzIAAhlIBlAAIAABlg");
	this.shape_3.setTransform(-45.675,-4.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.ms}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MSFT_Logo_anim, new cjs.Rectangle(-50.8,-9.3,132.39999999999998,21.5), null);


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

	// logo
	this.instance = new lib.MSFT_Logo_anim();
	this.instance.setTransform(106.3,303.45,1.42,1.42,0,0,0,0.2,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// img
	this.static2 = new lib.static2();
	this.static2.name = "static2";
	this.static2.setTransform(128,128,1,1,0,0,0,128,128);

	this.instance_1 = new lib.ClipGroup();
	this.instance_1.setTransform(149.8,815.2,1,1,0,0,0,149.8,152.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.static2}]}).wait(1));

	// txt
	this.txt = new lib.txt_mc();
	this.txt.name = "txt";
	this.txt.setTransform(70.5,150.5,1,1,0,0,0,70.5,70.5);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	// BG
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2F2F2").s().p("EgV/BY2MAAAixrMAr/AAAMAAACxrg");
	this.shape.setTransform(128,557.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mainMC, new cjs.Rectangle(-30,-31,317,1200), null);


// stage content:
(lib.screen2 = function(mode,startPosition,loop,reversed) {
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
		var mc = exportRoot2.mainMC
		exportRoot2.replayAnim = "inProgress"
		
		this.initBanner = function (data) {
			
			exportRoot2.isReplay = false;
			exportRoot2.shadowReplay = false;
			
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
					var id = keys[i].substr(0, 9);
						if (id == "headline2") {
							exportRoot2['' + keys[i]] = new Array()
							exportRoot2.fillHead(data[keys[i]], exportRoot2['' + keys[i]])
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
				exportRoot2.mainMC.txt.addChild(mc);
				aVar.push(mc)
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
		
		var mc = exportRoot2.mainMC;
		
		
		this.runBanner = function() {
			
		
						
				//this.tlText = new TimelineLite();
				
				//for (var i = 0; i < exportRoot2.headline1_1.length; i++) {
					//if (i==0) this.tlText.from(exportRoot2.headline1_1[i], 0.8, { y: "+=30", alpha: 0, ease:Power4.easeOut}, "+=1");
					//if (i!=0) this.tlText.from(exportRoot2.headline1_1[i], 0.8, { y: "+=30", alpha: 0, ease:Power4.easeOut}, "-=0.65");
				//}
		
				
				
				//this.tlText.from(mc.img, 0.6, { alpha: 0, ease:Power4.easeOut}, "-=0.4");
		
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// mainMC
	this.mainMC = new lib.mainMC();
	this.mainMC.name = "mainMC";
	this.mainMC.setTransform(62.8,62.8,1,1,0,0,0,62.8,62.8);

	this.timeline.addTween(cjs.Tween.get(this.mainMC).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(115.2,500.5,153.60000000000002,625.0999999999999);
// library properties:
lib.properties = {
	id: '20B396A144B6A147B6E87DD2DC23AB3C',
	width: 256,
	height: 1024,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/screen2_atlas_1.png?1600449380451", id:"screen2_atlas_1"}
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
an.compositions['20B396A144B6A147B6E87DD2DC23AB3C'] = {
	getStage: function() { return exportRoot2.stage; },
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

}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;