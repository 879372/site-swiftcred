import { motion } from "framer-motion";
import { CreditCard, DollarSign, Settings, ShieldCheck } from "lucide-react";
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

function Section2() {
  const { t } = useTranslation();

  const features = [
    {
      icon: <CreditCard />,
      title: t("featureCreditCard"),
      desc: t("featureCreditCardDesc"),
      color: "from-indigo-500 to-cyan-500 text-white",
    },
    {
      icon: <DollarSign />,
      title: t("featurePix"),
      desc: t("featurePixDesc"),
      color: "from-cyan-500 to-sky-400 text-white",
    },
    {
      icon: <ShieldCheck />,
      title: t("featureSecurity"),
      desc: t("featureSecurityDesc"),
      color: "from-emerald-500 to-green-400 text-white",
    },
    {
      icon: <Settings />,
      title: t("featureManagement"),
      desc: t("featureManagementDesc"),
      color: "from-amber-500 to-yellow-400 text-white",
    },
  ];

  return (
    <section id="recursos" className="mt-20">
      <Reveal>
        <h2 className="text-2xl font-bold">{t("section2Title")}</h2>
      </Reveal>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <Reveal key={i} delay={i * 0.06}>
            <article className="p-6 bg-white rounded-2xl shadow transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl hover:border hover:border-indigo-100">
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-4 shadow-lg transition-transform duration-300 hover:scale-110`}
              >
                {f.icon}
              </div>
              <h3 className="font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Section2;
