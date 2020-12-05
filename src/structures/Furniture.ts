import { Base } from './Base';

export class Furniture extends Base {
    public readonly ability: string
    public readonly unlock1: string
    public readonly unlock2: string

    public static get(furniture: string): Promise<Furniture[]> {
        return this.find<Furniture>(furniture, ['name', 'furniture.ability'], 'furniture')
    }
}