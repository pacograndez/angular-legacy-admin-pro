import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  private linkTheme: Element = document.querySelector('#theme');
  private links: NodeListOf<Element>;

  public constructor(private settingsService: SettingsService ) {}


  ngOnInit(): void {
    this.links = document.querySelectorAll('.selector');
    this.settingsService.checkCurrentTheme();
  }

  public onChangeTheme(theme: string) {
    this.settingsService.changeTheme(theme);
  }
}
