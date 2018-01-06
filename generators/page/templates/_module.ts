import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { <%= capitalizedPluralPageName %>Component } from './<%= pluralPageName %>.component';
import { <%= capitalizedPageName %>ListComponent } from './<%= pageName %>-list/<%= pageName %>-list.component';
import { SharedModule } from '../../../../core/modules/shared.module';
import { <%= capitalizedPluralPageName %>Service } from './<%= pluralPageName %>.service';

const routes = [
  {
    path: 'general/<%= pluralPageName %>',
    component: <%= capitalizedPluralPageName %>Component,
    resolve  : {
      <%= pluralPageName %>: <%= capitalizedPluralPageName %>Service
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [
  <%= capitalizedPluralPageName %>Component,
  <%= capitalizedPageName %>ListComponent,
  ],
  providers: [<%= capitalizedPluralPageName %>Service]
})

export class <%= capitalizedPluralPageName %>Module { }
