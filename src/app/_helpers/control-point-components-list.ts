import { SubCallsheetComponent } from '../control-points/sub-callsheet/sub-callsheet.component';
import { SubJobHeaderComponent } from '../control-points/sub-job-header/sub-job-header.component';
import { SubPumpScheduleComponent } from '../control-points/sub-pump-schedule/sub-pump-schedule.component';
import { SubIcemDesignComponent } from '../control-points/sub-icem-design/sub-icem-design.component';
import { SubIcemRealtimeComponent } from '../control-points/sub-icem-realtime/sub-icem-realtime.component';
import { SubNoteComponent } from '../control-points/sub-note/sub-note.component';

export const ControlPointList = {
  controlPoint1: {
    title: 'Control Point 1',
    subComponents: [
      { component: SubJobHeaderComponent, data: { title: 'Job Header' } },
      { component: SubCallsheetComponent, data: { title: 'Call Sheet' } },
      { component: SubNoteComponent, data: { title: 'CP Note: Other Note' } },
    ]
  },
  controlPoint2: {
    title: 'Control Point 2',
    subComponents: [
      { component: SubJobHeaderComponent, data: { title: 'Job Header' } },
      { component: SubCallsheetComponent, data: { title: 'Call Sheet' } },
      { component: SubIcemRealtimeComponent, data: { title: 'iCem Realtime' } },
      { component: SubPumpScheduleComponent, data: { title: 'Pump Schedule' } },
      { component: SubNoteComponent, data: { title: 'CP Note: Specification Note' } },
    ]
  },
  controlPoint3: {
    title: 'Control Point 3',
    subComponents: [
      { component: SubJobHeaderComponent, data: { title: 'Job Header' } },
      { component: SubPumpScheduleComponent, data: { title: 'Pump Schedule' } },
    ]
  },
  controlPoint4: {
    title: 'Control Point 4',
    subComponents: [
      { component: SubJobHeaderComponent, data: { title: 'Job Header' } },
      { component: SubIcemDesignComponent, data: { title: 'iCem Design' } },
      { component: SubNoteComponent, data: { title: 'CP Note: Addtional Note' } },
    ]
  },
};

export function GetControlPointMetadata(cpointId) {
  return ControlPointList[`controlPoint${cpointId}`];
}
