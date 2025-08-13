/** @type {import('tailwindcss').Config} */
module.exports = {
  // mode: "jit",
  content: [
    "./src/v1/components/plansPage/PlansDetails/AllPlansContainer.js",
    "./src/v1/components/plansPage/PlansDetails/PlansDetails.js",
    "./src/v1/components/plansPage/PlansDetails/IncludesIcon.js",
    "./src/v1/components/plansPage/PlansDetails/Plans.js",
    "./src/v1/components/plansPage/PlansDetails/PlansBottomCards.js",
    "./src/v1/components/plansPage/PlansDetails/PlansDetails.js",
    "./src/v1/components/plansPage/PlansDetails/SoleilPlan.js",
    "./src/v1/components/plansPage/PlansDetails/Tourist.js",
    "./src/v1/components/plansPage/PlansDetails/TwoInOnePlan.js",
    "./src/v1/components/plansPage/PlansDetails/PlanCard/BenefitsComponent.js",
    "./src/v1/components/plansPage/PlansDetails/PlanCard/PlanCard.js",
  ],
  theme: {
    screens: {
      sm: "678px",
      xl: "1200px",
    },
    extend: {
      screens: {
        "14xl": { min: "1200px", max: "1400px" },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
