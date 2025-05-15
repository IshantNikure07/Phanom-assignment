import pen from "../assets/pen.png";
import lead from "../assets/lead.png";
import vector from "../assets/vector.png";
import digital from "../assets/deployment.png";
import praposal from "../assets/praposal.png";


const assets = () => {
  const howItWorks = [
    { img: lead, title: "Project Understanding" },
    { img: praposal, title: "Proposal and Wireframe" },
    { img: pen, title: "Designing & Development" },
    { img: digital, title: "Development + Server Setup" },
    { img: vector, title: "Lead Generation Campaigns" },
  ];

  return { howItWorks };
};

export default assets;
