import {
  Component,
  Injectable,
  OnInit,
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

  constructor(
    public dialogModel: MatDialog,
    private FormService: FormdataService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  formdata: any;

  homeform = this.fb.group({
    paragraphdata: this.fb.array([]),
    checkboxdata: this.fb.array([]),
  });


  paragraphdata(): FormArray {
    return this.homeform.get('paragraphdata') as FormArray;
  }

  checkboxdata(): FormArray {
    return this.homeform.get('checkboxdata') as FormArray;
  }

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
      if (result) {

        this.formdata = this.FormService.formres;
        if (this.formdata.value.type == 1) {
          if (this.formdata.value.paragraphrq) {
            this.paragraphdata().push(
              this.fb.group({
                question: [this.formdata.value.question],
                answer: ['', [Validators.required]],
              })
            );
          } else {
            this.paragraphdata().push(
              this.fb.group({
                question: [this.formdata.value.question],
                answer: [''],
              })
            );
          }
        } else if (this.formdata.value.type == 2) {
          if (this.formdata.value.checkreq) {
            this.checkboxdata().push(
              this.fb.group({
                question: [this.formdata.value.checkqst],
                checkoption: [
                  this.formdata.value.checkbox,
                  [Validators.required],
                ],
                otheranswer: ['',
                  [Validators.required]],
                reqcheck: [true],
              })
            );
          } else {
            this.checkboxdata().push(
              this.fb.group({
                question: [this.formdata.value.checkqst],
                checkoption: [this.formdata.value.checkbox],
                otheranswer: [''],
                reqcheck: [false],
              })
            );
          }
        }
      }
    });
  }
  changere(i: number) {
    let checkvalue = this.paragraphdata().value.map((item: any) => {
      return item.answer == '';
    });
    // if (checkvalue.includes(true)) {
    //   this.formdata.value.paragraphrq = true;
    // }
    // this.formdata.value.paragraphrq = false;
    // console.log(this.formdata.value.paragraphrq);
  }

  addclick(event: any, i: number, j: number) {
    if (
      this.checkboxdata().at(i).get('checkoption')!.value[j].checkvalue =='other') {
        this.checkboxdata().at(i).value.reqcheck = false
      this.checkboxdata().at(i).get('checkoption')!.value[j].otherstatus = event.checked;

      
    }

    this.checkboxdata().at(i).get('checkoption')!.value[j].checkstatus = event.checked;
    this.checkboxdata().at(i).value.reqcheck = false;

    if (!this.checkboxdata().at(i).get('checkoption')!.value[j].checkstatus) {
      // if (this.checkboxdata().at(i).get('reqcheck')!.value) {
      //   this.checkboxdata().at(i).value.reqcheck = true;
      // }

      this.checkboxdata().at(i).value.reqcheck = true;
    }
  }
  otherchange(event: any, i: number) {
    console.log(event, i);
    
    // this.checkboxdata().at(i).value.reqcheck = false;
  }

  submit() {
    console.log(this.homeform);
    if (
      this.homeform.value.checkboxdata?.length ||
      this.homeform.value.paragraphdata?.length
    ) {
      let check = this.checkboxdata()?.value.map((item: any) => {
        return item.reqcheck;
      });

      let req = check.includes(true);

      if (!req && this.homeform.status == 'VALID') {
        this.FormService.submitdata(this.homeform.value);
        this.router.navigate(['feature/viewpage']);
      }
    }
  }
}
