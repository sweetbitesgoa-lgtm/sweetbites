"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  bookingPaths,
  briefFields,
  conciergeStats,
  conversationPreview,
  deliveryAreas,
  flavors,
  orderSteps,
  sizes,
} from "@/lib/order-booking";
import { site } from "@/lib/content";
import {
  getBookingPathWhatsAppUrl,
  getWhatsAppUrl,
} from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { WhatsAppIconInline } from "@/components/ui/WhatsAppButton";
import { fadeUp, staggerContainer, defaultTransition } from "@/lib/motion";

function PhoneMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...defaultTransition, delay: 0.15 }}
      className="relative mx-auto w-full max-w-[340px]"
    >
      <motion.div
        className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[#25D366]/20 via-gold/10 to-terracotta/15 blur-2xl"
        animate={{ opacity: [0.5, 0.75, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <motion.div
        className="relative overflow-hidden rounded-[2rem] border border-cocoa/10 bg-[#0b141a] shadow-2xl shadow-cocoa/30 ring-1 ring-white/10"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          className="flex items-center gap-3 border-b border-white/10 bg-[#1f2c34] px-4 py-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
        >
          <motion.div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-sm font-bold text-white">
            SB
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35 }}
          >
            <p className="text-sm font-semibold text-white">Sweet Bites</p>
            <p className="text-xs text-[#8696a0]">Muskan · usually replies today</p>
          </motion.div>
          <span className="ml-auto flex h-2 w-2 rounded-full bg-[#25D366]" aria-hidden />
        </motion.div>

        <div className="space-y-3 bg-[#0b141a] p-4">
          {conversationPreview.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.45 + i * 0.12, ...defaultTransition }}
              className={`flex ${msg.from === "you" ? "justify-end" : "justify-start"}`}
            >
              <motion.div
                className={`max-w-[88%] rounded-2xl px-3 py-2 text-[13px] leading-snug ${
                  msg.from === "you"
                    ? "rounded-br-sm bg-[#005c4b] text-[#e9edef]"
                    : "rounded-bl-sm bg-[#1f2c34] text-[#e9edef]"
                }`}
                whileHover={{ scale: 1.01 }}
              >
                <p>{msg.text}</p>
                <p className="mt-1 text-right text-[10px] text-[#8696a0]">{msg.time}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-white/10 bg-[#1f2c34] px-4 py-3">
          <p className="text-center text-[11px] text-[#8696a0]">
            Tap below to start your thread with Muskan
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function OrderBookingPage() {
  const reducedMotion = useReducedMotion();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-cocoa text-cream">
        <motion.div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `radial-gradient(ellipse 80% 60% at 10% 0%, #c45c3e 0%, transparent 55%),
              radial-gradient(ellipse 60% 50% at 90% 100%, #4a6741 0%, transparent 50%),
              radial-gradient(circle at 70% 20%, #c9a227 0%, transparent 35%)`,
          }}
          aria-hidden
        />
        <div className="grain-overlay absolute inset-0 opacity-25" aria-hidden />

        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={defaultTransition}
            >
              <p className="inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cream/80">
                <WhatsAppIconInline className="h-3.5 w-3.5 text-[#25D366]" />
                WhatsApp concierge
              </p>
              <h1 className="mt-6 font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-[3.25rem]">
                Book your cake like a conversation, not a checkout
              </h1>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-cream/75">
                Sweet Bites doesn&apos;t use carts or payment forms. Muskan personally
                quotes, designs, and updates you on{" "}
                <span className="font-semibold text-cream">WhatsApp</span> — from first
                idea to delivery day across Goa.
              </p>
              <motion.div
                className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
                initial={reducedMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, ...defaultTransition }}
              >
                <Button href={getWhatsAppUrl()} variant="whatsapp" external>
                  <WhatsAppIconInline className="h-5 w-5" />
                  Open WhatsApp — {site.phoneRaw}
                </Button>
                <Button
                  href="/creations"
                  variant="outline"
                  className="!border-cream/30 !text-cream hover:!border-cream hover:!text-cream"
                >
                  Browse creations first
                </Button>
              </motion.div>
              <p className="mt-6 text-sm text-cream/50">
                {site.hours} · Closed Mondays · Studio visits by appointment
              </p>
            </motion.div>

            <PhoneMockup />
          </div>
        </div>

        <div className="relative border-t border-cream/10 bg-cocoa/80 backdrop-blur-sm">
          <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-px sm:grid-cols-4">
            {conciergeStats.map((stat) => (
              <motion.div
                key={stat.label}
                className="px-4 py-5 text-center sm:px-6"
                initial={reducedMotion ? false : { opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={defaultTransition}
              >
                <dt className="text-xs font-medium uppercase tracking-wider text-cream/50">
                  {stat.label}
                </dt>
                <dd className="mt-1 font-display text-xl font-semibold text-gold sm:text-2xl">
                  {stat.value}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </section>

      {/* Quick-start paths */}
      <section className="bg-cream py-16 sm:py-24">
        <motion.div
          className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
          variants={staggerContainer}
          initial={reducedMotion ? false : "hidden"}
          whileInView={reducedMotion ? undefined : "visible"}
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp} className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta">
              Start your brief
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-cocoa sm:text-4xl">
              Choose an occasion — we&apos;ll draft your WhatsApp message
            </h2>
            <p className="mt-3 text-cocoa/70 leading-relaxed">
              One tap opens WhatsApp with a structured template. Fill in the blanks,
              add a photo from our gallery, and send.
            </p>
          </motion.div>

          <motion.ul
            className="mt-10 grid gap-4 sm:grid-cols-2"
            variants={staggerContainer}
          >
            {bookingPaths.map((path) => (
              <motion.li key={path.id} variants={fadeUp}>
                <a
                  href={getBookingPathWhatsAppUrl(path.id)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-cocoa/8 bg-gradient-to-br ${path.accent} p-6 transition-all duration-300 hover:-translate-y-1 hover:border-terracotta/30 hover:shadow-lg`}
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/80 text-cocoa shadow-sm ring-1 ring-cocoa/5">
                    <WhatsAppIconInline className="h-5 w-5 text-[#128C7E]" />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-cocoa">
                    {path.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-cocoa/65">
                    {path.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta group-hover:gap-2.5 transition-all">
                    Open pre-filled message
                    <span aria-hidden>→</span>
                  </span>
                </a>
              </motion.li>
            ))}
          </motion.ul>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-center text-sm text-cocoa/55"
          >
            Prefer a blank message?{" "}
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-terracotta hover:underline"
            >
              Start from scratch on WhatsApp
            </a>
          </motion.p>
        </motion.div>
      </section>

      {/* Brief checklist */}
      <section className="relative bg-white py-16 sm:py-24">
        <motion.div
          className="absolute left-0 top-0 h-full w-1/3 bg-sage-light/40"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start"
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={defaultTransition}
          >
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={defaultTransition}
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-sage">
                Your celebration brief
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold text-cocoa">
                Six details Muskan needs to quote accurately
              </h2>
              <p className="mt-4 text-cocoa/70 leading-relaxed">
                Copy this structure into WhatsApp — or use an occasion template above.
                The clearer your brief, the faster you get size, flavour, and price.
              </p>
              <div className="mt-8 rounded-2xl border border-cocoa/8 bg-cream p-5">
                <p className="text-sm font-semibold text-cocoa">Pro tip</p>
                <p className="mt-2 text-sm leading-relaxed text-cocoa/65">
                  Paste a link from{" "}
                  <Link href="/creations" className="font-semibold text-terracotta hover:underline">
                    sweetbites.me/creations
                  </Link>{" "}
                  or attach Pinterest / Instagram screenshots. Eggless, delivery, and rush
                  dates — mention upfront.
                </p>
              </div>
            </motion.div>

            <motion.ol
              className="grid gap-3 sm:grid-cols-2"
              variants={staggerContainer}
              initial={reducedMotion ? false : "hidden"}
              whileInView={reducedMotion ? undefined : "visible"}
              viewport={{ once: true }}
            >
              {briefFields.map((field, i) => (
                <motion.li
                  key={field.key}
                  variants={fadeUp}
                  className="rounded-xl border border-cocoa/6 bg-cream/50 p-4"
                >
                  <span className="font-mono text-xs font-bold text-terracotta/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1 font-display text-lg font-semibold text-cocoa">
                    {field.label}
                  </h3>
                  <p className="mt-1 text-sm text-cocoa/55 italic">
                    e.g. {field.example}
                  </p>
                </motion.li>
              ))}
            </motion.ol>
          </motion.div>
        </div>
      </section>

      {/* Journey */}
      <section className="bg-sage-light py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={reducedMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={defaultTransition}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sage">
              After you message
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-cocoa sm:text-4xl">
              From WhatsApp hello to celebration day
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-cocoa/70">
              Every order stays on one thread — quotes, sketches, payment, and delivery
              updates. No account, no app download.
            </p>
          </motion.div>

          <motion.ol
            className="relative mt-14 grid gap-8 md:grid-cols-4"
            variants={staggerContainer}
            initial={reducedMotion ? false : "hidden"}
            whileInView={reducedMotion ? undefined : "visible"}
            viewport={{ once: true }}
          >
            <div
              className="absolute left-0 right-0 top-5 hidden h-px bg-cocoa/10 md:block"
              aria-hidden
            />
            {orderSteps.map((step, i) => (
              <motion.li key={step.title} variants={fadeUp} className="relative text-center">
                <span className="relative z-10 mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-cocoa text-sm font-bold text-cream shadow-md">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-cocoa">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cocoa/65">
                  {step.description}
                </p>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>

      {/* Menu reference */}
      <section className="bg-cream py-16 sm:py-24">
        <motion.div
          className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={defaultTransition}
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta">
                Reference guide
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold text-cocoa">
                Flavours & starting sizes
              </h2>
              <p className="mt-2 max-w-xl text-sm text-cocoa/65">
                Final price depends on design complexity and delivery. Muskan confirms
                everything on WhatsApp — these are starting points for your brief.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-cocoa/8 bg-white p-6 shadow-sm">
              <h3 className="font-display text-lg font-semibold text-cocoa">
                Signature flavours
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {flavors.map((f) => (
                  <li
                    key={f}
                    className="rounded-lg bg-cream px-3 py-1.5 text-sm font-medium text-cocoa/80"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <motion.div
              className="overflow-hidden rounded-2xl border border-cocoa/8 bg-white shadow-sm"
              whileHover={reducedMotion ? undefined : { y: -2 }}
            >
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-cocoa/8 bg-cocoa/5">
                    <th className="px-5 py-3 font-semibold text-cocoa">Size</th>
                    <th className="px-5 py-3 font-semibold text-cocoa">Serves</th>
                    <th className="px-5 py-3 font-semibold text-cocoa">From</th>
                  </tr>
                </thead>
                <tbody>
                  {sizes.map((s) => (
                    <tr key={s.label} className="border-b border-cocoa/5 last:border-0">
                      <td className="px-5 py-3.5 font-display font-semibold text-terracotta">
                        {s.label}
                      </td>
                      <td className="px-5 py-3.5 text-cocoa/70">{s.serves}</td>
                      <td className="px-5 py-3.5 font-semibold text-cocoa">{s.from}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>

          <div className="mt-8 rounded-2xl border border-sage/15 bg-sage-light/50 p-6">
            <h3 className="font-display text-lg font-semibold text-cocoa">
              Delivery across Goa
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {deliveryAreas.map((area) => (
                <li
                  key={area}
                  className="rounded-full border border-sage/20 bg-white px-3 py-1 text-xs font-medium text-cocoa/75"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-cocoa py-16 sm:py-20">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, #25D366 0%, transparent 40%)`,
          }}
          aria-hidden
        />
        <motion.div
          className="relative mx-auto max-w-3xl px-4 text-center sm:px-6"
          initial={reducedMotion ? false : { opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={defaultTransition}
        >
          <h2 className="font-display text-3xl font-semibold text-cream sm:text-4xl">
            Ready when you are
          </h2>
          <p className="mt-4 text-cream/75 leading-relaxed">
            Save {site.phone} and message Muskan. Share your date, guest count, and a
            reference — she&apos;ll handle the rest on WhatsApp.
          </p>
          <Button
            href={getWhatsAppUrl()}
            variant="whatsapp"
            external
            className="mt-8"
          >
            <WhatsAppIconInline className="h-5 w-5" />
            Message Sweet Bites
          </Button>
        </motion.div>
      </section>
    </>
  );
}
