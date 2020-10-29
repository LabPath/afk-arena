import { Hero } from '../../interfaces'

export const Hendrik: Hero = {
    name: 'Hendrik',
    title: 'The Defender',
    faction: 'Lightbearer',
    advantage: 'Mauler',
    role: 'Tank',
    type: 'Strength',
    class: 'Tank',
    receiving: 'Dura\'s Fortitude',
    armor: 'Plate',
    signature: {
        item: 'The Bastion',
        description: 'A pair of tower shields that when brought together form an unbreakable wall',
        skill: 'Steadfast',
        default: 'At the beginning of battles Hendrik\'s max health is increased by 300% of his attack rating. The max health increase will not affect the proportion of health that Hendrik already possesses',
        unlock1: 'At the beginning of battles Hendrik\'s max health is increased by 600% of his attack rating. The max health increase will not affect the proportion of health that Hendrik already possesses',
        unlock2: 'All of Hendrik\'s attacks now do additional damage that is equal to 2% of his max health',
        unlock3: 'At the beginning of battles Hendrik\'s max health is increased by 1000% of his attack rating. The max health increase will not affect the proportion of health that Hendrik already possesses'
    },
    furniture: {
        ability: 'Defensive Stance',
        unlock1: 'Increases the Defense Rating an allied hero that is positioned above Hendrik in the formation by 25% of Hendrik\'s own Defense Rating value',
        unlock2: 'Increases the Defense Rating an allied hero that is positioned above Hendrik in the formation by 60% of Hendrik\'s own Defense Rating value'
    }
}