import Image from "next/image"

function Section() {
    return (
        <section className="mx-auto max-w-7xl p-4">
            <h3 className="text-center text-3xl font-medium relative my-4">Explore Categories</h3>
            <div className="grid grid-cols-4 gap-5">
                <div className="relative overflow-hidden">
                    <Image src="https://res.cloudinary.com/doxwidis4/image/upload/v1729703058/lprsxpxxwhqivb1hjhcc.jpg" width={60} height={60} alt="" className="rounded-md size-full aspect-square object-cover" />
                    <span className="absolute bottom-5 text-center w-full text-white text-lg truncate font-semibold tracking-wide">Hello World</span>
                </div>
            </div>
        </section>
    )
}

export default Section