import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from '../components/admin-dashboard/admin-dashboard.component';
import { CreateUserComponent } from '../components/create-user/create-user.component';
import { ViewUserComponent } from '../components/view-user/view-user.component';
import { UserChatComponent } from '../components/user-chat/user-chat.component';
import { SystemSettingsComponent } from '../components/system-settings/system-settings.component';
import { ManageProfileComponent } from '../components/manage-profile/manage-profile.component';
import { DashboardOverviewComponent } from '../components/dashboard-overview/dashboard-overview.component';


const routes: Routes = [
  {
    path: "dashboard-admin", 
    component: AdminDashboardComponent, 
    children: [
      { path: "dashboard-overview", component: DashboardOverviewComponent } ,
      { path: '', redirectTo: 'dashboard-overview', pathMatch: 'full' }, 
      { path: "create-new-user", component: CreateUserComponent },
      { path: "view-user", component: ViewUserComponent },
      { path: "user-chat", component: UserChatComponent },
      { path: "system-setting", component: SystemSettingsComponent },
      { path: "manage-profile", component: ManageProfileComponent },
    ]
  }
];



@NgModule({
  declarations: [
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports:[
    RouterModule
  ]
})
export class AdminModule { }
