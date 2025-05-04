
export interface Graphic {
  titleGeneral: string;
  xTitle: string;
  yTitle: string;
  data: Data[];
  colorScheme: string[];
}

interface Data {
  xValue: number | string;
  yValue: number | string;

  label?: string;
  color?: string;
  group?: string;
}
