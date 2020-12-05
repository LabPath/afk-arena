import { Hero } from '../../structures/Hero'

export const Numisu: Hero = {
    name: 'Numisu',
    title: 'The All Seer',
    skins: [],
    union: 'The Dragon Slayers',
    faction: 'Mauler',
    advantage: 'Wilder',
    role: 'Regen',
    type: 'Intelligence',
    class: 'Support',
    trait: 'Dura\'s Sustenance',
    armor: 'Padded',
    signature: {
        name: 'Mask of Visions',
        description: 'A mask that acts as a window to another world',
        skill: 'Totem Master',
        unlock: 'At the beginning of the battle Numisu sets down an offensive totem at center of the battlefield',
        unlock1: 'At the beginning of the battle Numisu sets down a rejuvenating totem behind his own team’s backline',
        unlock2: 'The health of Numisu\'s totems is increased by 40%',
        unlock3: 'The health of Numisu\'s totems is increased by 100%'
    },
    furniture: {
        ability: 'Power of Faith',
        unlock1: 'Ultimate \'Voodoo Blessing\' heals more and summons 2 more totems, which take their normal effects',
        unlock2: 'Numisu\'s ultimate \'Voodoo Blessing\' additionally heals the weakest 1 unhealed allies, as well as up to 4 of his totems'
    }
}