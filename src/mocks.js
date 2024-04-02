export const DATA = [
  {
    type: "DAILY",
    date: "29/03/2024",
    prizes: [{ title: "Airtime 5000 FCFA chacun" }],
    winners: ["123456", "654321", "765432", "987654"],
    shortCode: "123",
  },
  {
    type: "WEEKLY",
    date: "29/03/2024",
    prizes: [{ title: "Samsung A24+6Go de data" }],
    winners: ["123647"],
    shortCode: "123",
  },
  {
    type: "SUPER",
    date: "29/03/2024",
    prizes: [{ title: "SUV BAIC X35!" }],
    winners: ["433246"],
    shortCode: "123",
  },
].map((d) => ({
  ...d,
  notes: `
  Félicitations! Tu as gagné une voiture ${d.prizes[0].title} au jeu "Fan Foot"! Tu seras contacter uniquement par le 888 pour recupérer ton lot`,
}));
