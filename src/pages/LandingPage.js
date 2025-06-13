import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="flex items-end justify-center min-h-screen bg-gray-50">
      <div className="w-[367px] h-[775px] border border-gray-200 bg-gray-50 px-6 pb-12 pt-60">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">Welcome to PopX</h1>
        <p className="text-gray-500 text-sm mb-8">
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit,
        </p>

        <div className="space-y-4">
          <button
            onClick={() => navigate('/signup')}
            className="w-full py-3 rounded-md bg-purple-600 text-white font-semibold"
          >
            Create Account
          </button>

          <button
            onClick={() => navigate('/login')}
            className="w-full py-3 rounded-md bg-purple-200 text-black font-semibold"
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
}
