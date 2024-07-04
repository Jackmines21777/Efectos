import {AfterViewInit, Component, ElementRef, HostListener, OnInit,Renderer2,ViewChild} from '@angular/core';

@Component({
  selector: 'app-integrantes',
  standalone: true,
  imports: [],
  templateUrl: './integrantes.component.html',
  styleUrl: './integrantes.component.css'
})
export default class IntegrantesComponent implements OnInit,AfterViewInit{

  @ViewChild('asImgBx') imgBx!: ElementRef;
  @ViewChild('asContentBx') contentBx!: ElementRef;
  

constructor(private elRef: ElementRef, private renderer: Renderer2){}
  ngOnInit(): void { }

  @HostListener('mouseover', ['$event.target']) onMouseOver(target: HTMLElement){
    const imgBx = this.elRef.nativeElement.querySelectorAll('.imgBx');
      imgBx.forEach((div: any) => {
        if (div === target) {
         this.renderer.addClass(div, 'clase-hover');
      }
    });
  }

  @HostListener('mouseout', ['$event.target']) onMouseOut(target: HTMLElement) {
    const imgBx = this.elRef.nativeElement.querySelectorAll('.imgBx');
    imgBx.forEach((div: any) => {
      if (div === target) {
        this.renderer.removeClass(div, 'clase-hover');
      }
    }); 
  }

  // @HostListener('mouseout', ['$event.target']) onMouseOver(target: HTMLElement) {
  //   const contentBx = this.elRef.nativeElement.querySelectorAll('.contentBx');
  //   contentBx.forEach((div: any) => {
  //     if (div === target) {
  //       this.renderer.removeClass(div, 'class-hover');
  //     }
  //   }); 
  // }

  // @HostListener('mouseout', ['$event.target']) onMouseOut(target: HTMLElement) {
  //   const contentBx = this.elRef.nativeElement.querySelectorAll('.contentBx');
  //   contentBx.forEach((div: any) => {
  //     if (div === target) {
  //       this.renderer.removeClass(div, 'clase-active');
  //     }
  //   }); 
  // }
  

  ngAfterViewInit(): void {
    const imgBx = this.imgBx.nativeElement;
    const contentBx = this.contentBx.nativeElement;

    console.log(contentBx);

    for (let i=0; i<imgBx.length; i++) {


      imgBx[i].addEventListener('mouseover', function() {

          for(let i=0; i<contentBx.length; i++) {

              contentBx[i].className = 'contentBx';

          }


          // document.getElementById(this.dataset.id)
          // className='contentBx active';

          for(let i=0; i<imgBx.length; i++) {
              imgBx[i].className = 'imgBx';
          }
          // this.className = 'imgBx active'
      })
}

  }
}

