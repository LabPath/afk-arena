import { Hero } from '../../structures/Hero'

export const Talene: Hero = {
    name: 'Talene',
    title: 'The Rising Phoenix',
    skins: [],
    union: null,
    faction: 'Celestial',
    advantage: 'Hypogean',
    role: 'Continuous Damage',
    type: 'Agility',
    class: 'Support',
    trait: 'Dura\'s Sustenance',
    armor: 'Leather',
    signature: {
        name: 'Heart of the Phoenix',
        description: 'A powerful and extremely rare stone that was forged within the Core\'s Cradle. The flame that burns within it can never be extinguished',
        skill: 'Resurgence',
        unlock: 'Talene\'s Attack Rating is increased by 10% and her Defense Rating is increased by 20% every time she is reborn using her \'Phoenix Rising\' ability',
        unlock1: 'Talene\'s Attack Rating is increased by 20% and her Defense Rating is increased by 40% every time she is reborn using her \'Phoenix Rising\' ability',
        unlock2: 'Talene immediately recovers 120 energy points each time she is reborn',
        unlock3: 'Talene immediately recovers 400 energy points each time she is reborn'
    },
    furniture: {
        ability: 'Burning Sun',
        unlock1: 'Talene deals 80% AoE damage per second to nearby enemies while in her \'Fireball\' state. 30% of the damage dealt to enemies is converted into Talene\'s health',
        unlock2: 'Talene deals 110% AoE damage per second to nearby enemies while in her \'Fireball\' state. 60% of the damage dealt to enemies is converted into Talene\'s health'
    }
}