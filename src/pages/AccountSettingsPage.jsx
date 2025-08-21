import { camera, profile } from "../assets/images"
const AccountSettingsPage = ({ onNavigate }) => {
  return (
    <div className="h-full bg-white flex flex-col">
      <h1 className="text-[1.1rem] bg-[#ffffff] w-full h-[3.5rem] flex justify-start items-center p-4 font-medium text-[#1D2226] text-start">
          Account Settings
        </h1>
      <div className="px-4 py-5 flex-1 bg-[#F7F8F9] flex flex-col justify-start">
        
        {/* Profile Section */}
        <div className="flex items-start space-x-3.5 mb-6">
          {/* Profile Picture with Badge */}
          <div className="relative">
            <div className="w-14 h-14 rounded-full overflow-hidden">
              {/* Actual profile image to match screenshot */}
              <img
                src={profile}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Verification Badge */}
            <div className="absolute -bottom-[0.5px] right-1 w-3.5 h-3.5 bg-[#6C25FF] rounded-full flex items-center justify-center">
                <img
                src={camera}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Profile Info */}
          <div className="flex-1">
            <h2 className="text-xs font-bold text-[#1D2226] mb-0.5">
              Marry Doe
            </h2>
            <p className="text-[#1D2226] font-medium text-xs">
              Marry@Gmail.Com
            </p>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-gray-600 font-medium text-xs leading-relaxed">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipng Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
    </div>
  )
}

export default AccountSettingsPage
