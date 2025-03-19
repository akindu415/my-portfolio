"use client";

import Navbar from "../page/navbar";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";

export default function Contact() {
    const socialLinks = [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/akindu-bandara-680001308/",
            icon: <FaLinkedin size={30} className="text-blue-500" style={{ color: undefined }} />,
        },
        {
            name: "GitHub",
            url: "https://github.com/akindu415",
            icon: <FaGithub size={30} className="text-white" style={{ color: undefined }} />,
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/akindu_bandara",
            icon: <FaInstagram size={30} className="text-pink-500" style={{ color: undefined }} />,
        },
        {
            name: "Facebook",
            url: "#", // Replace with actual Facebook link if available
            icon: <FaFacebook size={30} className="text-blue-600" style={{ color: undefined }} />,
        },
        {
            name: "Mail",
            url: "mailto:akindu415@gmail.com",
            icon: <FaEnvelope size={30} className="text-yellow-400" style={{ color: undefined }} />,
        },
    ];

    return (
        <div>
            <div className="absolute w-full z-10">
                <Navbar />
            </div>

            <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex flex-col items-center justify-center p-8">
                <div className="flex flex-col items-center w-full max-w-6xl">
                    {/* Social Links */}
                    <div className="flex flex-col items-center gap-6 mt-10 w-full">
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 bg-gray-800 px-10 py-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 w-full max-w-xs"
                            >
                                {link.icon}
                                <span className="text-lg">{link.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
