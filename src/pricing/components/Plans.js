'use client';
import { loadTossPayments } from '@tosspayments/payment-sdk';
import { useState } from 'react';

export default function Plans({ plans }) {
  const [selected, setSelected] = useState('month');
  const plan = plans.find((plan) => plan.interval === selected);

  const togglePlan = () => {
    const interval = selected === 'month' ? 'year' : 'month';
    setSelected(interval);
  };

  async function onCheckout() {
    const tossPayments = await loadTossPayments(
      process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY
    );

    await tossPayments.requestPayment('카드', {
      amount: plan.price,
      orderId: Math.random().toString(36).slice(2),
      orderName: plan.name,
      successUrl: `${window.location.origin}/success`,
      failUrl: `${window.location.origin}/payments/fail`,
    });
  }

  return (
    <div className="bg-salmon border-right">
      <div className="column-padding centered">
        <div className="callout-wrap">
          <div className="plan">
            <div className="plan-wrap">
              <div className="plan-content">
                <div className="plan-switch">
                  Monthly
                  <label htmlFor="plan" className="switch">
                    <input id="plan" onChange={togglePlan} type="checkbox" />
                    <span className="slider" />
                  </label>
                  Yearly
                </div>
                <h2 className="plan-name">{plan.name}</h2>
                <div>
                  Just $ {plan.price} / {plan.interval}
                </div>
                <div>
                  <button className="large-button">
                    <div className="large-button-text" onClick={onCheckout}>
                      Buy Now
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
