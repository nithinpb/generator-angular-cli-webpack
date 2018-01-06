import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '../../../../../core/animations';
import { FuseUtils } from '../../../../../core/fuseUtils';
import { <%= capitalizedPluralPageName %>Service } from '../<%= pluralPageName %>.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'fuse-<%= pageName %>-list',
  templateUrl: './<%= pageName %>-list.component.html',
  styleUrls: ['./<%= pageName %>-list.component.scss'],
  animations : fuseAnimations
})
export class <%= capitalizedPageName %>ListComponent implements OnInit {

  <%= pluralPageName %>: any;
  selected: any;
  dataSource: FilesDataSource | null;
  displayedColumns = ['id', 'name'];

  constructor(private <%= pluralPageName %>Service: <%= capitalizedPluralPageName %>Service) { 
    this.<%= pluralPageName %>Service.on<%= capitalizedPageName %>Changed.subscribe(<%= pluralPageName %> => {
      this.<%= pluralPageName %> = <%= pluralPageName %>;
    });
    this.<%= pluralPageName %>Service.on<%= capitalizedPageName %>Selected.subscribe(selected => {
      this.selected = selected;
    });    
  }
      
  ngOnInit() {
    this.dataSource = new FilesDataSource(this.<%= pluralPageName %>Service);
  }
  
  onSelect(selected) {
    this.<%= pluralPageName %>Service.on<%= capitalizedPageName %>Selected.next(selected);
  }  
}

export class FilesDataSource extends DataSource<any> {
  constructor(private <%= pluralPageName %>Service: <%= capitalizedPluralPageName %>Service) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<any[]> {
    return this.<%= pluralPageName %>Service.on<%= capitalizedPageName %>Changed;
  }

  disconnect() {
  }
}
