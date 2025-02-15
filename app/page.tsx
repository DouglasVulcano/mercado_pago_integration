"use client";

import useMercadoPago from "./hooks/useMercadoPago";

export default function Home() {
  const { createMercadoPagoCheckout } = useMercadoPago();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="mb-6">
          Aplicação teste para integração com <b>Mercado Pago</b>.
        </div>
        <button
          onClick={() =>
            createMercadoPagoCheckout({
              testeId: "123",
              userEmail: "douglas@gmail.com",
            })
          }
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Comprar
        </button>
      </main>
    </div>
  );
}
