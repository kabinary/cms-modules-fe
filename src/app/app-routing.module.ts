import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AppRoutes } from './enums/AppRoutes.enum';
import { ModuleInstallationGuideComponent } from './components/module-installation-guide/module-installation-guide.component';
import { MemberDirectoryModuleDemoComponent } from './components/member-directory-module-demo/member-directory-module-demo.component';
import { MemberDirectoryModuleLicenseComponent } from './components/member-directory-module-license/member-directory-module-license.component';

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : AppRoutes.HOME, component : HomeComponent},
  { path: '', redirectTo: AppRoutes.HOME, pathMatch: 'full' }, 
  {path : AppRoutes.MODULE_INSTALLATION_GUIDE, component : ModuleInstallationGuideComponent},
  {path : AppRoutes.MEMBER_DIRECTORY_MODULE_DEMO, component : MemberDirectoryModuleDemoComponent},
  {path : AppRoutes.MEMBER_DIRECTORY_MODULE_LICENSE, component : MemberDirectoryModuleLicenseComponent},
  { path: '**', redirectTo: AppRoutes.HOME }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
