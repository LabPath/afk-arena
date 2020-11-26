import { Hero } from '../../interfaces'

export const Belinda: Hero = {
    name: 'Belinda',
    title: 'Beam of Hope',
    skins: ['Summer Belle'],
    union: 'The Lightbringers',
    faction: 'Lightbearer',
    advantage: 'Mauler',
    role: 'Area of Effect',
    type: 'Intelligence',
    class: 'Mage',
    trait: 'Dura\'s Sorcery',
    armor: 'Padded',
    signature: {
        name: 'Staff of Light',
        description: 'A holy artifact imbued with radiant essence',
        skill: 'Gift of Heaven',
        unlock: 'All allies that are receiving the effects of the ability \'Blessing\' will have a 40% chance to activate the \'Divine Retribution\' ability. This ability can be activated up to 3 times every 5 seconds. Damage dealt by this ability is equal to 40% of the ability’s original damage when used by allies',
        unlock1: 'Raises potency of \'Divine Retribution\'s\' damage when used by allies up to 60%',
        unlock2: 'Raises potency of \'Divine Retribution\'s\' damage when used by allies up to 80%',
        unlock3: 'Restores 40 energy each time ability is used'
    },
    furniture: {
        ability: 'Focused Light',
        unlock1: 'When the ability \'Divine Light\' only hits 1 enemy target, the damage dealt to the target is increased by 30%',
        unlock2: 'When Belinda deals damage to an enemy, their Crit Resistance is reduced by 35 points for 3 seconds. This ability cannot be stacked'
    }
}