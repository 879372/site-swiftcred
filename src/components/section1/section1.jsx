import { motion } from "framer-motion";
import { CreditCard, ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";
import paymentmodern from "../../assets/paymentmodern.png";
import pix from "../../assets/pix.png";

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

function Section1() {
  const { t } = useTranslation();

  const features = [
    {
      icon: <CreditCard size={18} />,
      title: t("featureCardPayment"),
      desc: t("featureCardPaymentDesc"),
    },
    {
      icon: <img src={pix} alt="pix" className="h-4" />,
      title: t("featureCardPix"),
      desc: t("featureCardPixDesc"),
    },
    {
      icon: <ShieldCheck size={18} />,
      title: t("featureCardSecurity"),
      desc: t("featureCardSecurityDesc"),
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-8">
      <div>
        <Reveal>
          <p className="inline-block bg-slate-100 px-3 py-1 rounded-full text-xs text-slate-600 font-medium shadow-sm">
            {t("section1Badge")}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold leading-tight">
            {t("section1Title")}
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-4 text-lg text-slate-600 max-w-xl">
            {t("section1Desc")}
          </p>
        </Reveal>

        <div className="mt-6 flex flex-wrap gap-3">
          <Reveal delay={0.24}>
            <a
              href="#pricing"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white px-5 py-3 rounded-lg font-medium shadow-lg transition-all duration-300 ease-in-out hover:from-indigo-500 hover:to-cyan-400 hover:scale-105"
            >
              {t("section1ButtonStart")}
            </a>
          </Reveal>
          <Reveal delay={0.32}>
            <a
              href="#recursos"
              className="inline-flex items-center gap-2 border px-4 py-3 rounded-lg text-slate-700 transition-all duration-300 ease-in-out hover:border-indigo-400 hover:text-indigo-600 hover:scale-105"
            >
              {t("section1ButtonFeatures")}
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.4}>
          <div className="mt-8 grid md:grid-cols-2 gap-4 text-sm text-slate-600">
            {features.map((f, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 rounded-lg bg-white shadow transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-slate-50 to-slate-100 shadow-inner">
                  {f.icon}
                </div>
                <div>
                  <div className="font-semibold">{f.title}</div>
                  <div className="text-xs">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="relative">
        <Reveal>
          <div className="rounded-2xl overflow-hidden shadow-2xl bg-white transition-transform duration-500 hover:scale-105">
            <img src={paymentmodern} alt="pagamentos" />
          </div>
        </Reveal>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="absolute left-6 bottom-6 bg-white/90 backdrop-blur rounded-2xl p-4 shadow-lg border transition-all duration-300 hover:shadow-indigo-200"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold">
              SC
            </div>
            <div>
              <div className="text-sm font-semibold">{t("badgeTitle")}</div>
              <div className="text-xs text-slate-500">{t("badgeDesc")}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Section1;
