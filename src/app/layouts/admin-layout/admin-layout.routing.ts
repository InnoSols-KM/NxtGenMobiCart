import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { GSTPurchaseComponent } from '../../gst-purchase/gst-purchase.component';
import { GSTEditPurchaseComponent } from '../../gst-edit-purchase/gst-edit-purchase.component';
import { GSTReturnComponent } from '../../gst-return/gst-return.component';
import { PreferenceComponent } from '../../preference/preference.component';
import { OffersComponent } from '../../offers/offers.component';
import { LogoutComponent } from '../../logout/logout.component';
import { AddEditCustomerComponent } from '../../add-edit-customer/add-edit-customer.component';
import { BarcodeGeneratorComponent } from '../../barcode-generator/barcode-generator.component';
import { HistoryDataComponent } from '../../history-data/history-data.component';
import { PurchaseInvoiceComponent } from '../../purchase-invoice/purchase-invoice.component';
import { SalesInvoiceComponent } from '../../sales-invoice/sales-invoice.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'gst-purchase',   component: GSTPurchaseComponent },
    { path: 'gst-edit-purchase',     component: GSTEditPurchaseComponent },
    { path: 'gst-return',     component: GSTReturnComponent },
    { path: 'preference',          component: PreferenceComponent },
    { path: 'offers',           component: OffersComponent },
    { path: 'logout',  component: LogoutComponent },
    { path: 'add-edit-customer',  component: AddEditCustomerComponent },
    { path: 'barcode-generator',  component: BarcodeGeneratorComponent },
    { path: 'history-data',  component: HistoryDataComponent },
    { path: 'purchase-invoice',  component: PurchaseInvoiceComponent },
    { path: 'sales-invoice',  component: SalesInvoiceComponent },
];
