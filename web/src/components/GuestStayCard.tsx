import type { GuestPreferenceAnswers } from '../lib/api';
import { buildStayCard } from '../lib/survey-stay-card';

export function GuestStayCard({
  guestName,
  propertyName,
  checkIn,
  checkOut,
  confirmationCode,
  propertyId,
  variant,
  answers,
}: {
  guestName: string;
  propertyName: string;
  checkIn: string;
  checkOut: string;
  confirmationCode?: string;
  propertyId?: string;
  variant?: string;
  answers: GuestPreferenceAnswers;
}) {
  const card = buildStayCard({
    guestName,
    propertyName,
    checkIn,
    checkOut,
    confirmationCode,
    propertyId,
    variant,
    answers,
  });

  if (card.sections.length === 0) {
    return <p className="text-slate-500 text-sm">Survey submitted, but no answers to show yet.</p>;
  }

  return (
    <div className="space-y-4" data-bot="stay-card">
      <div>
        <p className="text-white font-black">{card.title}</p>
        <p className="text-xs uppercase tracking-widest text-slate-500 mt-1">{card.subtitle}</p>
      </div>
      {card.sections.map((section) => (
        <section
          key={section.id}
          className={`rounded-2xl p-4 ${
            section.tone === 'alert'
              ? 'bg-red-950/40 border border-red-800/50'
              : section.tone === 'ops'
                ? 'bg-cyan-950/30 border border-cyan-800/40'
                : 'bg-slate-950 border border-slate-800'
          }`}
        >
          <h3
            className={`text-[10px] font-black uppercase tracking-widest ${
              section.tone === 'alert' ? 'text-red-300' : 'text-cyan-300'
            }`}
          >
            {section.title}
          </h3>
          <ul className="mt-2 space-y-1 text-sm text-slate-200">
            {section.lines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
