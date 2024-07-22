import React from "react";
import { Input, Textarea, Button } from "@nextui-org/react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <Element name="Contact">
      <section id="contact" className="bg-background py-12 md:py-24">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <motion.div
            className="bg-gradient-to-r from-blue-200 to-cyan-200 flex flex-col md:flex-row bg-white shadow-md rounded-lg border border-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center md:w-1/2">
              <img
                src="/CU.jpg" // Replace with your image URL
                alt="Contact us"
                className="w-full h-full object-cover rounded-l-lg"
              />
            </div>
            <div className="space-y-6 p-8 md:w-1/2">
              <div className="space-y-2">
                <motion.h2
                  className="text-4xl font-extrabold"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  Get in touch
                </motion.h2>
                <motion.p
                  className="text-lg text-gray-600"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Have a question or want to work together? Fill out the form below and we'll get back to you as soon as possible.
                </motion.p>
              </div>
              <motion.form
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="block text-lg font-medium text-gray-800">First Name</label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="John"
                      className="mt-1 block w-full shadow-sm sm:text-lg focus:ring-primary focus:border-primary border-gray-300"
                      required
                      css={{ borderRadius: 0, padding: '10px', borderWidth: '2px', fontWeight: 'bold' }}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="block text-lg font-medium text-gray-800">Last Name</label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Doe"
                      className="mt-1 block w-full shadow-sm sm:text-lg focus:ring-primary focus:border-primary border-gray-300"
                      required
                      css={{ borderRadius: 0, padding: '10px', borderWidth: '2px', fontWeight: 'bold' }}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-lg font-medium text-gray-800">Email</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      className="mt-1 block w-full shadow-sm sm:text-lg focus:ring-primary focus:border-primary border-gray-300"
                      required
                      css={{ borderRadius: 0, padding: '10px', borderWidth: '2px', fontWeight: 'bold' }}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-lg font-medium text-gray-800">Phone Number</label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="123-456-7890"
                      className="mt-1 block w-full shadow-sm sm:text-lg focus:ring-primary focus:border-primary border-gray-300"
                      required
                      css={{ borderRadius: 0, padding: '10px', borderWidth: '2px', fontWeight: 'bold' }}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-lg font-medium text-gray-800">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="How can we help you?"
                    className="mt-1 block w-full shadow-sm sm:text-lg focus:ring-primary focus:border-primary border-gray-300"
                    required
                    css={{ borderRadius: 0, padding: '10px', borderWidth: '2px', fontWeight: 'bold' }}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full py-3 px-4 border border-transparent shadow-sm text-lg font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  css={{ padding: '15px', fontWeight: 'bold' }}
                >
                  Submit
                </Button>
              </motion.form>
            </div>
          </motion.div>
        </div>
      </section>
    </Element>
  );
}
