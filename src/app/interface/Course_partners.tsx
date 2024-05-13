import React from "react";
import { SiWipro } from "react-icons/si";
import { SiIbm } from "react-icons/si";
import { SiHcl } from "react-icons/si";
import { SiJohndeere } from "react-icons/si";
import { SiInfosys } from "react-icons/si";
import { GrOracle } from "react-icons/gr";
import { SiRelianceindustrieslimited } from "react-icons/si";
import { SiBmcsoftware } from "react-icons/si";
import { SiTcs } from "react-icons/si";
import { SiCognizant } from "react-icons/si";
import { SiPersistent } from "react-icons/si";
import { SiBarclays } from "react-icons/si";
import { SiMahindra } from "react-icons/si";
import { SiAccenture } from "react-icons/si";
import { SiHsbc } from "react-icons/si";
import { BsMicrosoft } from "react-icons/bs";
import { SiAdp } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { SiVeritas } from "react-icons/si";
import { SiZensar } from "react-icons/si";
import { SiVodafone } from "react-icons/si";
import { SiSamsung } from "react-icons/si";
import { SiZoho } from "react-icons/si";
import { SiPhonepe } from "react-icons/si";
import { SiZomato } from "react-icons/si";
import { SiRazorpay } from "react-icons/si";
import { SiFlipkart } from "react-icons/si";
import { SiSiemens } from "react-icons/si";
import { DiYahoo } from "react-icons/di";
import { SiSony } from "react-icons/si";
const Course_partners = () => {
  const companyNames = [
    SiWipro,
    SiIbm,
    SiHcl,
    SiJohndeere,
    FaGoogle,
    SiInfosys,
    BsMicrosoft,
    GrOracle,
    SiZensar,
    SiVeritas,
    SiRelianceindustrieslimited,
    SiBmcsoftware,
    SiTcs,
    SiSamsung,
    SiAdp,
    SiCognizant,
    SiVodafone,
    SiFlipkart,
    DiYahoo,
    SiZoho,
    SiPhonepe,
    SiZomato,
    SiRazorpay,
    SiPersistent,
    SiBarclays,
    SiMahindra,
    SiSony,
    SiAccenture,
    SiSiemens,
    SiHsbc,
  ];
  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-black font-bold text-3xl py-6">
          Placement Companies
        </h1>
      </div>
      <div className="grid py-6 px-5 justify-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-10 gap-4">
        {companyNames.map((CompanyIcon, index) => (
          <span
            key={index}
            className="flex items-center justify-center p-2 hover:scale-130 transition-all ease-in hover:cursor-pointer"
          >
            <CompanyIcon color="#daaa47" size={70} />
          </span>
        ))}
      </div>
    </>
  );
};

export default Course_partners;
