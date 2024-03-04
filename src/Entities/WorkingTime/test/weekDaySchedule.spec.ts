import { WeekDaySchedule } from '..';
import { IWeekDaySchedule } from '../../../types';

const schedule: IWeekDaySchedule[] = [
  { day: 'monday', openingHours: '09:00', closingHours: '21:30' },
  { day: 'tuesday', openingHours: '09:00', closingHours: '21:30' },
  { day: 'wednesday', openingHours: '09:00', closingHours: '21:30' },
  { day: 'thursday', openingHours: '09:00', closingHours: '21:30' },
  { day: 'friday', openingHours: '09:00', closingHours: '21:30' },
  { day: 'saturday', openingHours: '09:00', closingHours: '21:30' },
  { day: 'sunday', openingHours: '09:00', closingHours: '21:30' },
];

describe('WeekDaySchedule Entity', () => {
  it('should be able to create a new working time', () => {
    const workingTime = new WeekDaySchedule(schedule);
    expect(workingTime).toBeTruthy();
  });

  it('should be able to create a new working time', () => {
    const workingTime = new WeekDaySchedule(schedule);
    expect(workingTime.get()).toEqual(schedule);
  });

  it('should be verify its open or closed', () => {
    const day = 'wednesday';
    const openValue = '19:00';
    const closedValue = '22:00';
    const workingTime = new WeekDaySchedule(schedule);

    expect(workingTime.isOpen(openValue, day)).toBeTruthy();
    expect(workingTime.isOpen(closedValue, day)).toBeFalsy();
  });
});
