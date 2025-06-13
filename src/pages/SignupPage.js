import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Navigate, useNavigate } from 'react-router-dom';

const signupSchema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  phone: z.string().min(10, "Phone number is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  company: z.string().optional(),
  isAgency: z.enum(["Yes", "No"], {
    required_error: "Please select if you are an agency",
  }),
});

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data) => {
    console.log("Signup Data:", data);
  };

   const navigate = useNavigate();
 
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-[367px] h-auto border border-gray-200 bg-gray-50 px-6 pt-12 pb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Create your PopX account</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="text-sm text-purple-600 font-medium">Full Name*</label>
            <input
              {...register("fullName")}
              placeholder="Full Name"
              className="mt-1 w-full px-3 py-2 border rounded-md"
            />
            {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName.message}</p>}
          </div>

          <div>
            <label className="text-sm text-purple-600 font-medium">Phone number*</label>
            <input
              {...register("phone")}
              placeholder="Phone number"
              className="mt-1 w-full px-3 py-2 border rounded-md"
            />
            {errors.phone && <p className="text-red-500 text-xs">{errors.phone.message}</p>}
          </div>

          <div>
            <label className="text-sm text-purple-600 font-medium">Email address*</label>
            <input
              {...register("email")}
              placeholder="Email"
              className="mt-1 w-full px-3 py-2 border rounded-md"
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
          </div>

          <div>
            <label className="text-sm text-purple-600 font-medium">Password *</label>
            <input
              type="password"
              {...register("password")}
              placeholder="Password"
              className="mt-1 w-full px-3 py-2 border rounded-md"
            />
            {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
          </div>

          <div>
            <label className="text-sm text-purple-600 font-medium">Company name</label>
            <input
              {...register("company")}
              placeholder="Company name"
              className="mt-1 w-full px-3 py-2 border rounded-md"
            />
          </div>

          <div>
            <p className="text-sm font-medium text-gray-700 mb-1">Are you an Agency?*</p>
            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="Yes"
                  {...register("isAgency")}
                  className="text-purple-600 focus:ring-purple-500"
                />
                Yes
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="No"
                  {...register("isAgency")}
                  className="text-purple-600 focus:ring-purple-500"
                />
                No
              </label>
            </div>
            {errors.isAgency && <p className="text-red-500 text-xs mt-1">{errors.isAgency.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-md bg-purple-600 text-white font-semibold mt-4"
            onClick={()=> navigate('/home')}
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
