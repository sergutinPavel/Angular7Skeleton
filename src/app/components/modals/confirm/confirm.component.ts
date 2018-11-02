import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-m-confirm.app-modal-component',
  templateUrl: 'confirm.component.html',
})
export class MConfirmComponent {

  constructor(
    public dialogRef: MatDialogRef<MConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onSubmit() {
    this.dialogRef.close({success: true});
  }
  onReject() {
    this.dialogRef.close();
  }

}
