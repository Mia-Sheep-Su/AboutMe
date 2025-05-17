import React, { useEffect, useRef, useState } from 'react';
import { toast } from "react-toastify";
import styles from "../styles/KVAnimation.module.css";
import { Dropdown4 } from './Dropdown';
import.meta.env.BASE_URL

const imageList = Array.from({ length: 12 }, (_, i) => `${import.meta.env.BASE_URL}img/KV/${String(i + 1).padStart(2, '0')}.jpg`
);
const items = [
    { label: "GitHub", icon: "github", href: "https://github.com/Mia-Sheep-Su" },
    { label: "Instagran", icon: "instagram", href: "https://www.instagram.com/m_0713_su/" },
    { label: "Cake resume", icon: "cake", href: "https://www.cake.me/yi-jen-su" }]

export const KVAnimation = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [currentIndex, setCurrentIndex] = useState(0);
    const isMobile = window.innerWidth <= 1024;

    useEffect(() => {
        if (isMobile) {
            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % imageList.length);
            }, 2000);
            return () => clearInterval(interval);
        }
    }, [isMobile]);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (rect) {
            setMousePos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        }
    };

    const handleItemClick = (item) =>
        toast.success(`Followed on ${item}`, {
            position: "bottom-center",
            closeButton: false,
        });

    return (
        <div className={styles["kv-container"]} ref={containerRef} onMouseMove={handleMouseMove}>
            {/* 桌機版：波浪動畫 */}
            {!isMobile && (
                <div className={styles["kv-grid"]}>
                    {imageList.map((src, index) => {
                        const row = Math.floor(index / 6);
                        const col = index % 6;
                        const imageCenterX = (col + 0.5) * (100 / 6);
                        const imageCenterY = (row + 0.5) * (100 / 2);
                        const container = containerRef.current;
                        const containerWidth = container?.offsetWidth ?? 1;
                        const containerHeight = container?.offsetHeight ?? 1;

                        const dx = (mousePos.x / containerWidth) * 100 - imageCenterX;
                        const dy = (mousePos.y / containerHeight) * 100 - imageCenterY;

                        const dist = Math.sqrt(dx * dx + dy * dy);
                        const scale = Math.max(1, 2 - dist / 25); // 根據距離調整縮放倍數

                        return (
                            <div className={styles["kv-image-wrapper"]} key={index}>
                                <img
                                    src={src}
                                    className={styles["kv-image"]}
                                    style={{
                                        transform: `scale(${scale})`,
                                        zIndex: Math.floor(100 - dist),
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>
            )}
            {/* 手機版：輪播單張圖 */}
            {isMobile && (
                <div className={styles.carouselWrapper}>
                    <img src={imageList[currentIndex]} className={styles.carouselImage} alt="kv" />
                </div>
            )}
            {/* 共用標題與 dropdown */}
            <div className={styles["kv-overlay"]}>
                <h1 className={styles["kv-title"]}>Welcome to My Portfolio</h1>
                <div className={styles["kv-button"]}>
                    <Dropdown4 buttonText="Follow Me"
                        items={items}
                        onItemClick={handleItemClick} />
                </div>
            </div>
        </div>
    );
};
