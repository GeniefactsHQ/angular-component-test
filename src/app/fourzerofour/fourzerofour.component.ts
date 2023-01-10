import {Component} from '@angular/core';
import {DarkModeService} from 'angular-dark-mode';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-fourzerofour',
  templateUrl: './fourzerofour.component.html',
  styleUrls: ['./fourzerofour.component.scss']
})
export class FourzerofourComponent {
  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;

  constructor(private darkModeService: DarkModeService) {
  }

}
