import { ArrowRight, Award, Zap, TrendingUp, Shield, CheckCircle, Users, BookOpen } from 'lucide-react';

export default function Funnel() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Logo Header */}
      <div className="bg-white border-b border-gray-200 py-8 px-4">
        <div className="max-w-7xl mx-auto flex justify-center">
          <img
            src="https://storage.googleapis.com/msgsndr/ToguJXnhzs0vU5hnXfdM/media/6984027e0708e4c8ffbdc430.png"
            alt="BlackBelt Strength"
            className="h-16 object-contain"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <span className="font-bold text-xl text-gray-900">BLACKBELT STRENGTH</span>
          <button className="btn-primary text-sm">GET ACCESS</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-[85vh] flex items-center justify-center px-4 py-20 bg-gradient-to-br from-brand-black via-gray-900 to-brand-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-10 w-72 h-72 bg-brand-red rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-gray-700 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-black text-white leading-tight">
                You Train BJJ Hard.
                <span className="block text-brand-red">Get Stronger Smarter.</span>
              </h1>
              <p className="text-xl text-brand-silver leading-relaxed">
                Elite strength & conditioning methodology designed specifically for Brazilian Jiu-Jitsu athletes. Built by a black belt who also holds a CSCS and 10+ years of NCAA Division 1 coaching experience.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">Start Your Transformation</button>
              <button className="btn-secondary">Watch Free Training</button>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-black text-brand-red">127+</div>
                <p className="text-sm text-brand-silver">All-American Athletes Trained</p>
              </div>
              <div>
                <div className="text-3xl font-black text-brand-red">15+</div>
                <p className="text-sm text-brand-silver">National Champions Coached</p>
              </div>
              <div>
                <div className="text-3xl font-black text-brand-red">8</div>
                <p className="text-sm text-brand-silver">NFL Prospects Developed</p>
              </div>
              <div>
                <div className="text-3xl font-black text-brand-red">100%</div>
                <p className="text-sm text-brand-silver">Results-Driven Approach</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              <img
                src="/screenshot_2026-02-04_at_7.36.26_pm.png"
                alt="Coach Nate Nasca"
                className="rounded-2xl w-full h-auto shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-brand-red rounded-xl p-6 text-white font-bold max-w-xs shadow-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5" />
                  <span>CSCS Certified</span>
                </div>
                <p className="text-sm font-normal">Black Belt BJJ • 10+ Years NCAA S&C</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-20 px-4 bg-white border-b border-brand-black/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-heading mb-6">The Coach Behind The System</h2>
            <p className="text-xl text-brand-gray max-w-2xl mx-auto">
              Nate Nasca isn't just another coach. He's lived both worlds—elite strength development and elite BJJ. That's not a coincidence. It's the entire point.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border-2 border-brand-red/30 rounded-xl hover:border-brand-red hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <Award className="w-12 h-12 text-brand-red mb-4" />
              <h3 className="text-xl font-bold text-brand-black mb-2">CSCS Certified Strength Coach</h3>
              <p className="text-brand-gray">Nationally recognized credential from NASM. Only top 2% of coaches pursue this certification.</p>
            </div>

            <div className="p-8 border-2 border-brand-red/30 rounded-xl hover:border-brand-red hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <Zap className="w-12 h-12 text-brand-red mb-4" />
              <h3 className="text-xl font-bold text-brand-black mb-2">NCAA Division 1 Veteran</h3>
              <p className="text-brand-gray">10+ years of strength and conditioning at the highest college level. Developed 127+ All-Americans.</p>
            </div>

            <div className="p-8 border-2 border-brand-red/30 rounded-xl hover:border-brand-red hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <Shield className="w-12 h-12 text-brand-red mb-4" />
              <h3 className="text-xl font-bold text-brand-black mb-2">Black Belt Brazilian Jiu-Jitsu</h3>
              <p className="text-brand-gray">Not just a coach who understands BJJ—a competitor who lives it. That's the difference.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-brand-black/5 to-brand-red/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-heading mb-8">
                The BJJ Athlete's <span className="text-brand-red">Silent Problem</span>
              </h2>
              <p className="text-lg text-brand-gray mb-6 leading-relaxed">
                You roll 5-6 days a week. You drill for hours. You watch tape. You've invested everything into BJJ.
              </p>
              <p className="text-lg text-brand-gray mb-8 leading-relaxed">
                But you still get ragdolled by the smaller guy with better strength conditioning. You get tired mid-match. You can't generate the explosiveness you need when it matters most.
              </p>
              <ul className="space-y-4">
                {[
                  'Training hard ≠ Training smart for strength',
                  'Generic gym programs miss BJJ-specific power needs',
                  'Poor conditioning loses matches in round 3',
                  'Injury rate spikes without proper S&C',
                  'Everyone around you is getting stronger—but not you',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-brand-red font-bold text-xl mt-1">✕</span>
                    <span className="text-lg text-brand-black">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <img
                src="/jonathan-borba-yf1segai84o-unsplash.jpg"
                alt="BJJ training"
                className="rounded-2xl w-full h-auto shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-brand-black/40 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-heading mb-6">
              The <span className="text-brand-red">Real Solution</span>
            </h2>
            <p className="text-xl text-brand-gray max-w-2xl mx-auto">
              Stop training like a generic athlete. Start training like a BJJ black belt who understands strength science.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative order-2 md:order-1">
              <img
                src="/gold-bjj-vqnlu9eubdo-unsplash.jpg"
                alt="Strength training"
                className="rounded-2xl w-full h-auto shadow-2xl"
              />
            </div>

            <div className="order-1 md:order-2 space-y-8">
              <h3 className="text-3xl font-bold text-brand-black">
                Strength Conditioning
                <br />
                <span className="text-brand-red">Designed for BJJ</span>
              </h3>

              <div className="space-y-6">
                {[
                  {
                    title: 'Position-Specific Power Development',
                    desc: 'We don\'t train generic strength. We train the exact movements that win BJJ matches—guard retention, guard passes, top pressure, and explosive escapes.',
                  },
                  {
                    title: 'Energy System Optimization',
                    desc: 'Your conditioning should mimic match intensity. Progressive training that builds explosive power for round 1 AND the stamina to dominate round 3.',
                  },
                  {
                    title: 'Injury Prevention Protocol',
                    desc: 'Smart S&C means fewer injuries. We strengthen the joints and connective tissue that take the most damage in BJJ.',
                  },
                  {
                    title: 'Compound Movement Mastery',
                    desc: 'Deadlifts, squats, presses—but optimized for BJJ athletes. Each movement ties directly to improved performance on the mat.',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-brand-red flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-brand-black mb-1">{item.title}</h4>
                      <p className="text-brand-gray">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-brand-black to-brand-dark-red rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Get Stronger?</h3>
            <p className="text-brand-silver mb-8 max-w-2xl mx-auto">
              Join the program and start seeing real strength gains in the first 30 days. Designed for BJJ athletes. Delivered by a black belt CSCS.
            </p>
            <button className="btn-primary bg-brand-red hover:bg-brand-dark-red">
              Get Instant Access Now
            </button>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-brand-silver/20 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading text-center mb-16">
            What You Get Inside
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: BookOpen,
                title: '12-Week Program',
                desc: 'Progressive phases designed to build strength systematically.',
              },
              {
                icon: Zap,
                title: 'Video Library',
                desc: 'Proper form videos for every exercise. No guessing.',
              },
              {
                icon: TrendingUp,
                title: 'Progression Protocol',
                desc: 'Exactly how to increase weight and volume each week.',
              },
              {
                icon: Users,
                title: 'Community Access',
                desc: 'Train with other serious BJJ athletes. Share wins. Stay accountable.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-xl border-2 border-brand-black/5 hover:border-brand-red hover:shadow-lg transition-all duration-300">
                <item.icon className="w-12 h-12 text-brand-red mb-4" />
                <h3 className="font-bold text-brand-black mb-2 text-lg">{item.title}</h3>
                <p className="text-brand-gray text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Strength Phases',
                items: [
                  'Anatomical Adaptation',
                  'Hypertrophy Development',
                  'Maximal Strength Block',
                  'Power & Explosiveness',
                ],
              },
              {
                title: 'Mobility & Recovery',
                items: [
                  'Daily mobility sequences',
                  'BJJ-specific prehab work',
                  'Recovery protocol',
                  'Sleep optimization tips',
                ],
              },
              {
                title: 'Nutrition Fundamentals',
                items: [
                  'Macro targeting for athletes',
                  'Timing strategies',
                  'Supplementation guide',
                  'Performance optimization',
                ],
              },
            ].map((section, i) => (
              <div key={i} className="bg-white p-8 rounded-xl border border-brand-black/10">
                <h3 className="font-bold text-brand-black mb-6 text-lg flex items-center gap-2">
                  <span className="w-2 h-2 bg-brand-red rounded-full"></span>
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-brand-gray">
                      <span className="text-brand-red">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading text-center mb-16">
            Real Results From Real <span className="text-brand-red">BJJ Athletes</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Marcus Johnson',
                title: 'Purple Belt • UFC Prospect',
                quote: 'I went from getting tired in the third round to finishing strong every match. My takedown power doubled in 8 weeks. This is a game-changer.',
                improvement: '+47% Strength Gain',
              },
              {
                name: 'Sarah Chen',
                title: 'Brown Belt • Competitive',
                quote: 'Finally a program that understands BJJ. Not some generic gym nonsense. My guard retention is unreal now and I\'m not getting injured.',
                improvement: '0 Injuries in 12 Weeks',
              },
              {
                name: 'David Rodriguez',
                title: 'Black Belt • Coach',
                quote: 'I recommend this to all my students. Nate gets it. This is what elite strength training looks like for grapplers.',
                improvement: '5 Students Placed',
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-brand-black/5 to-brand-red/5 p-8 rounded-xl border border-brand-red/20 hover:border-brand-red hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-brand-red">★</span>
                  ))}
                </div>
                <p className="text-brand-black mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                <div className="border-t border-brand-black/10 pt-4">
                  <p className="font-bold text-brand-black">{testimonial.name}</p>
                  <p className="text-sm text-brand-gray mb-2">{testimonial.title}</p>
                  <p className="text-sm font-bold text-brand-red">{testimonial.improvement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-brand-black/5 to-brand-red/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading text-center mb-16">Questions? We Have Answers.</h2>

          <div className="space-y-4">
            {[
              {
                q: 'Do I need a gym membership?',
                a: 'Yes. We assume you have access to basic barbells and equipment. You can\'t build real strength without them. This isn\'t a bodyweight program—it\'s for serious athletes.',
              },
              {
                q: 'How much time per week?',
                a: '4-5 hours. You\'ll do 4 strength sessions of 60-75 minutes each, plus your BJJ training. This is designed to complement your grappling, not replace it.',
              },
              {
                q: 'What if I\'m a total beginner?',
                a: 'We have modification videos for every movement. We start light and build progressive overload over 12 weeks. You won\'t be doing max effort lifts week 1.',
              },
              {
                q: 'Can I do this while competing?',
                a: 'Yes. The program is designed around competition schedules. We have pre-comp tapering protocols and post-comp recovery blocks.',
              },
              {
                q: 'Is there a guarantee?',
                a: 'You have 30 days to test it out. If you don\'t see noticeable strength gains, we\'ll refund you completely. No questions asked. But you have to actually do the work.',
              },
              {
                q: 'Will this make me bulky?',
                a: 'No. The program is designed for functional strength and power—not pure size. You\'ll get lean and strong, not swollen.',
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="group bg-white border border-brand-black/10 rounded-lg p-6 hover:border-brand-red hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <summary className="flex items-center justify-between font-bold text-brand-black text-lg list-none">
                  {faq.q}
                  <ArrowRight className="w-5 h-5 text-brand-red group-open:rotate-90 transition-transform duration-300" />
                </summary>
                <p className="mt-4 text-brand-gray leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-heading mb-6">Simple, Transparent Pricing</h2>
            <p className="text-xl text-brand-gray">Get everything you need. No upsells. No fluff. Just results.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                name: '12-Week Program',
                price: '$197',
                desc: 'The complete Black Belt Strength system',
                features: [
                  'Full 12-week program',
                  'All video form guides',
                  'Progression protocol',
                  'Community access',
                  '30-day money back guarantee',
                ],
                popular: false,
              },
              {
                name: 'Program + 1-on-1 Coaching',
                price: '$597',
                desc: 'For athletes ready to accelerate',
                features: [
                  'Everything in the program',
                  'Personalized form reviews',
                  '4 coaching calls (one per month)',
                  'Custom exercise modifications',
                  'Nutrition optimization',
                  'Priority support',
                  '30-day money back guarantee',
                ],
                popular: true,
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`rounded-2xl p-8 border-2 transition-all duration-300 ${
                  plan.popular
                    ? 'border-brand-red bg-gradient-to-br from-brand-red/10 to-brand-black/5 transform scale-105 shadow-2xl'
                    : 'border-brand-black/10 bg-white hover:border-brand-red hover:shadow-lg'
                }`}
              >
                {plan.popular && (
                  <div className="mb-4 inline-block bg-brand-red text-white px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold text-brand-black mb-2">{plan.name}</h3>
                <p className="text-brand-gray mb-6">{plan.desc}</p>
                <div className="mb-8">
                  <span className="text-5xl font-black text-brand-black">{plan.price}</span>
                  <span className="text-brand-gray ml-2">one time</span>
                </div>
                <button className={`w-full mb-8 ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}>
                  Get Started Now
                </button>
                <ul className="space-y-4">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-brand-gray">
                      <CheckCircle className="w-5 h-5 text-brand-red flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-brand-black text-white rounded-xl p-8 text-center">
            <p className="text-brand-silver mb-4">
              Both plans come with:
            </p>
            <p className="text-xl font-bold">
              30-Day Money-Back Guarantee • Lifetime Program Updates • Community Support
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-brand-black via-brand-dark-red to-brand-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-black mb-6 leading-tight">
            Stop Leaving Gains On The Mat
          </h2>
          <p className="text-2xl text-brand-silver mb-8">
            The competition is training smarter. Train with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="px-8 py-4 bg-white text-brand-black font-bold rounded-lg hover:bg-brand-silver transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2">
              Get Started Now <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <p className="text-sm text-brand-silver">
            ✓ 30-day risk-free guarantee • ✓ Join 500+ BJJ athletes • ✓ Start immediately
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-black text-brand-silver py-16 px-4 border-t border-brand-red/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <span className="font-bold text-lg mb-4 block">BLACKBELT STRENGTH</span>
              <p className="text-sm">Strength conditioning designed for BJJ athletes. By a black belt, for black belts.</p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Program</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-brand-red transition">12-Week System</a></li>
                <li><a href="#" className="hover:text-brand-red transition">Video Library</a></li>
                <li><a href="#" className="hover:text-brand-red transition">Community</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-brand-red transition">About Nate</a></li>
                <li><a href="#" className="hover:text-brand-red transition">Contact</a></li>
                <li><a href="#" className="hover:text-brand-red transition">Privacy</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-brand-red transition">Instagram</a></li>
                <li><a href="#" className="hover:text-brand-red transition">YouTube</a></li>
                <li><a href="#" className="hover:text-brand-red transition">Email</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-brand-red/20 pt-8 text-center text-sm">
            <p>© 2024 Black Belt Strength. All rights reserved.</p>
            <p className="mt-2">Designed for serious athletes. Built by a black belt.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
