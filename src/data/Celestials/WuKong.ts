import { Hero } from '../../interfaces';

export const WuKong: Hero = {
    name: 'Wu Kong',
    aliases: ['monkey'],
    title: 'The Monkey King',
    faction: 'Celestial',
    advantage: 'Hypogean',
    role: 'Continuous Damage',
    type: 'Strength',
    class: 'Warrior',
    receiving: 'Dura\'s Might',
    armor: 'Plate',
    signature: {
        item: 'The Golden Rod',
        description: 'A deceptively heavy and powerful rod that can grow on command. It is said to be capable of injuring and killing almost all beings',
        skill: 'Golden Barrier',
        default: 'Wu Kong gains a 2-layer protective barrier at the start of battles. If Wu Kong is dealt damage that exceeds 10% of his max health he will lose 1 layer and mitigate the damage received',
        unlock1: 'Gains a 4-layer protective barrier at the start of battles',
        unlock2: 'Wu Kong\'s clones now possess a 1-layer protective barrier',
        unlock3: 'Regains 3 protective barriers each time his ultimate ability is used'
    },
    furniture: {
        ability: 'Warrior\'s Meditation',
        unlock1: 'Wu Kong recovers 60 energy points per second when he is absent from the battlefield as a result of his \'Cloud Clones\' ability. This ability no longer regenerates energy when Wu Kong\'s energy reaches or exceeds 600 points',
        unlock2: 'Wu Kong recovers 3% of his max health per second while absent from the battlefield as a result of his \'Cloud Clones\' ability'
    }
}