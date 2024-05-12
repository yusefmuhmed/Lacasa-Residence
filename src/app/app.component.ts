import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from "./shared/footer/footer.component";
import { SocialMediaAndCopyrightsComponent } from "./shared/social-media-and-copyrights/social-media-and-copyrights.component";
import { HomeModuleModule } from './home/home-module/home-module.module';



@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, FooterComponent, NavbarComponent, SocialMediaAndCopyrightsComponent, HomeModuleModule]
})
export class AppComponent {
  title = 'LaCasa-Residence';
}
