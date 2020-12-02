import { JCALComponentNode, PrettyJCALComponentNode } from './type';

export const prettyJCAL2jcal = (prettyJCAL: PrettyJCALComponentNode): JCALComponentNode => {
  const { name, properties, components } = prettyJCAL;
  return [
    name,
    properties.map((p) => [p.name, p.parameters ?? {}, p.type, p.value]),
    components.map((component) => prettyJCAL2jcal(component)),
  ];
};
