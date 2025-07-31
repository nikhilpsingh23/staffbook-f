import { User, Calendar, Building, Clock } from 'lucide-react';

export interface FilterOption {
  label: string;
  icon: any;
  value: string;
}

export const filterOptions: FilterOption[] = [
  { label: 'Job role', icon: User, value: 'job-role' },
  { label: 'Posted date', icon: Calendar, value: 'posted-date' },
  { label: 'Work mode', icon: Building, value: 'work-mode' },
  { label: 'Job type', icon: Clock, value: 'job-type' },
]; 