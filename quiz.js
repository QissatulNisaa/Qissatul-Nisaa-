// Quiz Questions
const quizQuestionsByStory = {

  hannah: {
  easy: [
    {
      question: "Who was the wife of ‘Imran mentioned in Surah Ali ‘Imran?",
      answers: [
        "Hannah binti Faqudz",
        "Asiyah binti Muzahim",
        "Maryam binti ‘Imran",
        "Sarah binti Haran"
      ],
      correct: 0
    },
    {
      question: "In which surah is the vow of the wife of ‘Imran recorded?",
      answers: [
        "Surah Maryam",
        "Surah An-Nisa’",
        "Surah Ali ‘Imran",
        "Surah Al-Qasas"
      ],
      correct: 2
    }
  ],

  medium: [
    {
      question: "Why did Hannah dedicate her unborn child to Allah before knowing the child’s gender?",
      answers: [
        "She expected the child to become a prophet",
        "She wanted social recognition",
        "Her vow was based on sincere devotion without attachment to outcome",
        "She was pressured by society"
      ],
      correct: 2
    },
    {
      question: "What does Hannah’s reaction after giving birth to a daughter reflect?",
      answers: [
        "Rejection of her vow",
        "Adjustment of intention",
        "Consistency in fulfilling her vow despite unexpected outcome",
        "Disappointment toward divine decree"
      ],
      correct: 2
    },
    {
      question: "Why was Hannah’s vow considered unusual in her society?",
      answers: [
        "Women could not make vows",
        "Female children were excluded from sacred service",
        "Only prophets could serve in sanctuaries",
        "Children were never dedicated to worship"
      ],
      correct: 1
    }
  ],

  hard: [
    {
      question: `Based on the Qur’anic verse below, which phrase most clearly shows that Hannah’s vow was made purely for Allah?

  ﴿رَبِّ إِنِّي نَذَرْتُ لَكَ مَا فِي بَطْنِي مُحَرَّرًا فَتَقَبَّلْ مِنِّي ۖ إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ﴾
  (Surah Ali ‘Imran 3:35)`,
      answers: [
        "رَبِّ إِنِّي نَذَرْتُ لَكَ مَا فِي بَطْنِي",
        "مُحَرَّرًا",
        "فَتَقَبَّلْ مِنِّي",
        "إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ"
      ],
      correct: 1
    },
    {
      question: "Why did Hannah’s vow remain valid despite Maryam being female?",
      answers: [
        "Because Maryam later became famous",
        "Because social rules were changed",
        "Because intention, not function, defines validity",
        "Because Zakariyya accepted her"
      ],
      correct: 2
    }
  ]
},

maryam: {
  easy: [
    {
      question: "Who is the only woman explicitly named in the Qur’an?",
      answers: [
        "Asiyah binti Muzahim, the wife of Pharaoh",
        "Maryam binti ‘Imran, the mother of Prophet ‘Isa",
        "Sarah binti Haran, the wife of Prophet Ibrahim",
        "Hajar, the mother of Prophet Ismail"
      ],
      correct: 1
    },
    {
      question: "Who is the son of Maryam according to the Qur’an?",
      answers: [
        "‘Isa, a prophet born through a miraculous decree",
        "Yahya, a prophet born to a righteous woman",
        "Musa, a prophet raised within Pharaoh’s palace",
        "Ismail, a prophet associated with sacrifice"
      ],
      correct: 0
    }
  ],

  medium: [
    {
      question: "Why did Maryam withdraw from her family to a secluded place according to the Qur’anic narrative?",
      answers: [
        "To distance herself from society due to increased spiritual responsibility",
        "To protect her spiritual focus and maintain devotion in privacy",
        "To follow a spiritual practice inherited from previous righteous women",
        "To avoid public interaction during an intense phase of worship"
      ],
      correct: 1
    },
    {
      question: "What does Maryam’s response to the appearance of Jibril most clearly demonstrate?",
      answers: [
        "Immediate fear that transformed into spiritual submission",
        "Reliance on Allah combined with firm commitment to moral boundaries",
        "Instinctive rejection of any unknown presence",
        "Emotional hesitation followed by verbal caution"
      ],
      correct: 1
    },
    {
      question: "Why did Maryam question how she could have a child despite receiving divine news?",
      answers: [
        "She struggled to reconcile divine power with social reality",
        "She sought clarification while affirming her lifelong chastity",
        "She feared public accusation and misunderstanding",
        "She questioned the process rather than the divine source"
      ],
      correct: 1
    }
  ],

  hard: [
    {
      question: `Based on the Qur’anic verse below, what is established about Maryam BEFORE any public accusation occurs?

      ﴿وَإِذْ قَالَتِ الْمَلَائِكَةُ يَا مَرْيَمُ إِنَّ اللَّهَ اصْطَفَاكِ وَطَهَّرَكِ وَاصْطَفَاكِ عَلَىٰ نِسَاءِ الْعَالَمِينَ﴾
      (Surah Ali ‘Imran 3:42)`,
      
      answers: [
        "Maryam’s honor would later be defended through a miracle",
        "Maryam’s spiritual status was divinely established prior to any trial",
        "Maryam’s purity depended on her response to future accusations",
        "Maryam’s selection was a consequence of her later sacrifice"
      ],
      correct: 1
    },
    {
      question: `What central theological principle is emphasized in the verse below regarding Maryam’s experience?

      ﴿قَالَ كَذَٰلِكِ قَالَ رَبُّكِ هُوَ عَلَيَّ هَيِّنٌ وَلِنَجْعَلَهُ آيَةً لِّلنَّاسِ وَرَحْمَةً مِّنَّا وَكَانَ أَمْرًا مَّقْضِيًّا﴾
      (Surah Maryam 19:21)`,
      
      answers: [
        "Divine will operates within the limits of natural law",
        "Extraordinary trials signify divine displeasure",
        "Allah’s decree transcends human logic and physical causality",
        "Spiritual elevation eliminates personal hardship"
      ],
      correct: 2
    }
  ]
},

sarah: {
  easy: [
    {
      question: "Who was the wife of Prophet Ibrahim mentioned in the Qur’anic narrative?",
      answers: [
        "Hajar, who accompanied Ibrahim to Makkah",
        "Sarah, who shared the journey of migration with Ibrahim",
        "Asiyah, who lived during the time of Musa",
        "Maryam, who was chosen among women"
      ],
      correct: 1
    },
    {
      question: "Which son was born to Sarah according to the Qur’an?",
      answers: [
        "Ismail, who was born during Ibrahim’s early mission",
        "Ishaq, who was granted despite old age",
        "Ya‘qub, who continued the prophetic lineage",
        "Yahya, who was born through divine mercy"
      ],
      correct: 1
    }
  ],

  medium: [
    {
      question: "Why is Sarah described as standing during the visit of the angels in Surah Hud?",
      answers: [
        "To indicate her role in observing the guests",
        "To show her active participation in hospitality",
        "To distinguish her from the seated guests",
        "To symbolize readiness for divine communication"
      ],
      correct: 1
    },
    {
      question: "What does Sarah’s laughter upon hearing the glad tidings most accurately represent?",
      answers: [
        "A reaction of disbelief toward divine power",
        "A human expression of amazement at an unexpected decree",
        "A sign of emotional weakness caused by old age",
        "A response influenced by social assumptions about fertility"
      ],
      correct: 1
    },
    {
      question: "Why is Sarah considered a foundational figure in the prophetic lineage?",
      answers: [
        "Because she directly raised multiple prophets",
        "Because her son and grandson continued the chain of prophethood",
        "Because she migrated before all other believers",
        "Because revelation was sent directly to her"
      ],
      correct: 1
    }
  ],

  hard: [
    {
      question: `Based on the Qur’anic verse below, what divine news was given to Sarah?

      ﴿فَبَشَّرْنَاهَا بِإِسْحَاقَ وَمِنْ وَرَاءِ إِسْحَاقَ يَعْقُوبَ﴾
      (Surah Hud 11:71)`,
      
      answers: [
        "That she would be honored with righteous descendants in general",
        "That she would give birth to Ishaq and later have a grandson named Ya‘qub",
        "That her family would be remembered through Ibrahim alone",
        "That her household would receive divine blessings without lineage continuity"
      ],
      correct: 1
    },
    {
      question: `What theological principle is emphasized in the angels’ response to Sarah’s amazement?

      ﴿قَالُوا أَتَعْجَبِينَ مِنْ أَمْرِ اللَّهِ ۖ رَحْمَتُ اللَّهِ وَبَرَكَاتُهُ عَلَيْكُمْ أَهْلَ الْبَيْتِ ۚ إِنَّهُ حَمِيدٌ مَجِيدٌ﴾
      (Surah Hud 11:73)`,
      
      answers: [
        "Divine mercy operates only within biological norms",
        "Human surprise indicates a deficiency in faith",
        "Allah’s decree and mercy transcend human limitation and expectation",
        "Blessings are granted solely due to personal sacrifice"
      ],
      correct: 2
    }
  ]
},

balqis: {
  easy: [
    {
      question: "Who was the Queen of Sheba according to the Qur’anic narrative?",
      answers: [
        "A prophetess appointed to lead her people",
        "A female ruler who governed the kingdom of Sheba",
        "A wife of Prophet Sulayman",
        "A leader of Bani Isra’il"
      ],
      correct: 1
    },
    {
      question: "Which prophet did Queen Balqis interact with in the Qur’an?",
      answers: [
        "Prophet Dawud, known for his kingdom",
        "Prophet Musa, who confronted Pharaoh",
        "Prophet Sulayman, who ruled with wisdom",
        "Prophet Ibrahim, who called to monotheism"
      ],
      correct: 2
    }
  ],

  medium: [
    {
      question: "Why did Queen Balqis consult her advisors after receiving the letter from Prophet Sulayman?",
      answers: [
        "She lacked authority to decide independently",
        "She wished to delay responding to the message",
        "She practiced consultative leadership despite holding full power",
        "She feared immediate military confrontation"
      ],
      correct: 2
    },
    {
      question: "What does Queen Balqis’s statement about kings entering cities reveal about her political insight?",
      answers: [
        "She believed conquest always leads to prosperity",
        "She understood that war often destroys social order and dignity",
        "She feared losing her throne to external powers",
        "She viewed military strength as the primary source of legitimacy"
      ],
      correct: 1
    },
    {
      question: "Why did Queen Balqis choose to send gifts to Prophet Sulayman before meeting him?",
      answers: [
        "To demonstrate her kingdom’s wealth and power",
        "To seek forgiveness for her people’s beliefs",
        "To test whether Sulayman was a worldly ruler or a divinely guided prophet",
        "To secure a political alliance through diplomacy"
      ],
      correct: 2
    }
  ],

  hard: [
    {
      question: `Based on the Qur’anic verse below, which leadership quality of Queen Balqis is most clearly demonstrated?

      ﴿قَالَتْ يَا أَيُّهَا الْمَلَأُ أَفْتُونِي فِي أَمْرِي مَا كُنتُ قَاطِعَةً أَمْرًا حَتَّىٰ تَشْهَدُونِ﴾
      (Surah An-Naml 27:32)`,
      
      answers: [
        "Dependence on others due to lack of confidence",
        "Commitment to consultation despite sovereign authority",
        "Hesitation and inability to decide independently",
        "Fear of rebellion among her people"
      ],
      correct: 1
    },
    {
      question: `What central moral lesson is emphasized by Queen Balqis’s declaration below?

      ﴿رَبِّ إِنِّي ظَلَمْتُ نَفْسِي وَأَسْلَمْتُ مَعَ سُلَيْمَانَ لِلَّهِ رَبِّ الْعَالَمِينَ﴾
      (Surah An-Naml 27:44)`,
      
      answers: [
        "Political authority guarantees spiritual truth",
        "Submission is only valid after loss of power",
        "True wisdom lies in recognizing truth and submitting to it",
        "Leadership requires abandoning intellectual independence"
      ],
      correct: 2
    }
  ]
},

ummuMusa: {
  easy: [
    {
      question: "Who is referred to as the mother of Musa in the Qur’anic narrative?",
      answers: [
        "A woman named explicitly in the Qur’an as a prophetess",
        "A believing woman identified by her maternal role to Musa",
        "The wife of Pharaoh who raised Musa",
        "A noblewoman from the family of Ibrahim"
      ],
      correct: 1
    },
    {
      question: "What action did the mother of Musa take to protect her infant from Pharaoh’s decree?",
      answers: [
        "She secretly migrated to another land",
        "She hid Musa permanently among her relatives",
        "She placed Musa in a chest and cast him into the river",
        "She surrendered Musa to the palace for safety"
      ],
      correct: 2
    }
  ],

  medium: [
    {
      question: "What type of guidance did Allah grant to the mother of Musa according to Surah Al-Qasas?",
      answers: [
        "Prophetic revelation delivered through an angel",
        "Rational insight developed through experience",
        "Divine inspiration placed directly into her heart",
        "Guidance received through community elders"
      ],
      correct: 2
    },
    {
      question: "Why is the mother of Musa’s decision to place her child in the river considered an act of tawakkul?",
      answers: [
        "Because it removed all personal responsibility",
        "Because it combined obedience with decisive action",
        "Because it guaranteed immediate safety",
        "Because it eliminated emotional struggle"
      ],
      correct: 1
    },
    {
      question: "Why did the mother of Musa almost reveal his identity according to the Qur’an?",
      answers: [
        "She feared social punishment from Pharaoh’s people",
        "Her heart became overwhelmed with grief and longing",
        "She doubted the divine promise",
        "She was pressured by her family"
      ],
      correct: 1
    }
  ],

  hard: [
    {
      question: `Which divine instruction is given to the mother of Musa in the verse below?

      ﴿أَنْ أَرْضِعِيهِ فَإِذَا خِفْتِ عَلَيْهِ فَأَلْقِيهِ فِي الْيَمِّ وَلَا تَخَافِي وَلَا تَحْزَنِي ۖ إِنَّا رَادُّوهُ إِلَيْكِ وَجَاعِلُوهُ مِنَ الْمُرْسَلِينَ﴾
      (Surah Al-Qasas 28:7)`,
      
      answers: [
        "To abandon Musa entirely and rely solely on Allah",
        "To hide Musa without taking further action",
        "To nurse Musa, then act decisively while trusting Allah’s promise",
        "To confront Pharaoh’s decree openly"
      ],
      correct: 2
    },
    {
      question: `What core theological meaning is conveyed by the verse stating that Allah strengthened the heart of the mother of Musa?

      ﴿وَأَصْبَحَ فُؤَادُ أُمِّ مُوسَىٰ فَارِغًا ۖ إِن كَادَتْ لَتُبْدِي بِهِ لَوْلَا أَن رَّبَطْنَا عَلَىٰ قَلْبِهَا لِتَكُونَ مِنَ الْمُؤْمِنِينَ﴾
      (Surah Al-Qasas 28:10)`,
      
      answers: [
        "Allah removed all emotional pain from her heart",
        "Allah granted inner strength to remain obedient and conceal the truth",
        "Allah distanced her emotionally from her child",
        "Allah replaced fear with complete certainty"
      ],
      correct: 1
    }
  ]
},

twowomenmadyan: {
  easy: [
    {
      question: "Who were the two women of Madyan mentioned in the Qur’an?",
      answers: [
        "Two wives of Prophet Musa during his early life",
        "Two daughters of an elderly man identified by scholars as Shuʿayb",
        "Two women appointed to lead the people of Madyan",
        "Two travelers who assisted Musa during his journey"
      ],
      correct: 1
    },
    {
      question: "Why did the two women come to the well of Madyan?",
      answers: [
        "To trade livestock with other shepherds",
        "To observe the social practices of the town",
        "To water their flocks on behalf of their elderly father",
        "To seek protection from the townspeople"
      ],
      correct: 2
    }
  ],

  medium: [
    {
      question: "Why did the two women wait until the shepherds finished watering their flocks?",
      answers: [
        "They lacked physical strength to compete with the men",
        "They were forbidden by law from approaching the well",
        "They observed dignity and social boundaries in a public setting",
        "They were unfamiliar with the customs of Madyan"
      ],
      correct: 2
    },
    {
      question: "What does the Qur’anic description of one woman ‘walking with modesty’ most clearly convey?",
      answers: [
        "Fear of interacting with strangers",
        "A lack of confidence in public spaces",
        "Controlled conduct guided by moral awareness",
        "Reluctance to communicate openly"
      ],
      correct: 2
    },
    {
      question: "Why did one of the women advise her father to hire Musa?",
      answers: [
        "She was impressed by Musa’s physical strength alone",
        "She wished to relieve herself from work at the well",
        "She recognized Musa’s strength and trustworthiness through observation",
        "She assumed Musa belonged to a noble lineage"
      ],
      correct: 2
    }
  ],

  hard: [
    {
      question: `Based on the Qur’anic verse below, what reason do the two women give for their presence at the well?

      ﴿قَالَتَا لَا نَسْقِي حَتَّىٰ يُصْدِرَ الرِّعَاءُ وَأَبُونَا شَيْخٌ كَبِيرٌ﴾
      (Surah Al-Qasas 28:23)`,
      
      answers: [
        "They were fulfilling filial duty while maintaining propriety",
        "They were prohibited from mixing with men under tribal law",
        "They lacked the skill required to water livestock",
        "They were waiting for payment from the shepherds"
      ],
      correct: 0
    },
    {
      question: `What ethical principle is emphasized in the statement below?

      ﴿إِنَّ خَيْرَ مَنِ اسْتَأْجَرْتَ الْقَوِيُّ الْأَمِينُ﴾
      (Surah Al-Qasas 28:26)`,
      
      answers: [
        "Physical ability is more important than moral character",
        "Trustworthiness alone is sufficient for responsibility",
        "Strength combined with integrity defines suitability",
        "Social reputation determines worthiness"
      ],
      correct: 2
    }
  ]
},

asiyah: {
  easy: [
    {
      question: "Who was Asiyah binti Muzahim according to the Qur’anic narrative?",
      answers: [
        "A believing woman from the Children of Israel",
        "The wife of Pharaoh who believed in Allah",
        "A woman who openly led a revolt against Pharaoh",
        "A prophetess sent to guide Egypt"
      ],
      correct: 1
    },
    {
      question: "In what environment did Asiyah maintain her faith in Allah?",
      answers: [
        "A society guided by prophets and revelation",
        "A palace governed by tyranny and disbelief",
        "A hidden community of believers",
        "A land free from political oppression"
      ],
      correct: 1
    }
  ],

  medium: [
    {
      question: "What does Asiyah’s defense of infant Musa most clearly reveal about her character?",
      answers: [
        "Emotional attachment without moral reasoning",
        "Strategic political calculation within the palace",
        "Compassion guided by ethical conviction",
        "Fear of Pharaoh’s future regret"
      ],
      correct: 2
    },
    {
      question: "Why does the Qur’an present Asiyah as an example for believers?",
      answers: [
        "Because of her royal status and authority",
        "Because her faith remained firm despite extreme oppression",
        "Because she migrated away from disbelief",
        "Because she publicly confronted Pharaoh’s rule"
      ],
      correct: 1
    },
    {
      question: "How did Asiyah view worldly power in relation to the Hereafter?",
      answers: [
        "As a necessary tool for spiritual success",
        "As equal in value to faith and obedience",
        "As inferior to closeness with Allah",
        "As a reward for loyalty to authority"
      ],
      correct: 2
    }
  ],

  hard: [
    {
      question: `What central spiritual priority is expressed in Asiyah’s supplication below?

      ﴿رَبِّ ابْنِ لِي عِندَكَ بَيْتًا فِي الْجَنَّةِ وَنَجِّنِي مِن فِرْعَوْنَ وَعَمَلِهِ وَنَجِّنِي مِنَ الْقَوْمِ الظَّالِمِينَ﴾
      (Surah At-Tahrim 66:11)`,
      
      answers: [
        "Desire for political freedom and safety",
        "Rejection of Pharaoh’s authority and disbelief",
        "Prioritization of divine proximity over worldly security",
        "Hope for protection through social reform"
      ],
      correct: 2
    },
    {
      question: `In Surah Al-Qasas (28:9), Asiyah says: “Do not kill him; perhaps he may benefit us, or we may take him as a son.”
      What ethical quality is MOST clearly demonstrated in this statement?`,
      
      answers: [
        "Strategic foresight in palace politics",
        "Desire to challenge Pharaoh indirectly",
        "Compassion rooted in respect for innocent life",
        "Concern for dynastic continuity"
      ],
      correct: 2
    }
  ]
}
};

// Quiz State
let currentQuestionIndex = 0;
let score = 0;
let quizTimer;
let timeLeft = 30;
let playerNameValue = "";
let shuffledQuestions = [];
let activeQuestions = [];

function startQuiz() {

  const story = document.getElementById('storySelect').value;
  let selectedQuestions = [];

  Object.keys(quizQuestionsByStory).forEach(key => {
    if (story === 'all' || key === story) {
      const q = quizQuestionsByStory[key];
      selectedQuestions.push(
        ...q.easy,
        ...q.medium,
        ...q.hard
      );
    }
  });

  if (selectedQuestions.length === 0) {
    alert("No questions available.");
    return;
  }

  activeQuestions = selectedQuestions.sort(() => Math.random() - 0.5);

  playerNameValue = document.getElementById('playerName').value.trim();
  if (!playerNameValue) {
    alert("Please enter your name!");
    return;
  }

  document.getElementById('quizStart').classList.add('hidden');
  document.getElementById('quizGame').classList.remove('hidden');

  currentQuestionIndex = 0;
  score = 0;
  shuffledQuestions = activeQuestions;

  document.getElementById('totalQuestions').textContent = shuffledQuestions.length;
  loadQuestion();
}

function loadQuestion() {
  if (currentQuestionIndex >= shuffledQuestions.length) {
    showResults();
    return;
  }
  
  const question = shuffledQuestions[currentQuestionIndex];
  
  document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
  document.getElementById('currentScore').textContent = score;
  
  const progress = ((currentQuestionIndex) / shuffledQuestions.length) * 100;
  document.getElementById('progressBar').style.width = progress + '%';
  
  document.getElementById('questionText').textContent = question.question;
  
  const answersContainer = document.getElementById('answersContainer');
  answersContainer.innerHTML = '';
  
  question.answers.forEach((answer, index) => {
    const button = document.createElement('button');
    button.className = 'answer-btn bg-white border-2 border-purple-300 hover:border-purple-500 text-gray-800 py-4 px-6 rounded-xl font-medium transition transform hover:scale-105 text-left';
    button.textContent = answer;
    button.onclick = () => checkAnswer(index, question.correct);
    answersContainer.appendChild(button);
  });
  
  document.getElementById('feedbackMessage').classList.add('hidden');
  
  timeLeft = 30;
  document.getElementById('timer').textContent = timeLeft;
  
  clearInterval(quizTimer);
  quizTimer = setInterval(() => {
    timeLeft--;
    document.getElementById('timer').textContent = timeLeft;
    
    if (timeLeft <= 0) {
      clearInterval(quizTimer);
      checkAnswer(-1, question.correct);
    }
  }, 1000);
}

function checkAnswer(selected, correct) {
  clearInterval(quizTimer);
  
  const buttons = document.querySelectorAll('.answer-btn');
  buttons.forEach((btn, index) => {
    btn.disabled = true;
    if (index === correct) {
      btn.classList.remove('border-purple-300');
      btn.classList.add('bg-green-500', 'text-white', 'border-green-500');
    } else if (index === selected) {
      btn.classList.remove('border-purple-300');
      btn.classList.add('bg-red-500', 'text-white', 'border-red-500', 'shake');
    }
  });
  
  const feedbackDiv = document.getElementById('feedbackMessage');
  feedbackDiv.classList.remove('hidden');
  
  if (selected === correct) {
    score++;
    playSound(true);
    feedbackDiv.className = 'mt-6 p-4 rounded-lg text-center font-bold bg-green-100 text-green-800';
    feedbackDiv.textContent = '✅ Correct! Well done!';
  } else {
    playSound(false);
    feedbackDiv.className = 'mt-6 p-4 rounded-lg text-center font-bold bg-red-100 text-red-800';
    feedbackDiv.textContent = selected === -1 ? '⏰ Time\'s up!' : '❌ Incorrect. The correct answer is highlighted.';
  }
  
  setTimeout(() => {
    currentQuestionIndex++;
    loadQuestion();
  }, 2000);
}

function showResults() {
  document.getElementById('quizGame').classList.add('hidden');
  document.getElementById('quizResults').classList.remove('hidden');
  
  const percentage = (score / shuffledQuestions.length) * 100;
  
  document.getElementById('finalScore').textContent = `${score} / ${shuffledQuestions.length} (${percentage.toFixed(0)}%)`;
  
  let badge = '';
  let badgeText = '';
  
  if (percentage >= 80) {
    badge = '🏅';
    badgeText = 'Gold Badge - Excellent Knowledge!';
    createConfetti();
  } else if (percentage >= 60) {
    badge = '🥈';
    badgeText = 'Silver Badge - Good Job!';
    createConfetti();
  } else if (percentage >= 40) {
    badge = '🥉';
    badgeText = 'Bronze Badge - Keep Learning!';
  } else {
    badge = '📚';
    badgeText = 'Keep Studying - You Can Do Better!';
  }
  
  document.getElementById('badgeIcon').textContent = badge;
  document.getElementById('badgeText').textContent = badgeText;
  
  saveScore(playerNameValue, score, shuffledQuestions.length);
  displayLeaderboard();
}

// Create confetti effect
function createConfetti() {
  const colors = ['#a855f7', '#ec4899', '#c084fc', '#f9a8d4', '#fbbf24', '#34d399'];
  const confettiCount = 50;
  
  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.left = Math.random() * 100 + '%';
    confetti.style.top = '-10px';
    confetti.style.width = Math.random() * 10 + 5 + 'px';
    confetti.style.height = Math.random() * 10 + 5 + 'px';
    confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
    confetti.style.zIndex = '9999';
    confetti.style.pointerEvents = 'none';
    
    document.body.appendChild(confetti);
    
    const animation = confetti.animate([
      { 
        transform: 'translate(0, 0) rotate(0deg)',
        opacity: 1
      },
      { 
        transform: `translate(${Math.random() * 400 - 200}px, ${window.innerHeight + 100}px) rotate(${Math.random() * 720}deg)`,
        opacity: 0.8
      }
    ], {
      duration: 3000 + Math.random() * 2000,
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    });
    
    animation.onfinish = () => confetti.remove();
  }
}

function saveScore(name, score, total) {
  let scores = JSON.parse(sessionStorage.getItem('quizScores')) || [];

  scores.push({
    name: name,
    score: score,
    total: total,
    percentage: (score / total) * 100,
    date: new Date().toLocaleDateString()
  });

  scores.sort((a, b) => b.percentage - a.percentage);

  // simpan max 10 orang sahaja
  scores = scores.slice(0, 10);

  sessionStorage.setItem('quizScores', JSON.stringify(scores));
}


function displayLeaderboard() {
  const scores = JSON.parse(sessionStorage.getItem('quizScores')) || [];
  const leaderboardDiv = document.getElementById('leaderboardList');
  
  if (scores.length === 0) {
    leaderboardDiv.innerHTML = '<p class="text-gray-600 text-center">No scores yet. Be the first!</p>';
    return;
  }
  
  leaderboardDiv.innerHTML = scores.slice(0, 5).map((entry, index) => `
    <div class="flex items-center justify-between bg-white p-3 rounded-lg">
      <div class="flex items-center gap-3">
        <span class="text-2xl">${index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '🏅'}</span>
        <div>
          <p class="font-bold text-gray-800">${entry.name}</p>
          <p class="text-sm text-gray-600">${entry.date}</p>
        </div>
      </div>
      <div class="text-right">
        <p class="font-bold text-purple-600">${entry.score}/${entry.total}</p>
        <p class="text-sm text-gray-600">${entry.percentage.toFixed(0)}%</p>
      </div>
    </div>
  `).join('');
}

function resetQuiz() {
  document.getElementById('quizResults').classList.add('hidden');
  document.getElementById('quizStart').classList.remove('hidden');
  document.getElementById('playerName').value = '';
}

function backToStart() {
  // Hide game & results
  document.getElementById('quizGame').classList.add('hidden');
  document.getElementById('quizResults').classList.add('hidden');

  // Show start screen
  document.getElementById('quizStart').classList.remove('hidden');

  // Reset quiz state
  currentQuestionIndex = 0;
  score = 0;
  shuffledQuestions = [];
  activeQuestions = [];

  // Reset inputs
  document.getElementById('playerName').value = '';
  document.getElementById('storySelect').value = 'all';

  // Optional: scroll to top (UX cantik)
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function exitQuiz() {
  const confirmExit = confirm(
    "Are you sure you want to exit the quiz?\nYour progress will be lost."
  );

  if (!confirmExit) return;

  // Stop timer
  clearInterval(quizTimer);

  // Reset quiz state
  currentQuestionIndex = 0;
  score = 0;
  shuffledQuestions = [];
  activeQuestions = [];

  // Hide quiz & results
  document.getElementById('quizGame').classList.add('hidden');
  document.getElementById('quizResults').classList.add('hidden');

  // Show start screen
  document.getElementById('quizStart').classList.remove('hidden');

  // Optional UX cleanup
  document.getElementById('playerName').value = '';
  document.getElementById('storySelect').value = 'all';

  // Reset progress bar
  document.getElementById('progressBar').style.width = '0%';

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}



// Initialize
document.addEventListener('DOMContentLoaded', function() {
  createParticles();
});