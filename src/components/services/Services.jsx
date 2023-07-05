import "./Services.css";
import img1 from "../../imgs/card-1.jpg";
import img2 from "../../imgs/card-2.png";
import img3 from "../../imgs/card-3.jpg";
import img4 from "../../imgs/card-4.jpeg";
import img5 from "../../imgs/card-5.jpg";
import img6 from "../../imgs/card-6.jpg";

import { Card } from "antd";
const { Meta } = Card;

const carditems = [
  {
    title: "Implementation",
    description:
      "Assisting businesses in deploying and configuring ERP systems to align with their specific requirements and workflows.",
    url: "#a",
    img: img1,
  },
  {
    title: "Customization",
    description:
      "Tailoring the ERP software to meet the unique needs of a business by modifying features, workflows, and interfaces",
    url: "#a",
    img: img2,
  },
  {
    title: "Training",
    description:
      "Providing comprehensive training programs to educate employees and stakeholders on how to effectively use the ERP system.",
    url: "#a",
    img: img3,
  },
  {
    title: "Support and Maintenance",
    description:
      " Offering ongoing technical support, bug fixes, updates, and system maintenance to ensure the smooth functioning of the ERP software",
    url: "#a",
    img: img4,
  },
  {
    title: "Consulting",
    description:
      "Providing expert guidance and advice on ERP selection, strategy, and best practices.",
    url: "#a",
    img: img5,
  },
  {
    title: "Integration",
    description:
      " Integrating the ERP system with other business applications, such as CRM, e-commerce platforms, or third-party software.",
    url: "#a",
    img: img6,
  },
];

export default function Services() {
  return (
    <div className="section services" id="services">
      <p className="section-header services-header">
        ERP <span>Services</span>
      </p>
      <div className="cards">
        {carditems.map((item) => (
          <Card
            className="card"
            cover={<img alt="ERP" src={item.img} />}
            actions={[<a href={item.url}>more info..</a>]}
          >
            <Meta title={item.title} description={item.description} />
          </Card>
        ))}
      </div>
    </div>
  );
}
