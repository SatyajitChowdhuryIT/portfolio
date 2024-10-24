import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hello, I'm Satyajit, a passionate Web developer with a keen eye for MERN
          Stack. With a background in IT, I strive to create impactful and
          visually stunning software solutions that leave a lasting impression.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Level</th>
              <th className="border border-gray-300 px-4 py-2">Institution</th>
              <th className="border border-gray-300 px-4 py-2">Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Class 10</td>
              <td className="border border-gray-300 px-4 py-2">Searsole Raj High School</td>
              <td className="border border-gray-300 px-4 py-2">84.71%</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Class 12</td>
              <td className="border border-gray-300 px-4 py-2">Searsole Raj High School</td>
              <td className="border border-gray-300 px-4 py-2">81.4%</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">B.Tech</td>
              <td className="border border-gray-300 px-4 py-2">Asansol Engineering College</td>
              <td className="border border-gray-300 px-4 py-2">CGPA - 8.01 (up to 6th Semester)</td>
            </tr>
          </tbody>
        </table>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <ul className="list-disc list-inside mb-4">
          <li>Programming Languages: C, Java, Python</li>
          <li>Web Technologies: HTML, CSS, JavaScript, Express.js, Node.js, MongoDB (MERN Stack), MySQL</li>
          <li>Core Concepts: Data Structures and Algorithms (DSA), Operating Systems, Object-Oriented Programming (OOP), Computer Networks, Database Management Systems (DBMS)</li>
        </ul>
        <h1 className="text-green-600 font-semibold text-xl">
          Languages
        </h1>
        <p>Bengali, Hindi, English</p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Projects
        </h1>
        <h2 className="text-lg font-semibold">Book Store App</h2>
        <p>
          Full-stack web project, crafted with MongoDB, Express.js, React.js, and Node.js.
        </p>
        <h3 className="font-semibold">Used Technologies:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>MongoDB: It's a NoSQL DB</li>
          <li>Express.js: It's a Node.js Framework (Backend)</li>
          <li>React.js: It's a JavaScript Library (Frontend)</li>
          <li>UI Design: Tailwind CSS</li>
          <li>Node.js: Helps us to run JavaScript on the server-side</li>
        </ul>
        
        <h2 className="text-lg font-semibold">Gym Website</h2>
        <p>
          A responsive website for a gym, trainer profiles, and BMI CALCULATOR.
        </p>
        <h3 className="font-semibold">Used Technologies:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>MERN STACK</li>
          <li>Bootstrap for responsive design</li>
        </ul>

        <h2 className="text-lg font-semibold">Email Fetcher</h2>
        <p>
          A web application that fetches and displays emails from a specified server using IMAP.
        </p>
        <h3 className="font-semibold">Used Technologies:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Node.js for server-side processing</li>
          <li>Express.js for building the API</li>
          <li>React.js for the frontend</li>
          <li>MongoDB for Database</li>
        </ul>

        <h2 className="text-lg font-semibold">Random Paragraph Generator</h2>
        <p>
          A simple application that generates random paragraphs of text 
        </p>
        <h3 className="font-semibold">Used Technologies:</h3>
        <ul className="list-disc list-inside mb-4">
          
          <li>HTML,CSS and JAVASCRIPT for the user interface</li>
        </ul>
        
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Links
        </h1>
        <ul className="list-disc list-inside mb-4">
          <li>
            GitHub: <a href="https://github.com/SatyajitChowdhuryIT" className="text-blue-500 underline">https://github.com/SatyajitChowdhuryIT</a>
          </li>
          <li>
            LinkedIn: <a href="https://www.linkedin.com/in/satyajit-chowdhury-409552254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-blue-500 underline">https://www.linkedin.com/in/satyajit-chowdhury-409552254</a>
          </li>
        </ul>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Hobbies
        </h1>
        <p>
          Playing Cricket, Coding
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Certification
        </h1>
        <ul className="list-disc list-inside mb-4">
          <li>Introduction to Python Programming (Coursera)</li>
          <li>Ethical Leadership through Giving Voice to Values (Coursera)</li>
        </ul>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          CV
        </h1>
        <p>
          You can view and download my CV <a href="[link to your CV]" className="text-blue-500 underline">here</a>.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Contact
        </h1>
        <p>Phone: 9609148851</p>
        <p>Email: <a href="mailto:chowdhurysatyajit452@gmail.com" className="text-blue-500 underline">chowdhurysatyajit452@gmail.com</a></p>
        <p>Address: Searsole- OCP, Raniganj, Paschim Bardhaman, West Bengal, 713358</p>
        <br />
      </div>
    </div>
  );
}

export default About;
