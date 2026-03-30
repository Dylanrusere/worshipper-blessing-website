"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageHero } from "@/components/page-hero"
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react"
import { fadeUp, cardElevation, staggerContainer, viewportSettings, lineExpand } from "@/lib/animations"

const upcomingEvents = [
  {
    id: 1,
    title: "Kingdom Worship Night",
    date: "April 15, 2026",
    time: "6:00 PM",
    location: "ZAOGA Assembly, Harare",
    description: "A powerful evening of worship, prayer, and prophetic ministry. Come expecting an encounter with God.",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2940&auto=format&fit=crop",
    featured: true,
  },
  {
    id: 2,
    title: "Healing & Deliverance Service",
    date: "April 22, 2026",
    time: "10:00 AM",
    location: "Faith Arena, Bulawayo",
    description: "A special service focused on divine healing and deliverance through worship.",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=2940&auto=format&fit=crop",
    featured: false,
  },
  {
    id: 3,
    title: "Worship Conference 2026",
    date: "May 10-12, 2026",
    time: "All Day",
    location: "Celebration Centre, Victoria Falls",
    description: "Three days of intensive worship training, impartation, and prophetic ministry.",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2940&auto=format&fit=crop",
    featured: false,
  },
]

const pastEvents = [
  {
    id: 1,
    title: "New Year Worship Night",
    date: "January 1, 2026",
    location: "ZAOGA Assembly, Harare",
    attendees: "2,500+",
  },
  {
    id: 2,
    title: "Easter Celebration Service",
    date: "March 31, 2024",
    location: "National Sports Stadium",
    attendees: "15,000+",
  },
  {
    id: 3,
    title: "Muri Mutsvene Album Launch",
    date: "November 15, 2023",
    location: "Harare International Conference Centre",
    attendees: "3,000+",
  },
  {
    id: 4,
    title: "South Africa Worship Tour",
    date: "October 2023",
    location: "Multiple Venues, South Africa",
    attendees: "10,000+",
  },
]

export default function EventsPage() {
  return (
    <>
      <Navigation />
      <main>
        <PageHero
          title="Events"
          subtitle="Upcoming worship gatherings and ministry events"
          backgroundImage="https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=2940&auto=format&fit=crop"
        />

        {/* Upcoming Events */}
        <section className="py-24 md:py-32 bg-charcoal">
          <div className="container mx-auto px-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="text-center mb-16"
            >
              <motion.p
                variants={fadeUp}
                className="text-gold/80 text-sm tracking-[0.3em] uppercase mb-4"
              >
                Mark Your Calendar
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="font-serif text-3xl md:text-4xl lg:text-5xl text-ivory mb-6"
              >
                Upcoming Worship Gatherings
              </motion.h2>
              <motion.div
                variants={fadeUp}
                className="h-px w-24 bg-gold/50 mx-auto"
              />
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="space-y-8"
            >
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  variants={cardElevation}
                  className={`group overflow-hidden ${
                    event.featured ? "bg-secondary/50" : "bg-secondary/30"
                  } border border-border/30 hover:border-gold/30 transition-all duration-500`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                    {/* Image */}
                    <div className="relative aspect-[16/9] lg:aspect-auto overflow-hidden">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-charcoal/50 lg:bg-gradient-to-r lg:from-transparent lg:to-charcoal" />
                      
                      {event.featured && (
                        <div className="absolute top-4 left-4 px-3 py-1 bg-gold text-charcoal text-xs tracking-wider uppercase">
                          Featured Event
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-2 p-8 md:p-10 flex flex-col justify-center">
                      <div className="flex flex-wrap gap-4 mb-4 text-sm">
                        <span className="flex items-center gap-2 text-gold">
                          <Calendar size={16} />
                          {event.date}
                        </span>
                        <span className="flex items-center gap-2 text-ivory/60">
                          <Clock size={16} />
                          {event.time}
                        </span>
                        <span className="flex items-center gap-2 text-ivory/60">
                          <MapPin size={16} />
                          {event.location}
                        </span>
                      </div>

                      <h3 className="font-serif text-2xl md:text-3xl text-ivory mb-4 group-hover:text-gold transition-colors duration-300">
                        {event.title}
                      </h3>

                      <p className="text-ivory/60 leading-relaxed mb-6 max-w-2xl">
                        {event.description}
                      </p>

                      <div>
                        <button className="inline-flex items-center gap-2 text-gold hover:text-ivory transition-colors duration-300 group/btn">
                          <span className="tracking-wide">Learn More</span>
                          <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Past Events */}
        <section className="py-24 md:py-32 bg-secondary/30">
          <div className="container mx-auto px-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="text-center mb-16"
            >
              <motion.p
                variants={fadeUp}
                className="text-gold/80 text-sm tracking-[0.3em] uppercase mb-4"
              >
                Ministry Archive
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="font-serif text-3xl md:text-4xl lg:text-5xl text-ivory mb-6"
              >
                Past Events
              </motion.h2>
              <motion.div
                variants={fadeUp}
                className="h-px w-24 bg-gold/50 mx-auto"
              />
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {pastEvents.map((event) => (
                <motion.div
                  key={event.id}
                  variants={cardElevation}
                  className="group p-6 md:p-8 bg-charcoal border border-border/30 hover:border-gold/30 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-gold text-sm mb-2">{event.date}</p>
                      <h3 className="font-serif text-xl text-ivory group-hover:text-gold transition-colors duration-300">
                        {event.title}
                      </h3>
                    </div>
                    <div className="text-right">
                      <p className="text-ivory/40 text-sm">Attendance</p>
                      <p className="text-gold font-serif text-lg">{event.attendees}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-ivory/50 text-sm">
                    <MapPin size={14} />
                    {event.location}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32 bg-charcoal relative overflow-hidden">
          <div 
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              background: "radial-gradient(circle at center, rgba(212, 175, 55, 0.3) 0%, transparent 60%)",
            }}
          />
          <div className="container mx-auto px-6 relative">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportSettings}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.div
                variants={lineExpand}
                className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent mb-12"
              />
              <motion.h2
                variants={fadeUp}
                className="font-serif text-2xl md:text-3xl lg:text-4xl text-ivory mb-6"
              >
                Want to Host a Worship Event?
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-ivory/60 leading-relaxed mb-8"
              >
                We welcome invitations for worship events, conferences, and ministry services. 
                Reach out to discuss how we can partner together to bring Kingdom worship to your community.
              </motion.p>
              <motion.a
                variants={fadeUp}
                href="/connect"
                className="inline-flex items-center gap-3 bg-gold/10 border border-gold/30 hover:bg-gold/20 hover:border-gold/50 text-gold px-8 py-4 rounded-sm transition-all duration-300"
              >
                <span className="tracking-wide">Get in Touch</span>
                <ArrowRight size={18} />
              </motion.a>
              <motion.div
                variants={lineExpand}
                className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent mt-12"
              />
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
