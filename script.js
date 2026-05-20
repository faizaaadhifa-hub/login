
    var accounts = [{ username: 'admin', password: '1234', nama: 'Admin' }];
    var isLoggedIn = false;
    var currentUser = null;

    var teamData = [
      { foto: 'zaza.jpg.jpeg', instagramHandle: '@liebout27', instagramUrl: 'https://www.instagram.com/liebout27?igsh=dGFyaHJ6NXc5OTcz', peran: 'Pengembang Web', namaLengkap: 'FIRZANAH LAILISA ESTARI', nim: 'G43252077', prodi: 'Mahasiswa Program Studi Promosi Kesehatan' },
      { foto: 'faiza.jpg.jpeg', instagramHandle: '@dfzzaaa_', instagramUrl: 'https://www.instagram.com/dfzzaaa_?igsh=MWdmNm0yYWEzZHVqdQ==', peran: 'Pengembang Web', namaLengkap: 'FAIZA DHIFA MAHANDA', nim: 'G43251893', prodi: 'Mahasiswa Program Studi Promosi Kesehatan' },
      { foto: 'jere.jpg.jpeg', instagramHandle: '@manji.raaa', instagramUrl: 'https://www.instagram.com/manji.raaa?igsh=MTVocGhpaW9sN3MzbA==', peran: 'Desain Web', namaLengkap: 'IZZA ILMIAH AZZAHRA', nim: 'G43252175', prodi: 'Mahasiswa Program Studi Promosi Kesehatan' },
      { foto: 'sasa.jpg.jpeg', instagramHandle: '@sslbla', instagramUrl: 'https://www.instagram.com/_sslbla_?igsh=ZzVrcGNnZmZicXJo', peran: 'Materi Konten', namaLengkap: 'SASABELA PUTRI ADINDA', nim: 'G43251893', prodi: 'Mahasiswa Program Studi Promosi Kesehatan' },
      { foto: 'indah.jpg.jpeg', instagramHandle: '@indahdwy._', instagramUrl: 'https://www.instagram.com/indahdwy._?igsh=MWdpbG1ja3d3emg3ZA==', peran: 'Materi Konten', namaLengkap: 'INDAH DWI YANTI', nim: 'G43252277', prodi: 'Mahasiswa Program Studi Promosi Kesehatan' }
    ];

    function buildTeam() {
      var container = document.getElementById('teamList');
      teamData.forEach(function (m) {
        var card = document.createElement('div');
        card.className = 'team-card-h';
        card.innerHTML =
          '<div class="team-card-left">' +
          '<div class="team-avatar-circle">' +
          '<img src="' + m.foto + '" alt="Foto ' + m.namaLengkap + '" onerror="this.style.display=\'none\'">' +
          '</div>' +
          '<div>' +
          '<div class="team-card-name"><a href="' + m.instagramUrl + '" target="_blank"><strong>' + m.instagramHandle + '</strong></a></div>' +
          '<div class="team-card-role">' + m.peran + '</div>' +
          '</div>' +
          '</div>' +
          '<div class="team-card-right">' +
          '<ul class="team-positions">' +
          '<li><div class="team-pos-fullname">' + m.namaLengkap + '</div></li>' +
          '<li><div class="team-pos-nim">' + m.nim + '</div></li>' +
          '<li><div class="team-pos-prodi">' + m.prodi + '</div></li>' +
          '</ul>' +
          '</div>';
        container.appendChild(card);
      });
    }

    // ===== BRAIN REGIONS DATA =====
    var brainRegions = [
      {
        name: 'Lobus Frontal', color: '#C0321A', tag: 'Kognitif & Motorik',
        svgId: 'region-0',
        // approximate center of the region for pointer
        cx: 135, cy: 145,
        desc: 'Pusat pengambilan keputusan, perencanaan strategis, kepribadian, dan kontrol impuls. Mengandung korteks motorik primer yang mengendalikan gerakan tubuh sadar, serta area Broca yang berperan dalam produksi bahasa. Kerusakan lobus frontal dapat menyebabkan perubahan kepribadian dramatis dan afasia Broca.',
        imgUrl: 'https://www.news-medical.net/image-handler/ts/20190320125251/ri/673/picture/2019/3/shutterstock_484766530.jpg'
      },
      {
        name: 'Lobus Parietal', color: '#e67e22', tag: 'Sensorik & Spasial',
        svgId: 'region-1',
        cx: 268, cy: 120,
        desc: 'Memproses informasi sensorik dari seluruh tubuh — sentuhan, nyeri, suhu, dan tekanan. Berperan dalam orientasi spasial, koordinasi tangan-mata, kalkulasi numerik, dan integrasi informasi multisensorik. Kerusakan dapat menyebabkan agnosia (ketidakmampuan mengenali objek) dan neglect syndrome.',
        imgUrl: 'https://www.news-medical.net/image-handler/ts/20190320125251/ri/673/picture/2019/3/shutterstock_484766530.jpg'
      },
      {
        name: 'Lobus Temporal', color: '#c9567a', tag: 'Memori & Bahasa',
        svgId: 'region-2',
        cx: 120, cy: 220,
        desc: 'Memproses suara dan bahasa lisan. Mengandung area Wernicke (pemahaman bahasa) di hemisfer kiri dan hipokampus yang kritis untuk pembentukan memori jangka panjang. Juga berperan dalam pengenalan wajah dan interpretasi ekspresi emosional.',
        imgUrl: 'https://www.news-medical.net/image-handler/ts/20190320125251/ri/673/picture/2019/3/shutterstock_484766530.jpg'
      },
      {
        name: 'Lobus Oksipital', color: '#7a3590', tag: 'Visual',
        svgId: 'region-3',
        cx: 345, cy: 175,
        desc: 'Seluruh pemrosesan visual terjadi di sini — mengolah informasi warna, bentuk, kedalaman, dan gerakan yang dikirim dari retina melalui saraf optik dan badan genikulatum lateral talamus. Terdiri dari korteks visual primer (V1) dan area asosiasi visual (V2–V5).',
        imgUrl: 'https://www.news-medical.net/image-handler/ts/20190320125251/ri/673/picture/2019/3/shutterstock_484766530.jpg'
      },
      {
        name: 'Serebelum', color: '#2e7d6b', tag: 'Koordinasi & Keseimbangan',
        svgId: 'region-4',
        cx: 230, cy: 300,
        desc: 'Mengandung lebih dari 50% total neuron otak meski hanya 10% dari massa otak. Bertanggung jawab atas koordinasi gerakan halus, keseimbangan, dan kontrol postur tubuh. Kerusakan menyebabkan ataksia — gangguan koordinasi gerakan yang ditandai gerakan tidak menentu dan langkah sempoyongan.',
        imgUrl: 'https://www.news-medical.net/image-handler/ts/20190320125251/ri/673/picture/2019/3/shutterstock_484766530.jpg'
      },
      {
        name: 'Batang Otak', color: '#5c6bc0', tag: 'Fungsi Vital Otomatis',
        svgId: 'region-5',
        cx: 170, cy: 290,
        desc: 'Terdiri dari midbrain (mesensefalon), pons, dan medula oblongata. Mengatur fungsi vital otomatis: pernapasan, detak jantung, tekanan darah, dan siklus tidur-bangun. Juga merupakan jalur utama impuls antara otak dan medula spinalis. Kerusakan batang otak bisa fatal.',
        imgUrl: 'https://www.news-medical.net/image-handler/ts/20190320125251/ri/673/picture/2019/3/shutterstock_484766530.jpg'
      },
      {
        name: 'Hipotalamus', color: '#e67e22', tag: 'Regulasi Hormonal',
        svgId: 'region-6',
        cx: 185, cy: 210,
        desc: 'Pusat regulasi hormonal dan homeostasis tubuh. Mengontrol suhu tubuh, rasa lapar dan haus, siklus tidur, serta emosi dasar. Mengendalikan kelenjar pituitari (hipofisis) — "master gland" — melalui hormon pelepas dan penghambat. Berperan kunci dalam respons stres melalui sumbu HPA.',
        imgUrl: 'https://www.news-medical.net/image-handler/ts/20190320125251/ri/673/picture/2019/3/shutterstock_484766530.jpg'
      },
      {
        name: 'Amigdala', color: '#c0392b', tag: 'Pusat Emosi',
        svgId: 'region-7',
        cx: 145, cy: 215,
        desc: 'Struktur berbentuk almond di bagian medial lobus temporal yang berperan sentral dalam pemrosesan emosi — terutama rasa takut, kecemasan, dan respons "fight or flight". Juga terlibat dalam pembentukan memori emosional yang kuat. Hiperaktivitas amigdala dikaitkan dengan gangguan kecemasan dan PTSD.',
        imgUrl: 'https://www.news-medical.net/image-handler/ts/20190320125251/ri/673/picture/2019/3/shutterstock_484766530.jpg'
      }
    ];

    var activeRegionIndex = -1;

    function buildBrainMap() {
      var list = document.getElementById('brainList');
      brainRegions.forEach(function (r, i) {
        var li = document.createElement('li');
        li.className = 'brain-region-item';
        li.id = 'brainItem-' + i;
        li.innerHTML =
          '<div class="brain-dot" style="background:' + r.color + '"></div>' +
          '<div><div class="r-name">' + r.name + '</div><div class="r-desc">' + r.tag + '</div></div>';
        li.onclick = function () { selectBrainRegion(i); };
        list.appendChild(li);
      });
    }

    function selectBrainRegionById(idx) {
      selectBrainRegion(idx);
    }

    function selectBrainRegion(idx) {
      activeRegionIndex = idx;
      var r = brainRegions[idx];

      // Update list items
      document.querySelectorAll('.brain-region-item').forEach(function (el, i) {
        el.classList.toggle('active', i === idx);
      });

      // Reset all SVG regions opacity
      document.querySelectorAll('.brain-region-path').forEach(function (el) {
        el.style.opacity = '0.5';
        el.style.filter = '';
      });

      // Highlight selected region
      var targetEl = document.getElementById(r.svgId);
      if (targetEl) {
        targetEl.style.opacity = '1';
        targetEl.style.filter = 'brightness(1.25) drop-shadow(0 0 6px ' + r.color + ')';
      }

      // Show pointer
      var ptr = document.getElementById('brainPointer');
      var ptrLine = document.getElementById('ptrLine');
      var ptrDot = document.getElementById('ptrDot');
      var ptrBg = document.getElementById('ptrBg');
      var ptrLabel = document.getElementById('ptrLabel');

      // Calculate label box position
      var lx = r.cx + 15;
      var ly = r.cy - 16;
      var labelText = r.name;
      var boxW = Math.min(labelText.length * 7 + 16, 140);

      // Flip if too far right
      if (lx + boxW > 490) { lx = r.cx - boxW - 15; }
      if (ly < 10) { ly = r.cy + 10; }

      ptr.setAttribute('opacity', '1');
      ptrLine.setAttribute('x1', r.cx);
      ptrLine.setAttribute('y1', r.cy);
      ptrLine.setAttribute('x2', lx + boxW / 2);
      ptrLine.setAttribute('y2', ly + 13);
      ptrDot.setAttribute('cx', r.cx);
      ptrDot.setAttribute('cy', r.cy);
      ptrDot.setAttribute('fill', r.color);
      ptrBg.setAttribute('x', lx);
      ptrBg.setAttribute('y', ly);
      ptrBg.setAttribute('width', boxW);
      ptrBg.setAttribute('fill', r.color);
      ptrLabel.setAttribute('x', lx + boxW / 2);
      ptrLabel.setAttribute('y', ly + 17);
      ptrLabel.setAttribute('text-anchor', 'middle');
      ptrLabel.textContent = labelText;

      // Update detail panel
      var d = document.getElementById('brainDetail');
      d.innerHTML =
        '<div class="detail-tag" style="background:rgba(' + hexToRgb(r.color) + ',0.12);color:' + r.color + '">' + r.tag + '</div>' +
        '<h4>' + r.name + '</h4>' +
        '<img src="' + r.imgUrl + '" alt="' + r.name + '" class="brain-detail-img" onerror="this.style.display=\'none\'">' +
        '<p>' + r.desc + '</p>';
    }

    function hexToRgb(hex) {
      var r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
      return r + ',' + g + ',' + b;
    }

    // ===== GLOSSARY =====
    var glossaryData = [
      { term: 'Neuron', def: 'Sel saraf yang merupakan unit fungsional dasar sistem saraf. Terdiri dari badan sel, dendrit (penerima sinyal), dan akson (pengirim sinyal). Otak manusia memiliki sekitar 86 miliar neuron.' },
      { term: 'Sinapsis', def: 'Celah antara dua neuron tempat berlangsungnya transmisi sinyal kimia melalui neurotransmiter. Otak manusia memiliki lebih dari 100 triliun koneksi sinaptik.' },
      { term: 'Neurotransmiter', def: 'Zat kimia yang melewati sinapsis untuk meneruskan sinyal antar neuron. Contoh: dopamin (motivasi, gerakan), serotonin (mood, tidur), GABA (inhibisi), glutamat (eksitasi), dan asetilkolin (memori, kontraksi otot).' },
      { term: 'Mielin', def: 'Selubung lemak yang menyelimuti akson neuron, berfungsi mempercepat konduksi impuls listrik (konduksi saltatorial) dan melindungi serabut saraf. Kerusakannya menyebabkan Multiple Sclerosis.' },
      { term: 'Neuroplastisitas', def: 'Kemampuan otak untuk mengubah strukturnya — membentuk koneksi sinaptik baru atau memperkuat yang ada — sebagai respons terhadap pengalaman, pembelajaran, atau cedera. Dasar dari rehabilitasi neurologis.' },
      { term: 'Afasia', def: 'Gangguan kemampuan berbahasa akibat kerusakan otak, meliputi kesulitan berbicara (afasia Broca — area frontal kiri) atau memahami bahasa (afasia Wernicke — area temporal kiri).' },
      { term: 'Ataksia', def: 'Gangguan koordinasi gerakan volunter akibat kerusakan serebelum atau jalur serebelar, mengakibatkan gerakan tidak teratur, langkah sempoyongan, dan kesulitan keseimbangan.' },
      { term: 'Elektroensefalografi (EEG)', def: 'Teknik pemeriksaan yang merekam aktivitas listrik otak melalui elektroda di kulit kepala. Digunakan untuk diagnosis epilepsi, gangguan tidur, dan pemantauan koma.' },
      { term: 'Potensial Aksi', def: 'Perubahan cepat pada potensial membran neuron (dari -70 mV ke +40 mV) yang merambat sepanjang akson sebagai "sinyal listrik" — mekanisme dasar komunikasi saraf.' },
      { term: 'Refleks Spinal', def: 'Respons motorik otomatis yang diproses di sumsum tulang belakang tanpa melibatkan otak, memungkinkan reaksi cepat terhadap rangsangan berbahaya. Contoh: refleks lutut (knee-jerk reflex).' },
      { term: 'Neurogenesis', def: 'Proses pembentukan neuron baru. Pada manusia dewasa, neurogenesis terbatas terjadi di hipokampus (gyrus dentata) dan bulbus olfaktorius — penemuan revolusioner yang mengubah paradigma lama "neuron tidak bisa dibuat kembali".' },
      { term: 'Glia', def: 'Sel pendukung sistem saraf (bukan neuron) yang meliputi astrosit (pendukung metabolik), oligodendrosit (pembuat mielin di SSP), mikroglia (imun otak), dan sel Schwann (pembuat mielin di SSP perifer).' },
      { term: 'Meninges', def: 'Tiga lapisan selaput pelindung yang menyelimuti otak dan medula spinalis: duramater (terluar, paling tebal), arachnoid (tengah), dan piamater (terdalam, menempel pada otak). Peradangannya disebut meningitis.' },
      { term: 'Cairan Serebrospinal (CSF)', def: 'Cairan bening yang mengisi ruang subarachnoid dan ventrikel otak. Diproduksi ~500 mL/hari oleh pleksus koroideus. Fungsi: bantalan mekanis, nutrisi, regulasi tekanan intrakranial, dan pembuangan limbah metabolik.' },
      { term: 'Blood-Brain Barrier (BBB)', def: 'Sistem seleksi ketat yang dibentuk oleh sel endotel kapiler otak yang mengontrol zat dari aliran darah ke jaringan otak. Melindungi otak dari toksin dan patogen, namun menjadi tantangan dalam pengiriman obat ke otak.' }
    ];

    function buildGlossary() {
      var acc = document.getElementById('glossaryAccordion');
      glossaryData.forEach(function (item) {
        var div = document.createElement('div');
        div.className = 'acc-item';
        div.innerHTML =
          '<div class="acc-header" onclick="toggleAcc(this)">' +
          '<span class="acc-title">' + item.term + '</span>' +
          '<svg class="acc-icon" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>' +
          '</div>' +
          '<div class="acc-body"><div class="acc-body-inner">' + item.def + '</div></div>';
        acc.appendChild(div);
      });
    }

    function toggleAcc(header) {
      var item = header.parentElement, body = item.querySelector('.acc-body'), isOpen = item.classList.contains('open');
      item.classList.toggle('open');
      body.style.maxHeight = isOpen ? '0' : body.querySelector('.acc-body-inner').scrollHeight + 'px';
    }

    // ===== QUIZ =====
    var quizData = [
      { q: 'Bagian otak manakah yang bertanggung jawab atas koordinasi gerakan dan keseimbangan?', opts: ['Serebrum', 'Serebelum', 'Batang Otak', 'Hipotalamus'], ans: 1, exp: 'Serebelum (otak kecil) terletak di bagian bawah belakang tengkorak dan berperan utama dalam koordinasi motorik, keseimbangan, dan presisi gerakan.' },
      { q: 'Neurotransmiter apakah yang kekurangannya menjadi penyebab utama penyakit Parkinson?', opts: ['Serotonin', 'Asetilkolin', 'Dopamin', 'GABA'], ans: 2, exp: 'Parkinson disebabkan oleh degenerasi sel-sel dopaminergik di substansia nigra, mengakibatkan kekurangan dopamin yang mengganggu kontrol gerakan.' },
      { q: 'Lapisan pelindung otak yang paling luar disebut?', opts: ['Piamater', 'Arachnoid', 'Duramater', 'Epimater'], ans: 2, exp: 'Duramater adalah lapisan terluar dari tiga selaput meninges. Lapisan tengah adalah arachnoid, dan terdalam adalah piamater.' },
      { q: 'Saraf kranial manakah yang mengendalikan ekspresi wajah?', opts: ['Saraf V (Trigeminal)', 'Saraf VII (Fasial)', 'Saraf IX (Glosofaringeal)', 'Saraf XII (Hipoglosal)'], ans: 1, exp: "Saraf VII (Fasial) bertanggung jawab atas ekspresi wajah. Kerusakan saraf ini menyebabkan Bell's Palsy." },
      { q: 'Apa yang dimaksud dengan Blood-Brain Barrier (BBB)?', opts: ['Tekanan darah di dalam otak', 'Seleksi ketat zat dari aliran darah ke jaringan otak', 'Lapisan tulang pelindung otak', 'Aliran cairan serebrospinal'], ans: 1, exp: 'Blood-Brain Barrier adalah sistem seleksi ketat yang mengontrol zat-zat yang dapat melewati aliran darah menuju jaringan otak.' },
      { q: 'Lobus otak manakah yang memproses informasi visual dari retina?', opts: ['Lobus Frontal', 'Lobus Parietal', 'Lobus Temporal', 'Lobus Oksipital'], ans: 3, exp: 'Lobus Oksipital terletak di bagian paling belakang otak dan berperan sebagai pusat pemrosesan visual.' }
    ];

    var currentQ = 0, score = 0, answered = false;
    var QUIZ_TEMPLATE =
      '<div class="quiz-question" id="quizQuestion"></div>' +
      '<div class="quiz-options" id="quizOptions"></div>' +
      '<div class="quiz-feedback" id="quizFeedback"></div>' +
      '<div class="quiz-nav">' +
      '<button class="btn-quiz btn-quiz-primary" id="quizNextBtn" onclick="nextQuestion()">Selanjutnya \u2192</button>' +
      '<div class="quiz-progress"><div class="quiz-progress-bar" id="quizProgressBar"></div></div>' +
      '<span class="quiz-count" id="quizCount">1 / 6</span>' +
      '</div>';

    function initQuiz() {
      currentQ = 0; score = 0; answered = false;
      document.getElementById('quizBox').innerHTML = QUIZ_TEMPLATE;
      renderQuestion();
    }
    function renderQuestion() {
      if (currentQ >= quizData.length) {
        var pesan = score >= 4 ? 'Luar biasa! Pemahaman kamu sangat baik 🎉' : score >= 2 ? 'Cukup baik, teruslah belajar! 📚' : 'Jangan menyerah, pelajari lagi materinya 💪';
        document.getElementById('quizBox').innerHTML =
          '<div style="text-align:center;padding:20px">' +
          '<div style="font-family:Cormorant Garamond,serif;font-size:2.5rem;color:var(--accent);font-weight:700;margin-bottom:8px">' + score + ' / ' + quizData.length + '</div>' +
          '<div style="font-size:1.1rem;color:var(--text-soft);margin-bottom:24px">' + pesan + '</div>' +
          '<button class="btn-quiz btn-quiz-primary" onclick="initQuiz()">Ulangi Kuis</button>' +
          '</div>';
        return;
      }
      var q = quizData[currentQ]; answered = false;
      document.getElementById('quizQuestion').textContent = q.q;
      document.getElementById('quizProgressBar').style.width = ((currentQ / quizData.length) * 100) + '%';
      document.getElementById('quizCount').textContent = (currentQ + 1) + ' / ' + quizData.length;
      document.getElementById('quizFeedback').className = 'quiz-feedback';
      document.getElementById('quizFeedback').textContent = '';
      document.getElementById('quizNextBtn').style.display = 'none';
      var opts = document.getElementById('quizOptions'); opts.innerHTML = '';
      q.opts.forEach(function (opt, i) {
        var btn = document.createElement('button'); btn.className = 'quiz-option'; btn.textContent = opt;
        btn.onclick = function () { if (!answered) selectAnswer(i, btn); };
        opts.appendChild(btn);
      });
    }
    function selectAnswer(idx, btn) {
      answered = true; var q = quizData[currentQ], fb = document.getElementById('quizFeedback');
      document.querySelectorAll('.quiz-option').forEach(function (b, i) { if (i === q.ans) b.classList.add('correct'); else if (i === idx) b.classList.add('wrong'); b.onclick = null; });
      if (idx === q.ans) { score++; fb.className = 'quiz-feedback correct show'; fb.textContent = '✓ Benar! ' + q.exp; }
      else { fb.className = 'quiz-feedback wrong show'; fb.textContent = '✗ Kurang tepat. ' + q.exp; }
      document.getElementById('quizNextBtn').style.display = 'block';
    }
    function nextQuestion() { currentQ++; renderQuestion(); }

    // ===== SEARCH =====
    var searchIndex = [
      { title: 'Pengertian Neurologi', section: 'neurologi', desc: 'Definisi dan ruang lingkup ilmu saraf' },
      { title: 'Sistem Saraf Pusat', section: 'saraf-pusat', desc: 'Otak dan sumsum tulang belakang' },
      { title: 'Sistem Saraf Perifer', section: 'saraf-perifer', desc: 'Saraf kranial dan otonom' },
      { title: 'Penyakit Neurologis', section: 'penyakit', desc: 'Stroke, epilepsi, Parkinson, Alzheimer' },
      { title: 'Kuis Neurologi', section: 'kuis', desc: 'Uji pengetahuan sistem saraf' },
      { title: 'Peta Otak', section: 'brain-map', desc: 'Eksplorasi interaktif bagian otak' },
      { title: 'Glosarium', section: 'glosarium', desc: 'Istilah-istilah medis neurologi' },
      { title: 'Tim Kami', section: 'contact', desc: 'Anggota kelompok pembuat website' }
    ];
    function openSearch() { document.getElementById('searchOverlay').classList.add('open'); document.getElementById('searchInput').focus(); }
    function closeSearch() { document.getElementById('searchOverlay').classList.remove('open'); document.getElementById('searchResults').innerHTML = ''; document.getElementById('searchInput').value = ''; }
    function doSearch(q) {
      var res = document.getElementById('searchResults');
      if (!q.trim()) { res.innerHTML = ''; return; }
      var hits = searchIndex.filter(function (i) { return (i.title + i.desc).toLowerCase().includes(q.toLowerCase()); });
      if (!hits.length) { res.innerHTML = '<div style="padding:20px;text-align:center;color:var(--text-soft);font-size:0.88rem">Tidak ditemukan hasil untuk "' + q + '"</div>'; return; }
      res.innerHTML = hits.map(function (h) { return '<div class="search-result-item" onclick="gotoSearchResult(\'' + h.section + '\')"><div class="sr-icon"><svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg></div><div><div class="sr-title">' + h.title + '</div><div class="sr-section">' + h.desc + '</div></div></div>'; }).join('');
    }
    function gotoSearchResult(section) {
      closeSearch();
      var locked = ['neurologi', 'saraf-pusat', 'saraf-perifer', 'penyakit', 'kuis', 'brain-map', 'glosarium'];
      if (locked.includes(section) && !isLoggedIn) { showSection('login'); showToast('Silakan login untuk mengakses konten ini.'); return; }
      showSection(section);
    }

    // ===== TABS =====
    function switchTab(tab) {
      document.getElementById('tabLogin').classList.toggle('active', tab === 'login');
      document.getElementById('tabRegister').classList.toggle('active', tab === 'register');
      document.getElementById('panelLogin').classList.toggle('active', tab === 'login');
      document.getElementById('panelRegister').classList.toggle('active', tab === 'register');
      document.getElementById('loginMsg').textContent = ''; document.getElementById('registerMsg').textContent = '';
    }

    function switchTab2(name, btn) {
      document.querySelectorAll('.tab-btn').forEach(function (b) { b.classList.remove('active'); });
      document.querySelectorAll('.tab-panel').forEach(function (p) { p.classList.remove('active'); });
      btn.classList.add('active'); document.getElementById('tab-' + name).classList.add('active');
    }

    // ===== AUTH =====
    function doLogin() {
      var u = document.getElementById('uname').value.trim(), p = document.getElementById('upass').value, msgEl = document.getElementById('loginMsg');
      if (!u || !p) { msgEl.textContent = 'Username dan password wajib diisi.'; return; }
      var found = accounts.find(function (a) { return a.username === u && a.password === p; });
      if (found) {
        isLoggedIn = true; currentUser = found;
        document.querySelectorAll('.nav-link.locked').forEach(function (l) { l.classList.remove('locked'); });
        document.getElementById('navMateri').classList.remove('locked');
        document.getElementById('navEksplorasi').classList.remove('locked');
        var nama = found.nama || found.username;
        document.getElementById('navUserLabel').textContent = nama;
        document.getElementById('navUserAvatar').textContent = nama.charAt(0).toUpperCase();
        document.getElementById('navUserName').classList.add('show');
        document.getElementById('navLoginBtn').style.display = 'none';
        document.getElementById('btnLogout').classList.add('show');
        msgEl.textContent = '';
        showToast('Selamat datang, ' + nama + '! 👋');
        showSection('neurologi');
      } else { msgEl.textContent = 'Username atau password salah. Silakan coba lagi.'; }
    }

    function doRegister() {
      var namaD = document.getElementById('rNamaDepan').value.trim(), namaB = document.getElementById('rNamaBelakang').value.trim();
      var email = document.getElementById('rEmail').value.trim(), uname = document.getElementById('rUsername').value.trim();
      var pass = document.getElementById('rPass').value, passC = document.getElementById('rPassConf').value;
      var agree = document.getElementById('agreeTerms').checked, msgEl = document.getElementById('registerMsg');
      msgEl.className = 'auth-msg';
      if (!namaD || !email || !uname || !pass || !passC) { msgEl.className = 'auth-msg error'; msgEl.textContent = 'Semua kolom wajib diisi.'; return; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { msgEl.className = 'auth-msg error'; msgEl.textContent = 'Format email tidak valid.'; return; }
      if (uname.length < 3) { msgEl.className = 'auth-msg error'; msgEl.textContent = 'Username minimal 3 karakter.'; return; }
      if (accounts.find(function (a) { return a.username === uname; })) { msgEl.className = 'auth-msg error'; msgEl.textContent = 'Username sudah digunakan.'; return; }
      if (pass.length < 6) { msgEl.className = 'auth-msg error'; msgEl.textContent = 'Password minimal 6 karakter.'; return; }
      if (pass !== passC) { msgEl.className = 'auth-msg error'; msgEl.textContent = 'Konfirmasi password tidak cocok.'; return; }
      if (!agree) { msgEl.className = 'auth-msg error'; msgEl.textContent = 'Anda harus menyetujui syarat & ketentuan.'; return; }
      var namaLengkap = namaB ? namaD + ' ' + namaB : namaD;
      accounts.push({ username: uname, password: pass, nama: namaLengkap, email: email });
      msgEl.className = 'auth-msg success'; msgEl.textContent = '✓ Akun berhasil dibuat! Silakan masuk.';
      ['rNamaDepan', 'rNamaBelakang', 'rEmail', 'rUsername', 'rPass', 'rPassConf'].forEach(function (id) { document.getElementById(id).value = ''; });
      document.getElementById('agreeTerms').checked = false; document.getElementById('pwBar').style.width = '0%';
      showToast('Pendaftaran berhasil! Silakan login.');
      setTimeout(function () { switchTab('login'); }, 1800);
    }

    function doLogout() {
      isLoggedIn = false; currentUser = null;
      document.querySelectorAll('.nav-link').forEach(function (l) {
        var t = l.getAttribute('data-target');
        if (t !== 'home' && t !== 'login') l.classList.add('locked');
      });
      document.getElementById('navMateri').classList.add('locked');
      document.getElementById('navEksplorasi').classList.add('locked');
      document.getElementById('navUserName').classList.remove('show');
      document.getElementById('navLoginBtn').style.display = '';
      document.getElementById('btnLogout').classList.remove('show');
      document.getElementById('uname').value = ''; document.getElementById('upass').value = ''; document.getElementById('loginMsg').textContent = '';
      switchTab('login'); showToast('Anda telah logout.'); showSection('home');
    }

    function goToLogin() { showSection('login'); }

    function showSection(target) {
      document.querySelectorAll('.section').forEach(function (s) { s.classList.remove('active'); });
      document.querySelectorAll('.nav-link').forEach(function (l) { l.classList.remove('active'); });
      var sec = document.getElementById(target); if (sec) sec.classList.add('active');
      document.querySelectorAll('[data-target="' + target + '"]').forEach(function (l) { l.classList.add('active'); });
      window.scrollTo(0, 0);
    }

    function showToast(msg) {
      var t = document.getElementById('toast'); t.textContent = msg; t.classList.add('show');
      setTimeout(function () { t.classList.remove('show'); }, 3200);
    }

    function checkPwStrength(val) {
      var bar = document.getElementById('pwBar'), sc = 0;
      if (val.length >= 6) sc++; if (val.length >= 10) sc++;
      if (/[A-Z]/.test(val)) sc++; if (/[0-9]/.test(val)) sc++; if (/[^a-zA-Z0-9]/.test(val)) sc++;
      bar.style.width = (sc / 5 * 100) + '%';
      bar.style.background = ['#e74c3c', '#e67e22', '#f1c40f', '#2ecc71', '#27ae60'][Math.max(0, sc - 1)] || '#e74c3c';
    }

    function toggleDropdown(id) {
      var menuId = 'menu' + id.replace('dd', '');
      var menu = document.getElementById(menuId);
      var isOpen = menu.classList.contains('open');
      closeAllDropdowns();
      if (!isOpen) menu.classList.add('open');
    }
    function closeAllDropdowns() {
      document.querySelectorAll('.nav-dropdown-menu').forEach(function (m) { m.classList.remove('open'); });
    }
    document.addEventListener('click', function (e) { if (!e.target.closest('.nav-dropdown')) closeAllDropdowns(); });

    function pickSection(target, ddId) {
      closeAllDropdowns();
      var locked = ['neurologi', 'saraf-pusat', 'saraf-perifer', 'penyakit', 'kuis', 'brain-map', 'glosarium'];
      if (locked.includes(target) && !isLoggedIn) { showSection('login'); showToast('Silakan login untuk mengakses konten ini.'); return; }
      showSection(target);
    }

    // ===== COUNTERS =====
    function startCounters() {
      document.querySelectorAll('.count-up').forEach(function (el) {
        var target = parseInt(el.getAttribute('data-target'));
        var suffix = el.getAttribute('data-suffix') || '+';
        var duration = 1800, startTime = null;
        function step(ts) {
          if (!startTime) startTime = ts;
          var p = Math.min((ts - startTime) / duration, 1);
          var e = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.floor(e * target) + suffix;
          if (p < 1) requestAnimationFrame(step);
        }
        var obs = new IntersectionObserver(function (en) { if (en[0].isIntersecting) { requestAnimationFrame(step); obs.disconnect(); } });
        obs.observe(el);
      });
    }

    // ===== SCROLL =====
    document.addEventListener('scroll', function () {
      var win = window.scrollY, doc = document.documentElement.scrollHeight - window.innerHeight;
      document.getElementById('progressBar').style.width = (doc > 0 ? (win / doc) * 100 : 0) + '%';
      document.getElementById('backTop').classList.toggle('show', win > 300);
    });

    // ===== NAV LINKS =====
    document.querySelectorAll('.nav-link[data-target]').forEach(function (link) {
      link.addEventListener('click', function () {
        if (this.classList.contains('locked')) return;
        var target = this.getAttribute('data-target'); if (!target) return;
        showSection(target);
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { closeSearch(); closeAllDropdowns(); }
      if (e.key === 'Enter') {
        var loginSec = document.getElementById('login');
        if (loginSec && loginSec.classList.contains('active')) {
          if (document.getElementById('panelLogin').classList.contains('active')) doLogin(); else doRegister();
        }
      }
    });

    window.onload = function () {
      buildTeam(); buildBrainMap(); buildGlossary(); initQuiz(); startCounters();
    };
  