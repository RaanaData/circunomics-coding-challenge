import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoDetailModal } from './repo-detail-modal';

describe('RepoDetailModal', () => {
  let component: RepoDetailModal;
  let fixture: ComponentFixture<RepoDetailModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepoDetailModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepoDetailModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
