"use client";
import { useState } from "react";
import { Menu, X, Home, User, FileText, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    { name: "หน้าหลัก", href: "#home", icon: Home },
    { name: "เกี่ยวกับ", href: "#about", icon: User },
    { name: "ทักษะ", href: "#skills", icon: FileText },
    { name: "ออกจากระบบ", href: "#logout", icon: LogOut, isLogout: true },
  ];

  const handleLogout = () => {
    alert("ออกจากระบบเรียบร้อย !");
    router.push("/login");
  };

  const handleNavClick = (item: any) => {
    if (item.isLogout) {
      handleLogout();
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-xl font-bold text-white">Portfolio</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;

                // ✅ ปุ่ม Logout
                if (item.isLogout) {
                  return (
                    <button
                      key={item.name}
                      onClick={handleLogout}
                      className="px-4 py-2 rounded-lg text-red-400 hover:bg-red-900/30 hover:text-red-300 transition-all duration-200 flex items-center space-x-2 group"
                    >
                      <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span className="font-medium">{item.name}</span>
                    </button>
                  );
                }

                // ✅ ลิงก์ทั่วไป
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="px-4 py-2 rounded-lg text-gray-300 hover:bg-slate-800/50 hover:text-white transition-all duration-200 flex items-center space-x-2 group"
                  >
                    <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">{item.name}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-300 hover:bg-slate-800/50 hover:text-white transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1 bg-slate-900/95 backdrop-blur-md border-t border-slate-800/50">
          {navItems.map((item) => {
            const Icon = item.icon;

            if (item.isLogout) {
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-900/30 hover:text-red-300 transition-all duration-200 w-full text-left"
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </button>
              );
            }

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item)}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-slate-800/50 hover:text-white transition-all duration-200"
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
