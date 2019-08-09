import { Component, OnInit, HostListener, Renderer2 } from '@angular/core';
import { HotkeysService, Hotkey } from 'angular2-hotkeys';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [HotkeysService]
})
export class MenuComponent implements OnInit {


  constructor(private hkservice: HotkeysService, private renderer: Renderer2) {
    this.hkservice.add(new Hotkey('g', (event: KeyboardEvent): boolean => {

      alert("Option 2: ANGULAR2-HOTKEYS");
      //console.log('Typed hotkey');
      //const element = this.renderer.selectRootElement('.dropdown-menu');
      //element.style.display = "block";
      //document.getElementsByClassName("dropdown-menu")[0].style.display = "block"
      //setTimeout(() => element.focus(), 0);
      //alert("adafasdf");
      return false; // Prevent bubbling
  }));
   }
  ngOnInit() {
      
  }

}
