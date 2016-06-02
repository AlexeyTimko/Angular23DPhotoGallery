import {Component, Pipe} from '@angular/core'
import {DomSanitizationService} from '@angular/platform-browser';

@Pipe({name: 'safe'})
export class Safe {
    constructor(private sanitizer:DomSanitizationService){
        this.sanitizer = sanitizer;
    }

    transform(style) {
        return this.sanitizer.bypassSecurityTrustStyle(style);
    }
}

@Component({
    selector: 'my-app',
    pipes: [Safe],
    template: `
        <div>
            <div class="slider-wrap"
                [style.width]="width"
                [style.height]="height"
            >
                <div class="slider" [style.transform]="getTransform() | safe">
                    <div class="slide slide-wrap"
                        *ngFor="let item of items; let i = index"
                        [ngStyle]="{'background-image': 'url('+item+')'}"
                        [style.transform]="getSlideTransform(i) | safe"
                        [style.width]="width-22"
                        [style.height]="height-22"
                    ></div>
                </div>
            </div>
            <button class="prev" (click)="rotate(-1)"><<</button>
            <button class="next" (click)="rotate()">>></button>
        </div>
        `
})

export class AppComponent {
    public items = items;
    width = 300;
    height = 200;
    total:number;
    angle:number;
    currentAngle = 0;
    tz:number;

    constructor() {
        this.total = this.items.length;
        this.angle = 360 / this.total;
        this.tz = Math.round(( this.width / 2 ) / Math.tan(Math.PI / this.total));
    }
    getTransform(){
        return `translateZ(-${this.tz}px) rotateY(${this.currentAngle}deg)`;
    }
    getSlideTransform(i){
        return `rotateY(${this.angle*i}deg) translateZ(${this.tz}px)`;
    }
    rotate(direction = 1){
        console.log(this.angle * direction);
        this.currentAngle += this.angle * direction;
    }
}

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
