
// dummy data
import { React, Helmet, useParams } from "services/centerServices";
import { Header, Footer } from "components/commonCponts";
import {
  Banner,
  HomeCategoriesIcons,
  HomeCategoriesImg,
  Offers,
  TrendingPlacesWeek,
  Famshar,
  GoingToLove,
  Testimonials,
  Faqs,
  Plans,
} from "components/Home/homecomponents";

function Index() {

  const { location, city } = useParams();
  let lastKnownScrollPosition = 0;
  document.addEventListener("scroll", (event) => {
    lastKnownScrollPosition = window.scrollY;
    let topheader = document.getElementsByTagName("header")[0];
    if (lastKnownScrollPosition > 75) {
      window.requestAnimationFrame(() => {
        topheader.setAttribute("id", "head_white");
      });
    } else {
      window.requestAnimationFrame(() => {
        topheader.setAttribute("id", "");
      });
    }
  });

  return (
    <>
      <Header onhome="1" />
      <div className="wrapper">
        <Banner />
        <div id="categories" className="padbot">
          <HomeCategoriesIcons />
          <HomeCategoriesImg />
        </div>
        <Offers />
        <TrendingPlacesWeek />
        <Famshar />
        <Plans />
        <GoingToLove />
        <Testimonials />
        <Faqs />
      </div>
      <Footer />
      <Helmet>
        <body className={"pghome " + location + " " + city} />
       <meta name="description" content={city + " test meta"} />
      </Helmet>
    </>
  );
}

export default Index;
