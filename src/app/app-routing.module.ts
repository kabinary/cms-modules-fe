import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AppRoutes } from './enums/AppRoutes.enum';
import { MemberDirectoryModuleDemoComponent } from './pages/member-directory-module-demo/member-directory-module-demo.component';
import { MemberDirectoryModuleLicenseComponent } from './pages/member-directory-module-license/member-directory-module-license.component';
import { MemberDirectoryInstalationGuideComponent } from './pages/module-installation-guides/member-directory-instalation-guide/member-directory-instalation-guide.component';

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : AppRoutes.HOME, component : HomeComponent},
  { path: '', redirectTo: AppRoutes.HOME, pathMatch: 'full' }, 
  {path : AppRoutes.MEMBER_DIRECTORY_INSTALLATION_GUIDE, component : MemberDirectoryInstalationGuideComponent},
  {path : AppRoutes.MEMBER_DIRECTORY_MODULE_DEMO, component : MemberDirectoryModuleDemoComponent},
  {path : AppRoutes.MEMBER_DIRECTORY_MODULE_LICENSE, component : MemberDirectoryModuleLicenseComponent},
  { path: '**', redirectTo: AppRoutes.HOME }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
