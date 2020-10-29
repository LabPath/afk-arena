import { Hero } from '../../interfaces'

export const Khazard: Hero = {
    name: 'Khazard',
    title: 'The Frozen Terror',
    faction: 'Hypogean',
    advantage: 'Celestial',
    role: 'Control',
    type: 'Intelligence',
    class: 'Mage',
    receiving: 'Dura\'s Sorcery',
    armor: 'Padded',
    signature: {
        item: 'The Frigid Aura',
        description: 'Frozen in perpetuity, this object emanates a coldness that is able to cut through bone and steel',
        skill: 'Frozen Curse',
        default: 'Increases the duration of most negative debuff effects which are currently affecting all enemies on the battlefield by 30% seconds',
        unlock1: 'Normal attacks that deal critical damage now have a freezing effect that lasts for 1 seconds',
        unlock2: 'Normal attacks that deal critical damage now have a freezing effect that lasts for 3 seconds',
        unlock3: 'Increases the duration of most negative debuff effects which are currently affecting all enemies on the battlefield by 60% seconds'
    },
    furniture: {
        ability: 'Solid Ice',
        unlock1: 'When using the ability \'Glacial Shards\', if a single enemy is struck by 2 shards or more, the target becomes completely frozen for 1.5 seconds',
        unlock2: 'Any enemies frozen by one of Khazard\'s abilities will receive 15% more damage'
    }
}