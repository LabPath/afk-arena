import { Hero } from '../../interfaces'

export const Solise: Hero = {
    name: 'Solise',
    title: 'The Floral Wonder',
    faction: 'Wilder',
    advantage: 'Graveborn',
    role: 'Control',
    type: 'Intelligence',
    class: 'Mage',
    receiving: 'Dura\'s Sorcery',
    armor: 'Padded',
    signature: {
        item: 'Floral Cloak of Hope',
        description: 'Woven together with a magical material, this cloak is more powerful than it appears. Wearing it allows one to forge a powerful connection with the forest\'s flora',
        skill: 'Flower Power',
        default: 'The Floral Specter will attack 2 enemies simultaneously',
        unlock1: 'The Floral Specter gains an additional 20% health',
        unlock2: 'The Floral Specter gains an additional 50% health',
        unlock3: 'The Floral Specter will attack 3 enemies simultaneously'
    },
    furniture: {
        ability: 'Flora Rejuvenation',
        unlock1: 'When the Floral Specter is defated or its duration on the battlefield expires, it transforms itself into a spirit form that becomes impervious to all attacks for 8 seconds. When \'Blossom Fall\' is occurring, the spirit is able to attack enemies, however, its damage output is decreased by 15%',
        unlock2: 'While Solise is alive, if an allied hero that is positioned on the frontline is defeated, a Floral Specter will appear at that allied hero\'s position'
    }
}