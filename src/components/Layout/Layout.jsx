import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen w-full bg-bg-deep text-text-main font-sans relative flex flex-col items-center justify-center overscroll-none">
            {/* Ambient Nebula Glow (Top Left) - Main Light Source */}
            <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary blur-[120px] rounded-full pointer-events-none z-0" />

            {/* Secondary Glow (Bottom Right) - Subtler */}
            <div className="fixed bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-secondary/10 blur-[100px] rounded-full pointer-events-none z-0" />

            {/* Mobile Frame Wrapper
                - Mobile: Full width/height, no border
                - Desktop (md+): Fixed height/width, rounded corners, border (phone look), centered
            */}
            <div className="relative z-10 w-full max-w-md flex flex-col
                h-[100dvh] md:h-[850px] md:max-h-[90vh]
                md:border-[14px] md:border-bg-card md:rounded-[3rem] 
                md:shadow-[0_0_60px_-15px_rgba(0,0,0,0.5)] md:overflow-hidden 
                md:bg-bg-deep/50 md:backdrop-blur-sm
                transition-all duration-500 ease-out
            ">
                {/* Inner Content Area with Padding */}
                <div className="w-full h-full flex flex-col px-6">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;
