export default function SignIn() {
    return (
        <main>
            <section className="px-4 md:px-10 py-44">
                <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md border border-gray-100">
                    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Acesse sua conta</h2>
                    <form className="space-y-5">
                        <div>
                            <label htmlFor="email"
                                   className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input type="email" id="email" name="email"
                                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neutral-500 focus:border-neutral-500 outline-none transition-all"
                                   placeholder="seu@email.com" required/>
                        </div>

                        <div>
                            <label htmlFor="password"
                                   className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
                            <input type="password" id="password" name="password"
                                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-neutral-500 focus:border-neutral-500 outline-none transition-all"
                                   placeholder="••••••••" required/>
                            <div className="flex justify-end mt-1">
                                <a href="#" className="text-xs text-neutral-600 hover:text-neutral-800 hover:underline">
                                    Esqueceu a senha?
                                </a>
                            </div>
                        </div>

                        <button type="submit"
                                className="w-full bg-neutral-600 hover:bg-neutral-700 text-white font-semibold py-2.5 rounded-lg transition duration-200 shadow-sm hover:shadow-md">
                            Entrar
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
}
