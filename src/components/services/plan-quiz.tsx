"use client";

import { useState } from "react";
import Link from "next/link";
import { PillGroup } from "@/components/ui/choice";

const QUESTIONS = [
  { key: "shows", legend: "How many shows a year?", options: ["1", "2–6", "7 or more"], def: "2–6" },
  { key: "role", legend: "You are…", options: ["Exhibitor", "Agency or builder", "Organiser"], def: "Exhibitor" },
  { key: "build", legend: "Do you need us to build the booth?", options: ["Yes", "No"], def: "Yes" },
] as const;

type Answers = Record<string, string>;

function recommend(a: Answers) {
  if (a.role === "Organiser")
    return {
      plan: "Enterprise & Organiser",
      why: "A white-label portal so every exhibitor at your show can design with AMAZE.",
    };
  if (a.role === "Agency or builder")
    return {
      plan: "Agency Studio",
      why: "Concepts for every client pitch, shared with your whole team.",
    };
  if (a.shows === "7 or more")
    return {
      plan: "Enterprise & Organiser",
      why: "Unlimited seats and consistent design across many shows.",
    };
  if (a.shows === "1")
    return {
      plan: "Exhibitor Pro (monthly)",
      why: "Subscribe for the months around your show, then pause.",
    };
  return {
    plan: "Exhibitor Pro",
    why: "Enough concepts for every show this year, with costs and venue checks included.",
  };
}

/** Three questions, one recommendation. */
export function PlanQuiz() {
  const [answers, setAnswers] = useState<Answers>(() =>
    Object.fromEntries(QUESTIONS.map((q) => [q.key, q.def])),
  );

  const { plan, why } = recommend(answers);
  const fullWhy =
    answers.build === "Yes" && answers.role === "Exhibitor"
      ? `${why} Add our design + build service for the stand itself.`
      : why;

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-2.5">
          <p className="eyebrow text-brand">Not sure?</p>
          <h2 className="m-0 text-[2rem] leading-tight font-extrabold tracking-tight sm:text-[2.25rem]">
            Find your plan in three taps
          </h2>
        </div>
        {QUESTIONS.map((q) => (
          <PillGroup
            key={q.key}
            legend={q.legend}
            options={q.options}
            value={answers[q.key]}
            onChange={(next) => setAnswers((prev) => ({ ...prev, [q.key]: next }))}
          />
        ))}
      </div>

      <div
        aria-live="polite"
        className="flex flex-col justify-center gap-3.5 rounded-[20px] bg-brand p-8 text-white"
      >
        <p className="eyebrow text-brand-tint">We recommend</p>
        <p className="m-0 text-[2rem] leading-tight font-extrabold">{plan}</p>
        <p className="m-0 text-base leading-relaxed text-brand-tint">{fullWhy}</p>
        <Link href="/contact" className="btn btn-onDark mt-2 self-start">
          Get started
        </Link>
      </div>
    </div>
  );
}
