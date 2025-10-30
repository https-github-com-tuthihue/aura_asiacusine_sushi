import type { IFood } from "./types";

export function parseFoods(raw: any[]): IFood[] {
  const foods: IFood[] = [];
  let current: IFood | null = null;

  for (const row of raw) {
    if (row.STT) {
      // Đây là món chính
      current = {
        id: Number(row.STT),
        category: row["category name"]?.trim() || undefined,
        name: row["Dish name"]?.trim() || undefined,
        price: row["Preis für Vorspeise"]
          ? row["Preis für Vorspeise"]
          : undefined,
        upgratedPrice: row["Preis für Hauptspeise"]
          ? row["Preis für Hauptspeise"]
          : undefined,
        allergieCode: row["Allergiecode"] || undefined,
        description: row["Beschreibung"] || undefined,
        vegetarian: row["vegetarisches Gericht"]?.toLowerCase() === "x",
        toppings: [],
        topping: {
          name: row["Topping"]?.trim() || undefined,
          upgratedPrice: row["Preis für Hauptspeise"]
            ? row["Preis für Hauptspeise"]
            : row["Preis für Vorspeise"]
            ? row["Preis für Vorspeise"]
            : undefined,
          
        }
      };
      foods.push(current);
    } else if (current && row["Topping"]) {
      // Đây là topping của món trước
      current.toppings!.push({
        name: row["Topping"].trim(),
        upgratedPrice: row["Preis für Hauptspeise"]
          ? row["Preis für Hauptspeise"]
          : row["Preis für Vorspeise"]
          ? row["Preis für Vorspeise"]
          : undefined,
      });
    }
  }
  return foods;
}
