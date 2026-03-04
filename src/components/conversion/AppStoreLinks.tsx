"use client";

import { trackAppDownloadClick } from "@/lib/tracking";

export function AppStoreLinks() {
  return (
    <div className="flex items-center justify-center gap-3">
      <a
        href="https://apps.apple.com/za/app/discovery-bank/id1451167079"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackAppDownloadClick("app_store")}
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
        App Store
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=bank.discovery.banking.production.release"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackAppDownloadClick("google_play")}
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.18 23.54c-.35-.55-.18-1.27-.18-1.92V2.38c0-.65-.17-1.37.18-1.92l11.19 11.54L3.18 23.54zM15.73 13.36l-2.6 2.6 8.37 4.71c.95.54 1.77.03 1.77-.03l-7.54-7.28zM15.73 10.64l7.54-7.28s-.82-.57-1.77-.03l-8.37 4.71 2.6 2.6zM4.21.22l10.16 10.42L4.21.22z"/>
        </svg>
        Google Play
      </a>
    </div>
  );
}
