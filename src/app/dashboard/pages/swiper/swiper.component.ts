import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
// register Swiper custom elements

@Component({
  selector: 'app-swiper',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [],
  templateUrl: './swiper.component.html',
  styleUrl: './swiper.component.css'
})
export default class SwiperComponent implements OnInit {
 

ngOnInit(): void {
  register();
    
}


}
