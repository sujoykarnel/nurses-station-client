import React from "react";
import useService from "../../../hooks/useService";
import ServiceItem from "../../Shared/ServiceItem/ServiceItem";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";

const Services = () => {
  const { services, refetch } = useService();
  console.log(useService);
  return (
    <>
      <Helmet>
        <title>Services | Nursing Station</title>
      </Helmet>
      <div className="pt-16">
        <SectionTitle heading={"Our Services"} />
        <div className="flex justify-center">
          <div className="grid md:grid-cols-3 gap-4 pb-4 ">
            {services?.map((service, index) => (
              <ServiceItem key={index} item={service} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
