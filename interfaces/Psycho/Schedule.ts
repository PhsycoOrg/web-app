export interface ProfessionalConfig {
    session_fee: number,
    time_intervals: string,
    time_between_appointments: number | null,
    automatic_confirmation: false,
    confirmation_advance_notice: number,
    max_daily_appointments: number,
    schedule: ProfessionalSchedule,
    unavailable_days: string[],
}

export interface ProfessionalSchedule {
    monday: ScheduleDay,
    tuesday: ScheduleDay,
    wednesday: ScheduleDay,
    thursday: ScheduleDay,
    friday: ScheduleDay,
    saturday: ScheduleDay,
    sunday: ScheduleDay,
}

export interface ScheduleDay {
    name: string,
    available: boolean,
    time_ranges: ScheduleTimeRanges[]
}

export interface ScheduleTimeRanges {
    start_time: string,
    end_time: string
}