import Footer from "./sections/footer.js";
import LinkSection from "./sections/linksection.js";
import ProfileSection from "./sections/profilesection.js";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ProfileSection />
      <LinkSection />
      <hr />
      <Footer />
    </div>
  );
}
