import { Hero } from '../../interfaces'

export const Mortas: Hero = {
    name: 'Mortas',
    title: 'The Insidious',
    faction: 'Hypogean',
    advantage: 'Celestial',
    role: 'Regen',
    type: 'Agility',
    class: 'Support',
    receiving: 'Dura\'s Sustenance',
    armor: 'Leather',
    signature: {
        item: 'Deception',
        description: 'The strongest thing in the world is neither magic nor might, it is deception',
        skill: 'Trickery',
        default: 'When a Normal Attack deals a Critical Strike, another enemy is additionally struck, however, the damage dealt is reduced 70% and the additional attack does not trigger any effects',
        unlock1: 'When a Normal Attack deals a Critical Strike, another enemy is additionally struck, however, the damage dealt is reduced 50% and the additional attack does not trigger any effects',
        unlock2: 'Normal Attacks that are buffed by "Greed" now have a small Area of Effect',
        unlock3: 'When a Normal Attack deals a Critical Strike, another enemy is additionally struck, however, the damage dealt is reduced 20% and the additional attack does not trigger any effects',
    },
    furniture: {
        ability: 'Deadly Redemption',
        unlock1: 'When the ally benefiting from the effects of the abilit "Empowerment" dies, Mortas takes back the empowered Attack Rating and Attack Speed bonuses from them and deals 250% AoE damage from where the ally was standing. This ability may only be activated 1 time(s) per battle',
        unlock2: 'When the ally benefiting from the effects of the abilit "Empowerment" dies, Mortas takes back the empowered Attack Rating and Attack Speed bonuses from them and deals 250% AoE damage from where the ally was standing. This ability may only be activated 3 time(s) per battle'
    }
}