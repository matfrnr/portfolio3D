import {
  Matrix3,
  Matrix4,
  Vector2,
  Vector3
} from "./chunk-HSL7RR4D.js";

// node_modules/maath/dist/objectSpread2-284232a6.esm.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}

// node_modules/maath/dist/isNativeReflectConstruct-5594d075.esm.js
function _setPrototypeOf(o, p2) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p3) {
    o2.__proto__ = p3;
    return o2;
  };
  return _setPrototypeOf(o, p2);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
    return true;
  } catch (e) {
    return false;
  }
}

// node_modules/maath/dist/matrix-baa530bf.esm.js
function determinant2() {
  for (var _len = arguments.length, terms = new Array(_len), _key = 0; _key < _len; _key++) {
    terms[_key] = arguments[_key];
  }
  var a = terms[0], b = terms[1], c = terms[2], d = terms[3];
  return a * d - b * c;
}
function determinant3() {
  for (var _len2 = arguments.length, terms = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    terms[_key2] = arguments[_key2];
  }
  var a = terms[0], b = terms[1], c = terms[2], d = terms[3], e = terms[4], f = terms[5], g = terms[6], h = terms[7], i = terms[8];
  return a * e * i + b * f * g + c * d * h - c * e * g - b * d * i - a * f * h;
}
function determinant4() {
  for (var _len3 = arguments.length, terms = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    terms[_key3] = arguments[_key3];
  }
  terms[0];
  terms[1];
  terms[2];
  terms[3];
  terms[4];
  terms[5];
  terms[6];
  terms[7];
  terms[8];
  terms[9];
  terms[10];
  terms[11];
  terms[12];
  terms[13];
  terms[14];
}
function getMinor(matrix2, r, c) {
  var _matrixTranspose = matrix2.clone().transpose();
  var x = [];
  var l = _matrixTranspose.elements.length;
  var n = Math.sqrt(l);
  for (var i = 0; i < l; i++) {
    var element = _matrixTranspose.elements[i];
    var row = Math.floor(i / n);
    var col = i % n;
    if (row !== r - 1 && col !== c - 1) {
      x.push(element);
    }
  }
  return determinant3.apply(void 0, x);
}
function matrixSum3(m1, m2) {
  var sum = [];
  var m1Array = m1.toArray();
  var m2Array = m2.toArray();
  for (var i = 0; i < m1Array.length; i++) {
    sum[i] = m1Array[i] + m2Array[i];
  }
  return new Matrix3().fromArray(sum);
}
var matrix = Object.freeze({
  __proto__: null,
  determinant2,
  determinant3,
  determinant4,
  getMinor,
  matrixSum3
});

// node_modules/maath/dist/triangle-b62b9067.esm.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct2(Parent2, args2, Class2) {
      var a = [null];
      a.push.apply(a, args2);
      var Constructor = Function.bind.apply(Parent2, a);
      var instance = new Constructor();
      if (Class2) _setPrototypeOf(instance, Class2.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function isPointInTriangle(point, triangle2) {
  var _triangle$ = _slicedToArray(triangle2[0], 2), ax = _triangle$[0], ay = _triangle$[1];
  var _triangle$2 = _slicedToArray(triangle2[1], 2), bx = _triangle$2[0], by = _triangle$2[1];
  var _triangle$3 = _slicedToArray(triangle2[2], 2), cx = _triangle$3[0], cy = _triangle$3[1];
  var _point = _slicedToArray(point, 2), px = _point[0], py = _point[1];
  var matrix2 = new Matrix4();
  matrix2.set(ax, ay, ax * ax + ay * ay, 1, bx, by, bx * bx + by * by, 1, cx, cy, cx * cx + cy * cy, 1, px, py, px * px + py * py, 1);
  return matrix2.determinant() <= 0;
}
function triangleDeterminant(triangle2) {
  var _triangle$4 = _slicedToArray(triangle2[0], 2), x1 = _triangle$4[0], y1 = _triangle$4[1];
  var _triangle$5 = _slicedToArray(triangle2[1], 2), x2 = _triangle$5[0], y2 = _triangle$5[1];
  var _triangle$6 = _slicedToArray(triangle2[2], 2), x3 = _triangle$6[0], y3 = _triangle$6[1];
  return determinant3(x1, y1, 1, x2, y2, 1, x3, y3, 1);
}
function arePointsCollinear(points) {
  return triangleDeterminant(points) === 0;
}
function isTriangleClockwise(triangle2) {
  return triangleDeterminant(triangle2) < 0;
}
function getCircumcircle(triangle2) {
  var _triangle$7 = _slicedToArray(triangle2[0], 2), ax = _triangle$7[0], ay = _triangle$7[1];
  var _triangle$8 = _slicedToArray(triangle2[1], 2), bx = _triangle$8[0], by = _triangle$8[1];
  var _triangle$9 = _slicedToArray(triangle2[2], 2), cx = _triangle$9[0], cy = _triangle$9[1];
  if (arePointsCollinear(triangle2)) return null;
  var m = new Matrix4();
  m.set(1, 1, 1, 1, ax * ax + ay * ay, ax, ay, 1, bx * bx + by * by, bx, by, 1, cx * cx + cy * cy, cx, cy, 1);
  var m11 = getMinor(m, 1, 1);
  var m13 = getMinor(m, 1, 3);
  var m12 = getMinor(m, 1, 2);
  var m14 = getMinor(m, 1, 4);
  var x0 = 0.5 * (m12 / m11);
  var y0 = 0.5 * (m13 / m11);
  var r2 = x0 * x0 + y0 * y0 + m14 / m11;
  return {
    x: Math.abs(x0) === 0 ? 0 : x0,
    y: Math.abs(y0) === 0 ? 0 : -y0,
    r: Math.sqrt(r2)
  };
}
function isPointInCircumcircle(point, triangle2) {
  var _ref = Array.isArray(triangle2[0]) ? triangle2[0] : triangle2[0].toArray(), _ref2 = _slicedToArray(_ref, 2), ax = _ref2[0], ay = _ref2[1];
  var _ref3 = Array.isArray(triangle2[1]) ? triangle2[1] : triangle2[1].toArray(), _ref4 = _slicedToArray(_ref3, 2), bx = _ref4[0], by = _ref4[1];
  var _ref5 = Array.isArray(triangle2[2]) ? triangle2[2] : triangle2[2].toArray(), _ref6 = _slicedToArray(_ref5, 2), cx = _ref6[0], cy = _ref6[1];
  var _point2 = _slicedToArray(point, 2), px = _point2[0], py = _point2[1];
  if (arePointsCollinear(triangle2)) throw new Error("Collinear points don't form a triangle");
  var x1mpx = ax - px;
  var aympy = ay - py;
  var bxmpx = bx - px;
  var bympy = by - py;
  var cxmpx = cx - px;
  var cympy = cy - py;
  var d = determinant3(x1mpx, aympy, x1mpx * x1mpx + aympy * aympy, bxmpx, bympy, bxmpx * bxmpx + bympy * bympy, cxmpx, cympy, cxmpx * cxmpx + cympy * cympy);
  if (d === 0) {
    return true;
  }
  return !isTriangleClockwise(triangle2) ? d > 0 : d < 0;
}
var mv1 = new Vector2();
var mv2 = new Vector2();
function doThreePointsMakeARight(points) {
  var _points$map = points.map(function(p4) {
    if (Array.isArray(p4)) {
      return _construct(Vector2, _toConsumableArray(p4));
    }
    return p4;
  }), _points$map2 = _slicedToArray(_points$map, 3), p1 = _points$map2[0], p2 = _points$map2[1], p3 = _points$map2[2];
  if (arePointsCollinear(points)) return false;
  var p2p1 = mv1.subVectors(p2, p1);
  var p3p1 = mv2.subVectors(p3, p1);
  var cross = p3p1.cross(p2p1);
  return cross > 0;
}
var triangle = Object.freeze({
  __proto__: null,
  isPointInTriangle,
  triangleDeterminant,
  arePointsCollinear,
  isTriangleClockwise,
  getCircumcircle,
  isPointInCircumcircle,
  doThreePointsMakeARight
});

// node_modules/maath/dist/misc-19a3ec46.esm.js
function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
function repeat(t, length) {
  return clamp(t - Math.floor(t / length) * length, 0, length);
}
function deltaAngle(current, target) {
  var delta = repeat(target - current, Math.PI * 2);
  if (delta > Math.PI) delta -= Math.PI * 2;
  return delta;
}
function degToRad(degrees) {
  return degrees / 180 * Math.PI;
}
function radToDeg(radians) {
  return radians * 180 / Math.PI;
}
function fibonacciOnSphere(buffer, _ref) {
  var _ref$radius = _ref.radius, radius = _ref$radius === void 0 ? 1 : _ref$radius;
  var samples = buffer.length / 3;
  var offset = 2 / samples;
  var increment = Math.PI * (3 - 2.2360679775);
  for (var i = 0; i < buffer.length; i += 3) {
    var y = i * offset - 1 + offset / 2;
    var distance = Math.sqrt(1 - Math.pow(y, 2));
    var phi = i % samples * increment;
    var x = Math.cos(phi) * distance;
    var z = Math.sin(phi) * distance;
    buffer[i] = x * radius;
    buffer[i + 1] = y * radius;
    buffer[i + 2] = z * radius;
  }
}
function vectorEquals(a, b) {
  var eps = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Number.EPSILON;
  return Math.abs(a.x - b.x) < eps && Math.abs(a.y - b.y) < eps && Math.abs(a.z - b.z) < eps;
}
function lexicographic(a, b) {
  if (a.x === b.x) {
    if (typeof a.z !== "undefined") {
      if (a.y === b.y) {
        return a.z - b.z;
      }
    }
    return a.y - b.y;
  }
  return a.x - b.x;
}
function convexHull(_points) {
  var points = _points.sort(lexicographic);
  var lUpper = [points[0], points[1]];
  for (var i = 2; i < points.length; i++) {
    lUpper.push(points[i]);
    while (lUpper.length > 2 && doThreePointsMakeARight(_toConsumableArray(lUpper.slice(-3)))) {
      lUpper.splice(lUpper.length - 2, 1);
    }
  }
  var lLower = [points[points.length - 1], points[points.length - 2]];
  for (var _i = points.length - 3; _i >= 0; _i--) {
    lLower.push(points[_i]);
    while (lLower.length > 2 && doThreePointsMakeARight(_toConsumableArray(lLower.slice(-3)))) {
      lLower.splice(lLower.length - 2, 1);
    }
  }
  lLower.splice(0, 1);
  lLower.splice(lLower.length - 1, 1);
  var c = [].concat(lUpper, lLower);
  return c;
}
function remap(x, _ref2, _ref3) {
  var _ref4 = _slicedToArray(_ref2, 2), low1 = _ref4[0], high1 = _ref4[1];
  var _ref5 = _slicedToArray(_ref3, 2), low2 = _ref5[0], high2 = _ref5[1];
  return low2 + (x - low1) * (high2 - low2) / (high1 - low1);
}
function fade(t) {
  return t * t * t * (t * (t * 6 - 15) + 10);
}
function lerp(v0, v1, t) {
  return v0 * (1 - t) + v1 * t;
}
function inverseLerp(v0, v1, t) {
  return (t - v0) / (v1 - v0);
}
function normalize(x, y, z) {
  var m = Math.sqrt(x * x + y * y + z * z);
  return [x / m, y / m, z / m];
}
function pointOnCubeToPointOnSphere(x, y, z) {
  var x2 = x * x;
  var y2 = y * y;
  var z2 = z * z;
  var nx = x * Math.sqrt(1 - (y2 + z2) / 2 + y2 * z2 / 3);
  var ny = y * Math.sqrt(1 - (z2 + x2) / 2 + z2 * x2 / 3);
  var nz = z * Math.sqrt(1 - (x2 + y2) / 2 + x2 * y2 / 3);
  return [nx, ny, nz];
}
function rotateVectorOnVector(a, b) {
  var v = new Vector3().crossVectors(a, b);
  var c = a.dot(b);
  var i = new Matrix3().identity();
  var vx = new Matrix3().set(0, -v.z, v.y, v.z, 0, -v.x, -v.y, v.x, 0);
  var vxsquared = new Matrix3().multiplyMatrices(vx, vx).multiplyScalar(1 / (1 + c));
  var _final = matrixSum3(matrixSum3(i, vx), vxsquared);
  return _final;
}
function pointToCoordinate(x, y, z) {
  var lat = Math.asin(y);
  var lon = Math.atan2(x, -z);
  return [lat, lon];
}
function coordinateToPoint(lat, lon) {
  var y = Math.sin(lat);
  var r = Math.cos(lat);
  var x = Math.sin(lon) * r;
  var z = -Math.cos(lon) * r;
  return [x, y, z];
}
function planeSegmentIntersection(plane, segment) {
  var _segment = _slicedToArray(segment, 2), a = _segment[0], b = _segment[1];
  var matrix2 = rotateVectorOnVector(plane.normal, new Vector3(0, 1, 0));
  var t = inverseLerp(a.clone().applyMatrix3(matrix2).y, b.clone().applyMatrix3(matrix2).y, 0);
  return new Vector3().lerpVectors(a, b, t);
}
function pointToPlaneDistance(p2, plane) {
  var d = plane.normal.dot(p2);
  return d;
}
function getIndexFrom3D(coords, sides) {
  var _coords = _slicedToArray(coords, 3), ix = _coords[0], iy = _coords[1], iz = _coords[2];
  var _sides = _slicedToArray(sides, 2), rx = _sides[0], ry = _sides[1];
  return iz * rx * ry + iy * rx + ix;
}
function get3DFromIndex(index2, size) {
  var _size = _slicedToArray(size, 2), rx = _size[0], ry = _size[1];
  var a = rx * ry;
  var z = index2 / a;
  var b = index2 - a * z;
  var y = b / rx;
  var x = b % rx;
  return [x, y, z];
}
function getIndexFrom2D(coords, size) {
  return coords[0] + size[0] * coords[1];
}
function get2DFromIndex(index2, columns) {
  var x = index2 % columns;
  var y = Math.floor(index2 / columns);
  return [x, y];
}
var misc = Object.freeze({
  __proto__: null,
  clamp,
  repeat,
  deltaAngle,
  degToRad,
  radToDeg,
  fibonacciOnSphere,
  vectorEquals,
  lexicographic,
  convexHull,
  remap,
  fade,
  lerp,
  inverseLerp,
  normalize,
  pointOnCubeToPointOnSphere,
  rotateVectorOnVector,
  pointToCoordinate,
  coordinateToPoint,
  planeSegmentIntersection,
  pointToPlaneDistance,
  getIndexFrom3D,
  get3DFromIndex,
  getIndexFrom2D,
  get2DFromIndex
});

// node_modules/maath/dist/classCallCheck-9098b006.esm.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

// node_modules/maath/dist/index-0332b2ed.esm.js
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
var Grad = function Grad2(x, y, z) {
  var _this = this;
  _classCallCheck(this, Grad2);
  _defineProperty(this, "dot2", function(x2, y2) {
    return _this.x * x2 + _this.y * y2;
  });
  _defineProperty(this, "dot3", function(x2, y2, z2) {
    return _this.x * x2 + _this.y * y2 + _this.z * z2;
  });
  this.x = x;
  this.y = y;
  this.z = z;
};
var grad3 = [new Grad(1, 1, 0), new Grad(-1, 1, 0), new Grad(1, -1, 0), new Grad(-1, -1, 0), new Grad(1, 0, 1), new Grad(-1, 0, 1), new Grad(1, 0, -1), new Grad(-1, 0, -1), new Grad(0, 1, 1), new Grad(0, -1, 1), new Grad(0, 1, -1), new Grad(0, -1, -1)];
var p = [151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180];
var perm = new Array(512);
var gradP = new Array(512);
var seed = function seed2(_seed) {
  if (_seed > 0 && _seed < 1) {
    _seed *= 65536;
  }
  _seed = Math.floor(_seed);
  if (_seed < 256) {
    _seed |= _seed << 8;
  }
  for (var i = 0; i < 256; i++) {
    var v;
    if (i & 1) {
      v = p[i] ^ _seed & 255;
    } else {
      v = p[i] ^ _seed >> 8 & 255;
    }
    perm[i] = perm[i + 256] = v;
    gradP[i] = gradP[i + 256] = grad3[v % 12];
  }
};
seed(0);
var F2 = 0.5 * (Math.sqrt(3) - 1);
var G2 = (3 - Math.sqrt(3)) / 6;
var F3 = 1 / 3;
var G3 = 1 / 6;
var simplex2 = function simplex22(xin, yin) {
  var n0, n1, n2;
  var s = (xin + yin) * F2;
  var i = Math.floor(xin + s);
  var j = Math.floor(yin + s);
  var t = (i + j) * G2;
  var x0 = xin - i + t;
  var y0 = yin - j + t;
  var i1, j1;
  if (x0 > y0) {
    i1 = 1;
    j1 = 0;
  } else {
    i1 = 0;
    j1 = 1;
  }
  var x1 = x0 - i1 + G2;
  var y1 = y0 - j1 + G2;
  var x2 = x0 - 1 + 2 * G2;
  var y2 = y0 - 1 + 2 * G2;
  i &= 255;
  j &= 255;
  var gi0 = gradP[i + perm[j]];
  var gi1 = gradP[i + i1 + perm[j + j1]];
  var gi2 = gradP[i + 1 + perm[j + 1]];
  var t0 = 0.5 - x0 * x0 - y0 * y0;
  if (t0 < 0) {
    n0 = 0;
  } else {
    t0 *= t0;
    n0 = t0 * t0 * gi0.dot2(x0, y0);
  }
  var t1 = 0.5 - x1 * x1 - y1 * y1;
  if (t1 < 0) {
    n1 = 0;
  } else {
    t1 *= t1;
    n1 = t1 * t1 * gi1.dot2(x1, y1);
  }
  var t2 = 0.5 - x2 * x2 - y2 * y2;
  if (t2 < 0) {
    n2 = 0;
  } else {
    t2 *= t2;
    n2 = t2 * t2 * gi2.dot2(x2, y2);
  }
  return 70 * (n0 + n1 + n2);
};
var simplex3 = function simplex32(xin, yin, zin) {
  var n0, n1, n2, n3;
  var s = (xin + yin + zin) * F3;
  var i = Math.floor(xin + s);
  var j = Math.floor(yin + s);
  var k = Math.floor(zin + s);
  var t = (i + j + k) * G3;
  var x0 = xin - i + t;
  var y0 = yin - j + t;
  var z0 = zin - k + t;
  var i1, j1, k1;
  var i2, j2, k2;
  if (x0 >= y0) {
    if (y0 >= z0) {
      i1 = 1;
      j1 = 0;
      k1 = 0;
      i2 = 1;
      j2 = 1;
      k2 = 0;
    } else if (x0 >= z0) {
      i1 = 1;
      j1 = 0;
      k1 = 0;
      i2 = 1;
      j2 = 0;
      k2 = 1;
    } else {
      i1 = 0;
      j1 = 0;
      k1 = 1;
      i2 = 1;
      j2 = 0;
      k2 = 1;
    }
  } else {
    if (y0 < z0) {
      i1 = 0;
      j1 = 0;
      k1 = 1;
      i2 = 0;
      j2 = 1;
      k2 = 1;
    } else if (x0 < z0) {
      i1 = 0;
      j1 = 1;
      k1 = 0;
      i2 = 0;
      j2 = 1;
      k2 = 1;
    } else {
      i1 = 0;
      j1 = 1;
      k1 = 0;
      i2 = 1;
      j2 = 1;
      k2 = 0;
    }
  }
  var x1 = x0 - i1 + G3;
  var y1 = y0 - j1 + G3;
  var z1 = z0 - k1 + G3;
  var x2 = x0 - i2 + 2 * G3;
  var y2 = y0 - j2 + 2 * G3;
  var z2 = z0 - k2 + 2 * G3;
  var x3 = x0 - 1 + 3 * G3;
  var y3 = y0 - 1 + 3 * G3;
  var z3 = z0 - 1 + 3 * G3;
  i &= 255;
  j &= 255;
  k &= 255;
  var gi0 = gradP[i + perm[j + perm[k]]];
  var gi1 = gradP[i + i1 + perm[j + j1 + perm[k + k1]]];
  var gi2 = gradP[i + i2 + perm[j + j2 + perm[k + k2]]];
  var gi3 = gradP[i + 1 + perm[j + 1 + perm[k + 1]]];
  var t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;
  if (t0 < 0) {
    n0 = 0;
  } else {
    t0 *= t0;
    n0 = t0 * t0 * gi0.dot3(x0, y0, z0);
  }
  var t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;
  if (t1 < 0) {
    n1 = 0;
  } else {
    t1 *= t1;
    n1 = t1 * t1 * gi1.dot3(x1, y1, z1);
  }
  var t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;
  if (t2 < 0) {
    n2 = 0;
  } else {
    t2 *= t2;
    n2 = t2 * t2 * gi2.dot3(x2, y2, z2);
  }
  var t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;
  if (t3 < 0) {
    n3 = 0;
  } else {
    t3 *= t3;
    n3 = t3 * t3 * gi3.dot3(x3, y3, z3);
  }
  return 32 * (n0 + n1 + n2 + n3);
};
var perlin2 = function perlin22(x, y) {
  var X = Math.floor(x), Y = Math.floor(y);
  x = x - X;
  y = y - Y;
  X = X & 255;
  Y = Y & 255;
  var n00 = gradP[X + perm[Y]].dot2(x, y);
  var n01 = gradP[X + perm[Y + 1]].dot2(x, y - 1);
  var n10 = gradP[X + 1 + perm[Y]].dot2(x - 1, y);
  var n11 = gradP[X + 1 + perm[Y + 1]].dot2(x - 1, y - 1);
  var u = fade(x);
  return lerp(lerp(n00, n10, u), lerp(n01, n11, u), fade(y));
};
var perlin3 = function perlin32(x, y, z) {
  var X = Math.floor(x), Y = Math.floor(y), Z = Math.floor(z);
  x = x - X;
  y = y - Y;
  z = z - Z;
  X = X & 255;
  Y = Y & 255;
  Z = Z & 255;
  var n000 = gradP[X + perm[Y + perm[Z]]].dot3(x, y, z);
  var n001 = gradP[X + perm[Y + perm[Z + 1]]].dot3(x, y, z - 1);
  var n010 = gradP[X + perm[Y + 1 + perm[Z]]].dot3(x, y - 1, z);
  var n011 = gradP[X + perm[Y + 1 + perm[Z + 1]]].dot3(x, y - 1, z - 1);
  var n100 = gradP[X + 1 + perm[Y + perm[Z]]].dot3(x - 1, y, z);
  var n101 = gradP[X + 1 + perm[Y + perm[Z + 1]]].dot3(x - 1, y, z - 1);
  var n110 = gradP[X + 1 + perm[Y + 1 + perm[Z]]].dot3(x - 1, y - 1, z);
  var n111 = gradP[X + 1 + perm[Y + 1 + perm[Z + 1]]].dot3(x - 1, y - 1, z - 1);
  var u = fade(x);
  var v = fade(y);
  var w = fade(z);
  return lerp(lerp(lerp(n000, n100, u), lerp(n001, n101, u), w), lerp(lerp(n010, n110, u), lerp(n011, n111, u), w), v);
};
var noise = Object.freeze({
  __proto__: null,
  seed,
  simplex2,
  simplex3,
  perlin2,
  perlin3
});
var TAU = Math.PI * 2;
var FlashGen = function() {
  function FlashGen2(props) {
    _classCallCheck(this, FlashGen2);
    _defineProperty(this, "nextBurstTime", 0);
    _defineProperty(this, "nextFlashEndTime", 0);
    _defineProperty(this, "flashesDone", 0);
    _defineProperty(this, "isFlashing", false);
    _defineProperty(this, "currentCount", 0);
    _defineProperty(this, "flashIntensity", 0);
    _defineProperty(this, "isDecaying", false);
    _defineProperty(this, "autoBurst", true);
    _defineProperty(this, "decaySpeed", 40);
    _defineProperty(this, "minInterval", 5e3);
    _defineProperty(this, "maxInterval", 1e4);
    _defineProperty(this, "minDuration", 50);
    _defineProperty(this, "maxDuration", 300);
    _defineProperty(this, "count", 5);
    Object.assign(this, props);
  }
  _createClass(FlashGen2, [{
    key: "scheduleNextBurst",
    value: function scheduleNextBurst(currentTime) {
      var burstInterval = Math.random() * (this.maxInterval - this.minInterval) + this.minInterval;
      this.nextBurstTime = currentTime + burstInterval / 1e3;
      this.flashesDone = 0;
      this.isFlashing = false;
    }
  }, {
    key: "burst",
    value: function burst() {
      this.nextBurstTime = 0;
      this.flashesDone = 0;
      this.isFlashing = false;
    }
  }, {
    key: "update",
    value: function update(currentTime, delta) {
      if (currentTime > this.nextBurstTime && this.currentCount === 0) {
        this.currentCount = Math.floor(Math.random() * this.count) + 1;
      }
      if (this.flashesDone < this.currentCount && currentTime > this.nextBurstTime) {
        if (!this.isFlashing) {
          this.isFlashing = true;
          this.flashIntensity = 1;
          var flashDuration = Math.random() * (this.maxDuration - this.minDuration) + this.minDuration;
          this.nextFlashEndTime = currentTime + flashDuration / 1e3;
        } else if (this.isFlashing && currentTime > this.nextFlashEndTime) {
          this.isFlashing = false;
          this.isDecaying = true;
          this.flashesDone++;
          if (this.flashesDone >= this.currentCount) {
            this.currentCount = 0;
            if (this.autoBurst) this.scheduleNextBurst(currentTime);
          }
        }
      }
      if (this.isDecaying) {
        this.flashIntensity -= delta * this.decaySpeed;
        this.flashIntensity = Math.max(0, Math.min(1, this.flashIntensity));
        if (this.flashIntensity <= 0) {
          this.isDecaying = false;
          this.flashIntensity = 0;
        }
      }
      return this.flashIntensity;
    }
  }]);
  return FlashGen2;
}();
function normalizeSeed(seed3) {
  if (typeof seed3 === "number") {
    seed3 = Math.abs(seed3);
  } else if (typeof seed3 === "string") {
    var string = seed3;
    seed3 = 0;
    for (var i = 0; i < string.length; i++) {
      seed3 = (seed3 + (i + 1) * (string.charCodeAt(i) % 96)) % 2147483647;
    }
  }
  if (seed3 === 0) {
    seed3 = 311;
  }
  return seed3;
}
function lcgRandom(seed3) {
  var state = normalizeSeed(seed3);
  return function() {
    var result = state * 48271 % 2147483647;
    state = result;
    return result / 2147483647;
  };
}
var Generator = function Generator2(_seed) {
  var _this = this;
  _classCallCheck(this, Generator2);
  _defineProperty(this, "seed", 0);
  _defineProperty(this, "init", function(seed3) {
    _this.seed = seed3;
    _this.value = lcgRandom(seed3);
  });
  _defineProperty(this, "value", lcgRandom(this.seed));
  this.init(_seed);
};
var defaultGen = new Generator(Math.random());
var defaultSphere = {
  radius: 1,
  center: [0, 0, 0]
};
function onSphere(buffer, sphere) {
  var rng = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : defaultGen;
  var _defaultSphere$sphere = _objectSpread2(_objectSpread2({}, defaultSphere), sphere), radius = _defaultSphere$sphere.radius, center = _defaultSphere$sphere.center;
  for (var i = 0; i < buffer.length; i += 3) {
    var u = rng.value();
    var v = rng.value();
    var theta = Math.acos(2 * v - 1);
    var phi = TAU * u;
    buffer[i] = Math.sin(theta) * Math.cos(phi) * radius + center[0];
    buffer[i + 1] = Math.sin(theta) * Math.sin(phi) * radius + center[1];
    buffer[i + 2] = Math.cos(theta) * radius + center[2];
  }
  return buffer;
}
function inSphere(buffer, sphere) {
  var rng = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : defaultGen;
  var _defaultSphere$sphere2 = _objectSpread2(_objectSpread2({}, defaultSphere), sphere), radius = _defaultSphere$sphere2.radius, center = _defaultSphere$sphere2.center;
  for (var i = 0; i < buffer.length; i += 3) {
    var u = Math.pow(rng.value(), 1 / 3);
    var x = rng.value() * 2 - 1;
    var y = rng.value() * 2 - 1;
    var z = rng.value() * 2 - 1;
    var mag = Math.sqrt(x * x + y * y + z * z);
    x = u * x / mag;
    y = u * y / mag;
    z = u * z / mag;
    buffer[i] = x * radius + center[0];
    buffer[i + 1] = y * radius + center[1];
    buffer[i + 2] = z * radius + center[2];
  }
  return buffer;
}
var defaultCircle = {
  radius: 1,
  center: [0, 0]
};
function inCircle(buffer, circle) {
  var rng = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : defaultGen;
  var _defaultCircle$circle = _objectSpread2(_objectSpread2({}, defaultCircle), circle), radius = _defaultCircle$circle.radius, center = _defaultCircle$circle.center;
  for (var i = 0; i < buffer.length; i += 2) {
    var r = radius * Math.sqrt(rng.value());
    var theta = rng.value() * TAU;
    buffer[i] = Math.sin(theta) * r + center[0];
    buffer[i + 1] = Math.cos(theta) * r + center[1];
  }
  return buffer;
}
function onCircle(buffer, circle) {
  var rng = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : defaultGen;
  var _defaultCircle$circle2 = _objectSpread2(_objectSpread2({}, defaultCircle), circle), radius = _defaultCircle$circle2.radius, center = _defaultCircle$circle2.center;
  for (var i = 0; i < buffer.length; i += 2) {
    var theta = rng.value() * TAU;
    buffer[i] = Math.sin(theta) * radius + center[0];
    buffer[i + 1] = Math.cos(theta) * radius + center[1];
  }
  return buffer;
}
var defaultRect = {
  sides: 1,
  center: [0, 0]
};
function inRect(buffer, rect) {
  var rng = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : defaultGen;
  var _defaultRect$rect = _objectSpread2(_objectSpread2({}, defaultRect), rect), sides = _defaultRect$rect.sides, center = _defaultRect$rect.center;
  var sideX = typeof sides === "number" ? sides : sides[0];
  var sideY = typeof sides === "number" ? sides : sides[1];
  for (var i = 0; i < buffer.length; i += 2) {
    buffer[i] = (rng.value() - 0.5) * sideX + center[0];
    buffer[i + 1] = (rng.value() - 0.5) * sideY + center[1];
  }
  return buffer;
}
function onRect(buffer, rect) {
  return buffer;
}
function inBox(buffer, box) {
  var rng = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : defaultGen;
  var _defaultBox$box = _objectSpread2(_objectSpread2({}, defaultBox), box), sides = _defaultBox$box.sides, center = _defaultBox$box.center;
  var sideX = typeof sides === "number" ? sides : sides[0];
  var sideY = typeof sides === "number" ? sides : sides[1];
  var sideZ = typeof sides === "number" ? sides : sides[2];
  for (var i = 0; i < buffer.length; i += 3) {
    buffer[i] = (rng.value() - 0.5) * sideX + center[0];
    buffer[i + 1] = (rng.value() - 0.5) * sideY + center[1];
    buffer[i + 2] = (rng.value() - 0.5) * sideZ + center[2];
  }
  return buffer;
}
var defaultBox = {
  sides: 1,
  center: [0, 0, 0]
};
function onBox(buffer, box) {
  var rng = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : defaultGen;
  var _defaultBox$box2 = _objectSpread2(_objectSpread2({}, defaultBox), box), sides = _defaultBox$box2.sides, center = _defaultBox$box2.center;
  var sideX = typeof sides === "number" ? sides : sides[0];
  var sideY = typeof sides === "number" ? sides : sides[1];
  var sideZ = typeof sides === "number" ? sides : sides[2];
  for (var i = 0; i < buffer.length; i += 3) {
    buffer[i] = (rng.value() - 0.5) * sideX + center[0];
    buffer[i + 1] = (rng.value() - 0.5) * sideY + center[1];
    buffer[i + 2] = (rng.value() - 0.5) * sideZ + center[2];
  }
  return buffer;
}
var index = Object.freeze({
  __proto__: null,
  FlashGen,
  Generator,
  onSphere,
  inSphere,
  inCircle,
  onCircle,
  inRect,
  onRect,
  inBox,
  onBox,
  noise
});

export {
  _objectSpread2,
  _setPrototypeOf,
  _isNativeReflectConstruct,
  _slicedToArray,
  _toConsumableArray,
  deltaAngle,
  lerp,
  misc,
  _classCallCheck,
  noise,
  FlashGen,
  Generator,
  onSphere,
  inSphere,
  inCircle,
  onCircle,
  inRect,
  onRect,
  inBox,
  onBox
};
//# sourceMappingURL=chunk-SHL4VE4B.js.map
