import Image from "next/image";

export function HowItWorks() {
    return (
        <section className="pl-12 relative grid grid-cols-1 md:grid-cols-[60%_40%] px-8 py-8 gap-8">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-4xl font-bold mb-4">Una gestión eficiente</h2>
                        <p className="mb-4">Gestione eficientemente los pedidos de comida con nuestra plataforma.</p>
                    </div>
                    <div className={"flex flex-col md:flex-row gap-6"}>
                        <Image
                            width={250}
                            height={250}
                            src={"/assets/undraw/dashboard_re_3b76.svg"}
                            alt="Imagen del menú digital"
                            className="w-full rounded-lg shadow-md"/>
                        <p>
                            Con Click2Eat, puede optimizar el procesamiento de sus pedidos de principio a fin. Nuestra
                            plataforma automatiza todo el proceso, desde la realización del pedido hasta la entrega,
                            ahorrándole tiempo y garantizando precisión.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}