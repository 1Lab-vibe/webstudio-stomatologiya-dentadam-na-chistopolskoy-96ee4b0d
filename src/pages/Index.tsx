import { useState } from "react";
import clinicHero from "@/assets/clinic-hero.jpg";
import safetyImg from "@/assets/safety.jpg";
import patientImg from "@/assets/patient.jpg";
import doc1 from "@/assets/doc1.jpg";
import doc2 from "@/assets/doc2.jpg";
import doc3 from "@/assets/doc3.jpg";
import sterilizationImg from "@/assets/sterilization.jpg";

const PHONE = "+7 (937) 615-42-85";
const PHONE2 = "+7 (937) 617-65-07";
const ADDRESS = "г. Казань, ул. Чистопольская, 71Б";

const services = [
  { name: "Лечение кариеса", from: 2500, to: 7500, tag: null },
  { name: "Чистка зубов (Air Flow + ультразвук)", from: 4200, to: 6900, tag: "−15% до конца месяца" },
  { name: "Лечение дёсен", from: 1800, to: 9000, tag: null },
  { name: "Удаление зуба мудрости", from: 3500, to: 12000, tag: null },
  { name: "Лечение перикоронита", from: 2900, to: 6500, tag: null },
  { name: "Виниры (керамика)", from: 24000, to: 38000, tag: "Рассрочка 0%" },
  { name: "Коронки", from: 8500, to: 32000, tag: null },
  { name: "Съёмные протезы", from: 18000, to: 45000, tag: null },
  { name: "Отбеливание ZOOM", from: 19000, to: 24000, tag: null },
  { name: "Компьютерная томография / ОПТГ", from: 1100, to: 2400, tag: null },
];

const team = [
  { name: "Артур Закиров", role: "Главный врач, стоматолог-терапевт", years: 17, img: doc1, certs: ["КГМУ", "Endodontics, Cologne"] },
  { name: "Лилия Хасанова", role: "Стоматолог-ортопед", years: 12, img: doc2, certs: ["КГМУ", "Digital Smile Design"] },
  { name: "Ильнур Сафин", role: "Хирург-имплантолог", years: 9, img: doc3, certs: ["КГМУ", "Straumann Academy"] },
];

const reviews = [
  { source: "Яндекс", rating: 5, name: "Алия М.", text: "Записалась онлайн на вечер, приняли минута в минуту. Артур всё объяснил спокойно, без давления. Цена совпала со сметой." },
  { source: "2ГИС", rating: 5, name: "Дмитрий К.", text: "Делал чистку и лечил два зуба. Понравилось, что показали снимок и расписали план до копейки. Никаких «вдруг ещё что-то»." },
  { source: "Яндекс", rating: 5, name: "Регина Г.", text: "Боялась удалять зуб мудрости — оказалось не страшно. Хирург всё прокомментировал, дали памятку и связь после визита." },
];

export default function Index() {
  const [form, setForm] = useState({ name: "", phone: "", service: services[0].name, time: "Сегодня вечером" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <Logo />
            <div className="leading-tight">
              <div className="font-display text-base font-extrabold">DentaDam</div>
              <div className="text-[11px] text-muted-foreground">на Чистопольской</div>
            </div>
          </a>
          <nav className="hidden gap-7 text-sm text-muted-foreground md:flex">
            <a href="#services" className="hover:text-primary">Услуги и цены</a>
            <a href="#team" className="hover:text-primary">Врачи</a>
            <a href="#cases" className="hover:text-primary">Кейсы</a>
            <a href="#safety" className="hover:text-primary">Безопасность</a>
            <a href="#contacts" className="hover:text-primary">Контакты</a>
          </nav>
          <a href={`tel:${PHONE.replace(/\D/g, "")}`} className="hidden rounded-full border border-border px-4 py-2 text-sm font-semibold hover:border-primary hover:text-primary md:inline-flex">
            {PHONE}
          </a>
          <a href="#booking" className="btn-primary !px-4 !py-2 text-sm md:hidden">Записаться</a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container grid gap-10 py-12 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:py-20">
          <div className="flex flex-col justify-center animate-fade-up">
            <div className="mb-5 flex flex-wrap gap-2">
              <span className="badge-trust"><Star /> 5,0 на Яндекс Картах</span>
              <span className="badge-trust">Лицензия Минздрава РТ</span>
              <span className="badge-trust">Гарантия на работы</span>
            </div>
            <h1 className="font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
              Стоматология, где<br />
              <span className="text-primary">говорят честно</span> —<br />
              и цена не меняется в кресле.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              Клиника DentaDam на ул. Чистопольская, 71Б в Казани. Перед лечением — снимок, план и точная смета. Без «доплат на месте».
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#booking" className="btn-primary">Записаться онлайн</a>
              <a href="#services" className="btn-ghost">Получить план лечения</a>
            </div>
            <dl className="mt-9 grid grid-cols-3 gap-4 border-t border-border pt-6 text-sm">
              <div><dt className="text-muted-foreground">Приём с</dt><dd className="font-display text-xl font-bold">9:00</dd></div>
              <div><dt className="text-muted-foreground">Рассрочка</dt><dd className="font-display text-xl font-bold">0%</dd></div>
              <div><dt className="text-muted-foreground">Гарантия</dt><dd className="font-display text-xl font-bold">до 2 лет</dd></div>
            </dl>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
              <img src={clinicHero} alt="Кабинет стоматологии DentaDam в Казани" width={1536} height={1024} className="h-full w-full object-cover" />
            </div>
            {/* Floating online-booking card */}
            <div className="absolute -bottom-6 -left-4 hidden w-[280px] rounded-2xl bg-card p-4 shadow-[var(--shadow-card)] sm:block">
              <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-primary">
                <span className="relative flex h-2 w-2"><span className="absolute inset-0 animate-ping rounded-full bg-primary/60" /><span className="relative h-2 w-2 rounded-full bg-primary" /></span>
                Свободно сегодня
              </div>
              <div className="grid grid-cols-3 gap-2">
                {["15:30", "17:00", "18:30"].map((t) => (
                  <a key={t} href="#booking" className="rounded-lg border border-border py-2 text-center text-sm font-semibold hover:border-primary hover:text-primary">{t}</a>
                ))}
              </div>
            </div>
            <div className="absolute -right-3 -top-3 hidden rounded-2xl bg-accent px-4 py-3 font-display text-sm font-bold text-accent-foreground shadow-[var(--shadow-card)] sm:block">
              Консультация<br />бесплатно
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS — animated SVG */}
      <section className="border-y border-border/60 bg-card/60">
        <div className="container py-10">
          <div className="mb-6 flex items-end justify-between gap-4">
            <h2 className="font-display text-2xl font-extrabold sm:text-3xl">Как проходит первый визит</h2>
            <span className="hidden text-sm text-muted-foreground sm:block">всего 4 шага · ~45 минут</span>
          </div>
          <ProcessSVG />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="container py-16 lg:py-24">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Услуги и цены</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">Цены «от» и «до» — без скрытых строк</h2>
          <p className="mt-3 text-muted-foreground">Точную стоимость врач называет после осмотра и снимка. План фиксируется в смете до начала лечения.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.name} className="card-soft flex flex-col justify-between gap-4 transition hover:border-primary/40 hover:shadow-[var(--shadow-card)]">
              <div>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-bold leading-snug">{s.name}</h3>
                  {s.tag && <span className="shrink-0 rounded-full bg-accent/30 px-2.5 py-1 text-[11px] font-semibold text-accent-foreground">{s.tag}</span>}
                </div>
                <div className="mt-3 font-display text-2xl font-extrabold">
                  {s.from.toLocaleString("ru-RU")} – {s.to.toLocaleString("ru-RU")} <span className="text-base font-semibold text-muted-foreground">₽</span>
                </div>
              </div>
              <a href="#booking" className="text-sm font-semibold text-primary hover:underline">Записаться на услугу →</a>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="bg-card/60 py-16 lg:py-24">
        <div className="container">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Команда</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">Врачи, к которым возвращаются</h2>
            <p className="mt-3 text-muted-foreground">Все доктора — выпускники КГМУ, регулярно проходят повышение квалификации в России и Европе.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {team.map((d) => (
              <div key={d.name} className="card-soft p-0 overflow-hidden">
                <img src={d.img} alt={d.name} loading="lazy" width={768} height={896} className="aspect-[4/5] w-full object-cover" />
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold">{d.name}</h3>
                  <p className="text-sm text-muted-foreground">{d.role}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    <span className="rounded-md bg-primary-soft px-2 py-1 text-xs font-medium text-primary">Стаж {d.years} лет</span>
                    {d.certs.map((c) => <span key={c} className="rounded-md bg-secondary px-2 py-1 text-xs">{c}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASES */}
      <section id="cases" className="container py-16 lg:py-24">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Кейсы пациентов</p>
          <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">До и после — без ретуши</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="card-soft p-0 overflow-hidden">
            <img src={patientImg} alt="Пациентка после лечения" loading="lazy" width={1024} height={1280} className="h-72 w-full object-cover sm:h-96" />
            <div className="p-6">
              <div className="mb-2 inline-flex rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary">Виниры + отбеливание · 4 визита</div>
              <h3 className="font-display text-xl font-bold">«Перестала закрывать рот ладонью на фото»</h3>
              <p className="mt-2 text-muted-foreground">Регина пришла с потемневшими передними зубами после старых пломб. Сделали диагностический wax-up, согласовали форму, поставили 6 керамических виниров.</p>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="card-soft">
              <div className="text-xs font-semibold text-primary">Имплантация · 1 этап</div>
              <h3 className="mt-1 font-display text-lg font-bold">Восстановили жевательный зуб за 3 визита</h3>
              <p className="mt-2 text-sm text-muted-foreground">Пациент 42 года. Установка импланта Straumann, временная коронка через 4 месяца, постоянная — через 6.</p>
            </div>
            <div className="card-soft">
              <div className="text-xs font-semibold text-primary">Терапия · 1 визит</div>
              <h3 className="mt-1 font-display text-lg font-bold">Спасли зуб, который везде рекомендовали удалить</h3>
              <p className="mt-2 text-sm text-muted-foreground">Перелечили каналы под микроскопом. Зуб служит уже 2 года, контрольные снимки чистые.</p>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-card/60 py-16 lg:py-24">
        <div className="container">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Отзывы</p>
              <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">Что пишут о нас на Яндексе и в 2ГИС</h2>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-card px-4 py-2 shadow-[var(--shadow-soft)]">
              <span className="font-display text-2xl font-extrabold text-primary">5,0</span>
              <div className="flex">{Array.from({ length: 5 }).map((_, i) => <Star key={i} />)}</div>
              <span className="text-sm text-muted-foreground">· Яндекс Карты</span>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {reviews.map((r) => (
              <div key={r.name} className="card-soft">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex">{Array.from({ length: r.rating }).map((_, i) => <Star key={i} />)}</div>
                  <span className="text-xs font-semibold text-muted-foreground">{r.source}</span>
                </div>
                <p className="text-foreground/90">«{r.text}»</p>
                <div className="mt-4 text-sm font-semibold">{r.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAFETY */}
      <section id="safety" className="container py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="grid grid-cols-2 gap-4">
            <img src={safetyImg} alt="Стерильные инструменты" loading="lazy" width={1280} height={960} className="aspect-square rounded-2xl object-cover" />
            <img src={sterilizationImg} alt="Автоклав и стерилизация" loading="lazy" width={1280} height={960} className="aspect-square rounded-2xl object-cover" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Безопасность</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">3 уровня стерилизации и работа по протоколу</h2>
            <p className="mt-3 text-muted-foreground">У клиники действующая лицензия Минздрава Республики Татарстан. Каждый инструмент проходит дезинфекцию, ультразвуковую очистку и автоклав класса B.</p>
            <ul className="mt-6 grid gap-3">
              {[
                ["Лицензия", "Действующая лицензия на медицинскую деятельность"],
                ["Гарантия", "До 24 месяцев на терапию и ортопедические работы"],
                ["Оборудование", "Радиовизиограф, КТ, апекслокатор, микроскоп"],
                ["Рассрочка", "0% на лечение от 30 000 ₽ — без банка и переплат"],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground"><Check /></span>
                  <div><div className="font-semibold">{t}</div><div className="text-sm text-muted-foreground">{d}</div></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* MAP & CONTACTS */}
      <section id="contacts" className="bg-card/60 py-16 lg:py-24">
        <div className="container grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Как добраться</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">Казань, ул. Чистопольская, 71Б</h2>
            <ul className="mt-6 space-y-4 text-base">
              <li className="flex gap-3"><Pin /><div><div className="font-semibold">Адрес</div><div className="text-muted-foreground">{ADDRESS}</div></div></li>
              <li className="flex gap-3"><Metro /><div><div className="font-semibold">Метро</div><div className="text-muted-foreground">«Козья слобода» — 12 минут пешком</div></div></li>
              <li className="flex gap-3"><Park /><div><div className="font-semibold">Парковка</div><div className="text-muted-foreground">Бесплатные места для пациентов во дворе</div></div></li>
              <li className="flex gap-3"><Phone /><div><div className="font-semibold">Телефоны</div>
                <a href={`tel:${PHONE.replace(/\D/g, "")}`} className="block text-muted-foreground hover:text-primary">{PHONE}</a>
                <a href={`tel:${PHONE2.replace(/\D/g, "")}`} className="block text-muted-foreground hover:text-primary">{PHONE2}</a>
              </div></li>
              <li className="flex gap-3"><Clock /><div><div className="font-semibold">График</div><div className="text-muted-foreground">Пн–Сб 9:00–21:00 · Вс 10:00–18:00</div></div></li>
            </ul>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-soft)]">
            <iframe
              title="Карта: Чистопольская 71Б, Казань"
              src="https://yandex.ru/map-widget/v1/?ll=49.108%2C55.823&z=16&pt=49.108%2C55.823%2Cpm2rdm&l=map&text=Казань%2C%20Чистопольская%2C%2071Б"
              width="100%"
              height="480"
              loading="lazy"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section id="booking" className="container py-16 lg:py-24">
        <div className="mx-auto grid max-w-5xl gap-8 rounded-3xl bg-gradient-to-br from-primary to-[hsl(180_70%_22%)] p-8 text-primary-foreground shadow-[var(--shadow-card)] sm:p-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="font-display text-3xl font-extrabold sm:text-4xl">Запишитесь онлайн</h2>
            <p className="mt-3 text-primary-foreground/85">Перезвоним в течение 15 минут в рабочее время, согласуем удобный слот и доктора. Никакой назойливой рассылки.</p>
            <ul className="mt-6 space-y-2 text-sm text-primary-foreground/90">
              <li>· Бесплатная первичная консультация</li>
              <li>· План лечения и смета — на руки</li>
              <li>· Возможна рассрочка 0%</li>
            </ul>
          </div>
          {sent ? (
            <div className="flex flex-col items-start justify-center rounded-2xl bg-card p-8 text-foreground">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground"><Check /></div>
              <h3 className="font-display text-xl font-bold">Заявка принята</h3>
              <p className="mt-2 text-muted-foreground">Администратор перезвонит в ближайшее время. Спасибо за доверие.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="grid gap-3 rounded-2xl bg-card p-6 text-foreground shadow-[var(--shadow-card)]">
              <label className="grid gap-1.5 text-sm">
                <span className="font-semibold">Как к вам обращаться</span>
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-primary" placeholder="Имя" />
              </label>
              <label className="grid gap-1.5 text-sm">
                <span className="font-semibold">Телефон</span>
                <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-primary" placeholder="+7 (___) ___-__-__" />
              </label>
              <div className="grid gap-3 sm:grid-cols-2">
                <label className="grid gap-1.5 text-sm">
                  <span className="font-semibold">Услуга</span>
                  <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="rounded-xl border border-border bg-background px-3 py-3 outline-none focus:border-primary">
                    {services.map((s) => <option key={s.name}>{s.name}</option>)}
                    <option>Не знаю — нужна консультация</option>
                  </select>
                </label>
                <label className="grid gap-1.5 text-sm">
                  <span className="font-semibold">Удобное время</span>
                  <select value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })}
                    className="rounded-xl border border-border bg-background px-3 py-3 outline-none focus:border-primary">
                    <option>Сегодня вечером</option>
                    <option>Завтра утром</option>
                    <option>Завтра вечером</option>
                    <option>В выходные</option>
                  </select>
                </label>
              </div>
              <button className="btn-primary mt-2 w-full">Записаться онлайн</button>
              <p className="text-center text-xs text-muted-foreground">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных</p>
            </form>
          )}
        </div>
      </section>

      <footer className="border-t border-border/60 bg-card/40">
        <div className="container flex flex-col gap-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2"><Logo small /> © {new Date().getFullYear()} DentaDam · {ADDRESS}</div>
          <div className="flex gap-5">
            <a href={`tel:${PHONE.replace(/\D/g, "")}`} className="hover:text-primary">{PHONE}</a>
            <a href={`tel:${PHONE2.replace(/\D/g, "")}`} className="hover:text-primary">{PHONE2}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ------- SVG icons & visuals ------- */
function Logo({ small = false }: { small?: boolean }) {
  const s = small ? 22 : 30;
  return (
    <svg width={s} height={s} viewBox="0 0 32 32" fill="none" aria-hidden>
      <path d="M16 4c-4 0-7 2.2-7 6 0 2.5 1 4 1.6 6.5C11.2 19 11 23 12.5 26.5c.7 1.6 2.5 1.6 3-.2.5-2 .8-4.3 1.5-4.3s1 2.3 1.5 4.3c.5 1.8 2.3 1.8 3 .2C23 23 22.8 19 23.4 16.5 24 14 25 12.5 25 10c0-3.8-3-6-7-6h-2z" fill="hsl(var(--primary))"/>
      <circle cx="20.5" cy="9.5" r="1.5" fill="hsl(var(--accent))"/>
    </svg>
  );
}
function Star() { return <svg width="14" height="14" viewBox="0 0 24 24" fill="hsl(var(--accent))" aria-hidden><path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18 22l-6-3.5L6 22l1.5-7.2L2 10l7.1-1.1L12 2z"/></svg>; }
function Check() { return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden><polyline points="20 6 9 17 4 12"/></svg>; }
function Pin() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" aria-hidden><path d="M12 22s7-7.5 7-13a7 7 0 10-14 0c0 5.5 7 13 7 13z"/><circle cx="12" cy="9" r="2.5"/></svg>; }
function Metro() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" aria-hidden><path d="M3 20l3-14 6 9 6-9 3 14"/><path d="M3 20h18"/></svg>; }
function Park() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" aria-hidden><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 17V7h4a3 3 0 010 6H9"/></svg>; }
function Phone() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" aria-hidden><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012 4.2 2 2 0 014 2h3a2 2 0 012 1.7 12.8 12.8 0 00.7 2.8 2 2 0 01-.5 2.1L8 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4 12.8 12.8 0 002.8.7A2 2 0 0122 16.9z"/></svg>; }
function Clock() { return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" aria-hidden><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>; }

function ProcessSVG() {
  const steps = [
    { t: "Запись", d: "онлайн или по телефону" },
    { t: "Осмотр", d: "снимок и диагностика" },
    { t: "Смета", d: "план и точная цена" },
    { t: "Лечение", d: "по протоколу, без боли" },
  ];
  return (
    <div className="relative">
      <svg viewBox="0 0 800 130" className="w-full" aria-hidden>
        <line x1="60" y1="55" x2="740" y2="55" stroke="hsl(var(--primary))" strokeWidth="2" className="step-line" />
        {steps.map((_, i) => {
          const x = 60 + (i * 680) / 3;
          return (
            <g key={i} className="tooth-pulse" transform={`translate(${x} 55)`}>
              <circle r="22" fill="hsl(var(--primary) / 0.18)" />
              <circle r="14" fill="hsl(var(--primary) / 0.28)" />
              <circle r="8" fill="hsl(var(--primary))" />
            </g>
          );
        })}
      </svg>
      <div className="mt-2 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {steps.map((s, i) => (
          <div key={s.t} className="text-center">
            <div className="font-display text-sm font-bold text-primary">Шаг {i + 1}</div>
            <div className="font-display text-base font-extrabold">{s.t}</div>
            <div className="text-xs text-muted-foreground">{s.d}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
