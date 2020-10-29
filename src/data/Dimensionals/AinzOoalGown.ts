import { Hero } from '../../interfaces'

export const AinzOoalGown: Hero = {
    name: 'Ainz Ooal Gown',
    aliases: ['ainz'],
    title: 'Magic Caster',
    faction: 'Dimensional',
    advantage: 'None',
    role: 'Continuous Damage',
    type: 'Intelligence',
    class: 'Mage',
    receiving: 'Dura\'s Sorcery',
    armor: 'Padded',
    signature: {
        item: 'Staff of Ainz Ooal Gown',
        description: 'The Great Tomb of Nazaricks inhabitants created and dedicated this powerful relic staff to their beloved Overlord, Ainz Ooal Gown. Seven serpents coil around the magic staff, their expressions pained as they struggle to contain the power of the gemstones in their mouths, each one concealing world quality artifact power. Not only does the staff represent the ultimate power of Nazaricks\' ruler, but also holds within it the most precious memories of Ainz Ooal Gown and his Guildmates',
        skill: 'Cash Items',
        default: 'The chanting phase of the Ultimate ability "Fallen Down" is omitted the first time it is used',
        unlock1: 'The chanting phase of the Ultimate ability "Fallen Down" is omitted the first 2 times it is used',
        unlock2: 'The chanting phase of the Ultimate ability "Fallen Down" is omitted the first 3 times it is used',
        unlock3: 'The Ultimate ability "Fallen Down" deals an extra 30% damage'
    },
    furniture: {
        ability: 'Maxmize Magic',
        unlock1: 'Every 8 seconds during battle, the damage and debuff duration of the "Magic Caster" ability are increased by 200%',
        unlock2: 'The effects of the ability "The Goal of All Life Is Death" will take effect 15 seconds into battle'
    }
}