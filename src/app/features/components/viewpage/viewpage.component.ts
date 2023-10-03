import { Component, OnInit } from '@angular/core';
import { FormdataService } from 'src/app/core/services/formdata/formdata.service';

@Component({
  selector: 'app-viewpage',
  templateUrl: './viewpage.component.html',
  styleUrls: ['./viewpage.component.scss']
})
export class ViewpageComponent implements OnInit {

  constructor(
    private FormService: FormdataService,
  ) { }

  userdata:any

  ngOnInit(): void {
    this.userdata = this.FormService.data
    console.log(Object.keys(this.userdata).length);
    
  }

}
