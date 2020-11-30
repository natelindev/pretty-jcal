import { JCALComponentNode, PrettyJCALComponentNode } from './type';

const isMultiNode = (
  args: JCALComponentNode | JCALComponentNode[]
): args is JCALComponentNode[] => {
  return args.length > 0 ? Array.isArray(args[0]) : true;
};

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
    components: isMultiNode(components)
      ? components.map((component: JCALComponentNode) => jcal2prettyJCAL(component))
      : jcal2prettyJCAL(components),
  };
};
