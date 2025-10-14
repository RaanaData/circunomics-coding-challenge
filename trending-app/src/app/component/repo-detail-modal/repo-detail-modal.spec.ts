import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepoDetailModal } from './repo-detail-modal';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NO_ERRORS_SCHEMA } from '@angular/core';

const mockRepoData = {
  name: 'Test Repo Name',
  description: 'Test description.',
  stargazers_count: 200,
  open_issues: 5,
  owner: { avatar_url: 'http://test.avatar.url' },
  created_at: '2019-01-29T14:52:41Z'
};

describe('RepoDetailModal', () => {
  let component: RepoDetailModal;
  let fixture: ComponentFixture<RepoDetailModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepoDetailModal],
       providers: [
        { provide: MAT_DIALOG_DATA, useValue: mockRepoData },
        { provide: MatDialogRef, useValue: {} }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepoDetailModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly show data in repoDetail', () => {
    expect(component.data).toEqual(mockRepoData);
    expect(component.repoDetail).toEqual(mockRepoData);
    expect(component.repoDetail.name).toBe('Test Repo Name');
    expect(component.repoDetail.stargazers_count).toBe(200);
  });
});
