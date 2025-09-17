import { motion } from "framer-motion";

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

function Section5() {
    return (
        <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
                <Reveal>
                    <h3 className="text-2xl font-bold">Perguntas frequentes</h3>
                </Reveal>

                <div className="mt-6 space-y-4">
                    <Reveal>
                        <details className="p-4 bg-white rounded-lg shadow">
                            <summary className="font-medium">Como começo a receber via Pix?</summary>
                            <p className="mt-2 text-sm text-slate-600">Basta criar sua conta, validar dados e gerar cobrancas QR ou integrar a nossa API.</p>
                        </details>
                    </Reveal>

                    <Reveal delay={0.06}>
                        <details className="p-4 bg-white rounded-lg shadow">
                            <summary className="font-medium">Quais são os prazos de recebimento?</summary>
                            <p className="mt-2 text-sm text-slate-600">Pix é instantâneo. Pagamentos por cartão seguem o ciclo bancário e o plano escolhido.</p>
                        </details>
                    </Reveal>

                    <Reveal delay={0.12}>
                        <details className="p-4 bg-white rounded-lg shadow">
                            <summary className="font-medium">Como é feita a integração?</summary>
                            <p className="mt-2 text-sm text-slate-600">Oferecemos APIs REST, SDKs e plugins para plataformas populares.</p>
                        </details>
                    </Reveal>
                </div>
            </div>

            <div className="p-8 bg-indigo-600 rounded-2xl text-white shadow-lg">
                <Reveal>
                    <h3 className="text-2xl font-bold">Pronto para receber mais rápido?</h3>
                </Reveal>
                <Reveal delay={0.08}>
                    <p className="mt-4 text-slate-200">Abra sua conta SwiftCred e comece a aceitar pagamentos hoje mesmo. Suporte 24/7 e integração em minutos.</p>
                </Reveal>
                <Reveal delay={0.16}>
                    <a href="#" className="mt-6 inline-block bg-white text-indigo-600 px-5 py-3 rounded-lg font-semibold">Criar conta gratuita</a>
                </Reveal>
            </div>
        </section>
    )
}
export default Section5;