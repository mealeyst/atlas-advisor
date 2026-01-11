import Image from "next/image";

import { SiteHeaderLink } from "../Link";

export function SiteHeader() {
  return (
    <header className="w-full max-h-26 border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <SiteHeaderLink href="/" className="flex items-center max-w-[120px]">
          <Image src="/logo.png" alt="Atlas Advisory Logo" width={120} height={60} priority className="h-auto w-auto" />
        </SiteHeaderLink>
        <nav className="flex items-center gap-6">
          <SiteHeaderLink href="/" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
            Countries
          </SiteHeaderLink>
          <SiteHeaderLink href="/about" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
            About
          </SiteHeaderLink>
        </nav>
      </div>
    </header>
  );
}
