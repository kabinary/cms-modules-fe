import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberDirectoryModuleDemoComponent } from './member-directory-module-demo.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AppModule } from '../../app.module';

describe('MemberDirectoryModuleDemoComponent', () => {
  let component: MemberDirectoryModuleDemoComponent;
  let fixture: ComponentFixture<MemberDirectoryModuleDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule]
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
