import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function Layout(props) {
    return (
        <div >
            <Header />
                <div>
                    {props.children}
                </div>
            <Footer />
        </div>
    )
}