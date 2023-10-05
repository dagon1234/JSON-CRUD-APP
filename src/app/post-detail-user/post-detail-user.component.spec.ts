import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailComponentUser } from './post-detail-user.component';

describe('PostDetailComponentUser', () => {
  let component: PostDetailComponentUser;
  let fixture: ComponentFixture<PostDetailComponentUser>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostDetailComponentUser]
    });
    fixture = TestBed.createComponent(PostDetailComponentUser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
