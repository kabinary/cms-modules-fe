import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleInstallationGuideComponent } from './module-installation-guide.component';

describe('ModuleInstallationGuideComponent', () => {
  let component: ModuleInstallationGuideComponent;
  let fixture: ComponentFixture<ModuleInstallationGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModuleInstallationGuideComponent]
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
