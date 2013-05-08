  // var board = new Board(n);

var Board = function(n) {
	this.array = this.maker(n);
  this.score = this.scorer(this.array);
  this.matesRemaining;
  hash.push(this);
};

Board.prototype.maker = function(n){
  return _.map(_.range(n), function(n) {
    return Math.floor(Math.random() * n);
  })
};

Board.prototype.scorer = function(board) {
  var majDiag = {};
  var minDiag = {};
  var colHash = {};
  var collisionsCount = 0;
  _.each(this.array, function(value, index) {
    colHash[value] += 1;
    minDiag[value + index] += 1;
    majDiag[value - index] += 1; 
  });

  _.each(majDiag, function(value) {
    collisionsCount = value > 1 ? collisionsCount + 1 : collisionsCount;
  });

  _.each(minDiag, function(value) {
    collisionsCount = value > 1 ? collisionsCount + 1 : collisionsCount;
  });

  _.each(colHash, function(value) {
    collisionsCount = value > 1 ? collisionsCount + 1 : collisionsCount;
  });

  this.matesRemaining = (collisionsCount > n/2) ? 1 : Math.floor(Math.random() * collisionsCount);
};

// Board.prototype.mate = function(board) {
  
 
//   return child board;
//   this.matesRemaining--;
// };

// var BoardChild = function(array) {
//   Board.apply(this);
//   this.array = array;
//   this.score = this.scorer(this.array);
// };


var hash = [];

// hash.prototype.kill = function(board) {
//   if (!board.matesRemaining) {
//     remove from hash;
//   }
// };
