import Link from "next/link";
import { courseModules } from "@/lib/courseData";

export default function HomePage() {
  const totalLessons = courseModules.reduce(
    (acc, m) => acc + m.lessons.length,
    0
  );

  return (
    <main className="min-h-screen" style={{ background: "var(--bg-base)", color: "var(--text-primary)" }}>

      {/* ===== 1. HERO ===== */}
      <section className="relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">

          {/* Eyebrow label */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span
              className="text-sm font-medium px-4 py-1.5 rounded-full border"
              style={{
                background: "var(--accent-bg)",
                color: "var(--accent)",
                borderColor: "var(--accent)",
              }}
            >
              🟠 Безкоштовний курс
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
            Перший інтернет-магазин —{" "}
            <span style={{ color: "var(--accent)" }}>від реєстрації до продажів</span>
          </h1>

          <p
            className="text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10"
            style={{ color: "var(--text-secondary)" }}
          >
            Покроково створюємо робочий інтернет-магазин: обираємо платформу
            (Shopify або Хорошоп), налаштовуємо каталог, підключаємо оплату й
            автоматизуємо замовлення у KeyCRM.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Link
              href="/course"
              className="inline-flex items-center gap-2 font-semibold px-8 py-3.5 rounded-xl transition-opacity hover:opacity-90"
              style={{ background: "var(--accent)", color: "#fff" }}
            >
              Почати навчання →
            </Link>
            <Link
              href="/course"
              className="inline-flex items-center gap-2 font-medium px-8 py-3.5 rounded-xl transition-opacity border hover:opacity-80"
              style={{
                color: "var(--text-primary)",
                borderColor: "var(--border-base)",
                background: "var(--bg-elevated)",
              }}
            >
              Дивитися програму
            </Link>
          </div>

          {/* Stats strip */}
          <div
            className="flex flex-wrap justify-center gap-0 border-t pt-10"
            style={{ borderColor: "var(--border-base)" }}
          >
            {[
              { value: String(courseModules.length), label: "Модулів" },
              { value: String(totalLessons), label: "Уроків" },
              { value: "Безкоштовно", label: "Вартість" },
              { value: "Shopify · Хорошоп · KeyCRM", label: "Платформи" },
            ].map((stat, i) => (
              <div
                key={i}
                className="px-8 border-r last:border-r-0"
                style={{ borderColor: "var(--border-base)" }}
              >
                <p className="text-2xl font-bold tabular-nums" style={{ color: "var(--text-primary)" }}>
                  {stat.value}
                </p>
                <p
                  className="text-xs mt-1"
                  style={{ color: "var(--text-muted)" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 2. MODULES OVERVIEW ===== */}
      <section className="border-t border-b" style={{ borderColor: "var(--border-base)" }}>
        <div className="max-w-4xl mx-auto px-6 py-20">
          <h2
            className="text-3xl font-bold text-center mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Програма курсу
          </h2>
          <p
            className="text-sm text-center mb-12"
            style={{ color: "var(--text-muted)" }}
          >
            {courseModules.length} модулі · {totalLessons} уроків · від старту до першого продажу
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {courseModules.map((module) => (
              <Link
                key={module.id}
                href={`/course/${module.id}/${module.lessons[0].id}`}
                className="flex items-start gap-4 p-5 rounded-2xl border transition-opacity hover:opacity-80 group"
                style={{
                  background: "var(--bg-elevated)",
                  borderColor: "var(--border-base)",
                }}
              >
                {/* Emoji icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                  style={{ background: "var(--bg-overlay)" }}
                >
                  {module.emoji}
                </div>

                {/* Module info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                      Модуль {module.id.replace("module-", "")}
                    </span>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-medium"
                      style={{
                        background: "var(--accent-bg)",
                        color: "var(--accent)",
                      }}
                    >
                      {module.lessons.length} уроків
                    </span>
                  </div>
                  <p
                    className="text-sm font-bold mb-1.5"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {module.title}
                  </p>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {module.description}
                  </p>
                </div>

                {/* Arrow */}
                <span
                  className="shrink-0 mt-1 transition-transform group-hover:translate-x-0.5"
                  style={{ color: "var(--text-muted)" }}
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 3. WHAT YOU'LL LEARN ===== */}
      <section
        className="border-b"
        style={{ borderColor: "var(--border-base)", background: "var(--bg-elevated)" }}
      >
        <div className="max-w-4xl mx-auto px-6 py-20">
          <h2
            className="text-3xl font-bold text-center mb-12"
            style={{ color: "var(--text-primary)" }}
          >
            Що ви вмітимете після курсу
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                icon: "🏪",
                title: "Запустите магазин з нуля",
                body: "Оберете платформу, зареєструєте магазин, налаштуєте домен, хостинг і SSL — без технічних знань.",
              },
              {
                icon: "📦",
                title: "Побудуєте каталог товарів",
                body: "Структура категорій, ідеальні картки товарів, SEO-описи та стратегія ціноутворення зі знижками.",
              },
              {
                icon: "💳",
                title: "Підключите оплату й доставку",
                body: "WayForPay, LiqPay, Monobank — і Нова Пошта API. Мінімум кроків для покупця, максимум конверсій.",
              },
              {
                icon: "📈",
                title: "Автоматизуєте замовлення",
                body: "KeyCRM, Google Analytics 4, Instagram та Google Shopping — перші продажі і масштабування.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-5 rounded-2xl border"
                style={{
                  background: "var(--bg-base)",
                  borderColor: "var(--border-base)",
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl shrink-0"
                  style={{ background: "var(--accent-bg)" }}
                >
                  {item.icon}
                </div>
                <div>
                  <h3
                    className="text-sm font-bold mb-1.5"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 4. HOW THE COURSE LOOKS ===== */}
      <section className="border-b" style={{ borderColor: "var(--border-base)" }}>
        <div className="max-w-4xl mx-auto px-6 py-20">
          <h2
            className="text-3xl font-bold text-center mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Як виглядає курс
          </h2>
          <p
            className="text-sm text-center mb-12"
            style={{ color: "var(--text-muted)" }}
          >
            Вчимося, практикуємо, отримуємо результат
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                n: "01",
                icon: "📖",
                title: "Теорія",
                body: "Кожен урок — структурований текстовий матеріал з прикладами, скриншотами та покроковими інструкціями. Читаєте у своєму темпі.",
              },
              {
                n: "02",
                icon: "🛠",
                title: "Практика",
                body: "Після теорії — завдання для вашого магазину. Ви відразу застосовуєте знання: налаштовуєте, завантажуєте товари, підключаєте сервіси.",
              },
              {
                n: "03",
                icon: "🚀",
                title: "Результат",
                body: "Наприкінці кожного модуля — тест для закріплення. Після курсу у вас готовий магазин, підключений до платіжних систем і CRM.",
              },
            ].map((item) => (
              <div
                key={item.n}
                className="relative p-6 rounded-2xl border"
                style={{
                  background: "var(--bg-elevated)",
                  borderColor: "var(--border-base)",
                }}
              >
                <span
                  className="absolute top-4 right-4 text-5xl font-bold leading-none select-none pointer-events-none"
                  style={{ color: "var(--accent-bg)", opacity: 0.9 }}
                >
                  {item.n}
                </span>
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-5"
                  style={{ background: "var(--accent-bg)", color: "var(--accent)" }}
                >
                  {item.icon}
                </div>
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ color: "var(--text-primary)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 5. FOOTER CTA ===== */}
      <section style={{ background: "var(--accent)" }}>
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#fff" }}>
            Готові відкрити свій магазин?
          </h2>
          <p className="text-base max-w-md mx-auto mb-10" style={{ color: "rgba(255,255,255,0.8)" }}>
            Безкоштовний курс — від вибору платформи до перших продажів. Починайте прямо зараз.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/course"
              className="inline-flex items-center gap-2 font-semibold px-8 py-3.5 rounded-xl border-2 transition-colors hover:bg-white/10"
              style={{ borderColor: "#fff", color: "#fff" }}
            >
              Почати безкоштовно →
            </Link>
          </div>
          <div className="mt-6">
            <Link
              href="/course"
              className="text-sm transition-colors hover:opacity-90"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Переглянути всі {totalLessons} уроків →
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
