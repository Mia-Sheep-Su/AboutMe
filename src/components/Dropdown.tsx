type DropdownItem = {
    label: string;
    icon?: string;
    href?: string;
};

import { useRef, useEffect, useState } from "react";
import styles from "../styles/Dropdown.module.css";
import {
    FaGithub,
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaYoutube,
} from "react-icons/fa";
import { LuCakeSlice } from "react-icons/lu";

const iconMap = {
    github: FaGithub,
    facebook: FaFacebook,
    instagram: FaInstagram,
    twitter: FaTwitter,
    linkedin: FaLinkedin,
    youtube: FaYoutube,
    cake: LuCakeSlice,
};

const useClickOutside = (ref, callback) => {
    const handleClick = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            callback();
        }
    };
    useEffect(() => {
        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        };
    });
};

type DropdownProps = {
    buttonText: string;
    items: DropdownItem[];
    onItemClick?: (item: DropdownItem) => void;
};

export const Dropdown4 = ({ buttonText, items, onItemClick }: DropdownProps) => {
    const dropdownRef = useRef(null);

    const [isOpen, setIsOpen] = useState(false);

    const toggleIsOpen = () => setIsOpen(!isOpen);

    const handleItemClick = (item) => {
        onItemClick?.(item); // 加上 optional chaining 更安全
        toggleIsOpen();
    };

    useClickOutside(dropdownRef, () => setIsOpen(false));

    return (
        <div className={`${styles.dropdown} ${isOpen ? styles.open : ''}`} ref={dropdownRef}>
            <button onClick={toggleIsOpen}>
                <span className={styles["button-inner"]}>
                    {buttonText}
                    <span className="material-symbols-outlined"></span>
                </span>
            </button>
            <ul>
                {items.map((item) => {
                    const IconComponent = iconMap[item.icon?.toLowerCase() ?? ''];

                    const content = (
                        <>
                            {IconComponent && <IconComponent style={{ marginRight: 8 }} />}
                            {item.label}
                        </>
                    );

                    return (
                        <li key={item.label}>
                            {item.href ? (
                                <a href={item.href} target="_blank" rel="noopener noreferrer">
                                    {content}
                                </a>
                            ) : (
                                <button onClick={() => handleItemClick(item)}>
                                    {content}
                                </button>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};