import { Hero } from '../../structures/Hero'

export const Ezio: Hero = {
    name: 'Ezio',
    title: 'Auditore da Firenze',
    skins: [],
    union: null,
    faction: 'Dimensional',
    advantage: null,
    role: 'Assassin',
    type: 'Agility',
    class: 'Ranger',
    trait: 'Dura\'s Celerity',
    armor: 'Leather',
    signature: {
        name: 'Hidden Blade',
        description: 'Through studying pages from Altair\'s codex, Leonardo da Vinci was able to provide Ezio an upgraded Hidden Blade. As a symbol of the Assassin, Ezio will use the Hidden Blade until the end of his career',
        skill: 'Assassin\'s Target',
        unlock: 'Each time Ezio defeats an enemy, all holds enemies marked with \'Execution Threshold\' markers have their thresholds raised by 50% for the following 10 seconds. This ability cannot be stacked',
        unlock1: 'Each time Ezio defeats an enemy he receives 35% less damage from enemies for 10 seconds. This ability cannot be stacked',
        unlock2: 'Each time Ezio defeats an enemy he receives 55% less damage from enemies for 10 seconds. This ability cannot be stacked',
        unlock3: 'Each time Ezio defeats an enemy his \'Smoke Bomb\' ability is triggered'
    },
    furniture: {
        ability: 'Master Assassin',
        unlock1: 'All negative control abilities are removed from Ezio whenever a deadly strike is dealt to an enemy as a result of his \'Eagle Vision\' ability',
        unlock2: 'Ezio gains 500 Energy points at the beginning of battles'
    }
}