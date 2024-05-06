export function GetInTouch() {
    return (
        <section className="flex justify-center items-center py-12">
            <div
                className={"border p-12 rounded-md shadow bg-gradient-to-t from-primary"}
            >
                <div className="w-screen container flex flex-col justify-center items-center text-center gap-5">
                <h2 className="text-5xl font-bold mb-4">Experimente la diferencia de Click2Eat.</h2>
                    <p className={"w-[60%] italic"}>
                        “Click2Eat cambia las reglas del juego para nuestro restaurante. Ha simplificado nuestro proceso
                        de
                        gestión de pedidos y mejorado nuestras operaciones generales”.
                    </p>
                    <a href="mailto:avisos@click2eat.es"
                       className="inline-block bg-white text-green-700 px-6 py-3 rounded-lg shadow-md font-bold">Enviar
                        Contáctanos</a>
                </div>
            </div>
        </section>
    )
}