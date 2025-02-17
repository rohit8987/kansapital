import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const socialMedias = [
    [InstagramIcon, 'https://instagram.com'],
    [TwitterIcon, 'https://twitter.com'],
    [FacebookIcon, 'https://facebook.com'],
    [LinkedinIcon, 'https://linkedin.com'],
];

const Footer = () => {

    const footerLinks = [
        {
            label: 'Company',
            links: [
                ['About us', '/about'],
                ['Contact us', '/term-of-use'],
                ['Terms & Conditions', '/privacy-policy'],
                ['Privacy Policy', '/how-works'],
                ['Shipping Policy', '/contact-us'],
            ],
        },
        {
            label: 'Support',
            links: [
                ['Support ', '/support'],
                ['24x7 Service', '/24-service'],
                ['Quick Chat', '/quick-chat'],
            ],
        },
        {
            label: 'Customer service',
            links: [
                ['Return & Exchange', '/whatsapp'],
                ['Bulk Order', '/24-service'],
            ],
        },
    ];

    const list_data = ["Sarenga, Bankura West Bengal, 722150", "Phone: +91 7872282450", "E-mail: info@kansapital.com", "GSTIN: 19HTDPM2142E1ZS"]

    return (
        <footer className="relative w-full">
            <div className="w-full px-8 mx-auto max-w-7xl">
                <div className="grid w-full grid-cols-1 gap-8 py-12 mx-auto md:grid-cols-2 lg:grid-cols-4">
                    <div className="flex flex-col md:flex-1">
                        <Link href="/">
                            <Image
                                priority
                                src="/mainLogo.png"
                                alt="Kanaspital"
                                width={60}
                                height={60}
                                quality={50}
                            />
                        </Link>
                        <p className="pb-2 pt-1 text-2xl font-semibold text-neutral-700">Kasapital</p>
                        {list_data.map((item, index) => (
                            <p key={index} className="pt-1 text-sm font-normal text-neutral-500">{item}</p>
                        ))}
                        <div className="my-5 flex justify-start">
                            {socialMedias.map(([Icon, href]) => (
                                <Link
                                    key={href as string}
                                    href={href as string}
                                    target="_blank"
                                    className="mr-2 rounded-lg bg-neutral-200 p-2 text-neutral-600 transition hover:bg-neutral-300 hover:text-neutral-700"
                                >
                                    <Icon className='size-4' />
                                </Link>
                            ))}
                        </div>
                    </div>
                    {footerLinks.map(({ label, links }) => (
                        <div key={label} className="flex flex-col">
                            <strong className="mb-5 md:text-xl font-bold text-neutral-700 text-base">
                                {label}
                            </strong>
                            <ul className="flex flex-col gap-2 font-medium text-neutral-500 md:text-sm text-xs">
                                {links.map(([label, href]) => (
                                    <Link
                                        key={href}
                                        href={href}
                                        className="transition hover:text-neutral-700"
                                    >
                                        {label}
                                    </Link>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer
