import Image from "next/image";


function MainContent() {
    
    return (
        <>
        <div className="w-full h-dvh">
            <Image src="https://res.cloudinary.com/doxwidis4/image/upload/v1728235366/zswptvhvkdunodqzyhl1.jpg" 
                className="size-full object-cover" 
                width={1920}
                height={1080}
                alt="Home Baner"
                // fill
                priority
            />
        </div>
       
        </>
    )
}

export default MainContent;