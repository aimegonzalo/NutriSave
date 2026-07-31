import React from "react";

export default function Register() {
  function handleSubmit() {}

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f5f7fa] px-4 py-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl rounded-2xl border border-gray-200 bg-white p-8 shadow-md"
      >
        <div className="mb-5 text-center">
          <h2 className="text-3xl font-bold text-[#2563eb]">Crear cuenta</h2>
          <p className="mt-2 text-sm text-gray-600">
            Sumate a NutriSave y empezá a ahorrar.
          </p>
        </div>

        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-semibold text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 shadow-sm outline-none transition focus:border-[#2563eb] focus:ring-2 focus:ring-blue-100"
            id="email"
            placeholder="Email"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-semibold text-gray-700"
            htmlFor="username"
          >
            Nombre de Usuario
          </label>
          <input
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 shadow-sm outline-none transition focus:border-[#2563eb] focus:ring-2 focus:ring-blue-100"
            id="username"
            type="text"
            placeholder="Username"
            required
          />
        </div>

        <div className="mb-6">
          <label
            className="mb-2 block text-sm font-semibold text-gray-700"
            htmlFor="password"
          >
            Contraseña
          </label>
          <input
            className="mb-3 w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 shadow-sm outline-none transition focus:border-[#2563eb] focus:ring-2 focus:ring-blue-100"
            id="password"
            type="password"
            placeholder="********"
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="rounded-lg bg-[#22c55e] px-5 py-3 font-semibold text-white transition hover:bg-green-600"
            type="submit"
          >
            Registrarme
          </button>
        </div>
      </form>
    </div>
  );
}
