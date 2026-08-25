import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberDirectoryInstalationGuideComponent } from './member-directory-instalation-guide.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AppModule } from '../../../app.module';

describe('MemberDirectoryInstalationGuideComponent', () => {
  let component: MemberDirectoryInstalationGuideComponent;
  let fixture: ComponentFixture<MemberDirectoryInstalationGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule]
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
