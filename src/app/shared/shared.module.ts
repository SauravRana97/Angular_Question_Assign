import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QmodalComponent } from './components/qmodal/qmodal.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule,MatDialogRef } from '@angular/material/dialog';

@NgModule({
  declarations: [QmodalComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatDialogModule,
    
  ],
})
export class SharedModule {}
