import { Hero } from '../../interfaces'

export const Mehira: Hero = {
    name: 'Mehira',
    title: 'Mind Cager',
    faction: 'Hypogean',
    advantage: 'Celestial',
    role: 'Control',
    type: 'Intelligence',
    class: 'Mage',
    receiving: 'Dura\'s Sorcery',
    armor: 'Padded',
    signature: {
        item: 'Lash of Submission',
        description: 'A whip, the touch of which enslaves its victims. The tool of a cruel master',
        skill: 'Carnal Bliss',
        default: 'When any non-summoned allies lose health, 10% of the health lost will be given to Mehira',
        unlock1: 'When other teammates lose health, 15% of the health lost will be given to Mehira',
        unlock2: 'When other teammates lose health, 20% of the health lost will be given to Mehira',
        unlock3: 'If at full health, any excess healing abilities or effects that Mehira receives will be converted into energy'
    },
    furniture: {
        ability: 'Loyal Friends',
        unlock1: 'Enemies that have dealt damage to Mehira within the last 3 seconds of Mehira using \'Whiplash\' on one of her allies will receive 25% more damage from said ally during the aforementioned time duration',
        unlock2: 'Enemies that have dealt damage to Mehira within the last 10 seconds of Mehira using \'Whiplash\' on one of her allies will receive 30% more damage from said ally during the aforementioned time duration'
    }
}