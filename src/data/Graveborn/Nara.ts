import { Hero } from '../../interfaces'

export const Nara: Hero = {
    name: 'Nara',
    title: 'Heartcarver',
    faction: 'Graveborn',
    advantage: 'Lightbearer',
    role: 'Assassin',
    type: 'Strength',
    class: 'Warrior',
    receiving: 'Dura\'s Might',
    armor: 'Plate',
    signature: {
        item: 'Bloodshed',
        description: 'Cruel and graceless. Crafted for butchery and slaughter',
        skill: 'Looming Death',
        default: 'When Nara discovers an enemy injured enough to be slain by her ultimate ability, she will attempt to use \'Impale\' to bring them closer to her before using her ultimate ability to finish them off',
        unlock1: 'The ability \'Butchery\' will possess an additional 12% life leech effect that is based on the ability’s damage output',
        unlock2: 'The ability \'Butchery\' will possess an additional 12% life leech effect that is based on the ability’s damage output',
        unlock3: 'When Nara’s health drops below 50%, her \'Butchery\' ability will no longer require her enemies\' health to be below a certain percentage in order for it to deal high amounts of damage'
    },
    furniture: {
        ability: 'Perturbed',
        unlock1: 'All enemies become terrified for 2 seconds after Nara successfully kills an enemy hero with her ultimate ability \'Butchery\'. Enemies are unable to attack while terrified and will run away from Nara',
        unlock2: 'If the requirements for the \'Butchery\' ability\'s high damage multipliers are met, its damage will be additionally increased by 450%'
    }
}