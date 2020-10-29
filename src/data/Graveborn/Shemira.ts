import { Hero } from '../../interfaces'

export const Shemira: Hero = {
    name: 'Shemira',
    title: 'Corpsemaker',
    faction: 'Graveborn',
    advantage: 'Lightbearer',
    role: 'Area of Effect',
    type: 'Intelligence',
    class: 'Mage',
    receiving: 'Dura\'s Sorcery',
    armor: 'Padded',
    signature: {
        item: 'The Spirit Orb',
        description: 'A cursed orb containing a trapped spirit. Inspires dread in those who look upon it',
        skill: 'Twisted Torture',
        default: 'The \'Tortured Souls\' ability deals 12% damage when there is 1 enemy on the battlefield, 6% when there are 2 enemies on the battlefield and 3% damage when there are 3 enemies on the battlefield',
        unlock1: 'The \'Tortured Souls\' ability deals 24% damage when there is 1 enemy on the battlefield, 12% when there are 2 enemies on the battlefield and 6% damage when there are 3 enemies on the battlefield',
        unlock2: 'The \'Tortured Souls\' ability deals 36% damage when there is 1 enemy on the battlefield, 18% when there are 2 enemies on the battlefield and 9% damage when there are 3 enemies on the battlefield',
        unlock3: 'The \'Tortured Souls\' ability deals 48% damage when there is 1 enemy on the battlefield, 24% when there are 2 enemies on the battlefield and 12% damage when there are 3 enemies on the battlefield'
    },
    furniture: {
        ability: 'Inner Yearning',
        unlock1: 'When Shemira\'s energy is full, she becomes immune to all control abilities for 2 seconds and immediately uses her ultimate ability. This ability can be activated even while another ability is currently in use',
        unlock2: 'When Shemira\'s health falls below 50%, the percentage of damage that is converted into health while her \'Tortured Souls\' ability is in effect is raised by 30%. Once \'Tortured Souls\' has finished dealing damage to enemies, the percentage of damage converted into her health falls by 30%'
    }
}