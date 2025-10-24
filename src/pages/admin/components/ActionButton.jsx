import React from "react";
import styles from "../moduleCss/products.module.css"; 

export default function ActionButton({ icon: Icon, label, onClick, color = "primary", className = "" }) {
    return (
        <button
            className={`${styles.actionButton} ${styles[color]} ${className}`}
            onClick={onClick}
        >
            {Icon && <Icon size={18} />}
            <span>{label}</span>
        </button>
    );
}
