import { Hero } from '../../interfaces'

export const Ferael: Hero = {
    name: 'Ferael',
    title: 'Doomwhisper',
    skins: [],
    union: null,
    faction: 'Graveborn',
    advantage: 'Lightbearer',
    role: 'Continuous Damage',
    type: 'Agility',
    class: 'Ranger',
    trait: 'Dura\'s Celerity',
    armor: 'Leather',
    signature: {
        name: 'Haunter\'s Hand',
        description: 'A bow housing a greedy spirit now tormented by desperate hunger',
        skill: 'Anguished Spirit',
        unlock: 'Normal attacks will cause an evil spirit to haunt the enemy target if a critical strike occurs',
        unlock1: 'Attack ratings for all enemies are reduced by 1.5% and health recovery rates are reduced by 10% for every spirit that is haunting an enemy on the battlefield. This ability may be stacked up to 5 times',
        unlock2: 'Attack ratings for all enemies are reduced by 1.5% and health recovery rates are reduced by 10% for every spirit that is haunting an enemy on the battlefield. This ability may be stacked up to 5 times',
        unlock3: 'Attack ratings for all enemies are reduced by 3% and health recovery rates are reduced by 10% for every spirit that is haunting an enemy on the battlefield. This ability may be stacked up to 8 times'
    },
    furniture: {
        ability: 'Ghastly Hauntings',
        unlock1: 'Ferael\'s Normal Attacks deal 12% more damage and cause targets to lose 12 Haste points for every 1 spirit that is haunting them for a duration of 1.5 seconds',
        unlock2: 'Enemies haunted by 3 spirits are stunned and no longer have their Haste reduced by Normal Attacks'
    }
}