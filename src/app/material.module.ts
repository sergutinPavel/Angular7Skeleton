import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatDialogModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatExpansionModule,
  MatSelectModule,
  MatTabsModule,
  MatTooltipModule,
  MatRippleModule,
} from '@angular/material';

const modules: any[] = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatDialogModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatExpansionModule,
  MatSelectModule,
  MatTabsModule,
  MatTooltipModule,
  MatRippleModule,
];
@NgModule({
  imports: [
    ...modules
  ],
  exports: [
    ...modules
  ]
})
export class MaterialModule {}
