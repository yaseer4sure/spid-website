# Paystack donation setup

The public donation page currently provides a design-review interface only. It does not initialise Paystack, collect payment details, create transactions, or call a payment endpoint.

## Before enabling payments

1. Obtain organisational approval for donation terms, privacy wording, refund handling, receipts, supported currencies and minimum/maximum amounts.
2. Create the production Paystack account under SPiD's authorised organisational ownership.
3. Add placeholder-only variable names to `.env.example`, then configure real keys in Vercel. A public key may be browser-visible; the secret key must remain server-only.
4. Implement a server Route Handler that validates the amount, creates the transaction with the secret key, and returns only the provider data needed by the browser.
5. Verify Paystack webhook signatures in a server-only endpoint and make processing idempotent.
6. Add accessible success, cancellation and failure states. Never log payment details or full donor personal data.
7. Test in Paystack test mode, obtain security and finance approval, then enable the production action.

The amount options currently live in `apps/web/src/features/donation/DonationForm.tsx`. The disabled action must remain disabled until the server flow and organisational controls above are complete.
