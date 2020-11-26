import { Hero } from '../../interfaces'

export const Lorsan: Hero = {
    name: 'Lorsan',
    title: 'Wind Whisperer',
    skins: [],
    union: null,
    faction: 'Wilder',
    advantage: 'Graveborn',
    role: 'Area of Effect',
    type: 'Intelligence',
    class: 'Mage',
    trait: 'Dura\'s Sorcery',
    armor: 'Padded',
    signature: {
        name: 'Wind Keeper',
        description: 'A staff gifted to Lorsan by the wise old sage, Arden. Although simple and unadorned, this staff is abound with a great natural power',
        skill: 'Fate',
        unlock: 'When an enemy linked by the \'Gale Force\' ability dies, Lorsan will receive a permanent Haste increase until the end of the battle',
        unlock1: 'When an enemy linked by the \'Gale Force\' ability dies, Lorsan will receive a permanent 90 Haste increase until the end of the battle',
        unlock2: 'When an enemy linked by the \'Gale Force\' ability dies, Lorsan will be immune to all damage for 4 seconds',
        unlock3: 'When an enemy linked by the \'Gale Force\' ability is afflicted by negative spells or effects, the other linked enemy will also suffer the same fate'
    },
    furniture: {
        ability: 'Wind Dance',
        unlock1: 'Lorsan grants an ally with 30 additional Dodge points when their Haste exceeds 50 points',
        unlock2: 'Lorsan grants an ally with 60 additional Dodge points when their Haste exceeds 50 points'
    }
}