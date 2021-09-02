import { InstrumentDetailComponent } from './views/instrument-detail/instrument-detail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InstrumentsCardsComponent } from './components/instruments-cards/instruments-cards.component';
import { RegisterComponent } from './views/register/register.component';
import { CartComponent } from './views/cart/cart.component';


const routes: Routes = [
  { path: 'store', component: InstrumentsCardsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'store/:id', component: InstrumentDetailComponent },
  { path: 'cart', component: CartComponent }
]

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
