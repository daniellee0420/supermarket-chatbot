const categories = [
  {
    title: "Produce",
    value: "produce",
    icon: "🍅",
    color: "rgba(253, 227, 228, 1)",
    contrastColor: "rgba(46, 28, 26, 1)",
    products: [
      {
        title: "Chicken",
        value: "chicken",
        icon: "🐔",
        price: 7,
        unit: "lbs",
      },
      {
        title: "Lamb",
        value: "lamb",
        icon: "🐑",
        price: 4,
        unit: "lbs",
      },
      {
        title: "Pork",
        value: "pork",
        icon: "🐖",
        price: 6,
        unit: "lbs",
      },
      {
        title: "Bacon",
        value: "bacon",
        icon: "🥓",
        price: 8,
        unit: "lbs",
      },
      {
        title: "Fish",
        value: "fish",
        icon: "🐟",
        price: 5,
        unit: "lbs",
      },
      {
        title: "Cheeses",
        value: "cheeses",
        icon: "🧀",
        price: 3,
        unit: "lbs",
      },
    ],
  },
  {
    title: "Bakery",
    value: "bakery",
    icon: "🥐",
    color: "rgba(254, 251, 216, 1)",
    contrastColor: "rgba(46, 28, 26, 1)",
    products: [
      {
        title: "Croissants",
        value: "croissants",
        icon: "🥐",
        price: 2,
        unit: "pcs",
      },
      {
        title: "Bread",
        value: "bread",
        icon: "🍞",
        price: 1,
        unit: "loaf",
      },
      {
        title: "Bagels",
        value: "bagels",
        icon: "🥯",
        price: 3,
        unit: "pcs",
      },
      {
        title: "Muffins",
        value: "muffins",
        icon: "🧁",
        price: 4,
        unit: "pcs",
      },
      {
        title: "Donuts",
        value: "donuts",
        icon: "🍩",
        price: 2,
        unit: "pcs",
      },
    ],
  },
  {
    title: "Snacks",
    value: "snacks",
    icon: "🍿",
    color: "rgba(255, 238, 255, 1)",
    contrastColor: "rgba(46, 28, 26, 1)",
    products: [
      {
        title: "Kitkat",
        value: "kitkat",
        icon: "🍫",
        price: 5,
        unit: "bars",
      },
      {
        title: "Skittles",
        value: "skittles",
        icon: "🌈",
        price: 2,
        unit: "packs",
      },
      {
        title: "Crisps",
        value: "crisps",
        icon: "🥨",
        price: 3,
        unit: "bags",
      },
      {
        title: "Popcorn",
        value: "popcorn",
        icon: "🍿",
        price: 4,
        unit: "bags",
      },
      {
        title: "Mars",
        value: "mars",
        icon: "🍫",
        price: 3,
        unit: "bars",
      },
      {
        title: "Twinkies",
        value: "twinkies",
        icon: "🍮",
        price: 2,
        unit: "pcs",
      },
    ],
  },
  {
    title: "Beverages",
    value: "beverages",
    icon: "🍹",
    color: "rgba(227, 229, 254, 1)",
    contrastColor: "rgba(46, 28, 26, 1)",
    products: [
      {
        title: "Beer",
        value: "beer",
        icon: "🍺",
        price: 6,
        unit: "bottles",
      },
      {
        title: "Wine",
        value: "wine",
        icon: "🍷",
        price: 8,
        unit: "bottles",
      },
      {
        title: "Vodka",
        value: "vodka",
        icon: "🍸",
        price: 10,
        unit: "bottles",
      },
      {
        title: "Soda",
        value: "soda",
        icon: "🥤",
        price: 2,
        unit: "cans",
      },
      {
        title: "Fresh Juice",
        value: "fresh_juice",
        icon: "🍹",
        price: 4,
        unit: "bottles",
      },
      {
        title: "Protein Shakes",
        value: "protein_shakes",
        icon: "💪",
        price: 3,
        unit: "bottles",
      },
      {
        title: "Water",
        value: "water",
        icon: "🚰",
        price: 1,
        unit: "bottles",
      },
    ],
  },
  {
    title: "Electronics",
    value: "electronics",
    icon: "🔌",
    color: "rgba(253, 225, 141, 1)",
    contrastColor: "rgba(46, 28, 26, 1)",
    products: [
      {
        title: "Laptop",
        value: "laptop",
        icon: "💻",
        price: 9,
        unit: "pcs",
      },
      {
        title: "Phone",
        value: "phone",
        icon: "📱",
        price: 7,
        unit: "pcs",
      },
      {
        title: "Chargers",
        value: "chargers",
        icon: "🔌",
        price: 2,
        unit: "pcs",
      },
      {
        title: "Power Banks",
        value: "power_banks",
        icon: "🔋",
        price: 5,
        unit: "pcs",
      },
      {
        title: "CDs",
        value: "cds",
        icon: "💿",
        price: 3,
        unit: "pcs",
      },
      {
        title: "Gaming Consoles",
        value: "gaming_consoles",
        icon: "🎮",
        price: 8,
        unit: "pcs",
      },
    ],
  },
  {
    title: "Health and Beauty",
    value: "health_and_beauty",
    icon: "💄",
    color: "rgba(214, 255, 208, 1)",
    contrastColor: "rgba(46, 28, 26, 1)",
    products: [
      {
        title: "Shampoo",
        value: "shampoo",
        icon: "🧴",
        price: 4,
        unit: "bottles",
      },
      {
        title: "Conditioner",
        value: "conditioner",
        icon: "🧖‍♀️",
        price: 5,
        unit: "bottles",
      },
      {
        title: "Face Wash",
        value: "face_wash",
        icon: "🧼",
        price: 3,
        unit: "bottles",
      },
      {
        title: "Toothbrush",
        value: "toothbrush",
        icon: "🪥",
        price: 2,
        unit: "pcs",
      },
      {
        title: "Toothpaste",
        value: "toothpaste",
        icon: "🦷",
        price: 1,
        unit: "tube",
      },
    ],
  },
];

// Function to generate a unique ID
function generateUniqueId() {
  return Math.random().toString(36).substr(2, 9);
}

// Array to store all products with unique IDs
const allProducts = [];

// Loop through categories and products
categories.forEach((category) => {
  category.products.forEach((product) => {
    const uniqueId = generateUniqueId();
    const productWithId = { ...product, id: uniqueId };
    allProducts.push(productWithId);
  });
});

const config = {
  categories,
  products: allProducts,
  persistJWT: "6v3SAe3CTrC5y3fzGUUQKrV27HMWhuLp",
  productNameVariableID: "step_909",
  productCountVariableID: "step_453",
};

export default config;
