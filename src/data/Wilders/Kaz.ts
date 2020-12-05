import { Hero } from '../../structures/Hero'

export const Kaz: Hero = {
    name: 'Kaz',
    title: 'Hand of the Wood',
    skins: [],
    union: 'The Dusk Patrollers',
    faction: 'Wilder',
    advantage: 'Graveborn',
    role: 'Assassin',
    type: 'Agility',
    class: 'Ranger',
    trait: 'Dura\'s Celerity',
    armor: 'Leather',
    signature: {
        name: 'The Night\'s Kiss',
        description: 'Blades as deadly as the night time assassin herself',
        skill: 'Elude',
        unlock: 'At the beginning of the battle Kaz raises her Dodge by 100 points and Crit Rating by 40 points. The increased attributes will gradually decrease over 20 seconds until they return to normal',
        unlock1: 'Increased attributes will decrease over 40 seconds until returning to normal',
        unlock2: 'Kaz\'s chance to dodge magic attacks are increased by 1% for every 16 Dodge points that she gains. Chance to dodge magic attacks can be raised to a maximum of 25%',
        unlock3: 'Kaz\'s chance to dodge magic attacks are increased by 1% for every 14 Dodge points that she gains. Chance to dodge magic attacks can be raised to a maximum of 50%'
    },
    furniture: {
        ability: 'Poison\'s Kiss',
        unlock1: 'Enemies that are dealt damage are poisoned. Poisoned enemies have their Accuracy reduced by 60 points and also lose 70% worth of Kaz\'s Attack Rating value as health every second over a duration of 4 seconds. This ability cannot be stacked',
        unlock2: 'Enemies have their Energy Recovery rates reduced by 50% while poisoned. (Also affects abilities that modify Energy Recovery rates)'
    }
}