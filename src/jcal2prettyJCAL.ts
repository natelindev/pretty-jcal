import { JCALComponentNode, PrettyJCALComponentNode } from './type';

export const jcal2prettyJCAL = (jcal: JCALComponentNode): PrettyJCALComponentNode => {
  const [key, props, components] = jcal;
  return {
    name: key,
    properties: props.map((p) => ({
      name: p[0],
      parameters: Object.keys(p[1]).length > 0 ? p[1] : undefined,
      type: p[2],
      value: p[3],
    })),
    components: components.map((component: JCALComponentNode) => jcal2prettyJCAL(component)),
  };
};
