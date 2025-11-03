import { Home, Lightbulb, Users, Award } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Home,
      title: "การออกแบบที่โดดเด่น",
      description: "ออกแบบบ้านที่ตอบโจทย์ไลฟ์สไตล์ของคุณอย่างลงตัว"
    },
    {
      icon: Lightbulb,
      title: "ไอเดียสร้างสรรค์",
      description: "นำเสนอแนวคิดใหม่ๆ ที่ทันสมัยและเป็นเอกลักษณ์"
    },
    {
      icon: Users,
      title: "ทีมมืออาชีพ",
      description: "ทีมงานที่มีประสบการณ์และใส่ใจในทุกรายละเอียด"
    },
    {
      icon: Award,
      title: "คุณภาพเป็นเลิศ",
      description: "มุ่งมั่นส่งมอบงานที่มีคุณภาพสูงสุดให้กับลูกค้า"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">เกี่ยวกับเรา</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            THE PROUD คือผู้เชี่ยวชาญด้านการออกแบบและสร้างบ้าน
            พร้อมมอบประสบการณ์ที่เหนือความคาดหมายให้กับลูกค้าทุกท่าน
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full mb-4">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
