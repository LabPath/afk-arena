import { Hero } from '../../interfaces'

export const Athalia: Hero = {
    name: 'Athalia',
    title: 'Harbinger of Justice',
    faction: 'Celestial',
    advantage: 'Hypogean',
    role: 'Assassin',
    type: 'Agility',
    class: 'Ranger',
    receiving: 'Dura\'s Celerity',
    armor: 'Leather',
    signature: {
        item: 'The Sin Purgers',
        description: 'An ethereal ring of light capable of driving away nightmares',
        skill: 'Bloodless',
        default: 'Defense rating is increased by 4% of the value of Athalia\'s attack rating',
        unlock1: 'Defense rating is increased by 6% of the value of Athalia\'s attack rating',
        unlock2: 'Defense rating is increased by 8% of the value of Athalia\'s attack rating',
        unlock3: 'Enemies that attack Athalia will begin to bleed out for 2 seconds (ability cannot be stacked). Enemies will lose health equal to 70% of their attack rating per second and their health recovery rate will be decreased by 70%'
    },
    furniture: {
        ability: 'Power of Light',
        unlock1: 'Every time Athalia\'s allies (excluding Athalia) use their ultimate ability, the damage of their Normal Attacks is increased by 15% until the end of the battle. This ability can be stacked 2 times',
        unlock2: 'Every time Athalia\'s allies (excluding Athalia) use their ultimate ability, the damage of their Normal Attacks is increased by 20% until the end of the battle. This ability can be stacked 4 times'
    }
}