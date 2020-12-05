import { Hero } from '../../structures/Hero'

export const Oden: Hero = {
    name: 'Oden',
    title: 'Bitterblight',
    skins: [],
    union: null,
    faction: 'Graveborn',
    advantage: 'Lightbearer',
    role: 'Area of Effect',
    type: 'Intelligence',
    class: 'Mage',
    trait: 'Dura\'s Sorcery',
    armor: 'Padded',
    signature: {
        name: 'Void Gazer',
        description: 'The key to the void. This unearthly object is capable of opening doors to dark, unknown planes of existence',
        skill: 'Vengeful Fury',
        unlock: 'Each time an enemy uses their ultimate ability against Oden, Oden will retaliate against them with his \'Void Lightning\' ability. Damage dealt is equal to 60% of the original \'Void Lightning\' ability\'s damage output',
        unlock1: 'Damage dealt is equal to 90% of the original \'Void Lightning\' ability\'s damage output',
        unlock2: 'Oden retaliates with \'Void Lightning\' even if he is slain by the enemy\'s ultimate abilty',
        unlock3: 'Damage dealt is equal to 120% of the original \'Void Lightning\' ability\'s damage output'
    },
    furniture: {
        ability: 'Cursed Descent',
        unlock1: 'Every time an enemy uses ultimate ability, Oden will have his attack rating increased by 3% and damage received reduced by 3% until battle ends. The ability effect can be stacked up to 15 times. Once the skill has been stacked 12 times, Oden becomes immune to control abilities',
        unlock2: 'This effect will apply to another ally hero with the highest combat rating at the same time'
    }
}