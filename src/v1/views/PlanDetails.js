import {
  React,
  Helmet,
  useParams,
  useSelector,
  useDispatch,
  useEffect,
} from "../../services/centerServices";
import { Header, Footer } from "../components/commonCponts";
import { fetchPlanDetails } from "../../redux/slices/PlanDetails";
import "../../assets/css/outletspg.css";

function PlanDetails() {
  const { location, city, slug } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.planDetails);
  const items = state.data?.data ?? {};

  useEffect(() => {
    dispatch(fetchPlanDetails({ slug }));
  }, []);

  if (state.isLoading) {
    return <p>Loading...</p>;
  } else {
    {
      console.log("items", items);
    }
    return (
      <>
        <Header onProdDetails="1" />
        <div className="wrapper">
          <div className="padtop padbot"> Design not provided yet  </div>
        </div>
        <Footer />
        <Helmet>
          <body className={"pgoutlets " + location + " " + city} />
        </Helmet>
      </>
    );
  }
}

export default PlanDetails;
