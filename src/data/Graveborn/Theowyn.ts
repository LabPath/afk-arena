import { Hero } from '../../structures/Hero'

export const Theowyn: Hero = {
    name: 'Theowyn',
    title: 'The Willowing Widow',
    skins: [],
    union: null,
    faction: 'Graveborn',
    advantage: 'Lightbearer',
    role: 'Continuous Damage',
    type: 'Agility',
    class: 'Ranger',
    trait: 'Dura\'s Celerity',
    armor: 'Leather',
    signature: {
        name: 'Crown of Thorns',
        description: 'Trapped by a crown of thorns, even in death, the wearer is humiliated by what it symbolizes. The crown acts as a constant reminder of the fell deeds perpetrated by its wearer, who even in death, is doomed to wear it for an eternity',
        skill: 'Sorrowful Affliction',
        unlock: 'This ability is activated every 15 seconds of battle. The 1 enemies which have dealt the highest amount of damage to Theowyn within the last 15 seconds shall be afflicted by the effects of Theowyn’s \'Spectral Curse\' ability',
        unlock1: 'The Attack Ratings of cursed targets are decreased by 20% for 8 seconds',
        unlock2: 'Number of enemies targeted by this ability is increased to 2',
        unlock3: 'Number of enemies targeted by this ability is increased to 3'
    },
    furniture: {
        ability: 'Entangled Souls',
        unlock1: 'Enemies cannot recover energy when they are afflicted by the \'Haunting Specter\' ability',
        unlock2: 'Enemies afflicted by the \'Haunting Specter\' ability now give 100% of the energy they would have recovered to Theowyn'
    }
}