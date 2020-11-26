import { Hero } from '../../interfaces'

export const Skriath: Hero = {
    name: 'Skriath',
    aliases: ['chicken'],
    title: 'The Wise One',
    skins: [],
    union: null,
    faction: 'Mauler',
    advantage: 'Wilder',
    role: 'Area of Effect',
    type: 'Intelligence',
    class: 'Mage',
    trait: 'Dura\'s Sorcery',
    armor: 'Padded',
    signature: {
        name: 'Wisdom Keeper',
        description: 'A powerful scepter that symbolizes wisdom and power. Only the true Mauler chieftain may wield it',
        skill: 'Boulder Blast',
        unlock: 'Each time Skriath deals a Critical Strike to an enemy target, large rocks fall down on them, dealing 50% AoE damage to them and any nearby enemies. This ability is unable to deal critical damage itself and can only target the same enemy once every 3 seconds',
        unlock1: 'Damage increased by up to 70%',
        unlock2: 'Damage increased by up to 90%',
        unlock3: 'During a \'Sandstorm\', all enemies are dealt 2% of their current health value per second as damage, ignoring all enemy Defense Ratings'
    },
    furniture: {
        ability: 'Desert Trap',
        unlock1: 'At the beginning of battles, enemies positioned at the top and bottom positions of the enemy formation\'s backline are pulled closer towards the center backline enemy hero by a desert vortex',
        unlock2: 'When \'Sandstorm\' weather conditions are occurring, allies that have the wind behind them have their movement speed increased by 150%. Enemies that are fighting against the direction of the wind have their movement speed decreased by 75%'
    }
}