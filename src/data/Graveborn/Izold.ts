import { Hero } from '../../interfaces'

export const Izold: Hero = {
    name: 'Izold',
    title: 'The Forgotten Champion',
    skins: [],
    union: null,
    faction: 'Graveborn',
    advantage: 'Lightbearer',
    role: 'Tank',
    type: 'Strength',
    class: 'Warrior',
    trait: 'Dura\'s Might',
    armor: 'Plate',
    signature: {
        name: 'Doomstriker Syringe',
        description: 'A weapon built with the prime purpose of impaling its victims, it contains a powerful chemical agent that is capable of turning the gentlest of souls into unbridled killing machines',
        skill: 'Lethal Dose',
        unlock: 'When Izold uses \'Toxic Transfusion\' he will also receive the effects of his \'Hypodermic Healing\' ability',
        unlock1: 'The damage Izold receives is reduced by 30% for 15 seconds when any enemies are slain while Izold is using his \'Toxic Transfusion\' ability',
        unlock2: 'The damage Izold receives is reduced by 50% for 15 seconds when any enemies are slain while Izold is using his \'Toxic Transfusion\' ability',
        unlock3: 'Izold cannot be controlled while using his \'Toxic Transfusion\' ability'
    },
    furniture: {
        ability: 'Exertion',
        unlock1: 'Izold\'s Attack Rating is increased by 1% and his attack frequency increased by 3% until the end of the battle every time he loses 1% of his max health',
        unlock2: 'The effects of the ability \'Hypodermic Healing\' become permanent after this ability has been stacked 45 times and does not need to be manually activated again'
    }
}