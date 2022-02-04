import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tabMenuItems = [
    {label: 'Overview', icon: 'pi pi-fw pi-home'},
    {label: 'Members', icon: 'pi pi-fw pi-users'},
    {label: 'Sales', icon: 'pi pi-fw pi-shopping-cart'},
    {label: 'Profile', icon: 'pi pi-fw pi-user'},
    {label: 'Settings', icon: 'pi pi-fw pi-cog'}
];

}
