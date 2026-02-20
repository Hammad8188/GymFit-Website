import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms & Conditions",
    description: "GymFit membership terms, billing, and facility rules.",
};

export default function TermsPage() {
    return (
        <div className="space-y-12 pb-16">
            <section className="relative overflow-hidden">
                <div className="hero-glow -top-20 -right-40 opacity-20" />
                <div className="container relative z-10 py-20 max-w-3xl">
                    <h1 className="text-4xl font-black fade-up">Terms & Conditions</h1>
                    <div className="mt-8 space-y-6 text-zinc-300 leading-relaxed fade-up-delay-1">
                        <h2 className="text-xl font-bold text-zinc-100">Membership Agreement</h2>
                        <p>By signing up for a GymFit membership, you agree to the billing terms associated with your chosen plan. Memberships are billed monthly on the date of enrollment.</p>
                        <h2 className="text-xl font-bold text-zinc-100">Cancellation Policy</h2>
                        <p>Members may cancel at any time with 14 days&apos; written notice before the next billing cycle. No refunds are provided for the current billing period.</p>
                        <h2 className="text-xl font-bold text-zinc-100">Facility Rules</h2>
                        <p>All members are expected to maintain a respectful environment. Please re-rack weights, wipe down equipment after use, and follow trainer instructions during classes.</p>
                        <h2 className="text-xl font-bold text-zinc-100">Liability</h2>
                        <p>GymFit is not responsible for injuries incurred during workouts. All members must sign a waiver before using the facility.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
