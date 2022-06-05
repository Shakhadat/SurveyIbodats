import React from "react";
import styles from "./index.module.sass";
import img1 from '../assets/pro4.jpg'
import img2 from '../assets/pro2.jpg'
import img3 from '../assets/pro3.jpg'
import img4 from '../assets/My_project.jpg'

export default function () {
  return (
    <div className={styles.container}>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
           <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} class="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img2} class="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img3} class="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={img4} class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div>
        <h1 id="statistixs" className="mt-5 text-center">Statistik ma'lumotlar</h1>
      <table className="table table-striped border my-5">
      <tr className="table-light bg-light px-3">
        <th class="table-light  p-4">solishtirish kriteriyalari</th>
        <th class="table-light  p-4">birinchi sayt:</th>
        <th class="table-light  p-4">ikkinchi sayt:</th>
      </tr>
      <tr className="table-light">
        <td class="table-light  p-4">sayt demosi:</td>
        <td class="table-light  p-4"><a href="https://yoshlarbalansi.uz/">yoshlarbalansi.uz</a></td>
        <td class="table-light  p-4"><a href="https://yoshlardaftari.uz/">yoshlardaftari.uz</a></td>
      </tr>
      <tr className="table-light p-5">
        <td class="table-light  p-4">sayt maqsadi:</td>
        <td class="table-light  p-4">yoshlar bilan ishlashning yangicha boshqaruv mexanizmlarini joriy etish, ular bilan ishlashning vertikal tizimini yaratish</td>
        <td class="table-light  p-4">yoshlar muammolarini bevosita mahallalarda hal etish</td>
      </tr>
      <tr className="table-light bg-light">
        <td class="table-light  p-4">sayt reytingi:</td>
        <td class="table-light  p-4">2000</td>
        <td class="table-light  p-4">1000</td>
      </tr>
      <tr className="table-light">
        <td class="table-light  p-4">SEO optimizatsiyasi:</td>
        <td class="table-light  p-4">bor</td>
        <td class="table-light  p-4">yo'q</td>
      </tr>
      <tr className="table-light bg-light">
        <td class="table-light  p-4">so'rovlar soni:</td>
        <td class="table-light  p-4">birinchi sayt:</td>
        <td class="table-light  p-4">ikkinchi sayt:</td>
      </tr>
      <tr className="table-light">
        <td class="table-light  p-4">ijtimoiy tarmoqlar:</td>
        <td class="table-light  p-4">bor</td>
        <td class="table-light  p-4">bor</td>
      </tr>
      <tr className="table-light bg-light">
        <td class="table-light  p-4">uyushmagan yoshlar soni:</td>
        <td class="table-light  p-4">birinchi sayt:</td>
        <td class="table-light  p-4">ikkinchi sayt:</td>
      </tr>

    </table>

    <h1 className="text-center" id="so'rovnoma">So'rovnoma</h1>
      <p className="text-right"><b>XOLLAND METODIKASI-</b>
        Ushbu metodika asosida amerikalik psixolog olim Y.Xolland taklifi bo‘yicha odamlar va ko‘pchilik kasblarni shartli ravishda 6 guruhga bo‘lish mumkin (realistik, ijtimoiy, konvensial (shartli), tadbirkor, artistik tiplar). Bu metodika asosida yuqorida qayd qilingan tiplarni qay biri qay darajada shaxsda namoyon bo‘lishini aniqlash mumkin. Kasblarning xususiyati shundaki, shaxs psixologiyasida qaysi bir yo‘nalish ko‘proq shakllangan bo‘lsa, shu kasb o‘ziga ko‘proq jalb qiladi.</p>



{/* acardion */}
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong>Metodikani o‘tkazish tartibi:</strong>
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            <p>
             Metodika savolnomasini o‘quvchilarga berishdan oldin, ularga quyidagi ko‘rsatma beriladi: «Quyidagi juft-juft taklif etilgan - kasblardan o‘zingiz  uchun har bir juftdan bittasini tanlang.
            </p>
            </div>
          </div>
        </div>

      </div>
{/* end accardion */}
      <h3 className="text-center">ikkala kasbdan bittasini tanlash shart</h3>
      <table class="table">
       <thead>
         <tr>
           <th scope="col">#</th>
           <th scope="col">birinchi variant</th>
           <th scope="col">ikkinchi variant</th>

         </tr>
       </thead>
       <tbody>
         <tr>
           <th scope="row">1</th>
           <td>a) quruvchi  
             <input type="radio" name="ques1" className="mx-3" />
           </td>
           <td>b) loyiha tuzuvchi
           <input type="radio" name="ques1" className="mx-3" />
           </td>

         </tr>
         <tr>
           <th scope="row">2</th>
           <td>a) elektron texnik 
             <input type="radio" name="ques2" className="mx-3" />
           </td>
           <td>b) sanitariya shifokori
           <input type="radio" name="ques2" className="mx-3" />
           </td>
         </tr>
         <tr>
           <th scope="row">3</th>
           <td>a) tokar (chilangar) 
             <input type="radio" name="ques3" className="mx-3" />
           </td>
           <td>b) kotiba
           <input type="radio" name="ques3" className="mx-3" />
           </td>
         </tr>

         <tr>
           <th scope="row">4</th>
           <td>a) suratkash 
             <input type="radio" name="ques4" className="mx-3" />
           </td>
           <td>b) do‘kon mudiri
           <input type="radio" name="ques4" className="mx-3" />
           </td>
         </tr>

         <tr>
           <th scope="row">5</th>
           <td>a) chizmakash
             <input type="radio" name="ques5" className="mx-3" />
           </td>
           <td>b) dizayner
           <input type="radio" name="ques5" className="mx-3" />
           </td>
         </tr>
         <tr>
           <th scope="row">6</th>
           <td>a) faylasuf
             <input type="radio" name="ques6" className="mx-3" />
           </td>
           <td>b) psixiatr
           <input type="radio" name="ques6" className="mx-3" />
           </td>
         </tr>
         <tr>
           <th scope="row">7</th>
           <td>a) tilshunos
             <input type="radio" name="ques7" className="mx-3" />
           </td>
           <td>b) advokat
           <input type="radio" name="ques7" className="mx-3" />
           </td>
         </tr>
         <tr>
           <th scope="row">8</th>
           <td>a) ilmiy jurnal muharriri
             <input type="radio" name="ques8" className="mx-3" />
           </td>
           <td>b) badiiy jurnal tarjimoni
           <input type="radio" name="ques8" className="mx-3" />
           </td>
         </tr>
         <tr>
           <th scope="row">9</th>
           <td>a) pediatr
             <input type="radio" name="ques9" className="mx-3" />
           </td>
           <td>b) statist
           <input type="radio" name="ques9" className="mx-3" />
           </td>
         </tr>
         <tr>
           <th scope="row">10</th>
           <td>a) sport shifokori	
             <input type="radio" name="ques10" className="mx-3" />
           </td>
           <td>b) fel'etonchi
           <input type="radio" name="ques10" className="mx-3" />
           </td>
         </tr>
         <tr>
           <th scope="row">11</th>
           <td>a) notarius
             <input type="radio" name="ques11" className="mx-3" />
           </td>
           <td>b) ta'minotchi
           <input type="radio" name="ques11" className="mx-3" />
           </td>
         </tr>
         <tr>
           <th scope="row">12</th>
           <td>a) parmalovchi
             <input type="radio" name="ques12" className="mx-3" />
           </td>
           <td>b) hajviy sur'at soluvchi rassom
           <input type="radio" name="ques12" className="mx-3" />
           </td>
         </tr>
         <tr>
           <th scope="row">13</th>
           <td>a) siyosiy arbob
             <input type="radio" name="ques13" className="mx-3" />
           </td>
           <td>b) yozuvchi
           <input type="radio" name="ques13" className="mx-3" />
           </td>
         </tr>
         <tr>
           <th scope="row">14</th>
           <td>a) bog‘bon   
             <input type="radio" name="ques14" className="mx-3" />
           </td>
           <td>b) meteorolog
           <input type="radio" name="ques14" className="mx-3" />
           </td>
         </tr>
         <tr>
           <th scope="row">15</th>
           <td>a) avtobus haydovchi
             <input type="radio" name="ques15" className="mx-3" />
           </td>
           <td>b) fel'dsher
           <input type="radio" name="ques15" className="mx-3" />
           </td>
         </tr>

         <tr>
           <th scope="row">16</th>
           <td>a) elektron uskunalar muhandisi
             <input type="radio" name="ques16" className="mx-3" />
           </td>
           <td>b) kotiba
           <input type="radio" name="ques16" className="mx-3" />
           </td>
         </tr>

         <tr>
           <th scope="row">17</th>
           <td>a) bo‘yoqchi
             <input type="radio" name="ques17" className="mx-3" />
           </td>
           <td>b) yog‘och yoki metal bo‘yicha rassom
           <input type="radio" name="ques17" className="mx-3" />
           </td>
         </tr>

         <tr>
           <th scope="row">18</th>
           <td>a) biolog	
             <input type="radio" name="ques18" className="mx-3" />
           </td>
           <td>b) ko‘z shifokori
           <input type="radio" name="ques18" className="mx-3" />
           </td>
         </tr>

         <tr>
           <th scope="row">19</th>
           <td>a) teleoperator
             <input type="radio" name="ques19" className="mx-3" />
           </td>
           <td>b) rejissyor
           <input type="radio" name="ques19" className="mx-3" />
           </td>
         </tr>

         <tr>
           <th scope="row">20</th>
           <td>a) gidrolog
             <input type="radio" name="ques20" className="mx-3" />
           </td>
           <td>b) taftishchi
           <input type="radio" name="ques20" className="mx-3" />
           </td>
         </tr>

         <tr>
           <th scope="row">21</th>
           <td>a) zoolog
             <input type="radio" name="ques21" className="mx-3" />
           </td>
           <td>b) bosh zootexnik
           <input type="radio" name="ques21" className="mx-3" />
           </td>
         </tr>

         <tr>
           <th scope="row">22</th>
           <td>a) matematik
             <input type="radio" name="ques22" className="mx-3" />
           </td>
           <td>b) me'mor
           <input type="radio" name="ques22" className="mx-3" />
           </td>
         </tr>

         <tr>
           <th scope="row">23</th>
           <td>a) bolalar xonasi noziri
             <input type="radio" name="ques23" className="mx-3" />
           </td>
           <td>b) hisobchi
           <input type="radio" name="ques23" className="mx-3" />
           </td>
         </tr>

         <tr>
           <th scope="row">24</th>
           <td>a) o‘qituvchi
             <input type="radio" name="ques24" className="mx-3" />
           </td>
           <td>b) kasaba uyushmasi lideri
           <input type="radio" name="ques24" className="mx-3" />
           </td>
         </tr>

         <tr>
           <th scope="row">25</th>
           <td>a) tarbiyachi
             <input type="radio" name="ques25" className="mx-3" />
           </td>
           <td>b) kulol
           <input type="radio" name="ques25" className="mx-3" />
           </td>
         </tr>

         <tr>
           <th scope="row">26</th>
           <td>a) iqtisodchi
             <input type="radio" name="ques26" className="mx-3" />
           </td>
           <td>b) bo‘lim mudiri
           <input type="radio" name="ques26" className="mx-3" />
           </td>
         </tr>

         <tr>
           <th scope="row">27</th>
           <td>a) korrektor
             <input type="radio" name="ques27" className="mx-3" />
           </td>
           <td>b) tanqidchi
           <input type="radio" name="ques27" className="mx-3" />
           </td>
         </tr>

         <tr>
           <th scope="row">28</th>
           <td>a) xo‘jalik ishlari mudiri
             <input type="radio" name="ques28" className="mx-3" />
           </td>
           <td>b) dirijer
           <input type="radio" name="ques28" className="mx-3" />
           </td>
         </tr>

         <tr>
           <th scope="row">29</th>
           <td>a) radiooperator
             <input type="radio" name="ques29" className="mx-3" />
           </td>
           <td>b) fizik yadrochi
           <input type="radio" name="ques29" className="mx-3" />
           </td>
         </tr>

         <tr>
           <th scope="row">30</th>
           <td>a) sozlovchi
             <input type="radio" name="ques30" className="mx-3" />
           </td>
           <td>b) montajchi
           <input type="radio" name="ques30" className="mx-3" />
           </td>
         </tr>

         <tr>
           <th scope="row">31</th>
           <td>a) agronom
             <input type="radio" name="ques31" className="mx-3" />
           </td>
           <td>b) menejer
           <input type="radio" name="ques31" className="mx-3" />
           </td>
         </tr>

         <tr>
           <th scope="row">32</th>
           <td>a) bichuvchi
             <input type="radio" name="ques32" className="mx-3" />
           </td>
           <td>b) dekarator
           <input type="radio" name="ques32" className="mx-3" />
           </td>
         </tr>

         <tr>
           <th scope="row">33</th>
           <td>a) arxeolog
             <input type="radio" name="ques33" className="mx-3" />
           </td>
           <td>b) ekspert
           <input type="radio" name="ques33" className="mx-3" />
           </td>
         </tr>

         <tr>
           <th scope="row">34</th>
           <td>a) muzey xodimi
             <input type="radio" name="ques34" className="mx-3" />
           </td>
           <td>b) maslahatchi
           <input type="radio" name="ques34" className="mx-3" />
           </td>
         </tr>

         <tr>
           <th scope="row">35</th>
           <td>a) olim
             <input type="radio" name="ques35" className="mx-3" />
           </td>
           <td>b) aktyor
           <input type="radio" name="ques35" className="mx-3" />
           </td>
         </tr>

         <tr>
           <th scope="row">36</th>
           <td>a) logoped
             <input type="radio" name="ques36" className="mx-3" />
           </td>
           <td>b) stenografist
           <input type="radio" name="ques36" className="mx-3" />
           </td>
         </tr>

         <tr>
           <th scope="row">37</th>
           <td>a) shifokor
             <input type="radio" name="ques37" className="mx-3" />
           </td>
           <td>b) diplomat
           <input type="radio" name="ques37" className="mx-3" />
           </td>
         </tr>

         <tr>
           <th scope="row">38</th>
           <td>a) bosh hisobchi
             <input type="radio" name="ques38" className="mx-3" />
           </td>
           <td>b) direktor
           <input type="radio" name="ques38" className="mx-3" />
           </td>
         </tr>

         <tr>
           <th scope="row">39</th>
           <td>a) shoir
             <input type="radio" name="ques39" className="mx-3" />
           </td>
           <td>b) psixolog
           <input type="radio" name="ques39" className="mx-3" />
           </td>
         </tr>

      
    

    
  </tbody>
      </table>

    <h3 className="text-center">Tiplarning tahlili</h3>
      <div class="accordion accordion-flush" id="accordionFlushExample">
      <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      Aniq yo‘nalgan tip
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
      Bunday tipdagi shaxs ko‘proq konkret, ya'ni aniq ob'ektlar (narsalar, asbob uskunalar, hayvonlar, mashinalar) bilan shug‘ullanishni afzal ko‘radilar, konkret ob'ekt bilan shug‘ullanish, chaqqonlik va aniqlikni yoqtiradi. Odamlar bilan muloqotda bo‘lishni yoqtirmaganligi sababli yuqori lavozimlarda ishlashni xush ko‘rmaydi. Injener, mexanik, elektrik, agronom, bog‘bon, haydovchi va shunga o‘xshash kasblarni tanlaydi.
      </div>
  </div>
      </div>
      <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      Aqliy salohiyatli tip
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"> Bunday odamlar o‘zining sezgir va boy xayolligi bilan boshqalardan ajralib turadi. Ular amaliy mashg‘ulotlarni bajarishdan ko‘ra, muammolarni nazariy hal qilish ustida o‘ylashni yoqtiradilar. Mavhum kasblarni tanlashadi: biolog, botanik, astronom, fizik.</div>
  </div>
      </div>
      <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      Jamiyatga yo‘nalgan tip
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"> Bunday odamlar muammoni yechishda ko‘proq o‘zlarining intellektual qobiliyatlaridan ko‘ra shaxsiy hissiyot va tuyg‘ularga asoslanadilar. Mexanizmlar bilan shug‘ullanishni yoqtirmaydilar. Ko‘proq ta'lim va sog‘liqni saqlash sohasiga qiziqadilar: shifokor, psixolog, o‘qituvchi kasblarini tanlashlari mumkin, chunki ularda muloqotga kirishish, boshqaruv va san'atga ehtiyoj katta.</div>
  </div>
      </div>

      <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
      Shartli (atrofidagilar ta'siridagi) tip
      </button>
    </h2>
    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Bunday odamlarda moslashish salohiyati juda past. Ularga past faollikni talab qiluvchi mashg‘ulotlar va mutaxassisliklar hamda aniq tizimli faoliyatlar ko‘proq yoqadi. Chunki bunday faoliyatlarda aniqlik va noaniqlik belgilab berilgan. Boshqaruv faoliyati qo‘l kelmaydi, chunki bunday odamlar masalalarni hal qilishda ko‘proq boshqalarning fikriga suyanadilar. Tavsiya etilgan kasblar iqtisod, hisobchi, kotiba va hokazo.</div>
</div>
      </div>
      <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingFife">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFife" aria-expanded="false" aria-controls="flush-collapseFife">
      Tadbirkorlik tipi
      </button>
    </h2>
    <div id="flush-collapseFife" class="accordion-collapse collapse" aria-labelledby="flush-headingFife" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Bunday tiplar yuqori lavozimlarda ishlashni yoqtiradilar, Ularga qo‘l mehnati, diqqatni bir nuqtaga jalb etuvchi faoliyatlar yoqmaydi. Ular quyidagi kasblarni tanlaydilar: direktor, teleoperator, artist, diplomat, jurnalist</div>
    </div>
      </div>

      <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingSix">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseFife">
      Ijodkorlik (kreativlik) tipi
      </button>
    </h2>
    <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body"> Bunday insonlarda xayol va intuisiya yaxshi rivojlangan. Ular hayotni murakkablashgan holda qabul qiladilar. "Erkaklashtirilgan" — sport, avto ta'mirlash kabi ishlar qiziqtirmaydi. Ular ijodiy xarakterli mashg‘ulotlarni xush ko‘radilar. Ya'ni, musiqa, rassomchilik, adabiyot va shu kabi sohalarda yuqori natijalarga erishishlari mumkin.</div>
</div>
      </div>
      </div>
    </div>
</div>
  );
}
