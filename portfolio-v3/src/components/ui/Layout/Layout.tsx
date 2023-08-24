import { FunctionComponent, PropsWithChildren } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

type LayoutProps = PropsWithChildren<object>



 const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
    return (
        <div >
            <Header />
                <div id="test">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default Layout;