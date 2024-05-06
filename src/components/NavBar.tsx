'use client'

import Link from "next/link";
import {useEffect, useState} from "react";
import {Smartphone} from "lucide-react";

export function NavBar() {

    const [width, setWidth] = useState<number>(0);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        //@todo NOT WORKING WELL AT ALL
        setWidth(window.innerWidth);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    return (
        <nav
            className={"sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all"}>
            <div className={"h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20"}>
                <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
                    <Link href={"/"} className={"flex z-40 font-semibold"}>
                        click<span className='text-green-600'>2eat</span>
                    </Link>
                    <div className='h-full flex items-center space-x-4'>
                        {
                            width && width <= 768 ?
                                (
                                    <Link href={"#"} className={"flex gap-2 rounded-md p-2 bg-black text-white"}>
                                        <Smartphone />
                                        <span>
                                            Probar
                                        </span>
                                    </Link>
                                ) :
                                (
                                    <Link href={"#"} className={"rounded-md p-2 bg-black text-white"}>
                                        <span>
                                            Solicitar Prueba
                                        </span>
                                    </Link>
                                )
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
}