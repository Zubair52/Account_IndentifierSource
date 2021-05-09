import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './All_Components/about/about.component';
import { RecordFinderComponent } from './All_Components/record-finder/record-finder.component';
import { AppComponent } from './app.component';

// const routes: Routes = [];

const routes: Routes = [
  { path: '', component: RecordFinderComponent },
  { path: 'About', component: AboutComponent }
  // { path: '',   redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
