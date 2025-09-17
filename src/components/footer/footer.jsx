"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Reveal = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="mt-20 py-12 border-t bg-slate-50 text-slate-700" id="contato">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Reveal>
          <div>
            <div className="font-semibold text-lg">{t("headerLogoTitle")}</div>
            <div className="mt-2 text-sm text-slate-600">{t("headerLogoSubtitle")}</div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div>
            <div className="font-medium text-sm">{t("footerContact")}</div>
            <div className="mt-2 text-sm text-slate-600">{t("footerEmail")}</div>
            <div className="mt-1 text-sm text-slate-600">{t("footerPhone")}</div>
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div>
            <div className="font-medium text-sm">{t("footerAddress")}</div>
            <div className="mt-2 text-sm text-slate-600">{t("footerCity")}</div>
            <div className="mt-1 text-sm text-slate-600">{t("footerCNPJ")}</div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.24}>
        <div className="mt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} SwiftCred. {t("footerRights")}
        </div>
      </Reveal>
    </footer>
  );
}

export default Footer;
