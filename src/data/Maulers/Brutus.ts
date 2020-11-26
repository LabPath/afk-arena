import { Hero } from '../../interfaces'

export const Brutus: Hero = {
    name: 'Brutus',
    title: 'The Blood Claw',
    skins: ['Blazefury'],
    union: 'Master & Apprentice',
    faction: 'Mauler',
    advantage: 'Wilder',
    role: 'Tank',
    type: 'Strength',
    class: 'Tank',
    trait: 'Dura\'s Might',
    armor: 'Plate',
    signature: {
        name: 'Rends-the-Weak',
        description: 'A weapon so named because anything is weak against it',
        skill: 'Upsurge',
        unlock: 'Restores 15% of Brutus\' max health after the ability \'Last Gasp\' is used',
        unlock1: '30% of max HP is restored',
        unlock2: 'Last Gasp is extended for 1 second',
        unlock3: 'Once the effects of the ability \'Last Gasp\' have ceased Brutus receives an additional shield that is able to mitigate damage equal to 50% of his max health, which lasts for 5 seconds'
    },
    furniture: {
        ability: 'Warrior\'s Resilience',
        unlock1: 'The duration of the ability \'Last Gasp\' is extended by 2 seconds',
        unlock2: 'The ability \'Last Gasp\' is extended by 2 seconds for each non-summoned ally that dies before or during the use of it'
    }
}