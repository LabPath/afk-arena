import { Hero } from '../../interfaces'

export const Thoran: Hero = {
    name: 'Thoran',
    aliases: ['cheeseball', 'cheese'],
    title: 'The Fallen King',
    skins: [],
    union: 'The Wrathful Two',
    faction: 'Graveborn',
    advantage: 'Lightbearer',
    role: 'Tank',
    type: 'Strength',
    class: 'Tank',
    trait: 'Dura\'s Fortitude',
    armor: 'Plate',
    signature: {
        name: 'The Vengeful Crown',
        description: 'The royal symbol of a fallen king. Imbued with spite at the treachery he suffered',
        skill: 'King\'s Will',
        unlock: 'Thoran cannot be killed during the initial focusing phase of his \'Retaliation\' ability',
        unlock1: 'Thoran\'s max health is increased by 15% while in battle',
        unlock2: 'Thoran\'s max health is increased by 30% while in battle',
        unlock3: 'Thoran cannot be killed in battle for the first two times that he enters the focusing phase of his \'Retaliation\' ability'
    },
    furniture: {
        ability: 'Deadly Attraction',
        unlock1: 'Enemies that are stunned by the ability \'Resurrection\' are drawn towards Thoran',
        unlock2: 'Thoran immediately recovers 150 energy points after he is brought back to life by his \'Resurrection\' ability'
    }
}