import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberDirectoryModuleLicenseComponent } from './member-directory-module-license.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AppModule } from '../../app.module';

describe('MemberDirectoryModuleLicenseComponent', () => {
  let component: MemberDirectoryModuleLicenseComponent;
  let fixture: ComponentFixture<MemberDirectoryModuleLicenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule]
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
