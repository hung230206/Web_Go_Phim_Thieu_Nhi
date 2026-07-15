const lessons = [
  {
    title: "Đảo nguyên âm",
    type: "Màn 1",
    badge: "ă",
    color: "#35a7ff",
    target: "ba bé bò bờ ao",
  },
  {
    title: "Vườn dấu sắc",
    type: "Màn 2",
    badge: "á",
    color: "#ff6b6b",
    target: "bé vẽ cá và lá",
  },
  {
    title: "Rừng dấu huyền",
    type: "Màn 3",
    badge: "à",
    color: "#45c486",
    target: "mẹ và bà làm chè",
  },
  {
    title: "Đường đua dấu hỏi",
    type: "Màn 4",
    badge: "ả",
    color: "#ff9f1c",
    target: "thỏ nhỏ mở cửa",
  },
  {
    title: "Sấm chớp dấu ngã",
    type: "Màn 5",
    badge: "ã",
    color: "#8f5cff",
    target: "bé vẽ những đám mây",
  },
  {
    title: "Hang dấu nặng",
    type: "Màn 6",
    badge: "ạ",
    color: "#23345d",
    target: "bạn học thật chăm",
  },
  {
    title: "Chuyến bay Telex",
    type: "Màn 7",
    badge: "ư",
    color: "#00a896",
    target: "tiếng việt thật vui",
  },
  {
    title: "Lễ hội bàn phím",
    type: "Màn 8",
    badge: "đ",
    color: "#f15bb5",
    target: "em gõ đúng từng chữ",
  },
  {
    title: "Đường sao tốc độ",
    type: "Màn 9",
    badge: "★",
    color: "#35a7ff",
    target: "bàn phím sáng lên khi em gõ nhanh",
  },
  {
    title: "Mưa chữ lấp lánh",
    type: "Màn 10",
    badge: "ô",
    color: "#ff9f1c",
    target: "mỗi chữ đúng mở thêm một ngôi sao",
  },
  {
    title: "Lớp học cầu vồng",
    type: "Màn 11",
    badge: "ê",
    color: "#45c486",
    target: "hôm nay lớp em luyện gõ tiếng việt",
  },
  {
    title: "Bản đồ bí mật",
    type: "Màn 12",
    badge: "ờ",
    color: "#8f5cff",
    target: "các bạn nhỏ đọc đề rồi gõ từng dòng",
  },
  {
    title: "Đoạn văn vui",
    type: "Màn 13",
    badge: "ữ",
    color: "#f15bb5",
    target: "khi em gõ đúng những ngôi sao sẽ bay lên rất vui và cả lớp cùng reo thật to",
  },
  {
    title: "Thử thách lớp học",
    type: "Màn 14",
    badge: "ầ",
    color: "#00a896",
    target: "cô giáo khen khi cả lớp hoàn thành bài học đầu tiên rồi cùng nhau luyện thêm",
  },
  {
    title: "Đường đua đoạn dài",
    type: "Màn 15",
    badge: "ệ",
    color: "#23345d",
    target: "sau bài học em cùng bạn luyện gõ thật nhẹ và đều tay để giữ nhịp thật tốt",
  },
  {
    title: "Boss Telex cuối ngày",
    type: "Màn 16",
    badge: "🏆",
    color: "#ff6b6b",
    target: "em bình tĩnh nhìn từ đang sáng và gõ hết đoạn văn này bằng đôi tay nhanh và chắc",
  },
  {
    title: "Khu vườn buổi sớm",
    type: "Màn 17 · Khoảng 100 từ",
    badge: "17",
    color: "#35a7ff",
    target: "buổi sáng khu vườn trường rực rỡ dưới nắng mới các bạn nhỏ cùng cô giáo tưới nước cho từng luống hoa rồi nhẹ nhàng nhặt lá khô bên lối đi lan phát hiện một chú bướm vàng đang đậu trên cánh cúc còn minh nghe tiếng chim ríu rít trong vòm cây cả lớp chia nhau chăm sóc khu vườn ai cũng làm việc thật vui khi chiếc chuông vào học vang lên các bạn xếp dụng cụ gọn gàng rửa tay sạch sẽ và hẹn ngày mai sẽ cùng nhau gieo thêm những hạt giống mới",
  },
  {
    title: "Thư viện nhiệm màu",
    type: "Màn 18 · Khoảng 100 từ",
    badge: "18",
    color: "#ff9f1c",
    target: "giờ đọc sách bắt đầu cả lớp bước vào thư viện trong yên lặng trên những giá cao có truyện cổ tích sách khoa học và nhiều tập thơ đầy màu sắc phương chọn cuốn sách kể về đại dương còn duy tìm hiểu những vì sao xa xôi hai bạn ngồi cạnh cửa sổ chăm chú đọc rồi kể cho nhau điều thú vị cô thủ thư hướng dẫn cả nhóm giữ sách bằng đôi tay sạch và lật từng trang thật nhẹ trước khi ra về mỗi bạn ghi tên cuốn sách mình yêu thích vào tấm bảng chung để tuần sau cả lớp cùng khám phá",
  },
  {
    title: "Chuyến tàu tri thức",
    type: "Màn 19 · Khoảng 100 từ",
    badge: "19",
    color: "#45c486",
    target: "hôm nay lớp học biến thành một chuyến tàu đặc biệt mỗi dãy bàn là một toa tàu còn tấm bảng lớn là cửa sổ nhìn ra thế giới đoàn tàu đi qua cánh đồng phép tính vượt cây cầu chính tả rồi dừng ở ga khoa học tại mỗi trạm các đội phải đọc kĩ câu hỏi bàn bạc cùng nhau và gõ câu trả lời thật chính xác đội nào cũng cố gắng nhưng không quên giúp bạn đang gặp khó cuối hành trình cô giáo trao cho cả lớp một tấm vé mang dòng chữ ham học hỏi chính là hành trang quý nhất",
  },
  {
    title: "Đêm hội trăng rằm",
    type: "Màn 20 · Khoảng 100 từ",
    badge: "20",
    color: "#f15bb5",
    target: "khi mặt trời vừa khuất sân trường bỗng sáng lên bởi hàng trăm chiếc đèn lồng đủ màu các bạn nhỏ mặc áo đẹp mang theo mặt nạ và háo hức chờ đêm hội bắt đầu đội múa lân bước ra trong tiếng trống rộn ràng khiến mọi người cùng vỗ tay cổ vũ sau đó cô giáo kể chuyện về vầng trăng và lòng biết chia sẻ mỗi lớp chuẩn bị một mâm quả rồi cùng mời các em nhỏ thưởng thức trước lúc ra về cả nhóm thu dọn sân sạch sẽ treo lại đèn ngay ngắn và giữ trong lòng một buổi tối thật ấm áp",
  },
  {
    title: "Nhà khoa học nhí",
    type: "Màn 21 · Khoảng 100 từ",
    badge: "21",
    color: "#8f5cff",
    target: "trong giờ khám phá cô giáo đặt lên bàn vài chiếc cốc trong suốt một bình nước và những viên đá nhỏ nhiệm vụ của các nhóm là dự đoán vật nào sẽ nổi vật nào sẽ chìm trước tiên mọi người quan sát hình dạng cân nhắc ý kiến rồi ghi kết quả vào phiếu thí nghiệm khi lần lượt thả từng vật xuống nước các bạn reo lên vì có kết quả khác với dự đoán ban đầu cô giải thích rằng sai cũng là cơ hội để tìm hiểu sâu hơn cả lớp thử lại thật cẩn thận so sánh dữ liệu và cùng rút ra kết luận bằng những câu rõ ràng",
  },
  {
    title: "Hành trình xuyên rừng",
    type: "Màn 22 · Khoảng 100 từ",
    badge: "22",
    color: "#00a896",
    target: "đoàn thám hiểm nhí mang theo bản đồ la bàn nước uống và bắt đầu đi vào khu rừng xanh rì con đường nhỏ quanh co dẫn các bạn qua một dòng suối trong rồi tới sườn đồi phủ đầy dương xỉ trưởng nhóm nhắc mọi người bước nhẹ không bẻ cành và luôn quan sát kí hiệu chỉ đường giữa hành trình cả đội gặp một cây cổ thụ rất lớn nên dừng lại đo vòng thân ghi chép đặc điểm và vẽ nhanh hình chiếc lá khi trời sắp chiều các bạn trở về trại kiểm tra đủ thành viên rồi vui vẻ kể lại những điều mình vừa học được",
  },
  {
    title: "Giải cứu thành phố xanh",
    type: "Màn 23 · Khoảng 100 từ",
    badge: "23",
    color: "#23345d",
    target: "thành phố xanh gửi đến lớp một thông điệp khẩn dòng sông đang có nhiều rác còn công viên thiếu những bàn tay chăm sóc các đội nhanh chóng nhận nhiệm vụ nhóm thứ nhất phân loại giấy nhựa và kim loại nhóm thứ hai nghĩ cách tiết kiệm nước nhóm còn lại thiết kế tấm biển nhắc mọi người bảo vệ cây mỗi ý tưởng đúng sẽ thắp sáng một khu phố trên bản đồ lớn sau nhiều lượt thử cả thành phố đã bừng sáng nhưng thử thách cuối cùng yêu cầu từng bạn chọn một việc tốt có thể làm mỗi ngày và kiên trì thực hiện cùng gia đình",
  },
  {
    title: "Đỉnh cao Telex",
    type: "Màn 24 · Khoảng 100 từ",
    badge: "24",
    color: "#ff6b6b",
    target: "thử thách cuối cùng đã mở ra trước mắt người chơi một đoạn đường dài với nhiều dấu tiếng việt dễ nhầm muốn chinh phục đỉnh cao em cần giữ lưng thẳng đặt tay nhẹ trên bàn phím nhìn vào từ đang sáng và gõ đều theo nhịp nếu gặp lỗi hãy bình tĩnh đọc lại từ hiện tại sửa chính xác rồi tiếp tục tiến lên tốc độ rất đáng quý nhưng sự tập trung và độ chính xác còn quan trọng hơn khi hoàn thành đoạn văn em hãy nghỉ tay hít thở thật sâu ngắm số từ mỗi phút của mình và tự hào vì đã kiên trì đến tận chặng cuối",
  },
];

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

const toneKeys = {
  s: "acute",
  f: "grave",
  r: "hook",
  x: "tilde",
  j: "dot",
};

const toneTable = {
  a: ["a", "á", "à", "ả", "ã", "ạ"],
  ă: ["ă", "ắ", "ằ", "ẳ", "ẵ", "ặ"],
  â: ["â", "ấ", "ầ", "ẩ", "ẫ", "ậ"],
  e: ["e", "é", "è", "ẻ", "ẽ", "ẹ"],
  ê: ["ê", "ế", "ề", "ể", "ễ", "ệ"],
  i: ["i", "í", "ì", "ỉ", "ĩ", "ị"],
  o: ["o", "ó", "ò", "ỏ", "õ", "ọ"],
  ô: ["ô", "ố", "ồ", "ổ", "ỗ", "ộ"],
  ơ: ["ơ", "ớ", "ờ", "ở", "ỡ", "ợ"],
  u: ["u", "ú", "ù", "ủ", "ũ", "ụ"],
  ư: ["ư", "ứ", "ừ", "ử", "ữ", "ự"],
  y: ["y", "ý", "ỳ", "ỷ", "ỹ", "ỵ"],
};

const toneIndex = {
  acute: 1,
  grave: 2,
  hook: 3,
  tilde: 4,
  dot: 5,
};

const baseByMarked = Object.fromEntries(
  Object.entries(toneTable).flatMap(([base, marks]) => marks.map((letter) => [letter, base])),
);

const els = {
  stageList: document.querySelector("#stageList"),
  rankName: document.querySelector("#rankName"),
  totalStars: document.querySelector("#totalStars"),
  stageType: document.querySelector("#stageType"),
  stageTitle: document.querySelector("#stageTitle"),
  targetText: document.querySelector("#targetText"),
  currentWord: document.querySelector("#currentWord"),
  currentChar: document.querySelector("#currentChar"),
  typingInput: document.querySelector("#typingInput"),
  convertedPreview: document.querySelector("#convertedPreview"),
  accuracyValue: document.querySelector("#accuracyValue"),
  speedValue: document.querySelector("#speedValue"),
  wpmValue: document.querySelector("#wpmValue"),
  comboValue: document.querySelector("#comboValue"),
  meterFill: document.querySelector("#meterFill"),
  hypeLabel: document.querySelector("#hypeLabel"),
  restartButton: document.querySelector("#restartButton"),
  nextButton: document.querySelector("#nextButton"),
  celebration: document.querySelector("#celebration"),
  victoryDialog: document.querySelector("#victoryDialog"),
  victoryMessage: document.querySelector("#victoryMessage"),
  victoryTime: document.querySelector("#victoryTime"),
  victoryWpm: document.querySelector("#victoryWpm"),
  victoryAccuracy: document.querySelector("#victoryAccuracy"),
  victoryRetry: document.querySelector("#victoryRetry"),
  victoryNext: document.querySelector("#victoryNext"),
};

let activeLesson = 0;
let rawInput = "";
let startedAt = null;
let statsTimer = null;
let combo = 0;
let bestCombo = 0;
let stars = 0;
let completedLessons = new Set();
let completionShown = false;
let audioContext = null;

function convertTelex(text) {
  return text
    .split(/(\s+)/)
    .map((part) => (/\s+/.test(part) ? part : convertTelexWord(part)))
    .join("");
}

function convertTelexWord(word) {
  const letters = [];
  let tone = null;

  for (const rawChar of word) {
    const char = rawChar.toLowerCase();
    const lastIndex = letters.length - 1;
    const last = letters[lastIndex];

    if (char === "z") {
      tone = null;
      for (let i = 0; i < letters.length; i += 1) {
        letters[i] = stripTone(letters[i]);
      }
      continue;
    }

    if (toneKeys[char] && findVowelPositions(letters).length > 0) {
      tone = toneKeys[char];
      continue;
    }

    if (last && char === "a" && stripTone(last) === "a") {
      letters[lastIndex] = "â";
      continue;
    }

    if (last && char === "w" && stripTone(last) === "a") {
      letters[lastIndex] = "ă";
      continue;
    }

    if (last && char === "e" && stripTone(last) === "e") {
      letters[lastIndex] = "ê";
      continue;
    }

    if (last && char === "o" && stripTone(last) === "o") {
      letters[lastIndex] = "ô";
      continue;
    }

    if (last && char === "w" && stripTone(last) === "o") {
      letters[lastIndex] = "ơ";
      continue;
    }

    if (last && char === "w" && stripTone(last) === "u") {
      letters[lastIndex] = "ư";
      continue;
    }

    if (last && char === "d" && last === "d") {
      letters[lastIndex] = "đ";
      continue;
    }

    letters.push(rawChar);
  }

  if (tone) {
    const tonePosition = chooseTonePosition(letters);
    if (tonePosition >= 0) {
      letters[tonePosition] = applyTone(letters[tonePosition], tone);
    }
  }

  return letters.join("");
}

function stripTone(letter) {
  const lower = letter.toLowerCase();
  return baseByMarked[lower] || lower;
}

function isVowel(letter) {
  return Boolean(toneTable[stripTone(letter)]);
}

function findVowelPositions(letters) {
  return letters.reduce((positions, letter, index) => {
    if (isVowel(letter)) positions.push(index);
    return positions;
  }, []);
}

function chooseTonePosition(letters) {
  const vowels = findToneVowelPositions(letters);
  if (!vowels.length) return -1;

  const priority = vowels.filter((index) => ["ă", "â", "ê", "ô", "ơ", "ư"].includes(stripTone(letters[index])));
  if (priority.length) return priority[priority.length - 1];

  if (vowels.length >= 3) return vowels[1];
  if (vowels.length === 2) return hasFinalConsonantAfter(letters, vowels[1]) ? vowels[1] : vowels[0];
  return vowels[0];
}

function findToneVowelPositions(letters) {
  const vowels = findVowelPositions(letters);
  return vowels.filter((index) => {
    const base = stripTone(letters[index]);
    const previous = stripTone(letters[index - 1] || "");
    const hasLaterVowel = vowels.some((vowelIndex) => vowelIndex > index);

    if (base === "u" && previous === "q" && hasLaterVowel) return false;
    if (base === "i" && previous === "g" && hasLaterVowel) return false;

    return true;
  });
}

function hasFinalConsonantAfter(letters, index) {
  return letters.slice(index + 1).some((letter) => {
    const base = stripTone(letter);
    return /^[a-zđ]$/.test(base) && !isVowel(base);
  });
}

function applyTone(letter, tone) {
  const base = stripTone(letter);
  const variants = toneTable[base];
  if (!variants) return letter;
  return variants[toneIndex[tone]];
}

function renderStages() {
  els.stageList.innerHTML = lessons
    .map((lesson, index) => {
      const done = completedLessons.has(index);
      return `
        <button class="stage-card ${index === activeLesson ? "active" : ""}" type="button" data-stage="${index}">
          <span class="stage-icon" style="--stage-color: ${lesson.color}">${lesson.badge}</span>
          <span>
            <strong>${lesson.title}</strong>
            <span>${lesson.type}</span>
          </span>
          <span class="stage-stars">${done ? "★" : "☆"}</span>
        </button>
      `;
    })
    .join("");
}

function renderLesson() {
  const lesson = lessons[activeLesson];
  els.stageType.textContent = lesson.type;
  els.stageTitle.textContent = lesson.title;
  rawInput = "";
  startedAt = null;
  if (statsTimer) {
    clearInterval(statsTimer);
    statsTimer = null;
  }
  combo = 0;
  bestCombo = 0;
  completionShown = false;
  els.typingInput.value = "";
  els.nextButton.disabled = true;
  updatePractice();
  renderStages();
  if (window.matchMedia("(min-width: 720px)").matches) {
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0 });
      els.typingInput.focus({ preventScroll: true });
    });
  } else {
    requestAnimationFrame(() => window.scrollTo({ top: 0 }));
  }
}

function updatePractice() {
  const target = lessons[activeLesson].target;
  const converted = convertTelex(rawInput).normalize("NFC");
  const targetChars = Array.from(target);
  const convertedChars = Array.from(converted);
  const firstWrong = findFirstWrong(targetChars, convertedChars);
  const progressIndex = firstWrong >= 0 ? firstWrong : convertedChars.length;
  const completed = converted === target;

  els.convertedPreview.textContent = converted || " ";
  els.targetText.classList.toggle("compact", targetChars.length > 42);
  els.targetText.classList.toggle("paragraph", targetChars.length > 72);
  els.targetText.closest(".target-card").classList.toggle("is-long", targetChars.length > 42);
  els.targetText.innerHTML = renderTarget(targetChars, convertedChars, progressIndex, firstWrong);
  keepCurrentCharacterVisible();
  els.currentChar.textContent = completed ? "✓" : targetChars[Math.min(progressIndex, targetChars.length - 1)] || "✓";
  els.currentWord.textContent = completed ? "✓" : getCurrentWord(target, progressIndex);

  const correctCount = countMatchingPrefix(targetChars, convertedChars);
  const accuracy = convertedChars.length ? Math.round((correctCount / convertedChars.length) * 100) : 100;
  const minutes = startedAt ? Math.max((Date.now() - startedAt) / 60000, 1 / 60) : 0;
  const speed = minutes ? Math.round(correctCount / minutes) : 0;
  const wpm = minutes ? Math.round(correctCount / 5 / minutes) : 0;
  const hype = Math.min(100, Math.round((correctCount / targetChars.length) * 100));

  els.accuracyValue.textContent = `${accuracy}%`;
  els.speedValue.textContent = String(speed);
  els.wpmValue.textContent = String(wpm);
  els.comboValue.textContent = String(combo);
  els.meterFill.style.width = `${hype}%`;
  els.hypeLabel.textContent = completed ? "Bùng nổ!" : getHypeLabel(hype, accuracy);
  els.nextButton.disabled = !completed;

  if (completed) {
    completeLesson({
      elapsedSeconds: startedAt ? (Date.now() - startedAt) / 1000 : 0,
      wpm,
      accuracy,
    });
  }
  if (completed && statsTimer) {
    clearInterval(statsTimer);
    statsTimer = null;
  }
}

function keepCurrentCharacterVisible() {
  if (document.activeElement !== els.typingInput && !document.body.classList.contains("typing-active")) return;

  const targetCard = els.targetText.closest(".target-card");
  const currentCharacter = els.targetText.querySelector(".char.current");
  if (!currentCharacter || targetCard.scrollHeight <= targetCard.clientHeight) return;

  const centeredTop = currentCharacter.offsetTop - targetCard.clientHeight / 2;
  targetCard.scrollTo({ top: Math.max(0, centeredTop), behavior: "smooth" });
}

function renderTarget(targetChars, convertedChars, progressIndex, firstWrong) {
  const currentWordRange = getWordRange(targetChars.join(""), progressIndex);

  return targetChars
    .map((char, index) => {
      const isDone = index < progressIndex;
      const isCurrent = index === Math.min(progressIndex, targetChars.length - 1);
      const isWrong = firstWrong === index && convertedChars.length > index;
      const isWordFocus = index >= currentWordRange.start && index < currentWordRange.end && char !== " ";
      const label = char === " " ? "&nbsp;" : escapeHtml(char);
      return `<span class="char ${isDone ? "done" : ""} ${isCurrent ? "current" : ""} ${isWrong ? "wrong" : ""} ${isWordFocus ? "word-focus" : ""}">${label}</span>`;
    })
    .join("");
}

function findFirstWrong(targetChars, convertedChars) {
  for (let i = 0; i < convertedChars.length; i += 1) {
    if (targetChars[i] !== convertedChars[i]) return i;
  }
  return -1;
}

function countMatchingPrefix(targetChars, convertedChars) {
  let count = 0;
  for (let i = 0; i < convertedChars.length; i += 1) {
    if (targetChars[i] !== convertedChars[i]) break;
    count += 1;
  }
  return count;
}

function getWordRange(text, index) {
  if (!text.length) return { start: 0, end: 0 };
  const safeIndex = Math.min(index, text.length - 1);
  let start = safeIndex;
  let end = safeIndex;

  while (start > 0 && text[start - 1] !== " ") start -= 1;
  while (end < text.length && text[end] !== " ") end += 1;

  if (text[safeIndex] === " " && safeIndex + 1 < text.length) {
    start = safeIndex + 1;
    end = start;
    while (end < text.length && text[end] !== " ") end += 1;
  }

  return { start, end };
}

function getCurrentWord(text, index) {
  const range = getWordRange(text, index);
  return text.slice(range.start, range.end) || "✓";
}

function getHypeLabel(hype, accuracy) {
  if (accuracy < 80) return "Bình tĩnh!";
  if (hype > 78) return "Sắp qua màn!";
  if (hype > 48) return "Đang nóng!";
  if (combo >= 8) return "Combo đẹp!";
  return "Sẵn sàng!";
}

function completeLesson(result) {
  if (!completedLessons.has(activeLesson)) {
    completedLessons.add(activeLesson);
    stars += 1;
    els.totalStars.textContent = String(stars);
    updateRank();
    burst();
    renderStages();
  }

  if (!completionShown) {
    completionShown = true;
    showVictory(result);
  }
}

function showVictory({ elapsedSeconds, wpm, accuracy }) {
  els.typingInput.blur();
  document.body.classList.remove("typing-active");
  els.victoryMessage.textContent = `Bạn đã chinh phục ${lessons[activeLesson].title}.`;
  els.victoryTime.textContent = formatTime(elapsedSeconds);
  els.victoryWpm.textContent = String(wpm);
  els.victoryAccuracy.textContent = `${accuracy}%`;
  playVictorySound();
  els.victoryDialog.showModal();
}

function formatTime(seconds) {
  const totalSeconds = seconds > 0 ? Math.max(1, Math.ceil(seconds)) : 0;
  const minutes = Math.floor(totalSeconds / 60);
  return `${minutes}:${String(totalSeconds % 60).padStart(2, "0")}`;
}

function getAudioContext() {
  if (!audioContext) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) audioContext = new AudioContext();
  }
  if (audioContext?.state === "suspended") audioContext.resume();
  return audioContext;
}

function playTone(frequency, duration, volume = 0.025, delay = 0, wave = "sine") {
  const context = getAudioContext();
  if (!context) return;

  const oscillator = context.createOscillator();
  const gain = context.createGain();
  const start = context.currentTime + delay;
  oscillator.type = wave;
  oscillator.frequency.setValueAtTime(frequency, start);
  gain.gain.setValueAtTime(volume, start);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start(start);
  oscillator.stop(start + duration);
}

function playInputSound(event) {
  if (event.inputType?.startsWith("delete")) {
    playTone(180, 0.075, 0.09, 0, "sawtooth");
    return;
  }

  const characters = Array.from(event.data || "");
  if (!characters.length) {
    playTone(420, 0.065, 0.08, 0, "triangle");
    return;
  }

  characters.slice(0, 8).forEach((character, index) => {
    const isSpace = /\s/.test(character);
    const frequency = isSpace ? 280 : 510 + (character.codePointAt(0) % 7) * 22;
    playTone(frequency, 0.07, isSpace ? 0.075 : 0.11, index * 0.025, "triangle");
  });
}

function playVictorySound() {
  [523, 659, 784, 1047].forEach((frequency, index) => {
    playTone(frequency, 0.18, 0.045, index * 0.09);
  });
}

function updateRank() {
  if (stars >= 24) els.rankName.textContent = "Bậc thầy Telex";
  else if (stars >= 20) els.rankName.textContent = "Huyền thoại Telex";
  else if (stars >= 16) els.rankName.textContent = "Siêu sao đoạn văn";
  else if (stars >= 12) els.rankName.textContent = "Nhà thám hiểm chữ";
  else if (stars >= 8) els.rankName.textContent = "Tay gõ cầu vồng";
  else if (stars >= 4) els.rankName.textContent = "Bạn nhỏ nhanh tay";
  else els.rankName.textContent = "Tân binh bàn phím";
}

function burst() {
  const colors = ["#ff6b6b", "#ffd166", "#45c486", "#35a7ff", "#8f5cff", "#f15bb5"];
  for (let i = 0; i < 34; i += 1) {
    const spark = document.createElement("span");
    spark.className = "spark";
    spark.style.setProperty("--spark-color", colors[i % colors.length]);
    spark.style.setProperty("--x-start", "50vw");
    spark.style.setProperty("--y-start", "44vh");
    spark.style.setProperty("--x-end", `${48 + Math.random() * 420 - 210}vw`);
    spark.style.setProperty("--y-end", `${38 + Math.random() * 70 - 35}vh`);
    spark.style.left = "0";
    spark.style.top = "0";
    els.celebration.appendChild(spark);
    setTimeout(() => spark.remove(), 950);
  }
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

els.typingInput.addEventListener("input", (event) => {
  playInputSound(event);
  if (!startedAt) {
    startedAt = Date.now();
    statsTimer = setInterval(updatePractice, 1000);
  }
  const nextRaw = event.target.value.toLowerCase();
  const previousConverted = convertTelex(rawInput);
  const nextConverted = convertTelex(nextRaw);
  const target = lessons[activeLesson].target;

  rawInput = nextRaw;

  if (nextConverted.length > previousConverted.length) {
    for (let i = previousConverted.length; i < nextConverted.length; i += 1) {
      if (target[i] === nextConverted[i]) {
        combo += 1;
        bestCombo = Math.max(bestCombo, combo);
      } else {
        combo = 0;
      }
    }
  } else if (nextConverted.length < previousConverted.length) {
    combo = 0;
  }

  updatePractice();
});

function enterTypingMode() {
  getAudioContext();
  document.body.classList.add("typing-active");
  requestAnimationFrame(() => {
    els.typingInput.scrollIntoView({ block: "end", behavior: "smooth" });
    keepCurrentCharacterVisible();
  });
}

els.typingInput.addEventListener("pointerdown", enterTypingMode);
els.typingInput.addEventListener("click", enterTypingMode);
els.typingInput.addEventListener("focus", enterTypingMode);

els.typingInput.addEventListener("blur", () => {
  requestAnimationFrame(() => {
    if (document.activeElement !== els.typingInput) {
      document.body.classList.remove("typing-active");
    }
  });
});

els.restartButton.addEventListener("click", renderLesson);

els.victoryRetry.addEventListener("click", () => {
  els.victoryDialog.close();
  renderLesson();
});

els.victoryNext.addEventListener("click", () => {
  els.victoryDialog.close();
  activeLesson = (activeLesson + 1) % lessons.length;
  renderLesson();
});

els.nextButton.addEventListener("click", () => {
  activeLesson = (activeLesson + 1) % lessons.length;
  renderLesson();
});

els.stageList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-stage]");
  if (!button) return;
  activeLesson = Number(button.dataset.stage);
  renderLesson();
});

renderLesson();
