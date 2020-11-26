import { Hero } from '../../interfaces'

export const Lucius: Hero = {
    name: 'Lucius',
    title: 'Lightbringer',
    skins: ['The Mariner'],
    union: 'The Lightbringers',
    faction: 'Lightbearer',
    advantage: 'Mauler',
    role: 'Regen',
    type: 'Strength',
    class: 'Tank',
    trait: 'Dura\'s Fortitude',
    armor: 'Plate',
    signature: {
        name: 'The Winged Protector',
        description: 'A blessed shield that remains unscathed after a hundred battles',
        skill: 'Divine Purge',
        unlock: 'Enemy heroes have their energy recovery effects reduced by 30% for 4 seconds when they are struck by the ability \'Divine Strike\' or if a normal attack becomes a critical strike',
        unlock1: 'Enemy heroes have their energy recovery effects reduced by 60% for 4 seconds',
        unlock2: 'Enemy heroes have their energy recovery effects reduced by 90% for 4 seconds',
        unlock3: 'Removes the majority of the enemy\'s buffs when used'
    },
    furniture: {
        ability: 'Blessed Shield',
        unlock1: 'Using the \'Blessed Shield\' ability while positioned on the frontline reduces the damage that Lucius other frontline ally receives by 30%',
        unlock2: 'Using the \'Blessed Shield\' ability while positioned on the frontline reduces the damage that Lucius other frontline ally receives by 75%'
    }
}