// src/lib/mockData.ts

export const marketplaceProducts =[
  {
    id: "prod_001",
    name: "Premium Sokoto Red Ram",
    breed: "Sokoto Red",
    priceNaira: 150000,
    weight: "45 kg",
    age: "18 months",
    stockRemaining: 14,
    image: "https://images.unsplash.com/photo-1524024973431-2ad077232f8e?auto=format&fit=crop&w=800&q=80",
    description: "Healthy, fully vaccinated rams perfect for events or premium consumption."
  },
  {
    id: "prod_002",
    name: "White Fulani Bull",
    breed: "White Fulani",
    priceNaira: 850000,
    weight: "450 kg",
    age: "3 years",
    stockRemaining: 3,
    image: "https://images.unsplash.com/photo-1546452273-90baa97c6b45?auto=format&fit=crop&w=800&q=80",
    description: "Grass-fed, premium beef cattle ready for processing."
  }
];

export const investmentHerds =[
  {
    id: "herd_alpha",
    name: "Alpha Boran Breeding Herd",
    location: "Kaduna Safe Corridor",
    breed: "Boran Cross",
    totalAnimals: 50,
    averageAge: "8 months",
    minimumStakeNaira: 500000, // Amount to invest
    durationMonths: 12,
    expectedROI: "22%",
    image: "https://images.unsplash.com/photo-1596733430284-f7437060373e?auto=format&fit=crop&w=800&q=80",
    description: "A high-yield breeding herd remotely managed by verified PastureLink herders. Full GPS tracking included."
  },
  {
    id: "herd_beta",
    name: "Beta Dairy Cluster",
    location: "Plateau Reserve",
    breed: "Friesian Hybrid",
    totalAnimals: 30,
    averageAge: "14 months",
    minimumStakeNaira: 1000000,
    durationMonths: 18,
    expectedROI: "28%",
    image: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=800&q=80",
    description: "Dairy-focused herd generating weekly dividend payouts from milk yields."
  }
];
