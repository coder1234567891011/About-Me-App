import { Component } from '@angular/core';
import { MainContentComponent } from './components/main-content/main-content.component';
import { NzAnchorComponent, NzAnchorLinkComponent } from 'ng-zorro-antd/anchor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false
})
export class AppComponent {
  isCollapsed = false;

  handleClick(event:any){
    console.log(event)
  }
}
