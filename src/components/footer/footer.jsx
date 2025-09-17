function Footer() {
    return (
        <footer className="mt-20 py-12 border-t" id="contato">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                    <div className="font-semibold">SwiftCred</div>
                    <div className="mt-2 text-sm text-slate-600">Meio de pagamento — Pix e Cartões</div>
                </div>

                <div className="text-sm text-slate-600">
                    <div className="font-medium">Contato</div>
                    <div className="mt-2">suporte@swiftcred.com</div>
                    <div className="mt-1">+55 (11) 99999-9999</div>
                </div>

                <div className="text-sm text-slate-600">
                    <div className="font-medium">Endereço</div>
                    <div className="mt-2">São Paulo, Brasil</div>
                    <div className="mt-1">CNPJ • 00.000.000/0000-00</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;