import React from "react";
import { FacebookIcon, InstagramIcon, LinkedinIcon, LocateIcon, MailIcon, PhoneIcon, TwitterIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-12 text-gray-300">
      <div className="container mx-auto grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 px-4">
        <div className="space-y-4">
          <h4 className="text-lg font-bold">Navigation</h4>
          <nav className="grid gap-2">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Services</a>
            <a href="#" className="hover:underline">Contact</a>
          </nav>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-bold">Contact</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <PhoneIcon className="h-5 w-5" />
              <span> 090150 98315</span>
            </div>
            <div className="flex items-center gap-2">
              <MailIcon className="h-5 w-5" />
              <span>admin@mdinfosystem.com</span>
            </div>
            <div className="flex items-center gap-2">
              <LocateIcon className="h-5 w-5" />
              <span>418/B Suncity Trade Tower Sector-21, Gurugram-122016 </span>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-bold">Social</h4>
          <div className="flex gap-4">
            <a href="#" className="text-gray-300 hover:text-blue-500">
              <TwitterIcon className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-300 hover:text-blue-700">
              <FacebookIcon className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-300 hover:text-pink-500">
              <InstagramIcon className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-300 hover:text-blue-800">
              <LinkedinIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-bold">Subscribe</h4>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg bg-gray-700 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-blue-600 text-gray-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm">Get the latest news and updates delivered to your inbox.</p>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm">
        <p>&copy; 2024 MDI. All rights reserved.</p>
      </div>
    </footer>
  );
}
