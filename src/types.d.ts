type HistoryItem = {
  start: Date;
  end: Date | null;
  quadrant: string;
  position: number;
  positionAngle: number;
  direction: number;
  directionAngle: number;
};

type QuadsType = { quadrant: number; horizon: number; label: string; outerRadius: number; innerRadius: number };

type BaseCSVType = Record<string, string>;

type RawCSVItem = {
  Title: string;
  Summary: string;
  Description: string;
  'Level of implementation': string;
  Quadrant: string;
  Data: string;
  Description: string;
  Developer: string;
  Implementer: string;
  'Level of implementation': string;
  Organization: string;
  Origin: string;
  Partner: string;
  Quadrant: string;
  'SDG goal': string;
  Source: string;
  Summary: string;
  Technology: string;
  Title: string;
  'Use case': string;
};
interface RawBlipType extends BaseCSVType, RawCSVItem {}

interface BlipType extends RawCSVItem {
  id: string;
  quadrantIndex: number;
  x: number;
  y: number;
}

interface SelectableItem {
  uuid: string;
  name: string;
}

interface TechItemType {
  uuid: string;
  color: string;
  type: string;
}

interface RadarOptionsType {
  title: string;
  width?: number;
  height?: number;
  quadrants: string[];
  horizons: string[];
  horizonShiftRadius: number;
  tech: TechItemType[];
}

type D3SvgEl = d3.Selection<SVGSVGElement, unknown, null, undefined>;
type D3SvgGEL = d3.Selection<SVGGElement, unknown, null, undefined>;