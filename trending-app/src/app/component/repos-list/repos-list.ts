import { Component, ViewChild } from '@angular/core';
import { Api } from '../../service/api';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar'
import { CommonModule } from '@angular/common';
import { RepoDetailModal } from '../repo-detail-modal/repo-detail-modal';
import { MatDialogModule, MatDialog } from "@angular/material/dialog";
import { ScrollingModule, CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { MatDividerModule } from '@angular/material/divider';
import { TimeIntervalPipe } from '../../pipes/time-interval-pipe';

@Component({
  selector: 'app-repos-list',
  standalone: true,
  imports: [
    CommonModule,
    ScrollingModule,
    MatSnackBarModule,
    MatDialogModule,
    MatDividerModule,
    TimeIntervalPipe
],
  templateUrl: './repos-list.html',
  styleUrl: './repos-list.scss'
})
export class ReposList {
  @ViewChild(CdkVirtualScrollViewport) viewport!: CdkVirtualScrollViewport;
  reposList: any[] = [];
  currentPage: number = 1;
  isLoading: boolean = false;
  hasPages: boolean = true;

  constructor(private apiService: Api,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog) {
    this.getRepoList();
  }

  getRepoList() {
     if (this.isLoading || !this.hasPages) {
      return;
     }
    this.isLoading = true;

    this.apiService.page = this.currentPage;

    this.apiService.getRepos().subscribe({
      next: res => {
        this.reposList = this.reposList.concat(res.items);
        if (res.items.length === 0) {
             this.hasPages = false;
        }

        this.isLoading = false;
        this.currentPage++;
      },
      error: error => {
        this._snackBar.open('Oops! there is an error, please try again later', 'Close', {
        duration: 1000,
        });
        this.isLoading = false;
      }
    })
  }

  scrolled() {
    const end = this.viewport.getRenderedRange().end;
    const total = this.reposList.length;
    if (end === total && !this.isLoading && this.hasPages) {
      this.getRepoList();
    }
  }



  openDetailModal(data: any) {
    console.log(data)
       const dialogRef = this.dialog.open(RepoDetailModal, {
                width: '600px',
                height: '300px',
                data: data
              });

        dialogRef.afterClosed().subscribe((result: any) => {
          if (result) {
          }
        });
  }





}
