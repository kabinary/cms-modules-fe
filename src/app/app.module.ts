import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ModuleCardComponent } from './components/module-card/module-card.component';
import { MemberDirectoryModuleDemoComponent } from './components/member-directory-module-demo/member-directory-module-demo.component';
import { ModuleInstallationGuideComponent } from './components/module-installation-guide/module-installation-guide.component';
import { MemberDirectoryModuleLicenseComponent } from './components/member-directory-module-license/member-directory-module-license.component';
import { ButtonComponent } from './components/button/button.component';

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
    ButtonComponent
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
