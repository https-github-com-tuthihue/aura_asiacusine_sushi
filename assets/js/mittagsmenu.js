// mittagsmenu.js - Aura Mittagsmenü mit Bildern

const mittagsMenu = [
    {
        id: "M1",
        name: "Gebratener Reis mit Gemüse",
        description: "",
        image: "../assets/images/menu/m1.webp",
        options: [
            {
                label: "A. Mit Gemüse",
                allergens: "",
                isVegetarian: true,
                price: 8.50
            },
            {
                label: "B. Hähnchenfilet",
                allergens: "",
                price: 9.50
            },
            {
                label: "C. Panierte Hähnchenbrust",
                allergens: "",
                price: 10.90
            },
            {
                label: "E. Knusprige Entenbrust",
                allergens: "",
                price: 11.90
            }
        ]
    },
    {
        id: "M2",
        name: "Gebratene Nudeln mit Gemüse",
        description: "",
        image: "../assets/images/menu/m2.webp",
        options: [
            {
                label: "A. Mit Gemüse",
                allergens: "",
                isVegetarian: true,
                price: 8.90
            },
            {
                label: "B. Hähnchenfilet",
                allergens: "",
                price: 9.90
            },
            {
                label: "C. Panierte Hähnchenbrust",
                allergens: "",
                price: 10.90
            },
            {
                label: "E. Knusprige Entenbrust",
                allergens: "",
                price: 11.90
            }
        ]
    },
    {
        id: "M3",
        name: "Gemüse in süß sauer Soße serviert mit Reis",
        description: "",
        image: "../assets/images/menu/m3.webp",
        options: [
            {
                label: "C. Panierte Hähnchenbrust",
                allergens: "",
                price: 10.90
            },
            {
                label: "E. Knusprige Entenbrust",
                allergens: "",
                price: 11.90
            }
        ]
    },
    {
        id: "M4",
        name: "Gemüse in dunkler Soße serviert mit Reis",
        description: "",
        image: "../assets/images/menu/m4.webp",
        options: [
            {
                label: "B. Hähnchenfilet",
                allergens: "",
                price: 9.90
            },
            {
                label: "C. Panierte Hähnchenbrust",
                allergens: "",
                price: 10.90
            },
            {
                label: "E. Knusprige Entenbrust",
                allergens: "",
                price: 11.90
            }
        ]
    },
    {
        id: "M5",
        name: "Aura Mittag Sushi Menü",
        description: "Panierte Maki mit Lachs 8 St. • Flambierte Nigiri mit Fisch 2 St. • Big Roll 5 Stück (Lachs, Avocado, Gurke, Mango und Philadelphia)",
        image: "../assets/images/menu/m5.webp",
        isSushi: true,
        price: 12.90
    },
    {
        id: "M6",
        name: "Sushi Menü Vegetarisch",
        description: "Nigiri 2 St. (Shinko, Avocado) • Panierte Maki mit Gemüse 8 St. • Big Roll 5 St. mit Avocado, Gurke, Rucola",
        image: "../assets/images/menu/m6.webp",
        isVegetarian: true,
        isSushi: true,
        price: 11.90
    }
];

// Thông tin chung
const mittagsInfo = {
    title: "Aura Mittagsmenü",
    time: "Von Montag bis Samstag 11.00 – 15.00 Uhr",
    note: "Außer an Feiertagen",
    included: "Mittagmenüs inkl. Asia Soul Suppe oder vegetarischen Frühlingsrollen",
    footer: "Allergene in der Speisekarte\nWir freuen uns auf Ihren Besuch\nIhr Aura Team"
};