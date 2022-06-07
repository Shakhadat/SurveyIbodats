import React, { useEffect, useState } from "react";
import styles from "./index.module.sass";
import img1 from "../assets/pro4.jpg";
import img2 from "../assets/pro2.jpg";
import img3 from "../assets/pro3.jpg";
import img4 from "../assets/My_project.jpg";

export default function () {
  const [answers, setAnswers] = useState("");
  const [result, setResult] = useState([]);
  let takeAnswer = ["0a"];
  let data = [
    {
      number: 1,
      a: { val: "quruvchi", ans: "a" },
      b: { val: "loyiha tuzuvchi", ans: "b" },
    },
    {
      number: 2,
      a: { val: "elektron texnik", ans: "a" },
      b: { val: "sanitariya shifokori", ans: "b" },
    },
    {
      number: 3,
      a: { val: "tokar (chilangar)", ans: "a" },
      b: { val: "kotiba", ans: "b" },
    },
    {
      number: 4,
      a: { val: "suratkash", ans: "a" },
      b: { val: "do‘kon mudiri", ans: "b" },
    },
    {
      number: 5,
      a: { val: "chizmakash", ans: "a" },
      b: { val: "dizayner", ans: "b" },
    },
    {
      number: 6,
      a: { val: "faylasuf", ans: "a" },
      b: { val: "psixiatr", ans: "b" },
    },

    {
      number: 7,
      a: { val: "tilshunos", ans: "a" },
      b: { val: "advokat", ans: "b" },
    },
    {
      number: 8,
      a: { val: "ilmiy jurnal muharriri", ans: "a" },
      b: { val: "badiiy jurnal tarjimoni", ans: "b" },
    },
    {
      number: 9,
      a: { val: "pediatr", ans: "a" },
      b: { val: "statist", ans: "b" },
    },
    {
      number: 10,
      a: { val: "sport shifokori", ans: "a" },
      b: { val: "fel'etonchi", ans: "b" },
    },
    {
      number: 11,
      a: { val: "notarius", ans: "a" },
      b: { val: "ta'minotchi", ans: "b" },
    },
    {
      number: 12,
      a: { val: "parmalovchi", ans: "a" },
      b: { val: "hajviy sur'at soluvchi rassom", ans: "b" },
    },
    {
      number: 13,
      a: { val: "siyosiy arbob", ans: "a" },
      b: { val: "yozuvchi", ans: "b" },
    },
    {
      number: 14,
      a: { val: "bog‘bon", ans: "a" },
      b: { val: "meteorolog", ans: "b" },
    },
    {
      number: 15,
      a: { val: "avtobus haydovchi", ans: "a" },
      b: { val: " fel'dsher", ans: "b" },
    },
    {
      number: 16,
      a: { val: " elektron uskunalar muhandisi", ans: "a" },
      b: { val: "kotiba", ans: "b" },
    },
    {
      number: 17,
      a: { val: "bo‘yoqchi", ans: "a" },
      b: { val: "yog‘och yoki metal bo‘yicha rassom", ans: "b" },
    },
    {
      number: 18,
      a: { val: "biolog", ans: "a" },
      b: { val: "ko‘z shifokori", ans: "b" },
    },
    {
      number: 19,
      a: { val: "teleoperator", ans: "a" },
      b: { val: "rejissyor", ans: "b" },
    },
    {
      number: 20,
      a: { val: "gidrolog", ans: "a" },
      b: { val: "taftishchi", ans: "b" },
    },
    {
      number: 21,
      a: { val: "zoolog", ans: "a" },
      b: { val: "bosh zootexnik", ans: "b" },
    },
    {
      number: 22,
      a: { val: "matematik", ans: "a" },
      b: { val: "me'mor", ans: "b" },
    },
    {
      number: 23,
      a: { val: "bolalar xonasi noziri", ans: "a" },
      b: { val: "hisobchi", ans: "b" },
    },
    {
      number: 24,
      a: { val: "o‘qituvchi", ans: "a" },
      b: { val: "kasaba uyushmasi lideri", ans: "b" },
    },
    {
      number: 25,
      a: { val: "tarbiyachi", ans: "a" },
      b: { val: "kulol", ans: "b" },
    },
    {
      number: 26,
      a: { val: "iqtisodchi", ans: "a" },
      b: { val: "bo‘lim mudiri", ans: "b" },
    },
    {
      number: 27,
      a: { val: "korrektor", ans: "a" },
      b: { val: "tanqidchi", ans: "b" },
    },
    {
      number: 28,
      a: { val: "xo‘jalik ishlari mudiri", ans: "a" },
      b: { val: "dirijer", ans: "b" },
    },
    {
      number: 29,
      a: { val: "radiooperator", ans: "a" },
      b: { val: "fizik yadrochi", ans: "b" },
    },
    {
      number: 30,
      a: { val: "sozlovchi", ans: "a" },
      b: { val: "montajchi", ans: "b" },
    },
    {
      number: 31,
      a: { val: "agronom", ans: "a" },
      b: { val: "menejer", ans: "b" },
    },
    {
      number: 32,
      a: { val: "bichuvchi", ans: "a" },
      b: { val: "dekarator", ans: "b" },
    },
    {
      number: 33,
      a: { val: "arxeolog", ans: "a" },
      b: { val: "ekspert", ans: "b" },
    },
    {
      number: 34,
      a: { val: "muzey xodimi", ans: "a" },
      b: { val: "maslahatchi", ans: "b" },
    },
    {
      number: 35,
      a: { val: "olim", ans: "a" },
      b: { val: "akter", ans: "b" },
    },
    {
      number: 36,
      a: { val: "logoped", ans: "a" },
      b: { val: "stenografist", ans: "b" },
    },
    {
      number: 37,
      a: { val: "shifokor", ans: "a" },
      b: { val: "diplomat", ans: "b" },
    },
    {
      number: 38,
      a: { val: "bosh hisobchi", ans: "a" },
      b: { val: "direktor", ans: "b" },
    },
    {
      number: 39,
      a: { val: "shoir", ans: "a" },
      b: { val: "psixolog", ans: "b" },
    },
  ];

  let typeProf = [
    {
      profname: `Aniq yo‘nalgan tip`,
      keeys: [
        "1a",
        "2a",
        "7a",
        "5a",
        "14a",
        "15a",
        "16a",
        "17a",
        "19a",
        "29a",
        "30a",
        "31a",
        "32a",
      ],
    },
    {
      profname: `Aqliy salohiyatli tip`,
      keeys: [
        "1b",
        "6a",
        "7a",
        "8a",
        "14b",
        "18a",
        "20a",
        "21a",
        "22a",
        "29b",
        "33a",
        "34a",
        "35a",
      ],
    },
    {
      profname: `Jamiyatga yo‘nalgan tip`,
      keeys: [
        "2b",
        "6b",
        "9a",
        "10a",
        "15b",
        "18b",
        "23a",
        "24a",
        "25a",
        "34b",
        "36a",
        "37a",
        "39b",
      ],
    },
    {
      profname: `Shartli (atrofidagilar ta'siridagi) tip`,
      keeys: [
        "3b",
        "9b",
        "11a",
        "12a",
        "16b",
        "20b",
        "23b",
        "26a",
        "27a",
        "30b",
        "33b",
        "36b",
        "38a",
      ],
    },
    {
      profname: `Tadbirkorlik tipi`,
      keeys: [
        "4b",
        "7b",
        "11b",
        "13a",
        "19b",
        "21b",
        "24b",
        "26b",
        "28a",
        "31b",
        "35b",
        "37b",
        "38b",
      ],
    },
    {
      profname: `Ijodkorlik (kreativlik) tipi`,
      keeys: [
        "4a",
        "5b",
        "8b",
        "10b",
        "12b",
        "13b",
        "17b",
        "22b",
        "25b",
        "27b",
        "28b",
        "32b",
        "39a",
      ],
    },
  ];
  let tests = "";

  // const handleChange = (e) => {
  //   if (answers == []) {
  //     takeAnswer.push({ num: e.target.name, ans: e.target.value });
  //     setAnswers(takeAnswer);
  //   }
  //   else{
  //     answers.map((pro) => {
  //       if (pro.num != e.target.name) {
  //         takeAnswer.push({ num: e.target.name, ans: e.target.value });
  //       }
  //     });
  //     setAnswers(takeAnswer);
  //   }
  //   console.log("take", answers);
  // };
  const getAnswer = (variant, index) => {
    let boolean = true;
    // let count = 0;
    for (let i = 0; i < takeAnswer.length; i++) {
      console.log(takeAnswer);
      console.log(takeAnswer[i], index);
      if (takeAnswer[i]?.charAt(0) == index) {
        boolean = false;
      }
    }
    if (boolean) {
      console.log("ok");
      takeAnswer = [...takeAnswer, index + variant];
    }
  };

  let ball = [0, 0, 0, 0, 0, 0];
  const showAnswer = () => {
    console.log(takeAnswer);
    tests = takeAnswer.toString().slice(3);
    console.log(tests);
    setAnswers(tests);

    for (let i in takeAnswer) {
      console.log(i);
      typeProf.map((el, index) => {
        if (el.keeys.includes(takeAnswer[i])) {
          ball[index] = ball[index] + 1;
        }
      });
    }
    console.log("ball", ball);
    setResult(ball);
  };
  //max

  let max = result[0];
  let maxIndex = 0;

  for (let i = 1; i < result.length; i++) {
    if (result[i] > max) {
      maxIndex = i;
      max = result[i];
    }
  }
  console.log("maxIn", maxIndex);

  return (
    <div className="container">
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
        <h1 id="statistixs" className="mt-5 text-center">
          Statistik ma'lumotlar
        </h1>
        <table className="table table-striped border my-5">
          <tr className="table-light bg-light px-3">
            <th class="table-light  p-4">solishtirish kriteriyalari</th>
            <th class="table-light  p-4">birinchi sayt:</th>
            <th class="table-light  p-4">ikkinchi sayt:</th>
          </tr>
          <tr className="table-light">
            <td class="table-light  p-4">sayt demosi:</td>
            <td class="table-light  p-4">
              <a href="https://yoshlarbalansi.uz/">yoshlarbalansi.uz</a>
            </td>
            <td class="table-light  p-4">
              <a href="https://yoshlardaftari.uz/">yoshlardaftari.uz</a>
            </td>
          </tr>
          <tr className="table-light p-5">
            <td class="table-light  p-4">sayt maqsadi:</td>
            <td class="table-light  p-4">
              yoshlar bilan ishlashning yangicha boshqaruv mexanizmlarini joriy
              etish, ular bilan ishlashning vertikal tizimini yaratish
            </td>
            <td class="table-light  p-4">
              yoshlar muammolarini bevosita mahallalarda hal etish
            </td>
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
            <td class="table-light  p-4">132(Olmaliq tumani)</td>
            <td class="table-light  p-4">146</td>
          </tr>
          <tr className="table-light bg-light">
            <td class="table-light  p-4">yoshlar soni:</td>
            <td class="table-light  p-4">3458(Olmaliq tumani)</td>
            <td class="table-light  p-4">3803</td>
          </tr>
        </table>

        <h1 className="text-center" id="so'rovnoma">
          So'rovnoma
        </h1>

        <p className="text-right">
          <b>XOLLAND METODIKASI-</b>
          Ushbu metodika asosida amerikalik psixolog olim Y.Xolland taklifi
          bo‘yicha odamlar va ko‘pchilik kasblarni shartli ravishda 6 guruhga
          bo‘lish mumkin (realistik, ijtimoiy, konvensial (shartli), tadbirkor,
          artistik tiplar). Bu metodika asosida yuqorida qayd qilingan tiplarni
          qay biri qay darajada shaxsda namoyon bo‘lishini aniqlash mumkin.
          Kasblarning xususiyati shundaki, shaxs psixologiyasida qaysi bir
          yo‘nalish ko‘proq shakllangan bo‘lsa, shu kasb o‘ziga ko‘proq jalb
          qiladi.
        </p>

        {/* acardion */}
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong>Metodikani o‘tkazish tartibi:</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <p>
                  Metodika savolnomasini o‘quvchilarga berishdan oldin, ularga
                  quyidagi ko‘rsatma beriladi: «Quyidagi juft-juft taklif
                  etilgan - kasblardan o‘zingiz uchun har bir juftdan bittasini
                  tanlang.
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
            {data.map((i) => {
              return (
                <tr key={i.number}>
                  <th scope="row">{i.number}</th>
                  <td>
                    a) {i.a.val}
                    <input
                      onChange={() => getAnswer("a", i.number)}
                      type="radio"
                      value={"a"}
                      name={i.number}
                      className="mx-3"
                    />
                  </td>
                  <td>
                    b) {i.b.val}
                    <input
                      onChange={() => getAnswer("b", i.number)}
                      type="radio"
                      value={"b"}
                      name={i.number}
                      className="mx-3"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button className="btn btn-success m-3" onClick={showAnswer}>
          answer
        </button>
        <p>Javob kaliti: {answers}</p>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Yo'nalish tipi</th>
              <th scope="col">to'plagan ball</th>
            </tr>
          </thead>
          <tbody>
            {result.map((el, index) => {
              return (
                <tr>
                  <th scope="row"></th>
                  <td>#{index + 1} tip</td>
                  <td>{el} ball</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p>
          Maksimal ball:{max}ball, #{maxIndex + 1} tipga tegishli
        </p>
        {/* kalitlar */}
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong>So'rovnomani tahlil qilish kaliti</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">yo'nalish tiplari</th>
                      <th scope="col">mos kalitlar</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Aniq yo‘nalgan tip</td>
                      <td>
                        1a, 2a, 7a, 5a, 14a, 15a,16a, 17a, 19a, 29a, 30a, 31a,
                        32a.
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Aqliy salohiyatli tip</td>
                      <td>
                        1b, 6a, 7a, 8a, 14b, 18a, 20a, 21a, 22a, 29b, 33a, 34a,
                        35a{" "}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Jamiyatga yo‘nalgan tip</td>
                      <td>
                        2b, 6b, 9a, 10a, 15b, 18b, 23a, 24a, 25a, 34b, 36a, 37a,
                        39b{" "}
                      </td>
                    </tr>

                    <tr>
                      <th scope="row">4</th>
                      <td>Shartli (atrofidagilar ta'siridagi) tip</td>
                      <td>
                        3b, 9b, 11a, 12a, 16b, 20b, 23b, 26a, 27a, 30b, 33b,
                        36b, 38a
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>Tadbirkorlik tipi</td>
                      <td>
                        4b, 7b, 11b, 13a, 19b, 21b, 24b, 26b, 28a, 31b, 35b,
                        37b, 38b
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">6</th>
                      <td>Ijodkorlik (kreativlik) tipi</td>
                      <td>
                        4a, 5b, 8b, 10b, 12b, 13b, 17b, 22b, 25b, 27b, 28b, 32b,
                        39a
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* end keys */}

        <h3 className="text-center">Tiplarning tahlili</h3>
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Aniq yo‘nalgan tip
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Bunday tipdagi shaxs ko‘proq konkret, ya'ni aniq ob'ektlar
                (narsalar, asbob uskunalar, hayvonlar, mashinalar) bilan
                shug‘ullanishni afzal ko‘radilar, konkret ob'ekt bilan
                shug‘ullanish, chaqqonlik va aniqlikni yoqtiradi. Odamlar bilan
                muloqotda bo‘lishni yoqtirmaganligi sababli yuqori lavozimlarda
                ishlashni xush ko‘rmaydi. Injener, mexanik, elektrik, agronom,
                bog‘bon, haydovchi va shunga o‘xshash kasblarni tanlaydi.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Aqliy salohiyatli tip
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                {" "}
                Bunday odamlar o‘zining sezgir va boy xayolligi bilan
                boshqalardan ajralib turadi. Ular amaliy mashg‘ulotlarni
                bajarishdan ko‘ra, muammolarni nazariy hal qilish ustida
                o‘ylashni yoqtiradilar. Mavhum kasblarni tanlashadi: biolog,
                botanik, astronom, fizik.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Jamiyatga yo‘nalgan tip
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                {" "}
                Bunday odamlar muammoni yechishda ko‘proq o‘zlarining
                intellektual qobiliyatlaridan ko‘ra shaxsiy hissiyot va
                tuyg‘ularga asoslanadilar. Mexanizmlar bilan shug‘ullanishni
                yoqtirmaydilar. Ko‘proq ta'lim va sog‘liqni saqlash sohasiga
                qiziqadilar: shifokor, psixolog, o‘qituvchi kasblarini
                tanlashlari mumkin, chunki ularda muloqotga kirishish, boshqaruv
                va san'atga ehtiyoj katta.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingFour">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
              >
                Shartli (atrofidagilar ta'siridagi) tip
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingFour"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Bunday odamlarda moslashish salohiyati juda past. Ularga past
                faollikni talab qiluvchi mashg‘ulotlar va mutaxassisliklar hamda
                aniq tizimli faoliyatlar ko‘proq yoqadi. Chunki bunday
                faoliyatlarda aniqlik va noaniqlik belgilab berilgan. Boshqaruv
                faoliyati qo‘l kelmaydi, chunki bunday odamlar masalalarni hal
                qilishda ko‘proq boshqalarning fikriga suyanadilar. Tavsiya
                etilgan kasblar iqtisod, hisobchi, kotiba va hokazo.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingFife">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFife"
                aria-expanded="false"
                aria-controls="flush-collapseFife"
              >
                Tadbirkorlik tipi
              </button>
            </h2>
            <div
              id="flush-collapseFife"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingFife"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Bunday tiplar yuqori lavozimlarda ishlashni yoqtiradilar, Ularga
                qo‘l mehnati, diqqatni bir nuqtaga jalb etuvchi faoliyatlar
                yoqmaydi. Ular quyidagi kasblarni tanlaydilar: direktor,
                teleoperator, artist, diplomat, jurnalist
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingSix">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseSix"
                aria-expanded="false"
                aria-controls="flush-collapseFife"
              >
                Ijodkorlik (kreativlik) tipi
              </button>
            </h2>
            <div
              id="flush-collapseSix"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingSix"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                {" "}
                Bunday insonlarda xayol va intuisiya yaxshi rivojlangan. Ular
                hayotni murakkablashgan holda qabul qiladilar.
                "Erkaklashtirilgan" — sport, avto ta'mirlash kabi ishlar
                qiziqtirmaydi. Ular ijodiy xarakterli mashg‘ulotlarni xush
                ko‘radilar. Ya'ni, musiqa, rassomchilik, adabiyot va shu kabi
                sohalarda yuqori natijalarga erishishlari mumkin.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
