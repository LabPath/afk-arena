import { Hero } from '../../structures/Hero'

export const Kelthur: Hero = {
    name: 'Kelthur',
    title: 'Plaguegrip',
    skins: [],
    union: null,
    faction: 'Graveborn',
    advantage: 'Lightbearer',
    role: 'Assassin',
    type: 'Agility',
    class: 'Ranger',
    trait: 'Dura\'s Celerity',
    armor: 'Leather',
    signature: {
        name: 'The Harvester',
        description: 'A strange creation. As much a tool for reaping as a weapon for fighting',
        skill: 'Blood Slap',
        unlock: 'When any non-summoned allies which are within 20 levels of Kelthur\'s own level are defeated, Kelthur\'s attack rating will be increased by 20%',
        unlock1: 'Increases Attack Rating by 28%',
        unlock2: 'Increases Attack Rating by 36%',
        unlock3: 'If 3 allied heroes have already died, Kelthur will increase his life leech attributes by 50 points for 10 seconds'
    },
    furniture: {
        ability: 'Life After Death',
        unlock1: 'Kelthur is able to proactively trigger the ability \'Retaliation\' while the ability \'Ethereal Resurgence\' is in effect. Cooldown time of \'Retaliation\' is equal to the ability\'s regular passive interval time',
        unlock2: '\'Retaliation\' cooldown time is reduced by 2 seconds'
    }
}