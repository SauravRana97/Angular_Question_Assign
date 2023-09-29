import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule,MatDialogRef } from '@angular/material/dialog';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ViewpageComponent } from './components/viewpage/viewpage.component';
@NgModule({
  declarations: [
    HomepageComponent,
    ViewpageComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
  ]
})
export class FeaturesModule { }
