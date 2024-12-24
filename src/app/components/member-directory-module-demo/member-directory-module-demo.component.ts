import { Component } from '@angular/core';
import { AppRoutes } from '../../enums/AppRoutes.enum';

@Component({
  selector: 'app-member-directory-module-demo',
  standalone: false,
  
  templateUrl: './member-directory-module-demo.component.html',
  styleUrl: './member-directory-module-demo.component.css'
})
export class MemberDirectoryModuleDemoComponent {
  appRoutes: typeof AppRoutes = AppRoutes;
}
