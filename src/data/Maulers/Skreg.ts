import { Hero } from '../../structures/Hero'

export const Skreg: Hero = {
    name: 'Skreg',
    title: 'The Cunning',
    skins: [],
    union: null,
    faction: 'Mauler',
    advantage: 'Wilder',
    role: 'Tank',
    type: 'Strength',
    class: 'Tank',
    trait: 'Dura\'s Fortitude',
    armor: 'Plate',
    signature: {
        name: 'Long Fang',
        description: 'A cavalry spear crafted from the jaw of a demon lord. Inflicts wicked wounds',
        skill: 'Beast Rider',
        unlock: 'The ability \'Beast of Burden\' will no longer drain energy for the first 5 seconds after each time it is used',
        unlock1: 'Only requires 500 energy to activate ultimate ability for the first time',
        unlock2: 'Energy that is recovered when injured is increased by 50%',
        unlock3: 'Only requires 200 energy to activate ultimate ability for the first time'
    },
    furniture: {
        ability: 'Vanguards of Pain',
        unlock1: 'All allied heroes within the enemy half of the battlefield have their Attack Ratings increased by 20% and also receive 25% less damage from enemy attacks',
        unlock2: 'Allied heroes recover 100 energy points after every 3 seconds in the enemy\'s half of the battlefield'
    }
}