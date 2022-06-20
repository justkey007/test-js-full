import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeFr from '@angular/common/locales/fr';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';

registerLocaleData(localeFr);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
