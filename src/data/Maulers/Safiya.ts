import { Hero } from '../../interfaces'

export const Safiya: Hero = {
    name: 'Safiya',
    title: 'Daughter of the Desert',
    faction: 'Mauler',
    advantage: 'Wilder',
    role: 'Area of Effect',
    type: 'Intelligence',
    class: 'Mage',
    receiving: 'Dura\'s Sorcery',
    armor: 'Padded',
    signature: {
        item: 'Supremacy',
        description: 'A large scepter with a radiant design symbolizing absolute power',
        skill: 'Arcane Power',
        default: '1% of Safiya\'s total damage output is converted into her attack rating. The attack rating can be increased up to a total of 140%',
        unlock1: '2% of Safiya\'s total damage output is converted into her attack rating',
        unlock2: '3% of Safiya\'s total damage output is converted into her attack rating',
        unlock3: 'Safiya will use \'Scattered Bolt\' instead of normal attacks once the attack rating increase has reached its maximum percentage'
    },
    furniture: {
        ability: 'Harmonized Power',
        unlock1: 'Duration of the \'Spectral Disruption\' is increased by 15 seconds',
        unlock2: 'The focusing stage of the ultimate ability \'Falling Sun\' is sped up by 40 % while \'Spectral Disruption\' is still present on the battlefield'
    }
}