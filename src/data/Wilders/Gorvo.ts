import { Hero } from '../../interfaces'

export const Gorvo: Hero = {
    name: 'Gorvo',
    aliases: ['turtule'],
    title: 'The Indomitable',
    faction: 'Wilder',
    advantage: 'Graveborn',
    role: 'Tank',
    type: 'Strength',
    class: 'Tank',
    receiving: 'Dura\'s Fortitude',
    armor: 'Plate',
    signature: {
        item: 'Gate Crasher',
        description: 'Made from an incredibly hard substance, this hammer can bring down a fortress',
        skill: 'Nature\'s Shield',
        default: 'Increases the efficacy of all shields by 25%',
        unlock1: 'Increases the efficacy of all shields by 50%',
        unlock2: 'If the shield created by the ability \'Shell Shield\' is not broken within a certain period of time, the remaining shield value will be converted into energy. Ability restores up to 250 energy points',
        unlock3: 'When in a shielded state, Gorvo will recover 5% of his max health every second'
    },
    furniture: {
        ability: 'Defensive Measures',
        unlock1: 'Using the ability \'Shell Shock\' grants Gorvo a shield that is able to mitigate damage equal to 24% of his max health for 3.5 seconds',
        unlock2: 'Shield duration increased to 8 seconds'
    }
}