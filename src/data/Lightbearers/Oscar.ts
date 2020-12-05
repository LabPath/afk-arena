import { Hero } from '../../structures/Hero'

export const Oscar: Hero = {
    name: 'Oscar',
    title: 'The True Gentleman',
    skins: [],
    union: null,
    faction: 'Lightbearer',
    advantage: 'Mauler',
    role: 'Assassin',
    type: 'Agility',
    class: 'Ranger',
    trait: 'Dura\'s Celerity',
    armor: 'Leather',
    signature: {
        name: 'Exquisite Table Knife',
        description: 'A beautifully crafted, yet deadly knife that is as sophisticated as its owner. Able to slice through all types of meat with ease, few people are worthy of owning such a tool',
        skill: 'Uninvited Guest',
        unlock: 'If an enemy appears on the allied side of the battlefield, Oscar instantaneously appears beside them and proceeds to kick them back into their own half of the battlefield, resulting in 200% damage being dealt to the enemy',
        unlock1: 'Ability converts 100% of damage taken by the enemy into health',
        unlock2: 'Damaged increased by up to 300%',
        unlock3: 'Ability possesses a stun effect which lasts for 5 seconds'
    },
    furniture: {
        ability: 'Swift Service',
        unlock1: 'Every time Oscar moves locations due to his abilities increases his Dodge by 60 points for 5 seconds. The length of time that this ability lasts for is calculated individually each time it is used. This ability can be stacked multiple times',
        unlock2: 'The ability \'Slice and Dice\' is used continuously up until there are no knives left next to any enemies'
    }
}