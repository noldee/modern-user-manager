import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import {
  Plus,
  Trash2,
  Edit3,
  FileText,
  Search,
  LogOut,
} from "lucide-react";

const API = "https://modern-user-manager.onrender.com/user";

export const Dashboard = ({ onLogout }: { onLogout: () => void }) => {
  const [users, setUsers] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "" });

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setUsers(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const method = editingId ? "PUT" : "POST";
    const url = editingId ? `${API}/${editingId}` : API;
    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setForm({ firstName: "", lastName: "", email: "" });
    setEditingId(null);
    loadUsers();
  };

  const deleteUser = async (id: number) => {
    if (!confirm("¿Eliminar usuario?")) return;
    await fetch(`${API}/${id}`, { method: "DELETE" });
    loadUsers();
  };

 const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("Listado de Usuarios", 14, 15);
    autoTable(doc, {
      head: [["ID", "Nombre Completo", "Email"]],
      body: users.map(u => [u.id, `${u.firstName} ${u.lastName}`, u.email]),
      startY: 20,
      // ELIMINAMOS borderRadius porque no es una propiedad válida aquí
      styles: { fontSize: 10, cellPadding: 3 } 
    });
    doc.save("reporte.pdf");
  };
  const filtered = users.filter((u) =>
    `${u.firstName} ${u.lastName}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f8fafc] p-4 md:p-10 text-slate-800">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <h1 className="text-3xl font-black tracking-tight">
              Admin<span className="text-indigo-600">Panel</span>
            </h1>
          </motion.div>

          <div className="flex gap-2">
            <button
              onClick={exportPDF}
              className="p-3 bg-white border rounded-xl hover:bg-slate-50 transition-all shadow-sm text-slate-600"
            >
              <FileText size={20} />
            </button>
            <button
              onClick={onLogout}
              className="flex items-center gap-2 px-5 py-3 bg-rose-50 text-rose-600 rounded-xl font-bold hover:bg-rose-100 transition-all"
            >
              <LogOut size={18} /> Salir
            </button>
          </div>
        </header>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* FORMULARIO */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="lg:col-span-4 bg-white p-8 rounded-[2rem] shadow-xl shadow-indigo-100/50 border border-slate-100 h-fit"
          >
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              {editingId ? <Edit3 size={20} /> : <Plus size={20} />}{" "}
              {editingId ? "Editar" : "Nuevo"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                className="w-full bg-slate-50 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
                placeholder="Nombre"
                value={form.firstName}
                onChange={(e) =>
                  setForm({ ...form, firstName: e.target.value })
                }
                required
              />
              <input
                className="w-full bg-slate-50 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
                placeholder="Apellido"
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                required
              />
              <input
                className="w-full bg-slate-50 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
                placeholder="Email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
              <button className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all">
                {editingId ? "Actualizar" : "Guardar Usuario"}
              </button>
            </form>
          </motion.div>

          {/* LISTA */}
          <div className="lg:col-span-8 bg-white rounded-[2rem] shadow-xl shadow-indigo-100/50 border border-slate-100 overflow-hidden">
            <div className="p-6 border-b bg-slate-50/50 flex items-center">
              <Search className="text-slate-400 mr-3" size={20} />
              <input
                placeholder="Buscar por nombre..."
                className="bg-transparent outline-none w-full font-medium text-slate-600"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody className="divide-y divide-slate-50">
                  <AnimatePresence mode="popLayout">
                    {filtered.map((u) => (
                      <motion.tr
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        key={u.id}
                        className="group hover:bg-indigo-50/30 transition-all"
                      >
                        <td className="px-8 py-5">
                          <p className="font-bold text-slate-700">
                            {u.firstName} {u.lastName}
                          </p>
                          <p className="text-sm text-slate-400 font-medium">
                            {u.email}
                          </p>
                        </td>
                        <td className="px-8 py-5 text-right flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-all">
                          <button
                            onClick={() => {
                              setEditingId(u.id);
                              setForm(u);
                            }}
                            className="p-2 text-indigo-600 hover:bg-white rounded-xl shadow-sm border border-transparent hover:border-indigo-100"
                          >
                            <Edit3 size={18} />
                          </button>
                          <button
                            onClick={() => deleteUser(u.id)}
                            className="p-2 text-rose-600 hover:bg-white rounded-xl shadow-sm border border-transparent hover:border-rose-100"
                          >
                            <Trash2 size={18} />
                          </button>
                        </td>
                      </motion.tr>
                    ))}
                  </AnimatePresence>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
