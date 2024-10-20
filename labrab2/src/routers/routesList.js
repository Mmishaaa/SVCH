import AboutPage from "../components/aboutContent";

export const privateRoutes = [
  { title: "About", path: "/", element: <AboutPage /> },  
  { title: "Profile", path: "/profile", element: <ProfilePage /> },
  { title: "NotFound", path: "*", element: <NotFoundPage /> },
]