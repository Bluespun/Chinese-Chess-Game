"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChessBoard = void 0;

var _Chess = require("./Chess.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var self;

var ChessBoard =
/*#__PURE__*/
function () {
  function ChessBoard(parent) {
    var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#333';

    _classCallCheck(this, ChessBoard);

    var cvs = document.createElement('canvas');

    var _window$getComputedSt = window.getComputedStyle(parent, null),
        width = _window$getComputedSt.width,
        height = _window$getComputedSt.height;

    var _ref = [parseInt(width), parseInt(height)],
        boardW = _ref[0],
        boardH = _ref[1];
    this.size = boardW / 8;
    var _ref2 = [boardW, boardH];
    cvs.width = _ref2[0];
    cvs.height = _ref2[1];
    parent.appendChild(cvs);
    this.parent = parent;
    var ctx = cvs.getContext('2d');
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.strokeRect(0, 0, boardW, boardH);
    this.ctx = ctx;
    self = this;
    this.init();
  }

  _createClass(ChessBoard, [{
    key: "start",
    value: function start() {
      var dira = ['l', 'r'];
      self.chessObj = {};

      for (var i = 0; i < 2; i++) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = dira[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var o = _step.value;
            var ma = new _Chess.Ma(this.parent, i, this.size, o);
            var pao = new _Chess.Pao(this.parent, i, this.size, o);
            var che = new _Chess.Che(this.parent, i, this.size, o);
            var xiang = new _Chess.Xiang(this.parent, i, this.size, o);
            var shi = new _Chess.Shi(this.parent, i, this.size, o);
            self.chessObj[ma.chessName] = ma;
            self.chessObj[pao.chessName] = pao;
            self.chessObj[che.chessName] = che;
            self.chessObj[xiang.chessName] = xiang;
            self.chessObj[shi.chessName] = shi;
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        var jiang = new _Chess.Jiang(this.parent, i, this.size);
        self.chessObj[jiang.chessName] = jiang;

        for (var j = 0; j <= 8; j += 2) {
          var bing = new _Chess.Bing(this.parent, i, this.size, j);
          self.chessObj[bing.chessName] = bing;
        }
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      var childs = this.parent.children;

      for (var i = childs.length - 1; i > 0; i--) {
        this.parent.removeChild(childs[i]);
      }

      this.start();
    }
  }, {
    key: "coordinate",
    value: function coordinate(_ref3) {
      var x = _ref3.offsetX,
          y = _ref3.offsetY;
      self.zuobiao(x, y);
    }
  }, {
    key: "zuobiao",
    value: function zuobiao(x, y) {
      var activeClass = document.getElementsByClassName('active')[0];

      if (activeClass) {
        var dataName = activeClass.getAttribute('data-name');
        x = Math.round(x / this.size) * this.size;
        y = Math.round(y / this.size) * this.size;
        this.chessObj[dataName].move(x, y);
      }
    }
  }, {
    key: "init",
    value: function init() {
      for (var i = 1; i < 8; i++) {
        this.column(0, 4, i);
        this.column(5, 9, i);
      }

      for (var _i = 1; _i < 9; _i++) {
        this.rows(0, 8, _i);
      }

      this.chaLine(3, 0);
      this.chaLine(3, 7);
      this.ctx.font = "".concat(this.size / 70 * 30, "px PingFangSC-Medium");
      this.ctx.fillText('楚河', this.size * 1.1, this.size * 4.65);
      this.ctx.fillText('汉界', this.size * 6.1, this.size * 4.65);
      var jiaoArr = [[1, 2], [7, 2], [1, 7], [7, 7]];

      for (var _i2 = 0; _i2 < jiaoArr.length; _i2++) {
        this.jiaoyin.apply(this, _toConsumableArray(jiaoArr[_i2]));
      }

      for (var _i3 = 0; _i3 <= 8; _i3 += 2) {
        this.jiaoyin(_i3, 3);
        this.jiaoyin(_i3, 6);
      }
    }
  }, {
    key: "column",
    value: function column(start, end, i) {
      this.ctx.beginPath();
      this.ctx.moveTo(i * this.size, start * this.size);
      this.ctx.lineTo(i * this.size, end * this.size);
      this.ctx.stroke();
    }
  }, {
    key: "rows",
    value: function rows(start, end, i) {
      this.ctx.beginPath();
      this.ctx.moveTo(start * this.size, i * this.size);
      this.ctx.lineTo(end * this.size, i * this.size);
      this.ctx.stroke();
    }
  }, {
    key: "chaLine",
    value: function chaLine(x, y) {
      this.ctx.beginPath();
      this.ctx.moveTo(x * this.size, y * this.size);
      this.ctx.lineTo((x + 2) * this.size, (y + 2) * this.size);
      this.ctx.lineTo(x * this.size, (y + 2) * this.size);
      this.ctx.lineTo((x + 2) * this.size, y * this.size);
      this.ctx.stroke();
    }
  }, {
    key: "jiaoyin",
    value: function jiaoyin(x, y) {
      var s = .1,
          b = .3;
      this.ctx.beginPath();
      this.ctx.moveTo((x - s) * this.size, (y - b) * this.size);
      this.ctx.lineTo((x - s) * this.size, (y - s) * this.size);
      this.ctx.lineTo((x - b) * this.size, (y - s) * this.size);
      this.ctx.stroke();
      this.ctx.beginPath();
      this.ctx.moveTo((x + s) * this.size, (y - b) * this.size);
      this.ctx.lineTo((x + s) * this.size, (y - s) * this.size);
      this.ctx.lineTo((x + b) * this.size, (y - s) * this.size);
      this.ctx.stroke();
      this.ctx.beginPath();
      this.ctx.moveTo((x - s) * this.size, (y + b) * this.size);
      this.ctx.lineTo((x - s) * this.size, (y + s) * this.size);
      this.ctx.lineTo((x - b) * this.size, (y + s) * this.size);
      this.ctx.stroke();
      this.ctx.beginPath();
      this.ctx.moveTo((x + s) * this.size, (y + b) * this.size);
      this.ctx.lineTo((x + s) * this.size, (y + s) * this.size);
      this.ctx.lineTo((x + b) * this.size, (y + s) * this.size);
      this.ctx.stroke();
    }
  }]);

  return ChessBoard;
}();

exports.ChessBoard = ChessBoard;