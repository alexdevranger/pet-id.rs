import React from 'react';
import bg from "../assets/bg.webp";

const UsloviKoriscenja = () => {
  return (
    <div className='' 
    style={{
            backgroundImage: `url(${bg})`,
            backgroundRepeat: "no repeat",
            backgroundSize: "100%",
          }}>
        <div className='flex flex-col items-center px-6'>
            <h1 className='text-5xl md:text-6xl mt-6 text-center sm:text-left'>Uslovi korišćenja</h1>
        </div>
        <div className='px-3 md:px-6 md:pr-16 md:ml-8'>
            <h3 className='text-[18px] md:text-md lg:text-xl pt-12 mb-3 font-bold lg:mt-12 pl-2 text-left'>Poštovani potrošači,</h3>
            <p className='text-[16px] md:text-md mb-3 pl-2 lg:px-12'>Molimo pažljivo pročitajte ove Uslove pre upotrebe veb stranice <b>https://pet-id.rs/</b></p>
            <p className='text-[16px] md:text-md mb-3 pl-2 lg:px-12'>Vaš pristup Veb stranici uslovljen je vašim prihvatanjem i poštivanjem ovih Uslova. 
            Ovi uslovi važe za sve posetioce, korisnike i ostale koji pristupe Web stranici.
            </p>
            <p className='text-[16px] md:text-md mb-3 pl-2 lg:px-12'>Pristupom ili korišćenjem Web stranice prihvatate da se ovim Uslovima obavezujete. Ako se ne slažete sa bilo kojim delom Uslova, možda nećete moći da pristupite Web stranici.</p>
            
            <h3 className='text-[22px] md:text-md lg:text-2xl pt-6 mb-6 font-bold lg:mt-24 pl-2 xl:pl-6'>NAŠA WEB STRANICA</h3>
            <p className='text-[16px] md:text-md mb-3 pl-2 lg:px-12'>Sadržaj naše Web stranice nije dozvoljeno deliti (embedovati) putem iFrame metode.</p>
            <p className='text-[16px] md:text-md mb-3 pl-2 lg:px-12'>Sadržaj naše Web stranice je autorski.</p>
            
            <h3 className='text-[22px] md:text-md lg:text-2xl pt-6 mb-6 font-bold lg:mt-24 pl-2 xl:pl-6'>PROMENE</h3>
            <p className='text-[16px] md:text-md mb-3 pl-2 lg:px-12'>Zadržavamo pravo, po sopstvenom nahođenju, da izmenimo ili zamenimo ove Uslove u bilo koje vreme.</p>
            <p className='text-[16px] md:text-md mb-3 pl-2 lg:px-12'>Ako je revizija materijalna, pokušaćemo da vas obavestimo najmanje 15 dana pre stupanja na snagu novih uslova. Ono što predstavlja značajnu promenu biće odlučeno po našem sopstvenom nahođenju.</p>
            
            <h3 className='text-[22px] md:text-md lg:text-2xl pt-6 mb-6 font-bold lg:mt-24 pl-2 xl:pl-6'>KONTAKTIRAJTE NAS</h3>
            <p className='text-[16px] md:text-md pl-2 lg:px-12'>Ako imate bilo kakvih pitanja o ovim Uslovima, kontaktirajte nas putem e-pošte: <b>petiddigital@gmail.com</b> ili <b>https://pet-id.rs/kontakt</b></p>

            <p className='text-3xl mb-6 text-center font-bold pt-16'>♥ Vaš Pet ID ♥</p>
            
        </div>
        
    </div>
  )
}

export default UsloviKoriscenja