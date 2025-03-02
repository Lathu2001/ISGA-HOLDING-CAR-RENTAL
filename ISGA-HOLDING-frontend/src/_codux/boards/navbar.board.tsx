import React from 'react';
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'Navbar',
    Board: () => (
        <header className="bg-[#1e3a8a] shadow-md h-auto justify-center"> {/* Dark Blue background */}
            <div className="flex justify-between items-center max-w-7xl mx-auto p-4">
                {/* Brand Logo/Title */}
                <h1 className="font-bold text-xl sm:text-3xl flex items-center">
                    <span className="text-white">Car Rental</span>
                    <span className="text-[#3b82f6] ml-2">Booking System</span> {/* Light Blue accent */}
                </h1>

                {/* Navigation Links */}
                <div className="flex items-center space-x-4">
                    <a
                        href="/cars"
                        className="text-white hover:text-[#3b82f6] font-semibold"
                    >
                        Cars
                    </a>
                    <a
                        href="/bookings"
                        className="text-white hover:text-[#3b82f6] font-semibold"
                    >
                        My Bookings
                    </a>
                    <a
                        href="/admin"
                        className="text-white hover:text-[#3b82f6] font-semibold"
                    >
                        Admin Dashboard
                    </a>
                    <a
                        href="/signin"
                        className="rounded bg-[#3b82f6] hover:bg-[#2563eb] text-white font-bold py-2 px-4"
                    >
                        Sign In
                    </a>
                </div>
            </div>
        </header>
    ),
    isSnippet: true,
    environmentProps: {
        canvasWidth: 400,
        canvasMargin: {
            top: 1,
            left: 20
        },
        canvasHeight: 100
    }
});
