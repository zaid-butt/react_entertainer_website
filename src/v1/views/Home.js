import {
  React,
  Helmet,
  useParams,
  useEffect,
  useSelector,
  useDispatch,
  siteUrl
} from "../../services/centerServices";
import { Header, Footer } from "../components/commonCponts";
import {
  Banner,
  HomeCategoriesIcons,
  HomeCategoriesImgs,
  Offers,
  TrendingPlacesWeek,
  Famshar,
  GoingToLove,
  Testimonials,
  Faqs,
  Plans,
} from "../components/Home/homecomponents";

import { fetchCategories } from "../../redux/slices/Categories";
import { fetchPlans } from "../../redux/slices/Plans";
import { fetchHomeSections } from "../../redux/slices/HomeSections";

function Index() {
  const lang = useSelector((state) => state.language);
  const loc = useSelector((state) => state.location);
  const stateSections = useSelector((state) => state.homeSections);
  localStorage.setItem("currentHomeUrl", siteUrl);
  const dispatch = useDispatch();
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

  useEffect(() => {
    dispatch(fetchHomeSections({ lang }));
    dispatch(fetchCategories({ loc, lang }));
    dispatch(fetchPlans());
  }, []);
  const sections = stateSections?.data?.data?.sections;
  return (
    <>
      <Header onhome="1" />
      <div className="wrapper">
        <Banner />
        {sections &&
          sections.map((sec) => {
            switch (sec.section_name) {
              case "types":
                return <HomeCategoriesIcons key={sec.section_name} types={sec} />;
              case "categories":
                return <HomeCategoriesImgs key={sec.section_name} />;
              case "offers":
                return <Offers key={sec.section_name} />;
              case "trending_merchants":
                return <TrendingPlacesWeek key={sec.section_name} />;
              case "share_membership":
                return <Famshar key={sec.section_name} />;
              // case "how_it_works":
              //   return <Famshar />;
              case "products":
                return <Plans key={sec.section_name} />;
              case "testimonials":
                return <Testimonials key={sec.section_name} />;
              case "faqs":
                return <Faqs key={sec.section_name} />;
            }
          })}
        {/* <HomeCategoriesIcons />
        <HomeCategoriesImg />
        <Offers />
        <TrendingPlacesWeek />
        <Famshar />
        <Plans />
        <GoingToove />
        <Testimonials />
        <Faqs /> */}
      </div>
      <Footer />
      <Helmet>
        <body className={"pghome " + location + " " + city} />
      </Helmet>
    </>
  );
}

export default Index;
