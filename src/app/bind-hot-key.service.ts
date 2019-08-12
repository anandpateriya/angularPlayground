import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { HotkeysService, Hotkey } from 'angular2-hotkeys';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BindHotKeyService {
  private renderer: Renderer2;

  constructor(private hkservice: HotkeysService, rendererFactory: RendererFactory2,
    private router: Router) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }
  bindHotKey(type: string, key: string, menuItemName: string, routerLink: string): void {

    let menuItemId: string = "#id_" + menuItemName;
    this.hkservice.add(new Hotkey(key, (event: KeyboardEvent): boolean => {
      if (type === "menuNavigation") {
        let menuBar: Element = document.querySelector("p-menubar");
        let menuItemChildNode: Element = menuBar.querySelector(menuItemId);
        //menuItemChildNode.parentElement.className = menuItemChildNode.parentElement.className+" ui-menuitem-active";
        menuItemChildNode.parentElement.click();
        // menuItemChildNode.parentElement.querySelector("ul").style.zIndex = 
        //(Number(menuItemChildNode.parentElement.querySelector("ul").style.zIndex) + 2).toString();
      } else if (type === "menuRoute") {
        this.router.navigateByUrl(routerLink);
      }
      return false;
    }));
    console.log("Binding HotKey: '" + key + "' to MenuItem: " + menuItemName);

  }
}
