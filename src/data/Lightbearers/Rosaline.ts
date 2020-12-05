import { Hero } from '../../structures/Hero'

export const Rosaline: Hero = {
    name: 'Rosaline',
    title: 'The Kind',
    skins: [],
    union: null,
    faction: 'Lightbearer',
    advantage: 'Mauler',
    role: 'Buffer',
    type: 'Intelligence',
    class: 'Support',
    trait: 'Dura\'s Sustenance',
    armor: 'Padded',
    signature: {
        name: 'Broom of Life',
        description: 'An extraordinary broom which has a mind of its own, brought to life by Rosaline',
        skill: 'Servitude',
        unlock: 'Rosaline raises the attack and defense ratings of the ally she is currently following for 8% of her own ratings\' values',
        unlock1: 'Attack and defense ratings are raised by 16% of Rosaline\'s own rating values',
        unlock2: 'Attack and defense ratings are raised by 30% of Rosaline\'s own rating values',
        unlock3: 'Raises ally\'s crit rating and dodge for 25% of Rosaline\'s own rating values'   
    },
    furniture: {
        ability: 'Flying Crockery',
        unlock1: 'As Rosaline is following an ally around the battlefield, she manifests \'Tea Cup\' that she throws at the enemy. This ability is triggered once every 2.5 seconds. The effects of this ability are identical to the \'Crazy Crockery\' ability',
        unlock2: 'Ability is triggered once every 0.75 seconds'
    }
}