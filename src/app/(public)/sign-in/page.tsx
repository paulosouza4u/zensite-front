"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignIn() {
    const [error, setError] = useState("");
    const router = useRouter();

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setError("");

        const formData = new FormData(event.currentTarget);
        const email = formData.get("email");
        const password = formData.get("password");

        const res = await fetch("/api/auth/login", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json" }
        });

        if (res.ok) {
            router.refresh(); // Atualiza rotas do servidor
            router.push("/dashboard");
        } else {
            const data = await res.json();
            setError(data.error);
        }
    }

    return (
        <main>
            <section className="px-4 md:px-10 py-44">
                <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md border border-gray-100">
                    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Acesse sua conta</h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label htmlFor="email"
                                   className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input type="email" id="email" name="email"
                                   className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-neutral-500 focus:border-neutral-500 outline-none transition-all"
                                   placeholder="seu@email.com" required/>
                            <span>admin@zensite.com</span>
                        </div>

                        <div>
                            <label htmlFor="password"
                                   className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
                            <input type="password" id="password" name="password"
                                   className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-neutral-500 focus:border-neutral-500 outline-none transition-all"
                                   placeholder="••••••••" required/>
                            <span>123456</span>
                            <div className="flex justify-end mt-1">
                                <a href="#" className="text-xs text-neutral-600 hover:text-neutral-800 hover:underline">
                                    Esqueceu a senha?
                                </a>
                            </div>
                        </div>

                        {error &&
                            <div className="flex justify-center p-2 bg-red-200 rounded border border-red-400">
                                <p className="text-red-500 text-sm">{error}</p>
                            </div>
                        }
                        <button type="submit"
                                className="w-full bg-neutral-600 hover:bg-neutral-700 text-white font-semibold py-2.5 rounded transition duration-200 shadow-sm hover:shadow-md">
                            Entrar
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
}
