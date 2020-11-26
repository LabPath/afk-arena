import { Hero } from '../../interfaces'

export const Tidus: Hero = {
    name: 'Tidus',
    title: 'Shadowmane',
    skins: [],
    union: null,
    faction: 'Mauler',
    advantage: 'Wilder',
    role: 'Continuous Damage',
    type: 'Agility',
    class: 'Ranger',
    trait: 'Dura\'s Celerity',
    armor: 'Leather',
    signature: {
        name: 'Hatred\'s Bite',
        description: 'Two vicious-looking blades that have been the demise of many unfortunate gladiators. Crafted to perfection, they were built with only one intention in mind, death',
        skill: 'Battle Hardened',
        unlock: 'Reduces all damage that Tidus receives by 40% for the first 6 seconds after \'Savagery\' is used',
        unlock1: 'Reduces 60% of all damage received',
        unlock2: 'Reduces 70% of all damage received',
        unlock3: 'Tidus is impervious to all enemy control abilities for the first 6 seconds after \'Savagery\' is used'
    },
    furniture: {
        ability: 'Wild Fury',
        unlock1: 'Tenacity is raised by 12 points during battle',
        unlock2: 'If Tidus kills an enemy or is close to an enemy that is killed, he will recover 35% of the health which has already been lost'
    }
}