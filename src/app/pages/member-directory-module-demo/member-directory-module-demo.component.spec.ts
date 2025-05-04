import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberDirectoryModuleDemoComponent } from './member-directory-module-demo.component';

describe('MemberDirectoryModuleDemoComponent', () => {
  let component: MemberDirectoryModuleDemoComponent;
  let fixture: ComponentFixture<MemberDirectoryModuleDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MemberDirectoryModuleDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberDirectoryModuleDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
