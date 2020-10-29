import { Hero } from '../../interfaces'

export const Eironn: Hero = {
    name: 'Eironn',
    title: 'Stormsword',
    faction: 'Wilder',
    advantage: 'Graveborn',
    role: 'Area of Effect',
    type: 'Agility',
    class: 'Ranger',
    receiving: 'Dura\'s Celerity',
    armor: 'Leather',
    signature: {
        item: 'Elemental Blades',
        description: 'Elegant weapons and elemental conduits. Can project and direct wind',
        skill: 'Chill',
        default: 'The ability \'Elemental Surge\' has a chance to cause enemies to become frozen for 2 seconds. The chances of an enemy being frozen are raised if the enemy is already suffering from attack speed reductions, and enemies which are already frozen will no longer be knocked back by the ability',
        unlock1: 'Damage for the ability \'Elemental Surge\' is increased against frozen enemies by 30%',
        unlock2: 'Damage for the ability \'Elemental Surge\' is increased against frozen enemies by 50%',
        unlock3: 'Time enemies are frozen is increased to 4 seconds'
    },
    furniture: {
        ability: 'Oathkeeper',
        unlock1: 'The ability \'Sylvan Oath\' is triggered when Eironn\'s health is above 60%',
        unlock2: 'Damage dealt by \'Sylvan Oath\' when triggered is increased by 15%'
    }
}