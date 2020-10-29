import { Hero } from '../../interfaces'

export const Antandra: Hero = {
    name: 'Antandra',
    title: 'Desert Fury',
    faction: 'Mauler',
    advantage: 'Wilder',
    role: 'Tank',
    type: 'Agility',
    class: 'Warrior',
    receiving: 'Dura\'s Might',
    armor: 'Leather',
    signature: {
        item: 'Dances-in-Blood',
        description: 'Ideal arms for a lethal mix of flurried offense and lightning quick defense',
        skill: 'Unconquerable',
        default: 'When Antandra\'s health falls below 30% she activates this ability, allowing herself to recover 10% of her max health per second over 30 seconds. This ability may only be used once per battle',
        unlock1: 'Ability restores 15% of max health per second',
        unlock2: 'Ability restores 20% of max health per second',
        unlock3: 'Ability can be used twice per battle with an interval of 8 seconds between uses'
    },
    furniture: {
        ability: 'Warrior\'s Spirit',
        unlock1: 'Antandra receives 40% less damage from enemies that are out of range of her \'Knockdown\' ability',
        unlock2: 'If Antandra loses a total of 110% of her max health, her Attack Rating is increased by 45% and she recovers 50 energy points per second and is also immune to enemy control abilities until the end of the battle'
    }
}