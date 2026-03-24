import erpIllustration from "@/../public/assets/erp-side-illustration.jpg";

import Image from "next/image";

const AuthSidePanel = () => {
  return (
    <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-auth-panel">
      {/* Background image with overlay */}
      <Image
        src={erpIllustration}
        alt="Enterprise illustration"
        className="absolute inset-0 w-full h-full object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between p-12 w-full">
        <div className="flex items-center gap-3">
          <Image
            src="/assets/LogoMKA.png"
            alt="Logo CV Mandiri Kerja Abadi"
            width={40}
            height={40}
            className="w-10 h-10 object-contain"
          />
          <span className="text-xl font-semibold text-white">
            CV Mandiri Kerja Abadi
          </span>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-white leading-tight">
            Kelola bisnis Anda
            <br />
            dalam satu platform.
          </h2>
          <p className="text-white/70 max-w-md leading-relaxed">
            Integrasikan semua proses bisnis — dari keuangan, inventaris, hingga
            sumber daya manusia — dalam satu sistem yang terpadu dan efisien.
          </p>
          <div className="flex gap-8 pt-4">
            {[
              { value: "500+", label: "Perusahaan" },
              { value: "99.9%", label: "Uptime" },
              { value: "24/7", label: "Support" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-white/40 text-sm">
          Copyright © 2025 CV Mandiri Kerja Abadi. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default AuthSidePanel;
