import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import valuesImg from "../../../assets/about-us/values.png";

const OurValues = () => {
  return (
    <div>
      <SectionTitle heading={"Our Values"} />
      <div className="md:flex md:flex-row-reverse gap-4">
        <div className="md:w-1/2 flex items-center justify-center">
          <img className="rounded-full w-1/2 " src={valuesImg} alt="" />
        </div>

        <div className="md:w-1/2 flex flex-col items-center justify-center">
          <ul>
            <li>
              Compassionate Care: We prioritize the emotional and physical
              well-being of our patients, ensuring they receive empathetic and
              personalized attention.
            </li>
            <li>
              Accessibility: We are committed to making healthcare more
              accessible by leveraging technology to reach patients wherever
              they are, eliminating barriers to quality care.
            </li>
            <li>
              Innovation: We continuously seek to improve our services through
              cutting-edge technology and innovative practices, staying ahead in
              the ever-evolving healthcare landscape.
            </li>
            <li>
              Professionalism: Our team of experienced and dedicated nursing
              professionals adheres to the highest standards of ethical practice
              and professional integrity.
            </li>
            <li>
              Education and Empowerment: We empower our patients with the
              knowledge and resources they need to make informed decisions about
              their health and well-being.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
