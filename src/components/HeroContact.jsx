
function HeroContact() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="px-8 py-6 mt-4 text-left bg-gray-950 shadow-lg">
                <h3 className="text-2xl font-bold text-center">Contact Me</h3>
                <form action="https://formspree.io/f/mpzvbzkl" method="POST">
                    <div className="mt-4">
                        <label htmlFor="name" className="block text-sm font-bold text-gray-700">Name</label>
                        <input type="text" name="name" id="name" placeholder="Name" required
                               className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="email" className="block text-sm font-bold text-gray-700">Email</label>
                        <input type="email" name="email" id="email" placeholder="Email" required
                               className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="message" className="block text-sm font-bold text-gray-700">Message</label>
                        <textarea name="message" id="message" rows="5" placeholder="What can I help you with?" required
                                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"></textarea>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <button type="submit" className="collab-btn text-sm py-2 px-5 bg-gradient-to-r from-green-500 to-sky-500 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-green-500 hover:to-sky-500 transition duration-300 ease-in-out">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default HeroContact;
