var canvas = document.getElementById('logo');

// create pixel view container in point
var point = new obelisk.Point(canvas.width / 2, 40);
var pixelView = new obelisk.PixelView(canvas, point);

var cube = false;

for (var i = 0; i <= 2; i++) {
	for (var j = 0; j <= 2; j++) {
		for (var k = 0; k <= 2; k++) {
			if (i != 1 && j != 1 && k <= 2){
				cube = true;
			}
			if (i == 0 && j == 0) {
				cube = false;
			}
			//cube in shape of M
			/*if (k == 2 && (i != 1 || j != 1) ){
				cube = true;
			}*/
			//3 bars in shape of M
			if (i == 0 && j == 0 || k ==2) {
				cube = false;
			}
			if (cube) {
				var p3d = new obelisk.Point3D(20 * i, 20 * j, (22 + 1) * k);
				var cubeDms = new obelisk.CubeDimension(20, 20, 22);
				var cubeColor =new obelisk.CubeColor().getByHorizontalColor(0xb1f8d0);
				// new obelisk.CubeColor(0xb1f8d0, 0xb1f8d0, 0xb1f8d0, 0xb1f8d0, 0xb1f8d0);			
				var cube = new obelisk.Cube(cubeDms, cubeColor, false);
				pixelView.renderObject(cube, p3d);
				cube = false;
			}
		}
	}
}