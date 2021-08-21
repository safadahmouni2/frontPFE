import { ApplicationService } from './application.service';
import { Component, OnInit } from '@angular/core';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  fapaper = faPaperPlane
  showresult = false
  text =""
  algorithm = ""
  result ={
    politician_name:"",
    influence:""
  }
  constructor(private applicationService: ApplicationService) {
  
  }
  ngOnInit(): void {
   
  }
  send(){
    console.log(this.algorithm)
    this.applicationService.getvalues(this.text,this.algorithm).subscribe((data:any)=>{
      this.showresult = true
      this.result =data.result
      console.log(data)
    })
  }
}
