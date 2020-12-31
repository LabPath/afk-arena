import { Hero } from '../../structures/Hero'

export const Queen: Hero = {
    name: 'Queen',
    title: 'Courageous Tactician',
    skins: [],
    union: null,
    faction: 'Dimensional',
    advantage: null,
    role: 'Continuous Damage',
    type: 'Strength',
    class: 'Warrior',
    trait: 'Dura\'s Might',
    armor: 'Plate',
    signature: {
        name: 'Sanction',
        description: 'A replica fist weapon',
        skill: 'Edge of Death',
        unlock: 'Queen is granted a shield which exists for 5 seconds and has a value equal to 25% of her max health every time Johanna is summoned by any of her abilities',
        unlock1: 'Shield has a value equal to 30% of Queen\'s max health',
        unlock2: 'Shield has a value equal to 35% of Queen\'s max health',
        unlock3: 'Queen gains an additional 25% Crit Rating and 30 Crit Amplification points while the shield exists'
    },
    furniture: {
        ability: 'High Morale',
        unlock1: 'When Queen attacks an enemy that is being controlled, herself and nearby allies are healed for 40% of the attack\'s damage value',
        unlock2: 'Queen heals herself and her allies, while also increasing her and her allies\' Attack Ratings by 30% for 3 seconds. This ability cannot be stacked'
    }
}