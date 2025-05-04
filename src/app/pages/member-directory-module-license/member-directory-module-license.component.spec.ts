import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberDirectoryModuleLicenseComponent } from './member-directory-module-license.component';

describe('MemberDirectoryModuleLicenseComponent', () => {
  let component: MemberDirectoryModuleLicenseComponent;
  let fixture: ComponentFixture<MemberDirectoryModuleLicenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MemberDirectoryModuleLicenseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberDirectoryModuleLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
