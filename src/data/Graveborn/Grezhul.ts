import { Hero } from '../../structures/Hero'

export const Grezhul: Hero = {
    name: 'Grezhul',
    title: 'The Corrupted',
    skins: [],
    union: 'The Wrathful Two',
    faction: 'Graveborn',
    advantage: 'Lightbearer',
    role: 'Tank',
    type: 'Strength',
    class: 'Tank',
    trait: 'Dura\'s Fortitude',
    armor: 'Plate',
    signature: {
        name: 'The Slayer Blades',
        description: 'A cruel pair of blades, especially effective against other undead',
        skill: 'Reanimation',
        unlock: 'Summons 1 skeletal warrior every 9 seconds behind the enemy closest to the edge of the battlefield while Grezhul is alive',
        unlock1: 'Grezhul recovers 10% of his max health when the skeletal warrior dies',
        unlock2: '20% of max HP is restored after resurrection',
        unlock3: 'Skeletal warrior is summoned once every 7.5 seconds'
    },
    furniture: {
        ability: 'Shadow Strike',
        unlock1: 'Value of Grezhul\'s \'Shadow Shield\' is increased by 150%. Shield explodes when the ability ends if it has not already been destroyed',
        unlock2: 'When used, the effects of \'Shadow Shield\' are granted to up to 2 of Grezhul\'s summoned Skeletal Warriors'
    }
}