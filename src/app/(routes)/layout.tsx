import Footer from "~/components/footer";
import Header from "~/components/header";

function StoreLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default StoreLayout;