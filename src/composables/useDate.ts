import { DateTime } from "luxon";

export interface DateInfo {
  weekNumber: number;
  formattedDate: string;
}

export function useDate() {
  const getCurrentDateInfo = (): DateInfo => {
    const now = DateTime.local();
    return {
      weekNumber: now.weekNumber,
      formattedDate: now.toFormat("dd.MM.yyyy"),
    };
  };

  return {
    getCurrentDateInfo,
  };
}
