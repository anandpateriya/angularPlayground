import { Component, OnInit, Renderer2 } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { HotkeysService, Hotkey } from 'angular2-hotkeys';
import { NavItem } from '../NavItem';
import { MenuItemContent } from 'primeng/menu';
import { BindHotKeyService } from '../bind-hot-key.service';


@Component({
  selector: 'app-ng-prime-menu',
  templateUrl: './ng-prime-menu.component.html',
  styleUrls: ['./ng-prime-menu.component.scss']
})
export class NgPrimeMenuComponent implements OnInit {
  private items: MenuItem[] = [];
  bindHotKeyService: BindHotKeyService;

  constructor(bindHotKeyService: BindHotKeyService) {
    this.bindHotKeyService = bindHotKeyService;
  }
  ngOnInit() {
    let navItems: NavItem[] = this.getNavItems();
    navItems.forEach(element => {
      let m1: MenuItem = {};
      let mItemsInside: MenuItem[] = [];
      m1.label = element.label;
      m1.id="id_"+m1.label;
      element.shortKey !== ''? this.bindHotKeyService.bindHotKey("menuNavigation",
      element.shortKey, element.label,""):"";
      element.navItems.forEach(insideEl => {
        let m1Inside: MenuItem = {};
        m1Inside.label = insideEl.label;
        m1Inside.routerLink = insideEl.routerLink;
        insideEl.shortKey !== ''? this.bindHotKeyService.bindHotKey("menuRoute",insideEl.shortKey, 
        insideEl.label, insideEl.routerLink):"";
        mItemsInside.push(m1Inside);
      });
      m1.items = mItemsInside;
      this.items.push(m1);
    });

  }
  getNavItems(): NavItem[] {
    let navItems: NavItem[] = [];
    //-- Nav Item 1 - FILE
    let n1: NavItem = new NavItem();
    n1.label = "File";
    n1.shortKey = "f";

    let n11: NavItem = new NavItem();
    n11.label = "New";
    n11.shortKey = "n";
    n11.routerLink = "/menu";
    let n12: NavItem = new NavItem();
    n12.label = "Save";
    n12.shortKey = "s";
    n12.routerLink = "/menu";
    n1.navItems = [];
    n1.navItems.push(n11);
    n1.navItems.push(n12);

    //-- Nav Item 2 - FILE
    let n2: NavItem = new NavItem();
    n2.label = "Edit";
    n2.shortKey = "e";

    let n21: NavItem = new NavItem();
    n21.label = "Copy";
    n21.shortKey = "c";
    n21.routerLink = "/search";
    let n22: NavItem = new NavItem();
    n22.label = "Undo";
    n22.shortKey = "";
    n2.navItems = [];
    n2.navItems.push(n21);
    n2.navItems.push(n22);
    navItems.push(n1);
    navItems.push(n2);
    return navItems;
  }

}
