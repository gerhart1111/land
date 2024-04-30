import React from 'react'
import styles from "../JobPost.module.scss";

const Menu = () => {
    return (
        <div className={styles.menu}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3"
                height="15"
                viewBox="0 0 3 15"
                fill="none"
            >
                <g clip-path="url(#clip0_160_216)">
                    <ellipse
                        cx="1.5"
                        cy="13"
                        rx="1.5"
                        ry="1.5"
                        transform="rotate(-180 1.5 13)"
                        fill="#00799B"
                    />
                    <ellipse
                        cx="1.5"
                        cy="7"
                        rx="1.5"
                        ry="1.5"
                        transform="rotate(-180 1.5 7)"
                        fill="#00799B"
                    />
                    <ellipse
                        cx="1.5"
                        cy="1.5"
                        rx="1.5"
                        ry="1.5"
                        transform="rotate(-180 1.5 1.5)"
                        fill="#00799B"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_160_216">
                        <rect width="3" height="15" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    )
}

export default Menu