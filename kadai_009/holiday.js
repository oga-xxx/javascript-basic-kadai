const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"];

//for

console.log(holidays);

for (let i = 0; i <= 15; i++) {
  console.log(holidays[i]);
}

// while

let holiday = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"];
let i = 0;

while (i < holiday.length) {
  let holidays = holiday[i];
  console.log(holidays);

  if (holidays === "勤労感謝の日") {
    break;
  }

  i++;
}