import { Hero } from '../../interfaces'

export const Ulmus: Hero = {
    name: 'Ulmus',
    aliases: ['tree'],
    title: 'Aldermarrow',
    skins: [],
    union: 'Wisdom & Hope',
    faction: 'Wilder',
    advantage: 'Graveborn',
    role: 'Tank',
    type: 'Strength',
    class: 'Tank',
    trait: 'Dura\'s Fortitude',
    armor: 'Plate',
    signature: {
        name: 'Totem Scoring',
        description: 'Strange carved designs that glow with ancient power',
        skill: 'Healing Roots',
        unlock: 'Ulmus\' own health recovery effects are increased by 10%',
        unlock1: 'Ulmus\' own health recovery effects are increased by 20%',
        unlock2: 'After using the ability \'Deep Roots\' Ulmus\' health recovery effect is increased by an additional 10%',
        unlock3: 'After using the ability \'Deep Roots\' Ulmus\' health recovery effect is increased by an additional 20%'
    },
    furniture: {
        ability: 'Protection of Nature',
        unlock1: 'Allies close to enemies that are afflicted by Ulmus \'Writhing Roots\' ability are granted the positive effects of his \'Forest\'s Oath\' ability',
        unlock2: 'The value of the shield granted by \'Forest\'s Oath\' is increased by 100%'
    }
}