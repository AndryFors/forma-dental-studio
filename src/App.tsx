import { useEffect, useState, type FormEvent } from 'react';
import { clinic, journey, services } from './content';

const Arrow = ({ diagonal = false }: { diagonal?: boolean }) => <span aria-hidden="true" className="arrow">{diagonal ? '↗' : '→'}</span>;
const Eyebrow = ({ children }: { children: React.ReactNode }) => <span className="eyebrow"><span className="eyebrow-dot" />{children}</span>;

function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => { document.body.classList.toggle('menu-open', open); return () => document.body.classList.remove('menu-open'); }, [open]);
  const nav = [['Услуги', '#services'], ['О клинике', '#philosophy'], ['Врачи', '#team'], ['Результаты', '#results'], ['Отзывы', '#reviews'], ['Контакты', '#contacts']];
  return <>
    <header className="header">
      <a className="brand" href="#top" aria-label="FORMA — наверх"><span className="brand-name">FORMA<span className="brand-period">.</span></span><span className="brand-caption">DENTAL STUDIO</span></a>
      <nav className="desktop-nav" aria-label="Основная навигация">{nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
      <a className="header-cta" href="#appointment">Записаться <Arrow diagonal /></a>
      <button type="button" className={'menu-toggle ' + (open ? 'is-open' : '')} onClick={() => setOpen(!open)} aria-label={open ? 'Закрыть меню' : 'Открыть меню'} aria-expanded={open} aria-controls="mobile-menu"><span /><span /></button>
    </header>
    <div id="mobile-menu" className={'mobile-menu ' + (open ? 'is-open' : '')} aria-hidden={!open}>
      <nav aria-label="Мобильная навигация">{nav.map(([label, href], index) => <a key={href} href={href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}><sup>0{index + 1}</sup>{label}<Arrow diagonal /></a>)}</nav>
      <a className="mobile-menu-cta" href="#appointment" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>Записаться на консультацию <Arrow diagonal /></a>
      <p>Стоматология, в которой спокойно.</p>
    </div>
  </>;
}

function Hero() {
  return <section className="hero section-shell" id="top">
    <div className="hero-copy">
      <Eyebrow>PRIVATE DENTISTRY · {clinic.city}</Eyebrow>
      <h1>Стоматология,<br />в которой <em>спокойно.</em></h1>
      <p className="hero-description">Точное лечение. Бережное отношение. Результат, который остаётся собой.</p>
      <div className="hero-actions"><a className="button button-dark" href="#appointment">Записаться на консультацию <Arrow diagonal /></a><a className="text-link" href="#services">Посмотреть услуги <Arrow /></a></div>
      <div className="hero-foot"><span>01 / 05</span><span>Лечение начинается с понимания</span><span className="scroll-cue">Листайте вниз ↓</span></div>
    </div>
    <div className="hero-visual"><img src="/images/consultation.webp" width="1800" height="1380" alt="Врач беседует с пациенткой в светлом стоматологическом кабинете; иллюстративное фото" fetchPriority="high" /><span className="image-stamp">FORMA<br/><small>care in every detail</small></span><span className="image-index">FIG. 01 — THE FIRST CONVERSATION</span></div>
  </section>;
}

function Philosophy() {
  return <section className="philosophy section-pad section-shell" id="philosophy"><div className="section-side"><Eyebrow>НАША ФИЛОСОФИЯ</Eyebrow><span className="section-count">01 / ПОДХОД</span></div><div className="philosophy-main"><h2>Хорошая стоматология начинается <em>не с лечения.</em></h2><div className="philosophy-bottom"><p>Она начинается с разговора. С внимания к деталям, вашим ощущениям и к тому, каким вы хотите видеть результат. Только после этого появляется план.</p><div className="philosophy-mark" aria-hidden="true">f.</div></div></div></section>;
}

function Services() {
  const [active, setActive] = useState(0);
  return <section className="services section-pad" id="services"><div className="section-shell"><div className="services-top"><div><Eyebrow>НАПРАВЛЕНИЯ</Eyebrow><h2>Искусство <em>точности.</em></h2></div><p>От первого осмотра до сложной реабилитации — решения, которые учитывают человека целиком.</p></div><div className="services-grid"><div className="service-list">{services.map((service, i) => <button type="button" key={service.title} className={'service-row ' + (active === i ? 'active' : '')} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} onClick={() => setActive(i)} aria-label={`${service.title}: ${service.detail}`}><span className="service-num">0{i + 1}</span><span className="service-title">{service.title}</span><span className="service-arrow"><Arrow diagonal /></span></button>)}</div><div className="service-preview"><img src={services[active].image} alt={`Иллюстрация направления «${services[active].title}», не фотография клиники`} width="800" height="1000" /><div className="preview-overlay"><span>0{active + 1} / 06</span><p>{services[active].detail}</p></div></div></div></div></section>;
}

function Feature() {
  return <section className="feature" id="technology"><div className="feature-image"><img src="/images/smile.webp" width="900" height="1200" loading="lazy" alt="Естественная улыбка, иллюстративный портрет" /></div><div className="feature-copy"><Eyebrow>ЭСТЕТИКА И ФУНКЦИЯ</Eyebrow><h2>Улыбка, которая выглядит <em>как ваша.</em></h2><p>Красота не нуждается в объяснении. Мы стремимся к результату, в котором форма, комфорт и ваше ощущение себя совпадают.</p><div className="feature-points"><span>01 &nbsp; Внимательная диагностика</span><span>02 &nbsp; Персональное планирование</span><span>03 &nbsp; Естественная эстетика</span></div><a className="button button-light" href="#appointment">Обсудить мой случай <Arrow diagonal /></a></div></section>;
}

function Results() {
  return <section className="results section-pad section-shell" id="results"><div className="results-heading"><Eyebrow>РЕЗУЛЬТАТЫ</Eyebrow><h2>Результат — это<br /><em>больше, чем улыбка.</em></h2></div><div className="results-body"><div className="result-placeholder"><span>МЕСТО ДЛЯ РЕАЛЬНОГО КЕЙСА</span><div className="result-shape" aria-hidden="true"><span /><span /></div><small>Фотографии до и после появятся здесь с согласия пациентов.</small></div><div className="results-note"><span className="tiny-index">01 — 02</span><p>Когда появятся подтверждённые клинические случаи, здесь можно показать путь пациента: исходную ситуацию, решение и результат.</p><a className="text-link" href="#appointment">Начать свой путь <Arrow /></a></div></div></section>;
}

function Team() {
  return <section className="team section-pad" id="team"><div className="section-shell team-inner"><div className="team-text"><Eyebrow>ЛЮДИ ЗА РЕЗУЛЬТАТОМ</Eyebrow><h2>Точность —<br />это всегда <em>люди.</em></h2><p>Доверие возникает, когда можно задать любой вопрос и получить честный ответ. Именно так начинается настоящая работа вместе.</p><div className="team-placeholder"><span>ПРОФИЛИ СПЕЦИАЛИСТОВ</span><p>Здесь появятся реальные имена, специализации, квалификации и портреты врачей клиники.</p></div></div><div className="team-image"><img src="/images/consultation.webp" width="1000" height="1300" loading="lazy" alt="Иллюстративное фото беседы врача с пациенткой, не команда клиники"/><span>ЗНАКОМСТВО НАЧИНАЕТСЯ С ДИАЛОГА</span></div></div></section>;
}

function Atmosphere() {
  return <section className="atmosphere" id="atmosphere"><div className="atmosphere-image"><img src="/images/interior.webp" width="1800" height="1300" loading="lazy" alt="Архитектурный интерьер с мягким светом, реальный интерьер клиники будет добавлен"/></div><div className="atmosphere-panel"><Eyebrow>ПРОСТРАНСТВО</Eyebrow><h2>Место, где можно <em>выдохнуть.</em></h2><p>Свет. Тишина. Время без спешки. Визуальная история пространства пока иллюстративная — фотографии самой клиники появятся после съёмки.</p><span>ФОТОГРАФИИ КЛИНИКИ ОЖИДАЮТСЯ</span></div></section>;
}

function ReviewsAndJourney() {
  return <><section className="reviews section-pad section-shell" id="reviews"><Eyebrow>ГОЛОСА ПАЦИЕНТОВ</Eyebrow><div className="review-empty"><span className="quote-mark">“</span><h2>Лучше всего о нас расскажут <em>настоящие истории.</em></h2><p>После согласования с пациентами здесь появятся проверенные отзывы. Мы не публикуем придуманные оценки и цитаты.</p><span className="review-line">МЕСТО ДЛЯ ПОДТВЕРЖДЁННОГО ОТЗЫВА</span></div></section><section className="journey section-pad" id="journey"><div className="section-shell journey-grid"><div className="journey-intro"><Eyebrow>ВАШ ПУТЬ</Eyebrow><h2>Всё начинается <em>с ясности.</em></h2><p>Вы понимаете, что происходит, зачем нужен каждый шаг и чего ожидать дальше.</p></div><div className="journey-list">{journey.map(([num, title, desc]) => <div className="journey-row" key={num}><span>{num}</span><div><h3>{title}</h3><p>{desc}</p></div><Arrow diagonal /></div>)}</div></div></section></>;
}

function Appointment() {
  const [message, setMessage] = useState('');
  const endpoint = import.meta.env.VITE_APPOINTMENT_ENDPOINT as string | undefined;
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!endpoint) { setMessage('Это демонстрационная форма: заявка не отправлена. Подключите адрес VITE_APPOINTMENT_ENDPOINT для приёма заявок.'); return; }
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const response = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      if (!response.ok) throw new Error('Request failed');
      setMessage('Заявка отправлена. Мы свяжемся с вами.'); form.reset();
    } catch { setMessage('Не удалось отправить заявку. Пожалуйста, попробуйте позже.'); }
  }
  return <section className="appointment section-pad" id="appointment"><div className="section-shell appointment-grid"><div className="appointment-copy"><Eyebrow>ПЕРВЫЙ ШАГ</Eyebrow><h2>Давайте начнём <em>с разговора.</em></h2><p>Расскажите, что вас беспокоит. Мы поможем понять, с чего начать.</p><div className="appointment-contact"><span>СВЯЗАТЬСЯ НАПРЯМУЮ</span><p>{clinic.phone}<br/>{clinic.email}</p></div></div><form className="appointment-form" onSubmit={submit}><div className="form-top"><span>ЗАПРОС НА КОНСУЛЬТАЦИЮ</span><span>01 / 01</span></div><label>Как к вам обращаться? <input name="name" required autoComplete="name" placeholder="Ваше имя" /></label><label>Номер телефона или email <input name="contact" required placeholder="Контакт для связи" /></label><label>Что вас интересует? <select name="service" defaultValue=""><option value="" disabled>Выберите направление</option>{services.map(s => <option key={s.title}>{s.title}</option>)}<option>Пока не знаю</option></select></label><label>Как удобнее связаться? <select name="contactMethod" defaultValue="phone"><option value="phone">Позвонить</option><option value="email">Написать на email</option></select></label><label>Ваше сообщение <textarea name="message" rows={2} placeholder="Несколько слов о вашем запросе (необязательно)" /></label><label className="consent"><input type="checkbox" name="consent" required /><span>Я согласен(на) на обработку персональных данных согласно <a href="#privacy">политике конфиденциальности</a>.</span></label><button className="button button-dark form-submit" type="submit">Отправить запрос <Arrow diagonal /></button><p className="form-status" role="status">{message || (!endpoint ? 'Демо-режим: форма не подключена к системе заявок.' : '')}</p></form></div></section>;
}

function Footer() {
  return <footer className="footer" id="contacts"><div className="section-shell"><div className="footer-top"><div><a className="brand brand-footer" href="#top"><span className="brand-name">FORMA<span className="brand-period">.</span></span><span className="brand-caption">DENTAL STUDIO</span></a><p>Стоматология, в которой спокойно.</p></div><div className="footer-nav"><div><span>НАВИГАЦИЯ</span><a href="#services">Услуги</a><a href="#philosophy">О клинике</a><a href="#team">Врачи</a><a href="#results">Результаты</a></div><div><span>КОНТАКТЫ</span><p>{clinic.address}</p><p>{clinic.phone}</p><p>{clinic.hours}</p></div></div></div><div className="footer-wordmark" aria-hidden="true">FORMA</div><div className="footer-bottom"><span>© {new Date().getFullYear()} FORMA. ДЕМОНСТРАЦИОННЫЙ КОНЦЕПТ.</span><a href="#privacy">Политика конфиденциальности</a><a href="#top">Наверх ↑</a></div><div className="privacy" id="privacy">Для публикации необходимо добавить полную политику обработки персональных данных и юридические сведения реальной клиники.</div></div></footer>;
}

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('in-view'); observer.unobserve(entry.target); } }), { threshold: 0.08 });
    document.querySelectorAll('.section-pad, .feature, .atmosphere').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  const schemaReady = import.meta.env.VITE_CLINIC_REAL === 'true' && Boolean(import.meta.env.VITE_SITE_URL) && !clinic.city.includes('УТОЧНЯЕТСЯ') && !clinic.phone.includes('добавлен') && !clinic.address.includes('добавлен');
  const schema = { '@context': 'https://schema.org', '@type': 'Dentist', name: clinic.name, description: 'Частная стоматологическая клиника', url: import.meta.env.VITE_SITE_URL, telephone: clinic.phone, address: { '@type': 'PostalAddress', streetAddress: clinic.address, addressLocality: clinic.city }, image: `${import.meta.env.VITE_SITE_URL}/images/consultation.webp` };
  return <>{schemaReady && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />}<a className="skip-link" href="#main">Перейти к содержимому</a><Header /><main id="main"><Hero /><Philosophy /><Services /><Feature /><Results /><Team /><Atmosphere /><ReviewsAndJourney /><Appointment /></main><Footer /><a className="mobile-sticky" href="#appointment">Записаться <Arrow diagonal /></a></>;
}
