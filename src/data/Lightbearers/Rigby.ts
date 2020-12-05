import { Hero } from '../../structures/Hero'

export const Rigby: Hero = {
    name: 'Rigby',
    title: 'Brewmaster',
    skins: [],
    union: null,
    faction: 'Lightbearer',
    advantage: 'Mauler',
    role: 'Tank',
    type: 'Strength',
    class: 'Warrior',
    trait: 'Dura\'s Might',
    armor: 'Plate',
    signature: {
        name: 'Oak Barrel',
        description: 'Crafted out of sawtooth oak from the dark forest, this barrel possesses unique magical attributes that makes its contents all the more tasty',
        skill: 'Fiery Demise',
        unlock: 'Rigby\'s \'Fire Breath\' ability will trigger an additional explosion on enemies currently set alight by the ability \'Barrel Bomb\', resulting in 180% damage being dealt to them',
        unlock1: 'Damage increased by up to 210%',
        unlock2: 'Damage increased by up to 250%',
        unlock3: 'Explosions cause enemies to be knocked down and stunned for 3 seconds'
    },
    furniture: {
        ability: 'Drunken Rage',
        unlock1: 'Using the ability \'Drunken Frenzy\' causes the ally with the lowest Attack Rating to also enter a state of frenzy. The frenzied state can be stacked multiple times. Each stacked layer of \'frenzy\' reduces the damage the ally receives by 25%. Once this ability has been stacked 8 times, its effects will cease',
        unlock2: 'Once \'frenzy\' has been stacked 3 times, the ally immediately recovers a value of health equal to 35% of Rigby\'s max health'
    }
}