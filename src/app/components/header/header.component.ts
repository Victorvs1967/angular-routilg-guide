import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

  constructor(private router: Router) {}

  changeRoute(event: MouseEvent, name: string) {
    event.preventDefault();
    const navConifg = [{ outlets: { secondary: name } }];
    this.router.navigate(navConifg, {skipLocationChange: false});
  }

}
