import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import valuesImg from "../../../assets/about-us/values.png";

const OurValues = () => {
  return (
    <div>
      <SectionTitle heading={"Our Values"} />
      <div className="md:flex md:flex-row-reverse gap-4 py-4 px-16">
        <div className="md:w-1/2 flex items-center justify-center">
          <img className="rounded-full border-4 border-black w-1/2 " src={valuesImg} alt="" />
        </div>

        <div className="md:w-1/2 flex flex-col items-center justify-center text-justify">
          <ul className="list-disc ">
            <li>
              <span className="font-bold">Compassionate Care:</span> We
              prioritize the emotional and physical well-being of our patients,
              ensuring they receive empathetic and personalized attention.
            </li>
            <li>
              <span className="font-bold">Accessibility:</span> We are committed
              to making healthcare more accessible by leveraging technology to
              reach patients wherever they are, eliminating barriers to quality
              care.
            </li>
            <li>
              <span className="font-bold">Innovation:</span> We continuously
              seek to improve our services through cutting-edge technology and
              innovative practices, staying ahead in the ever-evolving
              healthcare landscape.
            </li>
            <li>
              <span className="font-bold">Professionalism:</span> Our team of
              experienced and dedicated nursing professionals adheres to the
              highest standards of ethical practice and professional integrity.
            </li>
            <li>
              <span className="font-bold">Education and Empowerment:</span> We
              empower our patients with the knowledge and resources they need to
              make informed decisions about their health and well-being.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
