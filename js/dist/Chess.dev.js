"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Xiang = exports.Jiang = exports.Shi = exports.Che = exports.Bing = exports.Pao = exports.Ma = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Chess =
/*#__PURE__*/
function () {
  function Chess() {
    _classCallCheck(this, Chess);

    var size = 50;
    this.width = size;
    this.height = size;
  }

  _createClass(Chess, [{
    key: "rander",
    value: function rander(parent, fang) {
      var colors = ['#55f', '#f00'];
      this.chessEle = document.createElement('div');
      this.chessEle.className = 'chess-ele';
      var p = 8;
      this.chessEle.style.width = this.width + 'px';
      this.chessEle.style.height = this.height + 'px';
      this.chessEle.style.left = this.x + p + 'px';
      this.chessEle.style.top = this.y + p + 'px';
      this.chessEle.textContent = this.name;
      this.chessEle.style.background = colors[fang];
      this.chessEle.setAttribute('data-name', this.chessName);
      this.chessEle.onclick = this.select;
      parent.appendChild(this.chessEle);
    }
  }, {
    key: "select",
    value: function select(e) {
      e.stopPropagation();
      var activeClass = document.getElementsByClassName('active')[0];
      if (activeClass) activeClass.classList.remove('active');
      e.target.classList.add('active');
    }
  }]);

  return Chess;
}();

var Ma =
/*#__PURE__*/
function (_Chess) {
  _inherits(Ma, _Chess);

  function Ma(parent, fang, size, diraction) {
    var _this;

    _classCallCheck(this, Ma);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Ma).call(this));
    _this.name = '马';
    _this.isDeath = false;
    _this.fang = fang;
    var zb = [{
      l: [1, 0],
      r: [7, 0]
    }, {
      l: [1, 9],
      r: [7, 9]
    }];
    _this.x = zb[fang][diraction][0] * size;
    _this.y = zb[fang][diraction][1] * size;
    _this.chessName = _this.name + fang + '-' + diraction;

    _get(_getPrototypeOf(Ma.prototype), "rander", _assertThisInitialized(_this)).call(_assertThisInitialized(_this), parent, fang);

    return _this;
  }

  _createClass(Ma, [{
    key: "move",
    value: function move(x, y) {
      if (Math.abs(x - this.x) > 2 || Math.abs(y - this.y) > 2 || x - this.x === y - this.y) console.log('规则不正确');else {
        var _ref = [x, y];
        this.x = _ref[0];
        this.y = _ref[1];
      }
    }
  }]);

  return Ma;
}(Chess);

exports.Ma = Ma;

var Pao =
/*#__PURE__*/
function (_Chess2) {
  _inherits(Pao, _Chess2);

  function Pao(parent, fang, size, diraction) {
    var _this2;

    _classCallCheck(this, Pao);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Pao).call(this));
    _this2.name = '炮';
    _this2.isDeath = false;
    _this2.fang = fang;
    var zb = [{
      l: [1, 2],
      r: [7, 2]
    }, {
      l: [1, 7],
      r: [7, 7]
    }];
    _this2.x = zb[fang][diraction][0] * size;
    _this2.y = zb[fang][diraction][1] * size;
    _this2.chessName = _this2.name + fang + '-' + diraction;

    _get(_getPrototypeOf(Pao.prototype), "rander", _assertThisInitialized(_this2)).call(_assertThisInitialized(_this2), parent, fang);

    return _this2;
  }

  _createClass(Pao, [{
    key: "move",
    value: function move(x, y) {
      if (this.x !== x && this.y !== y) console.log('规则不正确');else {
        var _ref2 = [x, y];
        this.x = _ref2[0];
        this.y = _ref2[1];
      }
    }
  }]);

  return Pao;
}(Chess);

exports.Pao = Pao;

var Che =
/*#__PURE__*/
function (_Chess3) {
  _inherits(Che, _Chess3);

  function Che(parent, fang, size, diraction) {
    var _this3;

    _classCallCheck(this, Che);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(Che).call(this));
    _this3.name = '车';
    _this3.isDeath = false;
    _this3.fang = fang;
    var zb = [{
      l: [0, 0],
      r: [8, 0]
    }, {
      l: [0, 9],
      r: [8, 9]
    }];
    _this3.x = zb[fang][diraction][0] * size;
    _this3.y = zb[fang][diraction][1] * size;
    _this3.chessName = _this3.name + fang + '-' + diraction;

    _get(_getPrototypeOf(Che.prototype), "rander", _assertThisInitialized(_this3)).call(_assertThisInitialized(_this3), parent, fang);

    return _this3;
  }

  _createClass(Che, [{
    key: "move",
    value: function move(x, y) {
      if (this.x !== x && this.y !== y) console.log('规则不正确');else {
        var _ref3 = [x, y];
        this.x = _ref3[0];
        this.y = _ref3[1];
      }
    }
  }]);

  return Che;
}(Chess);

exports.Che = Che;

var Xiang =
/*#__PURE__*/
function (_Chess4) {
  _inherits(Xiang, _Chess4);

  function Xiang(parent, fang, size, diraction) {
    var _this4;

    _classCallCheck(this, Xiang);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(Xiang).call(this));
    var arr = ['象', '相'];
    _this4.name = arr[fang];
    _this4.isDeath = false;
    _this4.fang = fang;
    var zb = [{
      l: [2, 0],
      r: [6, 0]
    }, {
      l: [2, 9],
      r: [6, 9]
    }];
    _this4.x = zb[fang][diraction][0] * size;
    _this4.y = zb[fang][diraction][1] * size;
    _this4.chessName = _this4.name + fang + '-' + diraction;

    _get(_getPrototypeOf(Xiang.prototype), "rander", _assertThisInitialized(_this4)).call(_assertThisInitialized(_this4), parent, fang);

    return _this4;
  }

  _createClass(Xiang, [{
    key: "move",
    value: function move(x, y) {
      if (Math.abs(x - this.x) !== 2 || Math.abs(y - this.y) !== 2) console.log('规则不正确');else {
        var _ref4 = [x, y];
        this.x = _ref4[0];
        this.y = _ref4[1];
      }
    }
  }]);

  return Xiang;
}(Chess);

exports.Xiang = Xiang;

var Shi =
/*#__PURE__*/
function (_Chess5) {
  _inherits(Shi, _Chess5);

  function Shi(parent, fang, size, diraction) {
    var _this5;

    _classCallCheck(this, Shi);

    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(Shi).call(this));
    var arr = ['士', '仕'];
    _this5.name = arr[fang];
    _this5.isDeath = false;
    _this5.fang = fang;
    var zb = [{
      l: [3, 0],
      r: [5, 0]
    }, {
      l: [3, 9],
      r: [5, 9]
    }];
    _this5.x = zb[fang][diraction][0] * size;
    _this5.y = zb[fang][diraction][1] * size;
    _this5.chessName = _this5.name + fang + '-' + diraction;

    _get(_getPrototypeOf(Shi.prototype), "rander", _assertThisInitialized(_this5)).call(_assertThisInitialized(_this5), parent, fang);

    return _this5;
  }

  _createClass(Shi, [{
    key: "move",
    value: function move(x, y) {
      var abs = Math.abs;
      var _ref5 = [abs(x - this.x), abs(y - this.y)],
          disX = _ref5[0],
          disY = _ref5[1];
      if (disX !== 1 || disY !== 1 || x < 3 || x > 5 || y > 2 && y < 7) console.log('规则不正确');else {
        var _ref6 = [x, y];
        this.x = _ref6[0];
        this.y = _ref6[1];
      }
    }
  }]);

  return Shi;
}(Chess);

exports.Shi = Shi;

var Jiang =
/*#__PURE__*/
function (_Chess6) {
  _inherits(Jiang, _Chess6);

  function Jiang(parent, fang, size) {
    var _this6;

    _classCallCheck(this, Jiang);

    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(Jiang).call(this));
    _this6.isDeath = false;
    var arr = ['将', '帅'];
    _this6.fang = fang;
    _this6.name = arr[fang];
    var zb = [[4, 0], [4, 9]];
    _this6.x = zb[fang][0] * size;
    _this6.y = zb[fang][1] * size;

    _get(_getPrototypeOf(Jiang.prototype), "rander", _assertThisInitialized(_this6)).call(_assertThisInitialized(_this6), parent, fang);

    return _this6;
  }

  _createClass(Jiang, [{
    key: "move",
    value: function move(x, y) {
      if (this.x !== x && this.y !== y || Math.abs(this.x - x) !== 1 || Math.abs(this.y - y) !== 1) console.log('规则不正确');else {
        var _ref7 = [x, y];
        this.x = _ref7[0];
        this.y = _ref7[1];
      }
    }
  }]);

  return Jiang;
}(Chess);

exports.Jiang = Jiang;

var Bing =
/*#__PURE__*/
function (_Chess7) {
  _inherits(Bing, _Chess7);

  function Bing(parent, fang, size, x) {
    var _this7;

    _classCallCheck(this, Bing);

    _this7 = _possibleConstructorReturn(this, _getPrototypeOf(Bing).call(this));
    _this7.isDeath = false;
    _this7.fang = fang;
    var arr = ['卒', '兵'];
    _this7.name = arr[fang];
    var zb = [3, 6];
    _this7.x = x * size;
    _this7.y = zb[fang] * size;
    _this7.chessName = _this7.name + fang + '-' + (x / 2 + 1);

    _get(_getPrototypeOf(Bing.prototype), "rander", _assertThisInitialized(_this7)).call(_assertThisInitialized(_this7), parent, fang);

    return _this7;
  }

  _createClass(Bing, [{
    key: "move",
    value: function move(x, y) {
      if (Math.abs(this.x - x) !== 1) console.log('姿势不正确!!!');else this.x = x;
    }
  }]);

  return Bing;
}(Chess);

exports.Bing = Bing;