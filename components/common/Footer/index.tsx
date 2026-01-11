import Image from "next/image";

import { FooterLink } from "../Link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-200 bg-white mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <FooterLink href="/" className="flex items-center">
              <Image src="/logo.png" alt="Atlas Advisory Logo" width={120} height={60} className="h-auto w-auto" />
            </FooterLink>
            <p className="text-sm text-gray-600 max-w-xs">
              Helping companies identify international market opportunities through comprehensive global data analysis.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <FooterLink href="/">Countries</FooterLink>
              </li>
              <li>
                <FooterLink href="/about">About</FooterLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <FooterLink href="https://restcountries.com/">REST Countries API</FooterLink>
              </li>
              <li>
                <FooterLink href="https://datahelpdesk.worldbank.org/knowledgebase/articles/898581">
                  World Bank API
                </FooterLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-600">© {currentYear} Atlas Advisory. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
