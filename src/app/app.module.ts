import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgChildToParentComponent } from './shared/component/ngModel/ng-child-to-parent/ng-child-to-parent.component';
import { ParentToTableComponent } from './shared/component/ngModel/parent-to-table/parent-to-table.component';
import { FormsModule } from '@angular/forms';
import { ViewChildFormToParentComponent } from './shared/component/viewChild/view-child-form-to-parent/view-child-form-to-parent.component';
import { ViewParentToTableComponent } from './shared/component/viewChild/view-parent-to-table/view-parent-to-table.component';
import { RefFormToParentComponent } from './shared/component/reference/ref-form-to-parent/ref-form-to-parent.component';
import { RefParentToTableComponent } from './shared/component/reference/ref-parent-to-table/ref-parent-to-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NgChildToParentComponent,
    ParentToTableComponent,
    ViewChildFormToParentComponent,
    ViewParentToTableComponent,
    RefFormToParentComponent,
    RefParentToTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
