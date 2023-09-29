import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ViewpageComponent } from './components/viewpage/viewpage.component';



const routes: Routes = [
  {
    path: '', component: HomepageComponent,
  },
  {
    path: 'viewpage', component: ViewpageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
