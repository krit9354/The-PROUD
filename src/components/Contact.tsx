import { Card } from "./ui/card";
import { Mail, Phone, MapPin, Facebook } from "lucide-react";
import { Button } from "./ui/button";

export function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "โทรศัพท์",
      detail: "02-XXX-XXXX",
      link: "tel:02XXXXXXX"
    },
    {
      icon: Mail,
      title: "อีเมล",
      detail: "info@theproud.com",
      link: "mailto:info@theproud.com"
    },
    {
      icon: MapPin,
      title: "ที่อยู่",
      detail: "กรุงเทพมหานคร ประเทศไทย",
      link: "#"
    },
    {
      icon: Facebook,
      title: "Facebook",
      detail: "THE PROUD Official",
      link: "https://www.facebook.com"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">ติดต่อเรา</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            สนใจปรึกษาหรือสอบถามข้อมูลเพิ่มเติม
            ติดต่อเราได้ทุกช่องทาง เรายินดีให้บริการ
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                target={info.icon === Facebook ? "_blank" : undefined}
                rel={info.icon === Facebook ? "noopener noreferrer" : undefined}
                className="flex items-start gap-4 p-6 bg-white rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-full flex-shrink-0">
                  <info.icon className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="mb-1">{info.title}</h4>
                  <p className="text-gray-600">{info.detail}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Call to Action */}
          <Card className="p-8 text-center bg-gradient-to-br from-black to-gray-800 text-white">
            <h3 className="text-2xl mb-4 text-white">พร้อมเริ่มต้นโครงการของคุณแล้วหรือยัง?</h3>
            <p className="mb-6 text-gray-200">
              ติดต่อเราวันนี้เพื่อปรึกษาและรับคำแนะนำฟรี
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-gray-300"
                onClick={() => window.open("https://www.facebook.com", "_blank")}
              >
                <Facebook className="mr-2 h-5 w-5" />
                ติดต่อทาง Facebook
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-white/10 hover:text-white"
                onClick={() => window.location.href = "tel:02XXXXXXX"}
              >
                <Phone className="mr-2 h-5 w-5" />
                โทรเลย
              </Button>
            </div>
          </Card>

          {/* Business Hours */}
          <div className="bg-white p-6 rounded-lg mt-8 text-center">
            <h4 className="mb-4">เวลาทำการ</h4>
            <div className="space-y-2 text-gray-600">
              <p>จันทร์ - ศุกร์: 9:00 - 18:00 น.</p>
              <p>เสาร์ - อาทิตย์: 10:00 - 17:00 น.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
