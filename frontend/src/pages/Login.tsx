import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const url = import.meta.env.VITE_BASE_URL;
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post(`${url}/api/users/login`, {
        username: usernameRef.current?.value,
        password: passwordRef.current?.value,
      })
      .then((response) => {
        localStorage.setItem("todo-token", response.data.token);
        localStorage.setItem("user", response.data.username);
        localStorage.setItem("email", response.data.email);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        console.log("Request completed");
      });
  }
  return (
    <div
      className="flex min-h-screen items-center justify-center bg-[#f5f7fa] px-4 py-6"
      onSubmit={handleSubmit}
    >
      <form className="w-full max-w-2xl rounded-2xl border border-gray-200 bg-white p-8 shadow-md">
        <div className="mb-5 text-center">
          <h2 className="text-3xl font-bold text-[#2563eb]">Iniciar Sesión </h2>
          <p className="mt-2 text-sm text-gray-600">NutriSave</p>
        </div>

        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-semibold text-gray-700"
            htmlFor="username"
          >
            Usuario
          </label>
          <input
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 shadow-sm outline-none transition focus:border-[#2563eb] focus:ring-2 focus:ring-blue-100"
            id="username"
            type="text"
            placeholder="Username"
            required
            ref={usernameRef}
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
            ref={passwordRef}
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="rounded-lg bg-[#22c55e] px-5 py-3 font-semibold text-white transition hover:bg-green-600"
            type="submit"
          >
            Iniciar Sesión
          </button>
        </div>
      </form>
    </div>
  );
}
