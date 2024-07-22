import React, { useEffect, memo } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const bentoItems = [
  { id: 1, title: "Web Development", description: "Building responsive and dynamic websites.", image: "/web2.jpg" },
  { id: 2, title: "SEO Optimization", description: "Improving search engine rankings.", image: "/seo.jpg" },
  { id: 3, title: "Mobile App Development", description: "Developing user-friendly mobile applications.", image: "/mbd.jpg" },
  { id: 4, title: "Web Hosting", description: "Reliable and secure web hosting services.", image: "/webh.jpg" },
];

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const BentoItem = memo(({ item, index }) => {
  return (
    <motion.div
      key={item.id}
      variants={itemVariants}
      className={`relative p-4 rounded-lg shadow-lg bg-white overflow-hidden ${
        index === 0 ? "sm:row-span-2 sm:col-span-2" :
        index === 1 ? "sm:row-span-3 sm:col-span-1" :
        index === 2 ? "sm:row-span-1 sm:col-span-1" :
        "sm:row-span-2 sm:col-span-1"
      }`}
    >
      <div className="relative overflow-hidden rounded-md h-full">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100 p-4">
          <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
          <p className="text-white text-center">{item.description}</p>
        </div>
      </div>
    </motion.div>
  );
});

export default function AnimatedBentoGrid() {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="w-full py-12 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6 max-w-[1200px]">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter text-gray-800 sm:text-4xl md:text-5xl">
            Our Web Development Services
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
            Discover our range of web development services designed to take your online presence to the next level.
          </p>
        </div>
        <motion.div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-rows-[300px,200px,200px,300px] gap-2"
          initial="hidden"
          animate={controls}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
                staggerDirection: 1,
              },
            },
          }}
        >
          {bentoItems.map((item, index) => (
            <BentoItem key={item.id} item={item} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
