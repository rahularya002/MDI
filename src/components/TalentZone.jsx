import React from "react";
import { Button } from "@nextui-org/react";

export default function TalentZone() {
    return (
        <div id="Products" className="bg-gradient-to-r from-blue-200 to-cyan-200 text-white py-8">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
                        Our Talent Zone
                    </h2>
                    <p className="max-w-lg text-gray-800 md:text-xl mx-auto mt-4">
                        Well known for Web and Software Development with knowledge in custom Product and Application Development
                    </p>
                </div>
                <div className="space-y-12">
                    <div className="flex flex-col md:flex-row bg-card text-card-foreground rounded-lg shadow-md overflow-hidden max-w-4xl mx-auto">
                        <img
                            src="/sde.jpg"
                            alt="Software Development"
                            className="w-full md:w-1/2 object-cover h-48 md:h-auto"
                        />
                        <div className="p-6 md:w-1/2 bg-blue-100 flex flex-col justify-between">
                            <div>
                                <h3 className="bg-gradient-to-r from-blue-800 to-indigo-900 bg-clip-text text-transparent text-2xl font-bold">
                                    Software Development
                                </h3>
                                <p className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mt-2 text-muted-foreground">
                                    Regardless of business size and types, we would be happy to help you at every state of software development from conceptualization, prototyping and business analysis to deployment and development of the complete solution.
                                </p>
                            </div>
                            <Button color="primary" auto className="mt-4">
                                Read more
                            </Button>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row bg-card text-card-foreground rounded-lg shadow-md overflow-hidden max-w-4xl mx-auto">
                        <img
                            src="/web-d.jpg"
                            alt="Website Design & Development"
                            className="w-full md:w-1/2 object-cover h-48 md:h-auto"
                        />
                        <div className="p-6 md:w-1/2 bg-yellow-100 flex flex-col justify-between">
                            <div>
                                <h3 className="bg-gradient-to-r from-blue-800 to-indigo-900 bg-clip-text text-transparent text-2xl font-bold">
                                    Website Design & Development
                                </h3>
                                <p className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mt-2 text-muted-foreground">
                                    We offer custom, quality and affordable web application development services all over the world with the help of emerging and latest web technologies as we have skills and cutting edge competition needed to deliver simply the best.
                                </p>
                            </div>
                            <Button color="primary" auto className="mt-4">
                                Read more
                            </Button>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row bg-card text-card-foreground rounded-lg shadow-md overflow-hidden max-w-4xl mx-auto">
                        <img
                            src="/md.jpg"
                            alt="Mobile App Development"
                            className="w-full md:w-1/2 object-cover h-48 md:h-auto"
                        />
                        <div className="p-6 md:w-1/2 bg-pink-100 flex flex-col justify-between">
                            <div>
                                <h3 className="bg-gradient-to-r from-blue-800 to-indigo-900 bg-clip-text text-transparent text-2xl font-bold">
                                    Mobile App Development
                                </h3>
                                <p className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mt-2 text-muted-foreground">
                                    We develop enterprise-class and user-friendly mobile applications loaded with the most recent technologies and run seamlessly on almost all platforms to assure excellent experience and top-notch services to end users.
                                </p>
                            </div>
                            <Button color="primary" auto className="mt-4">
                                Read more 
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
