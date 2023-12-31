import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

const MarketingLayout = ({
    children 
}: {
    children: React.ReactNode;
}) => {
    return(
        <div className="h-full bg-slate-100">
            <Navbar />
            
            <main className="pt-40 pb-20 bg-slate-100">

            <Footer />
            {children}
            </main>
        </div>
    );
};

export default MarketingLayout;