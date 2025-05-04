import { Component } from '@angular/core';
import { Module } from '../../models/Module';
import { AppRoutes } from '../../enums/AppRoutes.enum';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  modules : Module[] = [
    {
      title: "Member Directory",
      imageSrc: 'img/member-directory-module/member-directory-desktop-01.png',
      imageAlt: 'Member Directory Module Image',
      description: 'Joomla module to display a directory of registered members on the site. It includes real-time search, a responsive and modern layout, and display statistics. Ideal for community or association websites.',
      price: 54.90,
      buylink: AppRoutes.MEMBER_DIRECTORY_MODULE_LICENSE,
      demoLink: AppRoutes.MEMBER_DIRECTORY_MODULE_DEMO,
      installationGuideLink: AppRoutes.MEMBER_DIRECTORY_INSTALLATION_GUIDE
    }

  ]

}
