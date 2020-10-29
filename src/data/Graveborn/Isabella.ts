import { Hero } from '../../interfaces'

export const Isabella: Hero = {
    name: 'Isabella',
    title: 'The Taken Soul',
    faction: 'Graveborn',
    advantage: 'Lightbearer',
    role: 'Continuous Damage',
    type: 'Intelligence',
    class: 'Mage',
    receiving: 'Dura\'s Sorcery',
    armor: 'Padded',
    signature: {
        item: 'Tome of the Dead',
        description: 'A mysterious, cursed book filled with arcane knowledge and perhaps its own will',
        skill: 'Lightning Barrage',
        default: 'Each time the ability \'Void Barrage\' has been successfully cast 3 times it will release 2 bolts of lightning that will each target different enemies',
        unlock1: 'Casting speed is increased by 20%',
        unlock2: 'Casting speed is increased by 30%',
        unlock3: 'Each time the ability \'Void Barrage\' has been successfully cast 3 times it will release 3 bolts of lightning that will each target different enemies'
    },
    furniture: {
        ability: 'Concentrated Sorcery',
        unlock1: '\'Void Barrage\' is used as Isabella\'s Normal Attack',
        unlock2: 'Damage dealt by \'Void Barrage\' is increased by 15%'
    }
}