import { Hero } from '../../interfaces'

export const Lyca: Hero = {
    name: 'Lyca',
    title: 'Keeper of Glades',
    skins: ['The Glade Keeper'],
    union: 'The Dusk Patrollers',
    faction: 'Wilder',
    advantage: 'Graveborn',
    role: 'Buffer',
    type: 'Agility',
    class: 'Ranger',
    trait: 'Dura\'s Celerity',
    armor: 'Leather',
    signature: {
        name: 'Starfall',
        description: 'A gift that fell from the sky. Rains destruction in the same way',
        skill: 'Vision of the Stars',
        unlock: 'Increases all allies\' accuracy by 40 while Lyca is alive',
        unlock1: 'Increases all allies\' accuracy by 70 while Lyca is alive',
        unlock2: 'Raises the damage dealt to the enemy target by 0.2% for every accuracy point that is higher than the enemy\'s max dodge points and can be raised up to a maximum of 20% damage. (Ability affects all allies excluding mages)',
        unlock3: 'Increases all allies\' accuracy by 100 while Lyca is alive'
    },
    furniture: {
        ability: 'Multi Shot',
        unlock1: 'Targets the nearest 2 enemies with \'Rapid Arrows\' the first time the ability is used',
        unlock2: 'Every Normal Attack targets the nearest 2 enemies simultaneously'
    }
}