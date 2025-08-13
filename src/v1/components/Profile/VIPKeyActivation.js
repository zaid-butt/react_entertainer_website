import {
  React,
  useSelector,
  useDispatch,
  useState,
  useParams,
  useEffect,
} from "../../../services/centerServices";
import { fetchVipKey } from "../../../redux/slices/VipKey";
import PopUpAlert from "../PopUp/PopUpAlert";
function VIPKeyActivation() {
  const dispatch = useDispatch();
  const { location, city } = useParams();
  const lang = useSelector((state) => state.language);
  const loc = useSelector((state) => state.location);
  const isAuth = useSelector((state) => state.auth);
  const stateVipKey = useSelector((state) => state.vipkey);
  const [inputVipKey, setInputVipKey] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const userId = isAuth.data?.data?.user?.user_id;
  const [noBtn, setNoBtn] = useState(false);
  const alertMessage = () => {
    setNoBtn(true);
  };

  const btnActivate = () => {
    if (!inputVipKey) {
      setErrorMessage("Please enter your Key.");
    } else if (inputVipKey.length >= 25) {
      setErrorMessage("Key maximum length is 25 digits.");
    } else if (inputVipKey.length < 3) {
      setErrorMessage("Key minimum length is 3 digits.");
    } else {
      if (userId) {
        setErrorMessage("");
        dispatch(fetchVipKey(inputVipKey));
        alertMessage();
      }
    }
  };

  return (
    <>
      <PopUpAlert
        popupTitle={"Vip Key"}
        popupDesc={"test"}
        noBtn={noBtn}
        setNoBtn={setNoBtn}
        btnClass={"MembershipTerms"}
        btnTextClose="Got it"
      />
      <div id="VIPKeyActivation" className="contentWrap">
        <h4>Activate VIP Key </h4>
        {stateVipKey && stateVipKey.data}
        <form className="form-inline">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="EnterYourActivationCodeHere"
              placeholder="Enter your activation code here"
              onChange={(e) => setInputVipKey(e.target.value)}
            />
          </div>
          <div className="message-invalid">{errorMessage}</div>
          <button
            type="button"
            onClick={btnActivate}
            className="btn btn-primary"
          >
            Activate
          </button>
        </form>
      </div>
    </>
  );
}

export default VIPKeyActivation;
