export type JCALNode = [key: string, props: JCALValueNode[], children: JCALNode[]];

export type JCALValueNode = [key: string, props: { [key: string]: any }, type: string, value: any];
