import { Hero } from '../../interfaces'

export const Fawkes: Hero = {
    name: 'Fawkes',
    title: 'Death\'s Defeat',
    faction: 'Lightbearer',
    advantage: 'Mauler',
    role: 'Control',
    type: 'Agility',
    class: 'Ranger',
    receiving: 'Dura\'s Celerity',
    armor: 'Leather',
    signature: {
        item: 'The Soul Prison',
        description: 'An enchanted casket containing a horde of malicious spirits',
        skill: 'Purged Peserverance',
        default: 'Raises the defense ratings of all allied heroes by 5% for 5 seconds if they possess more than 60% of their max energy. Affected allies are also impervious to control abilities',
        unlock1: 'Defense rating is increased up to 20%',
        unlock2: 'Defense rating is increased up to 40%',
        unlock3: 'Haste is increased for 8 seconds'
    },
    furniture: {
        ability: 'Soul Cleanser',
        unlock1: 'If Fawkes or any of his allies have a Factional Advantage over any of their enemies, their Factional Advantage damage bonus will be increased by 8%',
        unlock2: 'The majority of the enemy\'s buff effects are removed when successfully struck by Fawkes\' Normal Attacks'
    }
}