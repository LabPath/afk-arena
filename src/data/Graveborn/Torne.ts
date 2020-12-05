import { Hero } from '../../structures/Hero'

export const Torne: Hero = {
    name: 'Torne',
    title: 'The Wandering Corsair',
    skins: [],
    union: null,
    faction: 'Graveborn',
    advantage: 'Lightbearer',
    role: 'Tank',
    type: 'Strength',
    class: 'Tank',
    trait: 'Dura\'s Fortitude',
    armor: 'Plate',
    signature: {
        name: 'Wanderer\'s Plight',
        description: 'A deadly blade that slices through flesh like a hot knife through butter',
        skill: 'Baneful Focus',
        unlock: 'Every time Torne forms a bone whip, his Attack Rating is increased by 10% and his Defense Rating is increased by 20% up until the battle ends. This ability can be stacked 6 times',
        unlock1: 'Every time Torne forms a bone whip, his Attack Rating is increased by 15% and his Defense Rating is increased by 30% up until the battle ends. This ability can be stacked 6 times',
        unlock2: 'Every time Torne forms a bone whip, his Attack Rating is increased by 20% and his Defense Rating is increased by 40% up until the battle ends. This ability can be stacked 6 times',
        unlock3: 'After forming his bone whip a total of 3 times, Torne gains 35 Life Leech points and is immune to control abilities until the end of battle'
    },
    furniture: {
        ability: 'Death Shield',
        unlock1: 'Torne is granted a shield that is able to mitigate damage equal to 18% of his max health, which lasts for 5 seconds every time Torne loses 40% of his max health',
        unlock2: 'Torne is granted a shield that is able to mitigate damage equal to 28% of his max health, which lasts for 10 seconds every time Torne loses 40% of his max health'
    }
}