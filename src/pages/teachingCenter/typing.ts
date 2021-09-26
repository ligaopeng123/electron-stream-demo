
export enum StoreEnum {
    CTM = 'ChangeTeachingMaterials', // 更换教材
}

export type Action = {
    type: StoreEnum;
    value: any;
}