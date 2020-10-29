import { Hero } from '../../interfaces'

export const Cecilia: Hero = {
    name: 'Cecilia',
    title: 'Purger of Sins',
    faction: 'Lightbearer',
    advantage: 'Mauler',
    role: 'Assassin',
    type: 'Agility',
    class: 'Ranger',
    receiving: 'Dura\'s Celerity',
    armor: 'Leather',
    signature: {
        item: 'Book of Cleansing',
        description: 'A divine book that contains prayers used to exorcise demonic spirits and drive away evil',
        skill: 'Repentance',
        default: 'All allied heroes including Cecilia recover 200 energy points and a total equivalent of 150% worth of Cecilia\'s attack rating as health over 5 seconds whenever the ability \'Judgement Day\' kills an enemy in less than 5 seconds',
        unlock1: 'Allied heroes including Cecilia recover 200 energy points and a total equivalent of 250% worth of Cecilia\'s attack rating as health',
        unlock2: 'Allied heroes including Cecilia recover 300 energy points and a total equivalent of 250% worth of Cecilia\'s attack rating as health',
        unlock3: 'Cecilia\'s Health Recovery Rate is increased by an additional 50%'
    },
    furniture: {
        ability: 'Persecution',
        unlock1: 'After every 4 seconds, Cecilia marks the enemy that has dealt the most damage with 1 Symbol(s) of Sin',
        unlock2: 'Using the ultimate ability \'Judgement Day\' marks the enemy with the second highest dealt damage with a Symbol of Sin'
    }
}