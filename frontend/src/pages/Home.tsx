import React, { useState } from "react";
import caroussel1 from "../assets/home/caroussel1.png";
import caroussel2 from "../assets/home/caroussel2.png";
import caroussel3 from "../assets/home/caroussel3.png";
import logo from "../assets/logo/Nutrisave Logo.png";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: caroussel1,
      title: "Buscá un producto",
      description:
        "Selecciona de Tu lista de Favoritos o escaneá usando tu cámara.",
      alt: "Persona buscando productos en NutriSave",
    },
    {
      image: caroussel2,
      title: "Compará precios",
      description:
        "Revisá los precios disponibles en los comercios cercanos a tu ubicación.",
      alt: "Comparación de precios entre comercios",
    },
    {
      image: caroussel3,
      title: "Elegí la mejor opción",
      description:
        "Filtrá por precio o distancia y elegí dónde te conviene comprar.",
      alt: "Persona eligiendo la mejor opción de compra",
    },
  ];

  const currentItem = slides[currentSlide];

  return (
    <div className="min-h-screen bg-[#f5f7fa] text-[#2d3748]">
      <header className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4 shadow-sm">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo de NutriSave" className="h-12 w-auto" />

          <div className="flex flex-col">
            <h1 className="text-2xl font-bold tracking-tight text-[#2563eb]">
              NutriSave
            </h1>

            <p className="text-sm font-medium text-[#22c55e]">
              Ahorro saludable
            </p>
          </div>
        </div>

        <span className="hidden rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700 sm:block">
          Comprá mejor, ahorrá más
        </span>
      </header>

      <main className="px-4 py-10 sm:px-6">
        <section className="mx-auto max-w-5xl">
          <div className="mb-8 text-center">
            <span className="mb-3 inline-block rounded-full bg-blue-50 px-4 py-1 text-sm font-semibold text-[#2563eb]">
              Simple y rápido
            </span>

            <h2 className="text-3xl font-bold text-gray-900">
              ¿Cómo funciona?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-gray-600">
              Encontrá los productos que buscás, compará precios y elegí la
              opción que más te conviene.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md">
            <article className="grid items-center gap-8 p-6 md:grid-cols-2 md:p-10">
              <div className="order-2 md:order-1">
                <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#2563eb] font-bold text-white">
                  {currentSlide + 1}
                </span>

                <h3 className="text-2xl font-semibold text-gray-900">
                  {currentItem.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {currentItem.description}
                </p>

                <button
                  type="button"
                  className="mt-6 rounded-lg bg-[#22c55e] px-5 py-3 font-semibold text-white transition hover:bg-green-600"
                >
                  Empezar a buscar
                </button>
              </div>

              <div className="order-1 flex justify-center md:order-2">
                <img
                  src={currentItem.image}
                  alt={currentItem.alt}
                  className="max-h-80 w-full rounded-xl object-contain"
                />
              </div>
            </article>

            <div className="flex items-center justify-center gap-2 border-t border-gray-100 py-4">
              {slides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  aria-label={`Ir a la imagen ${index + 1}`}
                  onClick={() => setCurrentSlide(index)}
                  className={
                    currentSlide === index
                      ? "h-3 w-8 rounded-full bg-[#2563eb] transition-all"
                      : "h-3 w-3 rounded-full bg-gray-300 transition-all hover:bg-gray-400"
                  }
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-10 border-t border-gray-200 bg-white px-6 py-6 text-center">
        <p className="text-sm text-gray-500">
          © 2026 NutriSave. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}