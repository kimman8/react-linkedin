export default function Hotel() {
  return (
    <main className="max-w-md bg-slate-100 rounded-md mx-auto p-6 shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">Hotel</h1>
      <form action="" className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block font-medium text-gray-700 text-sm"
          >
            Email
          </label>
          <input
            className="border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            type="email"
            name="email"
            required
            id="email"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block font-medium text-gray-700 text-sm"
          >
            Message
          </label>
          <textarea
            className="border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            name="message"
            id="message"
            required
            rows={4}
          ></textarea>
        </div>
        <button
          className="py-4 px-16 bg-green-500 rounded-md text-white"
          type="submit"
        >
          Send
        </button>
      </form>
    </main>
  );
}
