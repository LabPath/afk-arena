import { Hero } from '../../interfaces'

export const Silas: Hero = {
	name: 'Silas',
	title: 'Augmented Death',
	faction: 'Graveborn',
	advantage: 'Lightbearer',
	role: 'Buffer',
	type: 'Intelligence',
	class: 'Support',
	receiving: 'Dura\'s Sustenance',
	armor: 'Padded',
	signature: {
		item: 'Augmentation Blades',
		description: 'A sharp and deadly pair of blades that are laced with a powerful, unknown substance. These blades have been used to augment countless unwilling test subjects',
		skill: 'Adrenaline Shot',
		default: 'Each time an enemy loses 1% of their max health, their health recovery rate decreases by 0.6%, which may be further decreased until it reaches a total value of 36%. Each time an ally loses 1% of their max health, their health recovery rate increases by 0.8%, which may be increased up until it reaches 48%',
		unlock1: 'Health recovery rate of enemies is decreased by 0.8% until it reaches 48%',
		unlock2: 'Health recovery rate of enemies is decreased by 1% until it reaches 60%',
		unlock3: 'Allied heroes that have more than 50% of their max health receive an Attack Rating increase of 20%',
	},
	furniture: {
		ability: 'Rampant Carnage',
		unlock1: 'Using the ability "Injected Fury" on a nearby melee ally additionally increases their Normal Attack damage by 50% and Normal Attack frequency by 30%',
		unlock2: 'The effects of this ability can be utilized by ranged allies whenever "Injected Fury" is used'
	}
}
