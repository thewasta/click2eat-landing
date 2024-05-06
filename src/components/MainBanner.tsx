import Image from "next/image";

export function MainBanner() {
    return (
        <section className="pl-12 relative grid grid-cols-1 md:grid-cols-[60%_40%] px-8 gap-8">
            <div className={"flex flex-col justify-center items-start gap-y-6"}>
                <h1
                    className="relative w-fit tracking-tight text-balance mt-4 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
                    Potencia tu comercio con
                    <span className={"bg-green-600 px-2 text-white"}>Click2Eat</span>
                </h1>
                <p className="text-md lg:pr-10 max-w-prose text-center lg:text-left">
                    La solución definitiva para una gestión de
                    <span className={"font-semibold"}> comandas eficiente</span>.
                    Descubre cómo
                    simplificar pedidos y mejorar la atención a tus clientes.
                </p>
            </div>
            <div className={"hidden sm:block"}>
                <Image
                    className={"rounded-tl-2xl rounded-bl-2xl"}
                    src={"/assets/undraw/barista_qd50.svg"}
                    alt={"photo-1"}
                    height={350}
                    width={500}
                />
            </div>
        </section>
    )
}