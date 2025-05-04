import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberDirectoryInstalationGuideComponent } from './member-directory-instalation-guide.component';

describe('MemberDirectoryInstalationGuideComponent', () => {
  let component: MemberDirectoryInstalationGuideComponent;
  let fixture: ComponentFixture<MemberDirectoryInstalationGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MemberDirectoryInstalationGuideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberDirectoryInstalationGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
