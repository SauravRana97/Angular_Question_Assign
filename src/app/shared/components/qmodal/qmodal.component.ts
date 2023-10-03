import { Component, Injectable, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Validators, FormBuilder, FormArray } from '@angular/forms';
import { FormdataService } from 'src/app/core/services/formdata/formdata.service';
import { HomepageComponent } from 'src/app/features/components/homepage/homepage.component';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-qmodal',
  templateUrl: './qmodal.component.html',
  styleUrls: ['./qmodal.component.scss'],
})
export class QmodalComponent implements OnInit {
  constructor(
    public dialog: MatDialogRef<QmodalComponent>,
    private fb: FormBuilder,
    private FormService: FormdataService,
    public method: HomepageComponent
  ) {}

  ngOnInit(): void {
    this.createItem();
  }

  btn: boolean = false;

  userform = this.fb.group({
    type: ['', []],
    question: ['', [Validators.required]],
    checkqst: ['', [Validators.required]],
    userchoice: [false, [Validators.required]],
    paragraphrq: [false, [Validators.required]],
    checkreq: [false, [Validators.required]],
    checkbox: this.fb.array([], [Validators.required]),
  });

  selectvalue = [
    {
      value: 1,
      data: 'Paragraph Question',
    },
    { value: 2, data: 'Check Box list Question' },
  ];

  submit(value: any) {
    let checkbox = this.checkbox().value.map((item: any) => {
      return item.checkvalue;
    });
    let check = Object.values(checkbox).includes('');
    if (
      this.userform.value.question ||
      (this.userform.value.checkqst && !check)
    ) {
      this.FormService.formdata(this.userform);
      this.dialog.close(value);
    }
  }

  checkbox(): FormArray {
    return this.userform.get('checkbox') as FormArray;
  }

  createItem() {
    if (this.userform.value.checkbox!.length < 5) {
      this.btn = true;
      this.checkbox().push(
        this.fb.group({
          checkvalue: ['', [Validators.required]],
          checkstatus: [false, [Validators.required]],
          othertatus: [false, [Validators.required]],
        })
      );
    } else {
      this.btn = false;
    }
  }
  addother() {
    let check = this.userform.value.checkbox?.map((item: any) => {
      return item.checkvalue;
    });
    if (!check?.includes('other')) {
      this.checkbox().push(
        this.fb.group({
          checkvalue: ['other', [Validators.required]],
          checkstatus: [false, [Validators.required]],
          otherstatus: [false, [Validators.required]],
        })
      );
    }
  }
  removeItem(i: number) {
    const uf = this.checkbox();
    uf.removeAt(i);
    this.btn = true;
  }
}
