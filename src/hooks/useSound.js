import { useCallback } from 'react';

export const useSound = () => {
    const playGong = useCallback(() => {
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (!AudioContext) return;

            const ctx = new AudioContext();
            const oscillator = ctx.createOscillator();
            const gainNode = ctx.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(ctx.destination);

            // Soft Bell Tone
            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(440, ctx.currentTime); // A4
            oscillator.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.1); // Attack to harmonic

            // Envelope (Soft Attack, Long Decay)
            gainNode.gain.setValueAtTime(0, ctx.currentTime);
            gainNode.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.1); // Attack
            gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 3); // Decay

            oscillator.start(ctx.currentTime);
            oscillator.stop(ctx.currentTime + 3.5);
        } catch (e) {
            console.error("Audio play failed", e);
        }
    }, []);

    return { playGong };
};
