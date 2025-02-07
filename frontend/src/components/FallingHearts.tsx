import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Heart {
    id: number;
    left: number;
    duration: number;
    size: number;
}

export default function FallingHearts() {
    const [hearts, setHearts] = useState<Heart[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setHearts((prev) => [
                ...prev,
                {
                    id: Math.random(),
                    left: Math.random() * 100, // Random horizontal position
                    duration: Math.random() * 2 + 3, // Random fall duration (3s - 5s)
                    size: Math.random() * 20 + 20, // Random size (20px - 40px)
                },
            ]);
        }, 500); // Creates a new heart every 500ms

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            {hearts.map((heart) => (
                <motion.div
                    key={heart.id}
                    initial={{ y: -50, opacity: 1 }}
                    animate={{ y: "100vh", opacity: 0 }}
                    transition={{ duration: heart.duration, ease: "linear" }}
                    className="absolute text-red-500"
                    style={{
                        left: `${heart.left}%`,
                        fontSize: `${heart.size}px`,
                    }}
                >
                    ❤️
                </motion.div>
            ))}
        </div>
    );
}
