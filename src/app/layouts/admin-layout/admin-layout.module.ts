import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { GSTReturnComponent } from '../../gst-return/gst-return.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { AddEditCustomerComponent } from '../../add-edit-customer/add-edit-customer.component';
import { BarcodeGeneratorComponent } from '../../barcode-generator/barcode-generator.component';
import { HistoryDataComponent } from '../../history-data/history-data.component';
import { PurchaseInvoiceComponent } from '../../purchase-invoice/purchase-invoice.component';
import { SalesInvoiceComponent } from '../../sales-invoice/sales-invoice.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
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
    UserProfileComponent,
    TableListComponent,
    GSTReturnComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    AddEditCustomerComponent,
    BarcodeGeneratorComponent,
    HistoryDataComponent,
    PurchaseInvoiceComponent,
    SalesInvoiceComponent,
  ]
})

export class AdminLayoutModule {}
