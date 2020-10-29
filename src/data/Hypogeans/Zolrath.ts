import { Hero } from '../../interfaces'

export const Zolrath: Hero = {
    name: 'Zolrath',
    title: 'Voidbinder',
    faction: 'Hypogean',
    advantage: 'Celestial',
    role: 'Assassin',
    type: 'Agility',
    class: 'Warrior',
    receiving: 'Dura\'s Might',
    armor: 'Leather',
    signature: {
        item: 'Hourglass of Time',
        description: 'An hourglass that has the ability to change the flow of time, allowing for its holder to go back or forth in time as they please. This hourglass is said to be the embodiment of Zolrath\'s wretched soul',
        skill: 'Prey',
        default: 'Damage dealt to enemies with a lower health percentage than Zolrath is increased by 10%',
        unlock1: 'Damage dealt to enemies with a lower health percentage than Zolrath is increased by 25%',
        unlock2: 'Damage dealt to enemies with a lower health percentage than Zolrath is increased by 40%',
        unlock3: 'Damage ignores defense rating and damage immunity effect of enemies that have less than 40% of their max health'
    },
    furniture: {
        ability: 'Postponement',
        unlock1: 'Zolrath delays his enemies\' entrance onto the battlefield by 0.75 second(s) and the time prerequisite for his ability \'Annihilate\' is reduced by 3.75 seconds when this ability is used',
        unlock2: 'The frequency of Zolrath\'s Normal Attacks are increased by 50% after using the ability \'Annihilate\' for a total of 65 seconds'
    }
}