import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StorefrontInstrumentsComponent } from './pages/instruments/storefront-instruments/storefront-instruments.component';
import { InstrumentDetailComponent } from './pages/instruments/instrument-detail/instrument-detail.component';
import { InstrumentRegisterComponent } from './pages/instruments/instrument-register/instrument-register.component';


const routes: Routes = [
  { path: 'store', component: StorefrontInstrumentsComponent },
  { path: 'register', component: InstrumentRegisterComponent },
  { path: 'store/:id', component: InstrumentDetailComponent },
]

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
