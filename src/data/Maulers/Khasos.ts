import { Hero } from '../../structures/Hero'

export const Khasos: Hero = {
    name: 'Khasos',
    title: 'The unruly',
    skins: [],
    union: 'Master & Apprentice',
    faction: 'Mauler',
    advantage: 'Wilder',
    role: 'Continuous Damage',
    type: 'Strength',
    class: 'Warrior',
    trait: 'Dura\'s Might',
    armor: 'Plate',
    signature: {
        name: 'Chief Choppers',
        description: 'The axes used by Khasos to fell a Mauler chieftain in ritual combat',
        skill: 'Precision',
        unlock: 'Increases the chance of Khasos catching his battle axe when using his \'Throwing Axe\' ability by 75%. After catching the axe Khasos will then immediately use his \'Throwing Axe\' ability again, however the chance to catch the axe again will then be reduced by 25% up until Khasos is no longer able to catch it and the ability is reset',
        unlock1: 'Chance to catch axe increased to 80%',
        unlock2: '30% of axe damage is converted into health',
        unlock3: 'Chance to catch axe increased to 100%'
    },
    furniture: {
        ability: 'Almighty Warrior',
        unlock1: 'Each living frontline ally increases Khasos\' Crit Amplification by 25 points when he is positioned on the backline',
        unlock2: 'Each living backline enemy reduces the damage Khasos receives by 22% when he is positioned on the frontline'
    }
}