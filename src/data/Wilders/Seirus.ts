import { Hero } from '../../interfaces'

export const Seirus: Hero = {
    name: 'Seirus',
    title: 'Savior of the Sea',
    skins: [],
    union: 'Guardians of the Abyss',
    faction: 'Wilder',
    advantage: 'Graveborn',
    role: 'Tank',
    type: 'Strength',
    class: 'Warrior',
    trait: 'Dura\'s Might',
    armor: 'Plate',
    signature: {
        name: 'Tidemaker',
        description: 'A fearsome weapon with the power of crashing waves',
        skill: 'Sea Lord',
        unlock: 'At the beginning of battles Seirus will cause his own max health to increase by 40%, however his current health after the increase will not be at maximum unless restored',
        unlock1: 'At the beginning of battles Seirus will recover 2% of his max health per second over 40 seconds',
        unlock2: 'The value of Seirus\' max health increase is raised to 70%',
        unlock3: 'The value of Seirus\' max health increase is raised to 100%'
    },
    furniture: {
        ability: 'Submerge',
        unlock1: 'After an enemy has been knocked to the edge of the battlefield, Seirus uses his \'Deluge\' ability against them. Ability may only be used against the same enemy once every 10 seconds',
        unlock2: 'Ability may be used once every 4 seconds'
    }
}