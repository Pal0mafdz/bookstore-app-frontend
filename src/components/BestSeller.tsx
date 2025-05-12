
// import { Button } from "./ui/button"
import  Crime  from '../assets/crime.jpg'
import Life from '../assets/life.jpg'
import Pride from '../assets/pride.jpeg'
import Tregua from '../assets/tregua.jpg'
import Stranger from '../assets/stranger.jpg'

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const products = [
  { image: Life },
  { image: Crime },
  { image: Pride },
  { image: Tregua },
  { image: Stranger }
];

export function BestSeller() {
  return (
    <div className="w-full flex justify-center">
      <Carousel
        className="w-full max-w-3xl"
        opts={{
          dragFree: true,
          loop: true,
          align: "start",
        }}
      >
        <CarouselContent>
          {products.map((product, index) => (
            <CarouselItem key={index} className="basis-1/2 md:basis-1/2 lg:basis-1/3 h-full">
              <div className="p-1">
                <Card className="border-0 bg-transparent shadow-none">
                  <CardContent className="flex aspect-[3/4] items-center justify-center p-0 h-full">
                    <img
                      src={product.image}
                      alt={`Libro ${index + 1}`}
                      className="w-full h-full object-cover" />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex justify-center" />
        <CarouselNext className="hidden sm:flex justify-center" />
      </Carousel>
    </div>
  
   

  )
}


export default BestSeller