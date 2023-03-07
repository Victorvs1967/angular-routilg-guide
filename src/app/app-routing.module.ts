import { AboutComponent } from './components/about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { NewsComponent } from './components/news/news.component';

const routes: Routes = [
  // { path: '', component: AboutComponent },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'news', component: NewsComponent },

  { path: '', outlet: 'secondary', component: AboutComponent },
  { path: 'about', outlet: 'secondary', component: AboutComponent },
  { path: 'home', outlet: 'secondary', component: HomeComponent },
  { path: 'contacts', outlet: 'secondary', component: ContactsComponent },
  { path: 'news', outlet: 'secondary', component: NewsComponent },

  { path: 'orders',
    loadChildren: () => import('./modules/orders/orders.module').then(m => m.OrdersModule) },
  { path: 'customers',
    loadChildren: () => import('./modules/customers/customers.module').then(m => m.CustomersModule) },
  { path: '', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
