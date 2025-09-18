

import React from "react";

const InfoCard = ({ title, message }) => (
  <div className="bg-indigo-900/80 border border-indigo-400/30 rounded-xl p-6 text-center mt-6 shadow-lg">
    <h2 className="text-2xl font-bold mb-2">{title}</h2>
    <p className="text-indigo-100/90" dangerouslySetInnerHTML={{ __html: message }} />
  </div>
);

// Default export: show under development message using InfoCard
const UnderDevelopment = () => (
  <InfoCard
    title="🚧 Page Under Development"
    message="This page is currently under development.<br/>Please check back soon!"
  />
);

export default UnderDevelopment;
