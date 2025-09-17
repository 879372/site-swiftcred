import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const resources = {
    pt: {
        translation: {
            // Section5 e Footer já existentes
            faqTitle: "Perguntas frequentes",
            faq1Q: "Como começo a receber via Pix?",
            faq1A: "Basta criar sua conta, validar dados e gerar cobranças QR ou integrar a nossa API.",
            faq2Q: "Quais são os prazos de recebimento?",
            faq2A: "Pix é instantâneo. Pagamentos por cartão seguem o ciclo bancário e o plano escolhido.",
            faq3Q: "Como é feita a integração?",
            faq3A: "Oferecemos APIs REST, SDKs e plugins para plataformas populares.",
            createAccountTitle: "Pronto para receber mais rápido?",
            createAccountDesc: "Abra sua conta SwiftCred e comece a aceitar pagamentos hoje mesmo. Suporte 24/7 e integração em minutos.",
            createAccountButton: "Criar conta gratuita",
            footerDescription: "Meio de pagamento — Pix e Cartões",
            footerContact: "Contato",
            footerAddress: "Endereço",
            footerEmail: "suporte@swiftcred.com",
            footerPhone: "+55 (11) 99999-9999",
            footerCity: "São Paulo, Brasil",
            footerCNPJ: "CNPJ • 00.000.000/0000-00",
            footerRights: "Todos os direitos reservados.",


            // Section4
            section4Title: "Você é Lojista?",
            section4Desc: "Ajude seus clientes brasileiros a pagar com PIX ou cartão de crédito, podendo parcelar em até 12x com as melhores taxas do mercado.",
            featureNoFee: "Sem adesão",
            featureNoFeeDesc: "Nenhuma taxa de adesão ou mensalidade para começar ou se manter na SwiftCred.",
            featureSupport: "Suporte dedicado",
            featureSupportDesc: "Equipe pronta para ajudar com treinamentos, materiais de marketing e atendimento presencial ou online.",
            featureConnected: "Conectado à internet",
            featureConnectedDesc: "Basta ter conexão na loja para processar transações com as maquininhas SwiftCred.",
            featureExperience: "Experiência superior",
            featureExperienceDesc: "Seus clientes contam com um processo rápido, seguro e sem burocracias.",

            // Section3
            section3Title: "Segurança sem complicação",
            section3Desc: "Cada pagamento feito com a SwiftCred é protegido por tecnologia de ponta. Usamos criptografia, tokenização e monitoramento em tempo real para que você venda com confiança e seus clientes paguem com tranquilidade.",
            section3ImageAlt: "Segurança e conformidade SwiftCred",
            tokenization: "Tokenização",
            tokenizationDesc: "Dados sensíveis são protegidos e nunca ficam expostos.",
            pciCompliance: "Conformidade PCI-DSS",
            pciComplianceDesc: "Padrões globais de segurança para pagamentos por cartão.",
            realTimeMonitoring: "Monitoramento em tempo real",
            realTimeMonitoringDesc: "Detecção imediata de fraudes e atividades suspeitas.",
            support247: "Suporte 24/7",
            support247Desc: "Nossa equipe está sempre disponível para te ajudar.",

            // Section2
            section2Title: "O que a SwiftCred entrega para você",
            featureCreditCard: "Cartão de crédito parcelado",
            featureCreditCardDesc: "Seus clientes podem pagar o Pix da maquininha em até 12x no cartão, enquanto você recebe o valor integral de forma simples e rápida.",
            featurePix: "Pix instantâneo",
            featurePixDesc: "Receba pagamentos em segundos com QR dinâmico e cobranças programadas. Mais agilidade e comodidade para seu negócio.",
            featureSecurity: "Segurança garantida",
            featureSecurityDesc: "Criptografia avançada, detecção antifraude e conformidade total para proteger você e seus clientes em cada transação.",
            featureManagement: "Gestão completa",
            featureManagementDesc: "Tenha relatórios em tempo real, conciliação financeira e controle de acessos para gerenciar sua operação de forma inteligente.",

            //section1
            section1Badge: "Pagamento rápido • Seguro • Suporte 24/7",
            section1Title: "SwiftCred — facilite pagamentos com Pix e cartão",
            section1Desc:
                "Aceite Pix e cartões com integração simples, painel de gestão completo e ferramentas para proteção contra fraudes. Concentre-se no crescimento do seu negócio — nós cuidamos do pagamento.",
            section1ButtonStart: "Começar agora",
            section1ButtonFeatures: "Ver recursos",
            featureCardPayment: "Pagamento por cartão",
            featureCardPaymentDesc: "Parcelamento em até 12x e captura imediata",
            featureCardPix: "Pix instantâneo",
            featureCardPixDesc: "Receba e pague em segundos",
            featureCardSecurity: "Segurança",
            featureCardSecurityDesc: "Proteção completa e criptografia de ponta",
            badgeTitle: "Pagamento confirmado",
            badgeDesc: "R$ 249,00 — Pix • 2s atrás",

            // Header
            headerLogoTitle: "SwiftCred",
            headerLogoSubtitle: "Pagamentos — Pix • Cartões • Subscriptions",
            navRecursos: "Recursos",
            navSeguranca: "Segurança",
            navLojista: "Lojista",
            navContato: "Contato",
            headerButtonCreate: "Criar conta",
        },
    },
    en: {
        translation: {
            // Section5 e Footer
            faqTitle: "Frequently Asked Questions",
            faq1Q: "How do I start receiving via Pix?",
            faq1A: "Just create your account, validate your data, and generate QR charges or integrate our API.",
            faq2Q: "What are the payment timelines?",
            faq2A: "Pix is instant. Card payments follow the banking cycle and chosen plan.",
            faq3Q: "How is the integration done?",
            faq3A: "We provide REST APIs, SDKs, and plugins for popular platforms.",
            createAccountTitle: "Ready to receive faster?",
            createAccountDesc: "Open your SwiftCred account and start accepting payments today. 24/7 support and integration in minutes.",
            createAccountButton: "Create free account",
            footerContact: "Contact",
            footerAddress: "Address",
            footerEmail: "support@swiftcred.com",
            footerPhone: "+55 (11) 99999-9999",
            footerCity: "São Paulo, Brazil",
            footerCNPJ: "CNPJ • 00.000.000/0000-00",
            footerRights: "All rights reserved",


            // Section4
            section4Title: "Are you a Merchant?",
            section4Desc: "Help your Brazilian customers pay with PIX or credit card, allowing installments up to 12x with the best rates in the market.",
            featureNoFee: "No fees",
            featureNoFeeDesc: "No registration or monthly fees to start or stay with SwiftCred.",
            featureSupport: "Dedicated support",
            featureSupportDesc: "Team ready to assist with training, marketing materials, and online or in-person support.",
            featureConnected: "Connected to the internet",
            featureConnectedDesc: "Just have an internet connection in your store to process transactions with SwiftCred machines.",
            featureExperience: "Superior experience",
            featureExperienceDesc: "Your customers enjoy a fast, secure, and hassle-free process.",

            // Section3
            section3Title: "Effortless Security",
            section3Desc: "Every payment made with SwiftCred is protected with cutting-edge technology. We use encryption, tokenization, and real-time monitoring so you can sell confidently and your customers pay safely.",
            section3ImageAlt: "SwiftCred Security and Compliance",
            tokenization: "Tokenization",
            tokenizationDesc: "Sensitive data is protected and never exposed.",
            pciCompliance: "PCI-DSS Compliance",
            pciComplianceDesc: "Global security standards for card payments.",
            realTimeMonitoring: "Real-time Monitoring",
            realTimeMonitoringDesc: "Immediate detection of fraud and suspicious activity.",
            support247: "24/7 Support",
            support247Desc: "Our team is always available to help you.",


            // Section2
            section2Title: "What SwiftCred delivers for you",
            featureCreditCard: "Installment credit card",
            featureCreditCardDesc: "Your customers can pay Pix from the machine in up to 12 installments on the card, while you receive the full amount quickly and easily.",
            featurePix: "Instant Pix",
            featurePixDesc: "Receive payments in seconds with dynamic QR codes and scheduled charges. More speed and convenience for your business.",
            featureSecurity: "Guaranteed security",
            featureSecurityDesc: "Advanced encryption, anti-fraud detection, and full compliance to protect you and your customers on every transaction.",
            featureManagement: "Complete management",
            featureManagementDesc: "Get real-time reports, financial reconciliation, and access control to manage your operations intelligently.",

            //section1
            section1Badge: "Fast Payment • Secure • 24/7 Support",
            section1Title: "SwiftCred — simplify payments with Pix and card",
            section1Desc:
                "Accept Pix and cards with simple integration, full management panel, and tools for fraud protection. Focus on growing your business — we handle the payment.",
            section1ButtonStart: "Start now",
            section1ButtonFeatures: "See features",
            featureCardPayment: "Card Payment",
            featureCardPaymentDesc: "Installments up to 12x and instant capture",
            featureCardPix: "Instant Pix",
            featureCardPixDesc: "Receive and pay in seconds",
            featureCardSecurity: "Security",
            featureCardSecurityDesc: "Full protection and advanced encryption",
            badgeTitle: "Payment confirmed",
            badgeDesc: "$49.00 — Pix • 2s ago",

            //header
            headerLogoTitle: "SwiftCred",
            headerLogoSubtitle: "Payments — Pix • Cards • Subscriptions",
            navRecursos: "Features",
            navSeguranca: "Security",
            navLojista: "Merchant",
            navContato: "Contact",
            headerButtonCreate: "Create account",
        },
    },
    es: {
        translation: {
            // Section5 e Footer
            faqTitle: "Preguntas frecuentes",
            faq1Q: "¿Cómo empiezo a recibir pagos vía Pix?",
            faq1A: "Solo crea tu cuenta, valida tus datos y genera cobros QR o integra nuestra API.",
            faq2Q: "¿Cuáles son los plazos de pago?",
            faq2A: "Pix es instantáneo. Los pagos con tarjeta siguen el ciclo bancario y el plan elegido.",
            faq3Q: "¿Cómo se realiza la integración?",
            faq3A: "Proporcionamos APIs REST, SDKs y plugins para plataformas populares.",
            createAccountTitle: "¿Listo para recibir más rápido?",
            createAccountDesc: "Abre tu cuenta SwiftCred y comienza a aceptar pagos hoy mismo. Soporte 24/7 e integración en minutos.",
            createAccountButton: "Crear cuenta gratuita",
            footerDescription: "Método de pago — Pix y Tarjetas",
            footerContact: "Contacto",
            footerAddress: "Dirección",
            footerEmail: "soporte@swiftcred.com",
            footerPhone: "+55 (11) 99999-9999",
            footerCity: "São Paulo, Brasil",
            footerCNPJ: "CNPJ • 00.000.000/0000-00",
            footerRights: "Todos los derechos reservados.",

            // Section4
            section4Title: "¿Eres comerciante?",
            section4Desc: "Ayuda a tus clientes brasileños a pagar con PIX o tarjeta de crédito, pudiendo fraccionar hasta en 12 cuotas con las mejores tasas del mercado.",
            featureNoFee: "Sin adhesión",
            featureNoFeeDesc: "Ninguna tarifa de adhesión o mensualidad para empezar o mantenerse en SwiftCred.",
            featureSupport: "Soporte dedicado",
            featureSupportDesc: "Equipo listo para ayudar con capacitaciones, materiales de marketing y atención presencial o en línea.",
            featureConnected: "Conectado a internet",
            featureConnectedDesc: "Solo necesitas conexión en la tienda para procesar transacciones con las terminales SwiftCred.",
            featureExperience: "Experiencia superior",
            featureExperienceDesc: "Tus clientes disfrutan de un proceso rápido, seguro y sin complicaciones.",

            // Section3
            section3Title: "Seguridad sin complicaciones",
            section3Desc: "Cada pago realizado con SwiftCred está protegido con tecnología de punta. Usamos cifrado, tokenización y monitoreo en tiempo real para que vendas con confianza y tus clientes paguen con seguridad.",
            section3ImageAlt: "Seguridad y cumplimiento SwiftCred",
            tokenization: "Tokenización",
            tokenizationDesc: "Los datos sensibles están protegidos y nunca se exponen.",
            pciCompliance: "Cumplimiento PCI-DSS",
            pciComplianceDesc: "Estándares de seguridad globales para pagos con tarjeta.",
            realTimeMonitoring: "Monitoreo en tiempo real",
            realTimeMonitoringDesc: "Detección inmediata de fraudes y actividades sospechosas.",
            support247: "Soporte 24/7",
            support247Desc: "Nuestro equipo siempre está disponible para ayudarte.",

            // Section2
            section2Title: "Lo que SwiftCred te ofrece",
            featureCreditCard: "Tarjeta de crédito en cuotas",
            featureCreditCardDesc: "Tus clientes pueden pagar el Pix de la terminal en hasta 12 cuotas con tarjeta, mientras recibes el monto total rápida y fácilmente.",
            featurePix: "Pix instantáneo",
            featurePixDesc: "Recibe pagos en segundos con QR dinámico y cobros programados. Más rapidez y comodidad para tu negocio.",
            featureSecurity: "Seguridad garantizada",
            featureSecurityDesc: "Cifrado avanzado, detección antifraude y cumplimiento total para protegerte a ti y a tus clientes en cada transacción.",
            featureManagement: "Gestión completa",
            featureManagementDesc: "Obtén informes en tiempo real, conciliación financiera y control de accesos para administrar tu operación inteligentemente.",

            // Section1
            section1Badge: "Pago rápido • Seguro • Soporte 24/7",
            section1Title: "SwiftCred — facilita los pagos con Pix y tarjeta",
            section1Desc: "Acepta Pix y tarjetas con integración simple, panel de gestión completo y herramientas de protección contra fraudes. Concéntrate en hacer crecer tu negocio — nosotros nos encargamos del pago.",
            section1ButtonStart: "Comenzar ahora",
            section1ButtonFeatures: "Ver funciones",
            featureCardPayment: "Pago con tarjeta",
            featureCardPaymentDesc: "Hasta 12 cuotas y captura inmediata",
            featureCardPix: "Pix instantáneo",
            featureCardPixDesc: "Recibe y paga en segundos",
            featureCardSecurity: "Seguridad",
            featureCardSecurityDesc: "Protección completa y cifrado avanzado",
            badgeTitle: "Pago confirmado",
            badgeDesc: "R$ 249,00 — Pix • hace 2s",

            // Header
            headerLogoTitle: "SwiftCred",
            headerLogoSubtitle: "Pagos — Pix • Tarjetas • Subscriptions",
            navRecursos: "Funciones",
            navSeguranca: "Seguridad",
            navLojista: "Comerciante",
            navContato: "Contacto",
            headerButtonCreate: "Crear cuenta",
        }
    }
};


i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "pt",
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
