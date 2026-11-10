"use client";

import { useState } from "react";

const suggestedAmounts = [5000, 10000, 25000, 50000, 100000] as const;

export function DonationForm() {
  const [selected, setSelected] = useState<number | "custom">(10000);
  const [customAmount, setCustomAmount] = useState("");
  const parsedCustom = Number(customAmount);
  const customError =
    selected === "custom" &&
    (customAmount === "" ||
      !Number.isFinite(parsedCustom) ||
      parsedCustom < 1000);

  return (
    <div className="donation-form card" aria-labelledby="donation-form-title">
      <p className="eyebrow">Donation preview</p>
      <h2 id="donation-form-title">Choose an amount</h2>
      <p>
        This interface is ready for review. Payments are not yet enabled and no
        financial details are collected.
      </p>
      <fieldset>
        <legend>Donation amount in Nigerian naira</legend>
        <div className="donation-amounts">
          {suggestedAmounts.map((amount) => (
            <label key={amount}>
              <input
                type="radio"
                name="donationAmount"
                value={amount}
                checked={selected === amount}
                onChange={() => setSelected(amount)}
              />
              <span>₦{amount.toLocaleString("en-NG")}</span>
            </label>
          ))}
          <label>
            <input
              type="radio"
              name="donationAmount"
              value="custom"
              checked={selected === "custom"}
              onChange={() => setSelected("custom")}
            />
            <span>Custom amount</span>
          </label>
        </div>
      </fieldset>
      {selected === "custom" ? (
        <div className="field">
          <label htmlFor="custom-donation">Custom amount (₦)</label>
          <input
            id="custom-donation"
            type="number"
            min="1000"
            step="100"
            inputMode="numeric"
            value={customAmount}
            aria-describedby="custom-donation-help"
            aria-invalid={customError}
            onChange={(event) => setCustomAmount(event.target.value)}
          />
          <p
            id="custom-donation-help"
            className={customError ? "field-error" : "field-help"}
          >
            {customError
              ? "Enter an amount of at least ₦1,000."
              : "Minimum custom amount: ₦1,000."}
          </p>
        </div>
      ) : null}
      <button
        className="button button-primary donation-submit"
        type="button"
        disabled
      >
        Donate securely — coming soon
      </button>
      <p className="donation-status" role="status">
        Online donations are not active yet. No payment will be taken.
      </p>
    </div>
  );
}
