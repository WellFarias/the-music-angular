import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { InstrumentsModule } from './pages/instruments/instruments.module';

@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    AppRoutingModule,
    CoreModule,
    InstrumentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
