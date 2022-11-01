import Footer from "./Section/footer.js";
import LinkSection from "./Section/linksection.js";
import ProfileSection from "./Section/profilesection.js";
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
