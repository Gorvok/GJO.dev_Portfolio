function HeroContact() {
    return (
        <section
            id="contact"
            aria-labelledby="contact-title"
            className="flex items-center justify-center min-h-screen px-4"
        >
            <div className="w-full max-w-lg rounded-xl bg-gray-950 p-6 shadow-lg ring-1 ring-white/10">
                <h2
                    id="contact-title"
                    className="text-3xl font-semibold text-center text-white"
                >
                    Contact Me
                </h2>

                <form
                    action="https://formspree.io/f/mpzvbzkl"
                    method="POST"
                    className="mt-6 space-y-4"
                >
                    {/* Subject for Formspree inbox */}
                    <input type="hidden" name="_subject" value="New message from gjo.dev" />

                    {/* Honeypot anti-spam (hidden from users and screen readers) */}
                    <div className="hidden" aria-hidden="true">
                        <label>
                            Do not fill this out if you are human:
                            <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
                        </label>
                    </div>

                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-white"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Your name"
                            required
                            autoComplete="name"
                            className="mt-2 w-full rounded-md border border-white/10 bg-gray-900 px-4 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-white"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="you@example.com"
                            required
                            autoComplete="email"
                            className="mt-2 w-full rounded-md border border-white/10 bg-gray-900 px-4 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium text-white"
                        >
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            rows={5}
                            placeholder="What can I help you with?"
                            required
                            className="mt-2 w-full rounded-md border border-white/10 bg-gray-900 px-4 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                        <button
                            type="submit"
                            className="collab-btn text-sm py-2 px-5 bg-gradient-to-r from-green-500 to-sky-500 rounded-lg shadow-md transition duration-300 ease-in-out hover:from-green-500 hover:to-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                        >
                            Send Message
                        </button>
                        <p className="text-xs text-white/50">
                            I’ll reply within 1–2 business days.
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default HeroContact;
