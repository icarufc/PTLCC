"use client"
import Image from "next/image"
import { Button } from "."

export const Hero = () =>{

    const HandleClick = () => {
        alert("CLICOU NO BOTÃO")
    }

    return (
        <div className="hero">

            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title">Reserve, ou alugue um carro - rapido e facil</h1>
                <p className="hero__subtitle">Agilize o processo de aluguel de automóveis com nosso método de reserva.</p>
            <Button 
                title="Descubra mais" 
                containerStyles={"bg-primary-blue text-white rounded-md mt-10"} 
                handlePress={HandleClick}
                btnType="button" />
            </div>

            <div className="hero__image-container">
                <div className="hero__image">
                    <Image src="/hero.png" alt="foto do carro" fill className="object-contain"/>
                </div>
                
                <div className="hero__image-overlay" />
            </div>

        </div>
    )
}