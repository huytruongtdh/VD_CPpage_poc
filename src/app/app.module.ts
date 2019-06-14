import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ControlPointPageComponent } from './control-points/control-point-page/control-point-page.component';
import { SubControlPointDirective } from './_directives/sub-control-point.directive';
import { SubCallsheetComponent } from './control-points/sub-callsheet/sub-callsheet.component';
import { SubPumpScheduleComponent } from './control-points/sub-pump-schedule/sub-pump-schedule.component';
import { SubPumpHandoverComponent } from './control-points/sub-pump-handover/sub-pump-handover.component';
import { SubIcemRealtimeComponent } from './control-points/sub-icem-realtime/sub-icem-realtime.component';
import { SubIcemDesignComponent } from './control-points/sub-icem-design/sub-icem-design.component';
import { SubCdiComponent } from './control-points/sub-cdi/sub-cdi.component';
import { SubJobHeaderComponent } from './control-points/sub-job-header/sub-job-header.component';
import { SubNoteComponent } from './control-points/sub-note/sub-note.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SubControlPointDirective,
    AppComponent,
    HomeComponent,
    ControlPointPageComponent,
    SubCallsheetComponent,
    SubPumpScheduleComponent,
    SubPumpHandoverComponent,
    SubIcemRealtimeComponent,
    SubIcemDesignComponent,
    SubCdiComponent,
    SubJobHeaderComponent,
    SubNoteComponent,
  ],
  entryComponents: [
    SubCallsheetComponent,
    SubPumpScheduleComponent,
    SubPumpHandoverComponent,
    SubIcemRealtimeComponent,
    SubIcemDesignComponent,
    SubCdiComponent,
    SubJobHeaderComponent,
    SubNoteComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'control-points/:id', component: ControlPointPageComponent },
    ], { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
