import { motion } from "framer-motion";
import { Headset, TrendingUp, Users2, Wifi } from "lucide-react";
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

function Section4() {
  const { t } = useTranslation();

  const features = [
    {
      icon: <TrendingUp className="w-10 h-10 text-indigo-600 mx-auto mb-3" />,
      title: t("featureNoFee"),
      desc: t("featureNoFeeDesc"),
      delay: 0,
    },
    {
      icon: <Headset className="w-10 h-10 text-indigo-600 mx-auto mb-3" />,
      title: t("featureSupport"),
      desc: t("featureSupportDesc"),
      delay: 0.06,
    },
    {
      icon: <Wifi className="w-10 h-10 text-indigo-600 mx-auto mb-3" />,
      title: t("featureConnected"),
      desc: t("featureConnectedDesc"),
      delay: 0.12,
    },
    {
      icon: <Users2 className="w-10 h-10 text-indigo-600 mx-auto mb-3" />,
      title: t("featureExperience"),
      desc: t("featureExperienceDesc"),
      delay: 0.18,
    },
  ];

  return (
    <section className="mt-20" id="lojista">
      <div className="w-full">
        <Reveal>
          <h3 className="text-2xl font-bold">{t("section4Title")}</h3>
        </Reveal>
        <Reveal>
          <p className="mt-2 text-slate-600">{t("section4Desc")}</p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
          {features.map((item, i) => (
            <Reveal key={i} delay={item.delay}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="p-6 bg-white rounded-xl shadow hover:shadow-xl cursor-pointer flex flex-col text-center"
              >
                {item.icon}
                <h4 className="font-semibold text-slate-700">{item.title}</h4>
                <p className="text-sm text-slate-600 mt-2">{item.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Section4;
