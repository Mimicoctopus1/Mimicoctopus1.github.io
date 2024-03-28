var unimono3d = {
  "vector": function(x, y, z) {
    return({
        "x": x,
        "y": y,
        "z": z,
        "type": "vector",
        "add": function(vector) {
          this.x += vector.x;
          this.y += vector.y;
          this.z += vector.z;
        },
        "sub": function(vector) {
          this.x -= vector.x;
          this.y -= vector.y;
          this.z -= vector.z;
        },
        "mult": function(vector) {
          this.x *= vector.x;
          this.y *= vector.y;
          this.z *= vector.z;
        },
        "div": function(vector) {
          this.x /= vector.x;
          this.y /= vector.y;
          this.z /= vector.z;
				},
				"magnitude": function() {/*To find the magnitude of the vector, the Pythagorean Theorem is to be used twice. There are lots of videos like this one     shorturl.at/jEQX0     */
					return();
				}
      });
  },
  "ray": function(xorv, yorv, z, ax, ay, az, speed) {
    if(xorv.type == "vector") { /*Convert xorv through az into vector1 and vector2.*/
      let vector1 = xorv;
      if(yorv.type == "vector") {
        let vector2 = yorv;
      } else {
        let vector2 = unimono.vector(yorv, z, ax);
      }
    } else {
      let vector1 = unimono.vector(xorv, yorv, z);
      if(ax.type == "vector") {
        let vector2 = ax;
      } else {
        let vector2 = unimono.vector(ax, ay, az);
      }
    }
    
    if(speed == "velocity") {/*If speed is the keyword "vector"...*/
      return({
        "position": vector1,
				"angle": "WIP",
				"velocity": vector2,
				"speed":
      });
    } else {
      return({
      	"position": vector1,
        "angle": unimono.vector(,
				"velocity": "WIP";,
        "speed": speed,
        "type": "ray"
      });
    }
  },
  "camera": function(x, y, z, ax, ay, az) {
    return({
      "position": unimono.vector(x, y, z),
      "angle": unimono.vector(ax, ay, az),
      "type": "camera"
    });
  },
  "triangle": function(x1, y1, z1, x2, y2, z2, x3, y3, z3) {
    return({
        "1": unimono3d.vector(x1, y1, z1),
        "2": unimono3d.vector(x2, y2, z2),
        "3": unimono3d.vector(x3, y3, z3),
        "type": "triangle"
      });
  },
  "origin": function(array) {
    let flatArray = [array].flat();/*Make array into an array if it isn't, then flatten it.*/
    if(flatArray[0].type == "vector") {
      return(flatArray[0]);
    } else if(flatArray[0].type == "triangle") {
      return(flatArray[0]["1"]);
    }
  },
  "findPlane": function(triangleToFindPlaneOn, returnAllValues) {
    let triangle = [triangleToFindOrthagonalOf].flat(); /*Just in case the triangle is in an arrray.*/
    if(array[0].type == "triangle") {/*If somebody dropped a vector in here, it's not needed. Triangles only!*/
      /*The following block may be confusing to you. It was to me; I got it from this video https://www.youtube.com/watch?v=rL9UXzZYYo4. It was confusing, and I don't know how it works, but this should function fine. The variables you see here are the ones used in the video.*/
      let p = array[0]["1"];
      let q = array[0]["2"];
      let r = array[0]["3"];

      let a = q.sub(p);
      let b = r.sub(p);
      /*The 3 by 3 matrix will look somewhat like so
       i  |  j  |  k 
      a.x | a.y | a.z
      b.x | b.y | b.z
      
      The i 2 by 2 looks like this:
      a.y | a.z
      b.y | b.z 
      The j 2 by 2 looks like this:
      a.x |   | a.z
      b.x |   | b.z
      The k 2 by 2 looks like this:
      a.x | a.y
      b.x | b.y   */


      let iMatrixEvaluated = (a.y * b.z) - (b.y * a.z);
      let jMatrixEvaluated = -((a.x * b.z) - (b.x * a.z));
      let kMatrixEvaluated = (a.x * b.y) - (b.x * a.y);
      let orthagonalVector = unimono3d.vector(iMatrixEvaluated, jMatrixEvaluated, kMatrixEvaluated); /*orthagonal means perpendicular to two lines (a and b).*/

      /*I am now overwriting a and b, but it doesn't affect anything because I don't need the old values anymore.*/
      a = orthagonalVector.x;
      b = orthagonalVector.y;
      c = orthagonalVector.z;

      /*Use your imagination to make the 0's subscript.*/
      let x0 = p.x;
      let y0 = p.y;
      let z0 = p.z;

      /*Now I have all I need to make the equation that the video ends with, but the video is missing something. The equation for a plane follows: ax+by+cz+d=0, but I don't have d. However, I can figure this out as explained in the link below:
      https://math.stackexchange.com/questions/2686606/equation-of-a-plane-passing-through-3-points#:~:text=.-,To%20get,.,-The%20final%20equation
      However, this answer uses k instead of d, but it's really the same thing. Anyways, the simple solution is that the equation above ↗ says that a, b, and c can be anything depending on what kind of plane you want, but x, y, and z are the coordinates of any point. If you put x, y, and z in, you can figure out if the left and right sides (of the equals (=) sign) are equal. If they are, the point is on the plane. If the left and right are not equal, then the point is not on the plane. So, let's say we use point p's coordinates for x, y, and z. Point p is on the plane, since that's basically the entire reason we created this function, to find a plane that goes on points p, q, and r. We could use q or r but I like p today, so we'll use p. However, remember that p might not make the equation true because we are missing d. So, what we will do is put in p and find a value for d that makes the left and right sides equal. We'll do it like this: if
      a(x-x0)+b(y-y0)+c(z-z0)+d=0
      and it should be true if we use p for x, y, and z:
      a(p.x-x0)+b(p.y-y0)+c(p.z-z0)+d=0.
      So, for just an example, let's say p is (1, 5, 3), just for simplicity.
      a(1-x0)+b(5-y0)+c(3-z0)+d=0
      And since I don't actually know the rest of the values, I'm just going to throw stuff, in; just assume that the values are correct. Let's say:
      a: 5
      x0: 8
      b: 5
      y0: 2
      c: 6
      z0: 1
      Then,
      a(1-x0)+b(5-y0)+c(3-z0)+d=0 becomes
      5(1-8)+5(5-2)+6(3-1)+d=0. Now, let's math it out.
      5(-7)+5(3)+6(2)+d=0
      -35+15+12+d=0
      -8+d=0 Okay. Now, we know -8 plus d must equal zero, since p is on the plane, but then only was -8 plus d is zero is if d = 8, since -8 + 8 equals 0.
      That means d = 8, no matter what any of the other values are. Now I have to make the computer do all that math for me. Now, notice that d was just the opposite of -8. I now just have to take -8 (or any other number that pops up) and reverse it. So:*/

      let d = -(   a(p.x-x0)+b(p.y-y0)+c(p.z-z0)   )

      /*If you'd like to see this in action, go to 
      desmos.com/3d/bc6d851621
      */
      
      if(returnAllValues) {
        return({
          "a": a,
          "x0": x0,
          "b": b,
          "y0": y0,
          "c": c,
          "z0": z0,
          "d": d,
          "triangle": triangle,
          "normalVector": orthagonalVector,
          "planeString": a + "(x-" + x0 + ")+" + b + "(y-"+ y0 + ")+"+ c +"(z-" + z0 + ")=0",
          "isOnPlane": function(xOrVector, yOrNothing, zOrNothing) {
            if(xOrVector.type == "vector") {
              let x = xOrVector.x;
              let y = xOrVector.y;
              let z = xOrVector.z;
            } else {
              let x = xOrVector;
              let y = yOrNothing;
              let z = zOrNothing;
            }

            return(this.a(x-this.x0)+this.b(y-this.y0)+this.c(z-this.z0)+this.d == 0);
          }
        });
      } else {
        return(function(xOrVector, yOrNothing, zOrNothing) {
          if(xOrVector.type == "vector") {
            let x = xOrVector.x;
            let y = xOrVector.y;
            let z = xOrVector.z;
          } else {
            let x = xOrVector;
            let y = yOrNothing;
            let z = zOrNothing;
          }
          
          return(a(x-x0)+b(y-y0)+c(z-z0) == 0);
        });
      }
    }
  },
  "findOrthagonal": function(threePointsToFindOrthagonalOn) {
    return(unimono3d.findPlane(threePointsToFindOrthagonalOn, true)["normalVector"]);
  },
  "convertFile": function(overrideFileType, file) {
    try {
      if(fileType == "obj") {
        console.log("");
      } else if(fileType == "txt") {
        console.log(file.text());
      } else {
        console.error("File type " + fileType + " unsupported.");
      }
    } catch(error) {
      throw("ERROR trying to read the file " + filename + ": " + error);
    }
  },
  "render": function(canvas, camera, dataToRender) {/*TODO: take into fact that maybe the camera is at an angle.*/
    let data = dataToRender.flat();
    let trianglesFound = 0;
    let graphs = [];
    while(trianglesFound < data.length) {
      graphs[graphs.length] = findPlane(data[trianglesFound]);
      trianglesFound += 1;
    }
  },
  "globalize": function() {
    var {vector, triangle, origin, globalize, convertFile, render} = unimono3d; /*Take the current object and split its functions into variables.*/
  }
}

export default unimono3d;
