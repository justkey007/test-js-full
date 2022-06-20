import { CurrencyPipe } from '@angular/common';
import {
  Component,
  DEFAULT_CURRENCY_CODE,
  Inject,
  LOCALE_ID,
} from '@angular/core';
import { ApexOptions } from 'ng-apexcharts';
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
    private dashboardService: DashboardService,
    @Inject(DEFAULT_CURRENCY_CODE) private currencyCode: string,
    @Inject(LOCALE_ID) private defaultLang: string
  ) {
    this.turnoversChartOptions = this.getTurnoversChartOptions();
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
