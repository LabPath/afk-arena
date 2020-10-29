import { Hero } from '../../interfaces'

export const Raine: Hero = {
    name: 'Raine',
    aliases: ['fodder', 'food'],
    title: 'Death\'s Denier',
    faction: 'Lightbearer',
    advantage: 'Mauler',
    role: 'Buffer',
    type: 'Agility',
    class: 'Support',
    receiving: 'Dura\'s Sustenance',
    armor: 'Leather',
    signature: {
        item: 'Dueling Blasters',
        description: 'A pair of reliable old blasters. Good for gettings into and out of sticky situations',
        skill: 'Helping Hand',
        default: 'Raine locks onto the ally with the highest ATK points, allowing them to recover health and energy every 2 seconds. The amount of health and energy recovered every 2 seconds is equal to 30% of Raine\'s own recovery rate',
        unlock1: 'Ally recovers 50% health or energy',
        unlock2: 'When either Raine or the ally she is locked onto uses their ultimate abilities, both her and her ally will receive a shield that is able to reduce damage equal to 100% of her own attack rating',
        unlock3: 'Value of shield is increased to 180% of attack rating value'
    },
    furniture: {
        ability: 'Deadly Force',
        unlock1: 'The maximum damage cap for the ability \'Exploit\' is increased by 5%',
        unlock2: 'The maximum damage cap for the ability \'Exploit\' is increased by 10%'
    }
}