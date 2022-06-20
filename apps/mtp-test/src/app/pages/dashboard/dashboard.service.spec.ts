import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { DashboardService } from '@mtp-test/client/app/services/dashboard.service';

describe('DashboardService', () => {
  let service: DashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(DashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
