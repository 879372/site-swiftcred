"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Reveal = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

function Section5() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { q: t("faq1Q"), a: t("faq1A") },
    { q: t("faq2Q"), a: t("faq2A") },
    { q: t("faq3Q"), a: t("faq3A") },
  ];

  return (
    <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      {/* FAQ */}
      <div>
        <Reveal>
          <h3 className="text-2xl font-bold">{t("faqTitle")}</h3>
        </Reveal>

        <div className="mt-6 space-y-4">
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div
                className="p-4 bg-white rounded-lg shadow cursor-pointer hover:shadow-lg transition"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <div className="font-medium flex justify-between items-center">
                  {faq.q}
                  <span
                    className={`transition-transform ${
                      openIndex === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </div>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 text-sm text-slate-600"
                    >
                      {faq.a}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Criar conta */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="p-8 bg-indigo-600 rounded-2xl text-white shadow-lg cursor-pointer hover:shadow-2xl"
      >
        <Reveal>
          <h3 className="text-2xl font-bold">{t("createAccountTitle")}</h3>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-4 text-slate-200">{t("createAccountDesc")}</p>
        </Reveal>
        <Reveal delay={0.16}>
          <motion.a
            href="#"
            whileHover={{
              scale: 1.05,
              background: "linear-gradient(to right, #6366f1, #06b6d4)",
              color: "#fff",
            }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 inline-block bg-white text-indigo-600 px-5 py-3 rounded-lg font-semibold transition"
          >
            {t("createAccountButton")}
          </motion.a>
        </Reveal>
      </motion.div>
    </section>
  );
}

export default Section5;
