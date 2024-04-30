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

const work_fields = [
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
];

const LogoImg = () => {
  return (
    <div className='grid grid-cols-5 gap-2 py-5 w-full h-[100vh] justify-center'>
      {work_fields.map((logo) => (
        <div key={logo.id} className="flex justify-center">
          <Image
            src={logo.logo}
            alt="brand logo"
            width={70}
            height={70}
            className='rounded-full'
          />
        </div>
      ))}
    </div>
  );
};

export default LogoImg;
