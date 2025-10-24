import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-center p-6 bg-gray-900 text-white mt-10">
      © {new Date().getFullYear()} Antonio. All rights reserved.
    </footer>
  );
};

export default Footer;
