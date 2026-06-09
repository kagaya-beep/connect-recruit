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
      title: '【新卒・中途】法人営業（OA通信機器・ネットワーク）',
      tags: ['新卒・第二新卒歓迎', '中途採用', '正社員', '秋田市', '未経験歓迎', '土日祝休み'],
      summary: 'お客様の課題を聞き、通信・IT環境の改善を提案する仕事です。未経験から営業に挑戦したい方に向いています。',
      impact: String.fromCharCode(0x4F01,0x696D,0x306E,0x4E0D,0x5B89,0x3092,0x3001,0x5B89,0x5FC3,0x306B,0x5909,0x3048,0x308B,0x3002),
      audienceMessages: [
        {
          label: "新卒・未経験の方へ",
          text: "まずは先輩の同行から始め、お客様との話し方や提案の流れを一つずつ覚えていけます。"
        },
        {
          label: "中途の方へ",
          text: "営業経験は問いません。接客や提案の経験がある方は、ゆくゆく担当企業を持って活躍できます。"
        }
      ],
      meta: [
        { label: String.fromCharCode(0x7D66,0x4E0E), value: '月給215,000円〜' },
        { label: '休日', value: '土日祝休み' },
        { label: '勤務地', value: '秋田市・転勤なし' },
        { label: '対象', value: '未経験歓迎' }
      ],
      fit: '人と話すことが好きで、地域の企業に頼られる存在を目指したい方へ。',
      description: `
        <strong>企業の「通信環境」を整える、オフィスのかかりつけ営業です。</strong><br>
        企業へ通信環境の最適化、生産性向上につながる提案を行います。ご要望のヒアリングから提案、設置工事後のフォローまで、一貫してお客様に寄り添います。<br><br>

        <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
          <strong style="color: #0d47a1;">この仕事のポイント</strong><br>
          <ul style="list-style-type: none; padding-left: 0; margin-top: 10px;">
            <li style="margin-bottom: 8px;"><strong>未経験からプロへ</strong> 業界経験ゼロでも安心。研修体制があり、先輩が一から丁寧に教えます。</li>
            <li style="margin-bottom: 8px;"><strong>提案しやすい商材</strong> 約2,000社の導入実績と、社会貢献型サービス「<span class="no-break">コネクト光</span>」という独自の強みがあります。</li>
            <li style="margin-bottom: 8px;"><strong>働きやすい環境</strong> 完全週休2日制で、プライベートも大切にできます。</li>
            <li><strong>頑張りを正当に評価</strong> 実績に応じた報奨金があり、成果が給与に反映されます。</li>
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
        '普通自動車運転免許（AT限定可）をお持ちの方',
        '学歴・職歴・スキル不問。未経験歓迎',
        '素直な姿勢で、新しいことを吸収しようと努力できる方',
        'チームの一員として周囲と協力できる方'
      ],
      details: [
        "【新卒初任給】高卒：月給215,000円 / 専門・短大卒：月給227,500円 / 大卒：月給240,000円",
        "【中途給与】月給240,000円から ※経験不問。経験・スキルにより経験者手当あり",
        "【賞与】年2回（前年実績：基本給5か月分、夏2か月・冬3か月）",
        "【手当】通勤手当、住宅手当、家族手当など",
        "【休日】完全週休2日制（土日祝）、年間休日120日以上、有給取得推進"
      ],
    },
    {
      id: 2,
      title: '【新卒・中途】システムエンジニア（ネットワーク設定・ITサポート）',
      tags: ['新卒・第二新卒歓迎', '中途採用', '正社員', '秋田市', '土日祝休み', '残業ほぼなし'],
      summary: 'ネットワーク機器やクラウドPBXの設定、導入後サポートを担当します。ITに興味がある方を育てるポジションです。',
      impact: String.fromCharCode(0x898B,0x3048,0x306A,0x3044,0x901A,0x4FE1,0x3092,0x3001,0x983C,0x308C,0x308B,0x6280,0x8853,0x306B,0x3002),
      audienceMessages: [
        {
          label: "新卒・未経験の方へ",
          text: "ネットワークの基礎から学び、先輩と一緒に設定・サポートを経験しながら力をつけられます。"
        },
        {
          label: "中途の方へ",
          text: "IT・通信の経験は問いません。興味や学ぶ姿勢を活かし、専門性を少しずつ広げられます。"
        }
      ],
      meta: [
        { label: String.fromCharCode(0x7D66,0x4E0E), value: '月給195,000円〜' },
        { label: '休日', value: '土日祝休み' },
        { label: '勤務', value: '残業ほぼなし' },
        { label: '対象', value: '資格不問' }
      ],
      fit: '機械やITが好きで、コツコツ学びながら専門性を身につけたい方へ。',
      description: `
        <strong>オフィス環境をITの力で快適にするエンジニアです。</strong><br>
        開通工事や配線工事などの物理的な作業ではなく、企業向けネットワーク機器やクラウドPBXなどの設定・ITサポートを中心に担当します。<br><br>

        <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
          <strong style="color: #0d47a1;">この仕事のポイント</strong><br>
          <ul style="list-style-type: none; padding-left: 0; margin-top: 10px;">
            <li style="margin-bottom: 8px;"><strong>資格・経験不問</strong> ITや通信に興味があれば歓迎します。</li>
            <li style="margin-bottom: 8px;"><strong>働きやすい環境</strong> 完全週休2日制で、残業はほとんどありません。転勤もありません。</li>
            <li style="margin-bottom: 8px;"><strong>安定待遇</strong> \u5B66\u6B74\u30FB\u7D4C\u9A13\u30FB\u30B9\u30AD\u30EB\u306B\u5FDC\u3058\u305F\u7D66\u4E0E\u8A2D\u5B9A\u3002入社5年で年収600万円も目指せます。</li>
            <li><strong>地域貢献</strong> 仕事がそのまま地域の子ども食堂やスポーツ団体への支援にもつながります。</li>
          </ul>
        </div>

        <strong>仕事内容</strong><br>
        企業向けWi-Fiルーターなどのネットワーク機器設定、クラウドPBXやビジネスフォンのシステム設定、導入後のITサポートを行います。<br>
        ・企業向けネットワーク機器の設定、キッティング<br>
        ・クラウドPBX、ビジネスフォンのシステム設定<br>
        ・導入後のITサポート、トラブルシューティング<br><br>
        まずは先輩社員のサポートからスタートし、少しずつ専門知識を身につけていけます。
      `,
      requirements: [
        '新卒（来春卒業予定）・第二新卒・中途の方を歓迎',
        '普通自動車運転免許（AT限定可）をお持ちの方。新卒者は入社後取得でOK',
        'ITやネットワーク機器の設定に興味があり、学ぶ意欲がある方',
        'TP-Link Omada SDN関連の認定資格（OCNAなど）をお持ちの方歓迎',
        'ITパスポート、基本情報技術者、CCNAなどの資格をお持ちの方歓迎',
        'チームで協力しながら丁寧に作業を進められる方',
        '学歴不問。ハローワークでお仕事探し中の方も歓迎'
      ],
      details: [
        "【新卒初任給】高卒：月給195,000円 / 専門・短大卒：月給212,500円 / 大卒：月給230,000円",
        "【中途給与】月給230,000円から ※経験不問。経験・スキルにより経験者手当あり",
        "【賞与・昇給】賞与年2回、昇給年1回、資格・ランクアップ制度あり",
        "【手当】通勤手当、残業手当、住宅手当、家族手当、経験者手当、資格手当",
        "【休日・休暇】完全週休2日制（土日祝）、年間休日120日以上、年末年始・夏季・慶弔休暇、有給休暇",
        "【勤務時間】平日9:00から18:00（休憩60分）",
        "【勤務地】秋田県秋田市。転勤なし。マイカー通勤可、社員駐車場あり",
        "【待遇・福利厚生】社会保険完備、業務時社用車貸与、定期健康診断、ブラウブリッツ秋田ホームゲーム無料観戦"
      ],
    },
    {
      id: 3,
      title: '【中途採用】技術職（通信インフラ工事・保守）',
      tags: ['&#x4E2D;&#x9014;&#x63A1;&#x7528;', '&#x6B63;&#x793E;&#x54E1;', '&#x79CB;&#x7530;&#x5E02;', '&#x7D4C;&#x9A13;&#x8005;&#x512A;&#x9047;', '&#x571F;&#x65E5;&#x795D;&#x4F11;&#x307F;'],
      summary: '&#x30D3;&#x30B8;&#x30CD;&#x30B9;&#x30D5;&#x30A9;&#x30F3;&#x3001;Wi-Fi&#x3001;&#x9632;&#x72AF;&#x30AB;&#x30E1;&#x30E9;&#x306A;&#x3069;&#x306E;&#x8A2D;&#x7F6E;&#x30FB;&#x914D;&#x7DDA;&#x30FB;&#x4FDD;&#x5B88;&#x3092;&#x62C5;&#x5F53;&#x3057;&#x307E;&#x3059;&#x3002;&#x7D4C;&#x9A13;&#x3084;&#x8CC7;&#x683C;&#x3092;&#x8A55;&#x4FA1;&#x3057;&#x307E;&#x3059;&#x3002;',
      impact: String.fromCharCode(0x79CB,0x7530,0x306E,0x73FE,0x5834,0x3092,0x3001,0x6280,0x8853,0x3067,0x652F,0x3048,0x308B,0x3002),
      audienceMessages: [
        {
          label: "中途・経験者の方へ",
          text: "これまでの工事・保守経験や資格を活かし、現場対応の中心メンバーとして活躍できます。"
        }
      ],
      meta: [
        { label: String.fromCharCode(0x7D66,0x4E0E), value: '月給195,000円〜' },
        { label: '休日', value: '土日祝休み' },
        { label: '勤務地', value: '秋田市・転勤なし' },
        { label: '対象', value: '経験者優遇' }
      ],
      fit: '通信工事や電気工事の経験を、安定した環境で活かしたい方へ。',
      description: `
        <strong>あなたの技術と経験を、秋田で活かしませんか。</strong><br>
        企業へビジネスフォン、インターネット、Wi-Fi、防犯カメラなどの設置・配線工事、初期設定、保守対応を行います。<br><br>

        <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
          <strong style="color: #0d47a1;">この仕事のポイント</strong><br>
          <ul style="list-style-type: none; padding-left: 0; margin-top: 10px;">
            <li style="margin-bottom: 8px;"><strong>経験者・有資格者を優遇</strong> 工事担任者、第二種電気工事士などの資格をお持ちの方は特に歓迎します。</li>
            <li style="margin-bottom: 8px;"><strong>働きやすい環境</strong> 完全週休2日制で、残業は少なめです。転勤もありません。</li>
            <li style="margin-bottom: 8px;"><strong>安定待遇</strong> \u5B66\u6B74\u30FB\u7D4C\u9A13\u30FB\u30B9\u30AD\u30EB\u306B\u5FDC\u3058\u305F\u7D66\u4E0E\u8A2D\u5B9A\u3002経験やスキルに応じて給与を決定します。</li>
            <li><strong>地域貢献</strong> 通信インフラを支えることで、秋田の企業活動を支える仕事です。</li>
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
        '工事担任者（総合通信など）の資格をお持ちの方歓迎',
        '第二種電気工事士の資格をお持ちの方歓迎',
        'チームで協力しながら丁寧に作業を進められる方',
        'お客様に寄り添い、「ありがとう」と言われる仕事にやりがいを感じる方',
        '学歴不問。ハローワークでお仕事探し中の方も歓迎'
      ],
      details: [
        "【給与】月給230,000円から ※経験者・有資格者優遇。経験・スキルにより経験者手当あり",
        "【賞与・昇給】賞与年2回、昇給年1回、資格・ランクアップ制度あり",
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
    
    jobsData.forEach(job => {
      const jobItem = document.createElement('div');
      jobItem.classList.add('job-item');
      
      const tagsHtml = job.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
      const metaHtml = job.meta.map(item => `
        <div class="job-meta-item">
          <span>${item.label}</span>
          <strong>${item.value}</strong>
        </div>
      `).join('');
      const reqsHtml = job.requirements.map(req => `<li>${req}</li>`).join('');
      const detailHtml = job.details.map(det => `<li>${det}</li>`).join('');
      const audienceHtml = job.audienceMessages ? `
        <div class="job-audience-messages">
          ${job.audienceMessages.map(message => `
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
            <h3>${job.title}</h3>
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
        openEntryModal(job.title);
      });
    });
  }

  setTimeout(renderJobs, 300);

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
