"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Xiang = exports.Jiang = exports.Shi = exports.Che = exports.Bing = exports.Pao = exports.Ma = void 0;
var Chess = /** @class */ (function () {
    function Chess() {
        this.width = 50;
        this.height = 50;
        this.radius = '50%';
    }
    return Chess;
}());
var Ma = /** @class */ (function (_super) {
    __extends(Ma, _super);
    function Ma(fang, size, diraction) {
        var _this = _super.call(this) || this;
        _this.name = '马';
        _this.isDeath = false;
        _this.fang = fang;
        var zb = [{ l: [1, 0], r: [7, 0] }, { l: [1, 9], r: [7, 9] }];
        _this.x = zb[fang][diraction][0] * size;
        _this.y = zb[fang][diraction][1] * size;
        return _this;
    }
    Ma.prototype.move = function (x, y) {
        var _a;
        if (Math.abs(x - this.x) > 2 || Math.abs(y - this.y) > 2 || x - this.x === y - this.y)
            console.log('规则不正确');
        else
            _a = [x, y], this.x = _a[0], this.y = _a[1];
    };
    return Ma;
}(Chess));
exports.Ma = Ma;
var Pao = /** @class */ (function (_super) {
    __extends(Pao, _super);
    function Pao(fang, size, diraction) {
        var _this = _super.call(this) || this;
        _this.name = '炮';
        _this.isDeath = false;
        _this.fang = fang;
        var zb = [{ l: [1, 2], r: [7, 2] }, { l: [1, 7], r: [7, 7] }];
        _this.x = zb[fang][diraction][0] * size;
        _this.y = zb[fang][diraction][1] * size;
        return _this;
    }
    Pao.prototype.move = function (x, y) {
        var _a;
        if (this.x !== x && this.y !== y)
            console.log('规则不正确');
        else
            _a = [x, y], this.x = _a[0], this.y = _a[1];
    };
    return Pao;
}(Chess));
exports.Pao = Pao;
var Che = /** @class */ (function (_super) {
    __extends(Che, _super);
    function Che(fang, size, diraction) {
        var _this = _super.call(this) || this;
        _this.name = '车';
        _this.isDeath = false;
        _this.fang = fang;
        var zb = [{ l: [0, 0], r: [8, 0] }, { l: [0, 9], r: [8, 9] }];
        _this.x = zb[fang][diraction][0] * size;
        _this.y = zb[fang][diraction][1] * size;
        return _this;
    }
    Che.prototype.move = function (x, y) {
        var _a;
        if (this.x !== x && this.y !== y)
            console.log('规则不正确');
        else
            _a = [x, y], this.x = _a[0], this.y = _a[1];
    };
    return Che;
}(Chess));
exports.Che = Che;
var Xiang = /** @class */ (function (_super) {
    __extends(Xiang, _super);
    function Xiang(fang, size, diraction) {
        var _this = _super.call(this) || this;
        _this.name = '象';
        _this.isDeath = false;
        _this.fang = fang;
        var zb = [{ l: [2, 0], r: [6, 0] }, { l: [2, 9], r: [6, 9] }];
        _this.x = zb[fang][diraction][0] * size;
        _this.y = zb[fang][diraction][1] * size;
        return _this;
    }
    Xiang.prototype.move = function (x, y) {
        var _a;
        if (Math.abs(x - this.x) !== 2 || Math.abs(y - this.y) !== 2)
            console.log('规则不正确');
        else
            _a = [x, y], this.x = _a[0], this.y = _a[1];
    };
    return Xiang;
}(Chess));
exports.Xiang = Xiang;
var Shi = /** @class */ (function (_super) {
    __extends(Shi, _super);
    function Shi(fang, size, diraction) {
        var _this = _super.call(this) || this;
        _this.name = '士';
        _this.isDeath = false;
        _this.fang = fang;
        var zb = [{ l: [3, 0], r: [5, 0] }, { l: [3, 9], r: [5, 9] }];
        _this.x = zb[fang][diraction][0] * size;
        _this.y = zb[fang][diraction][1] * size;
        return _this;
    }
    Shi.prototype.move = function (x, y) {
        var _a;
        var abs = Math.abs;
        var _b = [abs(x - this.x), abs(y - this.y)], disX = _b[0], disY = _b[1];
        if (disX !== 1 || disY !== 1 || x < 3 || x > 5 || y > 2 && y < 7)
            console.log('规则不正确');
        else
            _a = [x, y], this.x = _a[0], this.y = _a[1];
    };
    return Shi;
}(Chess));
exports.Shi = Shi;
var Jiang = /** @class */ (function (_super) {
    __extends(Jiang, _super);
    function Jiang(fang, size) {
        var _this = _super.call(this) || this;
        _this.isDeath = false;
        var arr = ['将', '帅'];
        _this.fang = fang;
        _this.name = arr[fang];
        var zb = [[4, 0], [4, 9]];
        _this.x = zb[fang][0] * size;
        _this.y = zb[fang][1] * size;
        return _this;
    }
    Jiang.prototype.move = function (x, y) {
        var _a;
        if (this.x !== x && this.y !== y || Math.abs(this.x - x) !== 1 || Math.abs(this.y - y) !== 1)
            console.log('规则不正确');
        else
            _a = [x, y], this.x = _a[0], this.y = _a[1];
    };
    return Jiang;
}(Chess));
exports.Jiang = Jiang;
var Bing = /** @class */ (function (_super) {
    __extends(Bing, _super);
    function Bing(fang, size, x) {
        var _this = _super.call(this) || this;
        _this.isDeath = false;
        _this.fang = fang;
        var arr = ['卒', '兵'];
        _this.name = arr[fang];
        var zb = [3, 6];
        _this.x = x * size;
        _this.y = zb[fang] * size;
        return _this;
    }
    Bing.prototype.move = function (x, y) {
        if (Math.abs(this.x - x) !== 1)
            console.log('姿势不正确!!!');
        else
            this.x = x;
    };
    return Bing;
}(Chess));
exports.Bing = Bing;
