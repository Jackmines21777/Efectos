import {AfterViewInit, Component, ElementRef, OnInit,ViewChild} from '@angular/core';

@Component({
  selector: 'app-slider-2',
  standalone: true,
  imports: [],
  templateUrl: './slider-2.component.html',
  styleUrl: './slider-2.component.css'
})
export default class Slider2Component implements OnInit,AfterViewInit {
  @ViewChild('asNext') next!: ElementRef;
  @ViewChild('asPrev') prev!: ElementRef;
  @ViewChild('asSlider') slider!: ElementRef;
  // @ViewChild('asSlides') slides!: ElementRef;


  constructor() { 
  }
  

  ngOnInit(): void { 
   }

  ngAfterViewInit(): void {
    const next = this.next.nativeElement;
    const prev = this.prev.nativeElement;
    const slider = this.slider.nativeElement;
    // let slides = this.slides.nativeElement;


    

  prev.addEventListener('click', function() {
      let slides = document.querySelectorAll('.slides');
      slider.prepend(slides[slides.length - 1]);
  })

  next.addEventListener('click', function() {
      let slides = document.querySelectorAll('.slides');
      slider.appendChild(slides[0]);
  })

  }

}


