import { Component, HostListener, OnInit } from '@angular/core';
import { InitAuthService, StoreService } from '@perun-web-apps/perun/services';

@Component({
  selector: 'perun-web-apps-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{

  constructor(private store: StoreService,
              private initAuth: InitAuthService) {
  }

  public static minWidth = 992;
  sidebarMode: 'over' | 'push' | 'side' = 'side';
  isLoginScreenShow: boolean;

  sideMenuBgColor = this.store.get('theme', 'sidemenu_bg_color');
  contentBackgroundColor = this.store.get('theme', 'content_bg_color');
  contentHeight =  'calc(100vh - 84px)';

  ngOnInit() {
    this.isLoginScreenShow = this.initAuth.isLoginScreenShown();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.sidebarMode = this.isMobile() ? 'over' : 'side';
  }

  isMobile(): boolean {
    return window.innerWidth <= AppComponent.minWidth;
  }

  setContentHeight(height: number) {
    this.contentHeight =  'calc(100vh - 84px - '+height+'px)'
  }
}
