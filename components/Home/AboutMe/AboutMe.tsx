"use client";
import {
  Code,
  Palette,
  Rocket,
  Award,
  Coffee,
  Heart,
  Download,
  MapPin,
  Briefcase,
} from "lucide-react";

export default function AboutMe() {
  const stats = [
    { label: "ปีประสบการณ์", value: "3+", icon: Award },
    { label: "โปรเจคสำเร็จ", value: "50+", icon: Rocket },
    { label: "ลูกค้าพึงพอใจ", value: "30+", icon: Heart },
    { label: "ถ้วยกาแฟ", value: "999+", icon: Coffee },
  ];

  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "เขียนโค้ดที่อ่านง่าย บำรุงรักษาได้ และมีประสิทธิภาพ",
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "ออกแบบ UI/UX ที่สวยงาม ใช้งานง่าย และทันสมัย",
    },
    {
      icon: Rocket,
      title: "Fast Performance",
      description: "เว็บไซต์โหลดเร็ว ปรับให้เหมาะกับทุกอุปกรณ์",
    },
  ];

  return (
    <div id="about" className="py-20 bg-[#0a0e1a] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Me
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Frontend Developer
            ที่หลงใหลในการสร้างประสบการณ์ดิจิทัลที่น่าประทับใจ
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Introduction */}
          <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 md:p-10">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Hi! I'm Supreecha 👋
                </h3>
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>กรุงเทพฯ, ไทย</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Award className="w-4 h-4" />
                    <span>3+ ปีประสบการณ์</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                ผมเป็น{" "}
                <span className="text-blue-400 font-semibold">
                  Frontend Developer
                </span>{" "}
                ที่มีความหลงใหลในการสร้างเว็บไซต์และแอปพลิเคชันที่สวยงาม
                ใช้งานง่าย และตอบสนองความต้องการของผู้ใช้อย่างแท้จริง
              </p>
              <p>
                ด้วยประสบการณ์กว่า{" "}
                <span className="text-purple-400 font-semibold">3 ปี</span>{" "}
                ผมมีความเชี่ยวชาญใน <span className="text-cyan-400">React</span>
                , <span className="text-cyan-400">Next.js</span>, และ{" "}
                <span className="text-cyan-400">Tailwind CSS</span>{" "}
                พร้อมทั้งมีความเข้าใจในการออกแบบ UI/UX ที่ดี
                เพื่อสร้างประสบการณ์ที่ดีที่สุดให้กับผู้ใช้งาน
              </p>
              <p>
                ผมเชื่อว่าเว็บไซต์ที่ดีไม่ใช่แค่สวยงาม แต่ต้องใช้งานง่าย
                โหลดเร็ว และสร้างความประทับใจให้กับผู้ใช้ทุกคน 🚀
              </p>
            </div>        
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-xl p-6 text-center hover:border-blue-500/50 hover:bg-slate-900/60 transition-all duration-300 hover:scale-105"
                >
                  <Icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <p className="text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              );
            })}
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-xl p-6 hover:border-purple-500/50 hover:bg-slate-900/60 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h4 className="text-white font-semibold text-lg mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}
