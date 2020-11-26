import { Hero } from '../../interfaces'

export const Thane: Hero = {
    name: 'Thane',
    title: 'The Exalted',
    skins: [],
    union: 'Castellans',
    faction: 'Lightbearer',
    advantage: 'Mauler',
    role: 'Assassin',
    type: 'Agility',
    class: 'Ranger',
    trait: 'Dura\'s Celerity',
    armor: 'Leather',
    signature: {
        name: 'The Lotus Blade',
        description: 'Swift, light, and sharp. Always seems to find the right spot',
        skill: 'Focused Finesse',
        unlock: 'Thane\'s damage is increased by 20% if he does not receive damage for 3 seconds',
        unlock1: 'Damage increased to 30% when requirements are met',
        unlock2: 'Damage increased to 40% when requirements are met',
        unlock3: 'If Thane\'s target enemy does not inflict damage upon Thane for 3 seconds, then Thane\'s damage will be increased'
    },
    furniture: {
        ability: 'Swift Death',
        unlock1: 'Thane\'s ability \'Eviscerate\' has a 100% chance to hit an enemy the first time it is used against them, and deals additional damage to the target equal to 18% of their max health. The additional damage dealt by this ability cannot exceed 360% of Thane\'s own Attack Rating',
        unlock2: 'The default number of attacks for the ability \'Eviscerate\' is raised by 6 attacks'
    }
}