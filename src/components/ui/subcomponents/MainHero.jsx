
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, ShoppingCart, Star, Shield, TrendingUp, Search, Menu } from "lucide-react"
const MainHero = () =>{
    return(
        <div>
               <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-500 to-purple-600">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
                  Collect, Trade, Battle with Pokémon Cards
                </h1>
                <p className="max-w-[600px] text-white/90 md:text-xl">
                  Discover rare and powerful Pokémon cards. Build your collection and become a Pokémon Trading Card
                  Master!
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500">
                    Shop Now

                  </Button>
                  <Button size="lg" variant="outline">
                    View Collection
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-[300px] h-[400px] rotate-3 transition-all hover:rotate-6 hover:scale-105">
                  <img
                    src="/placeholder.svg?height=400&width=300"
                    alt="Featured Pokémon Card"
                    width={300}
                    height={400}
                    className="rounded-xl shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
    )
}

export default MainHero