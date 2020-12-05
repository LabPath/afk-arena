import { Hero } from '../../structures/Hero'

export const Estrilda: Hero = {
    name: 'Estrilda',
    title: 'Knight of Valor',
    skins: [],
    union: 'Castellans',
    faction: 'Lightbearer',
    advantage: 'Mauler',
    role: 'Burst Damage',
    type: 'Strength',
    class: 'Warrior',
    trait: 'Dura\'s Might',
    armor: 'Plate',
    signature: {
        name: 'Banner of Rayne',
        description: 'A banner bearing the crest of House Rayne. A symbol of their indomitable spirit',
        skill: 'Inspirit',
        unlock: 'Raises all allies\' attack ratings by 5% and defense ratings by 10% for every non- summoned enemy that falls in combat while Estrilda is alive up until the end of the battle. This ability may be stacked up to 3 times',
        unlock1: 'Raises attack rating by 7.5% and defense rating by 15% every time the ability is used',
        unlock2: 'Raises attack rating by 10% and defense rating by 20% every time the ability is used',
        unlock3: 'Restores 80 energy to all allies when ability is used'
    },
    furniture: {
        ability: 'Fellowship',
        unlock1: 'After the first 18 seconds of battles, if all allies are still alive, all non-summoned allies will have their Attack Ratings increased by 10% and Defense Ratings increased by 20% until the end of the battles',
        unlock2: 'Ability may be activated after 12 seconds of battle'
    }
}