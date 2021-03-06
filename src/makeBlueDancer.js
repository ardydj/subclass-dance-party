var makeBlueDancer = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  makeDancer.call(this, top, left, timeBetweenSteps);
  // blinky Dancer
  this.$node = $('<img src="src/rickclear.png" class="dancer5"></img>');
  // var oldStep = this.step.bind(makeDancer.prototype);
  // oldStep();
  this.setPosition(top, left);
  // return blinkyDancer;
};
makeBlueDancer.prototype = Object.create(makeDancer.prototype);
makeBlueDancer.prototype.constructor = makeBlueDancer;
// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function

makeBlueDancer.prototype.oldStep = makeDancer.prototype.step;


makeBlueDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  console.log(this);
  this.$node.animate({
    // opacity: .45,
    borderWidth: 40,
    top: '90px',
    transform: "scaleY(1.5)"
    // "border-radius": "4px",
    // position: "relative"
  }, 500, function () {});

  this.$node.animate({
    opacity: 1.00,
    borderWidth: 10,
    top: '200px'
    // "border-radius": "12px",
    // position: "relative"
  }, 1400, function () {});

  // this.$node.toggle();
  // this.$node.fadeOut();
};