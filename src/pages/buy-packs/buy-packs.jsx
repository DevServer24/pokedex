import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
} from "@/components/ui/alert-dialog";
import backCard from '../../assets/card-back.jpg'
const POKEMON_API = "https://api.pokemontcg.io/v2/cards";
const CARD_BACK_IMAGE = "/images/card-back.png"; // Your Pokémon card back image

const BuyPacks = () => {
  const [cards, setCards] = useState([]);
  const [revealed, setRevealed] = useState({});
  const [allRevealed, setAllRevealed] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [zoomedCard, setZoomedCard] = useState(null); // For enlarged view

  const fetchRareCards = async (count = 10) => {
    try {
      const response = await fetch(`${POKEMON_API}?q=rarity:Rare`);
      const data = await response.json();
      const rareCards = data.data.filter((card) =>
        ["Rare", "Rare Holo", "Rare Holo EX", "Legendary"].includes(card.rarity)
      );
      return rareCards.sort(() => 0.5 - Math.random()).slice(0, count);
    } catch (error) {
      console.error("Error fetching Pokémon cards:", error);
      return [];
    }
  };

  const drawCards = async () => {
    setAllRevealed(false);
    setRevealed({});
    setSelectedIndex(null);
    setZoomedCard(null);
    const newCards = await fetchRareCards(10);
    setCards(newCards);
  };

  const confirmReveal = (index) => {
    setSelectedIndex(index);
  };

  const revealCard = () => {
    if (selectedIndex !== null) {
      setRevealed((prev) => ({ ...prev, [selectedIndex]: true }));
      setSelectedIndex(null);
    }
  };

  const revealAll = () => {
    setAllRevealed(true);
    setRevealed(Object.fromEntries(cards.map((_, i) => [i, true])));
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-red-500 to-yellow-600 flex justify-center">
      <div className="container px-4 md:px-6 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Buy Pokémon Card Packs</h1>
        <p className="text-white/90 mb-6">Draw 10 cards from a booster pack and reveal them one by one or all at once!</p>

        <div className="flex gap-4 justify-center mb-6">
          <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500" onClick={drawCards}>
            Buy Pack (10 Cards)
          </Button>
          <Button size="lg" className="bg-blue-400 text-white hover:bg-blue-500" onClick={revealAll}>
            Reveal All
          </Button>
        </div>

        <div className="grid grid-cols-5 gap-4 justify-center">
          <AnimatePresence>
            {cards.map((card, index) => (
              <CardItem
                key={card.id}
                card={card}
                index={index}
                revealed={allRevealed || revealed[index]}
                onClick={() => (revealed[index] ? setZoomedCard(card) : confirmReveal(index))}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Alert Dialog for Confirming Card Reveal */}
      {selectedIndex !== null && (
        <AlertDialog open={selectedIndex !== null}>
          <AlertDialogOverlay />
          <AlertDialogContent>
            <AlertDialogHeader>Reveal Card?</AlertDialogHeader>
            <AlertDialogDescription>Are you sure you want to reveal this Pokémon card?</AlertDialogDescription>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setSelectedIndex(null)}>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={revealCard}>Reveal</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}

      {/* Alert Dialog for Enlarged Card View */}
      {zoomedCard && (
        <AlertDialog open={zoomedCard !== null}>
          <AlertDialogOverlay />
          <AlertDialogContent className="flex flex-col items-center">
            <AlertDialogHeader>{zoomedCard.name}</AlertDialogHeader>
            <img src={zoomedCard.images.large} alt={zoomedCard.name} className="w-80 h-auto rounded-lg shadow-lg" />
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setZoomedCard(null)}>Close</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </section>
  );
};

// Card Flip Animation (Click to Reveal)
const CardItem = ({ card, index, revealed, onClick }) => {
  return (
    <motion.div
      className="relative w-40 h-56 bg-gray-800 rounded-lg shadow-lg cursor-pointer"
      initial={{ rotateY: 180 }}
      animate={{ rotateY: revealed ? 0 : 180 }}
      transition={{ delay: revealed ? index * 0.1 : 0, duration: 0.6, ease: "easeInOut" }}
      onClick={onClick} // Either reveal or open the zoomed-in view
    >
      <img
        src={revealed ? card.images.large :backCard }
        alt={revealed ? card.name : "Pokémon Card Back"}
        className="w-full h-full rounded-lg"
      />
    </motion.div>
  );
};

export default BuyPacks;
