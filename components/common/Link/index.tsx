import NextLink from "next/link";
import { ReactNode } from "react";

export const FooterLink = ({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <NextLink href={href} className={className || "text-sm text-gray-600 hover:text-gray-900 transition-colors"}>
      {children}
    </NextLink>
  );
};

export const SiteHeaderLink = ({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) => {
  return (
    <NextLink href={href} className={className || "text-gray-700 hover:text-gray-900 transition-colors font-medium"}>
      {children}
    </NextLink>
  );
};

export const BodyLink = ({ href, children, className }: { href: string; children: ReactNode; className?: string }) => {
  return (
    <NextLink
      href={href}
      className={className || "inline-block mt-4 text-blue-600 hover:text-blue-800 transition-colors font-medium"}
    >
      {children}
    </NextLink>
  );
};
