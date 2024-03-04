import * as moment from 'moment';
import { IWeekDaySchedule, TDaysOfWeek } from '../../types';

export class WeekDaySchedule {
  private schedule: IWeekDaySchedule[];

  constructor(schedule: IWeekDaySchedule[]) {
    this.schedule = schedule;
  }

  public get(): IWeekDaySchedule[] {
    return this.schedule;
  }

  public isOpen(time: string, day: TDaysOfWeek): boolean {
    const daySelected = this.schedule.find((d) => d.day === day);

    if (!daySelected) {
      return false;
    }

    const momentTime = moment(time, 'h:mm');
    const momentOpen = moment(daySelected.openingHours, 'h:mm');
    const momentClose = moment(daySelected.closingHours, 'h:mm');
    return momentTime.isBetween(momentOpen, momentClose);
  }
}
