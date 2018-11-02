import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IPagination, initialPagination } from '../../../models/pagination';
import { ISorting, initialSorting } from '../../../models/sortingParams';

@Component({
  selector: 'app-example.app-page',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit, OnDestroy {
  subs: {[name: string]: Subscription} = {};
  public DTPagination: IPagination = {...initialPagination};
  public sortingParams: ISorting = {...initialSorting};
  public initialFilters = {
    search: '',
  };
  public displayedColumns = [
    'id',
    'name',
  ];
  public dataTableList: any[] = [
    {id: 1, name: 'Test Testovich'},
    {id: 2, name: 'Kermit frog'},
    {id: 3, name: 'Peppa pig'},
  ];

  constructor() { }

  ngOnInit() {
  }
  ngOnDestroy() {
    Object.keys(this.subs).forEach(s => this.subs[s].unsubscribe());
  }

  // clearFilters() {
  //   this.form.setValue(this.initialFilters);
  // }

  pageChanged(event): void {
    this.sortingParams = { ...this.sortingParams, page: event.pageIndex + 1, count: event.pageSize };
    // TODO: dispatch action to get data from api
    // this.store.dispatch(new GetMerchantsAction({ sorting: this.sortingParams, filters: this.additionalFilters }));
  }
  sortingChanged(event): void {
    this.sortingParams = { ...this.sortingParams, orderBy: event.active, order: event.direction };
    // TODO: dispatch action to get data from api
    // this.store.dispatch(new GetMerchantsAction({ sorting: this.sortingParams, filters: this.additionalFilters }));
  }

}
