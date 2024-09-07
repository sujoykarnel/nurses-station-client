const SectionTitle = ({ heading }) => {
  return (
    <div className="my-4 md:w-4/12 mx-auto text-center">
      <div>
        <h3 className="text-3xl border-y-4 border-black uppercase font-bold text-blue-600 mx-10">
          {heading}
        </h3>
      </div>
    </div>
  );
};

export default SectionTitle;
