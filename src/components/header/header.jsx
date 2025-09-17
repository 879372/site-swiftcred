"use client"
import { ChevronDown, Menu, X } from "lucide-react"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import br from "../../assets/br.png"
import en from "../../assets/en.png"
import es from "../../assets/es.png"


const languages = [
  { code: "pt", label: "PT", flag: br},
  { code: "en", label: "EN", flag: en },
  { code: "es", label: "ES", flag: es },
]

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const { t, i18n } = useTranslation()

  const navItems = [
    { key: "navRecursos", href: "#recursos" },
    { key: "navSeguranca", href: "#security" },
    { key: "navLojista", href: "#lojista" },
    { key: "navContato", href: "#contato" },
  ]

  const handleChangeLanguage = (code) => {
    i18n.changeLanguage(code)
    setLangOpen(false)
  }

  return (
    <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between relative">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-cyan-500 flex items-center justify-center text-white font-bold shadow-lg transition-transform duration-300 hover:scale-110">
          SC
        </div>
        <div>
          <div className="font-semibold text-lg">{t("headerLogoTitle")}</div>
          <div className="text-xs text-slate-500">{t("headerLogoSubtitle")}</div>
        </div>
      </div>

      {/* Desktop nav */}
      <nav className="hidden md:flex gap-6 items-center text-sm text-slate-700">
        {navItems.map((item, i) => (
          <a
            key={i}
            href={item.href}
            className="transition-all duration-300 hover:text-indigo-600 hover:scale-105 hover:underline underline-offset-4"
          >
            {t(item.key)}
          </a>
        ))}

        {/* Language selector */}
         <div className="relative">
      <button
        onClick={() => setLangOpen(!langOpen)}
        className="flex items-center gap-1 px-3 py-1 border rounded-lg hover:bg-slate-100 transition-colors"
      >
        <img
          src={languages.find((l) => l.code === i18n.language)?.flag}
          alt="flag"
          className="w-5 h-5 rounded-sm"
        />
        <ChevronDown size={14} />
      </button>

      {langOpen && (
        <div className="absolute right-0 mt-2 w-28 bg-white border rounded-lg shadow-md overflow-hidden z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleChangeLanguage(lang.code)}
              className="w-full px-3 py-2 text-left hover:bg-indigo-50 flex items-center gap-2"
            >
              <img src={lang.flag} alt={lang.label} className="w-5 h-5 rounded-sm" />
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>

        <button className="ml-4 inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white px-4 py-2 rounded-lg shadow transition-all duration-300 ease-in-out hover:from-indigo-500 hover:to-cyan-400 hover:scale-105">
          {t("headerButtonCreate")}
        </button>
      </nav>

      {/* Mobile Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 rounded-lg border text-slate-700 transition-colors duration-300 hover:bg-slate-100"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-gradient-to-b from-white to-gray-100 shadow-lg border-t md:hidden animate-fadeIn z-50">
          <nav className="flex flex-col p-4 gap-4 text-sm text-slate-700 text-center">
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="transition-all duration-300 hover:text-indigo-600 hover:scale-105"
                onClick={() => setIsOpen(false)}
              >
                {t(item.key)}
              </a>
            ))}

            {/* Mobile language selector */}
            <div className="flex justify-center mt-2 gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleChangeLanguage(lang.code)}
                  className="px-3 py-1 border rounded-lg hover:bg-indigo-50"
                >
                  {lang.flag}
                </button>
              ))}
            </div>

            <button className="mt-2 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white px-4 py-2 rounded-lg shadow transition-all duration-300 ease-in-out hover:from-indigo-500 hover:to-cyan-400 hover:scale-105">
              {t("headerButtonCreate")}
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
