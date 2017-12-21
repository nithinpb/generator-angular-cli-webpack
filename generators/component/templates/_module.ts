import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { RouterModule } from '@angular/router';
import { <%= capitalizedComponentName %>Page } from './<%= componentName %>.component.ts';

export const routes = [
  { path: '', component: <%= capitalizedComponentName %>Page, pathMatch: 'full' }
];

@NgModule({
  imports: [ CommonModule, RouterModule.forChild(routes) ],
  declarations: [ <%= capitalizedComponentName %>Page ]
})
export class <%= capitalizedComponentName %>Module {
  static routes = routes;
}
