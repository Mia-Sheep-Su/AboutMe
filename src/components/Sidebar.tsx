import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { NoticeModal } from "./NoticeModal";
import styles from "../styles/Sidebar.module.css"
import {
    MdHome,
    MdFavorite,
    MdAlternateEmail,
    MdAdd,
    MdSettings,
    MdOpenInNew,
    MdDashboard,
    MdLocalShipping,
    MdPerson,
    MdMailOutline,
    MdImage,
    MdStorage,
    MdTag,
    MdExpandMore,
} from "react-icons/md";
import { HiMenuAlt3 } from 'react-icons/hi';

type IconName = keyof typeof iconMap;
const navItems: IconName[] = ["MdHome", "MdFavorite", "MdAlternateEmail", "MdAdd"];
const footerItems: IconName[] = ["MdSettings", "MdOpenInNew"];

const iconMap = {
    MdHome,
    MdFavorite,
    MdAlternateEmail,
    MdAdd,
    MdSettings,
    MdOpenInNew,
    MdDashboard,
    MdLocalShipping,
    MdPerson,
    MdMailOutline,
    MdImage,
    MdStorage,
    MdTag,
    MdExpandMore,
};

const sectionGroups: Record<string, { name: string; icon: IconName }[]> = {
    MdHome: [
        { name: "Home", icon: "MdDashboard" },
        { name: "About Me", icon: "MdPerson" },
    ],
    MdFavorite: [
        { name: "My Hamster Test", icon: "MdFavorite" },
        { name: "Hamster Images", icon: "MdImage" },
    ],
    MdAlternateEmail: [
        { name: "Mail", icon: "MdMailOutline" },
        { name: "Tags", icon: "MdTag" },
    ],
    MdAdd: [
        { name: "New Product", icon: "MdLocalShipping" },
        { name: "Input information", icon: "MdStorage" },
    ],
};

const Icon = ({ icon }: { icon: IconName }) => {
    const IconComponent = iconMap[icon];
    return IconComponent ? <IconComponent /> : null;
};

const Button = ({ item, onClick }: { item: { name: string; icon: IconName }, onClick?: () => void }) => (
    <button type="button" onClick={onClick}>
        <Icon icon={item.icon} />
        <p>{item.name}</p>
    </button>
);

const Header = () => (
    <header>
        <div>
            <h2>Mia Sheep</h2>
            <h3>#ENFP #充滿好奇心</h3>
        </div>
        {/* <Icon icon="MdExpandMore" /> */}
    </header>
);

export const Sidebar = ({
    Opennow,
    onToggleMenu,
    onCloseMenu,
}: {
    Opennow: boolean;
    onToggleMenu?: () => void;
    onCloseMenu?: () => void;
}) => {
    const [activeSection, setActiveSection] = useState<string>("MdHome");
    const [modalMessage, setModalMessage] = useState<string | null>(null);
    const navigate = useNavigate();
    //手機版漢堡選單
    const location = useLocation();
    const isLightPage = location.pathname === '/about';
    const isMobile = window.innerWidth <= 1024;

    useEffect(() => {
        const closeOnEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onCloseMenu?.();
        };
        document.addEventListener("keydown", closeOnEsc);
        return () => document.removeEventListener("keydown", closeOnEsc);
    }, []);

    const handleButtonClick = (name: string) => {
        switch (name) {
            case "Home":
                navigate("/");
                break;
            case "About Me":
                navigate("/about");
                break;
            case "My Hamster Test":
                navigate("/myhamstertest");
                break;
            // case "Hamster Images":
            //     navigate("/Hamsterpicture");
            //     break;
            case "Mail":
                window.location.href = "mailto:miasu713@gmail.com";
                break;
            case "Input information":
                navigate("/information");
                break;
            default:
                setModalMessage("尚未提供內容");
                break;
        }
        // ✅ 點擊後自動收合選單
        if (isMobile) {
            onCloseMenu?.();
        }
    };
    return (
        <>
            <aside className={`${styles.sidebar} ${Opennow ? styles.mobileActive : ''}`}>
                <div className={styles["sidebar-left"]} onClick={(e) => e.stopPropagation()}>
                    <img src={`${import.meta.env.BASE_URL}/logo/Logo.svg`} />
                    {navItems.map(item => (
                        <button key={item} onClick={() => setActiveSection(item)}>
                            <Icon icon={item} />
                        </button>
                    ))}
                    <div>
                        {footerItems.map(item => (
                            <button key={item}>
                                <Icon icon={item} />
                            </button>
                        ))}
                    </div>
                </div>
                <div className={styles["sidebar-right"]}>
                    <div className={styles["sidebar-right-inner"]}>
                        <Header />
                        <nav>
                            {sectionGroups[activeSection]?.map((item) => (
                                <Button key={item.name} item={item} onClick={() => handleButtonClick(item.name)} />
                            ))}
                        </nav>
                    </div>
                </div>
            </aside>
            {modalMessage && (
                <NoticeModal message={modalMessage} onClose={() => setModalMessage(null)} />
            )}
            {/* 手機版漢堡按鈕 */}
            {isMobile && (
                <div className={styles.hamburgerbox}>
                    <button
                        className={`${styles.hamburger} ${isLightPage ? styles.dark : ''}`}
                        onClick={onToggleMenu}
                    >
                        <HiMenuAlt3 />
                    </button>
                </div>
            )}
        </>
    )
}