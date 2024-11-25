export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-8 sm:px-20 bg-gray-50">
      <main className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6" data-testid="heading">
          Welcome!
        </h1>

        <form className="flex flex-col gap-6" data-testid="form">
          <label className="flex flex-col" data-testid="name-label">
            <span className="text-sm font-medium text-gray-700">Name</span>
            <input
              type="text"
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              aria-label="Name"
              required
              data-testid="name-input"
            />
          </label>
          <label className="flex flex-col" data-testid="email-label">
            <span className="text-sm font-medium text-gray-700">Email</span>
            <input
              type="email"
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              aria-label="Email"
              required
              data-testid="email-input"
            />
          </label>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all focus:ring-2 focus:ring-blue-500 focus:outline-none"
            data-testid="submit-button"
          >
            Submit
          </button>
        </form>
      </main>
    </div>
  );
}
