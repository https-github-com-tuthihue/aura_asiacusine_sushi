const menuCategories = [
    { id: "SUPPE", title: "SUPPE" },
    { id: "SALATE KALTE VORSPEISEN", title: "SALATE KALTE VORSPEISEN" },
    { id: "WARME VORSPEISEN", title: "WARME VORSPEISEN" },
    { id: "HAUPTSPEISEN", title: "HAUPTSPEISEN" },
    { id: "GRILL SPEZIALITÄTEN", title: "GRILL SPEZIALITÄTEN" },
    { id: "AURA GRILL", title: "AURA GRILL" },
    { id: "HAPPY KID", title: "HAPPY KID" },
    { id: "BEILAGEN", title: "BEILAGEN" },
    { id: "SUSHIKARTE", title: "SUSHIKARTE" },
    { id: "SPEZIAL NIGIRI 2 STK", title: "SPEZIAL NIGIRI 2 STK" },
    { id: "HOSOMAKI 6 STK", title: "HOSOMAKI 6 STK" },
    { id: "INSIDE OUT 8 STK", title: "INSIDE OUT 8 STK" },
    { id: "SPEZIAL ROLL 8 STK", title: "SPEZIAL ROLL 8 STK" },
    { id: "CRISPYROLL 6 STK", title: "CRISPYROLL 6 STK" },
    { id: "SASHIMI", title: "SASHIMI" },
    { id: "SUSHIMENÜ", title: "SUSHIMENÜ" },
    { id: "NACHTISCH", title: "NACHTISCH" },
    { id: "ALKOHOLFREIE GETRÄNKE", title: "ALKOHOLFREIE GETRÄNKE" },
    { id: "KALTE HAUSGEMACHTE GETRÄNKE", title: "KALTE HAUSGEMACHTE GETRÄNKE" },
    { id: "SÄFTE UND SCHORLEN", title: "SÄFTE UND SCHORLEN" },
    { id: "BIER", title: "BIER" },
    { id: "APERETIFS&LONGDRINKS", title: "APERETIFS & LONGDRINKS" },
    { id: "COCKTAILS", title: "COCKTAILS" },
    { id: "DIGESTIF", title: "DIGESTIF" },
    { id: "OFFENER WEISSWEIN", title: "OFFENER WEISSWEIN" },
    { id: "OFFENER ROT- & ROSEWEIN", title: "OFFENER ROT- & ROSEWEIN" },
    { id: "WARME GETRÄNKE", title: "WARME GETRÄNKE" }
];

const menuItems = [
    // ================= SUPPE =================
    {
        id: 1,
        category: "SUPPE",
        name: "Gemüsesuppe",
        allergens: "D,F",
        isVegetarian: true,
        description: "Suppe mit verschiedenen frischen Gemüse",
        price: 5.0
    },
    {
        id: 2,
        category: "SUPPE",
        name: "Tom Yam Suppe",
        allergens: "B",
        description: "Suppe mit Champignon, Garnelen, Lauchzwiebeln, Koriander, Limettensaft, leicht scharf",
        price: 5.8
    },
    {
        id: 3,
        category: "SUPPE",
        name: "Asia Soul Suppe",
        allergens: "F,6",
        description: "Geschmacksintensive Suppe mit zerkleinerter Ente, Hähnchen, Pilze, Tofu und Eier Stücken. Koriander on top. Milde Schärfe",
        price: 5.5
    },
    {
        id: 4,
        category: "SUPPE",
        name: "Catch the Fish Suppe",
        allergens: "B,D,1,2,4",
        description: "Suppe mit Lachs, Champignons, Garnelen, Surimi, Muschel, Zitronenblättern, Limettensaft",
        price: 6.9
    },
    {
        id: 5,
        category: "SUPPE",
        name: "Hausgemachte Saigon Ramen",
        allergens: "A,C,F6",
        description: "Eine traditionelle Asiatische Suppe mit frischen Eiernudeln, Kräutern, gebratenem Knoblauch, Zwiebeln und einer klaren würzigen Brühe.",
        options: [
            { label: "A) gegrilltem Hähnchenfilet", allergens: "A,C,F6", price: 16.9 },
            { label: "B) gegrilltem Schweinefleisch", price: 16.9 },
            { label: "C) gegrilltem Rindfleisch (Entrecote 200gr)", price: 18.9 }
        ]
    },
    {
        id: 6,
        category: "SUPPE",
        name: "Vietnam Suppe Pho",
        allergens: "F.H",
        description: "Bekannte vietnamesische Pho Suppe mit Reisbandnudeln, frischen Kräutern und einer kräftigen klaren Brühe.",
        options: [
            { label: "Tofu", allergens: "F.H", price: 11.9 },
            { label: "Hähnchenfilet", price: 13.9 },
            { label: "Rindfleisch (Entrecote)", price: 14.9 }
        ]
    },

    // ================= SALATE KALTE VORSPEISEN =================
    {
        id: 7,
        category: "SALATE KALTE VORSPEISEN",
        name: "Seetangsalat",
        allergens: "K",
        isVegetarian: true,
        description: "Algensalat serviert mit grünem Salat, knackigen Kimchigurken und Sesam",
        price: 6.3
    },
    {
        id: 8,
        category: "SALATE KALTE VORSPEISEN",
        name: "Avocado Salat",
        allergens: "G,K",
        description: "Gemüsesalat mit hausgemachter Dressingsosse und frischen Avocado, serviert mit Mango- und Cocktailsauce",
        price: 6.8
    },
    {
        id: 9,
        category: "SALATE KALTE VORSPEISEN",
        name: "Hausgemachter frischer Salat",
        allergens: "D.E",
        description: "Verschiedene frische Blattsalate mit Paprika, Mango, Cocktailtomaten, Koriander, Balsamikum, Minze, Zwiebeln und hausgemachter Dressingsauce oder leicht scharfer Fischsauce mit Limetten und Knoblauch",
        options: [
            { label: "A) Classic", allergens: "D.E", price: 6.3, priceLarge: 9.8 },
            { label: "B) Tofu", price: 11.5 },
            { label: "C) gegrilltes Hähnchenfilet", price: 13.5 },
            { label: "D) Tempura Garnelen", price: 14.9 },
            { label: "E) gegrilltem Lachs", price: 14.9 },
            { label: "F) gegrilltem Butterfisch", price: 14.9 },
            { label: "G) gegrilltes Entrecote Rindfleisch", price: 14.9 }
        ]
    },
    {
        id: 10,
        category: "SALATE KALTE VORSPEISEN",
        name: "Sommerrollen (6 Stück)",
        allergens: "DEFK",
        description: "Sommerrolle gerollt mit Reispapier, gefüllt mit frischem verschiedenem Gemüse und Reisnudeln, serviert mit Erdnusssauce und Fischsauce",
        options: [
            { label: "A) Vegetarisch", allergens: "DEFK", price: 6.3 },
            { label: "B) Frischkäse", price: 6.8 },
            { label: "C) paniertem Hähnchen", price: 7.3 },
            { label: "D) gegrilltem Schweinefleisch", price: 7.3 },
            { label: "E) Tempura Garnelen", price: 7.9 },
            { label: "F) Lachsfilet", price: 7.9 }
        ]
    },

    // ================= WARME VORSPEISEN =================
    {
        id: 11,
        category: "WARME VORSPEISEN",
        name: "Frühlingsrollen vegetarisch",
        allergens: "A.F",
        isVegetarian: true,
        description: "Knusprige Frühlingsrollen mit vietnam. Gemüse, süss sauer Sauce",
        price: 5.9
    },
    {
        id: 12,
        category: "WARME VORSPEISEN",
        name: "Salmon Frühlingsrollen (2 Stück)",
        allergens: "ADF",
        description: "Knusprige hausgemachte Frühlingsrollen mit frischem Lachs, vietnam. Gemüse, serviert mit Sauce",
        price: 7.3
    },
    {
        id: 13,
        category: "WARME VORSPEISEN",
        name: "Gyoza",
        allergens: "F.A.",
        description: "Gebratene Teigtaschen gefüllt mit Hähnchen, Salat serviert mit dunkler Sauce",
        price: 5.9
    },
    {
        id: 14,
        category: "WARME VORSPEISEN",
        name: "Tsuki",
        allergens: "ABF",
        description: "Gebackene Teigtaschen gefüllt Garnele, Salat serviert mit Sauce",
        price: 5.9
    },
    {
        id: 15,
        category: "WARME VORSPEISEN",
        name: "Steamed Dumpling",
        allergens: "A.B.F",
        description: "Gedämpfte Teigtaschen gefüllt mit Garnelen serviert mit Salat und dunkler Sauce",
        price: 5.9
    },
    {
        id: 16,
        category: "WARME VORSPEISEN",
        name: "Potatoshrimp",
        allergens: "AB",
        description: "Garnelen im knusprigem Teigmantel serviert Sauce",
        price: 6.5
    },
    {
        id: 17,
        category: "WARME VORSPEISEN",
        name: "Tempura Gemüse",
        allergens: "A",
        isVegetarian: true,
        description: "Verschiedene Gemüse und Zwiebel in knuspriger Panade serviert mit Sauce",
        price: 6.8
    },
    {
        id: 18,
        category: "WARME VORSPEISEN",
        name: "Tempura Garnelen (3 Stk.)",
        allergens: "A.B.F",
        description: "Panierte Garnelen, Gemüsesalat, dunkle Sauce",
        price: 6.8
    },
    {
        id: 19,
        category: "WARME VORSPEISEN",
        name: "Yakitori Chicken (3 Stk.)",
        allergens: "F",
        description: "Gegrillte Hähnchenspieße mit Teriyaki Sauce, Gemüsesalat",
        price: 6.8
    },
    {
        id: 20,
        category: "WARME VORSPEISEN",
        name: "Sate Chicken (2 Stk.)",
        allergens: "E",
        description: "Gegrillte Hähnchenspieße mit Erdnuss Sauce, Gemüsesalat",
        price: 6.8
    },
    {
        id: 21,
        category: "WARME VORSPEISEN",
        name: "Edamame",
        allergens: "F",
        isVegetarian: true,
        description: "Junge japanische Sojabohnen mit Meersalz",
        price: 5.3
    },
        {
        id: 22,
        category: "WARME VORSPEISEN",
        name: "Vorspeisen Mix",
        image: "../assets/images/menu/vorspeisenmix.webp",
        allergens: "A,B,F,6",
        description: "Fünf verschiedene gebackene Vorspeisen",
        price: 6.8
    },
    {
        id: 23,
        category: "WARME VORSPEISEN",
        name: "Aura Cuisine Platte für 2 Personen",
        image: "../assets/images/menu/AuraCuisinePlatte.webp",
        allergens: "A,B,F,6",
        description: "Veg. Sommerrolle, Edamame, veg. Frühlingsrollen, Gyoza , Tsuki, Potatoshrimp und gebackene Dumpling",
        price: 17.9
    },

    // ================= HAUPTSPEISEN =================
    {
        id: 25,
        category: "HAUPTSPEISEN",
        name: "Lauwarmer Reisnudelsalat",
        image: "../assets/images/menu/LauwarmerReisnudelsalat.webp",
        allergens: "A,E,D",
        description: "Reisnudelsalat mit frischem Gemüse, Erdnüssen, roten Zwiebeln, Kimchi und hausgemachter Sauce",
        options: [
            { label: "A) Vegetarische Frühlingsrollen", allergens: "AED", price: 15.3 },
            { label: "B) Tofu", price: 14.9 },
            { label: "C) Salmon Frühlingsrollen (Lachs)", price: 15.9 },
            { label: "D) gegrilltem Schweinefleisch", price: 14.9 },
            { label: "E) gegrilltem Rindfleisch", price: 16.9 }
        ]
    },
    {
        id: 26,
        category: "HAUPTSPEISEN",
        name: "Fire Wok Noodles",
        image: "../assets/images/menu/FireWokNoodles.webp",
        allergens: "FC6",
        description: "Frische gebratene Eiernudeln mit frischem Gemüse und Zwiebeln",
        options: [
            { label: "A) Tofu", allergens: "FC6", price: 12.9 },
            { label: "B) Hähnchenfilet", price: 13.5 },
            { label: "C) Paniertem Hühnerfleisch", price: 14.9 },
            { label: "D) Knusprige Hähnchenkeulen (filetiert)", price: 14.9 },
            { label: "E) Knusprige Barbarie-Entenbrust", price: 16.9 },
            { label: "H) Garnelen", price: 16.9 },
            { label: "R) Rindfleisch Entrecote", price: 16.9 }
        ]
    },
    {
        id: 27,
        category: "HAUPTSPEISEN",
        name: "Fried Udon Noodles",
        allergens: "A,F6",
        description: "Gebratene weiße Nudeln mit verschiedenem Gemüse, Zwiebeln, Sojasprossen",
        options: [
            { label: "A) Tofu", allergens: "A,F6", price: 12.9 },
            { label: "B) Hähnchenfilet", price: 13.5 },
            { label: "C) Paniertem Hühnerfleisch", price: 14.9 },
            { label: "D) Knusprige Hähnchenkeulen (filetiert)", price: 14.9 },
            { label: "E) Knusprige Barbarie-Entenbrust", price: 16.9 },
            { label: "H) Garnelen", price: 16.9 },
            { label: "R) Rindfleisch Entrecote", price: 16.9 }
        ]
    },
    {
        id: 28,
        category: "HAUPTSPEISEN",
        name: "Rote Curry Sauce",
        allergens: "AG",
        description: "Rotes Curry mit jungen frischen Gemüse, serviert mit Duftreis, milde Schärfe",
        options: [
            { label: "A) Tofu", allergens: "AG", price: 12.9 },
            { label: "B) Hähnchenfilet", price: 13.5 },
            { label: "C) Paniertem Hühnerfleisch", price: 14.9 },
            { label: "D) Knusprige Hähnchenschenkel (filetiert)", price: 14.9 },
            { label: "E) Knusprige Barbarie-Entenbrust", price: 16.9 },
            { label: "H) Garnelen", price: 16.9 },
            { label: "L) Gegrilltem Lachs", price: 16.9 },
            { label: "K) Gegrilltem Butterfisch", price: 16.9 }
        ]
    },
    {
        id: 29,
        category: "HAUPTSPEISEN",
        name: "Mango Kokos Sauce",
        allergens: "AG",
        description: "Mango-Kokos-Sauce mit jungen frischen Gemüse, serviert mit Duftreis",
        options: [
            { label: "A) Tofu", allergens: "AG", price: 12.9 },
            { label: "B) Hähnchenfilet", price: 13.5 },
            { label: "C) Paniertem Hühnerfleisch", price: 14.9 },
            { label: "D) Knusprige Hähnchenschenkel (filetiert)", price: 14.9 },
            { label: "E) Knusprige Barbarie-Entenbrust", price: 16.9 },
            { label: "H) Garnelen", price: 16.9 },
            { label: "L) Gegrilltem Lachs", price: 16.9 },
            { label: "K) Gegrilltem Butterfisch", price: 16.9 }
        ]
    },
    {
        id: 30,
        category: "HAUPTSPEISEN",
        name: "Erdnuss Sauce",
        allergens: "AGE",
        description: "Erdnuss-Kokos-Sauce mit jungen frischen Gemüse, serviert mit Duftreis",
        options: [
            { label: "A) Tofu", allergens: "AGE", price: 12.9 },
            { label: "C) Paniertem Hühnerfleisch", price: 14.9 },
            { label: "D) Knusprige Hähnchenschenkel (filetiert)", price: 14.9 },
            { label: "E) Knusprige Barbarie-Entenbrust", price: 16.9 },
            { label: "L) Gegrilltem Lachs", price: 16.9 },
            { label: "K) Gegrilltem Butterfisch", price: 16.9 }
        ]
    },
    {
        id: 31,
        category: "HAUPTSPEISEN",
        name: "Süß-Sauer Sauce",
        allergens: "AG6",
        description: "Süß-Sauer-Sauce mit jungen frischen Gemüse, serviert mit Duftreis",
        options: [
            { label: "A) Tofu", allergens: "AG6", price: 12.9 },
            { label: "C) Paniertem Hühnerfleisch", price: 14.9 },
            { label: "E) Knusprige Barbarie-Entenbrust", price: 16.9 }
        ]
    },
    {
        id: 32,
        category: "HAUPTSPEISEN",
        name: "Dunkle Sauce",
        allergens: "AGF6",
        description: "Dunkle Sauce mit jungen frischen Gemüse, serviert mit Duftreis",
        options: [
            { label: "A) Tofu", allergens: "AGF6", price: 12.9 },
            { label: "B) Hähnchenfilet", price: 13.5 },
            { label: "C) Paniertem Hühnerfleisch", price: 14.9 },
            { label: "D) Knusprige Hähnchenschenkel (filetiert)", price: 14.9 },
            { label: "E) Knusprige Barbarie-Entenbrust", price: 16.9 },
            { label: "H) Garnelen", price: 16.9 },
            { label: "R) Rindfleisch Entrecote", price: 16.9 }
        ]
    },
    {
        id: 33,
        category: "HAUPTSPEISEN",
        name: "Scharfe Sauce",
        allergens: "AF6",
        description: "Scharfe Sauce mit jungen frischen Gemüse, Zitronengras, Petersilie, Chili, Zwiebeln, serviert mit Duftreis",
        options: [
            { label: "A) Tofu", allergens: "AF6", price: 12.9 },
            { label: "B) Hähnchenfilet", price: 13.5 },
            { label: "C) Paniertem Hühnerfleisch", price: 14.9 },
            { label: "E) Knusprige Barbarie-Entenbrust", price: 16.9 },
            { label: "H) Garnelen", price: 16.9 },
            { label: "L) Gegrilltem Lachs", price: 16.9 },
            { label: "K) Gegrilltem Butterfisch", price: 16.9 }
        ]
    },
    {
        id: 34,
        category: "HAUPTSPEISEN",
        name: "Teriyaki Sauce",
        allergens: "AF6",
        description: "Gedämpftes frisches Gemüse mit würziger Teriyaki Sauce, serviert mit Duftreis und Salat",
        options: [
            { label: "B) Gegrilltem Hähnchenfilet", allergens: "AF6", price: 14.9 },
            { label: "H) Gegrillten Garnelen", price: 16.9 },
            { label: "L) Gegrilltem Lachs", price: 16.9 },
            { label: "K) Gegrilltem Butterfisch", price: 16.9 }
        ]
    },

    // ================= GRILL SPEZIALITÄTEN =================
    {
        id: 35,
        category: "GRILL SPEZIALITÄTEN",
        name: "Grill Dishes",
        allergens: "AFG",
        description: "Serviert mit frischem Salat, Kimchigurken, gegrilltem Gemüse, frittiertem Duftreis oder Süßkartoffeln und hausgemachter Sauce",
        options: [
            { label: "B) Gegrilltem Hähnchenfilet", allergens: "AFG", price: 21.9 },
            { label: "H) Gegrillten Garnelen", price: 26.9 },
            { label: "R) Gegrilltem Rindfleisch Entrecote", price: 26.9 },
            { label: "L) Gegrilltem Lachs", price: 26.9 }
        ]
    },

    // ================= AURA GRILL =================
    {
        id: 42,
        category: "AURA GRILL",
        name: "Grillplatte für 2 Personen",
        allergens: "ADFG",
        description: "Serviert mit frischem Salat, Kimchigurken, gegrilltem Gemüse, frittierter Duftreis oder Süßkartoffeln und hausgemachter Sauce, mit gegrilltem Rindfleisch vom Entrecote, gegrilltem Hähnchenfilet und gegrilltem Butterfisch",
        price: 64.9
    },

    // ================= HAPPY KID =================
    {
        id: 43,
        category: "HAPPY KID",
        name: "Tempura Garnelen",
        allergens: "A,B",
        description: "Mit Süßkartoffelpommes oder Reis",
        price: 7.9
    },
    {
        id: 44,
        category: "HAPPY KID",
        name: "Paniertes Hähnchenfilet",
        allergens: "A",
        description: "Mit Süßkartoffelpommes oder Reis",
        price: 7.9
    },
    {
        id: 45,
        category: "HAPPY KID",
        name: "Hähnchenspieße",
        allergens: "F",
        description: "Mit Süßkartoffelpommes oder Reis, wahlweise mit süßsauer Sauce oder jap. Mayonnaise",
        price: 7.9
    },

    // ================= BEILAGEN =================
    {
        id: 46,
        category: "BEILAGEN",
        name: "Portion Süßkartoffel Pommes",
        price: 4.5
    },
    {
        id: 50,
        category: "BEILAGEN",
        name: "Extra",
        options: [
            { label: "A) Extra Reis", price: 3.0 },
            { label: "B) Sushi Reis", price: 3.9 },
            { label: "C) Ingwer oder Wasabi", price: 1.0 },
            { label: "D) Extra Sauce nach Wahl", price: 3.5 },
            { label: "E) Extra Dressing Sauce", price: 2.0 },
            { label: "F) Verpackung", price: 1.0 },
            { label: "G) Extra frische gebratene Nudeln", price: 4.0 }
        ]
    },

    // ================= SUSHIKARTE ================= (Nigiri)
    {
        id: 120,
        category: "SUSHIKARTE",
        name: "Sake",
        allergens: "D",
        description: "Lachs",
        price: 2.8
    },
    {
        id: 121,
        category: "SUSHIKARTE",
        name: "Maguro",
        allergens: "D",
        description: "Thunfisch",
        price: 3.0
    },
    {
        id: 122,
        category: "SUSHIKARTE",
        name: "Ebi",
        allergens: "B",
        description: "Riesengarnele",
        price: 3.0
    },
    {
        id: 123,
        category: "SUSHIKARTE",
        name: "Cindara",
        allergens: "D",
        description: "Butterfisch",
        price: 2.8
    },
    {
        id: 124,
        category: "SUSHIKARTE",
        name: "Tako",
        allergens: "B",
        description: "Oktopus",
        price: 2.7
    },
    {
        id: 125,
        category: "SUSHIKARTE",
        name: "Kani",
        allergens: "B",
        description: "Krebsfleisch",
        price: 1.9
    },
    {
        id: 126,
        category: "SUSHIKARTE",
        name: "Tobico",
        allergens: "B",
        description: "Flugfischkoviar",
        price: 2.9
    },
    {
        id: 127,
        category: "SUSHIKARTE",
        name: "Ikura",
        allergens: "B",
        description: "Lachskaviar",
        price: 3.9
    },
    {
        id: 128,
        category: "SUSHIKARTE",
        name: "Unagi",
        allergens: "D",
        description: "Süßwasseraal",
        price: 3.2
    },
    {
        id: 129,
        category: "SUSHIKARTE",
        name: "Inari",
        isVegetarian: true,
        description: "Tofu",
        price: 2.2
    },
    {
        id: 130,
        category: "SUSHIKARTE",
        name: "Tamago",
        allergens: "C",
        description: "Ormelette",
        price: 2.2
    },
    {
        id: 131,
        category: "SUSHIKARTE",
        name: "Flambeed Maguro",
        allergens: "D",
        description: "Flambierter Thunfisch",
        price: 3.5
    },
    {
        id: 132,
        category: "SUSHIKARTE",
        name: "Flambeed Sake",
        allergens: "D",
        description: "Flambierter Lachs",
        price: 3.5
    },

    // ================= SPEZIAL NIGIRI 2 STK =================
    {
        id: 133,
        category: "SPEZIAL NIGIRI 2 STK",
        name: "Spicy Sake",
        allergens: "D",
        description: "Lachs Tatar",
        price: 5.2
    },
    {
        id: 134,
        category: "SPEZIAL NIGIRI 2 STK",
        name: "Shikan Sake",
        allergens: "D",
        description: "Lachs auf grünem Spargel, flambiert",
        price: 6.7
    },
    {
        id: 135,
        category: "SPEZIAL NIGIRI 2 STK",
        name: "Homaya Tuna",
        allergens: "D",
        description: "Thunfisch auf Avocado, flambiert",
        price: 7.3
    },
    {
        id: 136,
        category: "SPEZIAL NIGIRI 2 STK",
        name: "Sakura Inari",
        allergens: "D",
        description: "Thunfischtatar mit Mais in Tofutasche Flambiert",
        options: [
            { label: "A) Thunfisch", allergens: "D", price: 7.8 },
            { label: "B) Lachs", price: 7.8 }
        ]
    },
    {
        id: 137,
        category: "SPEZIAL NIGIRI 2 STK",
        name: "TATARE",
        allergens: "D",
        description: "Thunfisch-Tatar mit Avocado, Lauchzwiebeln mit scharfer Sauce und Seetangsalat, serviert mit vietnamesischem Banh Da",
        options: [
            { label: "A) Thunfisch", allergens: "D", price: 11.5 },
            { label: "B) Lachs", price: 9.5 }
        ]
    },

    // ================= HOSOMAKI 6 STK =================
    {
        id: 138,
        category: "HOSOMAKI 6 STK",
        name: "Mango",
        allergens: "K",
        isVegetarian: true,
        description: "Mango, Sesam",
        price: 3.5
    },
    {
        id: 139,
        category: "HOSOMAKI 6 STK",
        name: "Tempura",
        allergens: "A.B.",
        description: "Garnele",
        price: 4.3
    },
    {
        id: 140,
        category: "HOSOMAKI 6 STK",
        name: "Kappa",
        allergens: "K",
        isVegetarian: true,
        description: "Gurke & Sesam",
        price: 3.5
    },
    {
        id: 141,
        category: "HOSOMAKI 6 STK",
        name: "Shiko",
        isVegetarian: true,
        description: "eingelegter Rettich",
        price: 3.5
    },
    {
        id: 142,
        category: "HOSOMAKI 6 STK",
        name: "Avocado",
        isVegetarian: true,
        description: "Avocado",
        price: 3.9
    },
    {
        id: 143,
        category: "HOSOMAKI 6 STK",
        name: "Spargel",
        allergens: "G.",
        description: "Grüner Spargel, Frischkäse",
        price: 4.2
    },
    {
        id: 144,
        category: "HOSOMAKI 6 STK",
        name: "Rucola",
        allergens: "G.",
        description: "Rucola, Frischkäse",
        price: 3.9
    },
    {
        id: 145,
        category: "HOSOMAKI 6 STK",
        name: "Inagi",
        allergens: "F.K",
        isVegetarian: true,
        description: "Tofu, Sesam",
        price: 3.0
    },
    {
        id: 146,
        category: "HOSOMAKI 6 STK",
        name: "Ebi",
        allergens: "B",
        description: "Großgarnelen",
        price: 4.5
    },
    {
        id: 147,
        category: "HOSOMAKI 6 STK",
        name: "Sake",
        allergens: "D",
        description: "Lachs",
        price: 4.5
    },
    {
        id: 148,
        category: "HOSOMAKI 6 STK",
        name: "Tekka",
        allergens: "D",
        description: "Thunfisch",
        price: 4.9
    },
    {
        id: 149,
        category: "HOSOMAKI 6 STK",
        name: "Butterfisch",
        allergens: "DK",
        description: "Butterfisch, Sesam",
        price: 4.5
    },
    {
        id: 150,
        category: "HOSOMAKI 6 STK",
        name: "Tetuna",
        allergens: "D",
        description: "Thunfischtatar, Schnittlauch, Chilisauce. Pikant",
        price: 5.7
    },
    {
        id: 151,
        category: "HOSOMAKI 6 STK",
        name: "Kaiba",
        allergens: "D",
        description: "Lachstatar, Schnittlauch, Chilisauce. Pikant",
        price: 5.7
    },
    {
        id: 152,
        category: "HOSOMAKI 6 STK",
        name: "Chicken",
        description: "Hähnchen",
        price: 4.9
    },
    {
        id: 153,
        category: "HOSOMAKI 6 STK",
        name: "Salmonskin Roll (5 grosse Rollen)",
        allergens: "D.G",
        description: "Frittierte Lachshaut, Gurke, Frischkäse, Avocado",
        price: 5.9
    },
    {
        id: 154,
        category: "HOSOMAKI 6 STK",
        name: "Maki Paniert",
        allergens: "A.D.K",
        description: "EXTRA! - Hosomaki paniert",
        price: 2.5
    },

    // ================= INSIDE OUT 8 STK =================
    {
        id: 156,
        category: "INSIDE OUT 8 STK",
        name: "Tezu",
        allergens: "CGK",
        description: "Tamago (Omelett), Gurke, Frischkäse, Sesam",
        price: 6.9
    },
    {
        id: 157,
        category: "INSIDE OUT 8 STK",
        name: "Sayuri",
        allergens: "GK",
        description: "Spargel, Rucola, Frischkäse, Sesam",
        price: 7.5
    },
    {
        id: 158,
        category: "INSIDE OUT 8 STK",
        name: "Hanabi",
        isVegetarian: true,
        description: "Gurke, Mango, Apfel, on top mit Avocado und Sauce",
        price: 8.9
    },
    {
        id: 159,
        category: "INSIDE OUT 8 STK",
        name: "Sachiko",
        allergens: "D",
        description: "Lachs, Gurke, Mango",
        price: 8.9
    },
    {
        id: 160,
        category: "INSIDE OUT 8 STK",
        name: "Vegetarisches Inside out",
        allergens: "G",
        isVegetarian: true,
        description: "Avocado, Gurke, Rucola, Frischkäse",
        price: 7.5
    },
    {
        id: 161,
        category: "INSIDE OUT 8 STK",
        name: "Rucola Inside out",
        allergens: "G",
        description: "Rucola, Gurke, Mango, Frischkäse",
        price: 6.9
    },
    {
        id: 162,
        category: "INSIDE OUT 8 STK",
        name: "Spargel inside out",
        allergens: "G",
        description: "Grüner Spargel, Gurke, Avocado, Frischkäse",
        price: 8.3
    },
    {
        id: 163,
        category: "INSIDE OUT 8 STK",
        name: "Mango Inside out",
        allergens: "G",
        description: "Mango, Spargel, Gurke, Frischkäse",
        price: 8.3
    },
    {
        id: 164,
        category: "INSIDE OUT 8 STK",
        name: "California Inside out",
        allergens: "B",
        description: "Surimi, Avocado, Mango, Tobiko",
        price: 7.9
    },
    {
        id: 165,
        category: "INSIDE OUT 8 STK",
        name: "Ebi Inside out",
        allergens: "B",
        description: "Großgarnelen, Gurke, Avocado, Tobiko mit leicht scharfer Sauce",
        price: 8.7
    },
    {
        id: 166,
        category: "INSIDE OUT 8 STK",
        name: "Salmon Inside out",
        allergens: "D",
        description: "Lachs, Avocado",
        price: 8.7
    },
    {
        id: 167,
        category: "INSIDE OUT 8 STK",
        name: "Ruco Salmon Inside out",
        allergens: "DG",
        description: "Lachs, Rucola, Gurke, Frischkäse",
        price: 8.7
    },
    {
        id: 168,
        category: "INSIDE OUT 8 STK",
        name: "Tuna Inside out",
        allergens: "D",
        description: "Thunfisch, Avocado, Rucola",
        price: 8.9
    },
    {
        id: 169,
        category: "INSIDE OUT 8 STK",
        name: "Salmonskin Inside out",
        allergens: "BG",
        description: "Knusprig frittierte Lachshaut, Gurke, Rettich, Frischkäse",
        price: 8.9
    },
    {
        id: 170,
        category: "INSIDE OUT 8 STK",
        name: "Baked Chicken Inside out",
        allergens: "K",
        description: "Gebr. Hähnchen, Mango, Gurke, Sesam, leicht scharfe Sauce",
        price: 8.9
    },

    // ================= SPEZIAL ROLL 8 STK =================
    {
        id: 171,
        category: "SPEZIAL ROLL 8 STK",
        name: "Tempura Garnelen",
        allergens: "A.B.K",
        description: "Tempura Garnelen, Avocado, Sesam",
        price: 9.9
    },
    {
        id: 172,
        category: "SPEZIAL ROLL 8 STK",
        name: "Ahiru Duck Tempura",
        allergens: "A.K",
        description: "Tempura Ente, Sesam, Schnittlauch, Chili Sauce",
        price: 10.9
    },
    {
        id: 173,
        category: "SPEZIAL ROLL 8 STK",
        name: "Chicken Tempura",
        allergens: "A.G",
        description: "Tempura Hähnchen, Mango, Frischkäse",
        price: 10.9
    },
    {
        id: 174,
        category: "SPEZIAL ROLL 8 STK",
        name: "Tokio Roll",
        allergens: "BD.G",
        description: "Lachs, Avocado, Frischkäse, umhüllt mit Avocado, Lachs-Tatar und Sauce",
        price: 14.9
    },
    {
        id: 175,
        category: "SPEZIAL ROLL 8 STK",
        name: "Osaka Roll",
        allergens: "B.D.G.",
        description: "Surimi, Gurke, Avocado, umhüllt mit flambiertem Lachs, Thunfisch, Butterfisch und hausgemachter Cocktail-Sauce",
        price: 14.9
    },
    {
        id: 176,
        category: "SPEZIAL ROLL 8 STK",
        name: "Tuna Roll",
        allergens: "D.G K",
        description: "Thunfisch, Gurke, Spargel, on Top Thunfisch Tatar mit Spicy Sauce und Sesam",
        price: 14.9
    },
    {
        id: 177,
        category: "SPEZIAL ROLL 8 STK",
        name: "Aburi Salmon Roll",
        allergens: "D.G",
        description: "Lachs, Avocado, Gurke, umhüllt mit flambiertem Lachs und hausgemachter Cocktail-Sauce",
        price: 13.9
    },
    {
        id: 178,
        category: "SPEZIAL ROLL 8 STK",
        name: "Kanazawa Roll",
        allergens: "D",
        description: "Spargel, Avocado, Mango, Gurke, garniert mit flambiertem Lachstatar",
        price: 15.9
    },
    {
        id: 179,
        category: "SPEZIAL ROLL 8 STK",
        name: "Makuro Roll",
        allergens: "D",
        description: "Thunfischtatar, Spargel, Mango, umhüllt mit flambiertem Thunfisch und Spicy Sauce",
        price: 15.9
    },
    {
        id: 180,
        category: "SPEZIAL ROLL 8 STK",
        name: "Mango Roll",
        allergens: "DG",
        description: "Mango, Frischkäse, Gurken umhüllt mit Avocado, mit flambiertem Lachs und flambiertem Thunfisch",
        price: 14.9
    },
    {
        id: 181,
        category: "SPEZIAL ROLL 8 STK",
        name: "Ruci Roll",
        allergens: "DG",
        description: "Rucola, Frischkäse, Mango, Spargel umhüllt mit Lachs und hausgemachter Cocktail-Sauce",
        price: 13.9
    },
    {
        id: 182,
        category: "SPEZIAL ROLL 8 STK",
        name: "Avo Tempura",
        allergens: "BG",
        description: "Tempura Riesengarnelen, Gurke, umhüllt mit Avocado und hausgemachter Cocktail-Sauce",
        price: 14.9
    },
    {
        id: 183,
        category: "SPEZIAL ROLL 8 STK",
        name: "Yukiko",
        allergens: "BDG",
        description: "Knusprig frittierte Lachshaut, Gurke, Rettich, Frischkäse, Lachs und Kaviar on top",
        price: 14.9
    },
    {
        id: 184,
        category: "SPEZIAL ROLL 8 STK",
        name: "Kaido",
        allergens: "BDG",
        description: "Tempura Garnelen, Mango, Gurke, flambierter Lachs und Kaviar on top",
        price: 14.9
    },
    {
        id: 185,
        category: "SPEZIAL ROLL 8 STK",
        name: "Tempura Sake",
        allergens: "DG",
        description: "Tempura Lachs, Frischkäse, Gurke, Mango, Lachs on top",
        price: 14.9
    },
    {
        id: 186,
        category: "SPEZIAL ROLL 8 STK",
        name: "Yasai Roll",
        allergens: "GK",
        isVegetarian: true,
        description: "Spargel, Mango, Gurken, Frischkäse, Sesam umhüllt mit Avocado",
        price: 12.9
    },
    {
        id: 187,
        category: "SPEZIAL ROLL 8 STK",
        name: "Kaido Dragon",
        allergens: "GE",
        description: "Tempura Hähnchen, Gurke, Frischkäse, umhüllt mit Avocado und hausgem. Erdnuss Sauce",
        price: 14.9
    },
    {
        id: 188,
        category: "SPEZIAL ROLL 8 STK",
        name: "Saigon Roll",
        allergens: "DG",
        description: "Knusprig frittierte Lachshaut, Avocado, Gurke, Frischkäse, umhüllt mit flambiertem Butterfisch und flambiertem Aal",
        price: 15.9
    },
    {
        id: 189,
        category: "SPEZIAL ROLL 8 STK",
        name: "Chicken Tropicana",
        allergens: "GEK",
        description: "Gebratenes Hähnchen, Ananas, Sesam, mit Erdnuss Sauce, leicht Pikant",
        price: 9.9
    },
    {
        id: 190,
        category: "SPEZIAL ROLL 8 STK",
        name: "Sate Roll",
        allergens: "GEK",
        description: "Sate Hähnchen, Mango, Avocado serviert mit Erdnuss Sauce",
        price: 9.9
    },

    // ================= CRISPYROLL 6 STK =================
    {
        id: 500,
        category: "CRISPYROLL 6 STK",
        name: "Crispy Veggie Roll",
        allergens: "A.G.",
        isVegetarian: true,
        description: "Gurke, Avocado, Rettich, Spargel, Frischkäse",
        price: 9.3
    },
    {
        id: 501,
        category: "CRISPYROLL 6 STK",
        name: "Crispy Pineapple Roll",
        allergens: "AG",
        isVegetarian: true,
        description: "Ananas, Frischkäse, Gurke, Rettich",
        price: 9.5
    },
    {
        id: 502,
        category: "CRISPYROLL 6 STK",
        name: "Crispy Sake Mix Roll",
        allergens: "ABDGK",
        description: "Lachs, Surimi, Avocado, Frischkäse, Flugkaviar, Sesam",
        price: 9.7
    },
    {
        id: 503,
        category: "CRISPYROLL 6 STK",
        name: "Crispy Sake Roll",
        allergens: "ADGK",
        description: "Lachs, Frischkäse, Mango, Sesam",
        price: 9.7
    },
    {
        id: 504,
        category: "CRISPYROLL 6 STK",
        name: "Crispy Chicken Roll",
        allergens: "A.G.KE",
        description: "Hähnchen, Frischkäse, Gurke, Mango, Sesam",
        price: 9.7
    },
    {
        id: 505,
        category: "CRISPYROLL 6 STK",
        name: "Crispy sweet Chicken Roll",
        allergens: "AGKE",
        description: "Hähnchen, Ananas, Frischkäse, Sesam",
        price: 9.9
    },
    {
        id: 506,
        category: "CRISPYROLL 6 STK",
        name: "Crispy Duck Roll",
        allergens: "A.KG",
        description: "Ente, Gurke, Frischkäse, Sesam",
        price: 9.9
    },
    {
        id: 507,
        category: "CRISPYROLL 6 STK",
        name: "Crispy Scampi Roll",
        allergens: "A.B.G",
        description: "Garnelen, Frischkäse, Gurke, Avocado",
        price: 10.9
    },
    {
        id: 508,
        category: "CRISPYROLL 6 STK",
        name: "Crispy Pineapple Scampi Roll",
        allergens: "ABG",
        description: "Garnelen, Frischkäse, Ananas, Mango",
        price: 11.5
    },
    {
        id: 509,
        category: "CRISPYROLL 6 STK",
        name: "Crispy Ibodai Roll",
        allergens: "AGK",
        description: "Butterfisch, Frischkäse, Avocado, Gurke, Sesam",
        price: 9.9
    },

    // ================= SASHIMI =================
    {
        id: 195,
        category: "SASHIMI",
        name: "Maguro",
        allergens: "D",
        description: "Thunfisch Sashimi garniert mit Salat",
        price: 14.9
    },
    {
        id: 196,
        category: "SASHIMI",
        name: "Sake",
        allergens: "D",
        description: "Sake Sashimi garniert mit Salat",
        price: 13.9
    },
    {
        id: 197,
        category: "SASHIMI",
        name: "Sashimi Mix",
        allergens: "D",
        description: "Lachs und Thunfisch Sashimi garniert mit Salat",
        price: 15.9
    },

    // ================= SUSHIMENÜ =================
    {
        id: 200,
        category: "SUSHIMENÜ",
        name: "Om Mani Padme Platte",
        allergens: "AGK",
        isVegetarian: true,
        description: "Inari Nigiri (1 Stk.), Avocado Nigiri (1 Stk.), Kappa Maki (6 Stk.), Veg. Inside out (6 Stk.), Mini Baked Roll (8 Stk.), Avocado Roll (4 Stk.)",
        price: 18.9
    },
    {
        id: 201,
        category: "SUSHIMENÜ",
        name: "Buddha Garden",
        allergens: "AGK",
        isVegetarian: true,
        description: "Mango Maki (6 Stk.), Rucola Inside Out (6 Stk.), Avocado Roll (4 Stk.), Crispy Veggie Roll (6 Stk.)",
        price: 19.9
    },
    {
        id: 202,
        category: "SUSHIMENÜ",
        name: "Freestyle",
        allergens: "ADGK",
        description: "Lachs Nigiri (1 Stk.), Thunfisch Nigiri (1 Stk.), Kanazawa Roll (4 Stk.), Riesengarnelen Nigiri (1 Stk.), Crispy Sake Mix Roll (6 Stk.)",
        price: 22.9
    },
    {
        id: 203,
        category: "SUSHIMENÜ",
        name: "Sake Springs",
        allergens: "ADGK",
        description: "Lachs Nigiri (2 Stk.), Lachs Maki (6 Stk.), Lachs Inside out (4 Stk.), Aburi Salmon Roll (6 Stk.)",
        price: 22.9
    },
    {
        id: 204,
        category: "SUSHIMENÜ",
        name: "Almost Chicken Menü",
        allergens: "AGK",
        description: "Crispy Chicken Roll (6 Stk.), Baked Chicken Inside Out (8 Stk.), Chicken Maki (6 Stk.)",
        price: 23.9
    },
    {
        id: 205,
        category: "SUSHIMENÜ",
        name: "Almost Fish Menü",
        allergens: "DK",
        description: "Verschiedene Fisch Nigiri (4 Stk.), Salmon inside out (8 Stk.), Verschiedene Fisch Sashimi (4 Stk.)",
        price: 23.9
    },
    {
        id: 206,
        category: "SUSHIMENÜ",
        name: "Temple of Geisha (52 Stk.) (2 Personen)",
        allergens: "ABDEGK",
        description: "Serviert mit: Zwei Asia Soul Suppen, Kimchi, Lachs Nigiri (2 Stk.), Thunfisch Nigiri (2 Stk.), Riesengarnelen Nigiri (2 Stk.), Butterfisch Nigiri (2 Stk.), Kappa Maki (6 Stk.), Aburi Salmon Roll (4 Stk.), Avocado Maki (6 Stk.), Lachs Maki (6 Stk.), Crispy Fish Roll (6 Stk.), Thunfisch Maki (6 Stk.), Lachs Inside Avocado Outside Roll (4 Stk.), Crispy Chicken Roll (6 Stk.)",
        price: 59.0
    },
    {
        id: 207,
        category: "SUSHIMENÜ",
        name: "Aura Sushi Platte (50 Stk.) (2 Personen)",
        allergens: "ABDEGK",
        description: "Serviert wahlweise mit: Zwei Asia Soul Suppen oder 2 Portionen Veg. Frühlingsrollen, Kimchi, Mango Roll (8 Stk.), Big Roll mit Lachs und Gemüse (10 Stk.), Lachs Sashimi (2 Stk.), Thunfisch Sashimi (2 Stk.), Flambierte Lachs Nigiri (2 Stk.), Flambierte Thunfisch Nigiri (2 Stk.), Crispy Scampi Roll (6 Stk.), Shinko Maki (6 Stk.), Crispy sweet Chicken Roll (6 Stk.), Kappa Maki (6 Stk.), Sakura Inari (2 Stk.)",
        price: 69.0
    },

    // ================= NACHTISCH =================
    {
        id: 210,
        category: "NACHTISCH",
        name: "Gebackene Banane mit",
        allergens: "A,B",
        options: [
            { label: "A) Honig", allergens: "A", price: 4.9 },
            { label: "B) Eiskugel nach Wunsch", price: 6.5 }
        ]
    },
    {
        id: 211,
        category: "NACHTISCH",
        name: "Gebackene Ananas mit Honig",
        allergens: "A,B",
        price: 4.9
    },
    {
        id: 212,
        category: "NACHTISCH",
        name: "Gebackene Apfel mit Honig",
        allergens: "A,G,B",
        price: 4.9
    },
    {
        id: 213,
        category: "NACHTISCH",
        name: "Mochi Eis",
        allergens: "AG",
        description: "Jap. Reiskucheneis serviert mit Obst",
        price: 7.9
    },
    {
        id: 214,
        category: "NACHTISCH",
        name: "Portion Eis",
        allergens: "G",
        price: 6.9
    },
    {
        id: 215,
        category: "NACHTISCH",
        name: "Matcha Eis mit Obst",
        allergens: "G",
        price: 7.2
    },

    // ================= ALKOHOLFREIE GETRÄNKE =================
    {
        id: 220,
        category: "ALKOHOLFREIE GETRÄNKE",
        name: "Cola",
        price: 3.3
    },
    {
        id: 221,
        category: "ALKOHOLFREIE GETRÄNKE",
        name: "Fanta",
        price: 3.3
    },
    {
        id: 222,
        category: "ALKOHOLFREIE GETRÄNKE",
        name: "Cola Light",
        price: 3.3
    },
    {
        id: 223,
        category: "ALKOHOLFREIE GETRÄNKE",
        name: "Sprite",
        price: 3.3
    },
    {
        id: 225,
        category: "ALKOHOLFREIE GETRÄNKE",
        name: "Cola Zero",
        price: 3.3
    },
    {
        id: 226,
        category: "ALKOHOLFREIE GETRÄNKE",
        name: "Spezi",
        price: 3.3
    },
    {
        id: 227,
        category: "ALKOHOLFREIE GETRÄNKE",
        name: "Tonic Water",
        price: 3.6
    },
    {
        id: 228,
        category: "ALKOHOLFREIE GETRÄNKE",
        name: "Premium Wasser 0,3l",
        description: "Still/Spritzig",
        price: 3.9
    },
    {
        id: 229,
        category: "ALKOHOLFREIE GETRÄNKE",
        name: "Premium Wasser 0,75l",
        description: "Still/Spritzig",
        price: 5.8
    },
    {
        id: 230,
        category: "ALKOHOLFREIE GETRÄNKE",
        name: "Premium Wasser in Glaskaraffe",
        description: "Still/Spritzig",
        options: [
            { label: "A) Premium Wasser in Glaskaraffe Minze", price: 4.6 },
            { label: "B) Premium Wasser in Glaskaraffe Ingwer", price: 4.6 },
            { label: "C) Premium Wasser in Glaskaraffe Orange", price: 4.6 },
            { label: "D) Premium Wasser in Glaskaraffe Zitrone", price: 4.6 }
        ]
    },

    // ================= KALTE HAUSGEMACHTE GETRÄNKE =================
    {
        id: 231,
        category: "KALTE HAUSGEMACHTE GETRÄNKE",
        name: "Coconut Shake",
        description: "Coconut Creme, Minze, Soda",
        price: 6.9
    },
    {
        id: 232,
        category: "KALTE HAUSGEMACHTE GETRÄNKE",
        name: "Let's Date",
        description: "Erdbeerpüree, Coconut Creme, Soda",
        price: 6.9
    },
    {
        id: 233,
        category: "KALTE HAUSGEMACHTE GETRÄNKE",
        name: "Love",
        description: "Rosensirup, Limette, Minze, Soda",
        price: 6.9
    },
    {
        id: 234,
        category: "KALTE HAUSGEMACHTE GETRÄNKE",
        name: "Mango Shake",
        description: "Frischer Mango püriert, Kokosmilch",
        price: 6.9
    },
    {
        id: 235,
        category: "KALTE HAUSGEMACHTE GETRÄNKE",
        name: "Red dream - Erdbeer Shake",
        description: "Frische Erdbeeren püriert, Limette, Soda",
        price: 6.9
    },
    {
        id: 236,
        category: "KALTE HAUSGEMACHTE GETRÄNKE",
        name: "La passion - Passionfrucht Shake",
        description: "Weisser Pfirsichsaft, Limette, Soda",
        price: 6.9
    },
    {
        id: 237,
        category: "KALTE HAUSGEMACHTE GETRÄNKE",
        name: "Rainbow - Heidelbeer Shake",
        description: "Frische Heidelbeeren Erdbeeren püriert, Soda",
        price: 6.9
    },
    {
        id: 238,
        category: "KALTE HAUSGEMACHTE GETRÄNKE",
        name: "Limone",
        description: "Limonensaft, Ingwer, Minze, Soda",
        price: 6.9
    },
    {
        id: 239,
        category: "KALTE HAUSGEMACHTE GETRÄNKE",
        name: "Tropical Shake",
        description: "Guavennektar, Passionsfruchtpüree, Limette, Coconut Sirup, Soda",
        price: 6.9
    },
    {
        id: 240,
        category: "KALTE HAUSGEMACHTE GETRÄNKE",
        name: "Cucumber Shake",
        description: "Gurke, Minze, Limetten, Ginger Ale, Soda",
        price: 6.9
    },
    {
        id: 241,
        category: "KALTE HAUSGEMACHTE GETRÄNKE",
        name: "Aura-frischer hausgemachter Jasmin Amber Eistee",
        options: [
            { label: "A) Weißer Pfirsich", price: 7.9 },
            { label: "B) Lychee", price: 7.9 },
            { label: "C) Erdbeer", price: 7.9 },
            { label: "D) Mango", price: 7.9 },
            { label: "E) Maracuja", price: 7.9 },
            { label: "F) Wassermelone", price: 7.9 },
            { label: "G) Heidelbeer", price: 7.9 },
            { label: "H) Rosensaft", price: 7.9 }
        ]
    },

    // ================= SÄFTE UND SCHORLEN =================
    {
        id: 242,
        category: "SÄFTE UND SCHORLEN",
        name: "Apfelsaft",
        price: 3.6
    },
    {
        id: 243,
        category: "SÄFTE UND SCHORLEN",
        name: "Orangensaft",
        price: 3.6
    },
    {
        id: 244,
        category: "SÄFTE UND SCHORLEN",
        name: "Johannisbeernektar",
        price: 3.6
    },
    {
        id: 245,
        category: "SÄFTE UND SCHORLEN",
        name: "Maracujanektar",
        price: 3.6
    },
    {
        id: 246,
        category: "SÄFTE UND SCHORLEN",
        name: "Ananassaft",
        price: 3.6
    },
    {
        id: 247,
        category: "SÄFTE UND SCHORLEN",
        name: "Mangonektar",
        price: 3.6
    },
    {
        id: 248,
        category: "SÄFTE UND SCHORLEN",
        name: "Guavennektar",
        price: 3.6
    },
    {
        id: 249,
        category: "SÄFTE UND SCHORLEN",
        name: "Lycheenektar",
        price: 3.6
    },

    // ================= BIER =================
    {
        id: 250,
        category: "BIER",
        name: "Fürst Carl Radler",
        price: 4.3
    },
    {
        id: 251,
        category: "BIER",
        name: "Fürst Carl Schlossgold",
        price: 4.3
    },
    {
        id: 252,
        category: "BIER",
        name: "Fürst Carl Dunkel",
        price: 4.3
    },
    {
        id: 253,
        category: "BIER",
        name: "Fürst Carl Urhell",
        price: 4.3
    },
    {
        id: 254,
        category: "BIER",
        name: "Fürst Carl Alkoholfrei",
        price: 4.3
    },
    {
        id: 255,
        category: "BIER",
        name: "Kirin Japanisches Bier",
        price: 4.3
    },
    {
        id: 256,
        category: "BIER",
        name: "Asahi Japanisches Bier",
        price: 4.3
    },
    {
        id: 257,
        category: "BIER",
        name: "Gutmann Weizen Hell",
        price: 4.3
    },
    {
        id: 258,
        category: "BIER",
        name: "Gutmann Weizen Dunkel",
        price: 4.3
    },
    {
        id: 259,
        category: "BIER",
        name: "Gutmann Weizen Leicht",
        price: 4.3
    },
    {
        id: 260,
        category: "BIER",
        name: "Gutmann Weizen Hell (alkoholfrei)",
        price: 4.3
    },
    {
        id: 261,
        category: "BIER",
        name: "Tsingtao Chinesisches Bier",
        price: 4.3
    },
    {
        id: 262,
        category: "BIER",
        name: "Weizen Mix",
        options: [
            { label: "A) Cola 0,5l", price: 4.3 },
            { label: "B) Sprite 0,5l", price: 4.3 }
        ]
    },

    // ================= APERETIFS&LONGDRINKS =================
    {
        id: 268,
        category: "APERETIFS&LONGDRINKS",
        name: "Aperol Spritz",
        description: "Aperol, Prosecco, Soda",
        price: 6.8
    },
    {
        id: 269,
        category: "APERETIFS&LONGDRINKS",
        name: "Aperol Orange",
        description: "Aperol, Prosecco, Orangensaft, Soda",
        price: 6.9
    },
    {
        id: 270,
        category: "APERETIFS&LONGDRINKS",
        name: "Aperol Fanta",
        description: "Aperol, Fanta, Prosecco, Soda",
        price: 6.9
    },
    {
        id: 271,
        category: "APERETIFS&LONGDRINKS",
        name: "Aperol Maracuja Spritz",
        description: "Aperol, Frischer Maracuja, Prosecco, Soda",
        price: 7.8
    },
    {
        id: 272,
        category: "APERETIFS&LONGDRINKS",
        name: "Hugo",
        description: "Holundersirup, Prosecco, Soda, Limetten",
        price: 6.8
    },
    {
        id: 273,
        category: "APERETIFS&LONGDRINKS",
        name: "Prosecco",
        options: [
            { label: "A) 0,2l", price: 5.9 },
            { label: "B) White Peach Sirup", price: 6.9 },
            { label: "C) Lemon Sirup", price: 6.9 },
            { label: "D) Rosen Sirup", price: 6.9 },
            { label: "E) Cherry Sirup", price: 6.9 }
        ]
    },
    {
        id: 274,
        category: "APERETIFS&LONGDRINKS",
        name: "Lillet Wild Berry",
        description: "Lillet Wild Berry, Beerenmix, Soda",
        price: 7.3
    },
    {
        id: 275,
        category: "APERETIFS&LONGDRINKS",
        name: "Gin Tonic",
        description: "Gin, Tonic Water, Limette",
        price: 6.9
    },
    {
        id: 276,
        category: "APERETIFS&LONGDRINKS",
        name: "Whisky Cola",
        description: "Jack Daniels, Cola",
        price: 6.9
    },
    {
        id: 277,
        category: "APERETIFS&LONGDRINKS",
        name: "Wodka Orange",
        price: 6.9
    },
    {
        id: 278,
        category: "APERETIFS&LONGDRINKS",
        name: "Sake",
        description: "Japanischer Reiswein (warm serviert), 0,15L",
        price: 5.2
    },

    // ================= COCKTAILS =================
    {
        id: 280,
        category: "COCKTAILS",
        name: "Sex On The Beach",
        description: "Wodka Peach, Orangensaft, Ananassaft, Nektar, Grenadine",
        price: 8.5
    },
    {
        id: 281,
        category: "COCKTAILS",
        name: "Pina Colada",
        description: "Weiffer Rum, Kokossirup, Ananassaft, Maracujasaft, Kokosmilch",
        price: 8.5
    },
    {
        id: 282,
        category: "COCKTAILS",
        name: "Moscow Mule",
        description: "Wodka, Limetten, Spicy Ginger, Zuckersirup",
        price: 8.5
    },
    {
        id: 283,
        category: "COCKTAILS",
        name: "Espresso Martini",
        description: "Wodka, Kahlua, Espresso, Zuckersirup",
        price: 8.9
    },
    {
        id: 284,
        category: "COCKTAILS",
        name: "Violet Mojito",
        description: "Vietnamesischer Reisschnaps, Limette, Minze, Ginger Ale, Butterfly Flower",
        price: 8.5
    },
    {
        id: 285,
        category: "COCKTAILS",
        name: "Caipirinha",
        description: "Cochaca, Limette, Rohrzucker",
        price: 8.5
    },
    {
        id: 286,
        category: "COCKTAILS",
        name: "Tequila Sunrise",
        description: "Tequila, Orangensaft, Grenadine, Zitronensaft",
        price: 8.5
    },
    {
        id: 287,
        category: "COCKTAILS",
        name: "Old Mojito",
        description: "Havana Club Rum, Limette, Soda, Minze, Brauner Zucker",
        price: 7.9
    },
    {
        id: 288,
        category: "COCKTAILS",
        name: "Planters Punch",
        description: "Rum, Kokossirup, Orangensaft, Limette, Grenadine",
        price: 8.5
    },
    {
        id: 289,
        category: "COCKTAILS",
        name: "Tropicana",
        description: "Rum, Limette, Coconut Sirup, Guavennektar, Maracujasaft, Soda",
        price: 8.5
    },

    // ================= DIGESTIF =================
    {
        id: 300,
        category: "DIGESTIF",
        name: "Nep Moi (Reisschnaps)",
        price: 5.5
    },
    {
        id: 301,
        category: "DIGESTIF",
        name: "Ramazzotti",
        price: 5.5
    },
    {
        id: 302,
        category: "DIGESTIF",
        name: "Baileys",
        allergens: "G,3",
        price: 5.5
    },
    {
        id: 303,
        category: "DIGESTIF",
        name: "Drambuie Likör",
        price: 5.5
    },
    {
        id: 304,
        category: "DIGESTIF",
        name: "Wodka Three Sixty",
        price: 5.5
    },
    {
        id: 305,
        category: "DIGESTIF",
        name: "Chivas Regal",
        price: 6.8
    },

    // ================= WARME GETRÄNKE =================
    {
        id: 310,
        category: "WARME GETRÄNKE",
        name: "Kaffee",
        price: 3.3
    },
    {
        id: 311,
        category: "WARME GETRÄNKE",
        name: "Espresso",
        price: 2.5
    },
    {
        id: 312,
        category: "WARME GETRÄNKE",
        name: "Doppelter Espresso",
        price: 4.2
    },
    {
        id: 313,
        category: "WARME GETRÄNKE",
        name: "Cappuccino",
        price: 3.9
    },
    {
        id: 314,
        category: "WARME GETRÄNKE",
        name: "Hot Orange",
        description: "Ingwer, Orange, Minze, Honig",
        price: 3.9
    },
    {
        id: 315,
        category: "WARME GETRÄNKE",
        name: "Hot Lemon",
        description: "Ingwer, Zitrone, Minze, Honig",
        price: 3.9
    },
    {
        id: 316,
        category: "WARME GETRÄNKE",
        name: "Jasmintee",
        price: 4.9
    },
    {
        id: 317,
        category: "WARME GETRÄNKE",
        name: "Oolongtee",
        price: 4.9
    },
    {
        id: 318,
        category: "WARME GETRÄNKE",
        name: "Chrysanthementee",
        description: "Chrysanthemenblüte mit frischem Ingwer",
        price: 5.9
    },

    // ================= OFFENER WEISSWEIN =================
    {
        id: 400,
        category: "OFFENER WEISSWEIN",
        name: "2021 Silvaner, trocken",
        description: "Ehrlich und klar, mit einem Hauch von Aprikose und Birne, kitzelt dieser 'Fränkische - Klassiker' den Gaumen! Glänzt hervorragend zu Fisch, leichten Salaten oder hellem Fleisch.",
        price: 5.9
    },
    {
        id: 401,
        category: "OFFENER WEISSWEIN",
        name: "2021 Bacchus, halbtrocken",
        description: "Blumig in der Nase, mit Aromen von Holunder und gelben Äpfeln, sowie einer schön eingebundenen Säure. Ideal zu süß-sauren Gerichten und leichten Vorspeisen.",
        price: 5.9
    },

    // ================= OFFENER ROT- & ROSEWEIN =================
    {
        id: 402,
        category: "OFFENER ROT- & ROSEWEIN",
        name: "2020 Dornfelder, halbtrocken",
        description: "Schwarzrote Farbe, feinsaftig mit festem Körper, Kraft und Rückgrat! Animierende Frucht von Granatapfel, Blutorange und Zwetschge. Gute Balance mit samtig, eingebundenen Tanninen. Ausgezeichnet zu scharf gebratener Ente oder Rind.",
        price: 5.9
    },
    {
        id: 403,
        category: "OFFENER ROT- & ROSEWEIN",
        name: "2021 Spätburgunder, trocken",
        description: "Mit seiner feinen Himbeere, & Kirscharomatik zeigt sich dieser 'Pinot Noir' traumhaft offen. Milde Tannine und eine angenehme Säure umarmen den Gaumen; einen besseren Mitspieler kann sich zartes Rindfleisch aus dem Wok nicht wünschen!",
        price: 5.9
    },
    {
        id: 404,
        category: "OFFENER ROT- & ROSEWEIN",
        name: "2021 Rotling, feinfruchtig",
        description: "Aromatisch, feinfruchtiges Bukett nach Himbeere und Erdbeere; dieser Wein bringt Urlaubsfeeling direkt ins Glas! Großartig zu Seafood, wie Shrimps, gegrillten Garnelen oder leichtwürzigen Fisch und Sushi.",
        price: 5.9
    }
];

