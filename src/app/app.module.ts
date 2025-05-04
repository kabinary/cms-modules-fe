import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModuleCardComponent } from './components/module-card/module-card.component';
import { MemberDirectoryModuleDemoComponent } from './pages/member-directory-module-demo/member-directory-module-demo.component';
import { ModuleInstallationGuideComponent } from './pages/module-installation-guides/module-installation-guide/module-installation-guide.component';
import { MemberDirectoryModuleLicenseComponent } from './pages/member-directory-module-license/member-directory-module-license.component';
import { ButtonComponent } from './components/button/button.component';
import { MemberDirectoryInstalationGuideComponent } from './pages/module-installation-guides/member-directory-instalation-guide/member-directory-instalation-guide.component';
import { CollapsiblePanelComponent } from './components/collapsible-panel/collapsible-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ModuleCardComponent,
    MemberDirectoryModuleDemoComponent,
    ModuleInstallationGuideComponent,
    MemberDirectoryModuleLicenseComponent,
    ButtonComponent,
    MemberDirectoryInstalationGuideComponent,
    CollapsiblePanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
