import { Hero } from '../../interfaces'

export const Anoki: Hero = {
    name: 'Anoki',
    title: 'The Blood Guard',
    faction: 'Mauler',
    advantage: 'Wilder',
    role: 'Control',
    type: 'Strength',
    class: 'Tank',
    receiving: 'Dura\'s Fortitude',
    armor: 'Plate',
    signature: {
        item: 'Blood Guards Warhorn',
        description: 'Hefty and colossal, this horn of war has been left scarred by the many battles it was used in. Once again it call shall be heard, ushering in a new era of war',
        skill: 'War Fury',
        default: 'This ability raises Anoki\'s attack rating by 4% for every non-summoned ally that is standing near him and raises his Defnese Rating by 10% for every enemy standing near him',
        unlock1: 'This ability raises Anoki\'s attack rating by 8% for every non-summoned ally that is standing near him and raises his Defnese Rating by 15% for every enemy standing near him',
        unlock2: 'Excluding summoned entities, when there are more than a total of 3 characters on the battlefied (includes enemies and allies), Anoki recovers 5% of his max health per second and becomes immune to control abilities',
        unlock3: 'This ability raises Anoki\'s attack rating by 12% for every non-summoned ally that is standing near him and raises his Defnese Rating by 20% for every enemy standing near him'
    },
    furniture: {
        ability: 'Blood Guard\'s Honor',
        unlock1: 'Anoki uses his \'Horn of War\' ability again 15 seconds after its initial use. \'Horn of War\' can be used up to 2 times per battle. Each time the ability is used, the shield that it generates will become 50% weaker than the previous shield',
        unlock2: 'Anoki uses his \'Horn of War\' ability again 15 seconds after its initial use. \'Horn of War\' can be used up to 3 times per battle. Each time the ability is used, the shield that it generates will become 70% weaker than the previous shield'
    }
}