import { motion } from "framer-motion";
import { CreditCard, PhoneIncoming, ShieldCheck, User } from 'lucide-react';
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
    return (
        <section id="security" className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
                <Reveal>
                    <h3 className="text-2xl font-bold">Segurança e conformidade</h3>
                </Reveal>

                <Reveal delay={0.08}>
                    <p className="mt-4 text-slate-600">Adotamos criptografia de ponta a ponta, tokenização e monitoramento em tempo real para garantir que cada transação seja segura. Nossa infraestrutura é auditada e segue as melhores práticas do mercado.</p>
                </Reveal>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Reveal delay={0.16}>
                        <div className="p-4 bg-white rounded-lg shadow flex items-start gap-4">
                            <ShieldCheck className="mt-1" />
                            <div>
                                <div className="font-semibold">Tokenização</div>
                                <div className="text-sm text-slate-600">Dados sensíveis nunca armazenados em texto limpo.</div>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={0.22}>
                        <div className="p-4 bg-white rounded-lg shadow flex items-start gap-4">
                            <CreditCard className="mt-1" />
                            <div>
                                <div className="font-semibold">PCI-DSS</div>
                                <div className="text-sm text-slate-600">Governança e conformidade para pagamentos por cartão.</div>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={0.28}>
                        <div className="p-4 bg-white rounded-lg shadow flex items-start gap-4">
                            <User className="mt-1" />
                            <div>
                                <div className="font-semibold">Monitoramento 24/7</div>
                                <div className="text-sm text-slate-600">Anomalias e fraudes detectadas em tempo real.</div>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={0.34}>
                        <div className="p-4 bg-white rounded-lg shadow flex items-start gap-4">
                            <PhoneIncoming className="mt-1" />
                            <div>
                                <div className="font-semibold">Suporte dedicado</div>
                                <div className="text-sm text-slate-600">Equipe pronta 24/7 para te ajudar em integrações e atendimento.</div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>

            <div>
                <Reveal>
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                        <img src={segurancaeconformidade} alt="security" className="" />
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
export default Section3;