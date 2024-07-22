import React from "react";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Software Development",
    description:
      "Regardless of business size and types, we would be happy to help you at every stage of software development from conceptualization, prototyping and business analysis to deployment and development of the complete solution.",
    image: "/sde.jpg",
    bgColor: "bg-blue-100",
    gradient: "from-blue-800 to-indigo-900",
  },
  {
    id: 2,
    title: "Website Design & Development",
    description:
      "We offer custom, quality and affordable web application development services all over the world with the help of emerging and latest web technologies as we have skills and cutting edge competition needed to deliver simply the best.",
    image: "/web-d.jpg",
    bgColor: "bg-yellow-100",
    gradient: "from-blue-800 to-indigo-900",
  },
  {
    id: 3,
    title: "Mobile App Development",
    description:
      "We develop enterprise-class and user-friendly mobile applications loaded with the most recent technologies and run seamlessly on almost all platforms to assure excellent experience and top-notch services to end users.",
    image: "/md.jpg",
    bgColor: "bg-pink-100",
    gradient: "from-blue-800 to-indigo-900",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function TalentZone() {
  return (
    <div id="Products" className="bg-gradient-to-r from-blue-200 to-cyan-200 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
          >
            Our Talent Zone
          </motion.h2>
          <motion.p
            className="max-w-lg text-gray-800 md:text-xl mx-auto mt-4"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Well known for Web and Software Development with knowledge in custom Product and Application Development
          </motion.p>
        </div>
        <div className="space-y-12">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="flex flex-col md:flex-row bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8 }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full md:w-1/2 object-cover h-48 md:h-auto"
                loading="lazy"
                style={{ willChange: 'transform, opacity' }} // Added to optimize the image
              />
              <div className={`p-6 md:w-1/2 ${service.bgColor} flex flex-col justify-between`}>
                <div>
                  <h3 className={`text-2xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                    {service.title}
                  </h3>
                  <p className="mt-2 text-gray-700">
                    {service.description}
                  </p>
                </div>
                <Button color="primary" auto className="mt-4">
                  Read more
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
