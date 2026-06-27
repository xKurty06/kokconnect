export type ProductCategory = "Best Seller" | "Rice Meals" | "Group Meals" | "Appetizers" | "Drinks" | "Extras";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  available: boolean;
  prepTime: string;
  image: string;
}

export const categories: ProductCategory[] = [
  "Best Seller",
  "Rice Meals",
  "Group Meals",
  "Appetizers",
  "Drinks",
  "Extras",
];

export const products: Product[] = [
  { id: "chicken-inasal", name: "Chicken Inasal", category: "Best Seller", price: 99, available: true, prepTime: "20–25 min", image: "/assets/grilled-chicken.jpg" },
  { id: "kropek", name: "Kropek", category: "Appetizers", price: 40, available: true, prepTime: "10–15 min", image: "/assets/kropek.jpg" },
  { id: "breaded-porkchop", name: "Breaded Porkchop", category: "Rice Meals", price: 120, available: false, prepTime: "25–30 min", image: "/assets/pork-rice-meal.jpg" },
  { id: "onion-rings", name: "Onion Rings", category: "Appetizers", price: 40, available: true, prepTime: "15–20 min", image: "/assets/onion-rings.jpg" },
  { id: "sizzling-sisig", name: "Sizzling Sisig", category: "Rice Meals", price: 150, available: true, prepTime: "20–25 min", image: "/assets/sizzling-sisig.jpg" },
  { id: "pork-barbeque", name: "Pork Barbeque", category: "Rice Meals", price: 95, available: true, prepTime: "20–25 min", image: "/assets/pork-barbecue.jpg" },
  { id: "pancit", name: "Pancit", category: "Group Meals", price: 125, available: true, prepTime: "25–30 min", image: "/assets/pancit-noodles.jpg" },
  { id: "bangus", name: "Bangus", category: "Rice Meals", price: 115, available: true, prepTime: "25–30 min", image: "/assets/bangus.jpg" },
  { id: "iced-americano", name: "Iced Americano", category: "Drinks", price: 65, available: true, prepTime: "10–15 min", image: "/assets/iced-coffee.jpg" },
  { id: "liempo", name: "Liempo", category: "Rice Meals", price: 130, available: true, prepTime: "20–25 min", image: "/assets/liempo.jpg" },
  { id: "iced-tea", name: "Iced Tea", category: "Drinks", price: 40, available: true, prepTime: "5–10 min", image: "/assets/iced-coffee.jpg" },
  { id: "extra-rice", name: "Steamed Rice", category: "Extras", price: 15, available: true, prepTime: "5 min", image: "/assets/rice-bowl.jpg" },
  { id: "crispy-fried-chicken", name: "Crispy Fried Chicken", category: "Rice Meals", price: 99, available: true, prepTime: "20–25 min", image: "/assets/chicken-wings.jpg" },
  { id: "pork-sisig-meal", name: "Pork Sisig Rice Meal", category: "Rice Meals", price: 150, available: true, prepTime: "20–25 min", image: "/assets/pork-sisig-rice.jpg" },
  { id: "lechon-kawali", name: "Lechon Kawali Meal", category: "Rice Meals", price: 165, available: true, prepTime: "25–30 min", image: "/assets/lechon-kawali.jpg" },
  { id: "beef-pares", name: "Beef Pares Classic", category: "Rice Meals", price: 130, available: true, prepTime: "20–25 min", image: "/assets/beef-pares.jpg" },
  { id: "pork-bbq-rice", name: "Pork BBQ Rice", category: "Rice Meals", price: 85, available: true, prepTime: "20–25 min", image: "/assets/pork-barbecue.jpg" },
  { id: "grilled-liempo", name: "Grilled Liempo Meal", category: "Rice Meals", price: 140, available: true, prepTime: "25–30 min", image: "/assets/grilled-liempo.jpg" },
  { id: "chicken-silog", name: "Chicken Silog", category: "Rice Meals", price: 125, available: true, prepTime: "20–25 min", image: "/assets/chicken-silog.jpg" },
];

export const cartItems = [
  { id: "crispy-chicken", name: "Crispy Fried Chicken", price: 99, quantity: 2, image: "/assets/chicken-wings.jpg" },
  { id: "pork-sisig", name: "Pork Sisig", price: 150, quantity: 1, image: "/assets/pork-sisig-rice.jpg" },
  { id: "steamed-rice", name: "Steamed Rice", price: 15, quantity: 3, image: "/assets/rice-bowl.jpg" },
  { id: "iced-tea", name: "Iced Tea (Medium)", price: 40, quantity: 2, image: "/assets/iced-coffee.jpg" },
];

export const formatPrice = (value: number) => `₱ ${value.toFixed(2)}`;
