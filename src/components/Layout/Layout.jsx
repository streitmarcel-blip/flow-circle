import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen w-full bg-bg-deep text-text-main flex flex-col items-center relative overflow-hidden">
            {/* Background Decor: Subtle gradient spot at top */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <main className="w-full max-w-md h-full flex flex-col flex-1 relative z-10 px-6 py-4">
                {children}
            </main>
        </div>
    );
};

export default Layout;
