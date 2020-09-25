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
    var ctx = cvs.getContext('2d');
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.strokeRect(0, 0, boardW, boardH);
    this.ctx = ctx;
    this.init();
    this.arrs = [];
    var dira = [['l', 'r'], ['l', 'r']];

    for (var i = 0; i < dira.length; i++) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = dira[i][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var o = _step.value;
          this.arrs.push(new _Chess.Ma(i, this.size, o));
          this.arrs.push(new _Chess.Pao(i, this.size, o));
          this.arrs.push(new _Chess.Che(i, this.size, o));
          this.arrs.push(new _Chess.Xiang(i, this.size, o));
          this.arrs.push(new _Chess.Shi(i, this.size, o));
          this.arrs.push(new _Chess.Jiang(i, this.size, o));
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
    }

    for (var _i = 0; _i <= 8; _i += 2) {
      this.arrs.push(new _Chess.Bing(0, this.size, _i));
      this.arrs.push(new _Chess.Bing(1, this.size, _i));
    }
  }

  _createClass(ChessBoard, [{
    key: "init",
    value: function init() {
      for (var i = 1; i < 8; i++) {
        this.column(0, 4, i);
        this.column(5, 9, i);
      }

      for (var _i2 = 1; _i2 < 9; _i2++) {
        this.rows(0, 8, _i2);
      }

      this.chaLine(3, 0);
      this.chaLine(3, 7);
      this.ctx.font = "".concat(this.size / 70 * 30, "px PingFangSC-Medium");
      this.ctx.fillText('楚河', this.size * 1.1, this.size * 4.65);
      this.ctx.fillText('汉界', this.size * 6.1, this.size * 4.65);
      var jiaoArr = [[1, 2], [7, 2], [1, 7], [7, 7]];

      for (var _i3 = 0; _i3 < jiaoArr.length; _i3++) {
        this.jiaoyin.apply(this, _toConsumableArray(jiaoArr[_i3]));
      }

      for (var _i4 = 0; _i4 <= 8; _i4 += 2) {
        this.jiaoyin(_i4, 3);
        this.jiaoyin(_i4, 6);
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