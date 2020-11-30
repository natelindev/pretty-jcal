export type JCALComponentNode = [
  name: string,
  properties: JCALPropertyNode[],
  components: JCALComponentNode | JCALComponentNode[]
];

export type JCALPropertyNode = [
  name: string,
  parameters: { [key: string]: any },
  type: string,
  value: any
];

export type PrettyJCALComponentNode = {
  name: string;
  properties: PrettyJCALPropertyNode[];
  components: PrettyJCALComponentNode | PrettyJCALComponentNode[];
};

export type PrettyJCALPropertyNode = {
  name?: string;
  parameters?: any;
  type?: string;
  value?: any;
};
