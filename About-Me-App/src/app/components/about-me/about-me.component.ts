import { Component } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';

@Component({
  selector: 'app-about-me',
  imports: [NzCardModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  age = new Date("1999-08-10T08:12:00")
  
  exactAge = 0
  exactExperience = null

  ngOnInit(){
      this.calculateAge()
  }

  calculateAge(){
    let today = new Date()
    const timeDiff = Math.abs(today.getTime() - this.age.getTime());
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    this.exactAge = Math.round(daysDiff/365 * 100)/100
  }
}
