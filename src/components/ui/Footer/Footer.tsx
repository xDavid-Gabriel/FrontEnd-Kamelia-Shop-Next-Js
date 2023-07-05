import React from 'react'
import {
  Correo,
  Facebook,
  Instagram,
  Linkedin,
  Telefono,
  Tiktok,
  Ubicacion,
  Whatsapp,
} from '../Icons'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer>
      <span tw="py-[18px] bg-pink-raspberry text-snow-white flex flex-col gap-5 items-center justify-center sm:gap-20 sm:flex-row">
        Sigue Nuestras Redes Sociales
        <ul tw="flex items-center gap-[5px]">
          <li>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              tw="w-[32px] h-[32px] rounded-[7px] text-pink-raspberry grid place-content-center bg-snow-white"
            >
              <Facebook size={18} />
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              tw="w-[32px] h-[32px] rounded-[7px] text-pink-raspberry grid place-content-center bg-snow-white"
            >
              <Instagram size={18} />
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              tw="w-[32px] h-[32px] rounded-[7px] text-pink-raspberry grid place-content-center bg-snow-white"
            >
              <Tiktok size={18} />
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              tw="w-[32px] h-[32px] rounded-[7px] text-pink-raspberry grid place-content-center bg-snow-white"
            >
              <Linkedin size={18} />
            </a>
          </li>
          <li>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              tw="w-[32px] h-[32px] rounded-[7px] text-pink-raspberry grid place-content-center bg-snow-white"
            >
              <Whatsapp size={18} />
            </a>
          </li>
        </ul>
      </span>
      <div tw="bg-dark-violet">
        <div tw="max-w-[813px] mx-auto px-4">
          <Link href="/" tw="pt-[21px] pb-[25px] block">
            <img
              tw="w-[150px] h-[50px] object-contain mx-auto md:mx-0"
              src="/img/logo.svg"
              alt="logo"
            />
          </Link>
          <div tw="grid text-center gap-[15px] md:text-start md:gap-[102px] md:[grid-template-columns:max-content max-content 1fr] text-snow-white">
            <ul tw="flex flex-col gap-[8px]">
              <li tw="font-bold mb-[2px]">Menú</li>
              <li>
                <Link href="/">Inicio</Link>
              </li>
              <li>
                <Link href="/ofertas">Ofertas</Link>
              </li>
              <li>
                <Link href="/ayuda">Ayuda</Link>
              </li>
            </ul>
            <ul tw="flex flex-col gap-[8px]">
              <li tw="font-bold mb-[2px]">Contactos</li>
              <li>
                <a
                  href="#"
                  tw="flex items-center gap-[10px] justify-center md:justify-start break-all"
                >
                  <Ubicacion /> Av.Dirección de la Ubicación 123
                </a>
              </li>
              <li>
                <a
                  href="#"
                  tw="flex items-center gap-[10px] justify-center md:justify-start break-all"
                >
                  <Correo size={19} />
                  correodecontacto@dominio.com
                </a>
              </li>
              <li>
                <a
                  href="#"
                  tw="flex items-center gap-[10px] justify-center md:justify-start"
                >
                  <Telefono size={19} />
                  (+51) 999 999 999
                </a>
              </li>
            </ul>
            <ul tw="flex flex-col gap-[8px]">
              <li tw="font-bold mb-[2px]">Enlaces que te pueden Ayudar</li>
              <li>
                <a href="#" tw="pl-4">
                  Contactanos
                </a>
              </li>
              <li>
                <a href="#" tw="pl-4">
                  Quiénes Somos
                </a>
              </li>
              <li>
                <a href="#" tw="pl-4">
                  Política de Envíos
                </a>
              </li>
              <li>
                <a href="#" tw="pl-4">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#" tw="pl-4">
                  Política de cambios y devoluciones
                </a>
              </li>
            </ul>
          </div>
          <hr tw="bg-snow-white mt-[21px]" />
          <div tw="py-[21px] flex flex-col gap-[12px] items-center md:block">
            <p tw="text-snow-white text-sm font-semibold">
              © 2023 Copyright Kamelia Shopee
            </p>
            <p tw="text-snow-white text-xs">
              Creado por{' '}
              <a
                tw="font-semibold"
                href="https://limadigital.pe/"
                target="_blank"
              >
                Agencia Lima Digital
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
