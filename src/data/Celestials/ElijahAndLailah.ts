import { Hero } from '../../structures/Hero';

export const ElijahAndLailah: Hero = {
    name: 'Elijah and Lailah',
    aliases: ['twins'],
    title: 'Celestial Twins',
    skins: ['Tango D\'Anima'],
    union: null,
    faction: 'Celestial',
    advantage: 'Hypogean',
    role: 'Buffer',
    type: 'Intelligence',
    class: 'Support',
    trait: 'Dura\'s Sustenance',
    armor: 'Padded',
    signature: {
        name: 'Bonding Feathers',
        description: 'A pair of headdresses that allow an uncanny connection between the wearers',
        skill: 'Blessed Binding',
        unlock: 'When Lailah and Elijah are in close proximity to one another, their attack rating will be increased by 5%. When they are far apart from one another, their defense rating will be increased by 15%',
        unlock1: 'When Lailah and Elijah are in close proximity to one another, their attack rating will be increased by 10%. When they are far apart from one another, their defense rating will be increased by 25%',
        unlock2: 'When Elijah\'s normal attack deals a critical strike to an enemy, the affected enemy\'s damage towards Lailah will be reduced by 40% for 6 seconds',
        unlock3: 'When Lailah\'s normal attack deals a critical strike to an enemy, any damage dealt to the affected enemy by Elijah will be increased by 100% for 6 seconds'
    },
    furniture: {
        ability: 'Heaven\'s Grace',
        unlock1: 'If Elijah or Lailah lose a combined amount of health equal to 70% of their max health, they are granted a protective shield that is able to mitigate damage equal to 50% of their max health for 6 seconds',
        unlock2: 'Shield duration increased to 15 seconds'
    }
}