import { Hero } from '../../structures/Hero'

export const Flora: Hero = {
    name: 'Flora',
    title: 'The Serene Promise',
    skins: [],
    union: null,
    faction: 'Celestial',
    advantage: 'Hypogean',
    role: 'Continuous Damage',
    type: 'Intelligence',
    class: 'Mage',
    trait: 'Dura\'s Sorcery',
    armor: 'Padded',
    signature: {
        name: 'The Serene Branch',
        description: 'A magical broomstick that was crafted by the celestial craftsman Ansiel out of a special and rare wood. This unique broomstick is able to bring flowers to blossom and can fly to lofty heights if needed',
        skill: 'Diminish',
        unlock: 'Reduces an enemy\'s Haste by 20 points for 4 seconds when the ability \'Swoop\' deals Critical Damage to an enemy',
        unlock1: 'Reduces an enemy\'s Haste by 35 points for 4 seconds when the ability \'Swoop\' deals Critical Damage to an enemy',
        unlock2: 'When Flora\'s health is above 90%, the cooldown time of her ability \'Swoop\' is reduced by 250%',
        unlock3: 'Reduces an enemy\'s Haste by 50 points for 5 seconds when the ability \'Swoop\' deals Critical Damage to an enemy'
    },
    furniture: {
        ability: 'Floral Projection',
        unlock1: 'Enemies within range of the ability \'Sea of Flowers\' ability lose 12 Haste points and allies within range of the \'Sea of Flowers\' gain 6 Haste points',
        unlock2: 'Enemies within range of the ability \'Sea of Flowers\' ability lose 12 Haste points and allies within range of the \'Sea of Flowers\' gain 24 Haste points'
    }
}