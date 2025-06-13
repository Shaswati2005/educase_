export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-[400px] border border-gray-200 bg-white rounded-md overflow-hidden shadow-sm">
        {/* Header */}
        <div className="border-b border-gray-200 p-4">
          <h2 className="text-lg font-semibold text-gray-900">Account Settings</h2>
        </div>

        {/* Profile Section */}
        <div className="p-4 flex flex-col items-start gap-4">
          <div className="flex items-center gap-4">
            {/* Profile image with camera icon */}
            <div className="relative">
              <img
                src="https://randomuser.me/api/portraits/women/75.jpg"
                alt="profile"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="absolute bottom-0 right-0 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-md">
                <img
                  src="https://www.svgrepo.com/show/33565/camera.svg"
                  alt="camera icon"
                  className="w-3 h-3"
                />
              </div>
            </div>
            {/* Name and Email */}
            <div>
              <p className="font-semibold text-gray-800">Marry Doe</p>
              <p className="text-sm text-gray-600">Marry@Gmail.Com</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
            Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>
      </div>
    </div>
  );
}
