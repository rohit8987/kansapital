import Image from "next/image"
import Link from "next/link"

function Section() {
    const images = [
        {name: "Brass Patili", image: "https://res.cloudinary.com/doxwidis4/image/upload/v1729702255/vaxbhx5rbbvki6mi7oal.jpg"},
        {name: "Kansa Bronze", image: "https://res.cloudinary.com/doxwidis4/image/upload/v1728241890/hk9nnb26t1lz8zcvznvj.jpg"},
        {name: "Gift Items", image: "https://res.cloudinary.com/doxwidis4/image/upload/v1729702716/os1vsxt98gsqud1u5nap.jpg"},
        {name: "Brass Patili", image: "https://res.cloudinary.com/doxwidis4/image/upload/v1729703058/lprsxpxxwhqivb1hjhcc.jpg"}
    ]
    return (
        <section className="mx-auto max-w-7xl p-4">
            <h3 className="text-center text-3xl font-medium relative mt-4 mb-8">Explore Categories</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {images.map((item, index) => (
                    <div className="relative overflow-hidden group" key={index}>
                        <Link href={`/products`}>
                            <Image src={item.image} width={60} height={60} alt="" className="rounded-md cursor-pointer size-full aspect-square object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" quality={50} />
                            <span className="absolute bottom-5 text-center w-full text-white text-lg truncate font-semibold tracking-wide">{item.name}</span>
                        </Link>
                    </div>
                ))}

            </div>
            <div className="mt-8">
                <h3 className="text-center text-3xl font-medium relative">Our Creators</h3>
                <p className="flex justify-center text-center max-w-3xl mx-auto p-2">Kansapital is committed to building an integral space for artists, craftsmen and designers to express and experiment in collaboration and evolve a global creative language </p>
                <div className="size-full overflow-hidden">
                    <video controls autoPlay className="flex relative justify-center aspect-[4/3] md:aspect-video lg:aspect-[2.4/1]">
                        <source src="https://cdn.shopify.com/videos/c/o/v/80df6667a77d4b76b61ce68da3ad6b60.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </section>
    )
}

export default Section