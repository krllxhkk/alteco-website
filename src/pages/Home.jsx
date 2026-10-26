// // Импортируем части главной страницы
// import Header from "../components/Header";
// import Hero from "../components/Hero";
// import Offers from "../components/Offers";
// import Services from "../components/Services";
// import Footer from "../components/Footer";

// function Home() {
//     return (
//         <>
//             {/* Верхняя часть сайта и навигация */}
//             <Header />

//             {/* Большой баннер */}
//             <Hero />

//             {/* Секция с предложениями */}
//             <Offers />

//             {/* Секция с услугами */}
//             <Services />

//             {/* Нижняя часть сайта */}
//             <Footer />
//         </>
//     );
// }

// export default Home;
import Header from "../components/Header";
import Hero from "../components/Hero";
import Offers from "../components/Offers";
import Services from "../components/Services";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Offers />
            <Services />
            <Footer />
        </>
    );
}

export default Home;