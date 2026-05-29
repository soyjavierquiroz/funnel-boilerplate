import { useEffect, useMemo, useState } from 'react';
import funnelConfig from '../../../../core/config/funnel.config';

interface ExpertEventCountdownProps {
  size?: 'regular' | 'compact';
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

const sizeClasses = {
  regular: {
    shell: 'rounded-[16px] p-3 sm:p-4',
    label: 'text-[0.66rem]',
    grid: 'mt-3 gap-2',
    item: 'rounded-[12px] px-2 py-2.5',
    value: 'text-[1.2rem] sm:text-[1.6rem]',
    unit: 'mt-2 text-[0.56rem]',
  },
  compact: {
    shell: 'rounded-[10px] p-2.5 sm:p-3',
    label: 'text-[0.52rem] sm:text-[0.56rem]',
    grid: 'mt-2 gap-1 sm:gap-1.5',
    item: 'rounded-[8px] px-1 py-1.5 sm:px-1.5',
    value: 'text-[0.84rem] sm:text-[1rem]',
    unit: 'mt-1 text-[0.44rem] sm:text-[0.48rem]',
  },
};

export function ExpertEventCountdown({ size = 'regular', variant = 'light' }: ExpertEventCountdownProps) {
  const { startsAtIso, countdown } = funnelConfig.content.event;
  const [remaining, setRemaining] = useState(() => getRemainingTime(startsAtIso));
  const classes = variantClasses[variant];
  const sizing = sizeClasses[size];

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
    <div className={[sizing.shell, classes.shell].join(' ')}>
      <p className={['expert-event-kicker text-center font-bold uppercase', sizing.label, classes.label].join(' ')}>
        {hasExpired ? countdown.expiredLabel : countdown.label}
      </p>

      <div className={['grid grid-cols-4', sizing.grid].join(' ')} aria-live="polite">
        {items.map((item) => (
          <div key={item.label} className={[sizing.item, 'text-center', classes.item].join(' ')}>
            <div className={['expert-headline leading-none', sizing.value, classes.value].join(' ')}>
              {String(item.value).padStart(2, '0')}
            </div>
            <div className={['expert-event-kicker font-bold uppercase', sizing.unit, classes.unit].join(' ')}>
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpertEventCountdown;
