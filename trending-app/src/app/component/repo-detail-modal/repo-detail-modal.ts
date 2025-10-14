import { Component, Inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA,  MatDialogContent, MatDialogActions, MatDialogClose } from "@angular/material/dialog";
import { TimeIntervalPipe } from '../../pipes/time-interval-pipe';

@Component({
  selector: 'app-repo-detail-modal',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    TimeIntervalPipe
  ],
  templateUrl: './repo-detail-modal.html',
  styleUrl: './repo-detail-modal.scss'
})
export class RepoDetailModal {
  repoDetail: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.repoDetail = data
    console.log(this.repoDetail)
  }
}
