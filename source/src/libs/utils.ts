import type { IFood } from "./types";

export function parseFoods(raw: any[]): IFood[] {
  const foods: IFood[] = [];
  let current: IFood | null = null;

  for (let i = 0; i < raw.length; i++) {
    const row = raw[i];

    if (row.STT && row['Dish name']?.trim()) {
      // Đây là món chính
      current = {
        id: Number(row.STT),
        category: row[""]?.trim() ? row[""]?.trim() : nearestCategory(i, raw),
        name: row["Dish name"]?.trim() || undefined,
        price: row["Preis für Vorspeise"]
          ? row["Preis für Vorspeise"]
          : undefined,
        upgratedPrice: row["Preis für Hauptspeise"]
          ? row["Preis für Hauptspeise"]
          : undefined,
        allergieCode: row["Allergiecode"] || undefined,
        description: row["Beschreibung"] || undefined,
        vegetarian: row["vegetarisches Gericht"]?.toLowerCase() === "x" || false,
        toppings: [],
        topping: {
          name: row["Topping"]?.trim() || undefined,
          price: row["Preis für Vorspeise"]
            ? row["Preis für Vorspeise"]
            : undefined,
          upgratedPrice: row["Preis für Hauptspeise"]
            ? row["Preis für Hauptspeise"]
            : undefined,
          allergieCode: row["Allergiecode"] || undefined,
          description: row["Beschreibung"] || undefined,
          vegetarian: row["vegetarisches Gericht"]?.toLowerCase() === "x" || false,
        },
      };
      console.log(current.name, current.vegetarian);
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

function nearestCategory(index: number, raw: any[]): string {
  // tìm category gần nhất trước index
  for (let i = index; i >= 0; i--) {
    if(raw[i]['']?.trim()) {
      return raw[i]['']?.trim() || undefined;
    }
  }
  return '';
}