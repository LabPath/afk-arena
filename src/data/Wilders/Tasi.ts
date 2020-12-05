import { Hero } from '../../structures/Hero'

export const Tasi: Hero = {
    name: 'Tasi',
    title: 'Dreamhopper',
    skins: ['The Spring Bloom'],
    union: 'Wisdom & Hope',
    faction: 'Wilder',
    advantage: 'Graveborn',
    role: 'Control',
    type: 'Intelligence',
    class: 'Support',
    trait: 'Dura\'s Sustenance',
    armor: 'Padded',
    signature: {
        name: 'The Dream Halo',
        description: 'An ethereal ring of light capable of driving away nightmares',
        skill: 'Diminish',
        unlock: 'Reduces the attack rating of nearby enemies by 10% after Tasi uses her \'Teleportation\' ability',
        unlock1: 'The scope of the reduced attack rating effect is increased up to 15%',
        unlock2: 'The scope of the reduced attack rating effect is increased up to 20%',
        unlock3: 'The scope of the reduced attack rating effect is increased up to 30%'
    },
    furniture: {
        ability: 'Double Teleportation',
        unlock1: 'If Tasi is attacked within 1.5 seconds of using her ability \'Teleportation\', the ability will be instantly triggered again',
        unlock2: 'Cooldown for the ability \'Teleportation\' is reduced by 1 seconds'
    }
}