import React from "react";

type NoticeModalProps = {
    message: string;
    onClose: () => void;
};

export const NoticeModal = ({ message, onClose }: NoticeModalProps) => {
    return (
        <div style={modalOverlayStyle}>
            <div style={modalStyle}>
                <p dangerouslySetInnerHTML={{ __html: message.replace(/\n/g, "<br />") }} />
                <button onClick={onClose} style={modalbtnStyle}>關閉</button>
            </div>
        </div>
    );
};

const modalOverlayStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
};

const modalStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    color: "#1c1c1c",
    padding: "24px",
    borderRadius: "18px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
    minWidth: "240px",
};

const modalbtnStyle: React.CSSProperties = {
    gap: "12px",
    background: "#F2F2F2",
    borderRadius: "18px",
}
