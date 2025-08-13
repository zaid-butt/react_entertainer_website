
import {
  React,
  useEffect,
  useParams,
  Helmet,
  useTranslation,
} from "../../../services/centerServices.js";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownToggle from "react-bootstrap/DropdownToggle";

function LanguageSwitcher() {
  const { lang } = useParams();
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  let ch_translation = (l) => {
    window.location.href = window.location.href.replace(
      "/" + lang + "-",
      "/" + l + "-"
    );
  };

  useEffect(() => {
    i18n.changeLanguage(lang);
    document.dir = i18n.dir();
  }, [lang, i18n, i18n.language]);

  return (
    <>
      <li className="nav-item langdropdown">
        <div className="d-mob">Select language </div>
        <Dropdown>
          <DropdownToggle variant="link">{t("selact_lang")}</DropdownToggle>

          <Dropdown.Menu className="dropdown-menu-right">
            <div className="langdropdownbg"></div>
            <div className="dropdown-menu dropdown-menu2">
              <div className="d-mob">
                Select language
                <DropdownToggle variant="link">
                  <i
                    className="bi bi-x-lg"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  ></i>
                </DropdownToggle>
              </div>
              <div className="dropdown-lang" onClick={() => ch_translation("en")}>
                <img src="https://b2cappassetscdn.theentertainerme.com/website_images/lang_en.svg" alt=" " />
                <span>English</span>
              </div>
              <div  className="dropdown-lang" onClick={() => ch_translation("ar")}>
                <img src="https://b2cappassetscdn.theentertainerme.com/website_images/lang_ar.svg" alt=" " />
                <span>العربيّة</span>
              </div>
              <div className="dropdown-lang" onClick={() => ch_translation("ru")}>
                <img src="https://b2cappassetscdn.theentertainerme.com/website_images/lang_ru.svg" alt=" " />
                <span>Cyrillic</span>
              </div>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </li>
      <Helmet>
        <html lang={t("html_lang")} />
      </Helmet>
    </>
  );
}
export default LanguageSwitcher;
