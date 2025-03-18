import * as React from "react";

interface LogoComponentProps extends React.SVGProps<SVGSVGElement> {
    width?: number | string;
    height?: number | string;
    color?: string;
}

export const LogoComponent: React.FC<LogoComponentProps> = ({
    width = 30,
    height = 30,
    color,
    className,
    ...props
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 30 30"
        width={width}
        height={height}
        className={`text-${color} ${className}`}
        {...props}
    >
        <rect
            width="28"
            height="4"
            x="-0.757"
            y="19.243"
            fill={color}
            rx="2"
            transform="rotate(-45 -.757 19.243)"
        ></rect>
        <rect
            width="28"
            height="4"
            x="7.728"
            y="27.728"
            fill={color}
            rx="2"
            transform="rotate(-45 7.728 27.728)"
        ></rect>
        <rect
            width="16"
            height="4"
            x="10.537"
            y="16.395"
            fill={color}
            rx="2"
            transform="rotate(45 10.537 16.395)"
        ></rect>
        <rect
            width="28"
            height="4"
            x="10.556"
            y="-0.556"
            fill={color}
            rx="2"
            transform="rotate(45 10.556 -.556)"
        ></rect>
    </svg>
);