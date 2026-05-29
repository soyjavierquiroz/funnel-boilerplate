import { useEffect, useMemo, useState } from 'react';
import funnelConfig from '../../../../core/config/funnel.config';

const emptyRemaining = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

function getRemainingTime(targetIso: string) {
  const targetTime = new Date(targetIso).getTime();

  if (!Number.isFinite(targetTime)) {
    return emptyRemaining;
  }

  const distance = Math.max(0, targetTime - Date.now());

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((distance / (1000 * 60)) % 60),
    seconds: Math.floor((distance / 1000) % 60),
  };
}

export function ExpertEventCountdown() {
  const { startsAtIso, countdown } = funnelConfig.content.event;
  const [remaining, setRemaining] = useState(() => getRemainingTime(startsAtIso));

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setRemaining(getRemainingTime(startsAtIso));
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, [startsAtIso]);

  const hasExpired = useMemo(() => {
    return remaining.days + remaining.hours + remaining.minutes + remaining.seconds === 0;
  }, [remaining.days, remaining.hours, remaining.minutes, remaining.seconds]);

  const items = [
    { value: remaining.days, label: countdown.units.days },
    { value: remaining.hours, label: countdown.units.hours },
    { value: remaining.minutes, label: countdown.units.minutes },
    { value: remaining.seconds, label: countdown.units.seconds },
  ];

  return (
    <div className="rounded-[24px] bg-event-surface/95 p-4 shadow-[0_18px_45px_rgb(var(--color-event-navy)/0.08)]">
      <p className="expert-event-kicker text-center text-[0.68rem] font-bold uppercase text-event-navy">
        {hasExpired ? countdown.expiredLabel : countdown.label}
      </p>

      <div className="mt-4 grid grid-cols-4 gap-2" aria-live="polite">
        {items.map((item) => (
          <div key={item.label} className="rounded-[17px] bg-event-soft px-2 py-3 text-center">
            <div className="expert-headline text-[1.7rem] leading-none text-event-ink sm:text-3xl">
              {String(item.value).padStart(2, '0')}
            </div>
            <div className="expert-event-kicker mt-2 text-[0.58rem] font-bold uppercase text-event-muted">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpertEventCountdown;
