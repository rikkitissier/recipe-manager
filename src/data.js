var data = {
	appState: {
		selectedLabel: 0,
		selectedRecipe: 0,
		selectedRecipeLabels: []
	},
	labels: [
		{
			slug: 'mains',
			title: "Main dishes",
			id: 1	
		},
		{
			slug: 'dessert',
			title: "Desserts",
			id: 2
		},
		{
			slug: 'indian',
			title: "Indian dishes",
			id: 3
		},
		{
			slug: 'slow-cooker',
			title: "Slow cooker meals",
			id: 4
		}
	],
	recipes: [
		{
			id: 1,
			slug: "asian-porkchops",
			title: "Asian porkchops",
			labels: [1],
			fave: false,
			prep: "30 minutes",
			photos: [
				'https://placehold.it/350x350/607D8B'
			],
			ingredients: [
				{
					title: "Porkchops",
					contents: [
						'6-9 pork chops',
						'2 eggs',
						'4 tbsp water',
						'2 cups flour'
					]
				},
				{
					title: "Glaze",
					contents: [
						'1 1/2 cups honey',
						'1/2 cup brown sugar',
						'1/2 tsp ginger',
						'Dash cayenne pepper'
					]
				}
			],
			directions: [
				"Whisk the eggs and 4 Tbs. water together in a shallow dish.",
				"Mix the flour, salt, pepper, and garlic powder in another shallow dish. Dip the chops in the flour, then over into the egg.",
				"Then back over into the flour mixture once again. This is what puts the extra crispy coating on the chops. Be sure to get plenty of flour on in this last coating, then shake them a little and place in a pan with about a half inch of oil. Be sure the oil is hot, but not too hot or the chops will cook too fast. You need to get it good and hot and then turn to about medium."
			]
		},
		{
			id: 2,
			slug: "chicken-biriyani",
			title: "Chicken biriyani",
			labels: [1],
			fave: true,
			prep: "Less than 30 minutes",
			photos: [
				'https://placehold.it/350x350/607D8B'
			],
			ingredients: [
				{
					title: "",
					contents: [
						'300g basmati rice',
						'25g butter',
						'1 large onion, finely sliced',
						'1 bay leaf',
						'3 cardamom pods',
						'small cinnamon stick',
						'1 tsp turmeric'
					]
				}
			],
			directions: [
				"Soak the rice in warm water, then wash in cold until the water runs clear. Heat butter in a saucepan and cook the onions with the bay leaf and other whole spices for 10 mins. Sprinkle in the turmeric, then add chicken and curry paste and cook until aromatic.",
				"Stir the rice into the pan with the raisins, then pour over the stock. Place a tight-fitting lid on the pan and bring to a hard boil, then lower the heat to a minimum and cook the rice for another 5 mins. Turn off the heat and leave for 10 mins. Stir well, mixing through half the coriander. To serve, scatter over the rest of the coriander and the almonds."
			]
		},
		{
			id: 3,
			slug: "spanish-chicken",
			title: "Spanish chicken",
			labels: [1,4],
			fave: true,
			prep: "6 hours",
			photos: [
				'https://placehold.it/350x350/607D8B'
			],
			ingredients:[
				{
					title: "",
					contents: [
						'4 chicken breasts or thighs or mix of both',
						'2 large sliced onions',
						'3 cloves garlic',
						'Tin chopped tomatoes',
						'300 grams? firm potatoes, whole if very small, or cut into small pieces if larger',
						'1 or 2 bay leaves',
						'1 level tablespoon paprika or sweet paprika +',
						'1 level tablespoon smoked paprika',
						'150 ml chicken stock',
						'1 level dessertspoon all purpose flour',
						'Dash chilli or similar if more heat needed',
						'Dried oregano ',
						'Ground black pepper',
						'Salt to taste',
						'Sliced chorizo or bacon lardons or chopped smoked bacon (optional) ',
					]
				}
			],
			directions: [
				"Brown chicken in butter or oil and transfer to separate casserole",
				"Cook onions in same pan until translucent, (add chorizo or bacon also at this stage if using, sautéing along with onion.)",
				"Crush garlic and add, together with paprikas, black pepper, oregano to taste and bay leaves.",
				"Add the flour and stir all together, add tinned tomatoes, then gradually add chicken stock, stirring.",
				"Return chicken to the sauce, with the potatoes. Slow cook for 5 to 6 hours? ",
				"Adjust seasoning, adding salt and chilli if necessary. Serve with warm crusty bread."
			]
		}
	]	
};

export default data;