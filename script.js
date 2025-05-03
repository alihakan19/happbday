function showMemory(id) {
  const popup = document.getElementById('memoryPopup');
  const content = document.getElementById('memoryContent');

  // Önce temizle
  content.innerHTML = "";

  // Anıya göre içerik
  if (id === "prime") {
  content.innerHTML = `
    <iframe src="https://drive.google.com/file/d/1Au1CK9M7lEh-j1CaVjoqU5YCL0GdW9AA/preview"
            width="500" height="300" allow="autoplay" allowfullscreen
            style="border-radius: 10px; box-shadow: 0 10px 10px rgba(0,0,0,0.3);">
    </iframe>
    
  `;


  } else if (id === "favMem") {
    content.innerText = `
    En sevdiğim anımız... Hmmm... O kadar eğlendik ki seninle, o kadar birbirinden saçma ama bir o kadar da eğlenceli anı paylaştık ki. 
    Aklıma ilk gelen hangisi oldu biliyor musun? İlk cuma çarşımız. O gün eve ağzım kulaklarımda gitmiştim, çok net hatırlıyorum. Bunun tek bir
    sebebi vardı: Daha önce kimseyle böylesine uzun ve mânâlı bir sohbet etmemiştim. Seninle ilk defa tavla oynamıştık, senin bilmediğini öğrenince
    çok şaşırmıştım, "Her şeyi bilen bu kız tavlayı da öğrenmeli." diye düşünmüştüm. Sürekli zarı dışarı atıp duruyordun, seni tavla terimleriyle
    tanıştırma vakti gelmişti: "İp bağlayalım mı?, düşeş, penç-ü se severler güzeli gencüse" vs. Sonra nero'da birer kahve eşliğinde
    (tabii ki sen latte, ben iced americano almıştık) uzuuun uzun sohbetler ettik. Küçüklüklerimizden, film zevklerimizden, ordan burdan konuştuk.
    Belki bugün baktığımızda daha sevgili bile değilken yaşadığımız bu anı benim en sevdiğim ve hep gülümseyerek anımsadığım bir anı olarak kalacak.
    Yeni yaşını elimizden geldiğince benzer anılar ile doldurmak dileğiyle..
    `;
  } else if (id === "favDate") {
    content.innerText = "41.04190941511697, 29.003280610789194";
  } else if (id === "smile") {
    content.innerHTML = `
  <img src="smile.JPG"  style="width: 70%; max-width: 400px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.3);">
  <p style="
    margin-top: 1rem; 
    font-size: 1.3rem; 
    color: #ffffff; 
    font-weight: 600; 
    text-align: center; 
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);">
    Hepsi güzel tabii ama bu fotoğraf her baktığımda içimde kelebekler uçmasına neden oluyor. Âşığım sanırım.
  </p>
`;
  } else if (id === "favFotoğraf"){
    content.innerHTML = `
  <img src="favFotograf.JPG" style="width: 70%; max-width: 400px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.3);">
  <p style="
    margin-top: 1rem; 
    font-size: 1.3rem; 
    color: #ffffff; 
    font-weight: 600; 
    text-align: center; 
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);">
    Bu fotoyu hiç beğenmemiştin çektiğinde. Çıkmaya başlayalı 5 gün olmuştu. Favorim, açık ara.
  </p>
`;



  }
  
  else {
    content.innerText = "Bu anı henüz yüklenmedi.";
  }

  popup.classList.add('active');
}

  
 
  
  
  function closePopup() {
    document.getElementById('memoryPopup').classList.remove('active');
  }
  function showLetter() {
    document.getElementById("letterPopup").classList.add("active");
  }
  
  function closeLetter() {
    document.getElementById("letterPopup").classList.remove("active");
  }
  function openQuiz() {
    document.getElementById("quizPopup").classList.add("active");
    document.getElementById("quizResult").innerText = "";
  }
  
  function closeQuiz() {
    document.getElementById("quizPopup").classList.remove("active");
  }
  
  function quizAnswer(isCorrect) {
    const result = document.getElementById("quizResult");
    if (isCorrect) {
      result.innerText = "Eveeet! O gülüş beni mahvetmişti 😍";
    } else {
      result.innerText = "Hmm güzel cevaptı ama bir şey eksikti :)";
    }
  }
  const quizQuestions = [
    {
      question: "Zeynep hangi çiçekten NEFRET EDER?",
      answers: ["Nergis", "Papatya", "Açelya"],
      correct: 1
    },
    {
      question: "Zeynep hangi kelimeyi ASLA kullanmaz, kullanılmasını sevmez? (bu onlardan sadece biri)",
      answers: ["muvaffakiyet", "anglosakson", "k*smak"],
      correct: 2
    },
    {
      question: "Zeynep’in en sevdiği içecek hangisi?",
      answers: ["Sıcacık bir latte", "DEMLİK dolusu çay", "Maaatcha Banana Milk"],
      correct: 1
    },
    {
      question: "Zeynep'in en sevdiği şarkı?",
      answers: ["Kıraç-100. Yıl Marşı", "Zeynep Yaşar-Aşk Dedikleri", "Neyleyim İstanbulu"],
      correct: 0
    },
    {
      question: "Ve son olarak Zeynep bu site hakkında ne düşünüyor?",
      answers: ["meeeh", "beğendi", "BAYILDI VE SEVGİLİSİNE TEKRAR AŞIK OLDU"],
      correct: 2
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  function startQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById("quizPopup").classList.add("active");
    document.getElementById("quizFeedback").innerText = "";
    document.getElementById("nextBtn").style.display = "none";
    loadQuestion();
  }
  
  function loadQuestion() {
    const q = quizQuestions[currentQuestion];
    document.getElementById("quizQuestion").innerText = q.question;
  
    const answersDiv = document.getElementById("quizAnswers");
    answersDiv.innerHTML = "";
  
    q.answers.forEach((answer, index) => {
      const btn = document.createElement("button");
      btn.innerText = answer;
      btn.onclick = () => checkAnswer(index);
      answersDiv.appendChild(btn);
    });
  }
  
  function checkAnswer(selected) {
    const q = quizQuestions[currentQuestion];
    const feedback = document.getElementById("quizFeedback");
  
    if (selected === q.correct) {
      score++;
      feedback.innerText = "AYNENSS";
    } else {
      feedback.innerText = "O olur mu aşkım?!";
    }
  
    const buttons = document.getElementById("quizAnswers").children;
    for (let btn of buttons) {
      btn.disabled = true;
    }
  
    document.getElementById("nextBtn").style.display = "inline-block";
  }
  
  function nextQuestion() {
    currentQuestion++;
  
    if (currentQuestion >= quizQuestions.length) {
      showFinalResult();
    } else {
      document.getElementById("quizFeedback").innerText = "";
      document.getElementById("nextBtn").style.display = "none";
      loadQuestion();
    }
  }
  
  function showFinalResult() {
    const answersDiv = document.getElementById("quizAnswers");
    const questionText = document.getElementById("quizQuestion");
    const feedback = document.getElementById("quizFeedback");
  
    answersDiv.innerHTML = "";
    document.getElementById("nextBtn").style.display = "none";
  
    if (score <= 2) {
      feedback.innerText = `Skorun ${score}/5 – Testimizden kaldınız, lütfen ilgili alanlara daha iyi çalışınız.`;
    } else if (score <= 4) {
      feedback.innerText = `Skorun ${score}/5 – Testi geçtiniz, acilen sevgilinizi öpünüz.`;
    } else {
      feedback.innerText = `Skorun ${score}/5 – Testi üstün başarıyla geçtiniz, acilen sevgilinizi 10 tane öpünüz.`;
    }
  
    questionText.innerText = "Test Bitti 🎉";
  }
  
  function closeQuiz() {
    document.getElementById("quizPopup").classList.remove("active");
  }
  function startSite() {
    document.getElementById('introScreen').classList.add('hidden');
  }
  function scrollToContent() {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  }
    
