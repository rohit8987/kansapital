import Image from "next/image"
import Link from "next/link"

function Section() {
    return (
        <section className="mx-auto max-w-7xl p-4">
            <h3 className="text-center text-3xl font-medium relative my-4">Explore Categories</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                <div className="relative overflow-hidden group">
                    <Image src="https://res.cloudinary.com/doxwidis4/image/upload/v1729702255/vaxbhx5rbbvki6mi7oal.jpg" width={60} height={60} alt="" className="rounded-md size-full cursor-pointer aspect-square object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" />
                    <span className="absolute bottom-5 text-center w-full text-white text-lg truncate font-semibold tracking-wide">Brass Patili</span>
                </div>
                <div className="relative overflow-hidden group">
                    <Image src="https://res.cloudinary.com/doxwidis4/image/upload/v1728241890/hk9nnb26t1lz8zcvznvj.jpg" width={60} height={60} alt="" className="rounded-md size-full cursor-pointer aspect-square object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" />
                    <span className="absolute bottom-5 text-center w-full text-white text-lg truncate font-semibold tracking-wide">Kansa Bronze </span>
                </div>
                <div className="relative overflow-hidden group">
                    <Image src="https://res.cloudinary.com/doxwidis4/image/upload/v1729702716/os1vsxt98gsqud1u5nap.jpg" width={60} height={60} alt="" className="rounded-md size-full cursor-pointer aspect-square object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" />
                    <span className="absolute bottom-5 text-center w-full text-white text-lg truncate font-semibold tracking-wide">Gift Items </span>
                </div>

                <div className="relative overflow-hidden group">
                    <Link href="/productInfo">
                    <Image src="https://res.cloudinary.com/doxwidis4/image/upload/v1729703058/lprsxpxxwhqivb1hjhcc.jpg" width={60} height={60} alt="" className="rounded-md cursor-pointer size-full aspect-square object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" />
                    <span className="absolute bottom-5 text-center w-full text-white text-lg truncate font-semibold tracking-wide"> Brass Patili</span>
                    </Link>
                </div>
            </div>
            <div className="py-16">
                <div className="uppercase p-2 text-black bg-gray-100 flex justify-center items-center cursor-pointer text-xl">
                    <Link href="/allProducts" className="w-full h-full flex justify-center items-center">View all
                    </Link>
                </div>
            </div>
            <div className="p-2">
                <h3 className="text-center text-3xl font-medium relative my-4">Explore Categories</h3>
                <p className="flex justify-center text-center max-w-3xl mx-auto p-2">Kansapital is committed to building an integral space for artists, craftsmen and designers to express and experiment in collaboration and evolve a global creative language </p>
                <div className="flex justify-center">
                    <iframe
                        width="900"
                        height="340"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?start=0&end=120&autoplay=1&mute=1"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-lg shadow-lg"
                    ></iframe>
                </div>


            </div>
        </section>
    )
}

export default Section