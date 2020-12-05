import { Hero } from '../../structures/Hero'

export const Pippa: Hero = {
    name: 'Pippa',
    title: 'The Muddled Magician',
    skins: [],
    union: null,
    faction: 'Wilder',
    advantage: 'Graveborn',
    role: 'Continuous Damage',
    type: 'Intelligence',
    class: 'Mage',
    trait: 'Dura\'s Sorcery',
    armor: 'Padded',
    signature: {
        name: 'Branch of Verdure',
        description: 'A verdant branch plucked from an ancient and arcane tree, located deep within the heartlands of Wilder territories. Only those whose veins course with the forest’s blood may wield it',
        skill: 'Pippa Power',
        unlock: 'Every time Pippa fires a magic orb, she has a 40% chance to fire an additional magic orb at a different random enemy target while using the ability "Pippa\'s Pandemonium"',
        unlock1: 'Every magic orb fired using "Pippa’s Pandemonium" has a 65% chance to produce an additional orb that targets a different random enemy target',
        unlock2: 'Pippa\'s teleported ally is immune to all damage for 5 seconds after being teleported by the ability "Astral Shift"',
        unlock3: 'After using the ability "Transmogrification" a total of 2 times, Pippa will no longer fail to cast this spell, and it will now target the two enemies with the highest Attack Ratings'
    },
    furniture: {
        ability: 'Pippa\'s Perfection',
        unlock1: 'Pippa continues to imitate the Ultimate ability which she imitated for the first time throughout the battle, simultaneously improving its effects. While imitating Nemora\'s Ultimate, Pippa converts the excess portion of its healing effects into a shield, which exists for 12 seconds. While imitating Arden\'s Ultimate, every lightning bolt cast produces an additional lightning bolt which strikes a nearby enemy, dealing damage to them and stunning them for 1.5 seconds. While imitating Tasi\'s Ultimate, the enemy loses 20 Energy points every 0.5 seconds while they are asleep',
        unlock2: 'Pippa gains 80 Energy points every time another hero uses their Ultimate ability, and her Attack Rating is also permanently increased by 10% each time. Permanent Attack Rating increase may be stacked up to 12 times'
    }
}