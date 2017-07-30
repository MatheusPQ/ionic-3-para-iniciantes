import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { FeedPage } from '../feed/feed';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  //no app.component.ts define a primeira página que será carregada 
  tab1Root = HomePage;
  tab4Root = FeedPage;


  constructor() {

  }
}
