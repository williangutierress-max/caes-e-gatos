import { useState, useEffect } from 'react';

export default function App() {
  // Format today's date in DD/MM/YYYY for the top announcement
  const [currentDate, setCurrentDate] = useState('');
  useEffect(() => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    setCurrentDate(`${day}/${month}/${year}`);
  }, []);

  // Countdown timer for urgency section (14:46 initial)
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 46 });
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { minutes: 14, seconds: 59 }; // loop gracefully
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const marqueeImages = [
    'https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/f1b4797d-5911-4cc5-b41a-ff48d550a9b7/materiais-mat_1-1789406225466.webp',
    'https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/f1b4797d-5911-4cc5-b41a-ff48d550a9b7/materiais-mat_2-1789406228665.webp',
    'https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/f1b4797d-5911-4cc5-b41a-ff48d550a9b7/materiais-mat_3-1789406231379.webp',
    'https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/f1b4797d-5911-4cc5-b41a-ff48d550a9b7/materiais-mat_4-1789406234419.webp',
    'https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/f1b4797d-5911-4cc5-b41a-ff48d550a9b7/materiais-mat_f2d39f14-1789406245500.webp',
    'https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/f1b4797d-5911-4cc5-b41a-ff48d550a9b7/materiais-mat_41e9e702-1789406248670.webp',
    'https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/f1b4797d-5911-4cc5-b41a-ff48d550a9b7/materiais-mat_dda569b2-1789406251725.webp',
    'https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/f1b4797d-5911-4cc5-b41a-ff48d550a9b7/materiais-mat_d87e3d54-1789406254486.webp',
  ];

  const bonuses = [
    {
      id: 1,
      name: 'GUIA DE PROTOCOLOS PARA CASOS DE ROTINA',
      desc: 'Receba um manual prático em PDF com as combinações de pontos mais eficazes para os problemas que mais chegam na clínica: artrose, displasia coxofemoral, ansiedade de separação e distúrbios gastrointestinais. Tenha um ponto de partida seguro e validado para iniciar o tratamento sem precisar montar o raciocínio do zero.',
      img: 'https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/f1b4797d-5911-4cc5-b41a-ff48d550a9b7/bonus-bonus_1_img-1789155808089.webp',
    },
    {
      id: 2,
      name: 'GUIA DE ÂNGULO E PROFUNDIDADE DE INSERÇÃO',
      desc: 'Receba um manual técnico em PDF ensinando a angulação e a profundidade exata da agulha para diferentes portes de cães e para a pele fina dos gatos. Evite transfixar tecidos, atingir estruturas indesejadas ou causar dor desnecessária ao paciente na hora do agulhamento.',
      img: 'https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/f1b4797d-5911-4cc5-b41a-ff48d550a9b7/bonus-bonus_2_img-1789155813906.webp',
    },
    {
      id: 3,
      name: 'TABELA DE MEDIDAS (CUN) PARA DIFERENTES RAÇAS',
      desc: 'Receba um guia de bolso em PDF ensinando a adaptar a medida do "Cun" (polegada proporcional) para as variações anatômicas extremas da veterinária. Saiba como calcular a distância exata dos acupontos seja em um Chihuahua de 2kg, em um Maine Coon ou em um Golden Retriever.',
      img: 'https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/f1b4797d-5911-4cc5-b41a-ff48d550a9b7/bonus-bonus_3_img-1789155819232.webp',
    },
    {
      id: 4,
      name: 'GUIA PRÁTICO DE ACUPONTOS PARA ACALMAR E RELAXAR',
      desc: 'Receba fichas de consulta rápida em PDF focadas exclusivamente em pontos para aliviar a ansiedade e o estresse de cães e gatos. Saiba exatamente onde aplicar massagem leve ou laser para acalmar pacientes agitados, medrosos ou hiperativos antes de iniciar os procedimentos clínicos, facilitando o manuseio no dia a dia do consultório.',
      img: 'https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/f1b4797d-5911-4cc5-b41a-ff48d550a9b7/bonus-bonus_4_img-1789156462741.webp',
    },
    {
      id: 5,
      name: 'TABELA VISUAL DE PONTOS SHU (DORSAIS) E MU (VENTRAIS)',
      desc: 'Receba um infográfico em PDF isolando os pontos de diagnóstico e tratamento mais importantes da medicina tradicional chinesa. Facilite a sua palpação clínica para identificar órgãos em desequilíbrio e planejar tratamentos para doenças crônicas com muito mais embasamento e segurança.',
      img: 'https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/f1b4797d-5911-4cc5-b41a-ff48d550a9b7/bonus-bonus_5_img-1789155877714.webp',
    },
    {
      id: 6,
      name: 'MAPA DE ZONAS DE RISCO E CONTRAINDICAÇÕES',
      desc: 'Receba um alerta visual em PDF detalhando os pontos que você jamais deve estimular em fêmeas gestantes, pacientes oncológicos ou animais extremamente debilitados. O guia definitivo para garantir a segurança absoluta do seu paciente e blindar a sua responsabilidade profissional.',
      img: 'https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/f1b4797d-5911-4cc5-b41a-ff48d550a9b7/bonus-bonus_6_img-1789155883409.webp',
    },
    {
      id: 7,
      name: 'GUIA RÁPIDO DE ADAPTAÇÃO (LASER E MOXA)',
      desc: 'Receba um material complementar em PDF ensinando o que fazer quando o cão é reativo ou o gato não tolera agulhas de jeito nenhum. Aprenda a substituir o estímulo tradicional pelo laserpuntura ou calor (moxa) nos pontos exatos, garantindo a eficácia do tratamento sem estressar o animal.',
      img: 'https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/f1b4797d-5911-4cc5-b41a-ff48d550a9b7/bonus-bonus_7_img-1789155888277.webp',
    },
    {
      id: 8,
      name: 'GUIA DE ORIENTAÇÃO AO TUTOR PÓS-SESSÃO',
      desc: 'Receba um modelo em PDF pronto para imprimir com instruções claras para os tutores sobre o que esperar após a sessão (sonolência, reações, aumento da ingestão de água). Transmita extremo profissionalismo, acalme o dono do animal e evite receber mensagens de desespero no WhatsApp de madrugada.',
      img: 'https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/f1b4797d-5911-4cc5-b41a-ff48d550a9b7/bonus-bonus_8_img-1789155904645.webp',
    },
  ];

  const faqs = [
    {
      q: 'Qual o formato do material?',
      a: 'O material é um ebook digital que você pode acessar em qualquer dispositivo.',
    },
    {
      q: 'O acesso é imediato?',
      a: 'Sim. Após a confirmação do pagamento, você recebe um e-mail com o link de download.',
    },
    {
      q: 'Posso imprimir o material?',
      a: 'Sim, você pode imprimir o material para utilizar como referência durante suas consultas.',
    },
    {
      q: 'E se eu não gostar do material?',
      a: 'Você tem 7 dias para solicitar o reembolso, sem burocracia.',
    },
    {
      q: 'O material é adequado para iniciantes?',
      a: 'Sim, o material é ideal tanto para veterinários experientes quanto para estudantes.',
    },
    {
      q: 'Como posso entrar em contato para suporte?',
      a: 'Você pode nos contatar por e-mail ou através do nosso site, estamos sempre prontos para ajudar.',
    },
  ];

  // SVG check icon helper
  const CheckIcon = ({ className = 'h-4 w-4 shrink-0' }: { className?: string }) => (
    <svg aria-hidden="true" viewBox="0 0 512 512" className={className} style={{ fill: 'var(--pv-success)' }}>
      <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
    </svg>
  );

  return (
    <div className="min-h-screen">
      <div
        className="w-full overflow-x-hidden"
        style={{
          backgroundColor: 'var(--pv-bg)',
          color: 'var(--pv-text)',
          fontFamily: 'var(--pv-font-body)',
        }}
      >
        {/* SEÇÃO 0: Barra de aviso topo */}
        <div id="secao-0" className="scroll-mt-20">
          <div
            className="w-full text-center text-base sm:text-lg py-3.5 px-4 font-bold tracking-wide"
            style={{ background: 'var(--pv-accent)', color: '#ffffff' }}
          >
            ⚡ OFERTA ESPECIAL DISPONÍVEL APENAS HOJE{' '}
            <span>{currentDate || 'HOJE'}</span>
          </div>
        </div>

        {/* SEÇÃO 1: Hero principal */}
        <div id="secao-1" className="scroll-mt-20">
          <section
            className="w-full px-4 py-16 sm:py-20"
            style={{ background: '#007B7F', color: '#ffffff' }}
          >
            <div className="mx-auto" style={{ maxWidth: 'var(--pv-container)' }}>
              <div className="text-center max-w-3xl mx-auto -mt-6 sm:mt-0">
                <span
                  className="inline-block text-sm sm:text-base font-bold px-6 py-2 rounded-full mb-5"
                  style={{ background: 'var(--pv-cream)', color: 'var(--pv-primary)' }}
                >
                  <span>🔒 Compra 100% Segura e Protegida</span>
                </span>

                <h1
                  className="text-[30px] sm:text-[52px] lg:text-[60px] mt-0 font-heading"
                  style={{
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.05,
                    color: '#ffffff',
                  }}
                >
                  <span>+100 ACUPONTOS DE CÃES E GATOS MAPEADOS VISUALMENTE</span>
                </h1>

                <p
                  className="text-[18px] sm:text-[22px] lg:text-[24px] max-w-2xl mx-auto mt-4"
                  style={{
                    color: 'rgba(255, 255, 255, 0.92)',
                    fontWeight: 500,
                    lineHeight: 1.4,
                  }}
                >
                  <b>
                    Localize e revise os principais acupontos com referências anatômicas
                    organizadas por espécie e região do corpo.
                  </b>
                </p>

                <div className="my-[10px]">
                  <img
                    src="https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/f1b4797d-5911-4cc5-b41a-ff48d550a9b7/hero-mockup_hero-1789146476623.webp"
                    width="340"
                    height="340"
                    alt="Mockup do material de acupontos"
                    className="max-h-[520px] mx-auto object-contain rounded-[var(--pv-radius)]"
                    loading="eager"
                  />
                </div>

                <p
                  className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mt-2"
                  style={{ color: 'rgba(255, 255, 255, 0.95)', fontWeight: 400 }}
                >
                  <b>
                    Tenha uma referência visual para consultar rapidamente onde cada ponto está
                    localizado sem precisar vasculhar materiais extensos.
                  </b>
                </p>

                <div className="mt-8 flex justify-center">
                  <ul className="space-y-3 text-left inline-block">
                    <li className="flex gap-3 items-center text-lg sm:text-xl font-semibold">
                      <CheckIcon />
                      <span style={{ color: 'rgb(0, 255, 225)' }}>
                        Mapas anatômicos divididos por cão e gato
                      </span>
                    </li>
                    <li className="flex gap-3 items-center text-lg sm:text-xl font-semibold">
                      <CheckIcon />
                      <span style={{ color: 'rgb(0, 255, 225)' }}>
                        Acupontos identificados por região do corpo
                      </span>
                    </li>
                    <li className="flex gap-3 items-center text-lg sm:text-xl font-semibold">
                      <CheckIcon />
                      <span style={{ color: 'rgb(0, 255, 225)' }}>
                        Meridianos sinalizados em cada ilustração
                      </span>
                    </li>
                    <li className="flex gap-3 items-center text-lg sm:text-xl font-semibold">
                      <CheckIcon />
                      <span style={{ color: 'rgb(0, 255, 225)' }}>
                        Consulta rápida durante atendimentos e revisões
                      </span>
                    </li>
                    <li className="flex gap-3 items-center text-lg sm:text-xl font-semibold">
                      <CheckIcon />
                      <span style={{ color: 'rgb(0, 255, 225)' }}>
                        Acesso imediato em PDF
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  <a
                    href="#planos"
                    className="px-10 py-5 text-[20px] inline-block text-center transition-transform duration-300 hover:scale-[1.05] active:scale-[0.98]"
                    style={{
                      background: 'var(--pv-success)',
                      color: '#ffffff',
                      boxShadow: 'rgba(57, 181, 116, 0.55) 0px 14px 30px -10px',
                      fontWeight: 600,
                      borderRadius: '9999px',
                      letterSpacing: '-0.01em',
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                    }}
                  >
                    <span>CONSULTAR ACUPONTOS AGORA</span>
                  </a>
                </div>

                <p className="text-sm sm:text-base opacity-80 mt-4">
                  📲 <b>Você recebe tudo na hora, direto no seu e-mail</b>
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* SEÇÃO 2: Marquee / Organização do Material */}
        <div id="secao-2" className="scroll-mt-20">
          <section
            className="w-full px-4 py-16 sm:py-20"
            style={{ background: 'var(--pv-cream)', color: 'var(--pv-text)' }}
          >
            <div className="mx-auto" style={{ maxWidth: 'var(--pv-container)' }}>
              <h2
                className="text-[40px] sm:text-[52px] lg:text-[60px] text-center font-heading"
                style={{
                  fontWeight: 900,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: 'var(--pv-text)',
                }}
              >
                <span>VEJA COMO OS ACUPONTOS SÃO ORGANIZADOS NO MATERIAL</span>
              </h2>
              <p className="text-center mt-4 text-base sm:text-lg opacity-80">
                <b>Escolha a espécie, encontre a região e consulte os pontos visualmente.</b>
              </p>

              <div className="mt-10 overflow-hidden w-full relative">
                <div className="marquee-track">
                  {[...marqueeImages, ...marqueeImages].map((imgUrl, idx) => (
                    <div key={idx} className="flex-shrink-0 px-3 flex items-center">
                      <img
                        src={imgUrl}
                        alt="Página do material de acupontos"
                        className="h-[280px] md:h-[420px] w-auto object-contain rounded-md"
                        loading="lazy"
                        draggable={false}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* SEÇÃO 3: Feito para facilitar */}
        <div id="secao-3" className="scroll-mt-20">
          <section
            className="w-full px-4 py-16 sm:py-20"
            style={{ background: 'var(--pv-cream)', color: 'var(--pv-text)' }}
          >
            <div className="mx-auto" style={{ maxWidth: 'var(--pv-container)' }}>
              <h2
                className="text-[40px] sm:text-[52px] lg:text-[60px] text-center font-heading"
                style={{
                  fontWeight: 900,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: 'var(--pv-text)',
                }}
              >
                <span>FEITO PARA FACILITAR SUA CONSULTA</span>
              </h2>

              <div className="grid sm:grid-cols-2 gap-4 mt-12 max-w-4xl mx-auto">
                <div
                  className="rounded-[14px] p-5 flex gap-4 items-center transition-transform duration-300 hover:scale-[1.05]"
                  style={{ background: '#ffffff', border: '1px solid rgba(0, 0, 0, 0.06)' }}
                >
                  <img
                    src="/mvt/laser.png"
                    alt="Mapas para cães"
                    className="h-12 w-12 shrink-0 object-contain"
                    loading="lazy"
                  />
                  <span className="font-semibold text-base sm:text-lg leading-snug">
                    🐕 <strong>Mapas para cães</strong>
                    <br />
                    Visualize os principais acupontos organizados por região anatômica.
                  </span>
                </div>

                <div
                  className="rounded-[14px] p-5 flex gap-4 items-center transition-transform duration-300 hover:scale-[1.05]"
                  style={{ background: '#ffffff', border: '1px solid rgba(0, 0, 0, 0.06)' }}
                >
                  <img
                    src="/mvt/scale.png"
                    alt="Mapas para gatos"
                    className="h-12 w-12 shrink-0 object-contain"
                    loading="lazy"
                  />
                  <span className="font-semibold text-base sm:text-lg leading-snug">
                    🐈 <strong>Mapas para gatos</strong>
                    <br />
                    Consulte referências específicas da espécie de forma rápida.
                  </span>
                </div>

                <div
                  className="rounded-[14px] p-5 flex gap-4 items-center transition-transform duration-300 hover:scale-[1.05]"
                  style={{ background: '#ffffff', border: '1px solid rgba(0, 0, 0, 0.06)' }}
                >
                  <img
                    src="/mvt/manual-book.png"
                    alt="Localização por região"
                    className="h-12 w-12 shrink-0 object-contain"
                    loading="lazy"
                  />
                  <span className="font-semibold text-base sm:text-lg leading-snug">
                    📍 <strong>Localização por região</strong>
                    <br />
                    Cabeça, tronco, dorso e membros organizados separadamente.
                  </span>
                </div>

                <div
                  className="rounded-[14px] p-5 flex gap-4 items-center transition-transform duration-300 hover:scale-[1.05]"
                  style={{ background: '#ffffff', border: '1px solid rgba(0, 0, 0, 0.06)' }}
                >
                  <img
                    src="/mvt/download.png"
                    alt="Referências anatômicas visuais"
                    className="h-12 w-12 shrink-0 object-contain"
                    loading="lazy"
                  />
                  <span className="font-semibold text-base sm:text-lg leading-snug">
                    🧭 <strong>Referências anatômicas visuais</strong>
                    <br />
                    Entenda onde procurar cada ponto com mais clareza.
                  </span>
                </div>

                <div
                  className="rounded-[14px] p-5 flex gap-4 items-center transition-transform duration-300 hover:scale-[1.05] sm:col-span-2 sm:max-w-md sm:mx-auto w-full"
                  style={{ background: '#ffffff', border: '1px solid rgba(0, 0, 0, 0.06)' }}
                >
                  <img
                    src="/mvt/folders-1.png"
                    alt="Consulta rápida"
                    className="h-12 w-12 shrink-0 object-contain"
                    loading="lazy"
                  />
                  <span className="font-semibold text-base sm:text-lg leading-snug">
                    📱 <strong>Consulta rápida</strong>
                    <br />
                    Abra no celular, tablet ou utilize o material impresso.
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* SEÇÃO 4: Problema & Timer */}
        <div id="secao-4" className="scroll-mt-20">
          <section
            className="w-full px-4 py-16 sm:py-20"
            style={{ background: '#007B7F', color: '#ffffff' }}
          >
            <div className="mx-auto" style={{ maxWidth: 'var(--pv-container)' }}>
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <h2
                  className="text-3xl sm:text-5xl lg:text-[56px] font-heading"
                  style={{
                    fontWeight: 900,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                    color: '#ffffff',
                  }}
                >
                  <span>
                    VOCÊ LEMBRA DO ACUPONTO, MAS PRECISA PROCURAR EM VÁRIOS MATERIAIS PARA CONFERIR
                    ONDE ELE FICA?
                  </span>
                </h2>

                <p
                  className="text-lg sm:text-xl lg:text-2xl font-semibold"
                  style={{ color: 'rgba(255, 255, 255, 0.95)' }}
                >
                  Tenha cães e gatos visualmente mapeados para consultar os pontos com muito mais
                  rapidez.
                </p>

                <div className="flex gap-6 justify-center pt-4" style={{ color: '#ffffff' }}>
                  <div className="text-center">
                    <div className="text-4xl sm:text-5xl font-black tabular-nums">
                      {String(timeLeft.minutes).padStart(2, '0')}
                    </div>
                    <div className="text-xs uppercase tracking-wider opacity-80">Minutos</div>
                  </div>
                  <div className="text-4xl sm:text-5xl font-black tabular-nums">:</div>
                  <div className="text-center">
                    <div className="text-4xl sm:text-5xl font-black tabular-nums">
                      {String(timeLeft.seconds).padStart(2, '0')}
                    </div>
                    <div className="text-xs uppercase tracking-wider opacity-80">Segundos</div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="#planos"
                    className="px-10 py-5 text-[20px] inline-block text-center transition-transform duration-300 hover:scale-[1.05] active:scale-[0.98]"
                    style={{
                      background: 'var(--pv-success)',
                      color: '#ffffff',
                      boxShadow: 'rgba(57, 181, 116, 0.55) 0px 14px 30px -10px',
                      fontWeight: 600,
                      borderRadius: '9999px',
                      letterSpacing: '-0.01em',
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                    }}
                  >
                    <span>QUERO ACESSAR AGORA</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* SEÇÃO 5: Para quem é */}
        <div id="secao-5" className="scroll-mt-20">
          <section
            className="w-full px-4 py-16 sm:py-20"
            style={{ background: 'var(--pv-bg)', color: 'var(--pv-text)' }}
          >
            <div className="mx-auto" style={{ maxWidth: 'var(--pv-container)' }}>
              <h2
                className="text-[40px] sm:text-[52px] lg:text-[60px] text-center font-heading"
                style={{
                  fontWeight: 900,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: 'var(--pv-text)',
                }}
              >
                <span>ESTE MATERIAL É IDEAL PARA VOCÊ QUE DESEJA</span>
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mt-12">
                {[
                  {
                    title: 'LOCALIZAR ACUPONTOS RÁPIDO',
                    desc: 'Tenha acesso imediato a mapas anatômicos claros e organizados, facilitando sua consulta.',
                  },
                  {
                    title: 'REVISAR CONTEÚDOS DE FORMA EFICAZ',
                    desc: 'Material digital que você pode acessar a qualquer hora, sem complicações.',
                  },
                  {
                    title: 'APLICAR ACUPUNTURA COM SEGURANÇA',
                    desc: 'Identifique os pontos corretos e evite erros durante o tratamento dos animais.',
                  },
                  {
                    title: 'ENTENDER MELHOR AS REFERÊNCIAS ANATÔMICAS',
                    desc: 'Visualize onde cada ponto se relaciona com a anatomia do animal.',
                  },
                  {
                    title: 'TRABALHAR COM MAIOR PROFISSIONALISMO',
                    desc: 'Impressione seus clientes com um atendimento mais qualificado e seguro.',
                  },
                  {
                    title: 'ESTUDAR PARA A PROVA',
                    desc: 'Material que ajuda a revisar rapidamente os acupontos para suas avaliações.',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-[14px] flex gap-3 items-start transition-transform duration-300 hover:scale-[1.05]"
                    style={{
                      background: 'var(--pv-mint)',
                      border: '1px solid var(--pv-mint-border)',
                    }}
                  >
                    <span className="shrink-0 mt-0.5">
                      <CheckIcon />
                    </span>
                    <div>
                      <h3
                        className="font-black uppercase text-lg sm:text-xl mb-2 leading-tight"
                        style={{ letterSpacing: '-0.01em' }}
                      >
                        <span>{item.title}</span>
                      </h3>
                      <p className="text-base sm:text-lg opacity-80 leading-relaxed">
                        <span>{item.desc}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* SEÇÃO 6: Pacote / Tudo o que você vai receber */}
        <div id="secao-6" className="scroll-mt-20">
          <section
            className="w-full px-4 py-16 sm:py-20"
            style={{ background: 'var(--pv-pink)', color: 'var(--pv-text)' }}
          >
            <div className="mx-auto" style={{ maxWidth: 'var(--pv-container)' }}>
              <h2
                className="text-[40px] sm:text-[52px] lg:text-[60px] text-center font-heading"
                style={{
                  fontWeight: 900,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: 'var(--pv-text)',
                }}
              >
                <span>TUDO O QUE VOCÊ VAI RECEBER</span>
              </h2>

              <div
                className="max-w-2xl mx-auto mt-10 rounded-[var(--pv-radius)] overflow-hidden p-8 sm:p-10 space-y-6"
                style={{ background: '#005B5D', color: '#ffffff' }}
              >
                <div className="text-center">
                  <span
                    className="inline-block text-base sm:text-lg font-extrabold px-6 py-2.5 rounded-full"
                    style={{ background: 'var(--pv-success)', color: '#ffffff' }}
                  >
                    ⚡<span>ACESSO IMEDIATO</span>
                  </span>
                </div>

                <h3
                  className="text-3xl sm:text-4xl text-center font-heading"
                  style={{
                    fontWeight: 900,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                    color: '#ffffff',
                  }}
                >
                  <span>+100 ACUPONTOS ORGANIZADOS POR ESPÉCIE E REGIÃO ANATÔMICA</span>
                </h3>

                <p className="text-center text-base sm:text-lg opacity-90">
                  <span className="text-[20px] sm:text-[23px] font-bold">
                    Escolha cão ou gato, encontre a região desejada e consulte visualmente os pontos.
                  </span>
                </p>

                <img
                  src="https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/f1b4797d-5911-4cc5-b41a-ff48d550a9b7/pacote-mockup_pacote-1789148717918.webp"
                  width="700"
                  height="394"
                  alt="Pacote de acupontos"
                  className="w-full max-h-[420px] object-contain rounded-[12px]"
                  loading="lazy"
                />

                <ul>
                  {[
                    '+100 acupontos essenciais mapeados',
                    'Mapas anatômicos de cães',
                    'Mapas anatômicos de gatos',
                    'Cabeça e pescoço',
                    'Tórax e abdômen',
                    'Dorso e coluna',
                    'Membros anteriores e posteriores',
                    'Referências visuais de localização',
                    'PDF para celular, tablet ou impressão',
                    'Acesso digital imediato',
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex gap-3 items-start py-3.5 text-base sm:text-lg"
                      style={idx > 0 ? { borderTop: '1px solid rgba(255, 255, 255, 0.1)' } : {}}
                    >
                      <CheckIcon />
                      <span className="font-bold text-white">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* SEÇÃO 7: 8 Bônus Exclusivos */}
        <div id="secao-7" className="scroll-mt-20">
          <section
            className="w-full px-4 py-16 sm:py-20"
            style={{ background: 'var(--pv-pink)', color: 'var(--pv-text)' }}
          >
            <div className="mx-auto" style={{ maxWidth: 'var(--pv-container)' }}>
              <h2
                className="text-[40px] sm:text-[52px] lg:text-[60px] text-center font-heading"
                style={{
                  fontWeight: 900,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: 'var(--pv-text)',
                }}
              >
                <span>E NÃO PARA POR AÍ... TEM MAIS!</span>
              </h2>

              <p className="text-center text-2xl sm:text-3xl italic font-bold opacity-90 mt-5">
                <span>Você também vai receber…</span>
              </p>

              <div className="text-center mt-5 mb-12">
                <span
                  className="inline-block text-base sm:text-lg font-extrabold px-7 py-3 rounded-full"
                  style={{ background: 'var(--pv-accent)', color: '#ffffff' }}
                >
                  <span>🎁 8 BÔNUS EXCLUSIVOS</span>
                </span>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
                {bonuses.map((bonus) => (
                  <div
                    key={bonus.id}
                    className="rounded-[14px] overflow-hidden flex flex-col transition-transform duration-300 hover:scale-[1.05]"
                    style={{ background: 'var(--pv-cream)' }}
                  >
                    <div className="relative bg-black/[0.04] flex items-center justify-center">
                      <img
                        src={bonus.img}
                        width="700"
                        height="394"
                        alt={bonus.name}
                        className="h-72 sm:h-80 w-full object-contain p-3"
                        loading="lazy"
                      />
                      <span
                        className="absolute top-3 right-3 text-xs sm:text-sm font-extrabold px-3 py-1.5 rounded-md"
                        style={{ background: 'rgb(255, 224, 138)', color: 'rgb(45, 17, 7)' }}
                      >
                        <span>BÔNUS #{bonus.id}</span>
                      </span>
                    </div>

                    <div className="p-5 flex-1 flex flex-col gap-3">
                      <h3 className="font-black leading-tight text-xl sm:text-2xl">
                        <span>{bonus.name}</span>
                      </h3>
                      <p className="text-base sm:text-lg opacity-80 leading-relaxed">
                        <span>{bonus.desc}</span>
                      </p>
                      <div className="mt-auto pt-3 flex justify-center">
                        <div
                          className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold px-5 py-2.5 rounded-full"
                          style={{ background: 'rgb(31, 20, 16)', color: '#ffffff' }}
                        >
                          <span className="opacity-80">Valor:</span>
                          <s className="opacity-60">R$27</s>
                          <span className="font-extrabold">GRÁTIS</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* SEÇÃO 8: Planos */}
        <div id="secao-8" className="scroll-mt-20">
          <section
            className="w-full px-4 py-16 sm:py-20"
            style={{ background: 'var(--pv-bg)', color: 'var(--pv-text)' }}
          >
            <div className="mx-auto" style={{ maxWidth: 'var(--pv-container)' }}>
              <div id="planos" className="scroll-mt-20">
                <div className="text-center mb-12 space-y-5">
                  <h2
                    className="text-[40px] sm:text-[52px] lg:text-[60px] text-center font-heading"
                    style={{
                      fontWeight: 900,
                      letterSpacing: '-0.02em',
                      lineHeight: 1.1,
                      color: 'var(--pv-text)',
                    }}
                  >
                    <span>ESCOLHA A OPÇÃO IDEAL PARA VOCÊ</span>
                  </h2>
                  <div
                    className="mx-auto h-[3px] w-24 rounded-full"
                    style={{ background: 'var(--pv-text)' }}
                  />
                </div>

                <div className="grid gap-6 mx-auto items-stretch md:grid-cols-2 max-w-5xl">
                  {/* Plano Básico */}
                  <div
                    className="rounded-[var(--pv-radius)] p-6 sm:p-8 flex flex-col gap-5 overflow-hidden"
                    style={{ background: 'var(--pv-cream)', color: 'var(--pv-text)' }}
                  >
                    <h3
                      className="text-3xl sm:text-4xl text-center font-heading"
                      style={{ fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1.1 }}
                    >
                      <span>PLANO BÁSICO</span>
                    </h3>

                    <img
                      src="https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/f1b4797d-5911-4cc5-b41a-ff48d550a9b7/planos-basico_mockup-1789150302735.webp"
                      width="700"
                      height="700"
                      alt="Mockup Plano Básico"
                      className="h-72 sm:h-80 w-full object-contain"
                      loading="lazy"
                    />

                    <p className="text-base font-bold">Você recebe:</p>

                    <ul className="divide-y divide-black/10">
                      <li className="flex gap-3 text-base sm:text-lg items-start py-3.5">
                        <CheckIcon />
                        <span>+100 acupontos mapeados</span>
                      </li>
                      <li className="flex gap-3 text-base sm:text-lg items-start py-3.5">
                        <CheckIcon />
                        <span>Acesso imediato ao material</span>
                      </li>
                      <li className="flex gap-3 text-base sm:text-lg items-start py-3.5">
                        <CheckIcon />
                        <span>Organização por regiões</span>
                      </li>
                      <li className="flex gap-3 text-base sm:text-lg items-start py-3.5">
                        <CheckIcon />
                        <span>Material digital para consulta</span>
                      </li>
                    </ul>

                    <div className="text-center mt-auto">
                      <p className="text-sm sm:text-base line-through opacity-70" style={{ color: '#ff1500' }}>
                        de <span>R$97,90</span> por:
                      </p>
                      <p
                        className="text-5xl sm:text-6xl mt-1 font-heading"
                        style={{
                          fontWeight: 900,
                          letterSpacing: '-0.02em',
                          lineHeight: 1.1,
                          color: 'var(--pv-success)',
                        }}
                      >
                        <span>R$ 17,90</span>
                      </p>
                      <p className="text-sm sm:text-base mt-1 font-semibold flex items-center justify-center gap-1.5">
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 512 512"
                          className="h-3 w-3 shrink-0"
                          style={{ fill: 'var(--pv-success)' }}
                        >
                          <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                        </svg>
                        Você economiza <strong>R$80,00</strong>
                      </p>
                    </div>

                    {/* Checkout Link Lowify */}
                    <a
                      href="https://pay.lowify.com.br/checkout.php?product_id=wchco0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 text-[18px] w-full inline-block text-center transition-transform duration-300 hover:scale-[1.05] active:scale-[0.98]"
                      style={{
                        background: 'var(--pv-success)',
                        color: '#ffffff',
                        boxShadow: 'rgba(57, 181, 116, 0.55) 0px 14px 30px -10px',
                        fontWeight: 600,
                        borderRadius: '9999px',
                        letterSpacing: '-0.01em',
                        textTransform: 'uppercase',
                        textDecoration: 'none',
                      }}
                    >
                      <span>QUERO O PLANO BÁSICO</span>
                    </a>

                    <div
                      className="md:hidden -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 flex items-center justify-center gap-2 text-sm sm:text-base font-bold px-5 py-3 text-center"
                      style={{ background: 'rgb(255, 213, 74)', color: 'var(--pv-text)' }}
                    >
                      <span>92% das pessoas aproveitam o plano abaixo</span> 👇
                    </div>
                  </div>

                  {/* Plano Completo */}
                  <div
                    className="rounded-[var(--pv-radius)] p-6 sm:p-8 flex flex-col gap-5 relative"
                    style={{
                      background: '#004C4F',
                      color: '#ffffff',
                      boxShadow: 'rgba(0, 0, 0, 0.45) 0px 30px 60px -25px',
                    }}
                  >
                    <span
                      className="absolute -top-5 left-1/2 -translate-x-1/2 text-base sm:text-lg font-extrabold px-6 py-2.5 rounded-full whitespace-nowrap"
                      style={{ background: 'var(--pv-success)', color: '#ffffff' }}
                    >
                      ⚡<span>MAIS VENDIDO</span>
                    </span>

                    <h3
                      className="text-3xl sm:text-4xl text-center font-heading"
                      style={{
                        fontWeight: 900,
                        letterSpacing: '-0.02em',
                        lineHeight: 1.1,
                        color: '#ffffff',
                      }}
                    >
                      <span>PLANO COMPLETO</span>
                    </h3>

                    <img
                      src="https://origin.mentoriaprocesso.com/img/b8c78ec0-777a-41fb-ad66-d131fb9f0e2e/f1b4797d-5911-4cc5-b41a-ff48d550a9b7/planos-completo_mockup-1789151208409.webp"
                      width="700"
                      height="700"
                      alt="Mockup Plano Completo"
                      className="h-72 sm:h-80 w-full object-contain"
                      loading="lazy"
                    />

                    <div
                      className="text-center text-base sm:text-lg font-extrabold rounded-full py-3"
                      style={{ background: 'rgba(46, 204, 113, 0.15)', color: 'var(--pv-success)' }}
                    >
                      ⚡<span>2x MAIS CONTEÚDOS</span>
                    </div>

                    <ul className="divide-y divide-white/10">
                      <li className="flex gap-3 text-base sm:text-lg items-start py-3.5">
                        <CheckIcon />
                        <span className="font-bold">Tudo do Plano Básico</span>
                      </li>
                      <li className="flex gap-3 text-base sm:text-lg items-start py-3.5">
                        <CheckIcon />
                        <span className="font-bold">🎁 GUIA DE PROTOCOLOS PARA CASOS DE ROTINA</span>
                      </li>
                      <li className="flex gap-3 text-base sm:text-lg items-start py-3.5">
                        <CheckIcon />
                        <span className="font-bold">🎁 GUIA DE ÂNGULO E PROFUNDIDADE DE INSERÇÃO</span>
                      </li>
                      <li className="flex gap-3 text-base sm:text-lg items-start py-3.5">
                        <CheckIcon />
                        <span className="font-bold">🎁 TABELA DE MEDIDAS (CUN) PARA DIFERENTES RAÇAS</span>
                      </li>
                      <li className="flex gap-3 text-base sm:text-lg items-start py-3.5">
                        <CheckIcon />
                        <span className="font-bold">🎁 GUIA PRÁTICO DE ACUPONTOS PARA CALMAR E RELAXAR</span>
                      </li>
                      <li className="flex gap-3 text-base sm:text-lg items-start py-3.5">
                        <CheckIcon />
                        <span className="font-bold">🎁 TABELA VISUAL DE PONTOS SHU (DORSAIS) E MU (VENTRAIS)</span>
                      </li>
                      <li className="flex gap-3 text-base sm:text-lg items-start py-3.5">
                        <CheckIcon />
                        <span className="font-bold">🎁 MAPA DE ZONAS DE RISCO E CONTRAINDICAÇÕES</span>
                      </li>
                      <li className="flex gap-3 text-base sm:text-lg items-start py-3.5">
                        <CheckIcon />
                        <span className="font-bold">🎁 GUIA RÁPIDO DE ADAPTAÇÃO (LASER E MOXA)</span>
                      </li>
                      <li className="flex gap-3 text-base sm:text-lg items-start py-3.5">
                        <CheckIcon />
                        <span className="font-bold">🎁 GUIA DE ORIENTAÇÃO AO TUTOR PÓS-SESSÃO</span>
                      </li>
                      <li className="flex gap-3 text-base sm:text-lg items-start py-3.5">
                        <CheckIcon />
                        <span className="font-bold">Acesso imediato em PDF</span>
                      </li>
                    </ul>

                    <div className="text-center mt-auto">
                      <p className="text-sm sm:text-base line-through opacity-70" style={{ color: '#ff1500' }}>
                        de <span>R$127,90</span> por:
                      </p>
                      <p
                        className="text-5xl sm:text-6xl mt-1 font-heading"
                        style={{
                          fontWeight: 900,
                          letterSpacing: '-0.02em',
                          lineHeight: 1.1,
                          color: 'var(--pv-success)',
                        }}
                      >
                        <span>R$ 27,90</span>
                      </p>
                      <p className="text-sm sm:text-base mt-1 font-semibold flex items-center justify-center gap-1.5">
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 512 512"
                          className="h-3 w-3 shrink-0"
                          style={{ fill: 'var(--pv-success)' }}
                        >
                          <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                        </svg>
                        Você economiza <strong>R$100,00</strong>
                      </p>
                    </div>

                    {/* Checkout Link Lowify */}
                    <a
                      href="https://pay.lowify.com.br/go.php?offer=7222e42e"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 text-[18px] w-full inline-block text-center transition-transform duration-300 hover:scale-[1.05] active:scale-[0.98]"
                      style={{
                        background: 'var(--pv-success)',
                        color: '#ffffff',
                        boxShadow: 'rgba(57, 181, 116, 0.55) 0px 14px 30px -10px',
                        fontWeight: 600,
                        borderRadius: '9999px',
                        letterSpacing: '-0.01em',
                        textTransform: 'uppercase',
                        textDecoration: 'none',
                      }}
                    >
                      <span>QUERO O PLANO COMPLETO</span>
                    </a>

                    <div className="flex justify-center pt-3">
                      <img
                        src="/mvt/icons-meio-de-pagamento-e1738718378460-2-1.png"
                        alt="Meios de pagamento"
                        className="h-7 object-contain opacity-95"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                <div
                  className="mt-10 max-w-3xl mx-auto rounded-[14px] p-6 flex gap-4 items-start"
                  style={{
                    background: 'var(--pv-mint)',
                    border: '1px solid var(--pv-mint-border)',
                  }}
                >
                  <span
                    className="h-10 w-10 rounded-full flex items-center justify-center shrink-0 text-lg font-bold"
                    style={{ background: 'var(--pv-success)', color: '#ffffff' }}
                  >
                    ✓
                  </span>
                  <div>
                    <p className="font-extrabold uppercase text-base sm:text-lg">
                      <span>UM ÚNICO ACUPONTO PODE GARANTIR O SUCESSO DO SEU TRATAMENTO.</span>
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base mt-6 text-center">
                  <span className="opacity-80">
                    🔒 <span>Compra 100% segura e garantida.</span>
                  </span>
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* SEÇÃO 9: Depoimentos */}
        <div id="secao-9" className="scroll-mt-20">
          <section
            className="w-full px-4 py-16 sm:py-20"
            style={{ background: 'var(--pv-bg)', color: 'var(--pv-text)' }}
          >
            <div className="mx-auto" style={{ maxWidth: 'var(--pv-container)' }}>
              <h2
                className="text-[40px] sm:text-[52px] lg:text-[60px] text-center font-heading"
                style={{
                  fontWeight: 900,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: 'var(--pv-text)',
                }}
              >
                <span>VEJA O QUE NOSSOS CLIENTES ESTÃO DIZENDO</span>
              </h2>

              <p className="text-center mt-4 text-base sm:text-lg opacity-80">
                <span>Leia os depoimentos de quem já tomou a decisão certa.</span>
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-10">
                {[
                  {
                    name: 'Mariana Lopes',
                    role: 'Médica-veterinária',
                    quote:
                      'Eu sabia o nome de vários pontos, mas sempre acabava voltando para apostilas para conferir exatamente a localização. Ter tudo organizado por região tornou minhas revisões muito mais práticas.',
                  },
                  {
                    name: 'Camila Ferreira',
                    role: 'Pós-graduanda em Acupuntura Veterinária',
                    quote:
                      'Gostei principalmente da divisão entre cães e gatos e da organização por região. Quando preciso revisar um ponto específico, consigo encontrar a referência muito mais rápido',
                  },
                  {
                    name: 'Renato Almeida',
                    role: 'Médico-veterinário e estudante de Medicina Integrativa',
                    quote:
                      'Antes eu tinha vários materiais diferentes abertos para estudar. Com os mapas ficou mais simples visualizar a anatomia e associar cada acuponto à região correspondente.',
                  },
                ].map((depo, i) => (
                  <div key={i} className="px-2">
                    <div className="mb-4">
                      <div className="flex gap-0.5" aria-label="Classificado como 5 de 5">
                        {[...Array(5)].map((_, s) => (
                          <svg
                            key={s}
                            aria-hidden="true"
                            viewBox="0 0 1000 1000"
                            className="h-5 w-5"
                            style={{ fill: 'rgb(251, 176, 59)' }}
                          >
                            <path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z" />
                          </svg>
                        ))}
                      </div>
                    </div>

                    <p className="text-lg sm:text-xl leading-relaxed mb-5">
                      "{depo.quote}"
                    </p>
                    <p className="font-bold text-base sm:text-lg">{depo.name}</p>
                    <p className="text-sm sm:text-base opacity-70 mt-0.5">{depo.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* SEÇÃO 10: Garantia de 7 Dias */}
        <div id="secao-10" className="scroll-mt-20">
          <section
            className="w-full px-4 py-16 sm:py-20"
            style={{ background: '#ffffff', color: 'var(--pv-text)' }}
          >
            <div className="mx-auto" style={{ maxWidth: 'var(--pv-container)' }}>
              <div className="max-w-4xl mx-auto grid sm:grid-cols-[260px_1fr] gap-10 items-center">
                <div className="flex justify-center relative">
                  <img
                    src="/mvt/garantia-15-dias-1.png"
                    alt="Garantia de 7 dias"
                    className="w-full max-w-[300px] object-contain"
                    loading="lazy"
                  />
                </div>

                <div>
                  <h2
                    className="text-[32px] sm:text-[44px] lg:text-[48px] mb-5 font-heading"
                    style={{
                      fontWeight: 900,
                      letterSpacing: '-0.02em',
                      lineHeight: 1.1,
                      color: 'var(--pv-text)',
                    }}
                  >
                    <span>GARANTIA DE 7 DIAS — ZERO RISCO PRA VOCÊ</span>
                  </h2>

                  <p className="text-base sm:text-lg mb-4 leading-relaxed">
                    <strong>Isso significa que,</strong>{' '}
                    <span>a qualquer momento, se você achar que:</span>
                  </p>

                  <ul className="space-y-3 mb-5">
                    <li className="flex gap-2 items-center text-base sm:text-lg">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 512 512"
                        className="h-3 w-3 shrink-0"
                        style={{ fill: 'var(--pv-accent)' }}
                      >
                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                      </svg>
                      <span>o material não faz sentido para sua prática</span>
                    </li>
                    <li className="flex gap-2 items-center text-base sm:text-lg">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 512 512"
                        className="h-3 w-3 shrink-0"
                        style={{ fill: 'var(--pv-accent)' }}
                      >
                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                      </svg>
                      <span>os acupontos não atendem suas necessidades</span>
                    </li>
                    <li className="flex gap-2 items-center text-base sm:text-lg">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 512 512"
                        className="h-3 w-3 shrink-0"
                        style={{ fill: 'var(--pv-accent)' }}
                      >
                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                      </svg>
                      <span>ou simplesmente não quiser continuar</span>
                    </li>
                  </ul>

                  <p className="opacity-90 whitespace-pre-line text-base sm:text-lg leading-relaxed">
                    Você pode solicitar o reembolso. Sem prazo, sem burocracia. O risco fica todo do
                    nosso lado.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* SEÇÃO 11: Como é o acesso */}
        <div id="secao-11" className="scroll-mt-20">
          <section
            className="w-full px-4 py-16 sm:py-20"
            style={{ background: 'var(--pv-bg)', color: 'var(--pv-text)' }}
          >
            <div className="mx-auto" style={{ maxWidth: 'var(--pv-container)' }}>
              <h2
                className="text-[40px] sm:text-[52px] lg:text-[60px] text-center font-heading"
                style={{
                  fontWeight: 900,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: 'var(--pv-text)',
                }}
              >
                <span>COMO É O ACESSO</span>
              </h2>

              <p className="text-center opacity-70 mt-4 uppercase text-sm tracking-[0.25em] font-bold">
                (<span>É simples e rápido, você verá!</span>)
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mt-12">
                {[
                  {
                    img: '/mvt/order.png',
                    title: 'Conclua sua compra',
                    desc: 'Após o pagamento, seu acesso é liberado automaticamente.',
                    bullets: [
                      'Receba seu material por e-mail',
                      'Acesse o link de download',
                      'Salve no seu dispositivo',
                    ],
                  },
                  {
                    img: '/mvt/member-card.png',
                    title: 'Entre na área de membros',
                    desc: 'Acesse todos os conteúdos disponíveis na plataforma.',
                    bullets: [
                      'Navegue pelos materiais',
                      'Consulte sempre que precisar',
                      'Tenha tudo à mão',
                    ],
                  },
                  {
                    img: '/mvt/folders-1.png',
                    title: 'Baixe os arquivos',
                    desc: 'Tenha acesso offline sempre que precisar.',
                    bullets: [
                      'Salve no seu computador',
                      'Imprima se desejar',
                      'Utilize como referência',
                    ],
                  },
                  {
                    img: '/mvt/digital-drawing.png',
                    title: 'Use e aplique',
                    desc: 'Coloque em prática o que aprendeu com segurança.',
                    bullets: [
                      'Identifique os acupontos',
                      'Aplique os tratamentos',
                      'Garanta a saúde dos seus pacientes',
                    ],
                  },
                ].map((step, idx) => (
                  <div key={idx} className="text-center px-2 group">
                    <img
                      src={step.img}
                      alt={step.title}
                      className="h-16 w-16 mx-auto mb-4 object-contain transition-transform duration-300 group-hover:-translate-y-[15px]"
                      loading="lazy"
                    />
                    <h3
                      className="font-black mb-2 text-xl sm:text-2xl"
                      style={{ letterSpacing: '-0.01em' }}
                    >
                      <span>{step.title}</span>
                    </h3>
                    <p className="text-base sm:text-lg opacity-80 leading-relaxed mb-3">
                      <span>{step.desc}</span>
                    </p>
                    <ul className="space-y-1.5 text-left inline-block">
                      {step.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex gap-2 items-start text-sm sm:text-base opacity-90">
                          <span className="shrink-0 mt-0.5">
                            <CheckIcon />
                          </span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-12">
                <a
                  href="#planos"
                  className="px-10 py-5 text-[20px] inline-block text-center transition-transform duration-300 hover:scale-[1.05] active:scale-[0.98]"
                  style={{
                    background: 'var(--pv-success)',
                    color: '#ffffff',
                    boxShadow: 'rgba(57, 181, 116, 0.55) 0px 14px 30px -10px',
                    fontWeight: 600,
                    borderRadius: '9999px',
                    letterSpacing: '-0.01em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                  }}
                >
                  <span>QUERO ACESSAR AGORA</span>
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* SEÇÃO 12: Perguntas Frequentes */}
        <div id="secao-12" className="scroll-mt-20">
          <section
            className="w-full px-4 py-16 sm:py-20"
            style={{ background: 'var(--pv-bg)', color: 'var(--pv-text)' }}
          >
            <div className="mx-auto" style={{ maxWidth: 'var(--pv-container)' }}>
              <h2
                className="text-[40px] sm:text-[52px] lg:text-[60px] text-center font-heading"
                style={{
                  fontWeight: 900,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: 'var(--pv-text)',
                }}
              >
                <span>PERGUNTAS FREQUENTES</span>
              </h2>

              <div className="max-w-3xl mx-auto mt-10">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="py-6 border-b border-black/10 transition-colors"
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(index)}
                        className="w-full cursor-pointer text-left text-xl sm:text-2xl font-semibold flex justify-between items-center focus:outline-none"
                      >
                        <span>{faq.q}</span>
                        <span
                          className={`ml-4 text-3xl font-light opacity-50 transition-transform duration-300 ${
                            isOpen ? 'rotate-45' : ''
                          }`}
                        >
                          +
                        </span>
                      </button>
                      {isOpen && (
                        <p className="mt-4 text-base sm:text-lg opacity-85 whitespace-pre-line leading-relaxed">
                          {faq.a}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>

        {/* SEÇÃO 13: Rodapé */}
        <div id="secao-13" className="scroll-mt-20">
          <footer
            className="px-4 py-14 text-center text-sm sm:text-base space-y-4"
            style={{ background: 'rgb(17, 17, 17)', color: '#ffffff' }}
          >
            <p className="font-semibold text-base sm:text-lg">
              <span>©️ Todos os direitos reservados.</span>
            </p>
            <p className="opacity-80 max-w-3xl mx-auto leading-relaxed">
              <span>
                Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Após sair do
                Facebook, a responsabilidade não é deles e sim do nosso site. Fazemos todos os
                esforços para indicar claramente e mostrar todas as provas do produto e usamos
                resultados reais. Nós não vendemos o seu e-mail ou qualquer informação para
                terceiros. Jamais fazemos algum tipo de spam. Se você tiver alguma dúvida, sinta-se à
                vontade para usar o link de contato e falar conosco em horário comercial de Segunda a
                Sextas das 09h00 ás 18h00. Lemos e respondemos todas as mensagens por ordem de
                chegada.
              </span>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
