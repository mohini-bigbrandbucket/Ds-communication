// src/pages/ServiceDetail.jsx
import { useParams } from "react-router-dom";
import ServiceHero from "../sections/Servicehero";
import ServiceContent from "../sections/Servicecontent";
import ServiceOptions from "../sections/Serviceoptions";
import DocumentsTimeline from "../sections/Documentstimeline";
import ServiceProcess from "../sections/Serviceprocess";
import RelatedServices from "../sections/RelatedServices";
import NeedHelp from "../sections/Needhelp";
import ServiceFaqs from "../sections/ServiceFaqs";
import ServiceContact from "../sections/Servicecontact";
import { getServiceDetail, defaultServiceDetail } from "../data/serviceDetails";
import { relatedServicesByCategory } from "../data/services";

function titleFromSlug(slug) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const ServiceDetail = () => {
  const { slug } = useParams();

  const data = getServiceDetail(slug) ?? {
    ...defaultServiceDetail,
    title: titleFromSlug(slug ?? "service"),
  };

  const relatedList = (relatedServicesByCategory[data.categoryTo] ?? []).filter(
    (item) => item.to !== `/services/${slug}`
  );

  return (
    <main className="service-page">
      <ServiceHero
        categoryLabel={data.category}
        categoryTo={data.categoryTo}
        title={data.title}
        summary={data.summary}
      />

      <ServiceContent />

      <ServiceOptions
        title={`Choose Your ${data.title}`}
        options={data.options}
      />

      <DocumentsTimeline
        requirements={data.requirements}
        timeline={data.timeline}
      />

      <ServiceProcess process={data.process} />

      <RelatedServices
        categoryLabel={data.category}
        categoryTo={data.categoryTo}
        services={relatedList}
      />

      <NeedHelp title={data.title} />

      <ServiceFaqs faqs={data.faqs} />

      <ServiceContact title={data.title} />
    </main>
  );
};

export default ServiceDetail;