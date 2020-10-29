import { Hero } from '../../interfaces'

export const Orthros: Hero = {
    name: 'Orthros',
    title: 'The Seer of Origins',
    faction: 'Celestial',
    advantage: 'Hypogean',
    role: 'Tank',
    type: 'Strength',
    class: 'Tank',
    receiving: 'Dura\'s Fortitude',
    armor: 'Plate',
    signature: {
        item: 'The Heavenly Vision',
        description: 'Crafted by the celestial carpenter, Ansiel, this heavenly timepiece has the ability to manipulate the flow of time and even stop it',
        skill: 'Time Warp',
        default: 'Reduces the Haste of enemies that get too close to Orthros by 30 points',
        unlock1: 'Reduces the Haste of enemies that get too close to Orthros by 45 points',
        unlock2: 'Reduces the Haste of enemies that get too close to Orthros by 60 points',
        unlock3: 'Enemies that remain too close to Orthros for more than 6 seconds will become frozen in time for 3 seconds'
    },
    furniture: {
        ability: 'Time Management',
        unlock1: 'After using the ability \'Time Suspension\', the ally with the highest Attack Rating (excluding Orthros) is able to move normally on the battlefield',
        unlock2: 'Ally\'s Haste is increased by 35 while moving during \'Time Suspension\''   
    }
}