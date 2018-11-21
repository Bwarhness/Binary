import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-binary-box',
  templateUrl: './binary-box.component.html',
  styleUrls: ['./binary-box.component.scss']
})
export class BinaryBoxComponent implements OnInit {
  @Input() Name;
  @Input() ByteArray:any = [];
  constructor() {
     
   }

  ngOnInit() {
  }

}
