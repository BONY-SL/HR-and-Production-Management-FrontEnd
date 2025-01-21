import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/components/login/login.component';
import { SingupComponent } from './auth/components/singup/singup.component';
import { ResetPasswordComponent } from './auth/components/reset-password/reset-password.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { AdminDashboardComponent } from './module/admin/components/admin-dashboard/admin-dashboard.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CreateUserComponent } from './module/admin/components/create-user/create-user.component';
import { ViewUserComponent } from './module/admin/components/view-user/view-user.component';
import { UserChatComponent } from './module/admin/components/user-chat/user-chat.component';
import { SystemSettingsComponent } from './module/admin/components/system-settings/system-settings.component';
import { ManageProfileComponent } from './module/admin/components/manage-profile/manage-profile.component';
import { DashboardOverviewComponent } from './module/admin/components/dashboard-overview/dashboard-overview.component';
import { ConfirmationDialogComponent } from './common/confirmation-dialog/confirmation-dialog.component';
import { ChatboxComponent } from './common/chatbox/chatbox.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SingupComponent,
    ResetPasswordComponent,
    CreateUserComponent,
    ViewUserComponent,
    UserChatComponent,
    SystemSettingsComponent,
    ManageProfileComponent,
    DashboardOverviewComponent,
    ConfirmationDialogComponent,
    ChatboxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
