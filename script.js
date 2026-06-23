document.addEventListener('DOMContentLoaded', () => {
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, revealOptions);

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });


  const diagram = document.querySelector('.support-diagram-main');
  if (diagram) {
    const diagramObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('diagram-inview');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.35 });

    diagramObserver.observe(diagram);
  }

  const jobsData = [
    {
      id: 1,
      title: '法人営業（OA通信機器・ネットワーク）',
      tags: ['新卒・第二新卒歓迎', '中途採用', '正社員', '秋田市', '育成体制あり', '土日祝休み'],
      summary: 'お客様の課題を聞き、通信環境の改善を提案する仕事です。地域の企業に頼られる存在を目指したい方に向いています。',
      impact: String.fromCharCode(0x4F01,0x696D,0x306E,0x4E0D,0x5B89,0x3092,0x3001,0x5B89,0x5FC3,0x306B,0x5909,0x3048,0x308B,0x3002),
      audienceMessages: [
        {
          label: "入社後のステップ",
          text: "まずは先輩の同行から始め、お客様との話し方や提案の流れを一つずつ覚えていけます。"
        },
        {
          label: "経験を活かしたい方へ",
          text: "接客・営業・お客様対応の経験がある方は、ゆくゆく担当企業を持って活躍できます。"
        }
      ],
      meta: [
        { label: String.fromCharCode(0x7D66,0x4E0E), value: '月給227,500円〜' },
        { label: '休日', value: '土日祝休み' },
        { label: '勤務地', value: '秋田市・転勤なし' },
        { label: '対象', value: '経験不問' }
      ],
      fit: '人と話すことが好きで、地域の企業に頼られる存在を目指したい方へ。',
      description: `
        <strong>企業の「通信環境」を整える、オフィスのかかりつけ医です。</strong><br>
        企業へ通信環境の最適化、生産性向上につながる提案を行います。ご要望のヒアリングから提案、設置工事後のフォローまで、一貫してお客様に寄り添います。<br><br>

        <div class="job-point-box">
          <strong class="job-point-heading">この仕事のポイント</strong>
          <ul class="job-point-list">
            <li style="margin-bottom: 8px;"><strong>営業の基礎から学べる</strong> 先輩が同行しながら、お客様対応や提案の流れを丁寧に教えます。</li>
            <li style="margin-bottom: 8px;"><strong>働きやすい環境</strong> 完全週休2日制（土日祝）で、年間休日120日以上。転勤もありません。</li>
            <li style="margin-bottom: 8px;"><strong>安定した待遇</strong> 賞与・昇給に加え、通勤手当、住宅手当、家族手当などを整えています。</li>
            <li><strong>地域に貢献できる仕事</strong> 通信環境を支え、社会貢献型サービス「<span class="no-break">コネクト光</span>」を通じて地域支援にもつながります。</li>
          </ul>
        </div>

        <strong>仕事内容</strong><br>
        お客様のオフィスに訪問し、ビジネスフォンやネットワーク環境の最適化を提案します。<br>
        ・企業の電話設備、インターネット、Wi-Fi環境の見直し提案<br>
        ・集合住宅向け無料インターネットの提案<br>
        ・ブラウブリッツ秋田や地域団体への支援につながるサービス提案<br>
        ・パソコンの使い方、設置方法などのサポート<br><br>
        「社会貢献型」という強みで地域に貢献しながら、お客様に喜ばれるやりがいのある仕事です。
      `,
      requirements: [
        '新卒（来春卒業予定）・第二新卒・中途の方を歓迎',
        '35歳まで（長期キャリア形成のため）',
        '普通自動車運転免許（AT限定可）をお持ちの方。新卒者は入社後取得でOK',
        '入社後に一から学べるため、専門知識は入社時点で不要です',
        '素直な姿勢で、新しいことを吸収しようと努力できる方',
        'チームの一員として周囲と協力できる方'
      ],
      details: [
        "【新卒】専門・短大卒：月給227,500円",
        "【中途】月給240,000円から ※経験不問。経験・スキルにより経験者手当あり",
        "【賞与】年2回（基本給4.5か月分、夏2か月・冬2.5か月）※実績に応じ報奨金あり",
        "【手当】通勤手当、残業手当、住宅手当、家族手当、経験者手当、資格手当",
        "【休日・休暇】完全週休2日制（土日祝）、年間休日120日以上、年末年始・夏季・慶弔休暇、有給休暇",
        "【勤務時間】平日9:00から18:00（休憩60分）",
        "【勤務地】秋田県秋田市。転勤なし。マイカー通勤可、社員駐車場あり",
        "【待遇・福利厚生】社会保険完備、業務時社用車貸与、定期健康診断、ブラウブリッツ秋田ホームゲーム無料観戦"
      ],
    },
    {
      id: 2,
      title: 'システムエンジニア（通信インフラ工事・設定サポート）',
      tags: ['新卒・第二新卒歓迎', '中途採用', '正社員', '秋田市', '土日祝休み'],
      summary: '通信インフラの設置工事からネットワーク機器・クラウドPBXの設定、導入後サポートまで担当します。',
      impact: String.fromCharCode(0x898B,0x3048,0x306A,0x3044,0x901A,0x4FE1,0x3092,0x3001,0x983C,0x308C,0x308B,0x6280,0x8853,0x306B,0x3002),
      audienceMessages: [
        {
          label: "入社後のステップ",
          text: "通信インフラの基礎から学び、先輩と一緒に設置工事・設定・サポートを経験しながら力をつけられます。"
        },
        {
          label: "経験を活かしたい方へ",
          text: "現場作業や機器設定、ネットワークの知識を活かし、通信インフラ全般の対応力を広げられます。"
        }
      ],
      meta: [
        { label: String.fromCharCode(0x7D66,0x4E0E), value: '月給212,500円〜' },
        { label: '休日', value: '土日祝休み' },
        { label: '勤務地', value: '秋田市・転勤なし' },
        { label: '対象', value: '経験不問' }
      ],
      fit: '機械やネットワークが好きで、コツコツ学びながら専門性を身につけたい方へ。',
      description: `
        <strong>オフィスの通信インフラを現場から整えるエンジニアです。</strong><br>
        企業向けの通信設備やネットワーク機器について、設置工事・配線対応・各種設定・導入後サポートまで幅広く担当します。<br><br>

        <div class="job-point-box">
          <strong class="job-point-heading">この仕事のポイント</strong>
          <ul class="job-point-list">
            <li style="margin-bottom: 8px;"><strong>通信インフラを幅広く学べる</strong> 設置工事、配線、機器設定、導入後サポートまで、現場で専門性を身につけられます。</li>
            <li style="margin-bottom: 8px;"><strong>働きやすい環境</strong> 完全週休2日制（土日祝）で、年間休日120日以上。転勤もありません。</li>
            <li style="margin-bottom: 8px;"><strong>安定した待遇</strong> 賞与・昇給に加え、通勤手当、住宅手当、家族手当などを整えています。</li>
            <li><strong>地域に貢献できる仕事</strong> 通信環境を支え、社会貢献型サービス「<span class="no-break">コネクト光</span>」を通じて地域支援にもつながります。</li>
          </ul>
        </div>

        <strong>仕事内容</strong><br>
        企業向けWi-Fiルーターなどのネットワーク機器設定、クラウドPBXやビジネスフォンのシステム設定、通信設備の設置工事、導入後の通信サポートを行います。<br>
        ・企業向けネットワーク機器の設置、設定、キッティング<br>
        ・LAN配線やWi-Fi環境の整備、設置工事<br>
        ・クラウドPBX、ビジネスフォンのシステム設定<br>
        ・導入後の通信サポート、トラブルシューティング<br><br>
        まずは先輩社員のサポートからスタートし、少しずつ専門知識を身につけていけます。
      `,
      requirements: [
        '新卒（来春卒業予定）・第二新卒・中途の方を歓迎',
        '普通自動車運転免許（AT限定可）をお持ちの方。新卒者は入社後取得でOK',
        '通信インフラ工事やネットワーク機器の設置・設定に興味があり、学ぶ意欲がある方',
        'TP-Link Omada SDN関連の認定資格（OCNAなど）をお持ちの方歓迎',
        'ネットワーク関連資格や情報処理系資格、CCNAなどをお持ちの方歓迎',
        'チームで協力しながら丁寧に作業を進められる方',
        'ハローワークでお仕事探し中の方も歓迎'
      ],
      details: [
        "【新卒】専門・短大卒：月給212,500円",
        "【中途】月給230,000円から ※経験不問。経験・スキルにより経験者手当あり",
        "【賞与】年2回（基本給4.5か月分、夏2か月・冬2.5か月）※実績に応じ報奨金あり",
        "【手当】通勤手当、残業手当、住宅手当、家族手当、経験者手当、資格手当",
        "【休日・休暇】完全週休2日制（土日祝）、年間休日120日以上、年末年始・夏季・慶弔休暇、有給休暇",
        "【勤務時間】平日9:00から18:00（休憩60分）",
        "【勤務地】秋田県秋田市。転勤なし。マイカー通勤可、社員駐車場あり",
        "【待遇・福利厚生】社会保険完備、業務時社用車貸与、定期健康診断、ブラウブリッツ秋田ホームゲーム無料観戦"
      ],
    },
    {
      id: 3,
      title: '技術職（通信インフラ工事・保守）',
      tags: ['中途採用', '正社員', '秋田市', '経験者採用', '第二種電気工事士必須', '土日祝休み'],
      summary: '&#x30D3;&#x30B8;&#x30CD;&#x30B9;&#x30D5;&#x30A9;&#x30F3;&#x3001;Wi-Fi&#x3001;&#x9632;&#x72AF;&#x30AB;&#x30E1;&#x30E9;&#x306A;&#x3069;&#x306E;&#x8A2D;&#x7F6E;&#x30FB;&#x914D;&#x7DDA;&#x30FB;&#x4FDD;&#x5B88;&#x3092;&#x62C5;&#x5F53;&#x3057;&#x307E;&#x3059;&#x3002;&#x7D4C;&#x9A13;&#x3084;&#x8CC7;&#x683C;&#x3092;&#x8A55;&#x4FA1;&#x3057;&#x307E;&#x3059;&#x3002;',
      impact: String.fromCharCode(0x79CB,0x7530,0x306E,0x73FE,0x5834,0x3092,0x3001,0x6280,0x8853,0x3067,0x652F,0x3048,0x308B,0x3002),
      audienceMessages: [
        {
          label: "中途・経験者の方へ",
          text: "これまでの工事・保守経験や資格を活かし、現場対応の中心メンバーとして活躍できます。"
        }
      ],
      meta: [
        { label: String.fromCharCode(0x7D66,0x4E0E), value: '月給230,000円〜' },
        { label: '休日', value: '土日祝休み' },
        { label: '勤務地', value: '秋田市・転勤なし' },
        { label: '対象', value: '経験者採用' }
      ],
      fit: '通信工事や電気工事の経験を、安定した環境で活かしたい方へ。',
      description: `
        <strong>あなたの技術と経験を、秋田で活かしませんか。</strong><br>
        企業へビジネスフォン、インターネット、Wi-Fi、防犯カメラなどの設置・配線工事、初期設定、保守対応を行います。<br><br>

        <div class="job-point-box">
          <strong class="job-point-heading">この仕事のポイント</strong>
          <ul class="job-point-list">
            <li style="margin-bottom: 8px;"><strong>資格・経験を活かせる</strong> 第二種電気工事士の資格と実務経験を活かし、通信工事や保守の現場で経験を広げられます。</li>
            <li style="margin-bottom: 8px;"><strong>働きやすい環境</strong> 完全週休2日制（土日祝）で、年間休日120日以上。転勤もありません。</li>
            <li style="margin-bottom: 8px;"><strong>安定した待遇</strong> 賞与・昇給に加え、通勤手当、住宅手当、家族手当などを整えています。</li>
            <li><strong>地域に貢献できる仕事</strong> 通信環境を支え、社会貢献型サービス「<span class="no-break">コネクト光</span>」を通じて地域支援にもつながります。</li>
          </ul>
        </div>

        <strong>仕事内容</strong><br>
        企業へビジネスフォン、インターネット、Wi-Fi、防犯カメラなどの設置・配線工事、初期設定、保守対応を行います。<br>
        ・LANケーブルの配線やWi-Fiルーターの設置工事<br>
        ・ビジネスフォン、クラウドPBXの設置・設定作業<br>
        ・防犯カメラや複合機（OA機器）の導入サポート<br><br>
        技術部門の中核メンバーとして、後輩育成や品質向上にも力を貸してください。
      `,
      requirements: [
        '普通自動車運転免許（AT限定可）をお持ちの方',
        '通信回線工事、ビジネスフォン設置、LAN配線工事、OA機器の設置・設定などの実務経験がある方',
        '第二種電気工事士の資格をお持ちの方',
        '工事担任者（総合通信など）の資格をお持ちの方歓迎',
        'チームで協力しながら丁寧に作業を進められる方',
        'お客様に寄り添い、「ありがとう」と言われる仕事にやりがいを感じる方',
        'ハローワークでお仕事探し中の方も歓迎'
      ],
      details: [
        "【給与】月給230,000円から ※実務経験・資格・スキルにより経験者手当あり",
        "【賞与】年2回（基本給4.5か月分、夏2か月・冬2.5か月）※実績に応じ報奨金あり",
        "【手当】通勤手当、残業手当、住宅手当、家族手当、経験者手当、資格手当",
        "【休日・休暇】完全週休2日制（土日祝）、年間休日120日以上、年末年始・夏季・慶弔休暇、有給休暇",
        "【勤務時間】平日9:00から18:00（休憩60分）",
        "【勤務地】秋田県秋田市。転勤なし。マイカー通勤可、社員駐車場あり",
        "【待遇・福利厚生】社会保険完備、業務時社用車貸与、定期健康診断、ブラウブリッツ秋田ホームゲーム無料観戦"
      ],
    }
  ];

  const jobsContainer = document.getElementById('jobsContainer');
  const contactUrl = 'https://connect-web.jp/contact';

  const entryModal = document.createElement('div');
  entryModal.className = 'entry-modal';
  entryModal.setAttribute('aria-hidden', 'true');
  entryModal.innerHTML = `
    <div class="entry-modal-backdrop" data-entry-modal-close></div>
    <div class="entry-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="entryModalTitle">
      <button type="button" class="entry-modal-close" aria-label="閉じる" data-entry-modal-close>×</button>
      <p class="entry-modal-kicker">ENTRY CONFIRMATION</p>
      <h3 id="entryModalTitle">応募職種の記入をお願いします</h3>
      <p class="entry-modal-lead">次のフォームの「お問い合わせ内容」欄に、下記の職種名を記入してください。</p>
      <div class="entry-modal-job" id="entryModalJob"></div>
      <p class="entry-modal-example">記入例：採用応募／<span id="entryModalExample"></span>に応募希望</p>
      <div class="entry-modal-actions">
        <button type="button" class="btn-outline" data-entry-modal-close>戻る</button>
        <a href="${contactUrl}" target="_blank" class="btn-primary" id="entryModalProceed">フォームへ進む</a>
      </div>
    </div>
  `;
  document.body.appendChild(entryModal);

  const modalJob = entryModal.querySelector('#entryModalJob');
  const modalExample = entryModal.querySelector('#entryModalExample');
  const modalProceed = entryModal.querySelector('#entryModalProceed');
  const modalCloseEls = entryModal.querySelectorAll('[data-entry-modal-close]');

  function openEntryModal(jobTitle) {
    modalJob.textContent = jobTitle;
    modalExample.textContent = jobTitle;
    modalProceed.href = `${contactUrl}?job=${encodeURIComponent(jobTitle)}`;
    entryModal.classList.add('active');
    entryModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    modalProceed.focus();
  }

  function closeEntryModal() {
    entryModal.classList.remove('active');
    entryModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }

  modalCloseEls.forEach(el => {
    el.addEventListener('click', closeEntryModal);
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && entryModal.classList.contains('active')) {
      closeEntryModal();
    }
  });

  function renderJobs() {
    jobsContainer.innerHTML = '';
    const jobIds = (jobsContainer.dataset.jobIds || '')
      .split(',')
      .map(id => Number(id.trim()))
      .filter(Boolean);
    const recruitMode = jobsContainer.dataset.recruitMode || 'all';
    const visibleJobs = jobIds.length ? jobsData.filter(job => jobIds.includes(job.id)) : jobsData;
    
    visibleJobs.forEach(job => {
      const jobItem = document.createElement('div');
      jobItem.classList.add('job-item');
      jobItem.id = `job-${job.id}`;
      
      const displayTags = (() => {
        if (recruitMode === 'new' && (job.id === 1 || job.id === 2)) {
          return ['新卒歓迎', '第二新卒歓迎', '正社員', '秋田市', '土日祝休み'];
        }
        if (recruitMode === 'career' && (job.id === 1 || job.id === 2)) {
          return ['中途採用', '正社員', '秋田市', '経験不問', '土日祝休み', '転勤なし'];
        }
        return job.tags;
      })();
      const tagsHtml = displayTags.map(tag => `<span class="tag">${tag}</span>`).join('');
      const displayMeta = job.meta
        .filter(item => {
          if (recruitMode === 'new' && (job.id === 1 || job.id === 2)) {
            return item.label !== '対象';
          }
          return true;
        })
        .map(item => {
          if (recruitMode === 'career' && item.label === String.fromCharCode(0x7D66, 0x4E0E)) {
            if (job.id === 1) {
              return { ...item, value: '月給240,000円〜' };
            }
            if (job.id === 2) {
              return { ...item, value: '月給230,000円〜' };
            }
          }
          return item;
        });
      const metaHtml = displayMeta.map(item => `
        <div class="job-meta-item">
          <span>${item.label}</span>
          <strong>${item.value}</strong>
        </div>
      `).join('');
      const requirements = job.requirements.map(req => {
        if (recruitMode === 'new' && req === '新卒（来春卒業予定）・第二新卒・中途の方を歓迎') {
          return '新卒（来春卒業予定）・第二新卒の方を歓迎';
        }
        if (recruitMode === 'career' && req === '新卒（来春卒業予定）・第二新卒・中途の方を歓迎') {
          return '中途の方を歓迎';
        }
        if (recruitMode === 'career' && req.includes('新卒者は入社後取得でOK')) {
          return '普通自動車運転免許（AT限定可）をお持ちの方';
        }
        return req;
      });
      const displayRequirements = requirements.filter(req => {
        if (recruitMode === 'new') {
          return !req.includes('35歳まで')
            && !req.includes('TP-Link Omada SDN')
            && !req.includes('CCNA')
            && !req.includes('情報処理系資格')
            && !req.includes('ハローワーク');
        }
        return true;
      });
      const reqsHtml = displayRequirements.map(req => `<li>${req}</li>`).join('');
      const details = job.details.filter(det => {
        if (recruitMode === 'new') return !det.startsWith('【中途】');
        if (recruitMode === 'career') return !det.startsWith('【新卒】');
        return true;
      });
      const detailHtml = details.map(det => `<li>${det}</li>`).join('');
      const displayTitle = (() => {
        if (recruitMode === 'new' && (job.id === 1 || job.id === 2)) {
          return `【新卒採用】${job.title}`;
        }
        if (recruitMode === 'career' && (job.id === 1 || job.id === 2)) {
          return `【中途採用】${job.title}`;
        }
        return job.title;
      })();
      const audienceMessages = (() => {
        if (recruitMode === 'new' && (job.id === 1 || job.id === 2)) {
          return job.audienceMessages?.slice(0, 1);
        }
        if (recruitMode === 'career' && (job.id === 1 || job.id === 2)) {
          return job.audienceMessages?.map((message, index) => {
            if (index === 0) {
              return { ...message, label: '通信業界が初めての方へ' };
            }
            return message;
          });
        }
        return job.audienceMessages;
      })();
      const audienceHtml = audienceMessages ? `
        <div class="job-audience-messages">
          ${audienceMessages.map(message => `
            <div class="job-audience-message">
              <strong>${message.label}</strong>
              <p>${message.text}</p>
            </div>
          `).join('')}
        </div>
      ` : '';

      jobItem.innerHTML = `
        <div class="job-header">
          <div class="job-title-sec">
            <div class="job-kicker">POSITION ${String(job.id).padStart(2, '0')}</div>
            <h3>${displayTitle}</h3>
            <p class="job-impact-label">${job.impact}</p>
            <p class="job-summary">${job.summary}</p>
            <div class="job-tags">
              ${tagsHtml}
            </div>
            <div class="job-meta">
              ${metaHtml}
            </div>
            <p class="job-fit">${job.fit}</p>
          </div>
          <div class="job-action">
            <span>詳しく見る</span>
            <div class="job-icon">+</div>
          </div>
        </div>
        <div class="job-details">
          <h4>【給与・待遇詳細】</h4>
          <ul style="list-style-type: none; padding-left: 0; margin-bottom: 20px;">${detailHtml}</ul>
          <h4>【業務内容】</h4>
          ${audienceHtml}
          <p>${job.description}</p>
          <h4>【求める人物・必須条件】</h4>
          <ul>${reqsHtml}</ul>
          <div style="margin-top: 25px; text-align: center;">
            <button type="button" class="btn-primary btn-small entry-trigger">この職種にエントリー</button>
            <p class="entry-note">フォーム移動前に、応募職種の記入案内を表示します。</p>
          </div>
        </div>
      `;

      jobsContainer.appendChild(jobItem);

      const header = jobItem.querySelector('.job-header');
      header.addEventListener('click', () => {
        const isActive = jobItem.classList.contains('active');
        
        document.querySelectorAll('.job-item').forEach(item => {
          item.classList.remove('active');
        });

        if (!isActive) {
          jobItem.classList.add('active');
          requestAnimationFrame(() => {
            const navHeight = document.querySelector('.navbar')?.offsetHeight || 0;
            const targetTop = jobItem.getBoundingClientRect().top + window.pageYOffset - navHeight - 18;
            window.scrollTo({
              top: Math.max(targetTop, 0),
              behavior: 'smooth'
            });
          });
        }
      });

      const entryTrigger = jobItem.querySelector('.entry-trigger');
      entryTrigger.addEventListener('click', event => {
        event.stopPropagation();
        openEntryModal(displayTitle);
      });
    });

    document.querySelectorAll('[data-open-job]').forEach(button => {
      button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-open-job');
        const target = document.getElementById(targetId);

        if (!target) return;

        document.querySelectorAll('.job-item').forEach(item => {
          item.classList.remove('active');
        });

        target.classList.add('active');
        const navHeight = document.querySelector('.main-header')?.offsetHeight || 0;
        const targetTop = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 18;
        window.scrollTo({
          top: Math.max(targetTop, 0),
          behavior: 'smooth'
        });
      });
    });
  }

  if (jobsContainer) {
    setTimeout(renderJobs, 300);
  }

  const tabLinks = document.querySelectorAll('.story-tab-links li');
  const tabContents = document.querySelectorAll('.story-tab-content');

  tabLinks.forEach(link => {
    link.addEventListener('click', () => {
      tabLinks.forEach(l => l.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      link.classList.add('active');

      const tabId = link.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
    });
  });

  const readMoreBtns = document.querySelectorAll('.read-more-btn');
  readMoreBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.previousElementSibling;
      const isExpanded = content.classList.contains('expanded');
      
      if (isExpanded) {
        content.classList.remove('expanded');
        btn.classList.remove('expanded');
        btn.innerHTML = '続きを読む <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>';
      } else {
        content.classList.add('expanded');
        btn.classList.add('expanded');
        btn.innerHTML = '閉じる <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>';
      }
    });
  });
});
