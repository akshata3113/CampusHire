import { createRouter, createWebHistory } from "vue-router";
import { defineAsyncComponent } from "vue";

const About = defineAsyncComponent(() => import("@/views/About.vue"));
const Services = defineAsyncComponent(() => import("@/views/Services.vue"));
const Contact = defineAsyncComponent(() => import("@/views/Contact.vue"));
const PrivacyPolicy = defineAsyncComponent(() => import("@/views/PrivacyPolicy.vue"));
const TermsOfUse = defineAsyncComponent(() => import("@/views/TermsOfUse.vue"));
const Dashboard = defineAsyncComponent(() => import("@/views/Dashboard.vue"));
const Login = defineAsyncComponent(() => import("@/components/auth/Login.vue"));
const Register = defineAsyncComponent(() => import("@/components/auth/Register.vue"));
const Placements = defineAsyncComponent(() => import("@/pages/Placements.vue"));
const Learnings = defineAsyncComponent(() => import("@/pages/Learnings.vue"));
const Messages = defineAsyncComponent(() => import("@/views/Messages.vue")); // ✅ Import Messages Page

const routes = [
  { path: "/", redirect: "/dashboard" },
  { path: "/about", component: About },
  { path: "/services", component: Services },
  { path: "/contact", component: Contact },
  { path: "/privacy-policy", component: PrivacyPolicy },
  { path: "/terms-of-use", component: TermsOfUse },
  { path: "/dashboard", component: Dashboard },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/placements", component: Placements },
  { path: "/learnings", component: Learnings },
  { path: "/messages", component: Messages }, // ✅ Added Messages Route
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 🔹 Auth Middleware
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem("token");

  console.log(`🔹 Navigating to: ${to.path}`);
  console.log(`🔐 User Authenticated: ${isAuthenticated}`);

  const publicPages = [
    "/login",
    "/register",
    "/learnings",
    "/about",
    "/services",
    "/contact",
    "/privacy-policy",
    "/terms-of-use",
  ];

  if (!isAuthenticated && !publicPages.includes(to.path)) {
    console.warn(`🔴 Access denied! Redirecting to /login...`);
    next("/login");
  } else {
    console.log(`✅ Access granted! Proceeding to ${to.path}`);
    next();
  }
});

export default router;
