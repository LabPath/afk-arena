import { Hero } from '../../structures/Hero'

export const Baden: Hero = {
    name: 'Baden',
    title: 'The Abomination',
    skins: [],
    union: null,
    faction: 'Graveborn',
    advantage: 'Lightbearer',
    role: 'Continuous Damage',
    type: 'Agility',
    class: 'Warrior',
    trait: 'Dura\'s Might',
    armor: 'Leather',
    signature: {
        name: 'Spear of Decay',
        description: 'A cruel, necrotic weapon that causes festering wounds nearly impossible to heal',
        skill: 'Phantom Force',
        unlock: 'A cruel, necrotic weapon that causes festering wounds nearly impossible to heal',
        unlock1: 'All of Baden\'s phantoms have their health increased by 15%',
        unlock2: 'All of Baden\'s phantoms have their health increased by 30%',
        unlock3: 'Each time a total of 3 phantom Badens disappear from the battlefield, Baden will initiate the effects of his \'Phantom Strike\''
    },
    furniture: {
        ability: 'Phantom Commander',
        unlock1: 'When one of Baden\'s phantoms disappears from the battlefield, the remaining phantoms regain 45% of the health they have already lost',
        unlock2: 'If Baden receives fatal damage, he consumes one of his phantoms that currently has a higher health percentage than himself and transfers 60% of the phantom\'s remaining health to himself. This ability can be used 6 times per battle'
    }
}