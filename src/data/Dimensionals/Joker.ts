import { Hero } from '../../structures/Hero'

export const Joker: Hero = {
    name: 'Joker',
    title: 'Leader of Few Words',
    skins: [],
    union: null,
    faction: 'Dimensional',
    advantage: null,
    role: 'Continuous Damage',
    type: 'Agility',
    class: 'Ranger',
    trait: 'Dura\'s Celerity',
    armor: 'Leather',
    signature: {
        name: 'Vile Sword',
        description: 'A death-dealing replica dagger',
        skill: 'Widespread Attack',
        unlock: 'After Joker uses his Ultimate ability, the AoE range of his normal attacks is increased for 7 seconds, during which time he deals 20% additional damage',
        unlock1: 'Joker gains 20 Attack Speed points while this ability\'s effects are in use',
        unlock2: 'Joker gains 35 Attack Speed points while this ability\'s effects are in use',
        unlock3: 'Duration of ability is increased to 15 seconds'
    },
    furniture: {
        ability: 'Leader\'s Enlightenment',
        unlock1: 'While Joker is suffering the effects of enemy control abilities, he has a 25% greater chance of being extricated by his allies for every 1 non-summoned ally that is currently not being controlled, and shall be immune to enemy control abilities for 5 seconds if he is successfully extricated. This ability can be triggered once every 10 seconds. If the ally Queen is also on the battlefield, she will raise Joker extrication chances by an additional 40%',
        unlock2: 'Each ally has a 35% chance of extricating Joker from enemy control abilities, and Joker gains a shield worth 40% of his max health that exists for 5 seconds if he is successfully extricated'
    }
}