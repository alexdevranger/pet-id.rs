import React from 'react';
import Mali from "../assets/blog/maliPas.png";
import Labrador from "../assets/blog/labrador.png";
import Nemacki from "../assets/blog/nemacki.png";
import Mladi from "../assets/blog/mladi.png";
import Stari from "../assets/blog/stari.png";
import Rot from "../assets/blog/rot1.jpg";
import Macka from "../assets/blog/macka.png"
import Macke from "../assets/blog/macke.png"
import Macka2 from "../assets/blog/macka02.png"
import Zdravlje from "../assets/blog/zdravlje1.jpg";
import bg from "../assets/bg.webp";

const Ponasanje = () => {
  return (
    <div style={{ backgroundImage: `url(${bg})`, backgroundRepeat: "no repeat", backgroundSize: "100%" }}>
      {/* HIGIJENA */}
      {/* PRVI RED */}
      <h1 className='text-center text-6xl pt-12'>Higijena</h1>
      <div className='flex justify-around w-full pt-16 flex-row'>
        <div className='w-[300px]'>
          <img src={Mali} />
          <h2 className='fo'>Mali psi:</h2>
          <p className='text-sm'>
            Mali psi često imaju dugu dlaku koja može lako da se zapetlja i stvori čvoriće. 
            Potrebno ih je četkati redovno, najmanje jednom nedeljno. 
            Takođe, potrebno je redovno čistiti...
          </p>
        </div>
        <div className='w-[300px]'>
          <img src={Labrador} />
          <h2>Srednji psi:</h2>
          <p className='text-sm'>
            Srednji psi, poput labradora, imaju kratku dlaku koja ne zahteva previše održavanja. 
            Ipak, potrebno je četkanje jednom nedeljno i čišćenje ušiju. 
            Nokti se seku redovno, najmanje...
          </p>
        </div>
        <div className='w-[300px]'>
          <img src={Nemacki} />
          <h2>Veliki psi:</h2>
          <p className='text-sm'>
            Veliki psi, poput nemačkih ovčara, imaju dužu dlaku koja zahteva redovno četkanje najmanje jednom nedeljno. 
            Takođe je važno čišćenje ušiju i sečenje noktiju, koje se obično obavljaju...
          </p>
        </div>
        <div className='w-[300px]'>
          <img src={Mladi} />
          <h2>Mladi psi:</h2>
          <p className='text-sm'>
            Mladi psi zahtevaju posebnu negu i pažnju u pogledu higijene kako bi se osiguralo njihovo zdravlje i dobrobit. 
            Osnovna briga uključuje redovno kupanje, čišćenje ušiju...
          </p>
        </div>
        <div className='w-[300px]'>
          <img src={Stari} />
          <h2>Stariji psi:</h2>
          <p className='text-sm'>
            Starijim psima je potrebna dodatna nega kako bi održali svoje zdravlje i udobnost. 
            Njihova koža postaje tanja i suvlja, pa je važno redovito ih četkati i koristiti posebne šampone i ...
          </p>
        </div>
      </div>

      {/* DRUGI RED */}
      <div className='flex justify-center pb-3 pt-16'>
        <div className='flex flex-row items-stretch pl-8 pr-8'>
          <img src={Zdravlje} className="max-h-[547px]"/>
          <div className='flex-col pl-6 border-r-2 pr-3 mr-3'>
            <h2>Evo nekoliko ključnih stvari vezanih za higijenu štenaca pasa:</h2>
            <p className='text-sm'>
            <b>Kupanje:</b> Štenad se ne bi trebala prečesto kupati jer njihova koža ima prirodne ulja koja ih štite od bakterija i gljivica. 
            Preporučuje se kupanje svaka 2 do 3 meseca ili kada je stene veoma prljavo.
            <br />
            <b>Čišćenje ušiju:</b> Štenci su skloni infekcijama uha, pa je važno da se uši redovno čiste. 
            Uši bi trebalo pregledati najmanje jednom nedeljno i očistiti ih blagim rastvorom za čišćenje ušiju. <br />
            <b>Održavanje zuba:</b> Trebalo bi četkati zube štenaca svakodnevno kako bi se...
            </p>
          </div>
          
          <div className='flex-col w-[90%] mr-3 pl-2'>
            <h2>Higijena štenaca mačke je vrlo važna kako bi se osiguralo njihovo zdravlje</h2>
            <p className='text-sm'>
              <b>Čistoća prostora:</b> Čistite prostor u kojem žive vaši ljubimci redovito. 
              Pobrinite se da su podovi čisti, očistite prašinu, uklonite mrlje i druge nečistoće. 
              Takođe, redovito menjajte posteljinu gde spavaju. <br />
              <b>Higijena hranjenja:</b> Ako su mačići hranjeni majčinim mlekom, pobrinite se da su bradavice mleka čiste i suve. 
              Ako se koristi bocica za hranjenje, redovito je sterilizujte kako bi se sprečila infekcija. <br />
              <b>Higijena mačke majke:</b> Ako novorođene mačiće doji mačka majka, pobrinite se da je higijena majke na visokom novou. 
              Mačka majka treba biti redovito čišćena i negovana kako bi se sprečila... 
            </p>
          </div>
          <img src={Macke} />
        </div>
      </div>

      {/* TRECI RED */}
      <div className='flex pt-16 pb-16'>
        <div className='pl-12 flex '>
          <img src={Macka} />
          <div className='w-[20%] pl-8 border-r-2 pr-6'>
            <h2>Higijena starijih mačaka</h2>
            <p className='text-sm'>
            <b>Održavanje čistoće u kući:</b> Stare mačke često imaju problema s mokrenjem ili prljavim šapama, 
            stoga je važno održavati čistoću u kući i često čistiti podove, tepihe i druge površine. 
            Takođe, često menjajte posteljinu i drugu opremu za spavanje vaše mačke kako biste sprečili 
            nakupljanje bakterija i mirisa. <br />
            <b>Redovite posete veterinaru:</b> Veterinar će moći otkriti rane znakove bolesti i pružiti 
            odgovarajuću negu kako bi se sprečili ozbiljni zdravstveni problemi. <br />
            <b>Prilagodite prehranu:</b> Stare mačke često imaju drugačije prehrambene potrebe nego mlade mačke, stoga je važno prilagoditi 
            njihovu prehranu. Pobrinite se da mačka dobija...
            </p>
          </div>
          <div className='w-[270px]'>
            <div className='pl-6'>
              <h2>Redovna nega dlake i kože </h2>
              <p className=' text-sm'>Mačke su poznate po održavanju čistoće, ali ponekad im je potrebna pomoć. 
              Češljanje i pranje mačje dlake pomažu u sprečavanju nakupljanja mrtve dlake, prljavštine i kožnih problema.
              Takođe je važno osigurati da vaša mačka ima dovoljno vode kako bi se sprečilo isušivanje kože i peruti. 
              Ako primetite bilo kakve promene u kvalitetu dlake ili kože, trebali biste se posavetovati sa veterinarom.
              Čišćenje ušiju: Macke imaju veoma osetljive uši koje se lako inficiraju i skuplja se u njima prljavština. 
              Preporučljivo je redovno čistiti uši mačke mekim...</p>
            </div>
          </div>
          <div className='pl-12'>
            <img src={Macka2} />
          </div>
        </div>
      </div>


      {/* ZDRAVLJE */}
      {/* PRVI RED */}
      <h1 className='text-center text-6xl pt-6 pb-12'>Zdravlje</h1>
      <div className='flex justify-around w-full pt-16 flex-row'>
        <div className='w-[300px]'>
          <img src={Mali} />
          <h2 className='fo'>Mali psi:</h2>
          <p className='text-sm'>
            Mali psi često imaju dugu dlaku koja može lako da se zapetlja i stvori čvoriće. 
            Potrebno ih je četkati redovno, najmanje jednom nedeljno. 
            Takođe, potrebno je redovno čistiti...
          </p>
        </div>
        <div className='w-[300px]'>
          <img src={Labrador} />
          <h2>Srednji psi:</h2>
          <p className='text-sm'>
            Srednji psi, poput labradora, imaju kratku dlaku koja ne zahteva previše održavanja. 
            Ipak, potrebno je četkanje jednom nedeljno i čišćenje ušiju. 
            Nokti se seku redovno, najmanje...
          </p>
        </div>
        <div className='w-[300px]'>
          <img src={Nemacki} />
          <h2>Veliki psi:</h2>
          <p className='text-sm'>
            Veliki psi, poput nemačkih ovčara, imaju dužu dlaku koja zahteva redovno četkanje najmanje jednom nedeljno. 
            Takođe je važno čišćenje ušiju i sečenje noktiju, koje se obično obavljaju...
          </p>
        </div>
        <div className='w-[300px]'>
          <img src={Mladi} />
          <h2>Mladi psi:</h2>
          <p className='text-sm'>
            Mladi psi zahtevaju posebnu negu i pažnju u pogledu higijene kako bi se osiguralo njihovo zdravlje i dobrobit. 
            Osnovna briga uključuje redovno kupanje, čišćenje ušiju...
          </p>
        </div>
        <div className='w-[300px]'>
          <img src={Stari} />
          <h2>Stariji psi:</h2>
          <p className='text-sm'>
            Starijim psima je potrebna dodatna nega kako bi održali svoje zdravlje i udobnost. 
            Njihova koža postaje tanja i suvlja, pa je važno redovito ih četkati i koristiti posebne šampone i ...
          </p>
        </div>
      </div>


      {/* DRUGI RED */}
      <div className='flex justify-center pb-16 pt-16'>
        <div className='flex flex-row items-stretch pl-8 pr-8'>
          <img src={Zdravlje} />
          <div className='flex-col pl-6 border-r-2 pr-3 mr-3'>
            <h2>Zdravlje pasa je takođe veoma važno, a njihove potrebe mogu varirati u zavisnosti od veličine i uzrasta. Evo nekih opštih smernica:</h2>
            <p className='text-sm'>
            <b>Štenci</b> treba da se hrane hranom namenjenom njihovoj starosti i veličini. 
            Treba da se hrane 3-4 puta dnevno, a voda uvek treba da im bude dostupna. 
            Potrebno je da redovno idu na veterinarske preglede kako bi se pratilo njihovo zdravlje i vakcinisali se prema rasporedu vakcinacije.
            <br />
            <b>Mladi psi</b> su aktivni i zahtevaju dosta vežbanja i igre. 
            Potrebno je pratiti ishranu kako bi se obezbedili svi nutrijenti potrebni za rast i razvoj,
            takođe treba da idu na redovne preglede.
            </p>
          </div>
          
          <div className='flex-col w-[90%] mr-3 pl-2'>
            <h2>Važno je napomenuti da se svaki pas, bez obzira na veličinu, treba redovno voditi veterinaru</h2>
            <p className='text-sm'>
              <b>Veliki psi</b>, kao što su npr. nemački ovčari, rotvajleri itd, 
              imaju velike potrebe za kretanjem i zato im je potrebno mnogo prostora i vežbe. Kupanje ovih pasa je 
              malo teže jer su oni puno veći od malih i srednjih pasa, pa im je potrebno više vremena za pranje, sušenje i češljanje krzna.
              Veliki psi su skloniji određenim bolestima koje su povezane s njihovom veličinom i težinom. 
              Njihove potrebe za hranom, vodom, vežbom i spavanjem su takođe mnogo veće od potreba malih pasa. 
            </p>
          </div>
          <img src={Rot} />
        </div>
      </div>
    </div>
  )
}

export default Ponasanje