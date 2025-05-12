import BestSeller from "@/components/BestSeller";

const HomePage = () =>{
    return(
        <div className="flex flex-col gap-12">
            <div className=" rounded-lg py-8 flex flex-col gap-16 text-center -mt-70">
            <h1 className="text-5xl font-libre tracking-tight text-white">Where every page is a new journey</h1>
            <span className="text-xl font-libre italic text-white ">Choose your destination</span>
            </div>

            <div className="grid md:grid-cols-[1fr_2fr] gap-5 mt-20">
            <div className="flex flex-col items-center justify-center gap-4 text-center">
            <span className="w-full font-libre bold text-3xl tracking-tighter">
                Best Sellers
            </span>
            <span className="font-libre text-left">
            At BookStore.com, we believe in the magic of stories and the power of knowledge. Our shelves are filled with carefully curated books across all genres, from bestselling novels and timeless classics to thought-provoking nonfiction and children’s favorites. Whether you’re looking for the latest literary sensation, a hidden gem, or the perfect gift for a fellow book enthusiast, you’ll find it here.
            </span>
            </div>

            <div className="w-full">
                <BestSeller/>
            </div>
            
        </div>
        </div>
        

    )
}

export default HomePage;