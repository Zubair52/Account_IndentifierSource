import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Information } from '../Information_Cls';

@Component({
  selector: 'app-record-finder',
  templateUrl: './record-finder.component.html',
  styleUrls: ['./record-finder.component.css']
})

export class RecordFinderComponent implements OnInit {
  ObjResults;
  email :string;
  Twiter :boolean;
  LinkedIn :boolean;
  Facebook :boolean;
  Gmail :boolean;
  Requrl : string;


  information : Information;
  constructor(private http: HttpClient) {
  this.information = new Information();
  this.information.UserName = "";
  }
  ngOnInit(): void 
  {}

  onSubmit(){debugger
    var userinput = this.email
    var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
    
    if(!pattern.test(userinput))
    {
      alert('not a valid e-mail address');
    }​
    else
    {
      this.Gmail = this.Gmail || false
      this.Twiter = this.Twiter || false
      this.Facebook = this.Facebook || false
      this.LinkedIn = this.LinkedIn || false

    
     this.Requrl = 'http://zubair96-001-site1.etempurl.com/api/Values?email='+this.email+'&Twiter='+this.Twiter+'&Facebook='+this.Facebook+'&Gmail='+this.Gmail+'&LinkedIn='+this.LinkedIn+''
     this.http.get<any>(this.Requrl).subscribe(data => {
        this.information = {UserName : data.UserName,Available : data.Available,EmailAdress:data.EmailAdress,CountMatchedAccount : data.CountMatchedAccount,MatchedAccounts:data.MatchedAccounts,Total_CheckedAccounts:data.Total_CheckedAccounts,Results_Percentage:data.Results_Percentage,Remarks:data.Remarks} 
      debugger  
      })
      console.log(this.information)
    }
  }

}
