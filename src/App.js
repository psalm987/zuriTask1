import Footer from "./sections/footer";
import LinkSection from "./sections/linksection";
import ProfileSection from "./sections/profilesection";
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
