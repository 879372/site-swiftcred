import { motion } from "framer-motion";
import { Headset, TrendingUp, Users2, Wifi } from "lucide-react";

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

function Section4() {
    return (
        <section className="mt-20" id="logista">
            <div className="w-full ">
                <Reveal>
                    <h3 className="text-2xl font-bold">Você é Lojista?</h3>
                </Reveal>
                <Reveal>
                    <p className="mt-2 text-slate-600">
                        Ajude seus clientes brasileiros a pagar com PIX ou cartão de crédito, podendo parcelar em até 12x com as melhores taxas do mercado.
                    </p>
                </Reveal>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
                    <Reveal>
                        <div className="p-6 bg-white rounded-xl shadow h-full flex flex-col text-center">
                            <TrendingUp className="w-10 h-10 text-indigo-600 mx-auto mb-3" />
                            <h4 className="font-semibold text-slate-700">Sem adesão</h4>
                            <p className="text-sm text-slate-600 mt-2">
                                Nenhuma taxa de adesão ou mensalidade para começar ou se manter na
                                SwiftCred.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={0.06}>
                        <div className="p-6 bg-white rounded-xl shadow h-full flex flex-col text-center">
                            <Headset className="w-10 h-10 text-indigo-600 mx-auto mb-3" />
                            <h4 className="font-semibold text-slate-700">Suporte dedicado</h4>
                            <p className="text-sm text-slate-600 mt-2">
                                Equipe pronta para ajudar com treinamentos, materiais de marketing
                                e atendimento presencial ou online.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={0.12}>
                        <div className="p-6 bg-white rounded-xl shadow h-full flex flex-col text-center">
                            <Wifi className="w-10 h-10 text-indigo-600 mx-auto mb-3" />
                            <h4 className="font-semibold text-slate-700">Conectado à internet</h4>
                            <p className="text-sm text-slate-600 mt-2">
                                Basta ter conexão na loja para processar transações com as maquininhas
                                SwiftCred.
                            </p>
                        </div>
                    </Reveal>

                    <Reveal delay={0.18}>
                        <div className="p-6 bg-white rounded-xl shadow h-full flex flex-col text-center">
                            <Users2 className="w-10 h-10 text-indigo-600 mx-auto mb-3" />
                            <h4 className="font-semibold text-slate-700">Experiência superior</h4>
                            <p className="text-sm text-slate-600 mt-2">
                                Seus clientes contam com um processo rápido, seguro e sem burocracias.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

export default Section4;
