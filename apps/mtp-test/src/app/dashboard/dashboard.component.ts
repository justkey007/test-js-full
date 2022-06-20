import { CurrencyPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  Component,
  DEFAULT_CURRENCY_CODE,
  Inject,
  LOCALE_ID,
  ViewChild,
} from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { ApexOptions } from 'ng-apexcharts';
import { Observable } from 'rxjs';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'mtp-test-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  public turnoversChartOptions: ApexOptions;

  private currencyPipe = new CurrencyPipe(this.defaultLang, this.currencyCode);

  private get turnovers() {
    return this.dashboardService.turnovers$.getValue();
  }

  constructor(
    private http: HttpClient,
    private dashboardService: DashboardService,
    @Inject(DEFAULT_CURRENCY_CODE) private currencyCode: string,
    @Inject(LOCALE_ID) private defaultLang: string
  ) {
    this.turnoversChartOptions = this.getTurnoversChartOptions();
  }

  // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
  ];

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };

  // Data that gets displayed in the grid
  public rowData$!: Observable<any[]>;

  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  // Example load data from sever
  onGridReady(params: GridReadyEvent) {
    this.rowData$ = this.http.get<any[]>(
      'https://www.ag-grid.com/example-assets/row-data.json'
    );
  }

  // Example of consuming Grid Event
  onCellClicked(e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }

  private getTurnoversChartOptions(): ApexOptions {
    return {
      series: [
        {
          name: "Chiffres d'affaires",
          data: Object.values(this.turnovers),
        },
      ],
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      title: {
        text: 'Turnover by Month',
        align: 'left',
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: Object.keys(this.turnovers),
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: (y) => {
            if (typeof y !== 'undefined') {
              return this.currencyPipe.transform(y);
            }
            return y;
          },
        },
      },
    } as ApexOptions;
  }
}
