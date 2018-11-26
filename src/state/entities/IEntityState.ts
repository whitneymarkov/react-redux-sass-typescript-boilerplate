export interface IMinimalEntity {
    id: string | number;
}

export interface IEntityState<T extends IMinimalEntity> {
    [id: string]: T;
    [id: number]: T;
}

export const isIMinimalEntity = (entity: any): entity is IMinimalEntity => {
    return !!entity && typeof entity === 'object' && entity.id !== null && entity.id !== undefined;
};

export const isIMinimalEntityArray = (entities: any): entities is IMinimalEntity[] => {
    return !!entities && Array.isArray(entities) && entities.length > 0 && entities[0].id !== null && entities[0].id  !== undefined;
};
