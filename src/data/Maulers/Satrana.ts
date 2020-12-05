import { Hero } from '../../structures/Hero'

export const Satrana: Hero = {
    name: 'Satrana',
    title: 'Flame Weaver',
    skins: [],
    union: 'The Flame & Spear',
    faction: 'Mauler',
    advantage: 'Wilder',
    role: 'Burst Damage',
    type: 'Intelligence',
    class: 'Mage',
    trait: 'Dura\'s Sorcery',
    armor: 'Padded',
    signature: {
        name: 'Blazing Ember',
        description: 'A crystal that is able to absorb fire. This jewel is sometimes unable to contain the power held within, resulting in a very deadly aftermath',
        skill: 'Incinerate',
        unlock: 'If Satrana is slain, her \'Fireseeds\' ability will be triggered when the enemy\'s health is below 50% and its damage will be increased by 70%',
        unlock1: 'Energy that is recovered when injured or attacking is increased by 20%',
        unlock2: 'Energy that is recovered when injured or attacking is increased by 40%',
        unlock3: 'Only requires 250 energy to activate ultimate ability for the first time'
    },
    furniture: {
        ability: 'Firedance',
        unlock1: 'If the ability \'Overflow\' causes the total duration an enemy has been set alight for to exceed 15 seconds, the burning effects of \'Overflow\' are strengthened. Enemies may not recover any health while being burned as a result of \'Overflow\' and the damage output of this ability is raised to 2 times its original value',
        unlock2: 'Burning effects of \'Overflow\' are strengthened when the enemy has been set alight for a total of 9 seconds'
    }
}