import { Hero } from '../../interfaces'

export const Zaphrael: Hero = {
    name: 'Zaphrael',
    aliases: ['zap', 'zeus'],
    title: 'The Righteous',
    faction: 'Celestial',
    advantage: 'Hypogean',
    role: 'Continuous Damage',
    type: 'Intelligence',
    class: 'Mage',
    receiving: 'Dura\'s Sorcery',
    armor: 'Padded',
    signature: {
        item: 'Arc of Justice',
        description: 'An illustrious spear consisting of heavenly lightning. Its frightening heat and power is able to turn enemies into ashes in an instance',
        skill: 'Zeal',
        default: 'After using the ability \'Lightning Arc\', Zaphrael\'s Normal Melee Attacks become even more powerful, dealing 60% damage 9 times to the enemy, also interrupting their current action',
        unlock1: 'Damage is increased to 70%',
        unlock2: 'Damage is increased to 80%',
        unlock3: 'The ability \'Thunderstorm\' targets an additional 1 enemy targets'
    },
    furniture: {
        ability: 'Divine Intervention',
        unlock1: 'When an enemy deals damage to Zaphrael they are stunned for 0.5 seconds. Stunned enemies cannot be stunned again for 8 seconds. This ability shall still stun its target even if its damage was completely mitigated by the enemy',
        unlock2: 'When an enemy deals damage to Zaphrael they are stunned for 2 seconds. Stunned enemies cannot be stunned again for 8 seconds. This ability shall still stun its target even if its damage was completely mitigated by the enemy'
    }
}