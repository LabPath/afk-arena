import { Hero } from '../../structures/Hero'

export const Alna: Hero = {
    name: 'Alna',
    title: 'The Frozen Mother',
    skins: [],
    union: null,
    faction: 'Celestial',
    advantage: 'Hypogean',
    role: 'Debuffer',
    type: 'Agility',
    class: 'Warrior',
    trait: 'Dura\'s Might',
    armor: 'Leather',
    signature: {
        name: 'Frostbite',
        description: 'The Frozen Mother\'s bone-piercing spear, forged in a blazing furnace as hot as her soul',
        skill: 'Unrelenting Heart',
        unlock: 'During battles, when Alna suffers damage, she gradually recovers 50% of the health which was lost over the next 15 seconds',
        unlock1: 'During battles, when Alna suffers damage, she gradually recovers 70% of the health which was lost over the next 15 seconds',
        unlock2: 'During battles, when Alna suffers damage, she gradually recovers 70% of the health which was lost over the next 10 seconds',
        unlock3: 'When Alna\'s health drops below 50% for the first time, the effects if "Winter\'s Call" are triggered'
    },
    furniture: {
        ability: 'Army of Two',
        unlock1: 'When placed on the frontline, damage dealt by the other frontline ally causes enemy targets to lose 5 haste points for 30 seconds. This ability cannot be stacked',
        unlock2: 'When placed on the frontline, the effects of the ability "Winter\'s Call" also take effect for her other frontline ally'
    }
}