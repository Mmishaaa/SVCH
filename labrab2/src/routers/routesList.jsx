import AboutPage from "../components/aboutContent";
import NotFoundPage from "../pages/NotFound";
import ProfilePage from "../pages/profilePage"

export const privateRoutes = [
  { title: "About", path: "/", element: <AboutPage /> },  
  { title: "About", path: "/about", element: <AboutPage /> },  
  { title: "Profile", path: "/profile", element: <ProfilePage /> },
  { title: "NotFound", path: "*", element: <NotFoundPage /> },
]