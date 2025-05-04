import { Component, Input } from '@angular/core';
import { AppRoutes } from '../../../enums/AppRoutes.enum';

@Component({
  selector: 'app-module-installation-guide',
  standalone: false,
  
  templateUrl: './module-installation-guide.component.html',
  styleUrl: './module-installation-guide.component.css'
})
export class ModuleInstallationGuideComponent {
  @Input() moduleName: string = 'Xcelerate';
  @Input() moduleDemoRoute: string = "";
  @Input() moduleLicenseRoute: string = "";
  modulesDownloadsRepository: string = "https://github.com/oumarkb/cms-modules-downloads/tree/15de526b267c1fc9b1fd50fc74dec28149cfc14d/downloads";
  
  appRoutes: typeof AppRoutes = AppRoutes;
  joomlaExtensionsDirectoryUrl: string = "https://extensions.joomla.org";
}
