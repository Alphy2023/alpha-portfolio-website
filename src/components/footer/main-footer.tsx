export const MainFooter = () => {
    return (
      <div className="w-full py-2 h-auto border-b-[1px] border-b-gray-600">
        <div className="w-full  text-gray-500 text-base items-center
        flex justify-center">
          <span>
            &copy; { new Date().getFullYear() } Alphy Portfolio. All rights reserved.
          </span>
        </div>
      </div>
    );
  };
  
  