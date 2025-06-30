import React from 'react';
import './TSARPage.css';
import { MdAnalytics, MdOutlineHandshake, MdIntegrationInstructions, MdSupportAgent, MdFeedback } from "react-icons/md";
import { Si42, SiAna, SiGoogleforms, SiV8, SiZabka, SiZoho } from "react-icons/si";
import { FaUserEdit, FaSignature, FaRobot, FaCalendarCheck } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";

const services = [
  {
    icon: <MdAnalytics color="red" size={48} />,
    title: "TSAR Analytics",
    desc: "Powerful reporting and dashboard tools to visualize CRM data efficiently.",
    button: "Setup now"
  },
  {
    icon: <MdOutlineHandshake color="#009688" size={48} />,
    title: "TSAR Projects",
    desc: "Plan and manage customer projects within TSAR CRM using this module.",
    button: "Setup now"
  },
  {
    icon: <MdSupportAgent color="green" size={48} />,
    title: "TSAR Desk",
    desc: "Enable support teams to handle customer tickets and monitor performance.",
    button: "Setup now"
  },
  {
    icon: <SiGoogleforms color="#3f51b5" size={48} />,
    title: "TSAR Forms",
    desc: "Collect data from customers through integrated TSAR forms.",
    button: "Setup now"
  },
  {
    icon: <MdFeedback color="#f44336" size={48} />,
    title: "TSAR Survey",
    desc: "Send surveys and gather responses from CRM contacts.",
    button: "Setup now"
  },
  {
    icon: <MdIntegrationInstructions color="#e91e63" size={48} />,
    title: "TSAR Campaigns",
    desc: "Manage and analyze email campaigns directly in TSAR CRM.",
    button: "Manage"
  },
  {
    icon: <FaUserEdit color="#ff9800" size={48} />,
    title: "TSAR Contracts",
    desc: "Request, manage, and track contracts for your sales deals.",
    button: "Setup now"
  },
  {
    icon: <FaSignature color="#673ab7" size={48} />,
    title: "TSAR Sign",
    desc: "Send business documents for signatures and approvals.",
    button: "Setup now"
  },
  {
    icon: <FaRobot color="#00bcd4" size={48} />,
    title: "TSAR Assist",
    desc: "Launch screen sharing or remote support sessions for customers.",
    button: "Setup now"
  },
  {
    icon: <TbTargetArrow color="#ff5722" size={48} />,
    title: "TSAR Lens",
    desc: "AR-based visual assistance tool for technical support.",
    button: "Setup now"
  },
  {
    icon: <FaCalendarCheck color="#4caf50" size={48} />,
    title: "TSAR Bookings",
    desc: "Automated appointment scheduling with customers.",
    button: "Setup now"
  },
  {
    icon: <Si42 color="#9c27b0" size={48} />,
    title: "Advanced Analytics",
    desc: "Analyze your CRM data with insightful dashboards and custom reports.",
    button: "Setup now"
  },
];

const TSARPage = () => {
  return (
    <div className="tsar-container">
      {services.map((srv, idx) => (
        <div className="tsar-card" key={idx}>
          <div className="tsar-icon">{srv.icon}</div>
          <h3>{srv.title}</h3>
          <p>{srv.desc}</p>
          <button>{srv.button}</button>
        </div>
      ))}
    </div>
  );
};

export default TSARPage;
