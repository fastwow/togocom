export const PRIZES = [
  { title: "SUV BAIC X35!", isGrandPrize: true },
  { title: "Samsung A24+6Go de data", isGrandPrize: false },
  { title: "Airtime 5000 FCFA chacun", isGrandPrize: false },
];

export const DAILY_PRIZES = {
  "29/03/2024": {
    shortCode: "909",
    date: "29/03/2024",
    winners: ["123456", "654321", "765432", "987654"],
    prizes: PRIZES,
    currentPrize: PRIZES[2],
    notes: `
    Félicitations! Tu as gagné Airtime d'une valeur de 5000 FCFA du jeu
            "Fan Foot"! Tu recevras automatiquement une dotation de crédit de 5
            000 FCFA`,
  },
};

export const WEEKLY_PRIZES = {
  "29/03/2024": {
    shortCode: "333",
    date: "29/03/2024",
    winners: ["123647"],
    prizes: PRIZES,
    currentPrize: PRIZES[1],
    notes: `
      Félicitations! Tu as gagné Samsung A24+6Go de data au jeu "Fan Foot"! Tu seras contacter uniquement par le 888 pour recupérer ton lot`,
  },
};

export const SUPER_PRIZES = {
  "29/03/2024": {
    shortCode: "888",
    date: "29/03/2024",
    winners: ["433246"],
    prizes: PRIZES,
    currentPrize: PRIZES[0],
    notes: `
    Félicitations! Tu as gagné une voiture SUV BAIC X35 au jeu "Fan Foot"! Tu seras contacter uniquement par le 888 pour recupérer ton lot`,
  },
};
