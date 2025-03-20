import { Component } from '@angular/core';
import { AppRoutes } from '../../enums/AppRoutes.enum';

@Component({
  selector: 'app-member-directory-module-license',
  standalone: false,
  
  templateUrl: './member-directory-module-license.component.html',
  styleUrl: './member-directory-module-license.component.css'
})
export class MemberDirectoryModuleLicenseComponent {
  appRoutes: typeof AppRoutes = AppRoutes;
}
