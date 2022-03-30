import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  isBold: boolean = true
  isColor: boolean = false
  classToApply: string = "italicsClass boldClass"
  fontSize: number = 30
  isItalic: boolean = true

  columnSpan: number = 2
  firstName: string = 'Tom'
  lastName: string = 'Brown'
  gender: string = 'male'
  age: number = 20
  showDetails: boolean = false
  name1: string = 'Tom'
  name2:string='Mary'

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleDetails = () => {
    this.showDetails = !this.showDetails

  }
  addClasses = () => {
    let classes = {
      boldClass: this.isBold,
      colorClass: this.isColor
    }
    return classes
  }
  addStyle = () => {
    let styles = {
      'font-size.px': this.fontSize,
      'font-style': this.isItalic ? 'italic' : 'normal',
      'font-weight': this.isBold ? 'bold' : 'normal',
    }
    return styles
  }
  onClick = () => {
    console.log('button clicked')
  }
}
