import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleInstallationGuideComponent } from './module-installation-guide.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AppModule } from '../../../app.module';

describe('ModuleInstallationGuideComponent', () => {
  let component: ModuleInstallationGuideComponent;
  let fixture: ComponentFixture<ModuleInstallationGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleInstallationGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
