import { JCALNode } from './type';

export const jcal2prettyJSON = (jcal: JCALNode): any => {
  const [key, props, children] = jcal;
  return {
    [key]: {
      ...props.reduce(
        (prev, curr) => ({ ...prev, [curr[0]]: { ...curr[1] }, type: curr[2], value: curr[3] }),
        {}
      ),
    },
    children: children.map((child) => jcal2prettyJSON(child)),
  };
};
