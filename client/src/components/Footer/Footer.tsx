import type { ComponentPropsWithoutRef } from "react";

type FooterProps = ComponentPropsWithoutRef<"footer">;

export default function Footer({ className, ...rest }: FooterProps) {
    return (
        <footer className={`py-6 text-center text-gray-500 text-sm border-t ${className}`} {...rest}>
            © {new Date().getFullYear()} Aaman Sayyed. All rights reserved.
        </footer>

    );
}
