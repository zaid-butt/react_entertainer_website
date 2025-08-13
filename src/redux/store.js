// store.js
import { configureStore } from "@reduxjs/toolkit";
import languageReducers from "./languageReducers";
import HomeSectionsReducers from "./slices/HomeSections";
import CategoriesReducers from "./slices/Categories";
import LocationsReducers from "./slices/Locations";
import TrendingReducers from "./slices/Trending";
import SimilarPlacesReducers from "./slices/SimilarPlaces";
import AuthReducers from "./slices/Auth";
import PlansReducers from "./slices/Plans";
import PlanDetailsReducers from "./slices/PlanDetails";
import SearchReducers from "./slices/Search";
import TestimonialsReducers from "./slices/Testimonials";
import VipKeyReducers from "./slices/VipKey";
import SubscriptionsReducers from "./slices/Subscriptions";
import SaveCardsReducers from "./slices/SavedCards";
import NotificationsReducers from "./slices/Notifications";
import HelpsupportReducers from "./slices/HelpSupport";
import PreferencesReducers from "./slices/Preferences";


const store = configureStore({
  reducer: {
    language: languageReducers,
    locations: LocationsReducers,
    homeSections: HomeSectionsReducers,
    categories: CategoriesReducers,
    trending: TrendingReducers,
    similarPlaces: SimilarPlacesReducers,
    auth: AuthReducers,
    plans: PlansReducers,
    search: SearchReducers,
    testimonials: TestimonialsReducers,
    planDetails: PlanDetailsReducers,
    vipkey: VipKeyReducers,
    subscriptions: SubscriptionsReducers,
    savecards: SaveCardsReducers,
    notifications: NotificationsReducers,
    helpsupport: HelpsupportReducers,
    preferences: PreferencesReducers,
    
  },
  
});

export default store;
