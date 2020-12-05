import { Hero } from '../../structures/Hero'

export const Warek: Hero = {
    name: 'Warek',
    title: 'The Untamed',
    skins: [],
    union: null,
    faction: 'Mauler',
    advantage: 'Wilder',
    role: 'Continuous Damage',
    type: 'Strength',
    class: 'Warrior',
    trait: 'Dura\'s Might',
    armor: 'Plate',
    signature: {
        name: 'Coward Crusher',
        description: 'Heavy vambraces well suited to a wild and brutish fighting style',
        skill: 'Brawler\'s Resistance',
        unlock: 'When Warek’s \'Carnal Rage\' ability cannot be stacked any further, he will recover 3% health per second over 15 seconds',
        unlock1: 'Ability restores 4% of max health per second',
        unlock2: 'Ability restores 5% of max health per second',
        unlock3: 'Stacks Warek’s \'Carnal Rage\' buff effects once every 2 seconds. Once the effects can no longer be stacked, his attack rating will be increased by an additional 0.7% per second'
    },
    furniture: {
        ability: 'Battle Vigor',
        unlock1: 'If one of Warek\'s Normal Attacks or abilities strikes 2 enemies or more, then his Crit Rating is increased by 40% and his Crit Amplification is increased by 45 points for this attack',
        unlock2: 'Warek has a 100% chance to hit his enemies when there are 2 or more heroes within range of Warek\'s Normal Attacks or skills'
    }
}