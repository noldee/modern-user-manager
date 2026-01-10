import { useState } from "react";
import { motion } from "framer-motion";
import { User as  ChevronRight } from "lucide-react";

interface LoginProps {
  onLogin: () => void;
}

export const Login = ({ onLogin }: LoginProps) => {
  const [formData, setFormData] = useState({ user: "", pass: "" });
  const [error, setError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.user === "admin" && formData.pass === "admin") {
      localStorage.setItem("isLogged", "true");
      onLogin();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="min-h-screen w-full flex bg-white">
      {/* SECCIÓN IZQUIERDA: FORMULARIO (Estilo shadcn) */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="max-w-[400px] w-full mx-auto"
        >
          <div className="mb-10">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              Iniciar sesión
            </h1>
            <p className="text-slate-500 mt-2 font-medium">
              Ingresa tus credenciales para acceder al panel.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 ml-1">
                Usuario
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="admin"
                  className="w-full bg-white border border-slate-200 rounded-lg py-3 px-4 text-slate-900 outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all placeholder:text-slate-300"
                  onChange={(e) =>
                    setFormData({ ...formData, user: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-sm font-semibold text-slate-700">
                  Contraseña
                </label>
                <span className="text-xs text-indigo-600 hover:underline cursor-pointer font-medium">
                  ¿Olvidaste tu contraseña?
                </span>
              </div>
              <div className="relative">
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-white border border-slate-200 rounded-lg py-3 px-4 text-slate-900 outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all placeholder:text-slate-300"
                  onChange={(e) =>
                    setFormData({ ...formData, pass: e.target.value })
                  }
                />
              </div>
            </div>

            {error && (
              <p className="text-rose-500 text-sm font-medium bg-rose-50 p-3 rounded-lg border border-rose-100">
                Credenciales incorrectas. Intenta con admin/admin.
              </p>
            )}

            <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 rounded-lg shadow-sm transition-all active:scale-[0.98] flex items-center justify-center gap-2">
              Entrar al sistema <ChevronRight size={18} />
            </button>
          </form>

          <footer className="mt-12 text-center border-t border-slate-100 pt-6">
            <p className="text-sm text-slate-400 font-medium">
              © 2026 Nous. Todos los derechos reservados.
            </p>
          </footer>
        </motion.div>
      </div>

      {/* SECCIÓN DERECHA: IMAGEN / DISEÑO (Look Moderno) */}
      <div className="hidden lg:flex w-1/2 bg-slate-100 relative items-center justify-center p-12 overflow-hidden">
        {/* Un patrón moderno de fondo o una imagen */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-blue-700 z-0" />

        {/* Decoración geométrica */}
        <div className="absolute top-0 right-0 w-full h-full opacity-20 z-10 pointer-events-none">
          <svg width="100%" height="100%">
            <pattern
              id="pattern"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1" fill="white"></circle>
            </pattern>
            <rect width="100%" height="100%" fill="url(#pattern)"></rect>
          </svg>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative z-20 bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-2xl max-w-lg"
        >
          <div className="flex gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-rose-400" />
            <div className="w-3 h-3 rounded-full bg-amber-400" />
            <div className="w-3 h-3 rounded-full bg-emerald-400" />
          </div>
          <h2 className="text-3xl font-bold text-white leading-tight">
            Gestiona tu infraestructura con una velocidad asombrosa.
          </h2>
          <p className="text-indigo-100 mt-4 text-lg font-medium">
            "Este sistema ha reducido nuestro tiempo de gestión en un 40%. La
            interfaz es limpia y extremadamente intuitiva."
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div className="mt-8 flex items-center gap-4">
              {/* Imagen del Avatar */}
              <img
              src="/ceo.jpg"
                alt="Nolde Avatar"
                className="w-12 h-12 rounded-full border-2 border-white/30 object-cover shadow-md"
              />

              <div>
                <p className="text-white font-bold leading-none">Nolde</p>
                <p className="text-indigo-200 text-sm mt-1">CEO Nous</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
