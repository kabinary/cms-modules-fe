import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AppRoutes } from '../../../enums/AppRoutes.enum';

@Component({
  selector: 'app-member-directory-instalation-guide',
  standalone: false,
  
  templateUrl: './member-directory-instalation-guide.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './member-directory-instalation-guide.component.css'
})
export class MemberDirectoryInstalationGuideComponent {
  moduleName: string = 'Member Directory';
    appRoutes: typeof AppRoutes = AppRoutes;
    fontAwesomeUrl: string = "https://fontawesome.com/search";
}
