import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "GymFit privacy policy and data handling practices.",
};

export default function PrivacyPage() {
    return (
        <div className="space-y-12 pb-16">
            <section className="relative overflow-hidden">
                <div className="hero-glow -top-20 -left-20 opacity-20" />
                <div className="container relative z-10 py-20 max-w-3xl">
                    <h1 className="text-4xl font-black fade-up">Privacy Policy</h1>
                    <div className="mt-8 space-y-6 text-zinc-300 leading-relaxed fade-up-delay-1">
                        <p>At GymFit, we take your privacy seriously. We collect only the personal information necessary to provide our services, including your name, email, phone number, and fitness goals.</p>
                        <h2 className="text-xl font-bold text-zinc-100">What We Collect</h2>
                        <p>We collect contact data provided through our forms for membership, booking, and communication purposes. We do not sell or share your personal information with third parties.</p>
                        <h2 className="text-xl font-bold text-zinc-100">How We Use Your Data</h2>
                        <p>Your data is used solely for managing your membership, scheduling classes, and sending relevant updates about GymFit services and promotions you&apos;ve opted into.</p>
                        <h2 className="text-xl font-bold text-zinc-100">Your Rights</h2>
                        <p>You may request access to, correction of, or deletion of your personal information at any time by contacting us at privacy@gymfit.com.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
