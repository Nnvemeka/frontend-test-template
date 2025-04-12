// import React, { useState } from "react";
// import { usePathname, useRouter } from "next/navigation";
// import { IoIosArrowDown } from "react-icons/io";

// type SideBar = {
//   title: string;
//   path: string;
//   icon?: any;
//   submenu?: boolean;
//   submenuItems?: SideBar[];
// };

// type Props = {
//   nav: SideBar;
//   children: React.ReactNode;
//   openNav: () => void;
// };

// export default function SideBarNavItem({
//   nav,
//   children,
//   openNav,
//   ...rest
// }: Props) {
//   const [openSubmenu, setOpenSubmenu] = useState(false);
//   const pathname = usePathname();
//   const router = useRouter();

//   const activeColor = "text-teal-400";

//   const isMenuItemActive = (path: string) => pathname === path;

//   const isActive = isMenuItemActive(nav.path);

//   return (
//     <div
//       className={`text-decoration-none focus:outline-none text-gray-300 ${
//         nav.submenu
//           ? " border-1 bg-gray-50 border-gray-200 mx-4 px-2 py-2 rounded-lg"
//           : "py-2"
//       } px-2  mx-2`}
//     >
//       <div
//         className={`group flex  ${
//           nav.submenu ? "justify-between " : ""
//         } items-center rounded-lg gap-3 cursor-pointer
//           ${isActive ? activeColor : "text-gray-600"}
//             ${
//               isActive
//                 ? "border-1 border-[text-teal-400]  p-1 w-full rounded-md "
//                 : ""
//             } pl-2`}
//         {...rest}
//         onClick={() => {
//           if (nav.submenu) {
//             openNav();
//             setOpenSubmenu(!openSubmenu);
//           } else {
//             router.push(nav.path);
//           }
//         }}
//       >
//         {nav?.icon && !nav.submenu && (
//           <nav.icon
//             className={`text-2xl shrink-0 ${
//               isActive ? activeColor : "text-gray-500 "
//             } text-lg group-hover:text-teal-400`}
//           />
//         )}

//         <div
//           className={`font-normal bg-white ${
//             isActive ? activeColor : "text-gray-500"
//           } ${
//             nav.submenu
//               ? "uppercase text-sm "
//               : " text-base group-hover:text-teal-400"
//           } `}
//         >
//           {children}
//         </div>

//         {nav.submenu && (
//           <div className="border-1 border-gray-200 rounded-full p-0.5">
//             <IoIosArrowDown className="text-gray-500" />
//           </div>
//         )}
//       </div>

//       {/* Submenu */}
//       {nav.submenu && openSubmenu && (
//         <div
//           className={` w-full transition-all  ${
//             openSubmenu ? "max-h-screen" : "max-h-0"
//           } overflow-hidden`}
//         >
//           <div className=" flex flex-col justify-center ">
//             {nav.submenuItems?.map((item) => {
//               const isActive = isMenuItemActive(item.path);
//               return (
//                 <div
//                   key={item.path}
//                   className=" flex flex-col  justify-center py-2 cursor-pointer"
//                 >
//                   <div
//                     className={`group flex items-center rounded-lg gap-3
//                ${isActive ? activeColor : "text-gray-600"}
//                  ${
//                    isActive
//                      ? "border-1 border-[text-teal-400] bg-teal-50 px-4 py-2 w-full rounded-md "
//                      : "px-4"
//                  } `}
//                     {...rest}
//                     onClick={() => {
//                       router.push(item.path);
//                     }}
//                   >
//                     {item?.icon && (
//                       <item.icon
//                         className={`text-2xl shrink-0 ${
//                           isActive ? activeColor : "text-gray-500 "
//                         } text-lg group-hover:text-teal-400`}
//                       />
//                     )}

//                     <div
//                       className={`font-normal  ${
//                         isActive ? activeColor : "text-gray-500"
//                       } text-sm group-hover:text-teal-400`}
//                     >
//                       {item.title}
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";

type SideBar = {
  title: string;
  path: string;
  icon?: any;
  submenu?: boolean;
  submenuItems?: SideBar[];
};

type Props = {
  nav: SideBar;
  children: React.ReactNode;
};

export default function SideBarNavItem({ nav, children, ...rest }: Props) {
  const [openSubmenu, setOpenSubmenu] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const activeColor = "text-teal-400";

  const isMenuItemActive = (path: string) => pathname === path;

  const isActive = isMenuItemActive(nav.path);

  return (
    <div
      className={`text-decoration-none focus:outline-none text-gray-300 ${
        nav.submenu
          ? "border-1 bg-gray-50 border-gray-200 mx-4 px-2 py-2 rounded-lg"
          : "py-2"
      } px-2 mx-2`}
    >
      <div
        className={`group flex ${
          nav.submenu ? "justify-between" : ""
        } items-center rounded-lg gap-3 cursor-pointer
          ${isActive ? activeColor : "text-gray-600"} ${
          isActive
            ? "border-1 border-[text-teal-400] p-1 w-full rounded-md"
            : ""
        } pl-2`}
        {...rest}
        onClick={() => {
          if (nav.submenu) {
            setOpenSubmenu(!openSubmenu);
          } else {
            router.push(nav.path);
          }
        }}
      >
        {nav?.icon && !nav.submenu && (
          <nav.icon
            className={`text-2xl shrink-0 ${
              isActive ? activeColor : "text-gray-500"
            } text-lg group-hover:text-teal-400`}
          />
        )}

        <div
          className={`font-normal bg-white ${
            isActive ? activeColor : "text-gray-500"
          } ${
            nav.submenu
              ? "uppercase text-sm"
              : "text-base group-hover:text-teal-400"
          }`}
        >
          {children}
        </div>

        {nav.submenu && <IoIosArrowDown className="text-gray-500" />}
      </div>

      {nav.submenu && openSubmenu && (
        <div
          className={`w-full transition-all ${
            openSubmenu ? "max-h-screen" : "max-h-0"
          } overflow-hidden`}
        >
          <div className="flex flex-col justify-center">
            {nav.submenuItems?.map((item) => {
              const isActive = isMenuItemActive(item.path);
              return (
                <div
                  key={item.path}
                  className="flex flex-col justify-center py-2 cursor-pointer"
                >
                  <div
                    className={`group flex items-center rounded-lg gap-3 ${
                      isActive ? activeColor : "text-gray-600"
                    } ${
                      isActive
                        ? "border-1 border-[text-teal-400] bg-teal-50 px-4 py-2 w-full rounded-md"
                        : "px-4"
                    }`}
                    {...rest}
                    onClick={() => router.push(item.path)}
                  >
                    {item?.icon && (
                      <item.icon
                        className={`text-2xl shrink-0 ${
                          isActive ? activeColor : "text-gray-500"
                        } text-lg group-hover:text-teal-400`}
                      />
                    )}
                    <div
                      className={`font-normal ${
                        isActive ? activeColor : "text-gray-500"
                      } text-sm group-hover:text-teal-400`}
                    >
                      {item.title}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
