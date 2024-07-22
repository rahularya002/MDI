import React from 'react';
import { Avatar } from '@nextui-org/react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  return (
    <section className="w-full py-12 bg-[url('/pattern.svg')] bg-repeat bg-[length:100px_100px]">
      <div className="container px-4 md:px-6 space-y-8 mx-auto">
        <div className="text-center space-y-3">
          <motion.h2
            className="bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-clip-text text-transparent text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            What Our Customers Say
          </motion.h2>
          <motion.p
            className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hear from our satisfied customers about their experience with our brand.
          </motion.p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            className="p-6 rounded-lg shadow-lg bg-gradient-to-r from-green-100 to-green-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <blockquote className="text-lg font-semibold leading-snug">
              &ldquo;The customer service I received was exceptional. The support team went above and beyond to address my concerns.&rdquo;
            </blockquote>
            <div className="mt-4 flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Avatar src="/placeholder.svg" alt="Maya Thakur" width={48} height={48} className="rounded-full" />
              </div>
              <div>
                <div className="font-semibold">Maya Thakur</div>
                <div className="text-sm text-muted-foreground">ICE(India) Director</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="p-6 rounded-lg shadow-lg bg-gradient-to-r from-blue-100 to-blue-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <blockquote className="text-lg font-semibold leading-snug">
              &ldquo;I've been using this product for months and it has completely transformed my workflow. Highly recommended!&rdquo;
            </blockquote>
            <div className="mt-4 flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Avatar src="/placeholder.svg" alt="Nitin Kaneria" width={48} height={48} className="rounded-full" />
              </div>
              <div>
                <div className="font-semibold">Nitin Kaneria</div>
                <div className="text-sm text-muted-foreground">BaghBan Flowers "owner"</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="p-6 rounded-lg shadow-lg bg-gradient-to-r from-purple-100 to-purple-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <blockquote className="text-lg font-semibold leading-snug">
              &ldquo;This is the best solution I've found for my business. The features are top-notch and the support team is incredible.&rdquo;
            </blockquote>
            <div className="mt-4 flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Avatar src="/placeholder.svg" alt="Amit Mali" width={48} height={48} className="rounded-full" />
              </div>
              <div>
                <div className="font-semibold">Amit Mali</div>
                <div className="text-sm text-muted-foreground">Tulalip Hotel, Director</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="p-6 rounded-lg shadow-lg bg-gradient-to-r from-yellow-100 to-yellow-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <blockquote className="text-lg font-semibold leading-snug">
              &ldquo;This is the best solution I've found for my business. The features are top-notch and the support team is incredible.&rdquo;
            </blockquote>
            <div className="mt-4 flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Avatar src="/placeholder.svg" alt="Arun Surendran" width={48} height={48} className="rounded-full" />
              </div>
              <div>
                <div className="font-semibold">Arun Surendran</div>
                <div className="text-sm text-muted-foreground">LabX "Business Head"</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="p-6 rounded-lg shadow-lg bg-gradient-to-r from-red-100 to-red-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <blockquote className="text-lg font-semibold leading-snug">
              &ldquo;This is the best solution I've found for my business. The features are top-notch and the support team is incredible.&rdquo;
            </blockquote>
            <div className="mt-4 flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Avatar src="/placeholder.svg" alt="Mr. Asloob Sabri" width={48} height={48} className="rounded-full" />
              </div>
              <div>
                <div className="font-semibold">Mr. Asloob Sabri</div>
                <div className="text-sm text-muted-foreground">Universal Engineering Corporation, "Managing Director"</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="p-6 rounded-lg shadow-lg bg-gradient-to-r from-pink-100 to-pink-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <blockquote className="text-lg font-semibold leading-snug">
              &ldquo;This is the best solution I've found for my business. The features are top-notch and the support team is incredible.&rdquo;
            </blockquote>
            <div className="mt-4 flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Avatar src="/placeholder.svg" alt="John Wick" width={48} height={48} className="rounded-full" />
              </div>
              <div>
                <div className="font-semibold">John Wick</div>
                <div className="text-sm text-muted-foreground">Founder, Continental Hotel</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
