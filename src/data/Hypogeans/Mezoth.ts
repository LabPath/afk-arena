import { Hero } from '../../interfaces'

export const Mezoth: Hero = {
    name: 'Mezoth',
    title: 'Abysmal Butcher',
    faction: 'Hypogean',
    advantage: 'Celestial',
    role: 'Tank',
    type: 'Strength',
    class: 'Tank',
    receiving: 'Dura\'s Fortitude',
    armor: 'Plate',
    signature: {
        item: 'Blood and Gore',
        description: 'Two vicious tools used exclusively to butcher and maim victims that exist as symbol of Mezoth\'s depravity. It is said many poor souls bear the scars of Mezoth\'s wrath on their bodies',
        skill: 'Virulent Green',
        default: 'Hero gains 200 energy points at the start of battles',
        unlock1: '25% of damage received is taken by the enemy imprisoned within Mezoth\'s abdomen',
        unlock2: 'Hero gains 500 energy points at the start of battles',
        unlock3: '50% of damage received is taken by the enemy imprisoned within Mezoth\'s abdomen'
    },
    furniture: {
        ability: 'Fiendish Negation',
        unlock1: 'The duration for the majority of de-buffs affecting Mezoth is reduced by 50% when Mezoth\'s health is above 40%',
        unlock2: 'The duration for the majority of de-buffs affecting Mezoth is reduced by 50% when Mezoth\'s health is above 80%'
    }
}