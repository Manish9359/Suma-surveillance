import { useState } from "react";
import { Smartphone, Mic, Shield, Sparkles, Zap, Hand, Palette, Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import smartHomeBanner from "@/assets/features/smart-home-banner.png";
import howItWorks from "@/assets/features/how-smart-switches-work.png";
import temperedGlass from "@/assets/features/tempered-glass.png";
import mobileAppControl from "@/assets/features/mobile-app-control.png";
import voiceControl from "@/assets/features/voice-control.png";
import advantagesBanner from "@/assets/features/advantages-banner.png";
import videoThumbnail from "@/assets/features/video-thumbnail.png";

function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="bg-card rounded-2xl overflow-hidden border border-border">
      <div className="p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          How IOTICS Smart Switches Are Made
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Take a behind-the-scenes look at how IOTICS Smart WiFi Touch Switches are crafted 
          with care and precision. From design to the finished product, every switch is 
          engineered in-house using state-of-the-art cloud technology, premium-grade electronics, 
          and elegant tempered glass panels.
        </p>
      </div>
      
      <div className="relative aspect-video max-w-4xl mx-auto px-4 pb-8">
        {isPlaying ? (
          <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full"
              onClick={() => setIsPlaying(false)}
            >
              <X className="h-5 w-5" />
            </Button>
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="How IOTICS Smart Switches Are Made"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <div 
            className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl cursor-pointer group"
            onClick={() => setIsPlaying(true)}
          >
            <img
              src={videoThumbnail}
              alt="How IOTICS Smart Switches Are Made - Video"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
              <div className="bg-primary text-primary-foreground w-20 h-20 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Play className="h-8 w-8 ml-1" fill="currentColor" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <p className="text-white font-medium text-lg">Watch the Manufacturing Process</p>
              <p className="text-white/70 text-sm">See how quality and precision come together</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export function SmartSwitchFeatures() {
  return (
    <div className="space-y-16 py-12">
      {/* Video Section */}
      <VideoSection />

      {/* Smart Home Banner Section */}
      <section className="bg-card rounded-2xl overflow-hidden border border-border">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Smart Home Switches Designed for Indian Homes
            </h2>
            <p className="text-muted-foreground mb-4">
              IOTICS offers a complete range of smart home switches built for modern Indian homes. 
              Our smart switches are designed to replace your traditional switchboards with stylish 
              touch panels that function as an automatic switchboard, bringing comfort, control, 
              and automation, all in one.
            </p>
            <p className="text-muted-foreground">
              Each smart switch comes with a premium glass finish, touch-sensitive controls, and 
              built-in WiFi connectivity. Control your lights, fans, and appliances through the 
              mobile app, IR remote, or voice commands using Alexa or Google Assistant.
            </p>
          </div>
          <div className="relative h-64 md:h-full min-h-[300px]">
            <img
              src={smartHomeBanner}
              alt="Smart Home Switches for Indian Homes"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* How Smart Switches Work */}
      <section className="bg-card rounded-2xl overflow-hidden border border-border">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-64 md:h-full min-h-[300px] order-2 md:order-1">
            <img
              src={howItWorks}
              alt="How Smart Switches Work"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="p-8 md:p-12 order-1 md:order-2">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              How do Smart Switches Work?
            </h2>
            <p className="text-muted-foreground mb-6">
              Smart home switches work by connecting to your home WiFi network and giving you 
              multiple ways to control your electrical devices:
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-lg shrink-0">
                  <Smartphone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Mobile App Control</h4>
                  <p className="text-sm text-muted-foreground">
                    Turn lights and appliances on or off from anywhere. Set schedules and 
                    scenes to automate your daily routine.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-lg shrink-0">
                  <Mic className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Voice Control</h4>
                  <p className="text-sm text-muted-foreground">
                    Works with Amazon Alexa, Google Assistant, and Siri Shortcuts. 
                    Control your home without touching a button.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-lg shrink-0">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">IR Remote Control</h4>
                  <p className="text-sm text-muted-foreground">
                    Even without internet, use the included IR remote to operate 
                    your switches manually.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-lg shrink-0">
                  <Hand className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Touch Panel Operation</h4>
                  <p className="text-sm text-muted-foreground">
                    Smooth, responsive touch technology with scratch-resistant 
                    glass surface for long-lasting performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Row */}
      <section className="grid md:grid-cols-3 gap-6">
        {/* Tempered Glass */}
        <div className="bg-card rounded-2xl overflow-hidden border border-border group hover:shadow-lg transition-shadow">
          <div className="relative h-48 overflow-hidden">
            <img
              src={temperedGlass}
              alt="Tempered Glass Smart Switches"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-bold">Tempered Glass</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              The use of tempered glass offers strength and heat resistance, scratch proofing, 
              damp proofing, and ease of cleaning. Twice as strong as normal glass.
            </p>
          </div>
        </div>

        {/* Mobile App Control */}
        <div className="bg-card rounded-2xl overflow-hidden border border-border group hover:shadow-lg transition-shadow">
          <div className="relative h-48 overflow-hidden">
            <img
              src={mobileAppControl}
              alt="Mobile App Control"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <Smartphone className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-bold">Mobile App Control</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Take control of your home lighting with the user-friendly mobile app. 
              Features include easy pairing, scheduling, LED indicator control, and OTA updates.
            </p>
          </div>
        </div>

        {/* Voice Control */}
        <div className="bg-card rounded-2xl overflow-hidden border border-border group hover:shadow-lg transition-shadow">
          <div className="relative h-48 overflow-hidden">
            <img
              src={voiceControl}
              alt="Voice Control with Alexa"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <Mic className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-bold">Voice Control</h3>
            </div>
            <p className="text-muted-foreground text-sm">
              Control with Amazon Alexa or Google Home. Enjoy voice commands, smart home groups, 
              routines, and effortless hands-free control.
            </p>
          </div>
        </div>
      </section>

      {/* 5 Advantages Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-primary/10 rounded-2xl overflow-hidden border border-border">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              5 Advantages of Opting for Smart Switches
            </h2>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-semibold flex items-center gap-2">
                    <Palette className="h-4 w-4 text-primary" />
                    Aesthetic Appeal
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    With a design that leans towards class and minimalism, these smart switches 
                    serve not just a functional purpose, but also add an elegant touch to your home décor.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-semibold flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    Modern Upgrade
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    A futuristic evolution from traditional mechanical switches, promising 
                    a sleek presence on your walls.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-semibold flex items-center gap-2">
                    <Shield className="h-4 w-4 text-primary" />
                    Durability
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Touch panels constructed from tempered glass are resilient, scratch-resistant, 
                    heat-resistant, damp-proof, and easy to clean.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">
                  4
                </div>
                <div>
                  <h4 className="font-semibold flex items-center gap-2">
                    <Smartphone className="h-4 w-4 text-primary" />
                    Multiple Control Options
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Control through remote, mobile app, or voice commands using Alexa. 
                    This flexibility makes home automation switches versatile and user-friendly.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">
                  5
                </div>
                <div>
                  <h4 className="font-semibold flex items-center gap-2">
                    <Hand className="h-4 w-4 text-primary" />
                    Capacitive Touch Technology
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Smart switches operate with capacitive touch technology, providing 
                    a delightful experience. A light human touch is all it takes.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-64 md:h-full min-h-[400px]">
            <img
              src={advantagesBanner}
              alt="5 Advantages of Smart Switches"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
