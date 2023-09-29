import {
  Component,
  Injectable,
  OnInit,
  ViewChildren,
  QueryList,
  ElementRef,
} from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormdataService } from 'src/app/core/services/formdata/formdata.service';
import { QmodalComponent } from 'src/app/shared/components/qmodal/qmodal.component';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  Dialog!: MatDialogRef<QmodalComponent>;

  // @ViewChildren('option') option!: QueryList<ElementRef>;

  constructor(
    public dialogModel: MatDialog,
    private FormService: FormdataService,
    private fb: FormBuilder,
    private router: Router
  ) {}
  otheroption: boolean = false;

  formdata: any;
  required: boolean = false;

  homeform = this.fb.group({
    paragraphdata: this.fb.array([]),
    checkboxdata: this.fb.array([]),
  });

  checkedOptions: any = [];

  paragraphdata(): FormArray {
    return this.homeform.get('paragraphdata') as FormArray;
  }

  checkboxdata(): FormArray {
    return this.homeform.get('checkboxdata') as FormArray;
  }
  public other: any = false;

  ngOnInit(): void {}

  addQuestion() {
    this.Dialog = this.dialogModel.open(QmodalComponent, {
      height: '50%',
      width: '50%',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '200ms',
      disableClose: true,
    });

    this.Dialog.afterClosed().subscribe((result) => {
      if (result == true) {
        this.formdata = this.FormService.formres;
        this.required = this.formdata.value.requiredfield;

        console.log('this.formdata', this.formdata.value);
        if (this.formdata.value.type == 1) {
          if (this.formdata.value.requiredfield == true) {
            this.paragraphdata().push(
              this.fb.group({
                question: [this.formdata.value.question, ],
                answer: ['', [Validators.required]],
              })
            );
          } else {
            this.paragraphdata().push(
              this.fb.group({
                question: [this.formdata.value.question,],
                answer: [''],
              })
            );
          }
        } else if (this.formdata.value.type == 2) {
          
          if (this.formdata.value.requiredfield == true) {
            this.checkboxdata().push(
              this.fb.group({
                question: [this.formdata.value.checkqst,],  
                checkoption: [this.formdata.value.checkbox ,[Validators.required]],
                otheranswer: ['',],
              })
            );  
          } else {
            this.checkboxdata().push(
              this.fb.group({
                question: [this.formdata.value.checkqst,],
                checkoption: [this.formdata.value.checkbox],
                otheranswer: ['',],
              })
            );
          }
        }
      }
    });
  }
  addclick(event: any, i: number, j: number) {
    // console.log('event', event, 'i', i, 'j', j);
    this.checkboxdata().at(i).get('checkoption')!.value[j].checkstatus =
      event.checked;

     if(this.formdata.value.requiredfield == true){
      console.log(this.checkboxdata().at(i).get('checkoption')?.status)
     }
      
    if (
      this.checkboxdata().at(i).get('checkoption')!.value[j].checkvalue ==
      'other'
    ) {
      this.checkboxdata().at(i).get('checkoption')!.value[j].otherstatus =
        event.checkejd;
      this.otheroption = true;
    }
  }

  submit() {
    console.log(this.homeform);
  
    if (
      this.homeform.value.checkboxdata?.length !== 0 ||
      this.homeform.value.paragraphdata?.length !== 0
    ) {
      // if(this.homeform.invalid){
      //   return 
      // }
      this.FormService.submitdata(this.homeform.value);
      // this.router.navigate(['feature/viewpage']);
    }


    // this.router.navigate(['feature/viewpage']);

    // this.checkedOptions = []
    //  const test = this.option.toArray().filter((option: any) => {
    //     if (option.checked)
    //     {
    //       return JSON.parse(option.value)
    //   let checkedoption = ;

    //   for (const key in checkedoption) {
    //     console.log("key",key)
    //     console.log('value in object',checkedoption[key])
    //     // if (Object.prototype.hasOwnProperty.call(object, key)) {
    //     //   const element = object[key];

    //     // }
    //   }
    //   // console.log(checkedoption)
    //   //  console.log(JSON.parse(option.value))
    // }

    //   // this.checkedOptions.push(option.value);
    // }});
  }
}
