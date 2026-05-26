const menuCategories = [

    {
        id: "ramen",
        title: "Ramen"
    },

    {
        id: "sushi",
        title: "Sushi"
    },

    {
        id: "rice",
        title: "Rice Bowl"
    }

];

const menuItems = [

    {
        id: 1,

        category: "ramen",

        name: "Hausgemachte Saigon Ramen",

        allergens: "A,C,F6",

        description:
        "Eine traditionelle Asiatische Suppe mit frischen Eiernudeln, Kräutern, gebratenem Knoblauch, Zwiebeln und einer klaren würzigen Brühe.",

        options: [

            {
                label: "A) gegrilltem Hähnchenfilet",
                allergens: "A,C,F6",
                price: 16.9
            },

            {
                label: "B) gegrilltem Schweinefleisch",
                allergens: "",
                price: 16.9
            },

            {
                label: "C) gegrilltem Rindfleisch (Entrecote 200gr)",
                allergens: "",
                price: 18.9
            }

        ]
    },

    {
        id: 2,

        category: "sushi",

        name: "Lachs Sushi Set",

        allergens: "D",

        description:
        "Frischer Lachs mit japanischem Reis und hausgemachter Sauce.",

        options: [

            {
                label: "8 Stück",
                allergens: "D",
                price: 14.9
            }

        ]
    }

];