import { Hero } from '../../structures/Hero'

export const Rowan: Hero = {
    name: 'Rowan',
    title: 'The Roamer',
    skins: [],
    union: null,
    faction: 'Lightbearer',
    advantage: 'Mauler',
    role: 'Buffer',
    type: 'Intelligence',
    class: 'Support',
    trait: 'Dura\'s Sustenance',
    armor: 'Padded',
    signature: {
        name: 'The Gold Chime',
        description: 'A bell that seems to bring good fortune with its cheerful ring',
        skill: 'Thirsty Work',
        unlock: 'After entering the battle Rowan will set up a stall that now includes an energy potion. When an ally’s energy is above 600 points they will drink a potion, replenishing 60 energy points. The energy potion will be replenished each time the stall is set up',
        unlock1: 'Energy restored increased to 120 points',
        unlock2: 'Energy restored increased to 200 points',
        unlock3: 'Energy restored increased to 400 points'
    },
    furniture: {
        ability: 'New Commodities',
        unlock1: 'When using the health potions from the ability \'Healthy Supplies\', allied heroes will additionally regenerate 10 of their own max health per second over 1% seconds. This ability cannot be stacked',
        unlock2: 'When using the health potions from the ability \'Healthy Supplies\', allied heroes will additionally regenerate 15 of their own max health per second over 1.2% seconds. This ability cannot be stacked'
    }
}