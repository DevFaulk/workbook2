var roomDimX = 12;
var roomDimY = 12;
var roomDim = roomDimX * roomDimY;

var tile = 1;
var tileBox = tile * 12;

var boxes = roomDim / tileBox;
var extraBox = 0.1 * boxes;

var boxesBrought = extraBox + boxes;

console.log("Total boxes needed are: " + Math.ceil(boxesBrought));
