import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, ShoppingCart, Star, Shield, TrendingUp, Search, Menu } from "lucide-react"

export default function PokemonLanding() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-red-600"></div>
            <span className="text-xl font-bold">PokéCards</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Shop
            </Link>
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Collection
            </Link>
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Rarities
            </Link>
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Events
            </Link>
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
            <Button variant="outline" className="hidden md:flex">
              Sign In
            </Button>
            <Button className="hidden md:flex">Sign Up</Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
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
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    View Collection
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-[300px] h-[400px] rotate-3 transition-all hover:rotate-6 hover:scale-105">
                  <Image
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

        {/* Featured Cards Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Cards</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out our most popular and rare Pokémon cards from the latest expansions.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
              {[
                { name: "Charizard GX", price: "$199.99", rarity: "Ultra Rare" },
                { name: "Pikachu V", price: "$49.99", rarity: "Rare" },
                { name: "Mewtwo EX", price: "$129.99", rarity: "Ultra Rare" },
                { name: "Gengar VMAX", price: "$89.99", rarity: "Rare Holo" },
                { name: "Blastoise", price: "$79.99", rarity: "Rare" },
                { name: "Venusaur", price: "$69.99", rarity: "Rare" },
              ].map((card, index) => (
                <Card key={index} className="overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                  <CardContent className="p-0">
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <Image
                        src={`/placeholder.svg?height=300&width=220&text=${card.name}`}
                        alt={card.name}
                        width={220}
                        height={300}
                        className="object-cover"
                      />
                      <div className="absolute top-2 right-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded-full text-black">
                        {card.rarity}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold">{card.name}</h3>
                      <div className="flex items-center justify-between mt-2">
                        <span className="font-semibold">{card.price}</span>
                        <Button size="sm" variant="outline" className="h-8">
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                View All Cards
              </Button>
            </div>
          </div>
        </section>

        {/* Collections Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Latest Expansions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore the newest Pokémon card expansions and complete your collection.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:gap-12">
              {[
                { name: "Scarlet & Violet", cards: "250+ cards", date: "March 2023" },
                { name: "Silver Tempest", cards: "190+ cards", date: "November 2022" },
                { name: "Lost Origin", cards: "220+ cards", date: "September 2022" },
                { name: "Astral Radiance", cards: "180+ cards", date: "May 2022" },
              ].map((expansion, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg border bg-background">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=300&width=600&text=${expansion.name}`}
                      alt={expansion.name}
                      width={600}
                      height={300}
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold">{expansion.name}</h3>
                    <div className="mt-2 flex items-center text-sm text-muted-foreground">
                      <span>{expansion.cards}</span>
                      <span className="mx-2">•</span>
                      <span>Released: {expansion.date}</span>
                    </div>
                    <p className="mt-4 text-muted-foreground">
                      Discover powerful new Pokémon and strategies in the {expansion.name} expansion.
                    </p>
                    <Button className="mt-4" variant="outline">
                      Explore Expansion
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose PokéCards</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer the best selection of Pokémon cards with guaranteed authenticity.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">Authenticity Guaranteed</h3>
                <p className="text-muted-foreground">
                  All our cards are verified for authenticity by Pokémon TCG experts.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100">
                  <Star className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold">Premium Selection</h3>
                <p className="text-muted-foreground">
                  From common cards to the rarest finds, we have everything for collectors.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">Investment Value</h3>
                <p className="text-muted-foreground">
                  Pokémon cards continue to appreciate in value. Start your collection today.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-red-500 to-orange-500">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Start Your Collection?</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of Pokémon card collectors and trainers. Sign up today for exclusive deals!
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500">
                  Sign Up Now
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t bg-background">
        <div className="container flex flex-col gap-8 py-8 md:py-12 lg:py-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold">Shop</h3>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                All Cards
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Booster Packs
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Elite Boxes
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Accessories
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold">Collections</h3>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Scarlet & Violet
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Sword & Shield
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Sun & Moon
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Vintage
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold">Support</h3>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Contact Us
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                FAQs
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Shipping
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Returns
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold">Company</h3>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                About Us
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Blog
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Careers
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Press
              </Link>
            </div>
            <div className="flex flex-col gap-2 md:col-span-2 lg:col-span-1">
              <h3 className="text-lg font-semibold">Newsletter</h3>
              <p className="text-sm text-muted-foreground">
                Subscribe to our newsletter for the latest releases and exclusive offers.
              </p>
              <form className="mt-2 flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button type="submit" size="sm">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-red-600"></div>
              <span className="text-xl font-bold">PokéCards</span>
            </div>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} PokéCards. All rights reserved. Pokémon and its trademarks are property of
              Nintendo.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

