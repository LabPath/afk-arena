import { Hero } from '../../structures/Hero'

export const Lucretia: Hero = {
    name: 'Lucretia',
    aliases: ['luc'],
    title: 'The Betrayed',
    skins: [],
    union: 'The Final Choice',
    faction: 'Hypogean',
    advantage: 'Celestial',
    role: 'Continuous Damage',
    type: 'Intelligence',
    class: 'Ranger',
    trait: 'Dura\'s Celerity',
    armor: 'Leather',
    signature: {
        name: 'Dark Star',
        description: 'Born out of hatred and vengeance, the Dark Star encompasses a burning power like none other. The most peculiar observation about this powerful weapon, is that its hilt bears the symbol of an ancient temple cleric, from many millennia ago',
        skill: 'Animus',
        unlock: 'When any non-summoned allies die, Lucretia gains 100 energy points',
        unlock1: 'When any non-summoned allies die, Lucretia gains 200 energy points',
        unlock2: 'When any non-summoned allies die, Lucretia\'s Attack Rating is increased by 30% for 12 seconds. This ability can be stacked. Time durations for the stacked effects are calculated individually',
        unlock3: 'When any non-summoned allies die, Lucretia\'s Attack Rating is increased by 50% for 12 seconds. This ability can be stacked. Time durations for the stacked effects are calculated individually'
    },
    furniture: {
        ability: 'Blazing Fury',
        unlock1: 'When enemies have used their Ultimate abilities for a combined number of 2 times, the effects caused by the flames of the ability \'Hellfire\' are strengthened. Enemies that are damaged by the flames have their Energy Recovery rates reduced by 50%',
        unlock2: 'When enemies have used their Ultimate abilities for a combined number of 7 times, the flame effects of the ability \'Hellfire\' are strengthened and the flames shall no longer disappear. Enemies that are damaged by the flames will be unable to use their Ultimate abilities for a short duration'
    }
}