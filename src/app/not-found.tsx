import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TopographicBackground } from "@/components/topographic-background";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-carbon text-bone">
      <TopographicBackground variant="dark" />
      <div className="container-tight relative text-center">
        <p className="font-display text-6xl text-copper">404</p>
        <h1 className="mt-4 font-display text-3xl text-bone sm:text-4xl">
          Página no encontrada
        </h1>
        <p className="mx-auto mt-4 max-w-md text-bone/65">
          La página que buscas no existe o fue movida. Volvamos a terreno
          conocido.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild variant="copper" size="lg">
            <Link href="/">Ir al inicio</Link>
          </Button>
          <Button
            asChild
            size="lg"
            className="border border-bone/25 bg-transparent text-bone hover:bg-bone/10"
          >
            <Link href="/contacto">Contactar</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
