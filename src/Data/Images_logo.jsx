import React from 'react';
import Image from 'next/image';

import accenture from '/public/img/accenture.png';
import fisver from '/public/img/fisver.png';
import google from '/public/img/google.jpg';
import hcl from '/public/img/hcl.jpg';
import ibm from '/public/img/ibm.jpg';
import infosys from '/public/img/infosys.png';
import microsoft from '/public/img/microsoft.jpg';
import john from '/public/img/john.png';
import mphasis from '/public/img/mphasis.jpg';
import oracle from '/public/img/oracle.png';
import wipro from '/public/img/wipro.jpg';
import zoho from '/public/img/zoho.png';
import bmc from '/public/img/bmc.png';
import cybage from '/public/img/cybage.jpg';
import tibc from '/public/img/tibc.png';

const workFields = [
  { id: 1, logo: accenture },
  { id: 2, logo: fisver },
  { id: 3, logo: google },
  { id: 4, logo: hcl },
  { id: 5, logo: ibm },
  { id: 6, logo: infosys },
  { id: 7, logo: microsoft },
  { id: 8, logo: john },
  { id: 9, logo: mphasis },
  { id: 10, logo: oracle },
  { id: 11, logo: wipro },
  { id: 12, logo: tibc },
  { id: 13, logo: bmc },
  { id: 14, logo: cybage },
  { id: 15, logo: zoho },
];

const LogoImg = () => {
  return (
    <div className='slider h-60 relative w-full grid place-items-center overflow-hidden pb-5'>
      <div className='slide-track w-3000 flex animate-scroll justify-between'>
        {workFields.map((logo) => (
          <div key={logo.id} className='w-150 h-60 grid place-items-center transition duration-500 cursor-pointer hover:scale-80'>
            <Image
              src={logo.logo}
              alt='brand logo'
              width={80}
              height={100}
              className='rounded-full'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoImg;
