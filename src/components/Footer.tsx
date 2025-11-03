import { Facebook, Instagram, Youtube, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Mail, href: "mailto:info@theproud.com", label: "Email" }
  ];

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl mb-4">THE PROUD</h3>
            <p className="text-gray-400">
              สร้างสรรค์บ้านในฝัน ด้วยการออกแบบที่เหนือระดับ
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">ลิงก์ด่วน</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  หน้าแรก
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  เกี่ยวกับเรา
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  ผลงาน
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  ติดต่อเรา
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="mb-4">ติดตามเรา</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} THE PROUD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
