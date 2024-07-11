import servicesImg from "../../../assets/services/services.png";

const ServiceItem = ({ item }) => {
  const { name, details, needed_equipment, image } = item;
  console.log(item);
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={image || servicesImg} alt="Shoes" />
        </figure>
        <div className="card-body text-justify">
          <h2 className="card-title font-bold">{name}</h2>
          <p>{details}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Show Nurses</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceItem;
