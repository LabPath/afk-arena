import { Base } from './Base';

export class SignatureItem extends Base {
    public readonly name: string
    public readonly description: string
    public readonly skill: string
    public readonly unlock: string
    public readonly unlock1: string
    public readonly unlock2: string
    public readonly unlock3: string

    public static get(signature: string): Promise<SignatureItem[]> {
        return this.find<SignatureItem>(signature, [
            'name', 'signature.name', 'signature.skill'
        ], 'signature')
    }
}