'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFoundPage = () => {
    const router = useRouter();
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    router.push('/');
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [router]);

    return (
        <div className="h-screen bg-gray-100 flex flex-col justify-center items-center w-screen">
            <div className="text-center w-full max-w-4xl px-4 sm:px-6 lg:px-8">
                <FaExclamationTriangle className="text-yellow-500 text-6xl mx-auto mb-8 animate-bounce" />
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
                <p className="text-xl sm:text-2xl text-gray-600 mb-8">Oops! The page you're looking for doesn't exist.</p>
                <Link 
                    href="/"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 text-lg"
                >
                    Go Home
                </Link>
                <p className="mt-12 text-gray-500">You'll be redirected to the home page in {countdown} seconds...</p>
            </div>
        </div>
    );
};

export default NotFoundPage;