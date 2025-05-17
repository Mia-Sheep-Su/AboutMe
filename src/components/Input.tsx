import React from "react";
import styles from '../styles/Input.module.css';

export type InputProps = {
    label: string;
    name: string;
    type?: "text" | "number";
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    pattern?: string;
    placeholder?: string;
    required?: boolean;
    error?: string;
};

export const Input = ({ label, name, type = "text", value, onChange, pattern, placeholder, required, error }: InputProps) => {
    return (
        <div className={styles.inputbox}>
            <label htmlFor={name}>{label}</label>
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                pattern={pattern}
                placeholder={placeholder}
                required={required}
                style={{ display: "block", width: "100%", padding: "8px", marginTop: "4px" }}
            />
            {error && <span style={{ color: "red", fontSize: "12px" }}>{error}</span>}
        </div>
    );
};