import React, { Fragment, useContext, useState, useEffect } from "react";
import {
  Disclosure,
  Menu,
  MenuButton,
  MenuItem,
  Transition,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, Navigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import apiService from "../../api/apiServices";

const navigation = [
  { name: "Home", href: "/home", current: true },
  { name: "Find Events", href: "/events", current: false },
  { name: "Create Events", href: "/create-event", current: false },
  { name: "Help", href: "#", current: false },
];

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const NavBar = () => {
  const { token, userId, isAuthenticated, logout } = useContext(UserContext);
  const [userProfile, setUserProfile] = useState({});

  const onNavClick = (event) => {};

  useEffect(() => {
    if (isAuthenticated) {
      apiService
        .get(`api/profile/${userId}`)
        .then((response) => {
          setUserProfile(response.data);
        })
        .catch((error) => {
          // Handle error
          console.error("Error fetching user profile:", error);
        });
    }
  }, [isAuthenticated, userId]);

  return (
    <Disclosure as="nav" className="bg-white sticky top-0 w-full z-10">
      {({ open }) => (
        <>
          <div className="px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex mr-5 items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-[#f3f4f6] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  {/* <span className="absolute -inset-0.5" /> */}
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center  sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">Logo</div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-600 hover:bg-[#f3f4f6]",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                        onClick={onNavClick}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              {isAuthenticated ? (
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={userProfile.profilePictureUrl}
                        alt=""
                      />
                    </MenuButton>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <MenuItem>
                        {({ active }) => (
                          <Link
                            to={`/user-profile/${userId}`}
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </Link>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                            onClick={() => logout()}
                          >
                            Sign out
                          </a>
                        )}
                      </MenuItem>
                    </MenuItems>
                  </Transition>
                </Menu>
              ) : (
                <div className="flex gap-3 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <Link to="/user/login" target="_blank">
                    <button
                      type="button"
                      className="relative border-none outline-none rounded-md text-blue-500 py-2 px-3 hover:text-black hover:bg-gray-100  focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      Login
                    </button>
                  </Link>
                  <Link to="/user/signup" target="_blank">
                    <button
                      type="button"
                      className="relative hidden border-none outline-none rounded-md bg-blue-500 text-white py-2 px-3 hover:text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 sm:block"
                    >
                      Sign Up for Free
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden absolute bg-white w-full">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-600 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default NavBar;
