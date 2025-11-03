"use client";

import { useState } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  status: "available" | "sold-out" | "for-rent";
  price?: string;
  mainImage: string;
  detailImages: string[];
  features: string[];
  specs: {
    bedrooms?: number;
    bathrooms?: number;
    area?: string;
    floors?: number;
  };
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "THE PROUD 1",
      category: "บ้านเดี่ยว",
      description: "บ้านเดี่ยวสไตล์โมเดิร์น ออกแบบเพื่อการใช้ชีวิตที่สมบูรณ์แบบ",
      status: "sold-out",
      price: "฿6,500,000",
      mainImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2MjA4ODg1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      detailImages: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2MjA4ODg1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob21lJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYyMDk5MTE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1682888813795-192fca4a10d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwZGVzaWdufGVufDF8fHx8MTc2MjE1MDI5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1682888813795-192fca4a10d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwZGVzaWdufGVufDF8fHx8MTc2MjE1MDI5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ],
      features: ["ที่จอดรถ 2 คัน", "สวนหน้าบ้าน", "ระบบรักษาความปลอดภัย", "เฟอร์นิเจอร์บิ้วอิน"],
      specs: {
        bedrooms: 3,
        bathrooms: 2,
        area: "180 ตร.ม.",
        floors: 2
      }
    },
    {
      id: 2,
      title: "THE PROUD 2",
      category: "พูลวิลล่า",
      description: "พูลวิลล่าหรูหรา พร้อมสระว่ายน้ำส่วนตัว",
      status: "available",
      price: "฿12,800,000",
      mainImage: "https://images.unsplash.com/photo-1612528910408-9c35cf5a6244?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb29sJTIwdmlsbGElMjB0aGFpbGFuZHxlbnwxfHx8fDE3NjIxODgzODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      detailImages: [
        "https://images.unsplash.com/photo-1612528910408-9c35cf5a6244?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb29sJTIwdmlsbGElMjB0aGFpbGFuZHxlbnwxfHx8fDE3NjIxODgzODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1728050829115-490e7a27ad81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMHBvb2x8ZW58MXx8fHwxNzYyMTUxODA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1760072513357-9d450e935a80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwaG9tZSUyMGxpdmluZ3xlbnwxfHx8fDE3NjIxODc0ODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ],
      features: ["สระว่ายน้ำส่วนตัว", "ศาลากลางสวน", "ห้องฟิตเนส", "Smart Home System"],
      specs: {
        bedrooms: 4,
        bathrooms: 3,
        area: "320 ตร.ม.",
        floors: 2
      }
    },
    {
      id: 3,
      title: "THE PROUD 3",
      category: "พูลวิลล่า",
      description: "พูลวิลล่าสไตล์รีสอร์ท ให้เช่ารายวัน/รายเดือน",
      status: "for-rent",
      price: "฿3,500/วัน",
      mainImage: "https://images.unsplash.com/photo-1728050829115-490e7a27ad81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMHBvb2x8ZW58MXx8fHwxNzYyMTUxODA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      detailImages: [
        "https://images.unsplash.com/photo-1728050829115-490e7a27ad81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMHBvb2x8ZW58MXx8fHwxNzYyMTUxODA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1612528910408-9c35cf5a6244?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb29sJTIwdmlsbGElMjB0aGFpbGFuZHxlbnwxfHx8fDE3NjIxODgzODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1758098491492-6501dfb2ae7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYyMTg3NDg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ],
      features: ["สระว่ายน้ำขนาดใหญ่", "BBQ Area", "ที่จอดรถ 3 คัน", "เฟอร์นิเจอร์ครบครัน"],
      specs: {
        bedrooms: 5,
        bathrooms: 4,
        area: "400 ตร.ม.",
        floors: 2
      }
    },
    {
      id: 4,
      title: "THE PROUD 4",
      category: "บ้านเดี่ยว",
      description: "บ้านสไตล์คอนเทมโพรารี่ ออกแบบเพื่อครอบครัวยุคใหม่",
      status: "available",
      price: "฿7,200,000",
      mainImage: "https://images.unsplash.com/photo-1622015663381-d2e05ae91b72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB2aWxsYSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2MjE2NzgyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      detailImages: [
        "https://images.unsplash.com/photo-1622015663381-d2e05ae91b72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB2aWxsYSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2MjE2NzgyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1706808849827-7366c098b317?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBob3VzZSUyMGRlc2lnbnxlbnwxfHx8fDE3NjIwOTgxNjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob21lJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYyMDk5MTE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ],
      features: ["Open Plan Layout", "ห้องทำงาน", "ระเบียงกว้าง", "ครัวเปิด"],
      specs: {
        bedrooms: 3,
        bathrooms: 3,
        area: "220 ตร.ม.",
        floors: 2
      }
    },
    {
      id: 5,
      title: "THE PROUD 5",
      category: "พูลวิลล่า",
      description: "พูลวิลล่าหรูหรา พร้อมวิวสวนส่วนตัว",
      status: "sold-out",
      price: "฿15,500,000",
      mainImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2MjA4ODg1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      detailImages: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2MjA4ODg1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1612528910408-9c35cf5a6244?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb29sJTIwdmlsbGElMjB0aGFpbGFuZHxlbnwxfHx8fDE3NjIxODgzODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1728050829115-490e7a27ad81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMHBvb2x8ZW58MXx8fHwxNzYyMTUxODA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ],
      features: ["สระว่ายน้ำ Infinity", "Master Bedroom ขนาดใหญ่", "ห้องโฮมเธียเตอร์", "Wine Cellar"],
      specs: {
        bedrooms: 5,
        bathrooms: 5,
        area: "450 ตร.ม.",
        floors: 2
      }
    },
    {
      id: 6,
      title: "THE PROUD 6",
      category: "พูลวิลล่า",
      description: "พูลวิลล่าพร้อมเข้าอยู่ ให้เช่ารายเดือน",
      status: "for-rent",
      price: "฿80,000/เดือน",
      mainImage: "https://images.unsplash.com/photo-1612528910408-9c35cf5a6244?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb29sJTIwdmlsbGElMjB0aGFpbGFuZHxlbnwxfHx8fDE3NjIxODgzODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      detailImages: [
        "https://images.unsplash.com/photo-1612528910408-9c35cf5a6244?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb29sJTIwdmlsbGElMjB0aGFpbGFuZHxlbnwxfHx8fDE3NjIxODgzODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1728050829115-490e7a27ad81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMHBvb2x8ZW58MXx8fHwxNzYyMTUxODA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        "https://images.unsplash.com/photo-1622015663381-d2e05ae91b72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB2aWxsYSUyMGV4dGVyaW9yfGVufDF8fHx8MTc2MjE2NzgyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      ],
      features: ["เฟอร์นิเจอร์ครบ", "ใกล้ชายหาด", "ระบบรักษาความปลอดภัย 24 ชม.", "พนักงานดูแลสวน"],
      specs: {
        bedrooms: 4,
        bathrooms: 4,
        area: "350 ตร.ม.",
        floors: 2
      }
    }
  ];

  const getStatusBadge = (status: string) => {
    if (status === "sold-out") {
      return <Badge className="bg-red-500 text-white">ขายหมดแล้ว</Badge>;
    } else if (status === "for-rent") {
      return <Badge className="bg-blue-500 text-white">ให้เช่า</Badge>;
    } else {
      return <Badge className="bg-green-500 text-white">พร้อมขาย</Badge>;
    }
  };

  return (
    <>
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">ผลงานของเรา</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              ชมผลงานโครงการบ้านและพูลวิลล่าคุณภาพ
              ออกแบบอย่างใส่ใจในทุกรายละเอียด
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={project.mainImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-white text-black">
                      {project.category}
                    </Badge>
                    {getStatusBadge(project.status)}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-3">{project.description}</p>
                  <p className="mb-4">{project.price}</p>
                  <Button variant="outline" className="w-full">
                    ดูรายละเอียด
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{selectedProject?.title}</DialogTitle>
            <DialogDescription>
              รายละเอียดโครงการและรูปภาพ
            </DialogDescription>
          </DialogHeader>

          {selectedProject && (
            <div className="space-y-6">
              {/* Image Gallery */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedProject.detailImages.map((image, index) => (
                  <div key={index} className={index === 0 ? "md:col-span-2" : ""}>
                    <ImageWithFallback
                      src={image}
                      alt={`${selectedProject.title} - รูปที่ ${index + 1}`}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>

              {/* Project Info */}
              <div>
                <div className="flex gap-2 mb-4">
                  <Badge className="bg-white text-black border">
                    {selectedProject.category}
                  </Badge>
                  {getStatusBadge(selectedProject.status)}
                </div>
                <p className="text-2xl mb-2">{selectedProject.price}</p>
                <p className="text-gray-600 mb-6">{selectedProject.description}</p>

                {/* Specs */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {selectedProject.specs.bedrooms && (
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <p className="text-gray-600">ห้องนอน</p>
                      <p>{selectedProject.specs.bedrooms} ห้อง</p>
                    </div>
                  )}
                  {selectedProject.specs.bathrooms && (
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <p className="text-gray-600">ห้องน้ำ</p>
                      <p>{selectedProject.specs.bathrooms} ห้อง</p>
                    </div>
                  )}
                  {selectedProject.specs.area && (
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <p className="text-gray-600">พื้นที่ใช้สอย</p>
                      <p>{selectedProject.specs.area}</p>
                    </div>
                  )}
                  {selectedProject.specs.floors && (
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <p className="text-gray-600">จำนวนชั้น</p>
                      <p>{selectedProject.specs.floors} ชั้น</p>
                    </div>
                  )}
                </div>

                {/* Features */}
                <div>
                  <h4 className="mb-3">จุดเด่นของโครงการ</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-black rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
