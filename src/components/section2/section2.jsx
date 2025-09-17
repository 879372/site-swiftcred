import { motion } from "framer-motion";
import { CreditCard, Settings, ShieldCheck, User } from "lucide-react";

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

function Section2() {
    return (
        <section id="features" className="mt-20">
            <Reveal>
                <h2 className="text-3xl font-bold">Recursos que importam</h2>
            </Reveal>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <Reveal>
                    <article className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
                        <div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4">
                            <CreditCard />
                        </div>
                        <h3 className="font-semibold">Aceite cartões</h3>
                        <p className="mt-2 text-sm text-slate-600">Integração simples, conciliação automática e suporte a parcelamento.</p>
                    </article>
                </Reveal>

                <Reveal delay={0.06}>
                    <article className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
                        <div className="w-12 h-12 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-600 mb-4">
                            <User />
                        </div>
                        <h3 className="font-semibold">Pix e cobranças instantâneas</h3>
                        <p className="mt-2 text-sm text-slate-600">Recebimentos em segundos, QR dinâmico e geração de cobranças programadas.</p>
                    </article>
                </Reveal>

                <Reveal delay={0.12}>
                    <article className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
                        <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 mb-4">
                            <ShieldCheck />
                        </div>
                        <h3 className="font-semibold">Segurança avançada</h3>
                        <p className="mt-2 text-sm text-slate-600">Tokenização, detecção de fraude e conformidade com padrões.</p>
                    </article>
                </Reveal>

                <Reveal delay={0.18}>
                    <article className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
                        <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600 mb-4">
                            <Settings />
                        </div>
                        <h3 className="font-semibold">Painel de gestão</h3>
                        <p className="mt-2 text-sm text-slate-600">Relatórios, conciliação e controle de acessos para sua equipe.</p>
                    </article>
                </Reveal>
            </div>
        </section>
    )
}
export default Section2;