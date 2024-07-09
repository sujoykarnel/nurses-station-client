import React from "react";
import useService from "../../../hooks/useService";
import ServiceItem from "../../Shared/ServiceItem/ServiceItem";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const Services = () => {
  const { services, refetch } = useService();
  console.log(useService);
  return (
    <div className="pt-16">
      <SectionTitle heading={"Our Services"} />
      <div className="grid md:grid-cols-3 gap-4 my-4 ">
        {services?.map((service, index) => (
          <ServiceItem key={index} item={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
