import React from 'react';

import Image from 'next/image';
import accenture from '/public/img/accenture.png'
import fisver from '/public/img/fisver.png'
import google from '/public/img/google.jpg'
import hcl from '/public/img/hcl.jpg'
import ibm from '/public/img/ibm.jpg'
import infosys from '/public/img/infosys.png'
import microsoft from '/public/img/microsoft.jpg'
import john from '/public/img/john.png'
import mphasis from '/public/img/mphasis.jpg'
import oracle from '/public/img/oracle.png'
import wipro from '/public/img/wipro.jpg'


const work_field = [
  {
    id: 1,
    logo: accenture
  },
  {
    id: 2,
    logo: fisver
 },
  {
    id: 3,
    logo: google
  },
  {
    id: 4,
    logo: hcl
  },
  {
    id: 5,
    logo: ibm
 },
  {
    id: 6,
    logo: infosys
  },
  {
    id: 7,
    logo: microsoft
  },
  {
    id: 8,
    logo: john
 },
  {
    id: 9,
    logo: mphasis
  },
  {
    id: 10,
    logo: oracle
  },
  {
    id: 11,
    logo: wipro
 },
];
const logoimg = () => {
  return (
    <>
    <div className='grid grid-cols-6 gap-2'>
  {  work_field.map((logo)=>{

   return <Image key={logo.id} 
    src={logo.logo}
    alt="brand logo"
    width={80}
    height={70}
    />
  })
}
</div>
</>
  );
};

export default logoimg;
