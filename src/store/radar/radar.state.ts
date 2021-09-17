import { StoreModule } from 'redux-auto-actions';

export enum RadarStateLabel {
  STATE = 'radar',
}

export interface RadarState {
  radarData: RadarOptionsType;
  rawBlips: RawBlipType[];
  blips: BlipType[];
  isFiltered: boolean;
  useCaseFilter: string;
  disasterTypeFilter: string;
  techFilter: string | null;
}

export const radarModule = new StoreModule<ActionType, RadarState>(RadarStateLabel.STATE, {
  radarData: {
    title: '',
    width: 0,
    height: 0,
    quadrants: [],
    horizons: [],
    horizonShiftRadius: 0,
    tech: [],
  },
  rawBlips: [],
  blips: [],
  isFiltered: false,
  useCaseFilter: 'all',
  disasterTypeFilter: 'all',
  techFilter: null,
});

export enum ActionType {
  SET_BLIPS = 'RADAR/SET_BLIPS',
  SET_RAW_BLIPS = 'RADAR/SET_RAW_BLIPS',
  SET_RADAR_DATA = 'RADAR/SET_RADAR_DATA',
  SET_IS_FILTER = 'RADAR/SET_IS_FILTER',
  SET_USE_CASE_FILTER = 'RADAR/SET_USE_CASE_FILTER',
  SET_DISASTER_TYPE_FILTER = 'RADAR/SET_DISASTER_TYPE_FILTER',
  SET_TECH_FILTER = 'SET_TECH_FILTER',
  RESET = 'RADAR/RESET',
}
