export const APP_NAME = 'Quazar Edu';
export const TELEMETRY_ENDPOINT = '/api/telemetry';

export const EVENTS = {
  SIM_START: 'sim_start',
  SIM_CHANGE_ELEMENT: 'sim_change_element',
  SIM_SET_PROTONS: 'sim_set_protons',
  SIM_SET_NEUTRONS: 'sim_set_neutrons',
  SIM_SET_ELECTRONS: 'sim_set_electrons',
  THEME_TOGGLE: 'theme_toggle',
} as const;

export type EventKey = keyof typeof EVENTS;
