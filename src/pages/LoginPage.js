import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';

// Zod schema with required validation
const loginSchema = z.object({
  email: z.string({ required_error: "Email is required" })
           .email({ message: "Invalid email address" }),
  password: z.string({ required_error: "Password is required" })
             .min(6, "Password must be at least 6 characters"),
});

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    navigate('/home'); // Navigate only if valid
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-[367px] h-[775px] border border-gray-200 bg-gray-50 px-6 pt-20">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Signin to your PopX account</h1>
        <p className="text-gray-500 text-sm mb-6">
          Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit,
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div>
            <label className="text-sm text-purple-600 font-medium">
              Email Address<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              {...register("email")}
              placeholder="Enter email address"
              className="mt-1 w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-purple-400"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-purple-600 font-medium">
              Password<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              {...register("password")}
              placeholder="Enter password"
              className="mt-1 w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-purple-400"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-md bg-purple-600 text-white font-semibold"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
