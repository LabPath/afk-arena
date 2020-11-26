import { Hero } from '../../interfaces'

export const Ukyo: Hero = {
    name: 'Ukyo',
    title: 'Wandering Swordsman',
    skins: [],
    union: null,
    faction: 'Dimensional',
    advantage: null,
    role: 'Continuous Damage',
    type: 'Agility',
    class: 'Warrior',
    trait: 'Dura\'s Might',
    armor: 'Leather',
    signature: {
        name: 'Nameless Self-Made Sword',
        description: 'Ukyo Tachibana\'s self-crafted, unamed sword. Simple and unadorned. Shinmusou Ittou Ryu',
        skill: 'Rage Eruption',
        unlock: 'This ability can be used once per battle. After using his ultimate ability, Ukyo will be immune to all control abilites for 8 seconds, his Attack Rating will be increased by 20% and his Life Leech attribute will be increased by 10 points',
        unlock1: 'Ukyo\'s Attack Rating is increased by 30% and his Life Leech attribute is increased by 25 points',
        unlock2: 'Ukyo\'s Attack Rating is increased by 40% and his Life Leech attribute is increased by 40 points',
        unlock3: 'Ukyo can use this ability up to 3 times per battle'
    },
    furniture: {
        ability: 'Ferocity Burst',
        unlock1: 'Ukyo\'s Attack Rating is increased by 6% each time he deals damage to an enemy. This ability can be stacked up to 6 times. If an enemy dodges, mitigates or is immune to one of Ukyo\'s attacks, he will lose 3 layers of his increased Attack Rating',
        unlock2: 'Ability can be stacked up to 15 times'
    }
}