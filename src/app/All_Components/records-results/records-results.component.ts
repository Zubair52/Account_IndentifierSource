import { Component, OnInit,Input } from '@angular/core';
import { Information } from '../Information_Cls';

@Component({
  selector: 'app-records-results',
  templateUrl: './records-results.component.html',
  styleUrls: ['./records-results.component.css']
})
export class RecordsResultsComponent implements OnInit {
  @Input() information : Information
  
  constructor() { }

  ngOnInit(): void 
  {
    
  }

}
  