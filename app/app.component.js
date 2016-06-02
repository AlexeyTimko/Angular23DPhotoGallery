var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var Safe = (function () {
    function Safe(sanitizer) {
        this.sanitizer = sanitizer;
        this.sanitizer = sanitizer;
    }
    Safe.prototype.transform = function (style) {
        return this.sanitizer.bypassSecurityTrustStyle(style);
    };
    Safe = __decorate([
        core_1.Pipe({ name: 'safe' }), 
        __metadata('design:paramtypes', [platform_browser_1.DomSanitizationService])
    ], Safe);
    return Safe;
})();
exports.Safe = Safe;
var AppComponent = (function () {
    function AppComponent() {
        this.items = items;
        this.width = 300;
        this.height = 200;
        this.currentAngle = 0;
        this.total = this.items.length;
        this.angle = 360 / this.total;
        this.tz = Math.round((this.width / 2) / Math.tan(Math.PI / this.total));
    }
    AppComponent.prototype.getTransform = function () {
        return "translateZ(-" + this.tz + "px) rotateY(" + this.currentAngle + "deg)";
    };
    AppComponent.prototype.getSlideTransform = function (i) {
        return "rotateY(" + this.angle * i + "deg) translateZ(" + this.tz + "px)";
    };
    AppComponent.prototype.rotate = function (direction) {
        if (direction === void 0) { direction = 1; }
        console.log(this.angle * direction);
        this.currentAngle += this.angle * direction;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            pipes: [Safe],
            template: "\n        <div>\n            <div class=\"slider-wrap\"\n                [style.width]=\"width\"\n                [style.height]=\"height\"\n            >\n                <div class=\"slider\" [style.transform]=\"getTransform() | safe\">\n                    <div class=\"slide slide-wrap\"\n                        *ngFor=\"let item of items; let i = index\"\n                        [ngStyle]=\"{'background-image': 'url('+item+')'}\"\n                        [style.transform]=\"getSlideTransform(i) | safe\"\n                        [style.width]=\"width-22\"\n                        [style.height]=\"height-22\"\n                    ></div>\n                </div>\n            </div>\n            <button class=\"prev\" (click)=\"rotate(-1)\"><<</button>\n            <button class=\"next\" (click)=\"rotate()\">>></button>\n        </div>\n        "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
var items = [
    "/img/1.jpg",
    "/img/2.jpg",
    "/img/6.jpg",
    "/img/3.png",
    "/img/4.jpg",
    "/img/5.jpg",
    "/img/6.jpg",
    "/img/7.jpg",
    "/img/8.jpg",
    "/img/9.jpeg",
    "/img/10.jpg"
];
//# sourceMappingURL=app.component.js.map