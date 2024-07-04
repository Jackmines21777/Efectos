import { Component } from '@angular/core';
import { RouterModule} from '@angular/router';

@Component({
  selector: 'app-acronimo',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './acronimo.component.html',
  styleUrl: './acronimo.component.css'
})
export default class AcronimoComponent {

  alert(){
    alert('hola');
  }

}
