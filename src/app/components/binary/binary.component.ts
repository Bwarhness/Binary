import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-binary',
  templateUrl: './binary.component.html',
  styleUrls: ['./binary.component.scss']
})
export class BinaryComponent {
  title = 'binaryClock';
  time:any = {};
  constructor(){
    this.time.rawTime = new Date();
     this.time.ch = this.time.rawTime.getHours();
     this.time.cm = this.time.rawTime.getMinutes();
     this.time.cs = this.time.rawTime.getSeconds();
     this.time.binary = {};
     setInterval(
       () => {
         this.time.rawTime = this.addSeconds(this.time.rawTime, 1)
         this.time.ch = this.time.rawTime.getHours();
         this.time.cm = this.time.rawTime.getMinutes();
         this.time.cs = this.time.rawTime.getSeconds();
        this.binaryConvert("timer",this.time.ch, this.time.binary.ch);
        this.binaryConvert("minutter",this.time.cm, this.time.binary.cm);
        this.binaryConvert("sekunder",this.time.cs, this.time.binary.cs);

       }, 1000
     )
  }
   addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes*60000);
  }
  addSeconds(date, seconds) {
    return new Date(date.getTime() + seconds*1000);
  }
  binaryConvert(text, x, toObject) {
    var num = x;
    
    if (num != Math.floor(num)) {
      console.log("Please enter a number");
      
    } else if (num < 0) {
      console.log("Please enter a positive number");
    
    } else {
      var binary = parseInt(num, 10);
      var stringBinary = binary.toString(2)
      var arrayBinary = stringBinary.split('');
      var leftover = 6 - arrayBinary.length
      for (let index = 0; index < leftover; index++) {
        arrayBinary.unshift("0")
      }
      console.log(text, arrayBinary, x);
      toObject = arrayBinary;
      switch (text) {
        case "timer":
          this.time.binary.ch = arrayBinary;
          
          break;
          case "minutter":
          this.time.binary.cm = arrayBinary;
          
          break;
          case "sekunder":
          this.time.binary.cs = arrayBinary;
          
          break;
      
        default:
          break;
      }
    }
  }
}
