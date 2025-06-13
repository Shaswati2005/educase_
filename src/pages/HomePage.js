export default function HomePage() {
  return (
    <div className="min-h-screen min-w-[250px] bg-gray-50 flex lg:pt-[90px] items-start justify-center">
      <div className="w-full max-w-sm bg-grey-800 lg:min-h-[800px] min-h-screen rounded-lg shadow-md overflow-hidden flex flex-col justify-start">

        <div className="px-6 py-4 border-b bg-white border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Account Settings</h2>
        </div>

        <div className="p-6 flex gap-2  items-start">
          <div className="relative mb-4">
            <img
              src="https://randomuser.me/api/portraits/women/75.jpg"
              alt="profile"
              className="w-20 h-20 rounded-full object-cover"
            />
            <div className="absolute bottom-0 right-0 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-200">
              <img
                src="https://www.svgrepo.com/show/33565/camera.svg"
                alt="camera icon"
                className="w-4 h-4"
              />
            </div>
          </div>

          <div className="text-center mb-4">
            <p className="font-semibold text-gray-800 text-lg">Marry Doe</p>
            <p className="text-sm text-gray-600">Marry@Gmail.Com</p>
          </div>
          <div className="h-20"></div> {/* Spacer for bottom gap as in image */}
        </div>

        <div className="text-wrap overflow-x-auto pb-4">
          <p className="text-sm text-gray-600 text-center px-4">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>
      <div className="border-t border-dotted border-gray-400 my-4"></div>
      </div>
    </div>
  );
}