import { Hero } from '../../structures/Hero'

export const Arthur: Hero = {
    name: 'Arthur',
    title: 'Pendragon',
    skins: [],
    union: null,
    faction: 'Dimensional',
    advantage: null,
    role: 'Tank',
    type: 'Strength',
    class: 'Tank',
    trait: 'Dura\'s Fortitude',
    armor: 'Plate',
    signature: {
        name: 'The Lost Excalibur',
        description: 'The legendary sword of King Arthur that was returned to him by the Lady of the Lake. It possesses an immense power that can only be wielded by The One True King',
        skill: 'Battle Rally',
        unlock: 'Arthur rallies his team, raising the attack frequency of normal attacks for all allies standing behind Arthur by 50%',
        unlock1: 'Arthur rallies his team, raising the Crit Rating for all allies standing behind Arthur by 15%',
        unlock2: 'Arthur rallies his team, raising the Crit Rating for all allies standing behind Arthur by 30%',
        unlock3: 'Arthur will recovers 5% of his max health every second when there are two or more rallied allies on the battlefield'   
    },
    furniture: {
        ability: 'King\'s Protection',
        unlock1: 'After Arthur uses his ultimate ability \'Smite\', if any of his non-summoned allies (including himself) are dealt fatal damage, this ability will be triggered. The affected ally becomes immune to all of the fatal damage that was required to trigger this ability and also receives a shield that lasts for 5 seconds, which is able to offset damage equal to 35% of Arhtur\'s max health. This ability may only be triggered once per battle',
        unlock2: 'Shield now lasts for 10 seconds, and can offsset damage equal to 45% of Arthur\'s max health'
    }
}