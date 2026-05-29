import { useEffect, useMemo, useState } from 'react';
import funnelConfig from '../../../../core/config/funnel.config';

interface ExpertEventCountdownProps {
  variant?: 'light' | 'dark';
}

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

const variantClasses = {
  light: {
    shell: 'bg-event-surface/95 shadow-[0_18px_45px_rgb(var(--color-event-navy)/0.08)]',
    label: 'text-event-navy',
    item: 'bg-event-soft',
    value: 'text-event-navy',
    unit: 'text-event-muted',
  },
  dark: {
    shell: 'border border-text-inverse/20 bg-text-inverse/10 shadow-[0_18px_48px_rgb(var(--color-event-ink)/0.12)] backdrop-blur-md',
    label: 'text-text-inverse/80',
    item: 'bg-text-inverse/10',
    value: 'text-text-inverse',
    unit: 'text-text-inverse/70',
  },
};

export function ExpertEventCountdown({ variant = 'light' }: ExpertEventCountdownProps) {
  const { startsAtIso, countdown } = funnelConfig.content.event;
  const [remaining, setRemaining] = useState(() => getRemainingTime(startsAtIso));
  const classes = variantClasses[variant];

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
    <div className={['rounded-[24px] p-3 sm:p-4', classes.shell].join(' ')}>
      <p className={['expert-event-kicker text-center text-[0.66rem] font-bold uppercase', classes.label].join(' ')}>
        {hasExpired ? countdown.expiredLabel : countdown.label}
      </p>

      <div className="mt-3 grid grid-cols-4 gap-2" aria-live="polite">
        {items.map((item) => (
          <div key={item.label} className={['rounded-[17px] px-2 py-3 text-center', classes.item].join(' ')}>
            <div className={['expert-headline text-[1.5rem] leading-none sm:text-3xl', classes.value].join(' ')}>
              {String(item.value).padStart(2, '0')}
            </div>
            <div className={['expert-event-kicker mt-2 text-[0.56rem] font-bold uppercase', classes.unit].join(' ')}>
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpertEventCountdown;
