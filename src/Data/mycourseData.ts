import { GrUserExpert } from "react-icons/gr";
import { GoProject } from "react-icons/go";
import { IoPeopleOutline } from "react-icons/io5";
import { LuNewspaper } from "react-icons/lu";
import { IoTimeOutline } from "react-icons/io5";
import { SiGoogleclassroom } from "react-icons/si";

interface MyCourseData {
  courseName: string;
  imagesrc: string;
  trainer: string;
  duration: string;
  top: string;
  courseMod: string;
  description: string;
}

interface courseFeatures {
  id: number;
  title: string;
  icon: any;
}

export const mycourseData: MyCourseData[] = [
  {
    courseName: "AWS",
    imagesrc:
      "https://media2.spaceref.com/wp-content/uploads/2023/09/13112723/AWS.jpg",
    trainer: "Trainer-Led",
    duration: "6-Months",
    top: "Top Selling",
    courseMod: "Online",
    description:
      "This comprehensive 6-month course delves deep into Amazon Web Services (AWS), covering a wide range of services such as EC2, S3, RDS, and more.",
  },

  {
    courseName: "Software Testing",
    imagesrc:
      "https://t4.ftcdn.net/jpg/05/02/87/73/360_F_502877373_AlMUM04NNNlztpjGLSWGfaPlcWEP7qT4.jpg",
    trainer: "Trainer-Led",
    duration: "6-Months",
    top: "In demand",
    courseMod: "Online",
    description:
      "Embark on a 6-month journey into the world of software testing. This course covers manual and automated testing techniques, test case development, bug tracking, and more.",
  },
  {
    courseName: "Oracle-SQL/PL-SQL",
    imagesrc:
      "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/315035597/original/dcf49ad30116a98f47d8080b7c764f5fbe0c6a90/do-simple-to-complex-sql-queries-and-plsql-procedures.jpg",
    trainer: "Trainer-Led",
    duration: "3-Months",
    top: "Top Trending",
    courseMod: "Offline",
    description:
      "Master the Oracle SQL and PL/SQL programming languages in this 3-month offline course. From basic querying to advanced stored procedures, triggers, and functions, you'll gain a solid foundation in Oracle database management.",
  },
  {
    courseName: "Salesforce",
    imagesrc:
      "https://cloudfront-us-east-2.images.arcpublishing.com/reuters/4VHASVSF2FNDPMEZFMKW3IOVKE.jpg",
    trainer: "Trainer-Led",
    duration: "6-Months",
    top: "Top Trending",
    courseMod: "Online/Offline",
    description:
      "Become a Salesforce expert with this 6-month course covering the Salesforce CRM platform and its various modules. Learn to customize and implement solutions for sales, service, marketing, and more.",
  },

  {
    courseName: "RPA",
    imagesrc:
      "https://fusion-institute.com/public/uploads/course/1654431691-rpa.jpg",
    trainer: "Trainer-Led",
    duration: "4-Months",
    top: "",
    courseMod: "Offline",
    description:
      "Automate repetitive tasks and streamline business processes with Robotic Process Automation (RPA). In this 4-month offline course, you'll learn RPA tools like UiPath, Automation Anywhere, and Blue Prism.",
  },
];

export const courseFeatures: courseFeatures[] = [
  {
    id: 1,
    title: "Industry Experts",
    icon: GrUserExpert,
  },
  {
    id: 2,
    title: "Real World Projects",
    icon: GoProject,
  },
  {
    id: 3,
    title: "Interview Prep Session",
    icon: IoPeopleOutline,
  },
  {
    id: 4,
    title: "Resume Building",
    icon: LuNewspaper,
  },
  {
    id: 5,
    title: "Flexible Learning",
    icon: IoTimeOutline,
  },
  {
    id: 8,
    title: "Interactive Learning Environment",
    icon: SiGoogleclassroom,
  },
];
