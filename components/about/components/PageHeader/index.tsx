import Image from "next/image";

import { H1 } from "@/components/common/Text";

export const PageHeader = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-8 py-12 border-b border-gray-200">
            <div className="flex items-center gap-6 mb-4">
              <Image
                src="/logo.png"
                alt="Atlas Advisory Logo"
                width={120}
                height={60}
                className="h-auto w-auto rounded-md"
              />
            </div>
            <H1>About Atlas Advisory</H1>
          </div>
  );
};