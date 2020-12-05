import { Hero } from '../../structures/Hero'

export const Nemora: Hero = {
    name: 'Nemora',
    title: 'Nature\'s Heart',
    skins: [],
    union: 'Defenders of the Forest',
    faction: 'Wilder',
    advantage: 'Graveborn',
    role: 'Regen',
    type: 'Intelligence',
    class: 'Support',
    trait: 'Dura\'s Sustenance',
    armor: 'Padded',
    signature: {
        name: 'The Blossom Spear',
        description: 'A sharp spear that can cast natural magic. Ideal for any defender of the forest',
        skill: 'Nature\'s Touch',
        unlock: 'Normal attacks heal Nemora\'s weakest ally for 60% of her own attack rating',
        unlock1: 'Healing effect is raised by 75% if a critical strike occurs when using a normal attack',
        unlock2: 'Health recovery increased by up to 90% of Attack Rating',
        unlock3: 'Health recovery increased by up to 120% of Attack Rating'
    },
    furniture: {
        ability: 'Winds of Harmony',
        unlock1: 'When Nemora\'s health falls below 60 % for the first time, she will use her \'Life Force\' ability on herself',
        unlock2: 'The first time an enemy gets close to Nemora, she activates the effects of her \'Beguile\' ability against all nearby enemies'
    }
}