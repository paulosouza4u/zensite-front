"use client";
import { useState, FormEvent } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert("Sua mensagem foi guardada com segurança! Entraremos em contato em breve. 🚀");
                setFormData({ name: "", email: "", message: "" });
            } else {
                alert("Ops! Houve um problema técnico ao salvar sua mensagem.");
            }
        } catch (error) {
            alert("Erro de conexão. Verifique sua internet.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <section id="contact" className="px-4 md:px-10 py-18">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold">Contato</h2>
                    <p className="text-gray-600 mt-2">Mande uma mensagem e responderemos o quanto antes.</p>
                </div>

                <form onSubmit={handleSubmit}
                      className="flex flex-col gap-5 bg-white p-8 rounded shadow-sm border border-gray-100">
                    <div>
                        <label className="block text-sm font-semibold mb-2">Seu Nome</label>
                        <input
                            type="text"
                            required
                            disabled={loading}
                            className="w-full border border-gray-300 rounded p-3 outline-none focus:ring-2 focus:ring-neutral-500 disabled:bg-gray-100"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Ex: João Silva"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-2">E-mail para retorno</label>
                        <input
                            type="email"
                            required
                            disabled={loading}
                            className="w-full border border-gray-300 rounded p-3 outline-none focus:ring-2 focus:ring-neutral-500 disabled:bg-gray-100"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="joao@email.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-2">Sua Mensagem</label>
                        <textarea
                            required
                            rows={5}
                            disabled={loading}
                            className="w-full border border-gray-300 rounded p-3 outline-none focus:ring-2 focus:ring-neutral-500 disabled:bg-gray-100"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Como podemos te ajudar?"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-neutral-600 text-white font-bold py-3 rounded hover:bg-neutral-700 transition-all active:scale-95 disabled:bg-neutral-300"
                    >
                        {loading ? "Enviando..." : "Enviar Mensagem"}
                    </button>
                </form>
            </div>
        </section>
    );
}