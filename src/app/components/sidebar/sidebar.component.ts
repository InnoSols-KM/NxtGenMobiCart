import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'design_app', class: '' },
    { path: '/history-data', title: 'History Data',  icon:'education_atom', class: '' },
    { path: '/add-edit-customer', title: 'Add/Edit Customer',  icon:'location_map-big', class: '' },
    { path: '/sales-invoice', title: 'Sales Invoice',  icon:'ui-1_bell-53', class: '' },

    { path: '/barcode-generator', title: 'Barcode Generator',  icon:'users_single-02', class: '' },
    { path: '/purchase-invoice', title: 'Purchase Invoice',  icon:'design_bullet-list-67', class: '' },
    { path: '/gst-return', title: 'GST Return',  icon:'text_caps-small', class: '' },
    { path: '/user-profile', title: 'GST Purchase',  icon:'users_single-02', class: '' },
    
    { path: '/table-list', title: 'GST Edit Purchase',  icon:'design_bullet-list-67', class: '' },
    { path: '/gst-return', title: 'Preference',  icon:'text_caps-small', class: '' },
    { path: '/gst-return', title: 'Offers',  icon:'text_caps-small', class: '' },
    { path: '/gst-return', title: 'Logout',  icon:'text_caps-small', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}
