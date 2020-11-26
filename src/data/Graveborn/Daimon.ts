import { Hero } from '../../interfaces'

export const Daimon: Hero = {
    name: 'Daimon',
    aliases: ['stitchy'],
    title: 'The Forsaken Child',
    skins: [],
    union: 'The Forsaken Family',
    faction: 'Graveborn',
    advantage: 'Lightbearer',
    role: 'Tank',
    type: 'Strength',
    class: 'Tank',
    trait: 'Dura\'s Fortitude',
    armor: 'Plate',
    signature: {
        name: 'Stitchy',
        description: 'A small soft-toy that goes by the name \'Stitchy\', stitched together by Daimon\'s mother with the leftover parts of fabric from her tailer shop. Infused with a soul, Stitchy never leaver his owner\'s side, and now acts as his guardian protector',
        skill: 'Soul Sunder',
        unlock: 'After using the ability \'Blood Shield\', while the shield is still in use, Daimon temporarily gains 20% of the enemy target\'s Attack Rating and 30% of their Defense Rating. This ability cannot be stacked',
        unlock1: 'Daimon permanently acquires the target\'s Attack and Defense ratings if the enemy\'s target dies while Daimon\'s \'Blood Shield\' is being used',
        unlock2: 'After using the ability \'Blood Shield\', while the shield is still in use, Daimon temporarily gains 40% of the enemy target\'s Attack Rating and 60% of their Defense Rating. This ability cannot be stacked',
        unlock3: 'Duration of \'Blood Shield\' lasts for 7 seconds'
    },
    furniture: {
        ability: 'Dying Wish',
        unlock1: 'Enemies that have already dealth damage to Daimon receive 40% increased damage for 3 seconds. This abiliy cannot be stacked',
        unlock2: 'Enemies that have already dealth damage to Daimon receive 60% increased damage for 6 seconds. This abiliy cannot be stacked. When Daimon dies, all of his allies receive a shield that is equal to 20% of his max health for 5 seconds'
    }
}