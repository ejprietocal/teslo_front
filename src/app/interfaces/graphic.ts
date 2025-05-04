export interface Graphic {
  labels: string[];
  labelDataSet: string;
  data: Data[];
  borderColor: string;
  fill : boolean;
  id : string;
  type: 'line' | 'bar' | 'doughnut' | 'pie' | 'polarArea' | 'bubble';
  color : string;
}

interface Data {
  data : number;
}
