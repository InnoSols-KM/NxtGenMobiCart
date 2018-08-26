import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
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
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ChartsModule,
    NgbModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    DashboardComponent,
    GSTPurchaseComponent,
    GSTEditPurchaseComponent,
    GSTReturnComponent,
    PreferenceComponent,
    OffersComponent,
    LogoutComponent,
    AddEditCustomerComponent,
    BarcodeGeneratorComponent,
    HistoryDataComponent,
    PurchaseInvoiceComponent,
    SalesInvoiceComponent,
  ]
})

export class AdminLayoutModule {}
