import { motion } from "framer-motion";
import { CreditCard, ShieldCheck, User } from "lucide-react";
import paymentmodern from '../../assets/paymentmodern.png';

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

function Section1() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-8">
            <div>
                <Reveal>
                    <p className="inline-block bg-slate-100 px-3 py-1 rounded-full text-xs text-slate-600 font-medium">Pagamento instantâneo • Seguro • Suporte 24/7</p>
                </Reveal>

                <Reveal delay={0.08}>
                    <h1 className="mt-6 text-4xl sm:text-5xl font-extrabold leading-tight">SwiftCred — seu meio de pagamento rápido, seguro e prático</h1>
                </Reveal>

                <Reveal delay={0.16}>
                    <p className="mt-4 text-lg text-slate-600 max-w-xl">Aceite Pix e cartões com integração simples, painel de gestão completo e ferramentas para proteção contra fraudes. Concentre-se no crescimento do seu negócio — nós cuidamos do pagamento.</p>
                </Reveal>

                <div className="mt-6 flex flex-wrap gap-3">
                    <Reveal delay={0.24}>
                        <a href="#pricing" className="inline-flex items-center gap-3 bg-indigo-600 text-white px-5 py-3 rounded-lg font-medium shadow hover:brightness-95">Começar agora</a>
                    </Reveal>
                    <Reveal delay={0.32}>
                        <a href="#features" className="inline-flex items-center gap-2 border px-4 py-3 rounded-lg text-slate-700">Ver recursos</a>
                    </Reveal>
                </div>

                <Reveal delay={0.4}>
                    <div className="mt-8 flex gap-4 flex-wrap text-sm text-slate-600">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white shadow">
                                <CreditCard size={18} />
                            </div>
                            <div>
                                <div className="font-semibold">Pagamento por cartão</div>
                                <div className="text-xs">Taxas competitivas e captura imediata</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white shadow">
                                <User size={18} />
                            </div>
                            <div>
                                <div className="font-semibold">Pix instantâneo</div>
                                <div className="text-xs">Receba em segundos</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white shadow">
                                <ShieldCheck size={18} />
                            </div>
                            <div>
                                <div className="font-semibold">Confiabilidade</div>
                                <div className="text-xs">PCI DSS & encriptação de ponta</div>
                            </div>
                        </div>

                    </div>
                </Reveal>

            </div>

            <div className="relative">
                <Reveal>
                    <div className="rounded-2xl overflow-hidden shadow-2xl bg-white">
                        <img src={paymentmodern} alt="pagamentos" className="" />
                    </div>
                </Reveal>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="absolute left-6 bottom-6 bg-white/90 backdrop-blur rounded-2xl p-4 shadow-lg border"
                >
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold">SC</div>
                        <div>
                            <div className="text-sm font-semibold">Pagamento confirmado</div>
                            <div className="text-xs text-slate-500">R$ 249,00 — Pix • 2s atrás</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
export default Section1;