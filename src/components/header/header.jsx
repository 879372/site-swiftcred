"use client"
import { Menu, X } from "lucide-react"
import { useState } from "react"

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between relative">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-500 flex items-center justify-center text-white font-bold shadow-lg">
          SC
        </div>
        <div>
          <div className="font-semibold text-lg">SwiftCred</div>
          <div className="text-xs text-slate-500">
            Pagamentos — Pix • Cartões • Subscriptions
          </div>
        </div>
      </div>

      <nav className="hidden md:flex gap-6 items-center text-sm text-slate-700">
        <a href="#features" className="hover:text-slate-900">
          Recursos
        </a>
        <a href="#security" className="hover:text-slate-900">
          Segurança
        </a>
        <a href="#logista" className="hover:text-slate-900">
          Lojista
        </a>
        <a href="#contato" className="hover:text-slate-900">
          Contato
        </a>
        <button className="ml-4 inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:brightness-95">
          Criar conta
        </button>
      </nav>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 rounded-lg border text-slate-700"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-gradient-to-b from-gray-50 via-white to-gray-100 shadow-lg border-t md:hidden">
          <nav className="flex flex-col p-4 gap-4 text-sm text-slate-700 text-center">
            <a
              href="#features"
              className="hover:text-slate-900"
              onClick={() => setIsOpen(false)}
            >
              Recursos
            </a>
            <a
              href="#security"
              className="hover:text-slate-900"
              onClick={() => setIsOpen(false)}
            >
              Segurança
            </a>
            <a
              href="#logista"
              className="hover:text-slate-900"
              onClick={() => setIsOpen(false)}
            >
              Lojista
            </a>
            <a
              href="#contato"
              className="hover:text-slate-900"
              onClick={() => setIsOpen(false)}
            >
              Contato
            </a>
            <button className="mt-2 inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:brightness-95">
              Criar conta
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
