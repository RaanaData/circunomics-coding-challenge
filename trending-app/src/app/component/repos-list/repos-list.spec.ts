import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposList } from './repos-list';

describe('ReposList', () => {
  let component: ReposList;
  let fixture: ComponentFixture<ReposList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReposList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReposList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
