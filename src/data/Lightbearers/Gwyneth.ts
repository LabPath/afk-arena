import { Hero } from '../../interfaces'

export const Gwyneth: Hero = {
    name: 'Gwyneth',
    title: 'The Fair Maiden',
    skins: [],
    union: 'The Young & Old',
    faction: 'Lightbearer',
    advantage: 'Mauler',
    role: 'Continuous Damage',
    type: 'Strength',
    class: 'Ranger',
    trait: 'Dura\'s Celerity',
    armor: 'Plate',
    signature: {
        name: 'Shooting Star',
        description: 'As tall as a person, this longbow requires great strength and accuracy to be used efficiently. The bow gets its name due to the high velocity of its arrows, which are said to be as fast as a shooting star',
        skill: 'Focus Fire',
        unlock: 'Attack Rating is raised to 10% when in close proximity to allied heroes',
        unlock1: 'Attack rating is raised to 20%',
        unlock2: 'Gwyneth fires two arrows in quick succession when she or a nearby ally uses their ultimate ability',
        unlock3: 'Attack rating is raised to 30%'   
    },
    furniture: {
        ability: 'Arrows of Swiftness',
        unlock1: 'Normal Attack triggers the abilities \'Flaming Arrow\' and \'Lightning Arrow\' simultaneously. The damage for this attack is also increased by 15%',
        unlock2: '\'Flaming Arrow\' and \'Lightning Arrow\' are triggered following the death of any non-summoned enemies. The damage for this attack is also increased by 15%'
    }
}