import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { GSTReturnComponent } from '../../gst-return/gst-return.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { AddEditCustomerComponent } from '../../add-edit-customer/add-edit-customer.component';
import { BarcodeGeneratorComponent } from '../../barcode-generator/barcode-generator.component';
import { HistoryDataComponent } from '../../history-data/history-data.component';
import { PurchaseInvoiceComponent } from '../../purchase-invoice/purchase-invoice.component';
import { SalesInvoiceComponent } from '../../sales-invoice/sales-invoice.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'gst-return',     component: GSTReturnComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'add-edit-customer',  component: AddEditCustomerComponent },
    { path: 'barcode-generator',  component: BarcodeGeneratorComponent },
    { path: 'history-data',  component: HistoryDataComponent },
    { path: 'purchase-invoice',  component: PurchaseInvoiceComponent },
    { path: 'sales-invoice',  component: SalesInvoiceComponent },
];
