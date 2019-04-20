import { Component, OnInit, Input } from '@angular/core';
import { Color } from './color.model';
import { ApiService } from './../../serive/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input()
  SelectedColor: string;
  colors: string[] = ['Red', 'White', 'Green', 'blue'];
  constructor(public ser: ApiService) {}

  ngOnInit() {}
  onSend() {
    console.log(this.SelectedColor);

    //  this.ser.createRequrest(data).subscribe(res => {
    //  console.log(res);
    //  });
  }
}
