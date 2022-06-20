import {
  AfterViewInit,
  Component,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { IOrder } from '@mtp-test/api-interfaces';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridReadyEvent, NewValueParams } from 'ag-grid-community';
import { OrdersService } from 'apps/mtp-test/src/app/services/orders.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'mtp-test-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.scss'],
})
export class OrdersTableComponent implements AfterViewInit {
  @Output() updated = new EventEmitter<void>();

  constructor(private ordersService: OrdersService) {}

  public columnDefs: ColDef[] = [
    { field: 'id', editable: false, headerName: 'ID' },

    { field: 'customer', headerName: 'Nom et prénoms du client' },
    {
      field: 'orderTime',
      headerName: 'Date de la commande',
      valueFormatter: (params) => {
        return new Date(params.value).toLocaleDateString();
      },
    },
    {
      field: 'amount',
      headerName: 'Montant TTC',
      editable: true,
      cellClass: 'number-cell',
      onCellValueChanged: this.onAmountValueChanged.bind(this),
      singleClickEdit: true,
    },
  ];

  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  public rowData$!: Observable<IOrder[]>;

  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  ngAfterViewInit(): void {
    this.agGrid.api.sizeColumnsToFit();
  }

  onGridReady(params: GridReadyEvent) {
    this.rowData$ = this.ordersService.getOrders();
  }

  onAmountValueChanged(params: NewValueParams): void {
    const order = params.data as IOrder;
    this.ordersService
      .updateOrder({ id: order.id, amount: Number(params.newValue) })
      .subscribe(() => {
        this.updated.emit();
      });
  }
}
