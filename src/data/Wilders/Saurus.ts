import { Hero } from '../../interfaces'

export const Saurus: Hero = {
    name: 'Saurus',
    title: 'The Risen Warrior',
    skins: [],
    union: null,
    faction: 'Wilder',
    advantage: 'Graveborn',
    role: 'Continuous Damage',
    type: 'Strength',
    class: 'Warrior',
    trait: 'Dura\'s Might',
    armor: 'Plate',
    signature: {
        name: 'Hope\'s Edge',
        description: 'Crafted by the finest Wilder weaponsmith and enchanted by the most powerful enchanter in Esperia, this rare two-headed spear is brimming with the powerful arcane forces of the forest. Only the most proficient of warriors are capable of utilizing such perfection',
        skill: 'Warrior\'s Valor',
        unlock: 'When the ability \'tenacity\' can no longer be stacked any further, Saurus will recover 40% worth of his own Attack Rating as health every second',
        unlock1: 'When the ability \'tenacity\' can no longer be stacked any further, Saurus will recover 70% worth of his own Attack Rating as health every second',
        unlock2: 'When the ability \'tenacity\' can no longer be stacked any further, Saurus will recover 100% worth of his own Attack Rating as health every second',
        unlock3: 'When the ability \'tenacity\' can no longer be stacked any further, Saurus\' allies will recover 150% worth of his Attack Rating as health every time the abilities \'War Strike\' or \'Burst Strikes\' are used without being interrupted'
    },
    furniture: {
        ability: 'Impregnable Resistance',
        unlock1: 'Saurus receives 10% less damage from enemies when using his \'Burst Strikes\' or \'War Strike\' abilities',
        unlock2: 'Saurus receives 25% less damage from enemies when using his \'Burst Strikes\' or \'War Strike\' abilities'
    }
}