import React from 'react';
import { Avatar } from '@nextui-org/react';

export default function Testimonials() {
  return (
    <section className="w-full py-12 bg-[url('/pattern.svg')] bg-repeat bg-[length:100px_100px]">
      <div className="container px-4 md:px-6 space-y-8 mx-auto">
        <div className="text-center space-y-3">
          <h2 className="bg-gradient-to-r from-fuchsia-500 to-pink-500 bg-clip-text text-transparent text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Customers Say</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
            Hear from our satisfied customers about their experience with our brand.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 rounded-lg shadow-lg bg-gradient-to-r from-green-100 to-green-200">
            <blockquote className="text-lg font-semibold leading-snug">
              &ldquo;The customer service I received was exceptional. The support team went above and beyond to address my concerns.&rdquo;
            </blockquote>
            <div className="mt-4 flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Avatar src="/placeholder.svg" alt="Jules Winnfield" width={48} height={48} className="rounded-full" />
              </div>
              <div>
                <div className="font-semibold">Jules Winnfield</div>
                <div className="text-sm text-muted-foreground">CEO, Acme Inc</div>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-lg shadow-lg bg-gradient-to-r from-blue-100 to-blue-200">
            <blockquote className="text-lg font-semibold leading-snug">
              &ldquo;I've been using this product for months and it has completely transformed my workflow. Highly recommended!&rdquo;
            </blockquote>
            <div className="mt-4 flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Avatar src="/placeholder.svg" alt="Sarah Connor" width={48} height={48} className="rounded-full" />
              </div>
              <div>
                <div className="font-semibold">Sarah Connor</div>
                <div className="text-sm text-muted-foreground">Product Manager, Cyberdyne Systems</div>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-lg shadow-lg bg-gradient-to-r from-purple-100 to-purple-200">
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
          </div>
          <div className="p-6 rounded-lg shadow-lg bg-gradient-to-r from-yellow-100 to-yellow-200">
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
          </div>
          <div className="p-6 rounded-lg shadow-lg bg-gradient-to-r from-red-100 to-red-200">
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
          </div>
          <div className="p-6 rounded-lg shadow-lg bg-gradient-to-r from-pink-100 to-pink-200">
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
          </div>
        </div>
      </div>
    </section>
  );
}
