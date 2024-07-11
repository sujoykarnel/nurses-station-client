import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Banner from "../Banner/Banner";
import EssentialNursing from "../EssentialNursing/EssentialNursing";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <SectionTitle heading="Essential Nursing" />
      <EssentialNursing />
      <SectionTitle heading="Featured Nursing" />
      <SectionTitle heading="Testimonials" />
      <Testimonials />
    </div>
  );
};

export default Home;
