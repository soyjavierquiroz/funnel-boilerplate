import { DNA } from '../../../site/current';

export function ExpertOrderForm() {
  return (
    <aside
      id="checkout"
      className="rounded-sm border-[4px] border-text-main bg-surface px-6 py-8 text-center text-text-main shadow-2xl"
    >
      <p className="expert-body text-xs font-semibold uppercase tracking-[0.24em] text-brand-primary">
        {DNA.copy.orderForm.eyebrow}
      </p>
      <h2 className="expert-headline mt-3 text-[1.9rem] font-extrabold text-text-main">
        {DNA.copy.productName}
      </h2>
      <p className="expert-body mt-3 text-sm leading-6 text-text-muted">
        {DNA.copy.orderForm.description}
      </p>
    </aside>
  );
}

export default ExpertOrderForm;
