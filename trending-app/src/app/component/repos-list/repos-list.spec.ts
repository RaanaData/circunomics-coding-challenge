import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReposList } from './repos-list';
import { Api } from '../../service/api';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

class MockApiService {
  page = 1;
  mockResponse = {
    items: [
      { id: 1, name: 'repo1', description: 'description1' },
      { id: 2, name: 'repo2', description: 'description2' }
    ]
  };
  getRepos = jasmine.createSpy('getRepos').and.returnValue(of(this.mockResponse));
}
describe('ReposList', () => {
  let component: ReposList;
  let fixture: ComponentFixture<ReposList>;
  let mockApiService: MockApiService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [ReposList, MatSnackBarModule, MatDialogModule, ScrollingModule, CommonModule],
        providers: [
        { provide: Api, useClass: MockApiService },
      ],
        schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReposList);
    component = fixture.componentInstance;
    mockApiService = TestBed.inject(Api) as any;
    component.reposList = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch repos, update list', () => {
    const initialListLength = component.reposList.length;
    component.getRepoList();
    expect(mockApiService.getRepos).toHaveBeenCalled();
    expect(component.reposList.length).toBe(initialListLength + 2);
  });

});
