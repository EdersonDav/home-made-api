import { IWeekDaySchedule } from '../../types';

export class WeekDaySchedule {
  private times: IWeekDaySchedule[];
  //TODO get formated schedule

  constructor(times: IWeekDaySchedule[]) {
    this.times = times;
  }

  public get(): IWeekDaySchedule[] {
    return this.times;
  }
}
