import { Hero } from '../../interfaces'

export const Drez: Hero = {
    name: 'Drez',
    title: 'The Quicksand Recluse',
    faction: 'Mauler',
    advantage: 'Wilder',
    role: 'Burst Damage',
    type: 'Agility',
    class: 'Ranger',
    receiving: 'Dura\'s Celerity',
    armor: 'Leather',
    signature: {
        item: 'Ivory Piercer',
        description: 'One wonders how a small Durri is able to wreak such havoc. The answer: The Ivory Piercer. Crafted from the horns of a powerful iron-jaw beast, this weapon is light but also extremely durable. You don\'t want to be on the wrong end of this powerful weapon',
        skill: 'Hunter\'s Shield',
        default: 'After using his Ultimate ability, Drez receives a shield which is able to mitigate damage worth 400% of his Attack Rating value for a duration of 5 seconds. This ability can be activated 2 times per battle',
        unlock1: 'Value of shield is increased to 600% of Attack Rating Value',
        unlock2: 'Ability can be used up to 4 times per battle',
        unlock3: 'Value of shield is increased to 800% of Attack Rating Value'
    },
    furniture: {
        ability: 'Second Wind',
        unlock1: 'Every time the abilities \'Deadly Ambush\' or \'Bloody Evisceration\' are used, Drez\'s Attack Speed will be increased by 80 points for a duration of 2 seconds',
        unlock2: 'Every time the abilities \'Deadly Ambush\' or \'Bloody Evisceration\' are used, Drez\'s Attack Speed will be increased by 150 points for a duration of 3 seconds'
    }
}