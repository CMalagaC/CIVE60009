(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"lfrs_atlas_1", frames: [[845,462,179,35],[0,339,843,467],[845,499,79,31],[1042,339,223,35],[845,388,249,35],[845,425,221,35],[845,339,195,47],[0,808,729,70],[731,808,137,200],[0,0,1280,337]]}
];


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



(lib.CachedBmp_362 = function() {
	this.initialize(ss["lfrs_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_359 = function() {
	this.initialize(ss["lfrs_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_361 = function() {
	this.initialize(ss["lfrs_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_358 = function() {
	this.initialize(ss["lfrs_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_357 = function() {
	this.initialize(ss["lfrs_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_356 = function() {
	this.initialize(ss["lfrs_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_360 = function() {
	this.initialize(ss["lfrs_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_355 = function() {
	this.initialize(ss["lfrs_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.cpngoncretewall = function() {
	this.initialize(ss["lfrs_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.MicrosoftTeamsimage13 = function() {
	this.initialize(ss["lfrs_atlas_1"]);
	this.gotoAndStop(9);
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


(lib.Symbol3r = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.cpngoncretewall();
	this.instance.setTransform(0,0,1.1799,1.3362);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3r, new cjs.Rectangle(0,0,161.7,267.3), null);


(lib.StartBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// label
	this.txt = new cjs.Text("start/stop", "10px 'Avenir Next'");
	this.txt.name = "txt";
	this.txt.textAlign = "right";
	this.txt.lineHeight = 16;
	this.txt.lineWidth = 62;
	this.txt.parent = this;
	this.txt.setTransform(65.55,-4.65);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(4));

	// skins
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(102,102,102,0)").ss(0.1,2,1).p("AAAAAIAAAA");
	this.shape.setTransform(49.75,14.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003E74").s().p("AA6B4IgBAAIk7AAIAAjvIGMAAQAyAAAkAjQAiAkABAwQgBAxgiAjQgkAkgyAAg");
	this.shape_1.setTransform(43.95,2.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.6,-9.7,68.2,25);


(lib.redot = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("rgba(255,0,0,0.4)").s().p("AhHBHQgcgdAAgqQAAgqAcgdQAdgcAqAAQAqAAAdAcQAdAdAAAqQAAAqgdAdQgdAdgqAAQgqAAgdgdg");
	this.shape.setTransform(10.025,10.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,0,0,0.38)").s().p("AhLBLQgegfAAgsQAAgsAegfQAfgeAsAAQAsAAAfAeQAfAfAAAsQAAAsgfAfQgfAfgsAAQgsAAgfgfg");
	this.shape_1.setTransform(10.025,10.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,0,0,0.357)").s().p("AhOBPQggggAAgvQAAguAgggQAgggAuAAQAvAAAgAgQAgAgAAAuQAAAvggAgQggAggvAAQguAAggggg");
	this.shape_2.setTransform(10.025,10.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,0,0,0.337)").s().p("AhSBTQghgiAAgxQAAgwAhgiQAighAwAAQAxAAAiAhQAhAiAAAwQAAAxghAiQgiAhgxAAQgwAAgighg");
	this.shape_3.setTransform(10.025,10.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,0,0,0.318)").s().p("AhWBWQgigjAAgzQAAgzAigjQAjgiAzAAQAzAAAjAiQAjAjAAAzQAAAzgjAjQgjAjgzAAQgzAAgjgjg");
	this.shape_4.setTransform(10.025,10.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,0,0,0.294)").s().p("AhaBaQgkglAAg1QAAg1AkglQAlgkA1AAQA1AAAlAkQAlAlAAA1QAAA1glAlQglAlg1AAQg1AAglglg");
	this.shape_5.setTransform(10.025,10.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,0,0,0.275)").s().p("AhdBeQgmgmAAg4QAAg3AmgmQAmgmA3AAQA4AAAmAmQAmAmAAA3QAAA4gmAmQgmAmg4AAQg3AAgmgmg");
	this.shape_6.setTransform(10.025,10.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,0,0,0.251)").s().p("AhhBiQgngoAAg6QAAg5AngoQAognA5AAQA6AAAoAnQAnAoAAA5QAAA6gnAoQgoAng6AAQg5AAgogng");
	this.shape_7.setTransform(10.025,10.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,0,0,0.231)").s().p("AhlBlQgpgpAAg8QAAg8ApgpQApgpA8AAQA8AAApApQAqApgBA8QABA8gqApQgpAqg8gBQg8ABgpgqg");
	this.shape_8.setTransform(10.05,10.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,0,0,0.212)").s().p("AhpBpQgqgrAAg+QAAg+AqgrQArgqA+AAQA+AAArAqQArArAAA+QAAA+grArQgrArg+AAQg+AAgrgrg");
	this.shape_9.setTransform(10.025,10.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,0,0,0.188)").s().p("AhtBsQgrgrAAhBQAAhBArgsQAsgrBBAAQBBAAArArQAtAsAABBQAABBgtArQgrAthBAAQhBAAgsgtg");
	this.shape_10.setTransform(10.05,10.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,0,0,0.169)").s().p("AhwBxQgtguAAhDQAAhCAtguQAugtBCAAQBDAAAuAtQAtAuAABCQAABDgtAuQguAthDAAQhCAAgugtg");
	this.shape_11.setTransform(10.025,10.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,0,0,0.149)").s().p("Ah0B0QgvgvAAhFQAAhFAvgvQAvgvBFAAQBFAAAvAvQAvAvAABFQAABFgvAvQgvAvhFAAQhFAAgvgvg");
	this.shape_12.setTransform(10.05,10.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,0,0,0.125)").s().p("Ah4B4QgwgxAAhHQAAhHAwgxQAxgwBHAAQBHAAAxAwQAxAxAABHQAABHgxAxQgxAxhHAAQhHAAgxgxg");
	this.shape_13.setTransform(10.05,10.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,0,0,0.106)").s().p("Ah8B8QgxgyAAhKQAAhJAxgzQAzgxBJAAQBKAAAyAxQAyAzAABJQAABKgyAyQgyAyhKAAQhJAAgzgyg");
	this.shape_14.setTransform(10.05,10.05);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,0,0,0.082)").s().p("Ah/B/Qg0g0AAhLQAAhMA0gzQAzg0BMAAQBLAAA0A0QA0AzAABMQAABLg0A0Qg0A0hLAAQhMAAgzg0g");
	this.shape_15.setTransform(10.05,10.05);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,0,0,0.063)").s().p("AiDCDQg0g1AAhOQAAhOA0g1QA1g0BOAAQBOAAA1A0QA2A1AABOQAABOg2A1Qg1A2hOAAQhOAAg1g2g");
	this.shape_16.setTransform(10.05,10.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,0,0,0.043)").s().p("AiHCHQg2g3AAhQQAAhQA2g3QA3g2BQAAQBQAAA3A2QA3A3AABQQAABQg3A3Qg3A3hQAAQhQAAg3g3g");
	this.shape_17.setTransform(10.05,10.05);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,0,0,0.02)").s().p("AiKCLQg4g5AAhSQAAhSA4g4QA4g4BSAAQBSAAA5A4QA4A4AABSQAABSg4A5Qg5A4hSAAQhSAAg4g4g");
	this.shape_18.setTransform(10.05,10.05);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,0,0,0)").s().p("AiPCOQg4g6AAhUQAAhUA4g7QA7g4BUAAQBUAAA6A4QA6A7AABUQAABUg6A6Qg6A6hUAAQhUAAg7g6g");
	this.shape_19.setTransform(10.05,10.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,40.1,40.1);


(lib.momentframe = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_32
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,2,0,3).p("ADI/1MAABAgNIAAfeImQAAIAA/XMgABggUg");
	this.shape.setTransform(-402.2751,-23.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#666666","#999999"],[0,1],-117.6,0,117.6,0).s().p("AjHf2IAA/XMgABggUIGQAAMAABAgMIAAffg");
	this.shape_1.setTransform(-402.275,-23.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,2,0,3).p("AjI/1IGQAAQgJQHAJQGQAJPxgJPtImQAAQAKvqgKvtQgIwJAIwLg");
	this.shape_2.setTransform(-402.2439,-23.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#666666","#999999"],[0,1],-112.9,0,112.8,0).s().p("AjIf2QAKvqgKvtQgIwJAIwLIGQAAQgJQHAJQFQAJPxgJPug");
	this.shape_3.setTransform(-402.2439,-23.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,2,0,3).p("AjI/1IGQAAQgSQHASQGQARPzgRPrImQAAQATvpgTvuQgQwJAQwLg");
	this.shape_4.setTransform(-402.2438,-23.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#666666","#999999"],[0,1],-108.1,0,108.1,0).s().p("AjIf2QATvpgTvuQgQwJAQwLIGQAAQgSQHASQFQARPzgRPsg");
	this.shape_5.setTransform(-402.2438,-23.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(2,2,0,3).p("AjI/1IGQAAQgaQHAaQGQAZP1gZPpImQAAQAdvogdvvQgYwJAYwLg");
	this.shape_6.setTransform(-402.2313,-23.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#666666","#999999"],[0,1],-103.4,0,103.4,0).s().p("AjIf2QAdvogdvvQgYwJAYwLIGQAAQgaQHAaQFQAZP2gZPpg");
	this.shape_7.setTransform(-402.2313,-23.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(2,2,0,3).p("AjI/1IGQAAQgjQHAjQGQAiP3giPnImQAAQAmvngmvwQggwJAgwLg");
	this.shape_8.setTransform(-402.2188,-23.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#666666","#999999"],[0,1],-98.7,0,98.7,0).s().p("AjIf2QAmvngmvwQggwJAgwLIGQAAQgjQHAjQFQAiP4giPng");
	this.shape_9.setTransform(-402.2188,-23.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(2,2,0,3).p("AjI/1IGQAAQgsQHAsQGQAqP5gqPlImQAAQAwvmgwvxQgowJAowLg");
	this.shape_10.setTransform(-402.2188,-23.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#666666","#999999"],[0,1],-93.9,0,94,0).s().p("AjIf2QAwvmgwvxQgowJAowLIGQAAQgsQHAsQFQAqP6gqPlg");
	this.shape_11.setTransform(-402.2188,-23.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(2,2,0,3).p("AjI/1IGQAAQg1QHA1QGQAyP7gyPjImQAAQA6vlg6vyQgwwJAwwLg");
	this.shape_12.setTransform(-402.2063,-23.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#666666","#999999"],[0,1],-89.2,0,89.3,0).s().p("AjIf2QA6vlg6vyQgwwJAwwLIGQAAQg1QHA1QFQAyP8gyPjg");
	this.shape_13.setTransform(-402.2063,-23.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(2,2,0,3).p("AjI/1IGQAAQg+QHA+QGQA6P9g6PhImQAAQBDvkhDvzQg4wJA4wLg");
	this.shape_14.setTransform(-402.2063,-23.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#666666","#999999"],[0,1],-84.5,0,84.5,0).s().p("AjIf2QBDvkhDvzQg4wJA4wLIGQAAQg+QHA+QFQA6P+g6Phg");
	this.shape_15.setTransform(-402.2063,-23.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(2,2,0,3).p("AjJ/1IGQAAQhGQHBHQGQBCP/hCPfImQAAQBMvjhMv0QhAwJA/wLg");
	this.shape_16.setTransform(-402.1938,-23.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#666666","#999999"],[0,1],-79.8,0,79.8,0).s().p("AjIf2QBMvjhMv0QhAwJA/wLIGQAAQhGQHBHQFQBCQAhCPfg");
	this.shape_17.setTransform(-402.1938,-23.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(2,2,0,3).p("AjJ/1IGQAAQhPQHBQQGQBLQBhLPdImQAAQBWvihWv1QhIwJBHwLg");
	this.shape_18.setTransform(-402.1813,-23.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#666666","#999999"],[0,1],-75,0,75.1,0).s().p("AjIf2QBWvihWv1QhIwJBHwLIGQAAQhPQHBQQFQBLQChLPdg");
	this.shape_19.setTransform(-402.1813,-23.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(2,2,0,3).p("AjJ/1IGQAAQhYQHBZQGQBTQEhTPaImQAAQBfvhhfv2QhQwJBPwLg");
	this.shape_20.setTransform(-402.1688,-23.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#666666","#999999"],[0,1],-70.3,0,70.3,0).s().p("AjIf2QBfvhhfv2QhQwJBPwLIGQAAQhYQHBZQFQBTQFhTPag");
	this.shape_21.setTransform(-402.1688,-23.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(2,2,0,3).p("AjJ/1IGQAAQhhQHBiQGQBbQGhbPYImQAAQBpvghpv3QhYwJBXwLg");
	this.shape_22.setTransform(-402.1563,-23.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#666666","#999999"],[0,1],-65.6,0,65.6,0).s().p("AjIf2QBpvghpv3QhYwJBXwLIGQAAQhhQHBiQFQBbQGhbPZg");
	this.shape_23.setTransform(-402.1563,-23.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(2,2,0,3).p("AjJ/1IGQAAQhqQHBqQGQBkQIhkPWImQAAQBzvfhzv4QhfwJBfwLg");
	this.shape_24.setTransform(-402.1438,-23.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#666666","#999999"],[0,1],-60.8,0,60.9,0).s().p("AjJf2QBzvfhzv4QhfwJBfwLIGQAAQhqQHBqQFQBkQIhkPXg");
	this.shape_25.setTransform(-402.1438,-23.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(2,2,0,3).p("AjJ/1IGQAAQhzQHBzQGQBsQKhsPUImQAAQB8veh8v5QhnwJBnwLg");
	this.shape_26.setTransform(-402.1438,-23.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#666666","#999999"],[0,1],-56.1,0,56.2,0).s().p("AjJf2QB8veh8v5QhnwJBnwLIGQAAQhzQHBzQFQBsQLhsPUg");
	this.shape_27.setTransform(-402.1438,-23.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(2,2,0,3).p("AjJ/1IGQAAQh8QHB8QGQB1QMh1PSImQAAQCGvdiGv6QhvwJBvwLg");
	this.shape_28.setTransform(-402.1313,-23.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#666666","#999999"],[0,1],-51.4,0,51.4,0).s().p("AjJf2QCGvdiGv6QhvwJBvwLIGQAAQh8QHB8QFQB1QMh1PTg");
	this.shape_29.setTransform(-402.1313,-23.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(2,2,0,3).p("AjJ/1IGQAAQiFQHCFQGQB9QOh9PQImQAAQCQvbiQv8Qh3wJB3wLg");
	this.shape_30.setTransform(-402.1313,-23.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#666666","#999999"],[0,1],-46.7,0,46.7,0).s().p("AjJf2QCQvbiQv8Qh3wJB3wLIGQAAQiFQHCFQFQB9QOh9PRg");
	this.shape_31.setTransform(-402.1313,-23.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(2,2,0,3).p("AjJ/1IGQAAQiOQHCOQGQCFQQiFPOImQAAQCZvaiZv9Qh/wJB/wLg");
	this.shape_32.setTransform(-402.1188,-23.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#666666","#999999"],[0,1],-41.9,0,42,0).s().p("AjJf2QCZvaiZv9Qh/wJB/wLIGQAAQiOQHCOQFQCFQRiFPOg");
	this.shape_33.setTransform(-402.1188,-23.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(2,2,0,3).p("AjJ/1IGQAAQiXQHCXQGQCOQSiOPMImQAAQCjvZijv+QiHwJCHwLg");
	this.shape_34.setTransform(-402.1063,-23.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#666666","#999999"],[0,1],-37.2,0,37.3,0).s().p("AjJf2QCjvZijv+QiHwJCHwLIGQAAQiXQHCXQFQCOQTiOPMg");
	this.shape_35.setTransform(-402.1063,-23.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(2,2,0,3).p("AjJ/1IGQAAQigQHCgQGQCWQUiWPKImQAAQCsvYisv/QiPwJCPwLg");
	this.shape_36.setTransform(-402.1063,-23.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#666666","#999999"],[0,1],-32.5,0,32.5,0).s().p("AjJf2QCsvYisv/QiPwJCPwLIGQAAQigQHCgQFQCWQViWPKg");
	this.shape_37.setTransform(-402.1063,-23.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(2,2,0,3).p("ADG/1QioQHCpQGQCeQWiePIImQAAQC1vYi1v/QiYwJCXwLg");
	this.shape_38.setTransform(-402.0955,-23.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#666666","#999999"],[0,1],-27.8,0,27.8,0).s().p("AjJf2QC1vYi1v/QiYwJCXwLIGQAAQioQHCpQFQCeQXiePIg");
	this.shape_39.setTransform(-402.0955,-23.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(2,2,0,3).p("AjJ/1IGQAAQigQHCgQGQCWQUiWPKImQAAQCtvYitv/QiQwJCQwLg");
	this.shape_40.setTransform(-402.1063,-23.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#666666","#999999"],[0,1],-27.4,0,27.4,0).s().p("AjJf2QCtvYitv/QiQwJCQwLIGQAAQigQHCgQFQCWQViWPKg");
	this.shape_41.setTransform(-402.1063,-23.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(2,2,0,3).p("AjJ/1IGQAAQiYQHCYQGQCOQSiOPMImQAAQCkvZikv+QiIwJCIwLg");
	this.shape_42.setTransform(-402.1188,-23.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#666666","#999999"],[0,1],-27,0,27.1,0).s().p("AjJf2QCkvZikv+QiIwJCIwLIGQAAQiYQHCYQFQCOQTiOPMg");
	this.shape_43.setTransform(-402.1188,-23.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(2,2,0,3).p("AjJ/1IGQAAQiPQHCPQGQCHQQiHPOImQAAQCbvaibv9QiBwJCBwLg");
	this.shape_44.setTransform(-402.1188,-23.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#666666","#999999"],[0,1],-26.6,0,26.7,0).s().p("AjJf2QCbvaibv9QiBwJCBwLIGQAAQiPQHCPQFQCHQRiHPOg");
	this.shape_45.setTransform(-402.1188,-23.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(2,2,0,3).p("AjJ/1IGQAAQiHQHCHQFQB/QPh/PQImQAAQCRvciRv7Qh5wJB5wLg");
	this.shape_46.setTransform(-402.1188,-23.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#666666","#999999"],[0,1],-26.2,0,26.3,0).s().p("AjJf2QCRvbiRv8Qh5wJB5wLIGQAAQiHQHCHQFQB/QPh/PQg");
	this.shape_47.setTransform(-402.1188,-23.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(2,2,0,3).p("AjJ/1IGQAAQh+QHB+QGQB3QMh3PSImQAAQCIvciIv7QhxwJBxwLg");
	this.shape_48.setTransform(-402.1313,-23.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#666666","#999999"],[0,1],-25.8,0,25.9,0).s().p("AjJf2QCIvciIv7QhxwJBxwLIGQAAQh+QHB+QFQB3QNh3PSg");
	this.shape_49.setTransform(-402.1313,-23.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(2,2,0,3).p("AjJ/1IGQAAQh2QHB2QGQBvQKhvPUImQAAQB/vdh/v6QhqwJBqwLg");
	this.shape_50.setTransform(-402.1438,-23.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#666666","#999999"],[0,1],-25.5,0,25.5,0).s().p("AjJf2QB/vdh/v6QhqwJBqwLIGQAAQh2QHB2QFQBvQLhvPUg");
	this.shape_51.setTransform(-402.1438,-23.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(2,2,0,3).p("AjJ/1IGQAAQhtQHBuQGQBmQIhmPWImQAAQB2veh2v5QhjwJBiwLg");
	this.shape_52.setTransform(-402.1563,-23.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#666666","#999999"],[0,1],-25.1,0,25.1,0).s().p("AjIf2QB2vfh2v4QhjwJBiwLIGQAAQhtQHBuQFQBmQJhmPWg");
	this.shape_53.setTransform(-402.1563,-23.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(2,2,0,3).p("AjJ/1IGQAAQhlQHBmQGQBfQGhfPYImQAAQBtvfhtv4QhbwJBawLg");
	this.shape_54.setTransform(-402.1563,-23.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#666666","#999999"],[0,1],-24.7,0,24.7,0).s().p("AjIf2QBtvfhtv4QhbwJBawLIGQAAQhlQHBmQFQBfQHhfPYg");
	this.shape_55.setTransform(-402.1563,-23.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(2,2,0,3).p("AjJ/1IGQAAQhcQHBdQGQBXQEhXPaImQAAQBkvghkv3QhUwJBTwLg");
	this.shape_56.setTransform(-402.1688,-23.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#666666","#999999"],[0,1],-24.3,0,24.4,0).s().p("AjIf2QBkvhhkv2QhUwJBTwLIGQAAQhcQHBdQFQBXQFhXPag");
	this.shape_57.setTransform(-402.1688,-23.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(2,2,0,3).p("AjJ/1IGQAAQhUQHBVQGQBPQDhPPbImQAAQBbvhhbv2QhMwJBLwLg");
	this.shape_58.setTransform(-402.1688,-23.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#666666","#999999"],[0,1],-23.9,0,24,0).s().p("AjIf2QBbvihbv1QhMwJBLwLIGQAAQhUQHBVQFQBPQEhPPbg");
	this.shape_59.setTransform(-402.1688,-23.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(2,2,0,3).p("AjJ/1IGQAAQhLQHBMQGQBHQBhHPdImQAAQBRvihRv1QhEwJBDwLg");
	this.shape_60.setTransform(-402.1813,-23.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["#666666","#999999"],[0,1],-23.5,0,23.6,0).s().p("AjIf2QBRvjhRv0QhEwJBDwLIGQAAQhLQHBMQFQBHQChHPdg");
	this.shape_61.setTransform(-402.1813,-23.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(2,2,0,3).p("AjJ/1IGQAAQhDQHBEQGQA/P/g/PfImQAAQBIvjhIv0Qg9wJA8wLg");
	this.shape_62.setTransform(-402.1938,-23.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["#666666","#999999"],[0,1],-23.1,0,23.2,0).s().p("AjIf2QBIvkhIvzQg9wJA8wLIGQAAQhDQHBEQFQA/P/g/Pgg");
	this.shape_63.setTransform(-402.1938,-23.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(2,2,0,3).p("AjJ/1IGQAAQg6QHA7QGQA3P9g3PhImQAAQA/vkg/vzQg1wJA0wLg");
	this.shape_64.setTransform(-402.1938,-23.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["#666666","#999999"],[0,1],-22.8,0,22.8,0).s().p("AjIf2QA/vlg/vyQg1wJA0wLIGQAAQg6QHA7QFQA3P+g3Phg");
	this.shape_65.setTransform(-402.1938,-23.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(2,2,0,3).p("AjI/1IGQAAQgyQHAyQGQAwP7gwPjImQAAQA3vlg3vyQgtwJAtwLg");
	this.shape_66.setTransform(-402.2063,-23.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["#666666","#999999"],[0,1],-22.3,0,22.4,0).s().p("AjIf2QA3vlg3vyQgtwJAtwLIGQAAQgyQHAyQFQAwP7gwPkg");
	this.shape_67.setTransform(-402.2063,-23.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(2,2,0,3).p("AjI/1IGQAAQgqQHAqQGQAoP5goPlImQAAQAuvmguvxQgmwJAmwLg");
	this.shape_68.setTransform(-402.2188,-23.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["#666666","#999999"],[0,1],-22,0,22,0).s().p("AjIf2QAuvmguvxQgmwJAmwLIGQAAQgqQHAqQFQAoP5goPmg");
	this.shape_69.setTransform(-402.2188,-23.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(2,2,0,3).p("AjI/1IGQAAQgiQHAiQGQAgP3ggPnImQAAQAlvnglvwQgewJAewLg");
	this.shape_70.setTransform(-402.2313,-23.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["#666666","#999999"],[0,1],-21.6,0,21.6,0).s().p("AjIf2QAlvnglvwQgewJAewLIGQAAQgiQHAiQFQAgP3ggPog");
	this.shape_71.setTransform(-402.2313,-23.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(2,2,0,3).p("AjI/1IGQAAQgZQHAZQGQAYP1gYPpImQAAQAbvogbvvQgWwJAWwLg");
	this.shape_72.setTransform(-402.2313,-23.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["#666666","#999999"],[0,1],-21.2,0,21.3,0).s().p("AjIf2QAbvogbvvQgWwJAWwLIGQAAQgZQHAZQFQAYP2gYPpg");
	this.shape_73.setTransform(-402.2313,-23.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(2,2,0,3).p("AjI/1IGQAAQgRQHARQGQAQPzgQPrImQAAQASvpgSvuQgPwJAPwLg");
	this.shape_74.setTransform(-402.2314,-23.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["#666666","#999999"],[0,1],-20.9,0,20.8,0).s().p("AjIf2QASvpgSvuQgPwJAPwLIGQAAQgRQHARQFQAQPzgQPsg");
	this.shape_75.setTransform(-402.2314,-23.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(2,2,0,3).p("AjI/1IGQAAQgIQHAIQGQAIPxgIPtImQAAQAJvqgJvtQgHwJAHwLg");
	this.shape_76.setTransform(-402.244,-23.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["#666666","#999999"],[0,1],-20.5,0,20.4,0).s().p("AjIf2QAJvqgJvtQgHwJAHwLIGQAAQgIQHAIQFQAIPxgIPug");
	this.shape_77.setTransform(-402.244,-23.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.lf(["#666666","#999999"],[0,1],-20,0,20.1,0).s().p("AjHf2IAA/XMgABggUIGQAAMAABAgMIAAffg");
	this.shape_78.setTransform(-402.275,-23.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(2,2,0,3).p("AjJ/1IGQAAQAKQHgJQGQgHPvAHPvImQAAQgHvrAHvsQAIwJgJwLg");
	this.shape_79.setTransform(-402.1936,-23.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.lf(["#666666","#999999"],[0,1],-20.5,0,20.4,0).s().p("AjIf2QgHvsAHvrQAIwJgJwLIGQAAQAKQHgJQFQgHPwAHPvg");
	this.shape_80.setTransform(-402.1936,-23.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(2,2,0,3).p("AjJ/1IGQAAQATQHgTQGQgOPvAOPvImQAAQgMvrAMvsQARwJgRwLg");
	this.shape_81.setTransform(-402.1062,-23.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.lf(["#666666","#999999"],[0,1],-20.8,0,20.9,0).s().p("AjJf2QgMvsAMvrQARwJgRwLIGQAAQATQHgTQFQgOPwAOPvg");
	this.shape_82.setTransform(-402.1062,-23.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(2,2,0,3).p("AjK/1IGQAAQAcQHgcQGQgVPvAVPvImQAAQgTvrATvsQAawJgawLg");
	this.shape_83.setTransform(-402.0437,-23.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.lf(["#666666","#999999"],[0,1],-21.3,0,21.2,0).s().p("AjKf2QgTvsATvrQAawJgawLIGQAAQAcQHgcQFQgVPwAVPvg");
	this.shape_84.setTransform(-402.0437,-23.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(2,2,0,3).p("AjL/1IGQAAQAmQHglQGQgdPvAdPvImQAAQgavrAavsQAiwJgjwLg");
	this.shape_85.setTransform(-401.9687,-23.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.lf(["#666666","#999999"],[0,1],-21.6,0,21.6,0).s().p("AjKf2QgavsAavrQAiwJgjwLIGQAAQAmQHglQFQgdPwAdPvg");
	this.shape_86.setTransform(-401.9687,-23.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(2,2,0,3).p("AjM/1IGQAAQAvQHguQGQgkPvAkPvImQAAQggvrAgvsQAqwJgrwLg");
	this.shape_87.setTransform(-401.8937,-23.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.lf(["#666666","#999999"],[0,1],-22,0,22,0).s().p("AjLf2QggvsAgvrQAqwJgrwLIGQAAQAvQHguQFQgkPwAkPvg");
	this.shape_88.setTransform(-401.8937,-23.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(2,2,0,3).p("AjM/1IGQAAQA3QHg3QGQgrPvArPvImQAAQgmvrAmvsQAzwJgzwLg");
	this.shape_89.setTransform(-401.8312,-23.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.lf(["#666666","#999999"],[0,1],-22.4,0,22.4,0).s().p("AjMf2QgmvsAmvrQAzwJgzwLIGQAAQA3QHg3QFQgrPwArPvg");
	this.shape_90.setTransform(-401.8312,-23.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(2,2,0,3).p("AjN/1IGQAAQBBQHhAQGQgyPvAyPvImQAAQgtvrAtvsQA7wJg8wLg");
	this.shape_91.setTransform(-401.7562,-23.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.lf(["#666666","#999999"],[0,1],-22.7,0,22.8,0).s().p("AjMf2QgtvsAtvrQA7wJg8wLIGQAAQBBQHhAQFQgyPwAyPvg");
	this.shape_92.setTransform(-401.7562,-23.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(2,2,0,3).p("AjO/1IGQAAQBKQHhJQGQg5PvA5PvImQAAQgzvrAzvsQBDwJhEwLg");
	this.shape_93.setTransform(-401.6937,-23.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.lf(["#666666","#999999"],[0,1],-23.1,0,23.2,0).s().p("AjNf2QgzvsAzvrQBDwJhEwLIGQAAQBKQHhJQFQg5PwA5Pvg");
	this.shape_94.setTransform(-401.6937,-23.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(2,2,0,3).p("AjO/1IGQAAQBTQHhTQGQhAPvBAPvImQAAQg5vrA5vsQBMwJhMwLg");
	this.shape_95.setTransform(-401.6062,-23.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.lf(["#666666","#999999"],[0,1],-23.5,0,23.6,0).s().p("AjOf2Qg5vsA5vrQBMwJhMwLIGQAAQBTQHhTQFQhAPwBAPvg");
	this.shape_96.setTransform(-401.6062,-23.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(2,2,0,3).p("AjP/1IGQAAQBcQHhcQGQhHPvBHPvImQAAQg/vrA/vsQBVwJhVwLg");
	this.shape_97.setTransform(-401.5437,-23.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.lf(["#666666","#999999"],[0,1],-23.9,0,24,0).s().p("AjPf2Qg/vsA/vrQBVwJhVwLIGQAAQBcQHhcQFQhHPwBHPvg");
	this.shape_98.setTransform(-401.5437,-23.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(2,2,0,3).p("AjQ/1IGQAAQBmQHhlQGQhPPvBPPvImQAAQhGvrBGvsQBdwJhewLg");
	this.shape_99.setTransform(-401.4812,-23.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.lf(["#666666","#999999"],[0,1],-24.3,0,24.4,0).s().p("AjPf2QhGvsBGvrQBdwJhewLIGQAAQBmQHhlQFQhPPwBPPvg");
	this.shape_100.setTransform(-401.4812,-23.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(2,2,0,3).p("AjR/1IGQAAQBvQHhuQGQhWPvBWPvImQAAQhMvrBMvsQBlwJhmwLg");
	this.shape_101.setTransform(-401.3937,-23.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.lf(["#666666","#999999"],[0,1],-24.7,0,24.7,0).s().p("AjQf2QhMvsBMvrQBlwJhmwLIGQAAQBvQHhuQFQhWPwBWPvg");
	this.shape_102.setTransform(-401.3937,-23.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(2,2,0,3).p("AjR/1IGQAAQB4QHh4QGQhdPvBdPvImQAAQhSvrBSvsQBuwJhuwLg");
	this.shape_103.setTransform(-401.3312,-23.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.lf(["#666666","#999999"],[0,1],-25.1,0,25.1,0).s().p("AjRf2QhSvsBSvrQBuwJhuwLIGQAAQB4QHh4QFQhdPwBdPvg");
	this.shape_104.setTransform(-401.3312,-23.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(2,2,0,3).p("AjS/1IGQAAQCCQHiBQGQhkPvBkPvImQAAQhZvrBZvsQB2wJh3wLg");
	this.shape_105.setTransform(-401.2562,-23.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.lf(["#666666","#999999"],[0,1],-25.5,0,25.5,0).s().p("AjRf2QhZvsBZvrQB2wJh3wLIGQAAQCCQHiBQFQhkPwBkPvg");
	this.shape_106.setTransform(-401.2562,-23.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(2,2,0,3).p("AjT/1IGQAAQCLQHiKQGQhrPvBrPvImQAAQhfvrBfvsQB/wJiAwLg");
	this.shape_107.setTransform(-401.1812,-23.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.lf(["#666666","#999999"],[0,1],-25.8,0,25.9,0).s().p("AjSf2QhfvsBfvrQB/wJiAwLIGQAAQCLQHiKQFQhrPwBrPvg");
	this.shape_108.setTransform(-401.1812,-23.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(2,2,0,3).p("AjT/1IGQAAQCTQHiTQGQhyPvByPvImQAAQhlvrBlvsQCHwJiHwLg");
	this.shape_109.setTransform(-401.1187,-23.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.lf(["#666666","#999999"],[0,1],-26.2,0,26.3,0).s().p("AjTf2QhlvsBlvrQCHwJiHwLIGQAAQCTQHiTQFQhyPwByPvg");
	this.shape_110.setTransform(-401.1187,-23.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(2,2,0,3).p("AjU/1IGQAAQCdQHidQGQh5PvB5PvImQAAQhsvrBsvsQCQwJiQwLg");
	this.shape_111.setTransform(-401.0437,-23.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.lf(["#666666","#999999"],[0,1],-26.6,0,26.7,0).s().p("AjUf2QhsvsBsvrQCQwJiQwLIGQAAQCdQHidQFQh5PwB5Pvg");
	this.shape_112.setTransform(-401.0437,-23.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(2,2,0,3).p("AjV/1IGQAAQCmQHilQGQiBPvCBPvImQAAQhzvrBzvsQCYwJiZwLg");
	this.shape_113.setTransform(-400.9812,-23.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.lf(["#666666","#999999"],[0,1],-27,0,27.1,0).s().p("AjUf2QhzvsBzvrQCYwJiZwLIGQAAQCmQHilQFQiBPwCBPvg");
	this.shape_114.setTransform(-400.9812,-23.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(2,2,0,3).p("AjW/1IGQAAQCwQHivQGQiIPvCIPvImQAAQh5vrB5vsQCgwJihwLg");
	this.shape_115.setTransform(-400.8937,-23.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.lf(["#666666","#999999"],[0,1],-27.4,0,27.5,0).s().p("AjVf2Qh5vsB5vrQCgwJihwLIGQAAQCwQHivQFQiIPwCIPvg");
	this.shape_116.setTransform(-400.8937,-23.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(2,2,0,3).p("AC6/1QC4QHi4QGQiOPvCOPvImQAAQh/vsB/vrQCpwJipwLg");
	this.shape_117.setTransform(-400.8377,-23.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.lf(["#666666","#999999"],[0,1],-27.8,0,27.8,0).s().p("AjWf2Qh/vsB/vrQCpwJipwLIGQAAQC4QHi4QFQiOPwCOPvg");
	this.shape_118.setTransform(-400.8377,-23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_78},{t:this.shape}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_82},{t:this.shape_81}]},1).to({state:[{t:this.shape_84},{t:this.shape_83}]},1).to({state:[{t:this.shape_86},{t:this.shape_85}]},1).to({state:[{t:this.shape_88},{t:this.shape_87}]},1).to({state:[{t:this.shape_90},{t:this.shape_89}]},1).to({state:[{t:this.shape_92},{t:this.shape_91}]},1).to({state:[{t:this.shape_94},{t:this.shape_93}]},1).to({state:[{t:this.shape_96},{t:this.shape_95}]},1).to({state:[{t:this.shape_98},{t:this.shape_97}]},1).to({state:[{t:this.shape_100},{t:this.shape_99}]},1).to({state:[{t:this.shape_102},{t:this.shape_101}]},1).to({state:[{t:this.shape_104},{t:this.shape_103}]},1).to({state:[{t:this.shape_106},{t:this.shape_105}]},1).to({state:[{t:this.shape_108},{t:this.shape_107}]},1).to({state:[{t:this.shape_110},{t:this.shape_109}]},1).to({state:[{t:this.shape_112},{t:this.shape_111}]},1).to({state:[{t:this.shape_114},{t:this.shape_113}]},1).to({state:[{t:this.shape_116},{t:this.shape_115}]},1).to({state:[{t:this.shape_118},{t:this.shape_117}]},1).to({state:[{t:this.shape_116},{t:this.shape_115}]},1).to({state:[{t:this.shape_114},{t:this.shape_113}]},1).to({state:[{t:this.shape_112},{t:this.shape_111}]},1).to({state:[{t:this.shape_110},{t:this.shape_109}]},1).to({state:[{t:this.shape_108},{t:this.shape_107}]},1).to({state:[{t:this.shape_106},{t:this.shape_105}]},1).to({state:[{t:this.shape_104},{t:this.shape_103}]},1).to({state:[{t:this.shape_102},{t:this.shape_101}]},1).to({state:[{t:this.shape_100},{t:this.shape_99}]},1).to({state:[{t:this.shape_98},{t:this.shape_97}]},1).to({state:[{t:this.shape_96},{t:this.shape_95}]},1).to({state:[{t:this.shape_94},{t:this.shape_93}]},1).to({state:[{t:this.shape_92},{t:this.shape_91}]},1).to({state:[{t:this.shape_90},{t:this.shape_89}]},1).to({state:[{t:this.shape_88},{t:this.shape_87}]},1).to({state:[{t:this.shape_86},{t:this.shape_85}]},1).to({state:[{t:this.shape_84},{t:this.shape_83}]},1).to({state:[{t:this.shape_82},{t:this.shape_81}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_78},{t:this.shape}]},1).wait(1));

	// Layer_13
	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(2,2,0,3).p("ADI/1MAABAgNIAAfeImQAAIAA/XMgABggUg");
	this.shape_119.setTransform(45.3749,-23.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.lf(["#666666","#999999"],[0,1],-20,0,20.1,0).s().p("AjHf2IAA/XMgABggUIGQAAMAABAgMIAAffg");
	this.shape_120.setTransform(45.375,-23.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(2,2,0,3).p("AjI/1IGQAAQAJQIgJQFQgHPvAHPvImQAAQgHvrAHvsQAJwHgJwNg");
	this.shape_121.setTransform(45.4189,-23.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.lf(["#666666","#999999"],[0,1],-20.4,0,20.5,0).s().p("AjIf2QgHvsAHvrQAJwHgJwNIGQAAQAJQIgJQEQgHPwAHPvg");
	this.shape_122.setTransform(45.4189,-23.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(2,2,0,3).p("AjJ/1IGQAAQASQIgRQFQgQPvAQPvImQAAQgPvrAPvsQARwFgSwPg");
	this.shape_123.setTransform(45.4563,-23.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.lf(["#666666","#999999"],[0,1],-20.9,0,20.9,0).s().p("AjIf2QgPvsAPvrQARwFgSwPIGQAAQASQIgRQEQgQPwAQPvg");
	this.shape_124.setTransform(45.4563,-23.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(2,2,0,3).p("AjJ/1IGQAAQAbQJgaQEQgXPvAXPvImQAAQgXvrAXvsQAawDgbwRg");
	this.shape_125.setTransform(45.4813,-23.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.lf(["#666666","#999999"],[0,1],-21.2,0,21.3,0).s().p("AjIf2QgXvsAXvrQAawDgbwRIGQAAQAbQKgaQCQgXPwAXPvg");
	this.shape_126.setTransform(45.4813,-23.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(2,2,0,3).p("AjJ/1IGQAAQAjQKgjQDQgfPvAfPvImQAAQgevrAevsQAjwBgjwTg");
	this.shape_127.setTransform(45.5063,-23.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.lf(["#666666","#999999"],[0,1],-21.6,0,21.7,0).s().p("AjJf2QgevsAevrQAjwBgjwTIGQAAQAjQLgjQBQgfPwAfPvg");
	this.shape_128.setTransform(45.5063,-23.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(2,2,0,3).p("AjJ/1IGQAAQArQLgrQCQgmPvAmPvImQAAQglvrAlvsQAswAgswUg");
	this.shape_129.setTransform(45.5313,-23.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.lf(["#666666","#999999"],[0,1],-22,0,22.1,0).s().p("AjJf2QglvsAlvrQAswAgswUIGQAAQArQMgrQAQgmPwAmPvg");
	this.shape_130.setTransform(45.5313,-23.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(2,2,0,3).p("AjK/1IGQAAQA1QMg0QBQgvPvAvPvImQAAQgtvrAtvsQA0v+g1wWg");
	this.shape_131.setTransform(45.5688,-23.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.lf(["#666666","#999999"],[0,1],-22.5,0,22.5,0).s().p("AjJf2QgtvsAtvrQA0v9g1wXIGQAAQA1QMg0QAQgvPwAvPvg");
	this.shape_132.setTransform(45.5688,-23.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(2,2,0,3).p("AjK/1IGQAAQA9QNg8QAQg2PvA2PvImQAAQg1vrA1vsQA9v8g+wYg");
	this.shape_133.setTransform(45.5938,-23.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.lf(["#666666","#999999"],[0,1],-22.9,0,22.9,0).s().p("AjJf2Qg1vsA1vrQA9v7g+wZIGQAAQA9QNg8P/Qg2PwA2Pvg");
	this.shape_134.setTransform(45.5938,-23.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#000000").ss(2,2,0,3).p("AjK/1IGQAAQBFQOhFP/Qg9PvA9PvImQAAQg8vrA8vsQBGv6hGwag");
	this.shape_135.setTransform(45.6188,-23.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.lf(["#666666","#999999"],[0,1],-23.2,0,23.3,0).s().p("AjKf2Qg8vsA8vrQBGv5hGwbIGQAAQBFQOhFP+Qg9PwA9Pvg");
	this.shape_136.setTransform(45.6188,-23.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#000000").ss(2,2,0,3).p("AjK/1IGQAAQBOQPhOP+QhFPvBFPvImQAAQhDvrBDvsQBPv4hPwcg");
	this.shape_137.setTransform(45.6438,-23.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.lf(["#666666","#999999"],[0,1],-23.6,0,23.7,0).s().p("AjKf2QhDvsBDvrQBPv3hPwdIGQAAQBOQPhOP9QhFPwBFPvg");
	this.shape_138.setTransform(45.6438,-23.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#000000").ss(2,2,0,3).p("AjL/1IGQAAQBXQPhWP+QhNPvBNPvImQAAQhLvrBLvsQBXv2hYweg");
	this.shape_139.setTransform(45.6938,-23.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.lf(["#666666","#999999"],[0,1],-24.1,0,24.1,0).s().p("AjKf2QhLvsBLvrQBXv2hYweIGQAAQBXQPhWP9QhNPwBNPvg");
	this.shape_140.setTransform(45.6938,-23.5);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#000000").ss(2,2,0,3).p("AjL/1IGQAAQBfQQhfP9QhVPvBVPvImQAAQhSvrBSvsQBgv0hgwgg");
	this.shape_141.setTransform(45.7188,-23.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.lf(["#666666","#999999"],[0,1],-24.5,0,24.5,0).s().p("AjLf2QhSvsBSvrQBgv0hgwgIGQAAQBfQQhfP8QhVPwBVPvg");
	this.shape_142.setTransform(45.7188,-23.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#000000").ss(2,2,0,3).p("AjL/1IGQAAQBoQRhoP8QhcPvBcPvImQAAQhZvrBZvsQBpvyhpwig");
	this.shape_143.setTransform(45.7438,-23.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.lf(["#666666","#999999"],[0,1],-24.8,0,24.9,0).s().p("AjLf2QhZvsBZvrQBpvyhpwiIGQAAQBoQRhoP7QhcPwBcPvg");
	this.shape_144.setTransform(45.7438,-23.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#000000").ss(2,2,0,3).p("AjM/1IGQAAQBxQShwP7QhkPvBkPvImQAAQhhvrBhvsQBxvwhywkg");
	this.shape_145.setTransform(45.7688,-23.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.lf(["#666666","#999999"],[0,1],-25.2,0,25.3,0).s().p("AjLf2QhhvsBhvrQBxvvhywlIGQAAQBxQThwP5QhkPwBkPvg");
	this.shape_146.setTransform(45.7688,-23.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#000000").ss(2,2,0,3).p("AjM/1IGQAAQB5QTh5P6QhsPvBsPvImQAAQhovrBovsQB7vuh7wmg");
	this.shape_147.setTransform(45.8063,-23.5);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.lf(["#666666","#999999"],[0,1],-25.7,0,25.7,0).s().p("AjMf2QhovsBovrQB7vth7wnIGQAAQB5QTh5P5QhsPwBsPvg");
	this.shape_148.setTransform(45.8063,-23.5);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#000000").ss(2,2,0,3).p("AjM/1IGQAAQCCQUiCP5QhzPvBzPvImQAAQhwvrBwvsQCDvsiDwog");
	this.shape_149.setTransform(45.8313,-23.5);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.lf(["#666666","#999999"],[0,1],-26.1,0,26.1,0).s().p("AjMf2QhwvsBwvrQCDvsiDwoIGQAAQCCQUiCP4QhzPwBzPvg");
	this.shape_150.setTransform(45.8313,-23.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#000000").ss(2,2,0,3).p("AjN/1IGQAAQCLQViKP4Qh8PvB8PvImQAAQh4vrB4vsQCMvqiNwqg");
	this.shape_151.setTransform(45.8563,-23.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.lf(["#666666","#999999"],[0,1],-26.5,0,26.5,0).s().p("AjMf2Qh4vsB4vrQCMvqiNwqIGQAAQCLQViKP3Qh8PwB8Pvg");
	this.shape_152.setTransform(45.8563,-23.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#000000").ss(2,2,0,3).p("AjN/1IGQAAQCTQWiSP3QiDPvCDPvImQAAQh/vrB/vsQCUvoiVwsg");
	this.shape_153.setTransform(45.8813,-23.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.lf(["#666666","#999999"],[0,1],-26.9,0,26.9,0).s().p("AjMf2Qh/vsB/vrQCUvoiVwsIGQAAQCTQWiSP2QiDPwCDPvg");
	this.shape_154.setTransform(45.8813,-23.5);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#000000").ss(2,2,0,3).p("AjN/1IGQAAQCcQWicP3QiLPvCLPvImQAAQiGvrCGvsQCevmiewug");
	this.shape_155.setTransform(45.9188,-23.5);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.lf(["#666666","#999999"],[0,1],-27.3,0,27.3,0).s().p("AjNf2QiGvsCGvrQCevmiewuIGQAAQCcQWicP2QiLPwCLPvg");
	this.shape_156.setTransform(45.9188,-23.5);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#000000").ss(2,2,0,3).p("ADC/1QClQXikP2QiTPvCTPvImQAAQiOvsCOvrQCmvkinwwg");
	this.shape_157.setTransform(45.9509,-23.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.lf(["#666666","#999999"],[0,1],-27.7,0,27.7,0).s().p("AjNf2QiOvsCOvrQCmvkinwwIGQAAQClQXikP1QiTPwCTPvg");
	this.shape_158.setTransform(45.9509,-23.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#000000").ss(2,2,0,3).p("AjN/1IGQAAQCcQWicP3QiLPvCLPvImQAAQiHvrCHvsQCevmiewug");
	this.shape_159.setTransform(45.9188,-23.5);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.lf(["#666666","#999999"],[0,1],-27.3,0,27.3,0).s().p("AjNf2QiHvsCHvrQCevmiewuIGQAAQCcQWicP2QiLPwCLPvg");
	this.shape_160.setTransform(45.9188,-23.5);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#000000").ss(2,2,0,3).p("AjN/1IGQAAQCUQWiTP3QiEPvCEPvImQAAQiAvrCAvsQCVvoiWwsg");
	this.shape_161.setTransform(45.8813,-23.5);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.lf(["#666666","#999999"],[0,1],-26.9,0,27,0).s().p("AjMf2QiAvsCAvrQCVvoiWwsIGQAAQCUQWiTP2QiEPwCEPvg");
	this.shape_162.setTransform(45.8813,-23.5);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#000000").ss(2,2,0,3).p("AjN/1IGQAAQCMQViLP4Qh9PvB9PvImQAAQh5vrB5vsQCNvqiOwqg");
	this.shape_163.setTransform(45.8688,-23.5);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.lf(["#666666","#999999"],[0,1],-26.5,0,26.6,0).s().p("AjMf2Qh5vsB5vrQCNvpiOwrIGQAAQCMQViLP3Qh9PwB9Pvg");
	this.shape_164.setTransform(45.8688,-23.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#000000").ss(2,2,0,3).p("AjM/1IGQAAQCDQUiDP5Qh1PvB1PvImQAAQhxvrBxvsQCFvsiFwog");
	this.shape_165.setTransform(45.8313,-23.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.lf(["#666666","#999999"],[0,1],-26.1,0,26.2,0).s().p("AjMf2QhxvsBxvrQCFvriFwpIGQAAQCDQUiDP4Qh1PwB1Pvg");
	this.shape_166.setTransform(45.8313,-23.5);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#000000").ss(2,2,0,3).p("AjM/1IGQAAQB7QTh7P6QhuPvBuPvImQAAQhqvrBqvsQB9vth9wng");
	this.shape_167.setTransform(45.8063,-23.5);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.lf(["#666666","#999999"],[0,1],-25.8,0,25.8,0).s().p("AjMf2QhqvsBqvrQB9vth9wnIGQAAQB7QUh7P4QhuPwBuPvg");
	this.shape_168.setTransform(45.8063,-23.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#000000").ss(2,2,0,3).p("AjM/1IGQAAQB0QShzP7QhnPvBnPvImQAAQhkvrBkvsQB0vvh1wlg");
	this.shape_169.setTransform(45.7813,-23.5);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.lf(["#666666","#999999"],[0,1],-25.4,0,25.4,0).s().p("AjLf2QhkvsBkvrQB0vvh1wlIGQAAQB0QThzP5QhnPwBnPvg");
	this.shape_170.setTransform(45.7813,-23.5);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#000000").ss(2,2,0,3).p("AjL/1IGQAAQBrQRhrP8QhfPvBfPvImQAAQhcvrBcvsQBsvxhswjg");
	this.shape_171.setTransform(45.7438,-23.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.lf(["#666666","#999999"],[0,1],-25,0,25.1,0).s().p("AjLf2QhcvsBcvrQBsvxhswjIGQAAQBrQRhrP7QhfPwBfPvg");
	this.shape_172.setTransform(45.7438,-23.5);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#000000").ss(2,2,0,3).p("AjL/1IGQAAQBjQRhjP8QhYPvBYPvImQAAQhVvrBVvsQBkvzhkwhg");
	this.shape_173.setTransform(45.7313,-23.5);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.lf(["#666666","#999999"],[0,1],-24.6,0,24.7,0).s().p("AjLf2QhVvsBVvrQBkvzhkwhIGQAAQBjQRhjP7QhYPwBYPvg");
	this.shape_174.setTransform(45.7313,-23.5);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#000000").ss(2,2,0,3).p("AjL/1IGQAAQBbQQhaP9QhRPvBRPvImQAAQhOvrBOvsQBbv1hcwfg");
	this.shape_175.setTransform(45.6938,-23.5);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.lf(["#666666","#999999"],[0,1],-24.2,0,24.3,0).s().p("AjKf2QhOvsBOvrQBbv1hcwfIGQAAQBbQQhaP8QhRPwBRPvg");
	this.shape_176.setTransform(45.6938,-23.5);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#000000").ss(2,2,0,3).p("AjL/1IGQAAQBTQPhSP+QhJPvBJPvImQAAQhHvrBHvsQBTv3hUwdg");
	this.shape_177.setTransform(45.6688,-23.5);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.lf(["#666666","#999999"],[0,1],-23.9,0,23.9,0).s().p("AjKf2QhHvsBHvrQBTv3hUwdIGQAAQBTQPhSP9QhJPwBJPvg");
	this.shape_178.setTransform(45.6688,-23.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#000000").ss(2,2,0,3).p("AjK/1IGQAAQBKQOhKP/QhCPvBCPvImQAAQhAvrBAvsQBLv5hLwbg");
	this.shape_179.setTransform(45.6438,-23.5);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.lf(["#666666","#999999"],[0,1],-23.5,0,23.5,0).s().p("AjKf2QhAvsBAvrQBLv4hLwcIGQAAQBKQOhKP+QhCPwBCPvg");
	this.shape_180.setTransform(45.6438,-23.5);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#000000").ss(2,2,0,3).p("AjK/1IGQAAQBCQNhCQAQg6PvA6PvImQAAQg5vrA5vsQBDv6hDwag");
	this.shape_181.setTransform(45.6063,-23.5);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.lf(["#666666","#999999"],[0,1],-23.1,0,23.2,0).s().p("AjKf2Qg5vsA5vrQBDv6hDwaIGQAAQBCQOhCP+Qg6PwA6Pvg");
	this.shape_182.setTransform(45.6063,-23.5);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#000000").ss(2,2,0,3).p("AjK/1IGQAAQA6QNg5QAQg0PvA0PvImQAAQgyvrAyvsQA6v8g7wYg");
	this.shape_183.setTransform(45.5938,-23.5);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.lf(["#666666","#999999"],[0,1],-22.7,0,22.8,0).s().p("AjJf2QgyvsAyvrQA6v8g7wYIGQAAQA6QNg5P/Qg0PwA0Pvg");
	this.shape_184.setTransform(45.5938,-23.5);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#000000").ss(2,2,0,3).p("AjK/1IGQAAQAyQMgxQBQgsPvAsPvImQAAQgrvrArvsQAyv+gzwWg");
	this.shape_185.setTransform(45.5563,-23.5);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.lf(["#666666","#999999"],[0,1],-22.3,0,22.4,0).s().p("AjJf2QgrvsArvrQAyv+gzwWIGQAAQAyQMgxQAQgsPwAsPvg");
	this.shape_186.setTransform(45.5563,-23.5);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#000000").ss(2,2,0,3).p("AjJ/1IGQAAQApQLgpQCQgkPvAkPvImQAAQgjvrAjvsQAqwAgqwUg");
	this.shape_187.setTransform(45.5313,-23.5);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.lf(["#666666","#999999"],[0,1],-22,0,22,0).s().p("AjJf2QgjvsAjvrQAqwAgqwUIGQAAQApQLgpQBQgkPwAkPvg");
	this.shape_188.setTransform(45.5313,-23.5);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#000000").ss(2,2,0,3).p("AjJ/1IGQAAQAhQKghQDQgdPvAdPvImQAAQgcvrAcvsQAhwCghwSg");
	this.shape_189.setTransform(45.5063,-23.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.lf(["#666666","#999999"],[0,1],-21.6,0,21.6,0).s().p("AjJf2QgcvsAcvrQAhwCghwSIGQAAQAhQLghQBQgdPwAdPvg");
	this.shape_190.setTransform(45.5063,-23.5);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#000000").ss(2,2,0,3).p("AjJ/1IGQAAQAZQJgYQEQgWPvAWPvImQAAQgWvrAWvsQAZwEgawQg");
	this.shape_191.setTransform(45.4688,-23.5);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.lf(["#666666","#999999"],[0,1],-21.2,0,21.2,0).s().p("AjIf2QgWvsAWvrQAZwEgawQIGQAAQAZQKgYQCQgWPwAWPvg");
	this.shape_192.setTransform(45.4688,-23.5);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#000000").ss(2,2,0,3).p("AjJ/1IGQAAQARQIgQQFQgPPvAPPvImQAAQgOvrAOvsQAQwGgRwOg");
	this.shape_193.setTransform(45.4563,-23.5);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.lf(["#666666","#999999"],[0,1],-20.8,0,20.8,0).s().p("AjIf2QgOvsAOvrQAQwFgRwPIGQAAQARQIgQQEQgPPwAPPvg");
	this.shape_194.setTransform(45.4563,-23.5);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#000000").ss(2,2,0,3).p("AjI/1IGQAAQAIQIgIQFQgHPvAHPvImQAAQgHvrAHvsQAJwHgJwNg");
	this.shape_195.setTransform(45.4189,-23.5);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.lf(["#666666","#999999"],[0,1],-20.4,0,20.5,0).s().p("AjIf2QgHvsAHvrQAJwHgJwNIGQAAQAIQIgIQEQgHPwAHPvg");
	this.shape_196.setTransform(45.4189,-23.5);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#000000").ss(2,2,0,3).p("AjI/1IGQAAQgHQHAIQGQAGPvgGPvImQAAQAHvqgHvtQgHwJAGwLg");
	this.shape_197.setTransform(45.381,-23.5);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.lf(["#666666","#999999"],[0,1],-20.4,0,20.4,0).s().p("AjHf2QAHvqgHvtQgHwJAGwLIGQAAQgHQHAIQFQAGPwgGPvg");
	this.shape_198.setTransform(45.381,-23.5);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#000000").ss(2,2,0,3).p("AjI/1IGQAAQgPQHAQQGQANPvgNPvImQAAQAOvpgOvuQgOwJANwLg");
	this.shape_199.setTransform(45.3686,-23.5);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.lf(["#666666","#999999"],[0,1],-20.7,0,20.7,0).s().p("AjHf2QAOvpgOvuQgOwJANwLIGQAAQgPQHAQQFQANPwgNPvg");
	this.shape_200.setTransform(45.3686,-23.5);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#000000").ss(2,2,0,3).p("AjH/1IGQAAQgXQHAXQGQATPvgTPvImQAAQAVvpgVvuQgVwJAVwLg");
	this.shape_201.setTransform(45.3437,-23.5);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.lf(["#666666","#999999"],[0,1],-21,0,21.1,0).s().p("AjHf2QAVvpgVvuQgVwJAVwLIGQAAQgXQHAXQFQATPwgTPvg");
	this.shape_202.setTransform(45.3437,-23.5);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#000000").ss(2,2,0,3).p("AjH/1IGQAAQgfQHAfQGQAaPvgaPvImQAAQAdvogdvvQgcwJAcwLg");
	this.shape_203.setTransform(45.3312,-23.5);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.lf(["#666666","#999999"],[0,1],-21.4,0,21.4,0).s().p("AjHf2QAdvogdvvQgcwJAcwLIGQAAQgfQHAfQFQAaPwgaPvg");
	this.shape_204.setTransform(45.3312,-23.5);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#000000").ss(2,2,0,3).p("AjH/1IGQAAQgnQHAnQGQAgPvggPvImQAAQAkvngkvwQgiwJAiwLg");
	this.shape_205.setTransform(45.3312,-23.5);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.lf(["#666666","#999999"],[0,1],-21.7,0,21.8,0).s().p("AjHf2QAkvngkvwQgiwJAiwLIGQAAQgnQHAnQFQAgPwggPvg");
	this.shape_206.setTransform(45.3312,-23.5);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#000000").ss(2,2,0,3).p("AjH/1IGQAAQgvQHAvQGQAnPvgnPvImQAAQArvmgrvxQgpwJApwLg");
	this.shape_207.setTransform(45.3187,-23.5);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.lf(["#666666","#999999"],[0,1],-22.1,0,22,0).s().p("AjHf2QArvmgrvxQgpwJApwLIGQAAQgvQHAvQFQAnPwgnPvg");
	this.shape_208.setTransform(45.3187,-23.5);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#000000").ss(2,2,0,3).p("AjH/1IGQAAQg2QHA3QGQAsPvgsPvImQAAQAxvlgxvyQgxwJAwwLg");
	this.shape_209.setTransform(45.2937,-23.5);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.lf(["#666666","#999999"],[0,1],-22.4,0,22.4,0).s().p("AjGf2QAxvlgxvyQgxwJAwwLIGQAAQg2QHA3QFQAsPwgsPvg");
	this.shape_210.setTransform(45.2937,-23.5);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#000000").ss(2,2,0,3).p("AjH/1IGQAAQg+QHA/QGQAzPvgzPvImQAAQA4vkg4vzQg4wJA3wLg");
	this.shape_211.setTransform(45.2812,-23.5);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.lf(["#666666","#999999"],[0,1],-22.7,0,22.8,0).s().p("AjGf2QA4vlg4vyQg4wJA3wLIGQAAQg+QHA/QFQAzPwgzPvg");
	this.shape_212.setTransform(45.2812,-23.5);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#000000").ss(2,2,0,3).p("AjH/1IGQAAQhGQHBHQGQA5Pvg5PvImQAAQA/vjg/v0Qg/wJA+wLg");
	this.shape_213.setTransform(45.2687,-23.5);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.lf(["#666666","#999999"],[0,1],-23,0,23.1,0).s().p("AjGf2QA/vkg/vzQg/wJA+wLIGQAAQhGQHBHQFQA5Pwg5Pvg");
	this.shape_214.setTransform(45.2687,-23.5);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#000000").ss(2,2,0,3).p("AjH/1IGQAAQhOQHBPQGQBAPvhAPvImQAAQBHvihHv1QhGwJBFwLg");
	this.shape_215.setTransform(45.2562,-23.5);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.lf(["#666666","#999999"],[0,1],-23.3,0,23.4,0).s().p("AjGf2QBHvjhHv0QhGwJBFwLIGQAAQhOQHBPQFQBAPwhAPvg");
	this.shape_216.setTransform(45.2562,-23.5);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#000000").ss(2,2,0,3).p("AjG/1IGQAAQhWQHBWQGQBGPvhGPvImQAAQBOvhhOv2QhMwJBMwLg");
	this.shape_217.setTransform(45.2312,-23.5);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.lf(["#666666","#999999"],[0,1],-23.7,0,23.8,0).s().p("AjGf2QBOvihOv1QhMwJBMwLIGQAAQhWQHBWQFQBGPwhGPvg");
	this.shape_218.setTransform(45.2312,-23.5);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#000000").ss(2,2,0,3).p("AjG/1IGQAAQheQHBeQGQBNPvhNPvImQAAQBVvghVv3QhTwJBTwLg");
	this.shape_219.setTransform(45.2187,-23.5);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.lf(["#666666","#999999"],[0,1],-24,0,24.1,0).s().p("AjGf2QBVvhhVv2QhTwJBTwLIGQAAQheQHBeQFQBNPwhNPvg");
	this.shape_220.setTransform(45.2187,-23.5);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#000000").ss(2,2,0,3).p("AjG/1IGQAAQhmQHBmQGQBTPvhTPvImQAAQBcvghcv3QhawJBawLg");
	this.shape_221.setTransform(45.2062,-23.5);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.lf(["#666666","#999999"],[0,1],-24.3,0,24.4,0).s().p("AjGf2QBcvghcv3QhawJBawLIGQAAQhmQHBmQFQBTPwhTPvg");
	this.shape_222.setTransform(45.2062,-23.5);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#000000").ss(2,2,0,3).p("AjG/1IGQAAQhtQHBuQGQBZPvhZPvImQAAQBjvfhjv4QhiwJBhwLg");
	this.shape_223.setTransform(45.1812,-23.5);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.lf(["#666666","#999999"],[0,1],-24.7,0,24.7,0).s().p("AjFf2QBjvfhjv4QhiwJBhwLIGQAAQhtQHBuQFQBZPwhZPvg");
	this.shape_224.setTransform(45.1812,-23.5);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#000000").ss(2,2,0,3).p("AjG/1IGQAAQh1QHB2QGQBfPvhfPvImQAAQBqvehqv5QhowJBnwLg");
	this.shape_225.setTransform(45.1812,-23.5);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.lf(["#666666","#999999"],[0,1],-25,0,25.1,0).s().p("AjFf2QBqvehqv5QhowJBnwLIGQAAQh1QHB2QFQBfPwhfPvg");
	this.shape_226.setTransform(45.1812,-23.5);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#000000").ss(2,2,0,3).p("AjG/1IGQAAQh9QHB+QGQBmPvhmPvImQAAQBxvdhxv6QhvwJBuwLg");
	this.shape_227.setTransform(45.1687,-23.5);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.lf(["#666666","#999999"],[0,1],-25.3,0,25.4,0).s().p("AjFf2QBxvdhxv6QhvwJBuwLIGQAAQh9QHB+QFQBmPwhmPvg");
	this.shape_228.setTransform(45.1687,-23.5);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#000000").ss(2,2,0,3).p("AjG/1IGQAAQiFQHCGQGQBsPvhsPvImQAAQB4vch4v7Qh2wJB1wLg");
	this.shape_229.setTransform(45.1562,-23.5);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.lf(["#666666","#999999"],[0,1],-25.7,0,25.7,0).s().p("AjFf2QB4vch4v7Qh2wJB1wLIGQAAQiFQHCGQFQBsPwhsPvg");
	this.shape_230.setTransform(45.1562,-23.5);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#000000").ss(2,2,0,3).p("AjF/1IGQAAQiNQHCNQGQBzPvhzPvImQAAQCAvbiAv8Qh9wJB9wLg");
	this.shape_231.setTransform(45.1312,-23.5);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.lf(["#666666","#999999"],[0,1],-26,0,26.1,0).s().p("AjFf2QCAvbiAv8Qh9wJB9wLIGQAAQiNQHCNQFQBzPwhzPvg");
	this.shape_232.setTransform(45.1312,-23.5);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#000000").ss(2,2,0,3).p("AjF/1IGQAAQiVQHCVQGQB5Pvh5PvImQAAQCHvaiHv9QiEwJCEwLg");
	this.shape_233.setTransform(45.1187,-23.5);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.lf(["#666666","#999999"],[0,1],-26.3,0,26.4,0).s().p("AjFf2QCHvaiHv9QiEwJCEwLIGQAAQiVQHCVQFQB5Pwh5Pvg");
	this.shape_234.setTransform(45.1187,-23.5);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#000000").ss(2,2,0,3).p("ADL/1QicQHCcQGQCAPviAPvImQAAQCOvZiOv+QiKwJCKwLg");
	this.shape_235.setTransform(45.1049,-23.5);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.lf(["#666666","#999999"],[0,1],-26.7,0,26.7,0).s().p("AjFf2QCOvZiOv+QiKwJCKwLIGQAAQicQHCcQFQCAPwiAPvg");
	this.shape_236.setTransform(45.1049,-23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_120},{t:this.shape_119}]}).to({state:[{t:this.shape_122},{t:this.shape_121}]},1).to({state:[{t:this.shape_124},{t:this.shape_123}]},1).to({state:[{t:this.shape_126},{t:this.shape_125}]},1).to({state:[{t:this.shape_128},{t:this.shape_127}]},1).to({state:[{t:this.shape_130},{t:this.shape_129}]},1).to({state:[{t:this.shape_132},{t:this.shape_131}]},1).to({state:[{t:this.shape_134},{t:this.shape_133}]},1).to({state:[{t:this.shape_136},{t:this.shape_135}]},1).to({state:[{t:this.shape_138},{t:this.shape_137}]},1).to({state:[{t:this.shape_140},{t:this.shape_139}]},1).to({state:[{t:this.shape_142},{t:this.shape_141}]},1).to({state:[{t:this.shape_144},{t:this.shape_143}]},1).to({state:[{t:this.shape_146},{t:this.shape_145}]},1).to({state:[{t:this.shape_148},{t:this.shape_147}]},1).to({state:[{t:this.shape_150},{t:this.shape_149}]},1).to({state:[{t:this.shape_152},{t:this.shape_151}]},1).to({state:[{t:this.shape_154},{t:this.shape_153}]},1).to({state:[{t:this.shape_156},{t:this.shape_155}]},1).to({state:[{t:this.shape_158},{t:this.shape_157}]},1).to({state:[{t:this.shape_160},{t:this.shape_159}]},1).to({state:[{t:this.shape_162},{t:this.shape_161}]},1).to({state:[{t:this.shape_164},{t:this.shape_163}]},1).to({state:[{t:this.shape_166},{t:this.shape_165}]},1).to({state:[{t:this.shape_168},{t:this.shape_167}]},1).to({state:[{t:this.shape_170},{t:this.shape_169}]},1).to({state:[{t:this.shape_172},{t:this.shape_171}]},1).to({state:[{t:this.shape_174},{t:this.shape_173}]},1).to({state:[{t:this.shape_176},{t:this.shape_175}]},1).to({state:[{t:this.shape_178},{t:this.shape_177}]},1).to({state:[{t:this.shape_180},{t:this.shape_179}]},1).to({state:[{t:this.shape_182},{t:this.shape_181}]},1).to({state:[{t:this.shape_184},{t:this.shape_183}]},1).to({state:[{t:this.shape_186},{t:this.shape_185}]},1).to({state:[{t:this.shape_188},{t:this.shape_187}]},1).to({state:[{t:this.shape_190},{t:this.shape_189}]},1).to({state:[{t:this.shape_192},{t:this.shape_191}]},1).to({state:[{t:this.shape_194},{t:this.shape_193}]},1).to({state:[{t:this.shape_196},{t:this.shape_195}]},1).to({state:[{t:this.shape_120},{t:this.shape_119}]},1).to({state:[{t:this.shape_198},{t:this.shape_197}]},1).to({state:[{t:this.shape_200},{t:this.shape_199}]},1).to({state:[{t:this.shape_202},{t:this.shape_201}]},1).to({state:[{t:this.shape_204},{t:this.shape_203}]},1).to({state:[{t:this.shape_206},{t:this.shape_205}]},1).to({state:[{t:this.shape_208},{t:this.shape_207}]},1).to({state:[{t:this.shape_210},{t:this.shape_209}]},1).to({state:[{t:this.shape_212},{t:this.shape_211}]},1).to({state:[{t:this.shape_214},{t:this.shape_213}]},1).to({state:[{t:this.shape_216},{t:this.shape_215}]},1).to({state:[{t:this.shape_218},{t:this.shape_217}]},1).to({state:[{t:this.shape_220},{t:this.shape_219}]},1).to({state:[{t:this.shape_222},{t:this.shape_221}]},1).to({state:[{t:this.shape_224},{t:this.shape_223}]},1).to({state:[{t:this.shape_226},{t:this.shape_225}]},1).to({state:[{t:this.shape_228},{t:this.shape_227}]},1).to({state:[{t:this.shape_230},{t:this.shape_229}]},1).to({state:[{t:this.shape_232},{t:this.shape_231}]},1).to({state:[{t:this.shape_234},{t:this.shape_233}]},1).to({state:[{t:this.shape_236},{t:this.shape_235}]},1).to({state:[{t:this.shape_234},{t:this.shape_233}]},1).to({state:[{t:this.shape_232},{t:this.shape_231}]},1).to({state:[{t:this.shape_230},{t:this.shape_229}]},1).to({state:[{t:this.shape_228},{t:this.shape_227}]},1).to({state:[{t:this.shape_226},{t:this.shape_225}]},1).to({state:[{t:this.shape_224},{t:this.shape_223}]},1).to({state:[{t:this.shape_222},{t:this.shape_221}]},1).to({state:[{t:this.shape_220},{t:this.shape_219}]},1).to({state:[{t:this.shape_218},{t:this.shape_217}]},1).to({state:[{t:this.shape_216},{t:this.shape_215}]},1).to({state:[{t:this.shape_214},{t:this.shape_213}]},1).to({state:[{t:this.shape_212},{t:this.shape_211}]},1).to({state:[{t:this.shape_210},{t:this.shape_209}]},1).to({state:[{t:this.shape_208},{t:this.shape_207}]},1).to({state:[{t:this.shape_206},{t:this.shape_205}]},1).to({state:[{t:this.shape_204},{t:this.shape_203}]},1).to({state:[{t:this.shape_202},{t:this.shape_201}]},1).to({state:[{t:this.shape_200},{t:this.shape_199}]},1).to({state:[{t:this.shape_198},{t:this.shape_197}]},1).to({state:[{t:this.shape_120},{t:this.shape_119}]},1).wait(1));

	// Layer_14
	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#000000").ss(2,2,0,3).p("A/1jIMAgMAAAIffAAIAAGQI/XAAMggUAAAg");
	this.shape_237.setTransform(-177.45,-207.2);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.lf(["#666666","#999999"],[0,1],0.1,-20.3,0.1,20.3).s().p("AAfDJMggUAAAIAAmRMAgMAAAIfeAAIAAGRg");
	this.shape_238.setTransform(-177.45,-207.2);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#000000").ss(2,2,0,3).p("A/3jHQQGAKQGgKQPvgLPvALQAdDXgdC5QvtgLvqALQwJAJwKgJQgSi/ASjRg");
	this.shape_239.setTransform(-177.1625,-207.2375);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.lf(["#666666","#999999"],[0,1],0.1,-20.7,0.1,20.8).s().p("A/3DJQgSi/ASjRQQGAKQGgKQPvgLPvALQAdDXgdC5QvtgLvqALQoEAEoFAAQoFAAoFgEg");
	this.shape_240.setTransform(-177.1625,-207.2375);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#000000").ss(2,2,0,3).p("A/6jHQQFAVQHgVQPvgVPvAVQA6Dmg6CqQvwgWvnAWQwKASwJgSQgji2Ajjag");
	this.shape_241.setTransform(-176.875,-207.275);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.lf(["#666666","#999999"],[0,1],0,-21.2,0.1,21.3).s().p("A/6DJQgji2AjjaQQFAVQHgVQPvgVPvAVQA6Dmg6CqQvwgWvnAWQoEAJoFAAQoGAAoEgJg");
	this.shape_242.setTransform(-176.875,-207.275);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#000000").ss(2,2,0,3).p("A/9jGQQFAfQHgfQPvggPvAgQBXD1hXCbQvyghvlAhQwKAbwJgbQg1itA1jjg");
	this.shape_243.setTransform(-176.5875,-207.3125);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.lf(["#666666","#999999"],[0,1],0,-21.7,0.1,21.7).s().p("A/9DKQg1itA1jjQQFAfQHgfQPvggPvAgQBXD1hXCbQvyghvlAhQoEANoGAAQoFAAoEgNg");
	this.shape_244.setTransform(-176.5875,-207.3125);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#000000").ss(2,2,0,3).p("EggAgDGQQEAqQIgqQPvgqPvAqQB0EFh0CLQv0grvjArQwLAkwIgkQhGijBGjtg");
	this.shape_245.setTransform(-176.3,-207.3625);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.lf(["#666666","#999999"],[0,1],0,-22.1,0.2,22.2).s().p("EggAADKQhGijBGjtQQFAqQHgqQPvgqPvAqQB0EFh0CLQv0grviArQoFASoGAAQoFAAoEgSg");
	this.shape_246.setTransform(-176.3,-207.3625);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#000000").ss(2,2,0,3).p("EggDgDFQQDAzQJgzQPvg2PvA2QCSEUiSB8Qv1g3vhA3QwMAtwIgtQhYibBYj1g");
	this.shape_247.setTransform(-176,-207.4);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.lf(["#666666","#999999"],[0,1],0,-22.6,0.2,22.7).s().p("EggDADLQhXibBXj2QQEA1QIg1QPvg1PvA1QCSEViSB8Qv2g3vgA3QoGAWoFAAQoFAAoEgWg");
	this.shape_248.setTransform(-176,-207.4);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#000000").ss(2,2,0,3).p("EggGgDFQQDA+QJg+QPvhAPvBAQCvEjivBtQv4hCveBCQwMA2wIg2QhpiRBpj/g");
	this.shape_249.setTransform(-175.7125,-207.4375);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.lf(["#666666","#999999"],[0,1],0,-23.1,0.2,23.1).s().p("EggGADLQhpiRBpj/QQDA+QJg+QPvhAPvBAQCvEjivBtQv4hCveBCQoGAboFAAQoFAAoEgbg");
	this.shape_250.setTransform(-175.7125,-207.4375);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#000000").ss(2,2,0,3).p("EggJgDFQQDBJQJhJQPvhKPvBKQDMEzjMBdQv6hMvcBMQwNA/wHg/Qh6iHB6kJg");
	this.shape_251.setTransform(-175.425,-207.475);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.lf(["#666666","#999999"],[0,1],-0.1,-23.5,0.2,23.6).s().p("EggJADLQh6iHB6kJQQDBJQJhJQPvhKPvBKQDMEzjMBdQv6hMvcBMQoGAgoFAAQoFAAoEggg");
	this.shape_252.setTransform(-175.425,-207.475);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#000000").ss(2,2,0,3).p("EggMgDEQQCBTQKhTQPvhVPvBVQDpFCjpBOQv8hXvaBXQwNBIwHhIQiMh+CMkSg");
	this.shape_253.setTransform(-175.1375,-207.5125);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.lf(["#666666","#999999"],[0,1],-0.1,-24,0.2,24.1).s().p("EggMADMQiMh+CMkSQQCBTQKhTQPvhVPvBVQDpFCjpBOQv8hXvaBXQoGAkoFAAQoFAAoEgkg");
	this.shape_254.setTransform(-175.1375,-207.5125);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#000000").ss(2,2,0,3).p("EggPgDEQQCBeQLheQPuhfPwBfQEFFSkFA+Qv/hivYBiQwOBRwGhRQidh0Cdkcg");
	this.shape_255.setTransform(-174.85,-207.55);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.lf(["#666666","#999999"],[0,1],-0.1,-24.5,0.3,24.5).s().p("EggPADMQidh1CdkbQQCBeQLheQPvhfPuBfQEGFSkGA+Qv9hivZBiQoGApoFAAQoFAAoEgpg");
	this.shape_256.setTransform(-174.85,-207.55);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("#000000").ss(2,2,0,3).p("EggSgDDQQBBoQMhoQPuhqPwBqQEiFhkiAvQwBhtvWBtQwPBawFhaQiuhrCuklg");
	this.shape_257.setTransform(-174.55,-207.6);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.lf(["#666666","#999999"],[0,1],-0.1,-24.9,0.3,25).s().p("EggSADNQiuhrCukmQQCBpQLhpQPvhqPuBqQEjFhkjAwQwAhuvWBuQoHAsoFAAQoFAAoDgsg");
	this.shape_258.setTransform(-174.55,-207.6);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#000000").ss(2,2,0,3).p("EggUgDDQQABzQNhzQPuh1PvB1QE/Fwk/AgQwDh4vTB4QwQBjwEhjQjAhiDAkug");
	this.shape_259.setTransform(-174.2625,-207.6375);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.lf(["#666666","#999999"],[0,1],-0.1,-25.4,0.3,25.5).s().p("EggUADNQjAhiDAkuQQABzQNhzQPuh1PvB1QE/Fwk/AgQwDh4vTB4QoIAxoFAAQoFAAoCgxg");
	this.shape_260.setTransform(-174.2625,-207.6375);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("#000000").ss(2,2,0,3).p("EggXgDDQQAB+QNh+QPuh/PvB/QFcGAlcAQQwFiCvRCCQwQBswEhsQjShYDSk4g");
	this.shape_261.setTransform(-173.975,-207.675);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.lf(["#666666","#999999"],[0,1],-0.2,-25.9,0.3,25.9).s().p("EggXADNQjShYDSk4QQAB+QNh+QPuh/PvB/QFcGAlcAQQwFiCvRCCQoIA2oFAAQoFAAoCg2g");
	this.shape_262.setTransform(-173.975,-207.675);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#000000").ss(2,2,0,3).p("EggagDCQP/CIQOiIQPuiKPvCKQF5GPl5ABQwHiOvPCOQwRB1wDh1QjjhPDjlBg");
	this.shape_263.setTransform(-173.6875,-207.7125);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.lf(["#666666","#999999"],[0,1],-0.2,-26.3,0.3,26.4).s().p("EggaADOQjjhPDjlBQP/CIQOiIQPuiKPvCKQF5GPl5ABQwHiOvPCOQoIA6oFAAQoFAAoCg6g");
	this.shape_264.setTransform(-173.6875,-207.7125);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#000000").ss(2,2,0,3).p("EggdgDCQP/CTQOiTQPuiUPvCUQGWGfmWgPQwJiZvNCZQwRB+wDh+Qj1hFD1lLg");
	this.shape_265.setTransform(-173.4,-207.75);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.lf(["#666666","#999999"],[0,1],-0.2,-26.8,0.4,26.9).s().p("EggdADOQj1hGD1lKQP/CTQOiTQPuiUPvCUQGWGfmWgPQwJiZvMCZQoJA/oFAAQoFAAoCg/g");
	this.shape_266.setTransform(-173.4,-207.75);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#000000").ss(2,2,0,3).p("EggggDCQP+CdQPidQPuiePvCeQG0Gum0geQwLijvLCjQwSCHwCiHQkGg8EGlUg");
	this.shape_267.setTransform(-173.1,-207.7875);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.lf(["#666666","#999999"],[0,1],-0.2,-27.3,0.4,27.3).s().p("EgggADOQkGg8EGlUQP+CdQPidQPuiePvCeQG0Gum0geQwLijvKCjQoJBEoGAAQoFAAoBhEg");
	this.shape_268.setTransform(-173.1,-207.7875);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#000000").ss(2,2,0,3).p("EggjgDBQP+CnQPinQPuiqPvCqQHRG9nRgtQwNivvICvQwTCQwCiQQkXgzEXldg");
	this.shape_269.setTransform(-172.8125,-207.8375);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.lf(["#666666","#999999"],[0,1],-0.2,-27.7,0.4,27.8).s().p("EggjADPQkXgzEXldQP+CnQPinQPuiqPvCqQHRG9nRgtQwNivvICvQoKBIoFAAQoFAAoBhIg");
	this.shape_270.setTransform(-172.8125,-207.8375);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#000000").ss(2,2,0,3).p("EggmgDBQP9CyQQiyQPui0PvC0QHuHNnug9QwPi5vGC5QwTCZwCiZQkpgpEplng");
	this.shape_271.setTransform(-172.525,-207.875);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.lf(["#666666","#999999"],[0,1],-0.3,-28.2,0.4,28.3).s().p("EggmADPQkpgpEplnQP9CyQQiyQPui0PvC0QHuHNnug9QwPi5vGC5QoKBNoFAAQoFAAoBhNg");
	this.shape_272.setTransform(-172.525,-207.875);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#000000").ss(2,2,0,3).p("EggpgDAQP9C8QQi8QPui/PvC/QILHcoLhMQwRjEvEDEQwUCiwBiiQk6ghE6lvg");
	this.shape_273.setTransform(-172.2375,-207.9125);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.lf(["#666666","#999999"],[0,1],-0.3,-28.7,0.4,28.7).s().p("EggpADQQk6ghE6lvQP9C8QQi8QPui/PvC/QILHcoLhMQwRjEvEDEQoKBRoFAAQoFAAoBhRg");
	this.shape_274.setTransform(-172.2375,-207.9125);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#000000").ss(2,2,0,3).p("EggrgDAQP7DGQSjGQPujJPvDJQIoHroohbQwUjPvCDPQwUCrwAirQlNgXFNl5g");
	this.shape_275.setTransform(-171.9532,-207.9494);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.lf(["#666666","#999999"],[0,1],-0.3,-29.1,0.4,29.2).s().p("EggrADQQlNgXFNl5QP7DGQSjGQPujJPvDJQIoHroohbQwUjPvCDPQoKBWoFAAQoFAAoAhWg");
	this.shape_276.setTransform(-171.9532,-207.9494);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("#000000").ss(2,2,0,3).p("EggpgDAQP9C8QQi8QPui/PvC/QINHdoNhNQwRjFvEDFQwUCiwBiiQk7ggE7lwg");
	this.shape_277.setTransform(-172.225,-207.9125);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.lf(["#666666","#999999"],[0,1],-0.3,-28.8,0.4,28.8).s().p("EggpADQQk7ggE7lwQP9C8QQi8QPui/PvC/QINHdoNhNQwRjFvEDFQoKBRoFAAQoFAAoBhRg");
	this.shape_278.setTransform(-172.225,-207.9125);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("#000000").ss(2,2,0,3).p("EggmgDBQP9CzQQizQPui1PvC1QHxHPnxg/QwPi6vGC6QwTCawCiaQkrgpErlng");
	this.shape_279.setTransform(-172.5,-207.875);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.lf(["#666666","#999999"],[0,1],-0.2,-28.4,0.4,28.5).s().p("EggmADPQkrgpErlnQP9CzQQizQPui1PvC1QHxHPnxg/QwQi6vFC6QoKBNoFAAQoFAAoBhNg");
	this.shape_280.setTransform(-172.5,-207.875);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("#000000").ss(2,2,0,3).p("EggjgDBQP9CoQQioQPuirPvCrQHVG/nVgvQwOiwvICwQwSCRwCiRQkagyEaleg");
	this.shape_281.setTransform(-172.775,-207.8375);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.lf(["#666666","#999999"],[0,1],-0.2,-28.1,0.4,28.1).s().p("EggjADPQkagyEaleQP9CoQQioQPuirPvCrQHVG/nVgvQwOiwvICwQoJBJoFAAQoFAAoBhJg");
	this.shape_282.setTransform(-172.775,-207.8375);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().s("#000000").ss(2,2,0,3).p("EgghgDBQP+CfQQifQPuihPvChQG5Gxm5ghQwMimvKCmQwSCJwDiJQkJg7EJlVg");
	this.shape_283.setTransform(-173.05,-207.8);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.lf(["#666666","#999999"],[0,1],-0.2,-27.7,0.4,27.8).s().p("EgghADPQkJg7EJlWQP+CgQPigQPvihPuChQG6Gxm6ggQwLimvKCmQoJBEoFAAQoFAAoChEg");
	this.shape_284.setTransform(-173.05,-207.8);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f().s("#000000").ss(2,2,0,3).p("EggegDCQP/CVQOiVQPuiXPvCXQGeGimegSQwJibvMCbQwSCAwDiAQj5hED5lMg");
	this.shape_285.setTransform(-173.325,-207.75);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.lf(["#666666","#999999"],[0,1],-0.2,-27.4,0.3,27.4).s().p("EggeADOQj5hDD5lNQP/CVQOiVQPuiWPvCWQGeGimegSQwJibvMCbQoJBAoFAAQoFAAoChAg");
	this.shape_286.setTransform(-173.325,-207.75);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f().s("#000000").ss(2,2,0,3).p("EggbgDCQP/CLQOiLQPuiNPvCNQGDGUmDgEQwHiRvPCRQwRB3wDh3QjphNDplDg");
	this.shape_287.setTransform(-173.6,-207.725);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.lf(["#666666","#999999"],[0,1],-0.1,-27,0.3,27.1).s().p("EggbADOQjphNDplDQP/CLQOiLQPuiNPvCNQGDGUmDgEQwHiRvOCRQoJA7oFAAQoFAAoCg7g");
	this.shape_288.setTransform(-173.6,-207.725);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f().s("#000000").ss(2,2,0,3).p("EggYgDDQP/CBQOiBQPuiCPvCCQFnGGlnAKQwGiGvQCGQwQBvwEhvQjYhVDYk7g");
	this.shape_289.setTransform(-173.875,-207.6875);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.lf(["#666666","#999999"],[0,1],-0.2,-26.7,0.2,26.7).s().p("EggYADNQjYhVDYk7QP/CBQOiBQPuiCPvCCQFnGGlnAKQwGiGvQCGQoIA4oFAAQoFAAoCg4g");
	this.shape_290.setTransform(-173.875,-207.6875);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f().s("#000000").ss(2,2,0,3).p("EggWgDDQQAB3QNh3QPuh5PwB5QFLF3lLAZQwEh8vSB8QwQBnwFhnQjHheDHkyg");
	this.shape_291.setTransform(-174.15,-207.65);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.lf(["#666666","#999999"],[0,1],-0.1,-26.3,0.3,26.4).s().p("EggWADNQjGheDGkyQQBB3QMh3QPvh5PuB5QFMF3lMAZQwDh8vSB8QoIAzoFAAQoFAAoDgzg");
	this.shape_292.setTransform(-174.15,-207.65);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f().s("#000000").ss(2,2,0,3).p("EggTgDDQQBBtQMhtQPuhvPvBvQEwFokwAoQwBhyvVByQwPBewFheQi2hnC2kpg");
	this.shape_293.setTransform(-174.425,-207.6125);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.lf(["#666666","#999999"],[0,1],-0.1,-25.9,0.2,26).s().p("EggTADNQi2hnC2kpQQBBtQMhtQPuhvPvBvQEwFokwAoQwBhyvVByQoHAvoFAAQoFAAoDgvg");
	this.shape_294.setTransform(-174.425,-207.6125);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f().s("#000000").ss(2,2,0,3).p("EggQgDEQQBBkQMhkQPuhkPvBkQEUFakUA2Qv/hnvYBnQwOBWwFhWQimhvCmkhg");
	this.shape_295.setTransform(-174.7,-207.575);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.lf(["#666666","#999999"],[0,1],-0.1,-25.6,0.2,25.7).s().p("EggQADMQimhvCmkhQQCBkQLhkQPuhkPvBkQEUFakUA2Qv/hnvXBnQoHAroFAAQoFAAoDgrg");
	this.shape_296.setTransform(-174.7,-207.575);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f().s("#000000").ss(2,2,0,3).p("EggNgDEQQCBZQLhZQPuhbPvBbQD4FLj4BFQv9hdvaBdQwNBNwGhNQiWh5CWkXg");
	this.shape_297.setTransform(-174.975,-207.5375);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.lf(["#666666","#999999"],[0,1],-0.1,-25.2,0.1,25.3).s().p("EggNADMQiWh5CWkXQQCBZQLhZQPuhbPvBbQD4FLj4BFQv9hdvaBdQoGAmoFAAQoFAAoDgmg");
	this.shape_298.setTransform(-174.975,-207.5375);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f().s("#000000").ss(2,2,0,3).p("EggLgDFQQDBQQKhQQPvhQPvBQQDdE9jdBTQv7hSvcBSQwNBFwHhFQiFiBCFkPg");
	this.shape_299.setTransform(-175.25,-207.5);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.lf(["#666666","#999999"],[0,1],0,-24.9,0.2,24.9).s().p("EggLADMQiEiCCEkPQQDBQQJhQQPwhQPuBQQDeE9jeBUQv6hUvcBUQoGAioFAAQoFAAoEgig");
	this.shape_300.setTransform(-175.25,-207.5);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f().s("#000000").ss(2,2,0,3).p("EggIgDFQQDBGQJhGQPvhGPvBGQDBEujBBiQv5hIvdBIQwNA8wHg8Qh0iKB0kGg");
	this.shape_301.setTransform(-175.525,-207.4625);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.lf(["#666666","#999999"],[0,1],0,-24.5,0.1,24.6).s().p("EggIADLQh0iKB0kGQQDBGQJhGQPvhGPvBGQDBEujBBiQv5hIvdBIQoGAeoFAAQoFAAoEgeg");
	this.shape_302.setTransform(-175.525,-207.4625);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f().s("#000000").ss(2,2,0,3).p("EggFgDFQQDA7QJg7QPvg9PvA9QCmEfimBxQv3g+vgA+QwMAzwHgzQhkiTBkj9g");
	this.shape_303.setTransform(-175.8,-207.425);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.lf(["#666666","#999999"],[0,1],0,-24.2,0.1,24.2).s().p("EggFADLQhjiTBjj9QQEA7QIg7QPvg9PvA9QClEfilBxQv3g+vfA+QoGAZoFAAQoFAAoEgZg");
	this.shape_304.setTransform(-175.8,-207.425);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f().s("#000000").ss(2,2,0,3).p("EggCgDGQQEAyQIgyQPvgyPvAyQCKERiKB/Qv1gzviAzQwLArwIgrQhTicBTj0g");
	this.shape_305.setTransform(-176.075,-207.375);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.lf(["#666666","#999999"],[0,1],0.1,-23.8,0.1,23.9).s().p("EggCADKQhTicBTj0QQEAyQIgyQPvgyPvAyQCKERiKB/Qv1gzviAzQoFAWoFAAQoFAAoEgWg");
	this.shape_306.setTransform(-176.075,-207.375);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f().s("#000000").ss(2,2,0,3).p("EggAgDGQQFAnQIgnQPugoPwAoQBuEChuCOQvzgqvkAqQwLAiwJgiQhCilBCjrg");
	this.shape_307.setTransform(-176.35,-207.35);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.lf(["#666666","#999999"],[0,1],0.1,-23.5,0.1,23.5).s().p("EggAADKQhCilBCjrQQFAoQHgoQPwgoPuAoQBvEChvCOQvygqvkAqQoFARoFAAQoFAAoFgRg");
	this.shape_308.setTransform(-176.35,-207.35);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f().s("#000000").ss(2,2,0,3).p("A/9jGQQFAeQHgeQPvgePvAeQBTDzhTCdQvxgfvlAfQwLAZwJgZQgyiuAyjig");
	this.shape_309.setTransform(-176.625,-207.3125);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.lf(["#666666","#999999"],[0,1],0,-23.1,0,23.2).s().p("A/9DKQgyiuAyjiQQFAeQHgeQPvgePvAeQBTDzhTCdQvxgfvlAfQoFAMoFAAQoFAAoFgMg");
	this.shape_310.setTransform(-176.625,-207.3125);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f().s("#000000").ss(2,2,0,3).p("A/6jHQQFAUQHgUQPvgUPvAUQA3Dlg3CrQvvgUvnAUQwLARwJgRQghi2Ahjag");
	this.shape_311.setTransform(-176.9,-207.275);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.lf(["#666666","#999999"],[0,1],0.1,-22.7,0.1,22.8).s().p("A/6DJQghi2AhjaQQGAUQGgUQPvgUPvAUQA3Dlg3CrQvvgUvnAUQoFAJoFAAQoFAAoFgJg");
	this.shape_312.setTransform(-176.9,-207.275);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f().s("#000000").ss(2,2,0,3).p("A/3jHQQGAKQGgKQPvgKPvAKQAbDWgbC6QvtgLvqALQwJAIwKgIQgRjAARjQg");
	this.shape_313.setTransform(-177.175,-207.2375);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.lf(["#666666","#999999"],[0,1],0.1,-22.4,0,22.5).s().p("A/3DJQgRjAARjQQQGAKQGgKQPvgKPvAKQAbDWgbC6QvtgLvqALQoEAEoFAAQoFAAoFgEg");
	this.shape_314.setTransform(-177.175,-207.2375);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.lf(["#666666","#999999"],[0,1],0.2,-22,0,22.1).s().p("AAfDJMggUAAAIAAmRMAgMAAAIfeAAIAAGRg");
	this.shape_315.setTransform(-177.45,-207.2);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f().s("#000000").ss(2,2,0,3).p("A/1jIQQHgIQFAIQPxAKPugKIAAGQQvrALvsgLQwJgKwLAKg");
	this.shape_316.setTransform(-177.45,-207.1125);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.lf(["#666666","#999999"],[0,1],0.2,-22.6,0,22.6).s().p("AAfDIQwJgKwLAKIAAmQQQHgIQFAIQPxAKPtgKIAAGQQn1AFn2AAQn1AAn2gFg");
	this.shape_317.setTransform(-177.45,-207.1125);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f().s("#000000").ss(2,2,0,3).p("A/1jJQQHgQQFAQQPyAUPtgUIAAGQQvrAWvsgWQwIgVwMAVg");
	this.shape_318.setTransform(-177.45,-207.0375);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.lf(["#666666","#999999"],[0,1],0.2,-23,0,23.1).s().p("AAfDHQwIgVwMAVIAAmQQQHgQQFAQQPyAUPsgUIAAGQQn1ALn2AAQn1AAn2gLg");
	this.shape_319.setTransform(-177.45,-207.0375);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f().s("#000000").ss(2,2,0,3).p("A/1jKQQHgYQFAYQP0AePrgeIAAGQQvrAivsgiQwIgfwMAfg");
	this.shape_320.setTransform(-177.45,-206.9375);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.lf(["#666666","#999999"],[0,1],0.2,-23.6,0,23.6).s().p("AAfDGQwIgfwMAfIAAmQQQHgYQFAYQPzAePrgeIAAGQQn1ARn2AAQn1AAn2gRg");
	this.shape_321.setTransform(-177.45,-206.9375);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f().s("#000000").ss(2,2,0,3).p("A/1jLQQHgfQFAfQP1AoPqgoIAAGQQvrAtvsgtQwHgpwNApg");
	this.shape_322.setTransform(-177.45,-206.8625);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.lf(["#666666","#999999"],[0,1],0.2,-24.1,0,24.1).s().p("AAfDFQwHgpwNApIAAmQQQHgfQFAfQP1AoPpgoIAAGQQn1AXn2AAQn1AAn2gXg");
	this.shape_323.setTransform(-177.45,-206.8625);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f().s("#000000").ss(2,2,0,3).p("A/1jMQQHgnQFAnQP2AyPpgyIAAGQQvrA5vsg5QwHgzwNAzg");
	this.shape_324.setTransform(-177.45,-206.775);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.lf(["#666666","#999999"],[0,1],0.2,-24.6,0,24.6).s().p("AAfDEQwHgzwNAzIAAmQQQHgnQFAnQP3AyPngyIAAGQQn1Adn2AAQn1AAn2gdg");
	this.shape_325.setTransform(-177.45,-206.775);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f().s("#000000").ss(2,2,0,3).p("A/1jNQQHgvQFAvQP4A8Png8IAAGQQvrBEvshEQwHg9wNA9g");
	this.shape_326.setTransform(-177.45,-206.6875);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.lf(["#666666","#999999"],[0,1],0.2,-25.1,0,25.1).s().p("AAfDDQwHg9wNA9IAAmQQQHgvQFAvQP4A8Pmg8IAAGQQn1Ain2AAQn1AAn2gig");
	this.shape_327.setTransform(-177.45,-206.6875);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f().s("#000000").ss(2,2,0,3).p("A/1jNQQHg4QFA4QP5BGPmhGIAAGQQvrBPvshPQwGhIwOBIg");
	this.shape_328.setTransform(-177.45,-206.6125);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.lf(["#666666","#999999"],[0,1],0.2,-25.6,0,25.7).s().p("AAfDDQwGhIwOBIIAAmQQQHg4QFA4QP5BGPlhGIAAGQQn1Ann2AAQn1AAn2gng");
	this.shape_329.setTransform(-177.45,-206.6125);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f().s("#000000").ss(2,2,0,3).p("A/1jOQQHg/QFA/QP7BQPkhQIAAGQQvrBavshaQwFhSwPBSg");
	this.shape_330.setTransform(-177.45,-206.5125);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.lf(["#666666","#999999"],[0,1],0.2,-26.1,0,26.2).s().p("AAfDCQwGhSwOBSIAAmQQQHg/QFA/QP6BQPkhQIAAGQQn1Atn2AAQn1AAn2gtg");
	this.shape_331.setTransform(-177.45,-206.5125);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f().s("#000000").ss(2,2,0,3).p("A/1jPQQHhHQFBHQP7BaPkhaIAAGQQvrBlvshlQwFhcwPBcg");
	this.shape_332.setTransform(-177.45,-206.4375);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.lf(["#666666","#999999"],[0,1],0.2,-26.6,0,26.7).s().p("AAfDBQwFhcwPBcIAAmQQQHhHQFBHQP8BaPihaIAAGQQn1Azn2AAQn1AAn2gzg");
	this.shape_333.setTransform(-177.45,-206.4375);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f().s("#000000").ss(2,2,0,3).p("A/1jQQQHhPQFBPQP9BkPihkIAAGQQvrBxvshxQwFhmwPBmg");
	this.shape_334.setTransform(-177.45,-206.35);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.lf(["#666666","#999999"],[0,1],0.2,-27.1,0,27.2).s().p("AAfDAQwEhmwQBmIAAmQQQHhPQFBPQP9BkPhhkIAAGQQn1A5n2AAQn1AAn2g5g");
	this.shape_335.setTransform(-177.45,-206.35);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f().s("#000000").ss(2,2,0,3).p("A/1jRQQHhXQFBXQP+BuPhhuIAAGQQvrB9vsh9QwEhwwQBwg");
	this.shape_336.setTransform(-177.45,-206.2625);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.lf(["#666666","#999999"],[0,1],0.2,-27.6,0,27.7).s().p("AAfC/QwEhwwQBwIAAmQQQHhXQFBXQP/BuPfhuIAAGQQn1A+n2AAQn1AAn2g+g");
	this.shape_337.setTransform(-177.45,-206.2625);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f().s("#000000").ss(2,2,0,3).p("A/1jSQQHhfQFBfQQAB4Pfh4IAAGQQvrCIvsiIQwEh6wQB6g");
	this.shape_338.setTransform(-177.45,-206.1875);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.lf(["#666666","#999999"],[0,1],0.2,-28.1,-0.1,28.2).s().p("AAfC+QwEh6wQB6IAAmQQQHhfQFBfQQAB4Peh4IAAGQQn1BEn2AAQn1AAn2hEg");
	this.shape_339.setTransform(-177.45,-206.1875);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f().s("#000000").ss(2,2,0,3).p("A/1jTQQHhmQFBmQQBCCPeiCIAAGQQvrCTvsiTQwDiFwRCFg");
	this.shape_340.setTransform(-177.45,-206.0875);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.lf(["#666666","#999999"],[0,1],0.2,-28.6,-0.1,28.7).s().p("AAfC9QwDiFwRCFIAAmQQQHhmQFBmQQBCCPdiCIAAGQQn1BKn2AAQn1AAn2hKg");
	this.shape_341.setTransform(-177.45,-206.0875);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f().s("#000000").ss(2,2,0,3).p("A/1jTQQHhvQFBvQQDCMPciMIAAGQQvrCevsieQwDiPwRCPg");
	this.shape_342.setTransform(-177.45,-206.0125);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.lf(["#666666","#999999"],[0,1],0.2,-29.1,-0.1,29.2).s().p("AAfC9QwCiPwSCPIAAmQQQHhvQFBvQQCCMPciMIAAGQQn1BPn2AAQn1AAn2hPg");
	this.shape_343.setTransform(-177.45,-206.0125);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f().s("#000000").ss(2,2,0,3).p("A/1jUQQHh3QFB3QQECWPbiWIAAGQQvrCpvsipQwCiawSCag");
	this.shape_344.setTransform(-177.45,-205.925);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.lf(["#666666","#999999"],[0,1],0.2,-29.6,-0.1,29.7).s().p("AAfC8QwCiawSCaIAAmQQQHh3QFB3QQECWPaiWIAAGQQn1BVn2AAQn1AAn2hVg");
	this.shape_345.setTransform(-177.45,-205.925);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f().s("#000000").ss(2,2,0,3).p("A/1jVQQHh/QFB/QQFCgPaigIAAGQQvrC1vsi1QwCikwSCkg");
	this.shape_346.setTransform(-177.45,-205.8375);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.lf(["#666666","#999999"],[0,1],0.2,-30.2,-0.1,30.2).s().p("AAfC7QwCikwSCkIAAmQQQHh/QFB/QQFCgPZigIAAGQQn1Ban2AAQn1AAn2hag");
	this.shape_347.setTransform(-177.45,-205.8375);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f().s("#000000").ss(2,2,0,3).p("A/1jWQQHiGQFCGQQHCqPYiqIAAGQQvrDAvsjAQwCiuwSCug");
	this.shape_348.setTransform(-177.45,-205.7625);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.lf(["#666666","#999999"],[0,1],0.2,-30.7,-0.1,30.7).s().p("AAfC6QwBiuwTCuIAAmQQQHiGQFCGQQHCqPXiqIAAGQQn1Bgn2AAQn1AAn2hgg");
	this.shape_349.setTransform(-177.45,-205.7625);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f().s("#000000").ss(2,2,0,3).p("A/1jXQQHiOQFCOQQIC0PXi0IAAGQQvrDMvsjMQwBi4wTC4g");
	this.shape_350.setTransform(-177.45,-205.6625);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.lf(["#666666","#999999"],[0,1],0.2,-31.2,-0.1,31.2).s().p("AAfC5QwBi4wTC4IAAmQQQHiOQFCOQQIC0PWi0IAAGQQn1Bmn2AAQn1AAn2hmg");
	this.shape_351.setTransform(-177.45,-205.6625);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f().s("#000000").ss(2,2,0,3).p("A/1jYQQHiWQFCWQQJC+PWi+IAAGQQvrDXvsjXQwAjBwUDBg");
	this.shape_352.setTransform(-177.45,-205.5875);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.lf(["#666666","#999999"],[0,1],0.2,-31.7,-0.1,31.7).s().p("AAfC4QwAjBwUDBIAAmQQQHiWQFCWQQJC+PVi+IAAGQQn1Bsn2AAQn1AAn2hsg");
	this.shape_353.setTransform(-177.45,-205.5875);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f().s("#000000").ss(2,2,0,3).p("A/1jYQQHieQFCeQQKDIPVjIIAAGQQvsDhvrjhQwAjMwUDMg");
	this.shape_354.setTransform(-177.45,-205.5021);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.lf(["#666666","#999999"],[0,1],0.2,-32.2,-0.1,32.2).s().p("AAfC4QwAjMwUDMIAAmQQQHieQFCeQQKDIPUjIIAAGQQn1Bwn2AAQn1AAn2hwg");
	this.shape_355.setTransform(-177.45,-205.5021);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.lf(["#666666","#999999"],[0,1],0.2,-32.2,-0.1,32.2).s().p("AAfC4QwAjBwUDBIAAmQQQHiWQFCWQQJC+PVi+IAAGQQn1Bsn2AAQn1AAn2hsg");
	this.shape_356.setTransform(-177.45,-205.5875);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.lf(["#666666","#999999"],[0,1],0.2,-32.1,-0.1,32.2).s().p("AAfC5QwBi4wTC4IAAmQQQHiOQFCOQQIC0PWi0IAAGQQn1Bmn2AAQn1AAn2hmg");
	this.shape_357.setTransform(-177.45,-205.6625);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.lf(["#666666","#999999"],[0,1],0.2,-32.1,-0.1,32.1).s().p("AAfC6QwBiuwTCuIAAmQQQHiGQFCGQQHCqPXiqIAAGQQn1Bgn2AAQn1AAn2hgg");
	this.shape_358.setTransform(-177.45,-205.7625);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.lf(["#666666","#999999"],[0,1],0.2,-32,-0.1,32.1).s().p("AAfC7QwCikwSCkIAAmQQQHh/QFB/QQFCgPZigIAAGQQn1Ban2AAQn1AAn2hag");
	this.shape_359.setTransform(-177.45,-205.8375);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.lf(["#666666","#999999"],[0,1],0.2,-32,-0.1,32).s().p("AAfC8QwCiawSCaIAAmQQQHh3QFB3QQECWPaiWIAAGQQn1BVn2AAQn1AAn2hVg");
	this.shape_360.setTransform(-177.45,-205.925);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.lf(["#666666","#999999"],[0,1],0.2,-31.9,-0.1,32).s().p("AAfC9QwCiPwSCPIAAmQQQHhvQFBvQQCCMPciMIAAGQQn1BPn2AAQn1AAn2hPg");
	this.shape_361.setTransform(-177.45,-206.0125);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.lf(["#666666","#999999"],[0,1],0.2,-31.9,-0.1,32).s().p("AAfC9QwDiFwRCFIAAmQQQHhmQFBmQQBCCPdiCIAAGQQn1BKn2AAQn1AAn2hKg");
	this.shape_362.setTransform(-177.45,-206.0875);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.lf(["#666666","#999999"],[0,1],0.2,-31.9,-0.1,31.9).s().p("AAfC+QwEh6wQB6IAAmQQQHhfQFBfQQAB4Peh4IAAGQQn1BEn2AAQn1AAn2hEg");
	this.shape_363.setTransform(-177.45,-206.1875);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.lf(["#666666","#999999"],[0,1],0.2,-31.8,-0.1,31.9).s().p("AAfC/QwEhwwQBwIAAmQQQHhXQFBXQP/BuPfhuIAAGQQn1A+n2AAQn1AAn2g+g");
	this.shape_364.setTransform(-177.45,-206.2625);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.lf(["#666666","#999999"],[0,1],0.2,-31.8,-0.1,31.8).s().p("AAfDAQwEhmwQBmIAAmQQQHhPQFBPQP9BkPhhkIAAGQQn1A5n2AAQn1AAn2g5g");
	this.shape_365.setTransform(-177.45,-206.35);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.lf(["#666666","#999999"],[0,1],0.2,-31.7,-0.1,31.8).s().p("AAfDBQwFhcwPBcIAAmQQQHhHQFBHQP8BaPihaIAAGQQn1Azn2AAQn1AAn2gzg");
	this.shape_366.setTransform(-177.45,-206.4375);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.lf(["#666666","#999999"],[0,1],0.2,-31.7,-0.1,31.8).s().p("AAfDCQwGhSwOBSIAAmQQQHg/QFA/QP6BQPkhQIAAGQQn1Atn2AAQn1AAn2gtg");
	this.shape_367.setTransform(-177.45,-206.5125);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.lf(["#666666","#999999"],[0,1],0.2,-31.6,-0.1,31.7).s().p("AAfDDQwGhIwOBIIAAmQQQHg4QFA4QP5BGPlhGIAAGQQn1Ann2AAQn1AAn2gng");
	this.shape_368.setTransform(-177.45,-206.6125);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.lf(["#666666","#999999"],[0,1],0.2,-31.6,-0.1,31.7).s().p("AAfDDQwHg9wNA9IAAmQQQHgvQFAvQP4A8Pmg8IAAGQQn1Ain2AAQn1AAn2gig");
	this.shape_369.setTransform(-177.45,-206.6875);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.lf(["#666666","#999999"],[0,1],0.2,-31.6,-0.1,31.6).s().p("AAfDEQwHgzwNAzIAAmQQQHgnQFAnQP3AyPngyIAAGQQn1Adn2AAQn1AAn2gdg");
	this.shape_370.setTransform(-177.45,-206.775);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.lf(["#666666","#999999"],[0,1],0.2,-31.5,-0.1,31.6).s().p("AAfDFQwHgpwNApIAAmQQQHgfQFAfQP1AoPpgoIAAGQQn1AXn2AAQn1AAn2gXg");
	this.shape_371.setTransform(-177.45,-206.8625);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.lf(["#666666","#999999"],[0,1],0.2,-31.5,-0.1,31.5).s().p("AAfDGQwIgfwMAfIAAmQQQHgYQFAYQPzAePrgeIAAGQQn1ARn2AAQn1AAn2gRg");
	this.shape_372.setTransform(-177.45,-206.9375);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.lf(["#666666","#999999"],[0,1],0.2,-31.4,-0.1,31.5).s().p("AAfDHQwIgVwMAVIAAmQQQHgQQFAQQPyAUPsgUIAAGQQn1ALn2AAQn1AAn2gLg");
	this.shape_373.setTransform(-177.45,-207.0375);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.lf(["#666666","#999999"],[0,1],0.2,-31.4,-0.1,31.5).s().p("AAfDIQwJgKwLAKIAAmQQQHgIQFAIQPxAKPtgKIAAGQQn1AFn2AAQn1AAn2gFg");
	this.shape_374.setTransform(-177.45,-207.1125);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.lf(["#666666","#999999"],[0,1],0.2,-31.3,-0.1,31.4).s().p("AAfDJMggUAAAIAAmRMAgMAAAIfeAAIAAGRg");
	this.shape_375.setTransform(-177.45,-207.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_238},{t:this.shape_237}]}).to({state:[{t:this.shape_240},{t:this.shape_239}]},1).to({state:[{t:this.shape_242},{t:this.shape_241}]},1).to({state:[{t:this.shape_244},{t:this.shape_243}]},1).to({state:[{t:this.shape_246},{t:this.shape_245}]},1).to({state:[{t:this.shape_248},{t:this.shape_247}]},1).to({state:[{t:this.shape_250},{t:this.shape_249}]},1).to({state:[{t:this.shape_252},{t:this.shape_251}]},1).to({state:[{t:this.shape_254},{t:this.shape_253}]},1).to({state:[{t:this.shape_256},{t:this.shape_255}]},1).to({state:[{t:this.shape_258},{t:this.shape_257}]},1).to({state:[{t:this.shape_260},{t:this.shape_259}]},1).to({state:[{t:this.shape_262},{t:this.shape_261}]},1).to({state:[{t:this.shape_264},{t:this.shape_263}]},1).to({state:[{t:this.shape_266},{t:this.shape_265}]},1).to({state:[{t:this.shape_268},{t:this.shape_267}]},1).to({state:[{t:this.shape_270},{t:this.shape_269}]},1).to({state:[{t:this.shape_272},{t:this.shape_271}]},1).to({state:[{t:this.shape_274},{t:this.shape_273}]},1).to({state:[{t:this.shape_276},{t:this.shape_275}]},1).to({state:[{t:this.shape_278},{t:this.shape_277}]},1).to({state:[{t:this.shape_280},{t:this.shape_279}]},1).to({state:[{t:this.shape_282},{t:this.shape_281}]},1).to({state:[{t:this.shape_284},{t:this.shape_283}]},1).to({state:[{t:this.shape_286},{t:this.shape_285}]},1).to({state:[{t:this.shape_288},{t:this.shape_287}]},1).to({state:[{t:this.shape_290},{t:this.shape_289}]},1).to({state:[{t:this.shape_292},{t:this.shape_291}]},1).to({state:[{t:this.shape_294},{t:this.shape_293}]},1).to({state:[{t:this.shape_296},{t:this.shape_295}]},1).to({state:[{t:this.shape_298},{t:this.shape_297}]},1).to({state:[{t:this.shape_300},{t:this.shape_299}]},1).to({state:[{t:this.shape_302},{t:this.shape_301}]},1).to({state:[{t:this.shape_304},{t:this.shape_303}]},1).to({state:[{t:this.shape_306},{t:this.shape_305}]},1).to({state:[{t:this.shape_308},{t:this.shape_307}]},1).to({state:[{t:this.shape_310},{t:this.shape_309}]},1).to({state:[{t:this.shape_312},{t:this.shape_311}]},1).to({state:[{t:this.shape_314},{t:this.shape_313}]},1).to({state:[{t:this.shape_315},{t:this.shape_237}]},1).to({state:[{t:this.shape_317},{t:this.shape_316}]},1).to({state:[{t:this.shape_319},{t:this.shape_318}]},1).to({state:[{t:this.shape_321},{t:this.shape_320}]},1).to({state:[{t:this.shape_323},{t:this.shape_322}]},1).to({state:[{t:this.shape_325},{t:this.shape_324}]},1).to({state:[{t:this.shape_327},{t:this.shape_326}]},1).to({state:[{t:this.shape_329},{t:this.shape_328}]},1).to({state:[{t:this.shape_331},{t:this.shape_330}]},1).to({state:[{t:this.shape_333},{t:this.shape_332}]},1).to({state:[{t:this.shape_335},{t:this.shape_334}]},1).to({state:[{t:this.shape_337},{t:this.shape_336}]},1).to({state:[{t:this.shape_339},{t:this.shape_338}]},1).to({state:[{t:this.shape_341},{t:this.shape_340}]},1).to({state:[{t:this.shape_343},{t:this.shape_342}]},1).to({state:[{t:this.shape_345},{t:this.shape_344}]},1).to({state:[{t:this.shape_347},{t:this.shape_346}]},1).to({state:[{t:this.shape_349},{t:this.shape_348}]},1).to({state:[{t:this.shape_351},{t:this.shape_350}]},1).to({state:[{t:this.shape_353},{t:this.shape_352}]},1).to({state:[{t:this.shape_355},{t:this.shape_354}]},1).to({state:[{t:this.shape_356},{t:this.shape_352}]},1).to({state:[{t:this.shape_357},{t:this.shape_350}]},1).to({state:[{t:this.shape_358},{t:this.shape_348}]},1).to({state:[{t:this.shape_359},{t:this.shape_346}]},1).to({state:[{t:this.shape_360},{t:this.shape_344}]},1).to({state:[{t:this.shape_361},{t:this.shape_342}]},1).to({state:[{t:this.shape_362},{t:this.shape_340}]},1).to({state:[{t:this.shape_363},{t:this.shape_338}]},1).to({state:[{t:this.shape_364},{t:this.shape_336}]},1).to({state:[{t:this.shape_365},{t:this.shape_334}]},1).to({state:[{t:this.shape_366},{t:this.shape_332}]},1).to({state:[{t:this.shape_367},{t:this.shape_330}]},1).to({state:[{t:this.shape_368},{t:this.shape_328}]},1).to({state:[{t:this.shape_369},{t:this.shape_326}]},1).to({state:[{t:this.shape_370},{t:this.shape_324}]},1).to({state:[{t:this.shape_371},{t:this.shape_322}]},1).to({state:[{t:this.shape_372},{t:this.shape_320}]},1).to({state:[{t:this.shape_373},{t:this.shape_318}]},1).to({state:[{t:this.shape_374},{t:this.shape_316}]},1).to({state:[{t:this.shape_375},{t:this.shape_237}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-430.9,-238.3,505.59999999999997,419.8);


(lib.frame13r = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(2,2,2).p("AmJj0IAJAGIAXAcIAkAPIAygEIBBAhIA3gEIAQAaIAqgQIAZAqIA6gDIAngTIBDAJIAdgpIArAUIAIAjIATAjIBCATIAyAWIAXBBIApAaIgHApIASAyIgOAjIAbBG");
	this.shape.setTransform(39.4882,139.6382);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,2,2).p("AhfwjIAGAjIgVAbIAYA2IgGAeIADAkIgMAkIgeAhIgSBFIghAkIAGAeIghASIAJAvIghAnIghAPIghA2IgmgJIgNAtIAPAeIAJAnIgbA8IgPAzIAYA+IgJAwIAbAYIASAwIAbAPIAYBFAAwiEIAGgjIgVgbIAYg2IgGgeIADgkIgMgkIgeghIgRhFIghgkIAGgeIgggSIAJgvIghgnIghgPIghg2IgHACAlUmyIgkgDIg3AeIgdgbIghAhIgCAhIgMAmIAAAcIhcAvIAAAyIgqA2IAAAqIBCAqIAAA+AJ+OmIggAaIgsgcIgmBDIgjABIgjAUIgugIIg4gqIhUgGIg+gvIgbAYIgqg2IgrAlIhAguIgng3IhQgoIgThMIg4gFIgUApIghAgIhSgaIhAgHIgvBGIg4ADIgFA8IglA1IAFA5Ig2BJ");
	this.shape_1.setTransform(95.8278,107.8729);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_4
	this.instance = new lib.cpngoncretewall();
	this.instance.setTransform(0,0,1.1799,1.3362);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.3,0,163,267.3);


(lib.frame12r = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,2,2).p("AmJj0IAJAGIAXAcIAkAPIAygEIBBAhIA3gEIAQAaIAqgQIAZAqIA6gDIAngTIBDAJIAdgpIArAUIAIAjIATAjIBCATIAyAWIAXBBIApAaIgHApIASAyIgOAjIAbBG");
	this.shape.setTransform(39.4882,139.6382);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1.8,2,2).p("ADEoNIAGAjIgVAbIAYA2IgGAeIADAkIgMAkIgeAhIgSBFIghAkIAGAeIggASIAJAvIghAnIghAPIggA1IgngJIgMAtIAPAeIAJAnIgbA8IgPAzIAYA+IgJAwIAbAYIASAwIAaAPIAYBFAFVGRIAGgjIgVgbIAYg2IgGgeIADgkIgMgkIgeghIgShFIghgkIAGgeIghgRIAJgvIghgnIghgPIghg2IgHACAgvBjIgkgDIg4AeIgdgbIghAhIgCAhIgMAmIAAAcIhcAvIAAAyIgqA2IAAAqIBDAqIAAA+");
	this.shape_1.setTransform(66.5665,54.4832);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,2,2).p("AJWA0IghAaIgrgcIgmBDIgjABIgkAUIgugIIg4gqIhUgGIg+gvIgaAYIgrg2IgqAlIhAgtIgog3IhQgoIgThMIg3gFIgUApIgiAgIhSgaIhAgHIgvBGIg4ADIgFA8IgkA0IAEA5Ig1BJ");
	this.shape_2.setTransform(99.8536,196.0762);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer_3
	this.instance = new lib.cpngoncretewall();
	this.instance.setTransform(0,0,1.1799,1.3362);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.3,0,163,267.3);


(lib.frame11r = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1.8,2,2).p("AmJj0IAJAGIAXAcIAkAPIAygEIBBAhIA3gEIAQAaIAqgQIAZAqIA6gDIAngTIBDAJIAdgpIArAUIAIAjIATAjIBCATIAyAWIAXBBIApAaIgHApIASAyIgOAjIAbBG");
	this.shape.setTransform(39.4928,139.6428);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,2,2).p("AhfwjIAGAjIgVAbIAYA2IgGAeIADAkIgMAkIgeAhIgSBFIghAkIAGAeIghASIAJAvIghAnIghAPIghA2IgmgJIgNAtIAPAeIAJAnIgbA8IgPAzIAYA+IgJAwIAbAYIASAwIAbAPIAYBFAAzkWIADgkIgMgkIgeghIgRhFIghgkIAGgeIgggSIAJgvIghgnIghgPIghg2IgHACAlUmyIgkgDIg3AeIgdgbIghAhIgCAhIgMAmIAAAcIhcAvIAAAyIgqA2IAAAqIBCAqIAAA+AJ+OmIggAaIgsgcIgmBDIgjABIgjAUIgugIIg4gqIhUgGIg+gvIgbAYIgqg2IgrAlIhAguIgng3IhQgoIgThMIg4gFIgUApIghAgIhSgaIhAgHIgvBGIg4ADIgFA8IglA1IAFA5Ig2BJ");
	this.shape_1.setTransform(95.8278,107.8729);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_4
	this.instance = new lib.cpngoncretewall();
	this.instance.setTransform(0,0,1.1799,1.3362);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.3,0,163,267.3);


(lib.frame10r = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,2,2).p("AhZwoIAAAsIgVAbIAYA2IgGAeIADAkIgMAkIgeAgIgSBFIghAkIAGAeIghASIAJAwIghAnIghAPIghA2IgmgJIgNAtIAPAeIAJAmIgbA8IgPAzIAYA/IgJAwIAbAYIASAwIAbAPIAYBEAAwiAIAGgkIgVgbIAYg2IgGgeIADgkIgMgkIgeggIgRhFIghgkIAGgeIgggSIAJgwIghgnIghgPIghg2IgHACAlUmuIgkgEIg3AfIgdgcIghAhIgCAiIgMAmIAAAbIhcAwIAAAxIgqA2IAAArIBCAqIAAA9AJ+OqIggAaIgsgdIgmBDIgjABIgjAVIgugIIg4grIhUgFIg+gvIgbAXIgqg1IgrAkIhAguIgng3IhQgoIgThLIg4gFIgUAoIghAhIhSgaIhAgHIgvBGIg4ADIgFA8IglA1IAFA5Ig2BI");
	this.shape.setTransform(95.8278,107.5492);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1.5,2,2).p("AgGgFIAIAFIAFAF");
	this.shape_1.setTransform(0.7511,115.7136);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,2,2).p("AmCjuIASAXIAkAOIAygEIBBAhIA3gEIAQAbIAqgRIAZAqIA6gCIAngTIBDAIIAdgoIArAUIAIAjIATAjIBCASIAyAXIAXBBIApAZIgHApIASAzIgOAiIAbBG");
	this.shape_2.setTransform(40.1565,140.169);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer_4
	this.instance = new lib.cpngoncretewall();
	this.instance.setTransform(0,0,1.1799,1.3362);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.3,0,163,267.3);


(lib.frame9r = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,2,2).p("AhfwjIAGAjIgVAbIAYA2IgGAeIADAkIgMAkIgeAhIgSBFIghAkIAGAeIghASIAJAvIghAnIghAPIghA2IgmgJIgNAtIAPAeIAJAnIgbA8IgPAzIAYA+IgJAwIAbAYIASAwIAbAPIAYBFAAMl/IgRhFIghgkIAGgeIgggSIAJgvIghgnIghgPIghg2IgHACAlUmyIgkgDIg3AeIgdgbIghAhIgCAhIgMAmIAAAcIhcAvIAAAyIgqA2IAAAqIBCAqIAAA+AJ+OmIggAaIgsgcIgmBDIgjABIgjAUIgugIIg4gqIhUgGIg+gvIgbAYIgqg2IgrAlIhAguIgng3IhQgoIgThMIg4gFIgUApIghAgIhSgaIhAgHIgvBGIg4ADIgFA8IglA1IAFA5Ig2BJ");
	this.shape.setTransform(95.8278,107.8729);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1.5,2,2).p("Al+iSIAKAFIAWAdIAlAOIAygEIBBAhIA3gEIAPAbIAqgRIAaAqIA5gCIAngTIBEAIIAcgoIArAUIAIAjIATAiIBDASIAxAXIAXBCIAqAZ");
	this.shape_1.setTransform(38.3284,129.8784);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_4
	this.instance = new lib.cpngoncretewall();
	this.instance.setTransform(0,0,1.1799,1.3362);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,2,2).p("AmJj0IAJAGIAXAcIAkAPIAygEIBBAhIA3gEIAQAaIAqgQIAZAqIA6gDIAngTIBDAJIAdgpIArAUIAIAjIATAjIBCATIAyAWIAXBBIApAaIgHApIASAyIgOAjIAbBG");
	this.shape_2.setTransform(39.4882,139.6382);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.3,0,163,267.3);


(lib.frame8r = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(1.8,2,2).p("AJWA0IghAaIgrgcIgmBDIgjABIgkAUIgugIIg4gqIhUgGIg+gvIgaAYIgrg2IgqAlIhAgtIgog3IhQgoIgThMIg3gFIgUApIgiAgIhSgaIhAgHIgvBGIg4ADIgFA8IgkA0IAEA5Ig1BJ");
	this.shape.setTransform(99.8531,196.0511);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,2,2).p("ADxoNIAGAjIgVAbIAYA2IgGAeIADAkIgMAkIgeAhIgSBFIghAkIAGAeIggASIAJAvIghAnIghAPIghA1IgmgJIgMAtIAOAeIAJAnIgaA8IgPAzIAYA+IgJAwIAaAYIASAwIAbAPIAYBFAErAtIAGgeIghgRIAJgvIghgnIghgPIghg2IgHACAgCBjIgkgDIg4AeIgdgbIghAhIgCAhIgMAmIAAAcIhcAvIAAAyIgqA2IAAAqIBDAqIAAA+");
	this.shape_1.setTransform(62.0653,54.4737);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1.3,2,2).p("AkjhQIAJAGIAXAcIAkAPIAygEIBBAhIA3gEIAQAZIApgQIAZAqIA6gDIAogTIBDAJIAdgoIArATIAIAjIATAj");
	this.shape_2.setTransform(29.2967,123.2467);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Layer_4
	this.instance = new lib.cpngoncretewall();
	this.instance.setTransform(0,0,1.1799,1.3362);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.3,0,163,267.3);


(lib.frame7r = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,2,2).p("ADvoNIAGAjIgVAbIAYA2IgGAeIADAkIgMAkIgeAhIgSBFIghAkIAGAeIggASIAJAvIghAnIghAPIghA1IgmgJIgMAtIAOAeIAJAnIgaA8IgPAzIAYA+IgJAwIAaAYIASAwIAbAPIAYBFAEvAPIghgRIAJgvIghgnIghgPIghg2IgHACAgEBjIgkgDIg4AeIgdgbIghAhIgCAhIgMAmIAAAcIhcAvIAAAyIgqA2IAAAqIBDAqIAAA+");
	this.shape.setTransform(62.2546,54.4737);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1.5,2,2).p("AI9BJIggAaIgsgcIgmBDIgjABIgjAUIgugIIg4gqIhUgGIg+gvIgbAYIgqg2IgrAlIg/guIgog2IhQgoIgThMIg4gFIgUApIghAgIhSgaIhAgHIgvBGIg4ADIgFA7IglA1");
	this.shape_1.setTransform(102.3055,193.996);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,2,2).p("AkBg9IAKAGIAWAcIAlAPIAygEIBBAgIA3gEIAPAaIApgQIAaAqIA5gDIAogTIBEAJIAcgp");
	this.shape_2.setTransform(25.8067,121.3331);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer_3
	this.instance = new lib.cpngoncretewall();
	this.instance.setTransform(0,0,1.1799,1.3362);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.3,0,163,267.3);


(lib.frame6r = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,2,2).p("ABTg/IgkgEIg2AfIgdgcIghAhIgCAhIgMAmIAAAb");
	this.shape.setTransform(53.421,70.8023);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.5,2,2).p("Aigg+IAKAGIAWAcIAlAPIAygEIBAAgIA3gEIAPAaIAqgQIAaAq");
	this.shape_1.setTransform(16.1268,121.4268);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1.3,2,2).p("AIUA6IgwApIgrgcIgmBDIgjABIgkAUIgugIIg4gqIhUgGIg+gvIgaAYIgrg2IgpAlIhBguIgog2IhQgoIgThMIg3gFIgUApIgiAgIhSgaIhAgHIgvBG");
	this.shape_2.setTransform(107.9571,193.9966);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(2,2,2).p("AB0oIIAGAjIgVAbIAYA2IgGAeIADAkIgMAkIgeAhIgSBFIghAkIAGAeIggASIAJAvIggAnIghAPIghA1IgngJIgMAtIAPAeIAJAnIgbA8IgPAzIAYA+IgJAwIAbAYIASAwIAbAPIAYBFACTACIAJguIghgnIghgPIghg2IgHAC");
	this.shape_3.setTransform(74.5866,53.9609);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer_3
	this.instance = new lib.cpngoncretewall();
	this.instance.setTransform(0,0,1.1799,1.3362);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.3,0,163.9,267.3);


(lib.frame5r = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,2,2).p("AAvgNIgkgDIg2Ad");
	this.shape.setTransform(57.042,65.7563);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.4,2,2).p("Ah2glIAKAGIAWAcIAlAOIAxgEIBBAhIA3gE");
	this.shape_1.setTransform(11.9009,118.9327);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,2,2).p("AGyBGIgrAdIgsgcIgmBDIgjABIgjAUIgugIIg4gqIhUgGIg9gvIgbAYIgqg2IgrAlIhAguIgog2IhQgoIgThMIg4gFIgUApIghAg");
	this.shape_2.setTransform(117.3435,193.9973);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(2,2,2).p("ACEoIIAGAjIgVAbIAYA2IgGAeIADAkIgMAkIgeAhIgSBFIghAkIAGAeIghASIAJAvIggAnIghAPIghA1IgmgJIgNAtIAPAeIAJAnIgbA8IgPAzIAYA+IgJAwIAbAYIASAwIAbAPIAYBF");
	this.shape_3.setTransform(73.0356,53.9609);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer_3
	this.instance = new lib.cpngoncretewall();
	this.instance.setTransform(0,0,1.1799,1.3362);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.3,0,163.4,267.3);


(lib.frame4r = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1.5,2,2).p("AB0kzIAOA3IgVAbIAYA2IgGAeIADAkIgMAkIgeAhIgSBEIghAkIAGAeIghASIAJAvIggAnIghAPIghA2IgmgJIgNAt");
	this.shape.setTransform(73.831,30.6581);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.3,2,2).p("AghgXIAJAFIAXAcIAjAO");
	this.shape_1.setTransform(3.458,117.558);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.8,2,2).p("AFLALIguAdIgrgdIgmBDIgjABIgkAVIgugIIg4grIhTgFIg+guIgaAWIgrg0IgqAjIhBgtIgog3");
	this.shape_2.setTransform(127.8704,199.9221);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_5
	this.instance = new lib.cpngoncretewall();
	this.instance.setTransform(0,0,1.1799,1.3362);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.3,-1.3,163.70000000000002,268.6);


(lib.frame3r = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f().s("#000000").ss(0.5,2,2).p("AFMAIIgwAgIgrgdIgmBDIgjABIgkAVIgugIIg4grIhTgFIg+guIgaAWIgrg0IgqAjIhBgtIgog3");
	this.shape.setTransform(127.9969,199.9221);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,2,2).p("AAwjqIAKA2IgVAbIAYA2IgGAeIADAkIgMAjIgeAhIgRBFIghAkIAGAeIggASIAJAv");
	this.shape_1.setTransform(80.9745,23.4999);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_5
	this.instance = new lib.cpngoncretewall();
	this.instance.setTransform(0,0,1.1799,1.3362);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1.2,162.6,268.5);


(lib.frame2r = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.8,2,2).p("AgChjIALA2IgUAbIAXA1IgGAeIADAk");
	this.shape.setTransform(85.9167,10.0471);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.2,2,2).p("ADBgrIgyAdIgsgcIgmBCIgjABIgiAUIgugIIg4gpIhUgG");
	this.shape_1.setTransform(142.1005,205.355);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_5
	this.instance = new lib.cpngoncretewall();
	this.instance.setTransform(0,0,1.1799,1.3362);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1.1,162.8,268.40000000000003);


(lib.shearwall = function(mode,startPosition,loop,reversed) {
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
	this.frame = new lib.Symbol3r();
	this.frame.name = "frame";
	this.frame.setTransform(-39,448.7,1,1,0,0,0,80.8,133.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,2,2).p("AA5gfIghAaIgqgdIgmBC");
	this.shape.setTransform(34.1712,519.6038);

	this.frame_1 = new lib.frame2r();
	this.frame_1.name = "frame_1";
	this.frame_1.setTransform(-39.3,583.7,1,1,0,0,0,80.5,268.6);

	this.frame_2 = new lib.frame3r();
	this.frame_2.name = "frame_2";
	this.frame_2.setTransform(-39.3,583.7,1,1,0,0,0,80.5,268.6);

	this.frame_3 = new lib.frame4r();
	this.frame_3.name = "frame_3";
	this.frame_3.setTransform(-39.3,583.7,1,1,0,0,0,80.5,268.6);

	this.frame_4 = new lib.frame5r();
	this.frame_4.name = "frame_4";
	this.frame_4.setTransform(-39.3,583.7,1,1,0,0,0,80.5,268.6);

	this.frame_5 = new lib.frame6r();
	this.frame_5.name = "frame_5";
	this.frame_5.setTransform(-39.3,583.7,1,1,0,0,0,80.5,268.6);

	this.frame_6 = new lib.frame7r();
	this.frame_6.name = "frame_6";
	this.frame_6.setTransform(-39.3,583.7,1,1,0,0,0,80.5,268.6);

	this.frame_7 = new lib.frame8r();
	this.frame_7.name = "frame_7";
	this.frame_7.setTransform(-39.3,583.7,1,1,0,0,0,80.5,268.6);

	this.frame_8 = new lib.frame9r();
	this.frame_8.name = "frame_8";
	this.frame_8.setTransform(-39.3,583.7,1,1,0,0,0,80.5,268.6);

	this.frame_9 = new lib.frame11r();
	this.frame_9.name = "frame_9";
	this.frame_9.setTransform(-39.3,583.7,1,1,0,0,0,80.5,268.6);

	this.frame_10 = new lib.frame10r();
	this.frame_10.name = "frame_10";
	this.frame_10.setTransform(-39.3,583.7,1,1,0,0,0,80.5,268.6);

	this.frame_11 = new lib.frame12r();
	this.frame_11.name = "frame_11";
	this.frame_11.setTransform(-39.3,583.7,1,1,0,0,0,80.5,268.6);

	this.frame_12 = new lib.frame13r();
	this.frame_12.name = "frame_12";
	this.frame_12.setTransform(-39.3,583.7,1,1,0,0,0,80.5,268.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.frame}]}).to({state:[{t:this.frame_1}]},35).to({state:[{t:this.frame_2}]},31).to({state:[{t:this.frame_3}]},39).to({state:[{t:this.frame_4}]},46).to({state:[{t:this.frame_5}]},55).to({state:[{t:this.frame_6}]},55).to({state:[{t:this.frame_7}]},48).to({state:[{t:this.frame_8}]},49).to({state:[{t:this.frame_9}]},50).to({state:[{t:this.frame_10}]},49).to({state:[{t:this.frame_11}]},50).to({state:[{t:this.frame_12}]},56).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121,314,163.2,268.4);


(lib.momentframe_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// redot
	this.instance = new lib.redot();
	this.instance.setTransform(277.55,237.2,1.4099,1.4099,0,0,0,10,10);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({x:275.75},20).to({_off:true},1).wait(19).to({_off:false,x:272.15},0).to({x:275.75},20).wait(1));

	// redot
	this.instance_1 = new lib.redot();
	this.instance_1.setTransform(-5.8,239,1.4099,1.4099,0,0,0,10,10);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).to({x:-7.6},20).to({_off:true},1).wait(19).to({_off:false,x:-9.4},0).to({x:-7.6},20).wait(1));

	// redot
	this.instance_2 = new lib.redot();
	this.instance_2.setTransform(279.35,22.5,1.4099,1.4099,0,0,0,10,10);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).to({x:248.05,y:20.55},20).to({_off:true},1).wait(19).to({_off:false,x:215.35,y:22.5},0).to({x:248.05,y:20.55},20).wait(1));

	// redot
	this.instance_3 = new lib.redot();
	this.instance_3.setTransform(53,21.9,1.4099,1.4099,0,0,0,10,10);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).to({x:19.1,y:20.6},20).to({_off:true},1).wait(19).to({_off:false,x:-11,y:21.9},0).to({x:19.1,y:20.6},20).wait(1));

	// redot
	this.instance_4 = new lib.redot();
	this.instance_4.setTransform(315.05,-232.9,1.4099,1.4099,0,0,0,10,10);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({_off:false},0).to({x:244.6,y:-238.15},20).to({_off:true},1).wait(19).to({_off:false,x:179.85,y:-232.9},0).to({x:244.6,y:-238.15},20).wait(1));

	// redot
	this.instance_5 = new lib.redot();
	this.instance_5.setTransform(88.7,-233.5,1.4099,1.4099,0,0,0,10,10);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(19).to({_off:false},0).to({x:21.55,y:-236.75},20).to({_off:true},1).wait(19).to({_off:false,x:-46.5,y:-233.5},0).to({x:21.55,y:-236.75},20).wait(1));

	// Layer_2
	this.bf = new lib.momentframe();
	this.bf.name = "bf";
	this.bf.setTransform(285.6,251.5,0.6292,0.6292,0,0,0,62.6,161);

	this.timeline.addTween(cjs.Tween.get(this.bf).to({regX:62.7,regY:161.1,skewX:7.9992},19).to({regX:62.6,regY:161,skewX:0},20).to({regX:62.7,regY:161.1,skewX:-7.9992},20).to({regX:62.6,regY:161,skewX:0},20).wait(1));

	// Layer_1
	this.bf2 = new lib.momentframe();
	this.bf2.name = "bf2";
	this.bf2.setTransform(285.6,-6.1,0.6292,0.6292,0,0,0,62.6,161);

	this.timeline.addTween(cjs.Tween.get(this.bf2).to({regX:62.7,regY:161.1,skewX:7.9992,x:321.55,y:-3.55},19).to({regX:62.6,regY:161,skewX:0,x:285.6,y:-5.55},20).to({regX:62.7,regY:161.1,skewX:-7.9992,x:249.6,y:-3.7},20).to({regX:62.6,regY:161,skewX:0,x:285.6,y:-5.45},20).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.5,-252.2,448.7,517);


(lib.frame_floor2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.instance = new lib.redot();
	this.instance.setTransform(195,-65.6,1.8,1.8,0,0,0,10.1,10);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({regX:10,scaleX:1,scaleY:1,x:181.7,y:-30},20).to({_off:true},1).wait(19).to({_off:false,scaleX:1.7999,scaleY:1.7999,x:-74.05,y:-62},0).to({scaleX:1,scaleY:1,x:-56.9,y:-28.4},20).wait(1));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ao7JhIQR18IBlC7IwPV8g");
	this.shape.setTransform(-108.7,37.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("Ao6JhIQQ18IBmC7IwRV8g");
	this.shape_1.setTransform(-108.55,37.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("Ao3JrIQJ2NIBmC7IwIWKg");
	this.shape_2.setTransform(-108.9,37.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AozJzIQB2dIBmC7Iv/Wag");
	this.shape_3.setTransform(-109.25,36.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AovJ9IP62uIBlC8Iv3Wng");
	this.shape_4.setTransform(-109.6,35.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AosKGIPz2+IBmC7IvuW2g");
	this.shape_5.setTransform(-109.95,34.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AonKPIPq3PIBlC8IvlXFg");
	this.shape_6.setTransform(-110.3,33.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AokKYIPj3fIBmC8IvdXTg");
	this.shape_7.setTransform(-110.625,33.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AogKhIPc3wIBlC8IvUXig");
	this.shape_8.setTransform(-111,32.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AocKqIPU4AIBlC9IvMXwg");
	this.shape_9.setTransform(-111.325,31.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AoYKzIPN4QIBkC8IvDX/g");
	this.shape_10.setTransform(-111.7,30.575);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AoVK8IPG4hIBlC9Iu7YOg");
	this.shape_11.setTransform(-112.025,29.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AoRLFIO+4xIBlC9IuzYcg");
	this.shape_12.setTransform(-112.375,28.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AoNLOIO25CIBlC9IuqYrg");
	this.shape_13.setTransform(-112.75,28.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("AoJLXIOu5SIBlC+IuhY5g");
	this.shape_14.setTransform(-113.075,27.275);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("AoGLgIOo5iIBlC+IuaZHg");
	this.shape_15.setTransform(-113.45,26.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("AoCLqIOg50IBlC+IuRZXg");
	this.shape_16.setTransform(-113.775,25.625);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("An+LzIOY6EIBlC+IuIZlg");
	this.shape_17.setTransform(-114.125,24.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("An6L8IOR6UIBkC+It/Zzg");
	this.shape_18.setTransform(-114.475,23.975);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("An2MFIOJ6kIBkC+It3aCg");
	this.shape_19.setTransform(-114.825,23.15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("AnzMOIOC61IBlC/ItvaQg");
	this.shape_20.setTransform(-115.175,22.325);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("AnvMXIN77FIBkC/Itmaeg");
	this.shape_21.setTransform(-115.525,21.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},39).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer_6
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("Ao7JhIQQ18IBnC7IwRV8g");
	this.shape_22.setTransform(-6.375,-100.15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("Ao+JYIQY1rIBlC8IwXVrg");
	this.shape_23.setTransform(-6.55,-101);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("ApBJRIQf1dIBkC+IweVbg");
	this.shape_24.setTransform(-6.825,-101.85);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("ApFJIIQo1MIBjC/IwlVKg");
	this.shape_25.setTransform(-7.15,-102.675);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("ApIJAIQv08IBiDBIwsU4g");
	this.shape_26.setTransform(-7.425,-103.55);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("ApLI3IQ20rIBhDCIwyUng");
	this.shape_27.setTransform(-7.75,-104.375);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("ApOIvIQ90bIBgDDIw5UWg");
	this.shape_28.setTransform(-8.025,-105.225);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("ApRInIRF0MIBfDFIxAUFg");
	this.shape_29.setTransform(-8.35,-106.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#999999").s().p("ApVIeIRNz7IBeDGIxHT1g");
	this.shape_30.setTransform(-8.625,-106.925);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#999999").s().p("ApYIWIRVzrIBcDIIxOTjg");
	this.shape_31.setTransform(-8.95,-107.775);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#999999").s().p("ApbIOIRczbIBbDJIxUTSg");
	this.shape_32.setTransform(-9.225,-108.625);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#999999").s().p("ApeIFIRjzKIBbDKIxbTBg");
	this.shape_33.setTransform(-9.55,-109.475);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#999999").s().p("ApiH9IRsy7IBZDMIxiSxg");
	this.shape_34.setTransform(-9.875,-110.325);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#999999").s().p("AplH0IRyyqIBZDNIxpSgg");
	this.shape_35.setTransform(-10.15,-111.15);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#999999").s().p("ApoHtIR6ybIBXDPIxvSOg");
	this.shape_36.setTransform(-10.475,-112.025);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#999999").s().p("ApsHkISCyLIBWDQIx2R+g");
	this.shape_37.setTransform(-10.75,-112.85);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#999999").s().p("ApvHbISKx5IBVDRIx9Rtg");
	this.shape_38.setTransform(-11.075,-113.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#999999").s().p("ApyHUISRxrIBUDTIyERcg");
	this.shape_39.setTransform(-11.35,-114.575);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#999999").s().p("Ap1HLISZxaIBSDUIyKRLg");
	this.shape_40.setTransform(-11.675,-115.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#999999").s().p("Ap5HDIShxKIBRDWIyRQ6g");
	this.shape_41.setTransform(-11.95,-116.25);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#999999").s().p("Ap8G7ISow7IBRDXIyYQqg");
	this.shape_42.setTransform(-12.275,-117.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22,p:{x:-6.375}}]}).to({state:[{t:this.shape_22,p:{x:-6.225}}]},39).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_22,p:{x:-6.225}}]},1).wait(1));

	// Layer_7
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#999999").s().p("Ao6pgIBmi7IQQV8IhnC7g");
	this.shape_43.setTransform(234.5,37.975);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#999999").s().p("Ao2poIBli7IQIWOIhnC5g");
	this.shape_44.setTransform(234.875,37.075);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#999999").s().p("AoypvIBli8IQAWgIhoC3g");
	this.shape_45.setTransform(235.275,36.225);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#999999").s().p("Aoup3IBli8IP4WxIhpC2g");
	this.shape_46.setTransform(235.65,35.325);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#999999").s().p("Aoqp/IBki8IPxXDIhqCzg");
	this.shape_47.setTransform(236.025,34.45);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#999999").s().p("AomqGIBki9IPpXVIhrCxg");
	this.shape_48.setTransform(236.425,33.55);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#999999").s().p("AohqOIBji9IPgXmIhsCxg");
	this.shape_49.setTransform(236.8,32.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#999999").s().p("AodqVIBii+IPZX4IhtCug");
	this.shape_50.setTransform(237.2,31.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#999999").s().p("AoZqcIBii+IPRYJIhuCsg");
	this.shape_51.setTransform(237.575,30.925);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#999999").s().p("AoVqkIBii+IPJYbIhvCqg");
	this.shape_52.setTransform(237.95,30.025);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#999999").s().p("AoRqrIBhi/IPCYsIhwCpg");
	this.shape_53.setTransform(238.35,29.175);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#999999").s().p("AoNqzIBhi/IO6Y+IhxCng");
	this.shape_54.setTransform(238.725,28.275);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#999999").s().p("AoJq7IBhi/IOxZQIhyClg");
	this.shape_55.setTransform(239.1,27.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#999999").s().p("AoFrCIBgjAIOqZiIhzCjg");
	this.shape_56.setTransform(239.5,26.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#999999").s().p("AoArKIBfjAIOiZzIh0Cig");
	this.shape_57.setTransform(239.875,25.65);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#999999").s().p("An8rRIBejBIObaFIh1Cgg");
	this.shape_58.setTransform(240.275,24.75);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#999999").s().p("An4rYIBejCIOTaXIh2Ceg");
	this.shape_59.setTransform(240.65,23.875);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#999999").s().p("An0rgIBejCIOLaoIh3Cdg");
	this.shape_60.setTransform(241.025,22.975);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#999999").s().p("AnwrnIBdjDIOEa6Ih4Cbg");
	this.shape_61.setTransform(241.425,22.125);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#999999").s().p("AnsrvIBdjDIN8bMIh6CZg");
	this.shape_62.setTransform(241.8,21.225);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#999999").s().p("AnwroIBdjCIODa6Ih4Cbg");
	this.shape_63.setTransform(241.45,22.075);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#999999").s().p("AnzrhIBdjCIOKaqIh3Ccg");
	this.shape_64.setTransform(241.1,22.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#999999").s().p("An3raIBejBIORaZIh2Ceg");
	this.shape_65.setTransform(240.725,23.75);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#999999").s().p("An7rSIBejCIOZaJIh1Cgg");
	this.shape_66.setTransform(240.375,24.575);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#999999").s().p("An/rLIBfjBIOgZ4Ih0Chg");
	this.shape_67.setTransform(240.025,25.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#999999").s().p("AoDrEIBfjBIOoZnIhzCjg");
	this.shape_68.setTransform(239.675,26.25);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#999999").s().p("AoHq9IBfjAIOwZWIhyClg");
	this.shape_69.setTransform(239.3,27.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#999999").s().p("AoLq2IBgi/IO3ZFIhyCmg");
	this.shape_70.setTransform(238.95,27.925);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#999999").s().p("AoPqvIBhi/IO+Y1IhwCog");
	this.shape_71.setTransform(238.6,28.775);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#999999").s().p("AoTqoIBhi+IPGYjIhwCqg");
	this.shape_72.setTransform(238.25,29.625);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#999999").s().p("AoXqgIBii/IPNYTIhuCsg");
	this.shape_73.setTransform(237.85,30.425);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#999999").s().p("AobqZIBii+IPVYCIhuCtg");
	this.shape_74.setTransform(237.5,31.275);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#999999").s().p("AofqSIBji9IPcXxIhtCug");
	this.shape_75.setTransform(237.15,32.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#999999").s().p("AojqLIBki9IPjXgIhsCxg");
	this.shape_76.setTransform(236.775,32.95);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#999999").s().p("AonqEIBki9IPrXRIhrCyg");
	this.shape_77.setTransform(236.425,33.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#999999").s().p("Aorp9IBki8IPzW/IhqC0g");
	this.shape_78.setTransform(236.075,34.625);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#999999").s().p("Aovp2IBli8IP6WvIhpC1g");
	this.shape_79.setTransform(235.725,35.45);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#999999").s().p("AoypuIBki8IQBWeIhnC3g");
	this.shape_80.setTransform(235.35,36.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#999999").s().p("Ao2pnIBli7IQJWNIhoC4g");
	this.shape_81.setTransform(235,37.125);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#999999").s().p("Ao7pgIBni7IQPV8IhlC7g");
	this.shape_82.setTransform(234.65,37.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43}]}).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).wait(41));

	// Layer_3
	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#999999").s().p("Ao7pgIBni7IQQV8IhmC7g");
	this.shape_83.setTransform(132.125,-100.15);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#999999").s().p("Ao+pWIBli9IQYVrIhlC8g");
	this.shape_84.setTransform(132.45,-101.075);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#999999").s().p("ApCpMIBki+IQhVZIhlC8g");
	this.shape_85.setTransform(132.75,-101.975);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#999999").s().p("ApFpCIBjjAIQoVJIhlC8g");
	this.shape_86.setTransform(133.075,-102.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#999999").s().p("ApIo4IBijBIQwU3IhkC8g");
	this.shape_87.setTransform(133.4,-103.825);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#999999").s().p("ApMovIBhjCIQ4UmIhkC9g");
	this.shape_88.setTransform(133.725,-104.75);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#999999").s().p("ApPokIBfjEIRAUUIhjC9g");
	this.shape_89.setTransform(134.025,-105.65);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#999999").s().p("ApTobIBfjFIRHUDIhiC+g");
	this.shape_90.setTransform(134.35,-106.575);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#999999").s().p("ApWoRIBdjHIRQTyIhiC/g");
	this.shape_91.setTransform(134.675,-107.475);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#999999").s().p("ApZoHIBbjJIRYTiIhhC+g");
	this.shape_92.setTransform(134.975,-108.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#999999").s().p("Apdn9IBbjKIRgTQIhhC/g");
	this.shape_93.setTransform(135.325,-109.325);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#999999").s().p("ApgnzIBZjMIRoS/IhgDAg");
	this.shape_94.setTransform(135.625,-110.25);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#999999").s().p("ApknqIBZjMIRvStIhgDAg");
	this.shape_95.setTransform(135.95,-111.15);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#999999").s().p("ApnngIBXjOIR4ScIhgDBg");
	this.shape_96.setTransform(136.275,-112.075);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#999999").s().p("ApqnWIBVjPISASKIhfDBg");
	this.shape_97.setTransform(136.575,-112.975);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#999999").s().p("ApunMIBVjRISIR6IhfDBg");
	this.shape_98.setTransform(136.9,-113.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#999999").s().p("ApxnCIBTjSISQRoIheDBg");
	this.shape_99.setTransform(137.225,-114.825);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#999999").s().p("Ap0m4IBRjUISZRXIheDCg");
	this.shape_100.setTransform(137.55,-115.75);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#999999").s().p("Ap4muIBRjVISgRFIhdDCg");
	this.shape_101.setTransform(137.85,-116.65);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#999999").s().p("Ap7mkIBPjXISoQ0IhcDDg");
	this.shape_102.setTransform(138.175,-117.575);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#999999").s().p("Ap4mtIBQjWIShRFIhdDCg");
	this.shape_103.setTransform(137.9,-116.725);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#999999").s().p("Ap1m3IBSjUISZRVIheDCg");
	this.shape_104.setTransform(137.575,-115.825);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#999999").s().p("ApynAIBUjTISRRmIhfDBg");
	this.shape_105.setTransform(137.3,-114.975);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#999999").s().p("ApvnKIBVjRISJR2IheDBg");
	this.shape_106.setTransform(137,-114.075);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#999999").s().p("AprnTIBVjQISCSGIheDBg");
	this.shape_107.setTransform(136.7,-113.225);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#999999").s().p("ApondIBWjOIR7SXIhfDAg");
	this.shape_108.setTransform(136.4,-112.35);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#999999").s().p("AplnmIBYjNIRzSnIhgDAg");
	this.shape_109.setTransform(136.125,-111.475);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#999999").s().p("AphnwIBYjLIRrS3IhfDAg");
	this.shape_110.setTransform(135.8,-110.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#999999").s().p("Apen5IBajKIRjTIIhhC/g");
	this.shape_111.setTransform(135.525,-109.725);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#999999").s().p("ApboCIBbjJIRcTYIhhC/g");
	this.shape_112.setTransform(135.25,-108.85);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#999999").s().p("ApYoMIBcjHIRVTpIhiC+g");
	this.shape_113.setTransform(134.925,-108);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#999999").s().p("ApVoVIBejGIRMT5IhiC+g");
	this.shape_114.setTransform(134.65,-107.125);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#999999").s().p("ApRoeIBejFIRFUJIhiC+g");
	this.shape_115.setTransform(134.325,-106.25);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#999999").s().p("ApOooIBgjDIQ9UaIhjC9g");
	this.shape_116.setTransform(134.05,-105.375);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#999999").s().p("ApLoxIBhjCIQ2UqIhjC9g");
	this.shape_117.setTransform(133.75,-104.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#999999").s().p("ApIo7IBijAIQuU7IhkC8g");
	this.shape_118.setTransform(133.45,-103.65);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#999999").s().p("ApFpEIBji/IQoVLIhlC8g");
	this.shape_119.setTransform(133.15,-102.75);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#999999").s().p("ApBpNIBki+IQfVbIhlC8g");
	this.shape_120.setTransform(132.875,-101.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#999999").s().p("Ao+pXIBmi8IQXVrIhlC8g");
	this.shape_121.setTransform(132.55,-101);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_83,p:{x:132.125}}]}).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_83,p:{x:132.275}}]},1).wait(41));

	// Layer_2
	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(1.1,1,1).p("EAjZgebQADAAAEACIgHAAIAAAbIgZAAMhFpAAAQACAHAAAIQAAAJgCAIQACAIAAAKQAAAJgCAIQACAIAAAKQAAAJgCAIQgCAHgEAGQgBADgCACQACACABACIABABQAAAAAAABQADAFACAGQgCAHgEAGQgBADgCACQACACABACQAEAGACAHQgCAHgEAGQgBADgCACQgGAIgJAAQgFAAgFgDIgCgCQgCgCgBgBQAGgIAJAAQAJAAAGAIQACACABACIABABQAAAAAAABQADAFACAGQgCAHgEAGQgBADgCACQACACABACQAEAGACAHQgCAHgEAGQgBADgCACQgGAIgJAAQgFAAgFgDIgCgCQgCgCgBgBQAGgIAJAAQAJAAAGAIQACACABACQAEAGACAHQACAIAAAKQAAAHgBAGQgCAKgFAHQgHANgLAAQgCAAgDgBQAAgBAAgBIABgbIAdAAMBFoAAAIAbAAIAAAdQgCAAgBAAQgLAAgHgMQgFgIgBgJQgCgHAAgHQAAgJADgIQABgHAEgGQABgDACgCQgBgBgBgCIgBgBQgEgGgBgHQABgHAEgGQABgDACgCQgCgCgBgCQgEgGgBgHQABgHAEgGQABgDACgCQAHgIAIAAQAJAAAHAIQgHAIgJAAQgFAAgEgCIgDgDQgCgBgBgCQgBgBgBgCIgBgBQgEgGgBgHQABgHAEgGQABgDACgCQgCgCgBgCQgEgGgBgHQABgHAEgGQABgDACgCQABgBACgCQABgBACgBQAEgDAFAAIABAAQABAAAAAAQABAAAAABQAHABAGAGQgHAIgJAAQgFAAgEgCIgDgDQgCgBgBgCQgBgBgBgCIgBgBQgEgGgBgHQgDgIAAgKQAAgJADgIQABgHAEgGQABgDACgCQgCgCgBgCQgEgGgBgHQgDgIAAgKQAAgIACgGQACgJAEgHQAFgJAHgCQADgCADAAIABAAIAAACIgHAAEAjggeZQAGADAFAIQAHAMAAASQAAAKgCAIQACAIAAAJQAAAKgCAIQACAIAAAJQAAAKgCAIQgCAHgDAGQgCACgBACQABACACADIAAAAQAAABAAABQADAFACAGQACAIAAAJQAAAKgCAIQgCAHgDAGQgCACgBACQABACACADIAAAAQAAABAAABQADAFACAGQgCAHgDAGQgCACgBACQgHAIgJAAQgIAAgHgIQAHgIAIAAQAJAAAHAIQABACACADQADAGACAHQgCAHgDAGQgCACgBACQgHAIgJAAQgFAAgEgCIgDgDQgCgBgBgCQAHgIAIAAQAJAAAHAIQABACACADQADAGACAHQgCAHgDAGQgIAMgLAAQgLAAgHgMQgEgGgBgHQgDgIAAgKQAAgJADgIQgDgIAAgKQAAgJADgIQgDgIAAgKQAAgJADgIQgDgIAAgKQAAgJADgIQgDgIAAgKQAAgJADgIQABgHAEgGQABgDACgCQgCgCgBgCQgEgGgBgHQgDgIAAgKQAAgJADgIQABgHAEgGQAHgNALAAQALAAAIANQADAGACAHQgCAHgDAGQgCACgBACQABACACADIAAAAQAAABAAABQADAFACAGQgCAHgDAGQgCACgBACQgHAIgJAAQgIAAgHgIQAHgIAIAAQAJAAAHAIQABACACADQADAGACAHQACAIAAAJQAAAKgCAIQgCAHgDAGQgCACgBACQABACACADQADAGACAHQACAIAAAJQAAAKgCAIQACAIAAAJQAAAKgCAIQACAIAAAJQAAAKgCAIQACAIAAAJQAAASgHANQgHALgJABIAAABIAAAYI+JAAIjwAAIi2AAIjQAAI+hAAQAAgLgBgLQAAgBAAgCQgHgCgGgKQgIgMAAgSQAAgKACgIQgCgIAAgJQAAgKACgIQgCgIAAgJQAAgKACgIQACgHAEgGQABgCACgCQgBgCgBgBIgBgCQgEgGgCgHQACgHAEgGQABgCACgCQgCgCgBgDQgEgGgCgHQgCgIAAgJQAAgKACgIQACgHAEgGQABgCACgCQgCgCgBgDQgEgGgCgHQACgHAEgGQABgCACgCQAGgIAJAAQAJAAAGAIQgGAIgJAAQgJAAgGgIQgCgCgBgDQgEgGgCgHQACgHAEgGQAHgMALAAQALAAAHAMQAEAGACAHQgCAHgEAGQgBADgCACQACACABACIABABQAAAAAAABQADAFACAGQgCAHgEAGQgBADgCACQgGAIgJAAQgJAAgGgIQAGgIAJAAQAJAAAGAIQACACABACQAEAGACAHQACAIAAAKQAAAJgCAIQACAIAAAKQAAAJgCAIQACAIAAAKQAAAJgCAIQACAIAAAKQAAAJgCAIQACAIAAAKQAAAJgCAIQgCAHgEAGQgHANgLAAQgLAAgHgNQgEgGgCgHQACgHAEgGQABgCACgCQgBgCgBgBIgBgCQgEgGgCgHQACgHAEgGQABgCACgCQgCgCgBgDQgEgGgCgHQgCgIAAgJQAAgKACgIQgCgIAAgJQAAgKACgIQACgHAEgGQABgCACgCQABgCACgBQABgCACAAQAEgDAFAAQAAAAABAAIABAAQAAAAABAAQAHABAFAHQgGAIgJAAQgFAAgFgDIgCgCQgCgCgBgBQgCgCAAgBIgBgCQgEgGgCgHQgCgIAAgJQAAgKACgIQgCgIAAgJQAAgKACgIQgCgIAAgJQAAgSAIgNQAFgIAGgDIABAAQAAgNAAgOMBGgAAAIAAAZEAjogdNQgHAIgJAAQgIAAgHgIQAHgIAIAAQAJAAAHAIgEAlBgeXIAAgyIAuAAIEHgFIAuAAMAAAA+LQgMAAgLABIgLAAIgMgBMAAAg+LEAlBgeXIhhgCEAjJgbkQAHgIAIAAQAJAAAHAIQgHAIgJAAQgIAAgHgIgABixCIF4C9IiIqPABixCIi2AAIAAnSABi4UIAAHSAhUxCIlYCJICIpbEAk9gYpIhigDEAlBAbOIlJAAIiEq0IHNCBMAAAgwyEAldAfCIgFAAQgMAAgLAAIAAj0IAAozEAlvAfBIAAABIgSAAIASgBIETgDEAlvgfJMAAAA+KEgjHgeZQADgBADAAQALAAAHAMQAEAHACAJIgeAAgEgiygbjQgGAIgJAAQgJAAgGgIQAGgIAJAAQAJAAAGAIgEgjQgadQAGgIAJAAQAJAAAGAIQgGAIgJAAQgJAAgGgIgEgqLAfPQgMAAgMAAMAAAg+LIAuAAIEIgFIAuAAIAAAlMAAAAw3IAAJEIFFAAICHrFInMCBEgjIgeZIh3gDEgjGgYqIh3gDEgp1AfOIAAABIgWAAIAWgBIETgEIgLAAMAAAg+LEgliAfKIAMAAQALAAAMAAIAAjrEgk/AfPIAAgFEgp1ge8MAAAA+K");
	this.shape_122.setTransform(62.625,-38.85);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.lf(["#666666","#999999"],[0,1],-23.1,0,23,0).s().p("AhhFaIiEqzIHMCBIAAIyg");
	this.shape_123.setTransform(276.45,100.725);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.lf(["#666666","#999999"],[0,1],-23,0,23.1,0).s().p("AjlFiIAApDIHLiAIiHLDg");
	this.shape_124.setTransform(-151.175,101.575);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.lf(["#666666","#999999"],[0,1],-13.7,0,13.8,0).s().p("AiI/CIEGgFMAAAA+KIALABIkRAEg");
	this.shape_125.setTransform(-191.4,-38.25);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.lf(["#666666","#999999"],[0,1],-2.3,0,2.3,0).s().p("AgLfGIgLgBMAAAg+KIAtAAIAAAlMAAAAw3IAAJDIAADrIgXABg");
	this.shape_126.setTransform(-176.5,-38.45);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.lf(["#666666","#999999"],[0,1],-2.2,0,2.4,0).s().p("AgWfGMAAAg+LIAtAAMAAAA+KIgWABIgXAAg");
	this.shape_127.setTransform(-207.45,-37.975);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.lf(["#666666","#999999"],[0,1],-13.8,0,13.7,0).s().p("AiI/CIEFgFMAAAA+KIAMABIkRAEg");
	this.shape_128.setTransform(317.85,-39.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.lf(["#666666","#999999"],[0,1],-2.3,0,2.3,0).s().p("AgKfGIgMgBMAAAg+KIAtAAMAAAA+KIgXABg");
	this.shape_129.setTransform(332.7,-39.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.lf(["#666666","#999999"],[0,1],-17.2,0,17.2,0).s().p("AgiktIDOAAIAAHRIlXCJg");
	this.shape_130.setTransform(36.9,-164.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.lf(["#666666","#999999"],[0,1],-9.1,0,9.2,0).s().p("AhbDpIAAnRIC3AAIAAHRg");
	this.shape_131.setTransform(63.275,-171.25);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.lf(["#666666","#999999"],[0,1],-18.8,0,18.7,0).s().p("Ai7CKIAAnRIDvAAICIKOg");
	this.shape_132.setTransform(91.225,-161.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.lf(["#666666","#999999"],[0,1],-225.6,0,225.7,0).s().p("AFIAbIjwAAIi2AAIjQAAI+hAAIgBgWIAAgDIAFABQALAAAHgLQAFgIACgKMBFoAAAQABAKAFAHQAHALALAAIADAAIAAABIAAAYg");
	this.shape_133.setTransform(63.625,-197.25);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.lf(["#666666","#999999"],[0,1],-2.3,0,2.3,0).s().p("AAAfGIgWAAIAAj1IAAozMAAAgwxIAAgyIAtAAMAAAA+KIgSABg");
	this.shape_134.setTransform(301.8,-39.225);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.lf(["#666666","#999999"],[0,1],-222.9,0,222.9,0).s().p("Egi0ACaIABgNQAAgKgCgIQACgHAAgKQAAgKgCgHQACgIAAgKQAAgKgCgHQACgJAAgJQAAgJgCgIQACgJAAgJQAAgJgCgHQACgJAAgJQAAgJgCgJQACgIAAgJQAAgJgCgJQACgHAAgKQAAgJgCgJQACgIAAgJQAAgIgBgHMBFoAAAQgBAHAAAHQAAAKADAIQgDAIAAAJQAAAKADAIQgDAIAAAJQAAAKADAIQgDAIAAAKQAAAJADAIQgDAIAAAJQAAAJADAIQgDAIAAAKQAAAJADAIQgDAIAAAKQAAAJADAIQgDAIAAAJQAAAKADAIQgDAIAAAJQAAAIABAGg");
	this.shape_135.setTransform(63.75,-215.35);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.lf(["#666666","#999999"],[0,1],-225.6,0,225.6,0).s().p("EgixAAbQgCgJgEgHQgIgLgLAAIgFAAIAAgaMBGfAAAIAAAZIAAAAQgEAAgDABQgGACgGAJQgDAHgDAJg");
	this.shape_136.setTransform(63.45,-233.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122}]}).wait(80));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-210.7,-239.7,546.7,401.7);


(lib.frame_floor = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.instance = new lib.redot();
	this.instance.setTransform(194.85,-65.65,1.4,1.4,0,0,0,10,10);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({scaleX:1,scaleY:1,x:181.7,y:-30},20).to({_off:true},1).wait(19).to({_off:false,scaleX:1.4099,scaleY:1.4099,x:-74.1,y:-62},0).to({scaleX:1,scaleY:1,x:-56.9,y:-28.4},20).wait(1));

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Ao7JhIQR18IBlC7IwPV8g");
	this.shape.setTransform(-108.7,37.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("Ao6JhIQQ18IBmC7IwRV8g");
	this.shape_1.setTransform(-108.55,37.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("Ao3JrIQJ2NIBmC7IwIWKg");
	this.shape_2.setTransform(-108.9,37.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AozJzIQB2dIBmC7Iv/Wag");
	this.shape_3.setTransform(-109.25,36.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AovJ9IP62uIBlC8Iv3Wng");
	this.shape_4.setTransform(-109.6,35.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AosKGIPz2+IBmC7IvuW2g");
	this.shape_5.setTransform(-109.95,34.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AonKPIPq3PIBlC8IvlXFg");
	this.shape_6.setTransform(-110.3,33.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AokKYIPj3fIBmC8IvdXTg");
	this.shape_7.setTransform(-110.625,33.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AogKhIPc3wIBlC8IvUXig");
	this.shape_8.setTransform(-111,32.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AocKqIPU4AIBlC9IvMXwg");
	this.shape_9.setTransform(-111.325,31.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AoYKzIPN4QIBkC8IvDX/g");
	this.shape_10.setTransform(-111.7,30.575);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AoVK8IPG4hIBlC9Iu7YOg");
	this.shape_11.setTransform(-112.025,29.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AoRLFIO+4xIBlC9IuzYcg");
	this.shape_12.setTransform(-112.375,28.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AoNLOIO25CIBlC9IuqYrg");
	this.shape_13.setTransform(-112.75,28.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("AoJLXIOu5SIBlC+IuhY5g");
	this.shape_14.setTransform(-113.075,27.275);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("AoGLgIOo5iIBlC+IuaZHg");
	this.shape_15.setTransform(-113.45,26.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("AoCLqIOg50IBlC+IuRZXg");
	this.shape_16.setTransform(-113.775,25.625);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("An+LzIOY6EIBlC+IuIZlg");
	this.shape_17.setTransform(-114.125,24.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("An6L8IOR6UIBkC+It/Zzg");
	this.shape_18.setTransform(-114.475,23.975);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("An2MFIOJ6kIBkC+It3aCg");
	this.shape_19.setTransform(-114.825,23.15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("AnzMOIOC61IBlC/ItvaQg");
	this.shape_20.setTransform(-115.175,22.325);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("AnvMXIN77FIBkC/Itmaeg");
	this.shape_21.setTransform(-115.525,21.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},39).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer_6
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("Ao7JhIQQ18IBnC7IwRV8g");
	this.shape_22.setTransform(-6.375,-100.15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("Ao+JYIQY1rIBlC8IwXVrg");
	this.shape_23.setTransform(-6.55,-101);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("ApBJRIQf1dIBkC+IweVbg");
	this.shape_24.setTransform(-6.825,-101.85);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("ApFJIIQo1MIBjC/IwlVKg");
	this.shape_25.setTransform(-7.15,-102.675);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("ApIJAIQv08IBiDBIwsU4g");
	this.shape_26.setTransform(-7.425,-103.55);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("ApLI3IQ20rIBhDCIwyUng");
	this.shape_27.setTransform(-7.75,-104.375);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("ApOIvIQ90bIBgDDIw5UWg");
	this.shape_28.setTransform(-8.025,-105.225);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("ApRInIRF0MIBfDFIxAUFg");
	this.shape_29.setTransform(-8.35,-106.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#999999").s().p("ApVIeIRNz7IBeDGIxHT1g");
	this.shape_30.setTransform(-8.625,-106.925);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#999999").s().p("ApYIWIRVzrIBcDIIxOTjg");
	this.shape_31.setTransform(-8.95,-107.775);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#999999").s().p("ApbIOIRczbIBbDJIxUTSg");
	this.shape_32.setTransform(-9.225,-108.625);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#999999").s().p("ApeIFIRjzKIBbDKIxbTBg");
	this.shape_33.setTransform(-9.55,-109.475);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#999999").s().p("ApiH9IRsy7IBZDMIxiSxg");
	this.shape_34.setTransform(-9.875,-110.325);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#999999").s().p("AplH0IRyyqIBZDNIxpSgg");
	this.shape_35.setTransform(-10.15,-111.15);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#999999").s().p("ApoHtIR6ybIBXDPIxvSOg");
	this.shape_36.setTransform(-10.475,-112.025);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#999999").s().p("ApsHkISCyLIBWDQIx2R+g");
	this.shape_37.setTransform(-10.75,-112.85);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#999999").s().p("ApvHbISKx5IBVDRIx9Rtg");
	this.shape_38.setTransform(-11.075,-113.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#999999").s().p("ApyHUISRxrIBUDTIyERcg");
	this.shape_39.setTransform(-11.35,-114.575);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#999999").s().p("Ap1HLISZxaIBSDUIyKRLg");
	this.shape_40.setTransform(-11.675,-115.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#999999").s().p("Ap5HDIShxKIBRDWIyRQ6g");
	this.shape_41.setTransform(-11.95,-116.25);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#999999").s().p("Ap8G7ISow7IBRDXIyYQqg");
	this.shape_42.setTransform(-12.275,-117.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22,p:{x:-6.375}}]}).to({state:[{t:this.shape_22,p:{x:-6.225}}]},39).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_22,p:{x:-6.225}}]},1).wait(1));

	// Layer_7
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#999999").s().p("Ao6pgIBmi7IQQV8IhnC7g");
	this.shape_43.setTransform(234.5,37.975);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#999999").s().p("Ao2poIBli7IQIWOIhnC5g");
	this.shape_44.setTransform(234.875,37.075);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#999999").s().p("AoypvIBli8IQAWgIhoC3g");
	this.shape_45.setTransform(235.275,36.225);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#999999").s().p("Aoup3IBli8IP4WxIhpC2g");
	this.shape_46.setTransform(235.65,35.325);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#999999").s().p("Aoqp/IBki8IPxXDIhqCzg");
	this.shape_47.setTransform(236.025,34.45);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#999999").s().p("AomqGIBki9IPpXVIhrCxg");
	this.shape_48.setTransform(236.425,33.55);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#999999").s().p("AohqOIBji9IPgXmIhsCxg");
	this.shape_49.setTransform(236.8,32.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#999999").s().p("AodqVIBii+IPZX4IhtCug");
	this.shape_50.setTransform(237.2,31.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#999999").s().p("AoZqcIBii+IPRYJIhuCsg");
	this.shape_51.setTransform(237.575,30.925);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#999999").s().p("AoVqkIBii+IPJYbIhvCqg");
	this.shape_52.setTransform(237.95,30.025);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#999999").s().p("AoRqrIBhi/IPCYsIhwCpg");
	this.shape_53.setTransform(238.35,29.175);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#999999").s().p("AoNqzIBhi/IO6Y+IhxCng");
	this.shape_54.setTransform(238.725,28.275);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#999999").s().p("AoJq7IBhi/IOxZQIhyClg");
	this.shape_55.setTransform(239.1,27.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#999999").s().p("AoFrCIBgjAIOqZiIhzCjg");
	this.shape_56.setTransform(239.5,26.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#999999").s().p("AoArKIBfjAIOiZzIh0Cig");
	this.shape_57.setTransform(239.875,25.65);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#999999").s().p("An8rRIBejBIObaFIh1Cgg");
	this.shape_58.setTransform(240.275,24.75);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#999999").s().p("An4rYIBejCIOTaXIh2Ceg");
	this.shape_59.setTransform(240.65,23.875);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#999999").s().p("An0rgIBejCIOLaoIh3Cdg");
	this.shape_60.setTransform(241.025,22.975);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#999999").s().p("AnwrnIBdjDIOEa6Ih4Cbg");
	this.shape_61.setTransform(241.425,22.125);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#999999").s().p("AnsrvIBdjDIN8bMIh6CZg");
	this.shape_62.setTransform(241.8,21.225);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#999999").s().p("AnwroIBdjCIODa6Ih4Cbg");
	this.shape_63.setTransform(241.45,22.075);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#999999").s().p("AnzrhIBdjCIOKaqIh3Ccg");
	this.shape_64.setTransform(241.1,22.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#999999").s().p("An3raIBejBIORaZIh2Ceg");
	this.shape_65.setTransform(240.725,23.75);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#999999").s().p("An7rSIBejCIOZaJIh1Cgg");
	this.shape_66.setTransform(240.375,24.575);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#999999").s().p("An/rLIBfjBIOgZ4Ih0Chg");
	this.shape_67.setTransform(240.025,25.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#999999").s().p("AoDrEIBfjBIOoZnIhzCjg");
	this.shape_68.setTransform(239.675,26.25);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#999999").s().p("AoHq9IBfjAIOwZWIhyClg");
	this.shape_69.setTransform(239.3,27.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#999999").s().p("AoLq2IBgi/IO3ZFIhyCmg");
	this.shape_70.setTransform(238.95,27.925);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#999999").s().p("AoPqvIBhi/IO+Y1IhwCog");
	this.shape_71.setTransform(238.6,28.775);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#999999").s().p("AoTqoIBhi+IPGYjIhwCqg");
	this.shape_72.setTransform(238.25,29.625);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#999999").s().p("AoXqgIBii/IPNYTIhuCsg");
	this.shape_73.setTransform(237.85,30.425);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#999999").s().p("AobqZIBii+IPVYCIhuCtg");
	this.shape_74.setTransform(237.5,31.275);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#999999").s().p("AofqSIBji9IPcXxIhtCug");
	this.shape_75.setTransform(237.15,32.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#999999").s().p("AojqLIBki9IPjXgIhsCxg");
	this.shape_76.setTransform(236.775,32.95);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#999999").s().p("AonqEIBki9IPrXRIhrCyg");
	this.shape_77.setTransform(236.425,33.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#999999").s().p("Aorp9IBki8IPzW/IhqC0g");
	this.shape_78.setTransform(236.075,34.625);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#999999").s().p("Aovp2IBli8IP6WvIhpC1g");
	this.shape_79.setTransform(235.725,35.45);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#999999").s().p("AoypuIBki8IQBWeIhnC3g");
	this.shape_80.setTransform(235.35,36.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#999999").s().p("Ao2pnIBli7IQJWNIhoC4g");
	this.shape_81.setTransform(235,37.125);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#999999").s().p("Ao7pgIBni7IQPV8IhlC7g");
	this.shape_82.setTransform(234.65,37.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43}]}).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).wait(41));

	// Layer_3
	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#999999").s().p("Ao7pgIBni7IQQV8IhmC7g");
	this.shape_83.setTransform(132.125,-100.15);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#999999").s().p("Ao+pWIBli9IQYVrIhlC8g");
	this.shape_84.setTransform(132.45,-101.075);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#999999").s().p("ApCpMIBki+IQhVZIhlC8g");
	this.shape_85.setTransform(132.75,-101.975);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#999999").s().p("ApFpCIBjjAIQoVJIhlC8g");
	this.shape_86.setTransform(133.075,-102.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#999999").s().p("ApIo4IBijBIQwU3IhkC8g");
	this.shape_87.setTransform(133.4,-103.825);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#999999").s().p("ApMovIBhjCIQ4UmIhkC9g");
	this.shape_88.setTransform(133.725,-104.75);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#999999").s().p("ApPokIBfjEIRAUUIhjC9g");
	this.shape_89.setTransform(134.025,-105.65);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#999999").s().p("ApTobIBfjFIRHUDIhiC+g");
	this.shape_90.setTransform(134.35,-106.575);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#999999").s().p("ApWoRIBdjHIRQTyIhiC/g");
	this.shape_91.setTransform(134.675,-107.475);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#999999").s().p("ApZoHIBbjJIRYTiIhhC+g");
	this.shape_92.setTransform(134.975,-108.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#999999").s().p("Apdn9IBbjKIRgTQIhhC/g");
	this.shape_93.setTransform(135.325,-109.325);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#999999").s().p("ApgnzIBZjMIRoS/IhgDAg");
	this.shape_94.setTransform(135.625,-110.25);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#999999").s().p("ApknqIBZjMIRvStIhgDAg");
	this.shape_95.setTransform(135.95,-111.15);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#999999").s().p("ApnngIBXjOIR4ScIhgDBg");
	this.shape_96.setTransform(136.275,-112.075);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#999999").s().p("ApqnWIBVjPISASKIhfDBg");
	this.shape_97.setTransform(136.575,-112.975);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#999999").s().p("ApunMIBVjRISIR6IhfDBg");
	this.shape_98.setTransform(136.9,-113.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#999999").s().p("ApxnCIBTjSISQRoIheDBg");
	this.shape_99.setTransform(137.225,-114.825);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#999999").s().p("Ap0m4IBRjUISZRXIheDCg");
	this.shape_100.setTransform(137.55,-115.75);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#999999").s().p("Ap4muIBRjVISgRFIhdDCg");
	this.shape_101.setTransform(137.85,-116.65);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#999999").s().p("Ap7mkIBPjXISoQ0IhcDDg");
	this.shape_102.setTransform(138.175,-117.575);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#999999").s().p("Ap4mtIBQjWIShRFIhdDCg");
	this.shape_103.setTransform(137.9,-116.725);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#999999").s().p("Ap1m3IBSjUISZRVIheDCg");
	this.shape_104.setTransform(137.575,-115.825);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#999999").s().p("ApynAIBUjTISRRmIhfDBg");
	this.shape_105.setTransform(137.3,-114.975);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#999999").s().p("ApvnKIBVjRISJR2IheDBg");
	this.shape_106.setTransform(137,-114.075);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#999999").s().p("AprnTIBVjQISCSGIheDBg");
	this.shape_107.setTransform(136.7,-113.225);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#999999").s().p("ApondIBWjOIR7SXIhfDAg");
	this.shape_108.setTransform(136.4,-112.35);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#999999").s().p("AplnmIBYjNIRzSnIhgDAg");
	this.shape_109.setTransform(136.125,-111.475);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#999999").s().p("AphnwIBYjLIRrS3IhfDAg");
	this.shape_110.setTransform(135.8,-110.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#999999").s().p("Apen5IBajKIRjTIIhhC/g");
	this.shape_111.setTransform(135.525,-109.725);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#999999").s().p("ApboCIBbjJIRcTYIhhC/g");
	this.shape_112.setTransform(135.25,-108.85);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#999999").s().p("ApYoMIBcjHIRVTpIhiC+g");
	this.shape_113.setTransform(134.925,-108);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#999999").s().p("ApVoVIBejGIRMT5IhiC+g");
	this.shape_114.setTransform(134.65,-107.125);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#999999").s().p("ApRoeIBejFIRFUJIhiC+g");
	this.shape_115.setTransform(134.325,-106.25);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#999999").s().p("ApOooIBgjDIQ9UaIhjC9g");
	this.shape_116.setTransform(134.05,-105.375);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#999999").s().p("ApLoxIBhjCIQ2UqIhjC9g");
	this.shape_117.setTransform(133.75,-104.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#999999").s().p("ApIo7IBijAIQuU7IhkC8g");
	this.shape_118.setTransform(133.45,-103.65);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#999999").s().p("ApFpEIBji/IQoVLIhlC8g");
	this.shape_119.setTransform(133.15,-102.75);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#999999").s().p("ApBpNIBki+IQfVbIhlC8g");
	this.shape_120.setTransform(132.875,-101.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#999999").s().p("Ao+pXIBmi8IQXVrIhlC8g");
	this.shape_121.setTransform(132.55,-101);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_83,p:{x:132.125}}]}).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_83,p:{x:132.275}}]},1).wait(41));

	// Layer_2
	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(1.1,1,1).p("EAjZgebQADAAAEACIgHAAIAAAbIgZAAQACgJAEgHQAFgJAHgCQADgCADAAIABAAIAAACIgHAAEAjggeZQAGADAFAIQAHAMAAASQAAAKgCAIQACAIAAAJQAAAKgCAIQACAIAAAJQAAAKgCAIQgCAHgDAGQgCACgBACQABACACADIAAAAQAAABAAABQADAFACAGQACAIAAAJQAAAKgCAIQgCAHgDAGQgCACgBACQgHAIgJAAQgFAAgEgCIgDgDQgCgBgBgCQgBgBgBgCIgBgBQgEgGgBgHQABgHAEgGQABgDACgCQgCgCgBgCQgEgGgBgHQABgHAEgGQABgDACgCQABgBACgCQABgBACgBQAEgDAFAAIABAAQABAAAAAAQABAAAAABQAHABAGAGQgHAIgJAAQgFAAgEgCIgDgDQgCgBgBgCQgBgBgBgCIgBgBQgEgGgBgHQgDgIAAgKQAAgJADgIQgDgIAAgKQAAgJADgIQgDgIAAgKQAAgIACgGMhFpAAAQACAHAAAIQAAAJgCAIQACAIAAAKQAAAJgCAIQACAIAAAKQAAAJgCAIQgCAHgEAGQgBADgCACQACACABACIABABQAAAAAAABQADAFACAGQgCAHgEAGQgBADgCACQACACABACQAEAGACAHQgCAHgEAGQgBADgCACQACACABACIABABQAAAAAAABQADAFACAGQgCAHgEAGQgBADgCACQgGAIgJAAQgJAAgGgIQAGgIAJAAQAJAAAGAIQACACABACQAEAGACAHQgCAHgEAGQgBADgCACQACACABACQAEAGACAHQACAIAAAKQAAAHgBAGQgCAKgFAHQgHANgLAAQgCAAgDgBQAAgBAAgBIABgbIAdAAMBFoAAAQgCgHAAgHQAAgJADgIQgDgIAAgKQAAgJADgIQABgHAEgGQABgDACgCQgCgCgBgCQgEgGgBgHQABgHAEgGQABgDACgCQAHgIAIAAQAJAAAHAIQABACACADIAAAAQAAABAAABQADAFACAGQgCAHgDAGQgCACgBACQABACACADQADAGACAHQgCAHgDAGQgCACgBACQABACACADQADAGACAHQgCAHgDAGQgIAMgLAAQgLAAgHgMQgEgGgBgHQABgHAEgGQABgDACgCQAHgIAIAAQAJAAAHAIQgHAIgJAAQgFAAgEgCIgDgDQgCgBgBgCQgBgBgBgCIgBgBQgEgGgBgHQgDgIAAgKQAAgJADgIQgDgIAAgKQAAgJADgIQgDgIAAgKQAAgJADgIQgDgIAAgKQAAgJADgIQABgHAEgGQABgDACgCQgCgCgBgCQgEgGgBgHQABgHAEgGQABgDACgCQgCgCgBgCQgEgGgBgHQABgHAEgGQAHgNALAAQALAAAIANQADAGACAHQgCAHgDAGQgCACgBACQABACACADIAAAAQAAABAAABQADAFACAGQgCAHgDAGQgCACgBACQgHAIgJAAQgIAAgHgIQAHgIAIAAQAJAAAHAIQABACACADQADAGACAHQACAIAAAJQAAAKgCAIQgCAHgDAGQgCACgBACQABACACADQADAGACAHQACAIAAAJQAAAKgCAIQACAIAAAJQAAAKgCAIQACAIAAAJQAAAKgCAIQACAIAAAJQAAASgHANQgHALgJABQgCAAgBAAQgLAAgHgMQgFgIgBgJIAbAAIAAAdIAAABEAjogdNQgHAIgJAAQgIAAgHgIQAHgIAIAAQAJAAAHAIgEgjHgeZQAAgNAAgOMBGgAAAIAAAZEAlBgeXIhhgCEAlBgeXIAAgyIAuAAIEHgFIAuAAMAAAA+LQgMAAgLABIgLAAIgMgBMAAAg+LEAjJgbkQAHgIAIAAQAJAAAHAIQgHAIgJAAQgIAAgHgIgEAjogaeQgHAIgJAAQgIAAgHgIQAHgIAIAAQAJAAAHAIgABixCIF4C9IiIqPIjwAAIi2AAABixCIi2AAIlYCJICIpbI+hAAQAAgLgBgLIh3gDABi4UIAAHSAhUxCIAAnSIjQAAEAk9gYpIhigDIAAAYI+JAAAf4bOIiEq0IHNCBMAAAgwyEAlBAe+InyAAIAAjwICpAAIFJAAgEAldAfCIASgBIAAABIgSAAIgFAAQgMAAgLAAIAAgEEAlBAbOIAAozEAlvAfBIETgDEAlvgfJMAAAA+KEgjHgeZQADgBADAAQALAAAHAMQAEAHACAJIgeAAgEgiygdMQACACABACIABABQAAAAAAABQADAFACAGQgCAHgEAGQgBADgCACQgGAIgJAAQgJAAgGgIQAGgIAJAAQAJAAAGAIQACACABACQAEAGACAHQACAIAAAKQAAAJgCAIQACAIAAAKQAAAJgCAIQACAIAAAKQAAAJgCAIQACAIAAAKQAAAJgCAIQACAIAAAKQAAAJgCAIQgCAHgEAGQgHANgLAAQgLAAgHgNQgEgGgCgHQACgHAEgGQABgCACgCQAGgIAJAAQAJAAAGAIQgGAIgJAAQgFAAgFgDIgCgCQgCgCgBgBQgBgCgBgBIgBgCQgEgGgCgHQACgHAEgGQABgCACgCQgCgCgBgDQgEgGgCgHQACgHAEgGQABgCACgCQgBgCgBgBIgBgCQgEgGgCgHQACgHAEgGQABgCACgCQgCgCgBgDQgEgGgCgHQgCgIAAgJQAAgKACgIQACgHAEgGQABgCACgCQgCgCgBgDQgEgGgCgHQgCgIAAgJQAAgKACgIQACgHAEgGQAHgMALAAQALAAAHAMQAEAGACAHQgCAHgEAGQgBADgCACQgGAIgJAAQgJAAgGgIQAGgIAJAAQAJAAAGAIgEgjQgcGQABgCACgBQABgCACAAQAEgDAFAAQAAAAABAAIABAAQAAAAABAAQAHABAFAHQgGAIgJAAQgFAAgFgDIgCgCQgCgCgBgBQgCgCAAgBIgBgCQgEgGgCgHQgCgIAAgJQAAgKACgIQACgHAEgGQABgCACgCQgCgCgBgDQgEgGgCgHQgCgIAAgJQAAgSAIgNQAFgIAGgDIABAAEgiygbjQgGAIgJAAQgJAAgGgIQAGgIAJAAQAJAAAGAIgEgiygbAQgGAIgJAAQgFAAgFgDIgCgCQgCgCgBgBQAGgIAJAAQAJAAAGAIgEgqLAfPQgMAAgMAAMAAAg+LIAuAAIEIgFIAuAAIAAAlMAAAAw3IAAJEIFFAAICsAAIAADwInxAAIAAgFIAAjrEgjIgeZIh3gDEgjZgb1QACgHAEgGQABgCACgCEgjZgbSQgCgIAAgJQAAgKACgIEgjZgavQgCgIAAgJQAAgKACgIEgjZgaMQgCgIAAgJQAAgKACgIEgjZgZpQgCgIAAgJQAAgKACgIEgjGgYtQgHgCgGgKQgIgMAAgSQAAgKACgIEgjGgYqQAAgBAAgCA/6bfICHrFInMCBEgqLAfPIAWgBIAAABgEgliAfKIAMAAQALAAAMAAEgliAfKIgLAAMAAAg+LEgp1AfOIETgEEgp1ge8MAAAA+K");
	this.shape_122.setTransform(62.625,-38.85);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.lf(["#666666","#999999"],[0,1],-24.9,0,24.8,0).s().p("Aj4B4IAAjvICqAAIFHAAIAADvg");
	this.shape_123.setTransform(274.6,147.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.lf(["#666666","#999999"],[0,1],-23.1,0,23,0).s().p("AhhFaIiEqzIHMCBIAAIyg");
	this.shape_124.setTransform(276.45,100.725);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.lf(["#666666","#999999"],[0,1],-23,0,23.1,0).s().p("AjlFiIAApDIHLiAIiHLDg");
	this.shape_125.setTransform(-151.175,101.575);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.lf(["#666666","#999999"],[0,1],-24.8,0,24.9,0).s().p("Aj4B4IAAgFIAAjqIFEAAICtAAIAADvg");
	this.shape_126.setTransform(-149.325,149);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.lf(["#666666","#999999"],[0,1],-13.7,0,13.8,0).s().p("AiI/CIEGgFMAAAA+KIALABIkRAEg");
	this.shape_127.setTransform(-191.4,-38.25);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.lf(["#666666","#999999"],[0,1],-2.3,0,2.3,0).s().p("AgLfGIgLgBMAAAg+KIAtAAIAAAlMAAAAw3IAAJDIAADrIgXABg");
	this.shape_128.setTransform(-176.5,-38.45);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.lf(["#666666","#999999"],[0,1],-2.2,0,2.4,0).s().p("AgWfGMAAAg+LIAtAAMAAAA+KIgWABIgXAAg");
	this.shape_129.setTransform(-207.45,-37.975);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.lf(["#666666","#999999"],[0,1],-13.8,0,13.7,0).s().p("AiI/CIEFgFMAAAA+KIAMABIkRAEg");
	this.shape_130.setTransform(317.85,-39.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.lf(["#666666","#999999"],[0,1],-2.3,0,2.3,0).s().p("AgKfGIgMgBMAAAg+KIAtAAMAAAA+KIgXABg");
	this.shape_131.setTransform(332.7,-39.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.lf(["#666666","#999999"],[0,1],-17.2,0,17.2,0).s().p("AgiktIDOAAIAAHRIlXCJg");
	this.shape_132.setTransform(36.9,-164.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.lf(["#666666","#999999"],[0,1],-9.1,0,9.2,0).s().p("AhbDpIAAnRIC3AAIAAHRg");
	this.shape_133.setTransform(63.275,-171.25);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.lf(["#666666","#999999"],[0,1],-18.8,0,18.7,0).s().p("Ai7CKIAAnRIDvAAICIKOg");
	this.shape_134.setTransform(91.225,-161.8);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.lf(["#666666","#999999"],[0,1],-225.6,0,225.7,0).s().p("AFIAbIjwAAIi2AAIjQAAI+hAAIgBgWIAAgDIAFABQALAAAHgLQAFgIACgKMBFoAAAQABAKAFAHQAHALALAAIADAAIAAABIAAAYg");
	this.shape_135.setTransform(63.625,-197.25);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.lf(["#666666","#999999"],[0,1],-2.3,0,2.3,0).s().p("AAAfGIgWAAIAAgFIAAjwIAAozMAAAgwxIAAgyIAtAAMAAAA+KIgSABg");
	this.shape_136.setTransform(301.8,-39.225);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.lf(["#666666","#999999"],[0,1],-222.9,0,222.9,0).s().p("Egi0ACaIABgNQAAgKgCgIQACgHAAgKQAAgKgCgHQACgIAAgKQAAgKgCgHQACgJAAgJQAAgJgCgIQACgJAAgJQAAgJgCgHQACgJAAgJQAAgJgCgJQACgIAAgJQAAgJgCgJQACgHAAgKQAAgJgCgJQACgIAAgJQAAgIgBgHMBFoAAAQgBAHAAAHQAAAKADAIQgDAIAAAJQAAAKADAIQgDAIAAAJQAAAKADAIQgDAIAAAKQAAAJADAIQgDAIAAAJQAAAJADAIQgDAIAAAKQAAAJADAIQgDAIAAAKQAAAJADAIQgDAIAAAJQAAAKADAIQgDAIAAAJQAAAIABAGg");
	this.shape_137.setTransform(63.75,-215.35);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.lf(["#666666","#999999"],[0,1],-225.6,0,225.6,0).s().p("EgixAAbQgCgJgEgHQgIgLgLAAIgFAAIAAgaMBGfAAAIAAAZIAAAAQgEAAgDABQgGACgGAJQgDAHgDAJg");
	this.shape_138.setTransform(63.45,-233.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122}]}).wait(80));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-210.7,-239.7,546.7,401.7);


(lib.bracedFrame = function(mode,startPosition,loop,reversed) {
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
	this.bf2 = new lib.frame_floor();
	this.bf2.name = "bf2";
	this.bf2.setTransform(285.6,251.5,0.6292,0.6292,0,0,0,62.6,161);

	this.timeline.addTween(cjs.Tween.get(this.bf2).to({regY:161.1,skewX:3.9995},19).to({regY:161,skewX:0},20).to({regY:161.1,skewX:-3.9995,x:285.55},20).to({regY:161,skewX:0,x:285.6},20).wait(1));

	// Layer_1
	this.bf = new lib.frame_floor2();
	this.bf.name = "bf";
	this.bf.setTransform(285.6,16.45,0.6292,0.6292,0,0,0,62.6,161);

	this.timeline.addTween(cjs.Tween.get(this.bf).to({regY:161.1,skewX:3.9995,x:301.95,y:18},19).to({regY:161,skewX:0,x:285.2,y:17.1},20).to({regY:161.1,skewX:-3.9995,x:269.25,y:18.25},20).to({regY:161,skewX:0,x:285.6,y:16.45},20).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(80,-235.9,411.3,488.5);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
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
	this.bf = new lib.shearwall();
	this.bf.name = "bf";
	this.bf.setTransform(55.9,184.95,0.6913,0.6916,0,0,0,-38.9,582.5);

	this.timeline.addTween(cjs.Tween.get(this.bf).to({skewX:2.0003},19).to({skewX:0},20).to({skewX:-1.9991,x:55.85},20).to({skewX:0,x:55.9},20).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.5,0,124.7,185);


// stage content:
(lib.lfrs = function(mode,startPosition,loop,reversed) {
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
		this.momentframe.bf.stop();
		this.momentframe.bf2.stop();
		this.momentframe.stop();
		this.bracedframe.bf.stop();
		this.bracedframe.bf2.stop();
		this.bracedframe.stop();
		
		this.shearwall.stop();
		this.shearwall.bf.stop();
		this.animCtrl_Btn.txt.text = "Play";
		this.animCtrl_Btn.addEventListener("click", animCtrl_Btnfunction.bind(this));
		
		
		
		
		//create function to start/stop animation and toggle button text
		function animCtrl_Btnfunction() {
			if (this.animCtrl_Btn.txt.text == "Play") {
				this.animCtrl_Btn.txt.text = "Pause";
				this.momentframe.bf.play();
				this.momentframe.bf2.play();
				this.momentframe.play();
				this.bracedframe.bf.play();
				this.bracedframe.bf2.play();
				this.bracedframe.play();
				this.shearwall.play();
				this.shearwall.bf.play();
		
			} else {
				this.animCtrl_Btn.txt.text = "Play";
				this.momentframe.bf.stop();
				this.momentframe.bf2.stop();
				this.momentframe.stop();
				this.bracedframe.bf.stop();
				this.bracedframe.bf2.stop();
				this.bracedframe.stop();
				this.shearwall.stop();
				this.shearwall.bf.stop();
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_4
	this.instance = new lib.CachedBmp_355();
	this.instance.setTransform(107.35,1.85,0.5,0.5);

	this.instance_1 = new lib.MicrosoftTeamsimage13();
	this.instance_1.setTransform(12,8,0.065,0.065);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_2
	this.animCtrl_Btn = new lib.StartBtn();
	this.animCtrl_Btn.name = "animCtrl_Btn";
	this.animCtrl_Btn.setTransform(456.05,373.6,1,1,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.animCtrl_Btn, 0, 1, 2, false, new lib.StartBtn(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#7D7D7E").ss(2,1,1).p("EgnGAAAMBONAAA");
	this.shape.setTransform(274.125,324.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#7D7D7E").ss(4,1,1).p("EgnGAAAMBONAAA");
	this.shape_1.setTransform(273.275,303.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.animCtrl_Btn}]}).wait(1));

	// Layer_1
	this.instance_2 = new lib.CachedBmp_361();
	this.instance_2.setTransform(72.65,366.25,0.5,0.5);

	this.shearwall = new lib.Symbol3();
	this.shearwall.name = "shearwall";
	this.shearwall.setTransform(431.95,303.55,0.9694,0.9694,0,0,0,55.9,185);

	this.instance_3 = new lib.CachedBmp_358();
	this.instance_3.setTransform(377.35,305.35,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_357();
	this.instance_4.setTransform(212.85,305.35,0.5,0.5);

	this.bracedframe = new lib.bracedFrame();
	this.bracedframe.name = "bracedframe";
	this.bracedframe.setTransform(275.1,256.55,0.3657,0.3657,0,0,0,285.8,126);

	this.instance_5 = new lib.CachedBmp_356();
	this.instance_5.setTransform(61.9,305.35,0.5,0.5);

	this.momentframe = new lib.momentframe_1();
	this.momentframe.name = "momentframe";
	this.momentframe.setTransform(116.7,304.6,0.3483,0.3483,0,0,0,132.9,264.3);

	this.instance_6 = new lib.CachedBmp_360();
	this.instance_6.setTransform(22.6,362.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.momentframe},{t:this.instance_5},{t:this.bracedframe},{t:this.instance_4},{t:this.instance_3},{t:this.shearwall},{t:this.instance_2}]}).wait(1));

	// Layer_5
	this.instance_7 = new lib.CachedBmp_362();
	this.instance_7.setTransform(230.25,332.65,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_359();
	this.instance_8.setTransform(64.15,123.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(287,201.9,238.60000000000002,183.9);
// library properties:
lib.properties = {
	id: '1F3AB136B6024ECBB9F348D673F4F391',
	width: 550,
	height: 400,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/lfrs_atlas_1.png?1639058397163", id:"lfrs_atlas_1"}
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
an.compositions['1F3AB136B6024ECBB9F348D673F4F391'] = {
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
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;