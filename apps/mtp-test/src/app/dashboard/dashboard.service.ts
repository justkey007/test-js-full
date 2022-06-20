import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  turnovers$ = new BehaviorSubject<Record<string, number>>({
    'Juin-2021': 304.87,
    'Juill-2021': 1082.87,
    'Août-2021': 166,
    'Sept-2021': 317.53,
    'Oct-2021': 512.33,
    'Nov-2021': 822,
    'Dec-2021': 1073.95,
    'Janv-2022': 159.87,
    'Févr-2022': 49.9,
    'Mai-2022': 212.33,
    'Juin-2022': 49.9,
  });

  constructor() {}
}
