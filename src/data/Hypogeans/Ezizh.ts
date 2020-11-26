import { Hero } from '../../interfaces'

export const Ezizh: Hero = {
    name: 'Ezizh',
    title: 'Hellborn',
    skins: [],
    union: null,
    faction: 'Hypogean',
    advantage: 'Celestial',
    role: 'Debuffer',
    type: 'Strength',
    class: 'Support',
    trait: 'Dura\'s Sustenance',
    armor: 'Plate',
    signature: {
        name: 'Armor of Ruin',
        description: 'Twisted armor that represents the very evil it protects',
        skill: 'Immolate',
        unlock: 'Enemies with less than 30% health will be stunned for a short period of time',
        unlock1: 'Ezizh\'s fire lasts for 1 seconds and raises the damage by 15%',
        unlock2: 'Ezizh\'s fire lasts for 1 seconds and raises the damage by 20%',
        unlock3: 'Increases the duration the ground burns for by 100%. However only one location can be burned at a time'
    },
    furniture: {
        ability: 'Mind Focus',
        unlock1: 'While using the ability \'Feeble Mind\', Ezizh receives 25% less damage from enemy attacks and cannot be controlled by enemies',
        unlock2: 'While using the ability \'Feeble Mind\', Ezizh receives 60% less damage from enemy attacks and cannot be controlled by enemies'
    }
}