import { Button } from "@/components/ui/button";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import Featured from "./Featured";

const POKEMON_API = "https://api.pokemontcg.io/v2/cards";

const MainHero = () => {
  const [cards, setCards] = useState([]);

  // Fetch Pokémon cards
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

  useEffect(() => {
    fetchRareCards(10).then(setCards);
  }, []);

  const handleCardRemove = async (removedCardId) => {
    setCards((prevCards) => {
      const updatedCards = prevCards.filter((card) => card.id !== removedCardId);
      if (updatedCards.length < 10) {
        fetchRareCards(1).then((newCard) => {
          if (newCard.length > 0) {
            setCards((prev) => [...prev, newCard[0]]);
          }
        });
      }
      return updatedCards;
    });
  };

  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-500 to-purple-600 flex justify-center">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 items-center text-center lg:text-left">
            
            {/* Left Side: Pokémon Cards Carousel + Draggable */}
            <div className="relative flex flex-col items-center w-full">
              <motion.div 
                className="relative w-[300px] h-[400px] flex items-center justify-center"
              >
                <AnimatePresence>
                  {cards.map((card, index) => (
                    <CardItem 
                      key={card.id} 
                      card={card} 
                      index={index} 
                      total={cards.length} 
                      onRemove={handleCardRemove} 
                    />
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Right Side: Text Content */}
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
                Collect, Trade, Battle with Pokémon Cards
              </h1>
              <p className="max-w-[600px] text-white/90 md:text-xl mx-auto lg:mx-0">
                Discover rare and powerful Pokémon cards. Build your collection and become a Pokémon Trading Card Master!
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
                <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500">
                  Shop Now
                </Button>
                <Button size="lg" variant="outline">
                  View Collection
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Section Below */}
      <Featured />
    </>
  );
};

// Pokémon Card Item Component (Stacked + Draggable)
const CardItem = ({ card, index, total, onRemove }) => {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-150, 150], [-18, 18]);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);

  const isFront = index === total - 1;
  const positionOffset = (index - (total - 1)) * -15;
  const rotationOffset = index * 2;

  const handleDragEnd = (event, info) => {
    if (Math.abs(info.offset.x) > 100) {
      onRemove(card.id);
    }
  };

  return (
    <motion.img
      src={card.images.large}
      alt={`Pokémon card: ${card.name}`}
      className="absolute h-96 w-72 object-cover hover:cursor-grab active:cursor-grabbing"
      style={{
        x,
        opacity,
        rotate,
        top: positionOffset,
        left: positionOffset * -1,
        zIndex: index,
        scale: isFront ? 1 : 0.95,
        transformOrigin: "bottom center",
      }}
      animate={{
        scale: isFront ? 1 : 0.95,
        rotate: rotationOffset,
      }}
      exit={{ opacity: 0, y: 50, scale: 0.8 }}
      drag={isFront ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
    />
  );
};

export default MainHero;
