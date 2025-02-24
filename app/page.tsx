import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navigation Pane */}
      <nav className="bg-blue-600 p-4 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-semibold">Web Dev Careers</div>
          <div className="space-x-4">
            <Link href="/" className="text-white hover:text-gray-200">Home</Link>
            <Link href="/about" className="text-white hover:text-gray-200">About</Link>
            <Link href="/contact" className="text-white hover:text-gray-200">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-blue-600 text-white text-center py-16">
        <h1 className="text-4xl font-bold">Explore Careers in Web Development & Design</h1>
        <p className="mt-4 text-lg">Find the right path for your skills and ambitions.</p>
      </header>

      {/* Job Roles Section */}
      <section className="max-w-6xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobRoles.map((role) => (
          <div key={role.title} className="bg-white shadow-md p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-blue-600">{role.title}</h2>
            <p className="mt-2 text-gray-700">{role.description}</p>
            <Link href={role.link} className="mt-4 inline-block text-blue-500 font-semibold">Learn More →</Link>
          </div>
        ))}
      </section>
    </div>
  );
}

const jobRoles = [
  {
    title: "Front-End Developer",
    description: "Build visually appealing and interactive user interfaces.",
    link: "/frontend-developer",
  },
  {
    title: "Back-End Developer",
    description: "Develop server-side logic and database management.",
    link: "/backend-developer",
  },
  {
    title: "Full-Stack Developer",
    description: "Handle both front-end and back-end development.",
    link: "/fullstack-developer",
  },
  {
    title: "UI/UX Designer",
    description: "Design intuitive and user-friendly digital experiences.",
    link: "/ui-ux-designer",
  },
  {
    title: "Web Designer",
    description: "Create visually compelling web layouts and graphics.",
    link: "/web-designer",
  },
  {
    title: "Web Administrator",
    description: "Manage website performance, security, and maintenance.",
    link: "/web-administrator",
  },
];
