import { motion } from "framer-motion";
import { CreditCard, PhoneIncoming, ShieldCheck, User } from 'lucide-react';
import { useTranslation } from "react-i18next";
import segurancaeconformidade from '../../assets/segurancaeconformidade.png';

const Reveal = ({ children, delay = 0, className = '' }) => (
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

function Section3() {
  const { t } = useTranslation();

  const items = [
    {
      icon: <ShieldCheck className="mt-1 text-emerald-600" />,
      title: t("tokenization"),
      desc: t("tokenizationDesc"),
      delay: 0.16
    },
    {
      icon: <CreditCard className="mt-1 text-indigo-600" />,
      title: t("pciCompliance"),
      desc: t("pciComplianceDesc"),
      delay: 0.22
    },
    {
      icon: <User className="mt-1 text-cyan-600" />,
      title: t("realTimeMonitoring"),
      desc: t("realTimeMonitoringDesc"),
      delay: 0.28
    },
    {
      icon: <PhoneIncoming className="mt-1 text-amber-600" />,
      title: t("support247"),
      desc: t("support247Desc"),
      delay: 0.34
    }
  ];

  return (
    <section id="security" className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <Reveal>
          <h3 className="text-2xl font-bold">{t("section3Title")}</h3>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-4 text-slate-600">{t("section3Desc")}</p>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
          {items.map((item, i) => (
            <Reveal key={i} delay={item.delay}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="p-4 bg-white rounded-lg shadow hover:shadow-xl cursor-pointer flex items-start gap-4 h-full"
              >
                {item.icon}
                <div>
                  <div className="font-semibold">{item.title}</div>
                  <div className="text-sm text-slate-600">{item.desc}</div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>

      <div>
        <Reveal>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src={segurancaeconformidade}
              alt={t("section3ImageAlt")}
              className="w-full h-auto"
            />
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}

export default Section3;
