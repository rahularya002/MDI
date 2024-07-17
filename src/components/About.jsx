import React from 'react';

const TeamMembers = [
  {
    name: 'John Doe',
    role: 'Lead Web Developer',
    description: 'John is our seasoned lead developer with over 10 years of experience in building high-performing web applications.',
    avatar: '/public/dev1.jpg',
    initials: 'JD',
  },
  {
    name: 'Jane Smith',
    role: 'UI/UX Designer',
    description: 'Jane is our talented designer who creates visually stunning and user-friendly interfaces.',
    avatar: '/public/dev2.jpg',
    initials: 'JS',
  },
  {
    name: 'Michael Johnson',
    role: 'Project Manager',
    description: 'Michael is our experienced project manager who ensures seamless coordination and timely delivery of our projects.',
    avatar: '/public/dev1.jpg',
    initials: 'MJ',
  },
  {
    name: 'Emily Davis',
    role: 'Front-end Developer',
    description: 'Emily is our front-end specialist who crafts visually stunning and responsive user interfaces.',
    avatar: '/public/dev2.jpg',
    initials: 'ED',
  },
];

const About = () => {
  return (
    <div>
      <section id='About' className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-200 to-cyan-200">
        <div className="container mx-auto px-4 md:px-6 space-y-10 xl:space-y-16">
          <div className="grid gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
            <div>
              <h1 className="leading-tighter text-3xl md:text-5xl xl:text-6xl font-bold tracking-tighter">
                Crafting Exceptional Web Experiences
              </h1>
              <p className="mx-auto max-w-3xl text-gray-600 md:text-xl">
                At our web development company, we are passionate about creating innovative and user-centric digital
                solutions that help our clients achieve their business goals. Our mission is to empower businesses of
                all sizes with the tools and expertise they need to thrive in the digital landscape.
              </p>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <div className="inline-block rounded-lg bg-gradient-to-r from-violet-500 to-purple-500 px-3 py-2 text-sm text-white">Our Values</div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 text-primary" />
                  <span>Deliver exceptional quality</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 text-primary" />
                  <span>Embrace innovation and creativity</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 text-primary" />
                  <span>Foster a collaborative work environment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 text-primary" />
                  <span>Prioritize client satisfaction</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent tracking-tighter">Meet Our Team</h2>
              <p className="max-w-3xl text-gray-600 md:text-xl">
                Our talented team of web developers, designers, and project managers are dedicated to delivering
                exceptional results for our clients.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {TeamMembers.map((member, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300 ease-in-out">
                <div className="h-40 w-40 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center mx-auto">
                  <img src={member.avatar} alt={member.name} className="object-cover h-full w-full" />
                </div>
                <div className="mt-4 space-y-1 text-center">
                  <h4 className="text-lg font-semibold">{member.name}</h4>
                  <p className="text-sm text-gray-600">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default About;
