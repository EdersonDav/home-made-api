export interface IAddress {
  country_name: string;
  country_acronym: string;
  address_number: number;
  complement?: string;
  street: string;
  township: string;
  zipCode: string;
  city: string;
  latitude: number;
  longitude: number;
}

export interface ICategory {
  name: string;
}

export interface IWeekDaySchedule {
  day: TDaysOfWeek;
  openingHours: string;
  closingHours: string;
}

export type TDaysOfWeek =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday';

export interface IImages {
  url: string;
  description?: string;
  name?: string;
  priority?: boolean;
}
