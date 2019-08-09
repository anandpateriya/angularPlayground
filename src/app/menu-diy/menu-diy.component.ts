import { Component, OnInit, HostListener, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-menu-diy',
  templateUrl: './menu-diy.component.html',
  styleUrls: ['./menu-diy.component.scss']
})
export class MenuDiyComponent implements OnInit {

  constructor(private e1:ElementRef, private renderer: Renderer2) { }
  @HostListener('document:keydown.k') onKeyDown() {
    alert("Option 1: Host Listener");
  }

  doSomething(){
    alert("Option 1: Renderer2 Listen");
  }
  ngOnInit() {
 
  }

}
