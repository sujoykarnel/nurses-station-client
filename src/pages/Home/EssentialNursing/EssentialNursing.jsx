import React from "react";
import useService from "../../../hooks/useService";
import ServiceItem from "../../Shared/ServiceItem/ServiceItem";

const EssentialNursing = () => {
  const { services } = useService();
  const essentialService = services.filter(
    (service) => service.type === "essential"
  );
  console.log(essentialService);

  return (
    <div className="flex justify-center">
      <div className="grid md:grid-cols-3 gap-4 my-4 ">
        {essentialService?.slice(0, 3).map((service, index) => (
          <ServiceItem key={index} item={service} />
        ))}
      </div>
    </div>
  );
};

export default EssentialNursing;
