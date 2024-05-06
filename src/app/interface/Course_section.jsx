import React from 'react';

import Image from "next/image";
import Link from 'next/link';
import devops from '/public/img/devops.png';
import aws from '/public/img/aws.jpg';
import java from '/public/img/java.jpg';
import html from '/public/img/html.png';
import python from '/public/img/python.jpg';
import js from '/public/img/js.png';

import sql from '/public/img/sql.jpg';
import plsql from '/public/img/plsql.jpg';
import excel from '/public/img/excel.jpg';
import analyst from '/public/img/analyst.jpg';

import figma from '/public/img/figma.jpg';
import salesforce from '/public/img/salesforce.jpg';
import tailwind from '/public/img/tailwind.jpg';


import laravel from '/public/img/laravel.jpg';
import codeigniter from '/public/img/codeigniter.jpg';
import php from '/public/img/php.jpg';
const work_fields = [
  { id: 1, logo: html, title: "HTML Course", content: "In this course, you'll learn the fundamentals of html,and more. Whether you're new to programming or want to expand your skills, this course is perfect for you" },
  { id: 2, logo: python, title: "Python Course", content: "In this course, you'll learn the fundamentals of python,and more. Whether you're new to programming or want to expand your skills, this course is perfect for you" },
  { id: 3, logo: js, title: "Javascript Course", content: "In this course, you'll learn the fundamentals of javascript,and more. Whether you're new to programming or want to expand your skills, this course is perfect for you" },
  { id: 4, logo: devops, title: "Devops Course", content: "In this course, you'll learn the fundamentals of Devops,and more. Whether you're new to programming or want to expand your skills, this course is perfect for you" },
  { id: 5, logo: aws, title: "AWS Course", content: "In this course, you'll learn the fundamentals of AWS,and more. Whether you're new to programming or want to expand your skills, this course is perfect for you" },
  { id: 6, logo: java, title: "Java Course", content: "In this course, you'll learn the fundamentals of java,and more. Whether you're new to programming or want to expand your skills, this course is perfect for you" },
  { id: 7, logo: sql, title: "Sql Course", content: "In this course, you'll learn the fundamentals of sql,and more. Whether you're new to programming or want to expand your skills, this course is perfect for you" },
  { id: 8, logo: plsql, title: "Plsql Course", content: "In this course, you'll learn the fundamentals of plsql,and more. Whether you're new to programming or want to expand your skills, this course is perfect for you" },
  { id: 9, logo: excel, title: "Excel Course", content: "In this course, you'll learn the fundamentals of excel,and more. Whether you're new to programming or want to expand your skills, this course is perfect for you" },
  { id: 10, logo: analyst, title: "Analyst Course", content: "In this course, you'll learn the fundamentals of analyst ,and more. Whether you're new to programming or want to expand your skills, this course is perfect for you" },
  { id: 11, logo: figma, title: "Figma Course", content: "In this course, you'll learn the fundamentals of figma,and more. Whether you're new to programming or want to expand your skills, this course is perfect for you" },
  { id: 12, logo: salesforce, title: "Salesforce Course", content: "In this course, you'll learn the fundamentals of salesforce,and more. Whether you're new to programming or want to expand your skills, this course is perfect for you" },
  { id: 13, logo: tailwind, title: "Tailwind Course", content: "In this course, you'll learn the fundamentals of tailwind ,and more. Whether you're new to programming or want to expand your skills, this course is perfect for you" },
  { id: 14, logo: laravel, title: "Laravel Course", content: "In this course, you'll learn the fundamentals of laravel,and more. Whether you're new to programming or want to expand your skills, this course is perfect for you" },
  { id: 15, logo: codeigniter, title: "Codeigniter Course", content: "In this course, you'll learn the fundamentals of codeigniter,and more. Whether you're new to programming or want to expand your skills, this course is perfect for you" },
  { id: 16, logo: php, title: "PHP Course", content: "In this course, you'll learn the fundamentals of php ,and more. Whether you're new to programming or want to expand your skills, this course is perfect for you" },

];


const CourseSection = () => {
  return (
    
    <div className="max-w-screen-full-w mx-auto bg-gray-200 px-4 py-2 ">
      <h2 className="text-center text-2xl font-bold mt-8  font-serif text-black">Featured Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-10 m-5 ">
  {work_fields.map((head) => (
    <div key={head.id}  style={{ borderRadius: '5%' }}  className=" sm:w-full border sm:m-1 border-blue-300  shadow-md p-2 m-6 bg-white hover:border-red-500 hover:bg-violet-100 transform transition-transform hover:scale-110">
      <Link href="#" className="block">
        <Image
          src={head.logo}
          alt="brand logo"
          className="rounded-t-lg w-full h-48 object-cover "
        />
      </Link>
      <div className="p-4 flex flex-col">
        <h5 className="mb-2 text-lg font-bold text-gray-900 dark:text-black">{head.title}</h5>
        <p className="mb-3 text-sm text-black">{head.content}</p>
        <div className="flex justify-between flex-wrap">
          <Link href="#" className="inline-flex items-center px-4 py-2 mb-2 md:mb-0 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            More
          </Link>
          <Link href="#" className="inline-flex items-center px-4 py-2 mb-2 md:mb-0 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            Enroll
          </Link>
        </div>
      </div>
    </div>
    
  ))}
</div>




    </div>
  );
};

export default CourseSection;
