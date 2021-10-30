import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'login-with-phone',
    loadChildren: () => import('./pages/login-with-phone/login-with-phone.module').then(m => m.LoginWithPhonePageModule)
  },
  {
    path: 'trouble',
    loadChildren: () => import('./pages/trouble/trouble.module').then(m => m.TroublePageModule)
  },
  {
    path: 'login-with-email',
    loadChildren: () => import('./pages/login-with-email/login-with-email.module').then(m => m.LoginWithEmailPageModule)
  },
  {
    path: 'verify',
    loadChildren: () => import('./pages/verify/verify.module').then(m => m.VerifyPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./pages/location/location.module').then(m => m.LocationPageModule)
  },
  {
    path: 'match',
    loadChildren: () => import('./pages/match/match.module').then(m => m.MatchPageModule)
  },
  {
    path: 'chat-list',
    loadChildren: () => import('./pages/chat-list/chat-list.module').then(m => m.ChatListPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsPageModule)
  },
  {
    path: 'inbox',
    loadChildren: () => import('./pages/inbox/inbox.module').then(m => m.InboxPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./pages/edit-profile/edit-profile.module').then(m => m.EditProfilePageModule)
  },
  {
    path: 'add-media',
    loadChildren: () => import('./pages/add-media/add-media.module').then(m => m.AddMediaPageModule)
  },
  {
    path: 'purchase',
    loadChildren: () => import('./pages/purchase/purchase.module').then(m => m.PurchasePageModule)
  },
  {
    path: 'pay',
    loadChildren: () => import('./pages/pay/pay.module').then(m => m.PayPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./pages/info/info.module').then( m => m.InfoPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
