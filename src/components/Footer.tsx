'use client';

import Image from 'next/image';
import React from 'react';

export default function Footer() {
    return (
        <footer className="w-full bg-white border-t py-12">
            <div className="mx-auto w-full max-w-[1370px] flex flex-col lg:flex-row justify-center items-start px-4 gap-20">

                {/* Left Column: Logo + QR */}
                <div className=" w-[520px] flex flex-col items-start gap-4">
                    {/* Logo */}
                    <Image
                        src="/logo.png"
                        alt="Staff Book Logo"
                        width={200}
                        height={80}
                        className="object-contain"
                    />

                    {/* QR Code + Store Buttons */}
                    <div className="flex flex-row gap-4 mt-4">
                        {/* First QR Code */}
                        <div className="flex flex-col items-center gap-2">
                            <Image
                                src="/homePage/scanner-google.png"
                                alt="QR Code Android"
                                width={86}
                                height={86}
                                className="object-contain"
                            />
                            
                        </div>

                        {/* Second QR Code */}
                        <div className="flex flex-col items-center gap-2">
                            <Image
                                src="/homePage/scanner-google.png"
                                alt="QR Code iOS"
                                width={86}
                                height={86}
                                className="object-contain"
                            />
                            
                        </div>
                    </div>
                </div>

                {/* Right Columns */}
                <div className="flex flex-row gap-12 lg:gap-16">
                    {/* Policies */}
                    <div>
                        <h4 className="text-lg text-black font-semibold mb-4">Policies</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                            <li>Location Policy</li>
                            <li>Branding Policy</li>
                            <li>Fraud Alert Policy</li>
                        </ul>
                    </div>

                    {/* Menu */}
                    <div>
                        <h4 className="text-lg text-black font-semibold mb-4">Menu</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li>About Us</li>
                            <li>Vision & Mission</li>
                            <li>Service</li>
                            <li>Careers</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg text-black font-semibold mb-4">Contact</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li>Email: info@staffbook.in</li>
                            <li>Phone: +91 9009222192</li>
                        </ul>
                        <div className="flex gap-3 mt-4">
                            <Image src="/homePage/facebook.png" alt="Facebook" width={24} height={24} />
                            <Image src="/homePage/instagram.png" alt="Instagram" width={24} height={24} />
                            <Image src="/homePage/linkedin.png" alt="LinkedIn" width={24} height={24} />
                            <Image src="/homePage/google.png" alt="Google" width={24} height={24} />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
