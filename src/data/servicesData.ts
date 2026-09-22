import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'flight-tickets',
    slug: 'flight-tickets',
    title: 'International & Domestic Flight Tickets',
    tagline: 'Direct Ticketing, Best Available Fares & Dedicated Flight Rebooking Support',
    iconName: 'Plane',
    category: 'Flights',
    heroImage: '/service1.webp',
    shortSummary: 'Instant flight bookings and reservations across top international carriers and domestic airlines with exclusive negotiated rates and 24/7 re-routing assistance.',
    fullDescription: `Whether you are flying for business, family vacation, academic relocation, or an urgent emergency, booking flight tickets shouldn't be an ordeal of hidden surcharges, sudden cancellations, or unresponsive booking engines. At D'Kingsfems Global Ltd, we combine direct airline GDS access with high-touch personal concierge service. We source the most convenient itineraries across British Airways, Qatar Airways, Emirates, Virgin Atlantic, Air France, Delta, Ethiopian Airlines, and Nigerian domestic carriers including Air Peace, Ibom Air, and ValueJet.

Our seasoned ticketing specialists negotiate favorable business class and economy fare classes, manage complex multi-city itineraries, handle seat allocations, excess luggage arrangements, transit visas, and special meal requests. When disruptions strike, you don't wait on an overseas hotline: our dedicated team proactively manages date changes, refunds, and re-routing so your journey remains smooth and stress-free.`,
    keyBenefits: [
      'Direct partnerships with leading IATA global and domestic airlines',
      'Exclusive negotiated corporate and group fare discounts',
      'Instant e-ticket generation with immediate verification codes',
      '24/7 flight monitoring, rebooking, and delay support',
      'Flexible payment structures for corporate and group accounts',
      'Full transit visa guidance and baggage allowance advisory'
    ],
    whatsIncluded: [
      {
        title: 'Multi-Carrier Itinerary Comparison',
        description: 'Comprehensive evaluation of optimal flight times, layover durations, and pricing across major international and regional carriers.'
      },
      {
        title: 'Seat Selection & Class Upgrades',
        description: 'Advance seat reservation (extra legroom, window/aisle preferences) and airline loyalty point maximization.'
      },
      {
        title: 'Baggage & Special Services Handling',
        description: 'Arrangements for excess baggage allowances, unaccompanied minors, pet transport, and special dietary/medical requirements.'
      },
      {
        title: 'Transit Visa & Travel Advisory',
        description: 'Thorough review of transit visa regulations, airport health guidelines, and passport validity requirements for your destination.'
      },
      {
        title: '24/7 Emergency Schedule Support',
        description: 'Immediate human intervention for missed connections, flight cancellations, emergency date adjustments, and weather delays.'
      },
      {
        title: 'Flexible Invoicing & Payment Options',
        description: 'Clear, transparent invoicing with corporate billing options and multi-currency payment capabilities.'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Share Your Travel Details',
        description: 'Submit your departure city, destination, preferred travel dates, cabin class preference, and number of passengers.'
      },
      {
        step: '02',
        title: 'Review Tailored Flight Options',
        description: 'Our flight desk provides 2 to 3 optimized flight combinations comparing speed, layovers, baggage allowances, and best prices.'
      },
      {
        step: '03',
        title: 'Confirm & Receive E-Tickets',
        description: 'Select your preferred flight, make payment securely, and receive your verified airline e-tickets and boarding guidance instantly.'
      }
    ],
    faqs: [
      {
        question: 'Can I change my travel dates after booking?',
        answer: 'Yes. Ticket flexibility depends on the fare class selected. Our travel desk assists you with date revalidations or ticket exchanges in line with airline fare rules with complete cost transparency.'
      },
      {
        question: 'Do you offer group booking discounts?',
        answer: 'Absolutely. We specialize in group bookings for 10 or more passengers traveling together for weddings, conferences, religious pilgrimages, or corporate retreats, securing special group rates.'
      },
      {
        question: 'How quickly can you issue an emergency ticket?',
        answer: 'Our ticketing desk operates around the clock. Urgent and same-day flight tickets can typically be secured and verified within 30 to 45 minutes of payment.'
      }
    ],
    seoTitle: 'International & Domestic Flight Tickets | D\'Kingsfems Global Ltd',
    seoDescription: 'Book international and domestic flight tickets with D\'Kingsfems Global Ltd. Enjoy best fares, direct airline booking, and 24/7 concierge support in Lagos, Nigeria.',
    ctaText: 'Request Flight Quote Now'
  },
  {
    id: 'corporate-travel',
    slug: 'corporate-travel',
    title: 'Corporate Travel Management',
    tagline: 'Streamlined Executive Mobility, Policy Compliance & Cost-Optimized Group Logistics',
    iconName: 'Briefcase',
    category: 'Corporate',
    heroImage: '/service2.webp',
    shortSummary: 'End-to-end corporate travel accounts, executive itineraries, expense reconciliation, and dedicated account managers for corporate organizations.',
    fullDescription: `In today’s fast-moving business world, executive travel cannot afford administrative delays, lost hours, or untracked expenses. D'Kingsfems Global Ltd partners with corporations, financial institutions, NGOs, and multinational enterprises to centralize and optimize their entire corporate travel lifecycle. We transform corporate travel from an unpredictable cost center into a smooth, cost-efficient, and policy-compliant business enabler.

From booking C-suite flights and five-star business hotel stays to coordinating ground logistics, protocol clearance, and emergency travel insurance, we provide an all-inclusive solution. Your organization is assigned a dedicated Corporate Account Manager who enforces your travel policy limits, eliminates employee booking friction, and delivers detailed monthly travel spend analytics that identify actionable cost savings.`,
    keyBenefits: [
      'Dedicated Senior Corporate Account Manager assigned to your organization',
      'Enforcement of corporate travel policies and authorization tiers',
      'Consolidated monthly billing, VAT-compliant receipts, and spend reporting',
      'Corporate hotel rate agreements with executive lounge and flexible cancellation perks',
      'Duty of care tracking and emergency evacuation contingency planning',
      '24/7 VIP desk for executive re-routings and last-minute calendar changes'
    ],
    whatsIncluded: [
      {
        title: 'Custom Travel Policy Alignment',
        description: 'Configuration of employee authorization thresholds, preferred cabin tiers, and automated approval chains.'
      },
      {
        title: 'Priority Executive Desk',
        description: 'Immediate white-glove booking for senior leadership and executive delegations with minimal lead time.'
      },
      {
        title: 'Consolidated Spend Reporting',
        description: 'Transparent monthly reporting detailing expenditure by department, route, employee, and cost center.'
      },
      {
        title: 'Corporate Hotel & Car Agreements',
        description: 'Negotiated corporate rates with early check-in, late checkout, complimentary breakfast, and flexible cancellation.'
      },
      {
        title: 'Emergency Crisis & Duty of Care',
        description: 'Real-time traveler location tracking and rapid emergency extraction or re-ticketing during regional crises.'
      },
      {
        title: 'Deferred Billing & Credit Terms',
        description: 'Pre-approved corporate credit facilities with 14-day or 30-day payment cycles for established enterprise clients.'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Corporate Discovery & Account Onboarding',
        description: 'We audit your current travel frequency, spend patterns, and policy guidelines to design a tailored SLA.'
      },
      {
        step: '02',
        title: 'Seamless Travel Desk Activation',
        description: 'Your authorized travel coordinators receive direct communication lines to your assigned Senior Account Manager.'
      },
      {
        step: '03',
        title: 'Hassle-Free Booking & Monthly Billing',
        description: 'Bookings are executed according to company policy, with transparent consolidated invoices provided monthly.'
      }
    ],
    faqs: [
      {
        question: 'Can D\'Kingsfems establish credit facilities for our company?',
        answer: 'Yes. Following our standard KYC and credit assessment process, we offer verified corporate clients 14-day to 30-day deferred billing terms.'
      },
      {
        question: 'How do you handle after-hours emergency travel requests?',
        answer: 'Your dedicated account team is reachable 24 hours a day, 365 days a year via dedicated hotline and WhatsApp group, ensuring immediate resolution.'
      },
      {
        question: 'Can you enforce our existing travel policy rules?',
        answer: 'Absolutely. We ensure that cabin class limits, hotel per diems, and executive sign-off procedures are strictly adhered to before any ticket is issued.'
      }
    ],
    seoTitle: 'Corporate Travel Management Services | D\'Kingsfems Global Ltd',
    seoDescription: 'Enterprise corporate travel management in Nigeria. Policy compliance, dedicated corporate account managers, consolidated billing, and VIP executive mobility.',
    ctaText: 'Open a Corporate Travel Account'
  },
  {
    id: 'airport-transfers',
    slug: 'airport-transfers',
    title: 'Airport Pick-Up & Drop-Off',
    tagline: 'VIP Chauffeur Services, Flight Tracking & Punctual Terminal Meet-and-Greet',
    iconName: 'Car',
    category: 'Security & Logistics',
    heroImage: '/service3.webp',
    shortSummary: 'Punctual, comfortable, and executive airport transfers with real-time flight tracking, professional chauffeurs, and terminal meet-and-greet.',
    fullDescription: `Arriving in a busy metropolis like Lagos, Abuja, or Port Harcourt after hours in the air should be met with effortless comfort, not airport chaos or haggling with unverified taxi operators. D'Kingsfems Global Ltd provides executive airport pick-up and drop-off services that guarantee zero wait times, pristine executive vehicles, and consummate professional chauffeurs.

We track your inbound flight in real time using automated radar tools, ensuring that whether your flight lands early or suffers hours of delay, your personal driver is already stationed at arrivals holding a discreet name sign. Our diverse fleet features immaculate luxury sedans, executive SUVs (Toyota Prado, Land Cruiser), and executive Mercedes-Benz Sprinter buses for larger delegations, all fitted with climate control, chilled bottled refreshments, and cellular charging ports.`,
    keyBenefits: [
      'Automated real-time flight tracking: we adjust for flight delays automatically',
      'Professional, vetted, defensive-driving certified chauffeurs',
      'Spotless, air-conditioned executive fleet (Sedans, SUVs, and Luxury Buses)',
      'Terminal meet-and-greet service directly outside baggage claim',
      'Complimentary bottled water, mints, and mobile phone chargers on board',
      'Fixed transparent pricing with zero surge charges or hidden toll fees'
    ],
    whatsIncluded: [
      {
        title: 'Flight Radar Monitoring',
        description: 'Our operations center monitors flight touchdown times live, guaranteeing your driver is staged regardless of delays.'
      },
      {
        title: 'Arrivals Meet & Greet',
        description: 'Driver or airport protocol agent greets you at the terminal exit with professional electronic or physical signage.'
      },
      {
        title: 'Luggage Assistance',
        description: 'Full handling and loading of your luggage from terminal trolley directly to the vehicle trunk.'
      },
      {
        title: 'Premium Fleet Selection',
        description: 'Options ranging from executive sedans to bulletproof SUVs and luxury Mercedes-Benz buses.'
      },
      {
        title: 'Toll & Airport Parking Covered',
        description: 'All toll gates, access fees, and airport terminal parking fees are fully incorporated into your fixed rate.'
      },
      {
        title: 'Direct Dispatch Contact',
        description: 'Driver name, vehicle license plate, and mobile phone number dispatched via SMS/WhatsApp 2 hours prior to arrival.'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Provide Flight & Destination Details',
        description: 'Share your airline, flight number, arrival date/time, destination address, and luggage count.'
      },
      {
        step: '02',
        title: 'Receive Confirmation & Driver Profile',
        description: 'We confirm your vehicle class and send driver and vehicle dispatch details well before touchdown.'
      },
      {
        step: '03',
        title: 'Seamless Touchdown & Executive Ride',
        description: 'Walk out of the arrivals hall into your air-conditioned executive vehicle and enjoy a relaxing journey.'
      }
    ],
    faqs: [
      {
        question: 'What happens if my flight is delayed by several hours?',
        answer: 'We continuously monitor your flight status using live tracking systems. Your pickup time adjusts automatically at no additional waiting fee for flight delays.'
      },
      {
        question: 'Can you accommodate large corporate teams with extensive luggage?',
        answer: 'Yes. We maintain a fleet of executive Toyota HiAce and Mercedes-Benz Sprinter coaches equipped for up to 14–22 passengers with ample luggage compartments.'
      },
      {
        question: 'Do you provide protocol service through immigration and customs?',
        answer: 'Yes! Upon request, we provide VIP tarmac and terminal protocol agents who expedite your passage through immigration and baggage retrieval.'
      }
    ],
    seoTitle: 'Executive Airport Pick-Up & Drop-Off Services | D\'Kingsfems Global',
    seoDescription: 'Reliable VIP airport transfers in Lagos and Abuja. Meet-and-greet, luxury SUVs, real-time flight tracking, and vetted chauffeurs with D\'Kingsfems Global.',
    ctaText: 'Schedule Airport Transfer'
  },
  {
    id: 'tours-cruises',
    slug: 'tours-cruises',
    title: 'Tours & Cruises',
    tagline: 'Curated World Expeditions, Luxury Ocean Sailings & Bespoke Private Getaways',
    iconName: 'Compass',
    category: 'Leisure',
    heroImage: '/service4.webp',
    shortSummary: 'Bespoke leisure packages, luxury cruise sailings, family holidays, honeymoon escapes, and exotic destination tours tailored to your dreams.',
    fullDescription: `Travel is about collecting memories that stir your soul. At D'Kingsfems Global Ltd, we curate world-class leisure vacations, romantic honeymoon escapes, group adventures, and luxury ocean cruises designed to immerse you in breathtaking destinations without the stress of planning.

Whether you dream of waking up in an overwater bungalow in the Maldives, sailing through the Mediterranean on a luxury cruise liner, exploring Dubai’s futuristic marvels, discovering the safari wilderness of Kenya and Tanzania, or experiencing the historic charm of Europe, we handle every detail. From visa procurement and five-star resort accommodations to private guided excursions and cultural dining, your only responsibility is to relish the experience.`,
    keyBenefits: [
      'Access to top world cruise lines (Royal Caribbean, MSC, Celebrity Cruises)',
      'Custom-tailored itineraries matching your budget, interests, and schedule',
      'End-to-end tourist visa guidance and submission support',
      'Handpicked 4-star and 5-star resorts, private villas, and staterooms',
      'Vetted local tour guides, private transport, and entrance passes included',
      'Installment payment plans available for seasonal vacation packages'
    ],
    whatsIncluded: [
      {
        title: 'Comprehensive Itinerary Design',
        description: 'Day-by-day tailored travel schedules balancing iconic highlights with relaxed personal leisure time.'
      },
      {
        title: 'Stateroom & Resort Accommodations',
        description: 'Handpicked ocean-view cruise staterooms, beachfront resorts, or heritage city hotels with daily breakfast.'
      },
      {
        title: 'Excursions & Fast-Track Tickets',
        description: 'Pre-booked access to historic landmarks, desert safaris, theme parks, and culinary dining experiences.'
      },
      {
        title: 'Tourist Visa Facilitation',
        description: 'Step-by-step document preparation, embassy appointments, and verification for high visa success.'
      },
      {
        title: 'Comprehensive Travel Insurance',
        description: 'Medical coverage, luggage protection, and trip cancellation insurance for international peace of mind.'
      },
      {
        title: 'Dedicated Holiday Concierge',
        description: 'Direct contact with a destination specialist before, during, and after your trip.'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Define Your Holiday Dream',
        description: 'Tell us your destination wishlist, travel dates, party size, budget, and favorite holiday style.'
      },
      {
        step: '02',
        title: 'Receive Custom Itinerary & Proposal',
        description: 'We present a detailed itinerary with photo highlights, resort selections, and transparent package pricing.'
      },
      {
        step: '03',
        title: 'Confirm, Pack & Embark',
        description: 'We finalize bookings, process visas, deliver your complete travel packet, and wish you bon voyage.'
      }
    ],
    faqs: [
      {
        question: 'Can I pay for my holiday in installments?',
        answer: 'Yes. For tours booked at least 60 to 90 days in advance, we provide flexible installment payment plans leading up to final ticket issuance.'
      },
      {
        question: 'Do you organize group tours for corporate retreats or families?',
        answer: 'Yes, we curate bespoke group tours for family reunions, corporate incentive retreats, church pilgrimages, and friendship getaways with customized team itineraries.'
      },
      {
        question: 'Are visas guaranteed with your tour packages?',
        answer: 'While visas remain at the sole discretion of the respective embassy, our documentation accuracy and accredited travel agency standing produce industry-leading success rates.'
      }
    ],
    seoTitle: 'Tours & Cruise Vacation Packages | D\'Kingsfems Global Ltd',
    seoDescription: 'Explore bespoke international tour packages and luxury cruise vacations with D\'Kingsfems Global Ltd. Dubai, Zanzibar, Europe, Maldives, and Mediterranean sailings.',
    ctaText: 'Explore Vacation Packages'
  },
  {
    id: 'hotel-bookings',
    slug: 'hotel-bookings',
    title: 'Hotel Bookings',
    tagline: 'Worldwide 3-Star to 5-Star Hotel Accommodations at Preferential Rates',
    iconName: 'Hotel',
    category: 'Leisure',
    heroImage: '/service5.webp',
    shortSummary: 'Global hotel and luxury resort reservations with negotiated corporate rates, verified safety ratings, and complimentary VIP amenities.',
    fullDescription: `Finding the right accommodation is the cornerstone of any great journey. D'Kingsfems Global Ltd connects you to an elite global network of luxury hotels, boutique properties, executive business suites, and private beachfront villas in over 180 countries. We bypass generic booking search engines to secure competitive negotiated rates and valuable complimentary perks.

Whether you require a discreet business hotel in the heart of London’s financial district, a luxury resort in Dubai with private beach access, or comfortable family lodgings in Orlando, we evaluate safety, location convenience, and guest amenities on your behalf. Every reservation is directly verified with hotel management before your arrival, eliminating overbooking risks and check-in hassles.`,
    keyBenefits: [
      'Negotiated wholesale rates across Marriott, Hilton, Accor, IHG, and Hyatt',
      'Complimentary perks: early check-in, room upgrades, and breakfast on select bookings',
      'Direct hotel voucher confirmation issued for visa submission requirements',
      'Flexible cancellation policies on participating properties',
      'Curated safety ratings and location proximity to business or tourist hubs',
      'Direct billing and corporate invoice facilities available'
    ],
    whatsIncluded: [
      {
        title: 'Global Property Matching',
        description: 'Selecting properties aligned with your aesthetic preferences, meeting proximity, and dining choices.'
      },
      {
        title: 'Embassy-Ready Hotel Vouchers',
        description: 'Officially verified hotel reservation letters formatted specifically for visa application compliance.'
      },
      {
        title: 'VIP Guest Amenities',
        description: 'Negotiated complimentary inclusions such as executive lounge access, welcome drinks, and late check-out.'
      },
      {
        title: 'Group Room Blocks',
        description: 'Securing coordinated room blocks and event spaces for weddings, conferences, or delegation stays.'
      },
      {
        title: 'Direct Reservation Pre-Check',
        description: 'Our team calls hotel front desks 24 hours in advance to guarantee room allocation and special preferences.'
      },
      {
        title: 'Transparent Pricing',
        description: 'All local taxes, tourism levies, and resort fees clearly itemized with no surprise checkout fees.'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Share Location & Preference',
        description: 'Provide your target city, check-in/out dates, guest count, and desired hotel star rating.'
      },
      {
        step: '02',
        title: 'Compare Curated Options',
        description: 'Review 3 verified hotel selections detailing amenities, location score, room sizes, and negotiated rates.'
      },
      {
        step: '03',
        title: 'Receive Confirmed Hotel Voucher',
        description: 'Upon confirmation, receive your official hotel voucher and check-in confirmation directly.'
      }
    ],
    faqs: [
      {
        question: 'Can you provide hotel reservations for my visa application?',
        answer: 'Yes. We issue verifiable, embassy-compliant hotel reservation letters that meet all international consular guidelines.'
      },
      {
        question: 'Can you match or beat online booking rates?',
        answer: 'In most instances, our direct wholesale contracts with global hotel chains allow us to match or beat public rates while offering value-added amenities like breakfast or upgrades.'
      },
      {
        question: 'Can I request specific room preferences (connecting rooms, high floor)?',
        answer: 'Yes. We communicate directly with hotel reservation managers to fulfill specific preferences including smoking/non-smoking, connecting doors, and floor heights.'
      }
    ],
    seoTitle: 'Global Hotel Bookings & Luxury Resorts | D\'Kingsfems Global Ltd',
    seoDescription: 'Book verified 3-star to 5-star hotels globally with D\'Kingsfems Global Ltd. Competitive negotiated rates, embassy vouchers, and complimentary VIP amenities.',
    ctaText: 'Find Your Hotel Now'
  },
  {
    id: 'study-abroad',
    slug: 'study-abroad',
    title: 'Study Abroad Advisory',
    tagline: 'Direct University Admissions, Statement of Purpose Guidance & 98% Visa Success',
    iconName: 'GraduationCap',
    category: 'Education',
    heroImage: '/service6.webp',
    shortSummary: 'Comprehensive international education advisory, securing admissions and student visas across top universities in the UK, Canada, USA, and Europe.',
    fullDescription: `Pursuing international education is one of the most rewarding investments a student and family can make. However, complex admissions criteria, strict statement of purpose guidelines, scholarship competitions, and ever-changing immigration policies can derail deserving candidates. D'Kingsfems Global Ltd is your trusted academic bridge to world-class universities across the United Kingdom, Canada, the United States, Ireland, Australia, and Schengen Europe.

We guide prospective undergraduate, postgraduate, and doctorate scholars through every stage of the journey. Our certified education advisors assess your academic transcripts, identify high-acceptance degree programs aligned with your career goals, assist in crafting compelling personal statements, navigate scholarship applications, and provide rigorous visa interview coaching that results in our standout 98% student visa success rate.`,
    keyBenefits: [
      'Direct partnerships with accredited universities across the UK, Canada, USA, and Europe',
      'In-depth transcript and eligibility profile evaluation',
      'Professional Statement of Purpose (SOP) and academic CV review',
      'Scholarship matching and financial aid guidance',
      'Comprehensive student visa application, documentation audit, and mock interviews',
      'Post-arrival student orientation, airport pick-up, and accommodation assistance'
    ],
    whatsIncluded: [
      {
        title: 'Career & Course Assessment',
        description: 'Comprehensive counseling to select degree programs that lead directly to in-demand global employment.'
      },
      {
        title: 'Admissions Processing',
        description: 'Direct submission and follow-up of university applications, securing conditional and unconditional offer letters.'
      },
      {
        title: 'SOP & Reference Enhancement',
        description: 'Detailed review and refinement of personal statements, essays, and academic recommendation letters.'
      },
      {
        title: 'Tuition Fee Guidance & Discounts',
        description: 'Assistance with university fee payments, early-bird tuition discounts, and scholarship applications.'
      },
      {
        title: 'Student Visa Filing & Mock Interviews',
        description: 'Rigorous compilation of bank statements, affidavits, TB tests, and one-on-one consular interview prep.'
      },
      {
        title: 'Pre-Departure Briefing & Housing',
        description: 'Practical guidance on student housing, banking abroad, packing essentials, and student transit.'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Profile & Transcript Evaluation',
        description: 'Submit your academic certificates and resume for a comprehensive assessment of your study abroad options.'
      },
      {
        step: '02',
        title: 'University Selection & Offer Letters',
        description: 'We apply to top-matching institutions, track your status, and secure your official offer and acceptance letters.'
      },
      {
        step: '03',
        title: 'Visa Approval & Pre-Departure',
        description: 'We compile your visa dossier, conduct mock interviews, secure your visa, and prepare you for your international journey.'
      }
    ],
    faqs: [
      {
        question: 'Which countries have the highest student visa approval rates currently?',
        answer: 'The UK, Ireland, Canada, and specific European nations (such as Germany and France) offer excellent academic programs with strong post-study work pathways. We advise on the best option based on your profile.'
      },
      {
        question: 'Can you help if I have a third-class degree or study gap?',
        answer: 'Yes. We partner with universities offering Pre-Masters and pathway programs designed specifically for students with lower degree classifications or career gaps.'
      },
      {
        question: 'Do you assist with tuition fee deposit payments?',
        answer: 'We provide clear advisory on university authorized payment platforms (Flywire, Convera, direct wire) ensuring your funds arrive safely and receipts are logged promptly.'
      }
    ],
    seoTitle: 'Study Abroad Consultants & University Admissions | D\'Kingsfems Global',
    seoDescription: 'Expert study abroad consulting in Nigeria. Secure admissions and student visas for UK, Canada, USA, and Europe universities with D\'Kingsfems Global Ltd.',
    ctaText: 'Start Your Study Abroad Journey'
  },
  {
    id: 'jobs-abroad',
    slug: 'jobs-abroad',
    title: 'Jobs Abroad Advisory',
    tagline: 'International Career Placement Consulting, Work Permit Guidance & Relocation',
    iconName: 'Building',
    category: 'Education',
    heroImage: '/service7.webp',
    shortSummary: 'Professional career consulting and work permit relocation advisory for qualified healthcare, tech, engineering, and skilled professionals.',
    fullDescription: `Securing legitimate employment overseas requires verified pathways, international-standard resume formatting, and strict adherence to destination country immigration frameworks. D'Kingsfems Global Ltd provides transparent, professional international career advisory for skilled workers and healthcare professionals seeking legal employment abroad.

We connect qualified candidates with recognized recruitment channels, employer-sponsored visa guidelines, and shortage occupation lists in countries such as the United Kingdom, Canada, Australia, and the Middle East. Our team ensures that your international credentials, professional council registrations (e.g. NMC, GMC, Engineers Board), and relocation documentation meet the exact legal criteria of sponsoring employers and embassies.`,
    keyBenefits: [
      'Transparent advisory adhering strictly to legal immigration pathways',
      'International standard CV restructuring (UK/EU/Canadian format)',
      'Shortage occupation analysis matching your exact professional experience',
      'Professional council license verification and credential evaluation assistance',
      'Comprehensive work permit and employer sponsorship visa documentation',
      'Spousal and dependent family relocation planning'
    ],
    whatsIncluded: [
      {
        title: 'Skills & Credential Assessment',
        description: 'Thorough review of your work history, qualifications, and eligibility against target country skilled worker lists.'
      },
      {
        title: 'Global CV & Cover Letter Formatting',
        description: 'Refactoring your resume to pass applicant tracking systems (ATS) in the UK, Canada, and Europe.'
      },
      {
        title: 'Licensing & Board Registration Support',
        description: 'Guiding healthcare workers (nurses, doctors, care specialists) through foreign professional accreditation.'
      },
      {
        title: 'Work Visa Application Management',
        description: 'Complete assistance compiling Certificate of Sponsorship (CoS), biometric appointments, and embassy filings.'
      },
      {
        title: 'Dependent & Family Relocation',
        description: 'Guidance on spousal open work permits, child education enrollment, and family settlement abroad.'
      },
      {
        title: 'On-Ground Settlement Advisory',
        description: 'Practical tips on tax registration (National Insurance / SIN), opening overseas bank accounts, and housing.'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Initial Eligibility Audit',
        description: 'Review your CV, qualifications, English language proficiency, and target employment sector.'
      },
      {
        step: '02',
        title: 'Credentialing & Application Preparation',
        description: 'Format your profile to international hiring standards and align with recognized sponsorship routes.'
      },
      {
        step: '03',
        title: 'Visa Processing & Relocation Onboarding',
        description: 'Coordinate employer sponsorship filings, secure work visas, and prepare your departure logistics.'
      }
    ],
    faqs: [
      {
        question: 'Do you guarantee jobs abroad?',
        answer: 'We operate with strict ethical honesty: no agency can legally guarantee hiring, as hiring decisions rest with employers. We provide the verified channels, profile optimization, licensing, and legal work visa processing that maximize your hiring success.'
      },
      {
        question: 'What professions are currently in highest demand overseas?',
        answer: 'Healthcare (registered nurses, medical doctors, care workers), software engineers, cyber security specialists, civil/mechanical engineers, and specialized trades.'
      },
      {
        question: 'Can my family relocate with me on a work visa?',
        answer: 'In many destinations, skilled worker visas permit legally recognized spouses and dependent children under 18 to accompany you with full working and public schooling rights.'
      }
    ],
    seoTitle: 'Jobs Abroad Consulting & Work Visa Advisory | D\'Kingsfems Global',
    seoDescription: 'Legitimate international employment advisory and skilled worker relocation guidance. Healthcare, engineering, and tech work permits with D\'Kingsfems Global.',
    ctaText: 'Evaluate Your International Career Profile'
  },
  {
    id: 'escort-cars',
    slug: 'escort-cars',
    title: 'Escort Cars (Intra & Interstate)',
    tagline: 'VIP Armed & Unarmed Security Convoys, Bulletproof Fleet & Armored Transit',
    iconName: 'Shield',
    category: 'Security & Logistics',
    heroImage: '/service8.webp',
    shortSummary: 'High-security convoy escorts, armored vehicles, and vetted security personnel for intra-state and inter-state journeys across Nigeria.',
    fullDescription: `When traveling across state lines or navigating high-profile engagements in Nigeria, personal safety and route predictability are of paramount importance. D'Kingsfems Global Ltd provides premier executive escort car services and secure convoy logistics for corporate executives, expatriates, government dignitaries, celebrities, and private families.

Our security logistics team deploys a formidable fleet of heavily maintained pilot vehicles, high-speed chase trucks, armored SUVs (B6/B7 ballistic standards), and trained, disciplined security operatives. We coordinate licensed security personnel (armed mobile police/counter-terrorism units where required) and operate 24/7 command center GPS tracking to maintain clear communication and situational dominance throughout your journey.`,
    keyBenefits: [
      'Official liaison and deployment of licensed security personnel and escort convoys',
      'Armored (B6/B7 ballistic rating) and non-armored luxury SUV fleet options',
      'Command center real-time GPS telemetry and route threat reconnaissance',
      'Certified defensive tactical drivers trained for emergency maneuvers',
      'Seamless interstate coverage across Lagos, Abuja, Port Harcourt, Delta, and regional corridors',
      'Discreet, professional conduct respecting VIP privacy and schedule confidentiality'
    ],
    whatsIncluded: [
      {
        title: 'Threat Assessment & Route Reconnaissance',
        description: 'Pre-journey intel evaluation of interstate highways, traffic patterns, and emergency alternate routes.'
      },
      {
        title: 'Pilot Vehicle & Convoy Configuration',
        description: 'Equipped lead vehicles with strobe sirens, high-intensity lighting, and secondary chase backup.'
      },
      {
        title: 'Licensed Armed/Unarmed Operatives',
        description: 'Fully vetted, uniformed security details assigned with strict adherence to civilian safety rules.'
      },
      {
        title: '24/7 Ops Center GPS Monitoring',
        description: 'Central operations center tracking convoy progress with live telemetry check-ins every 30 minutes.'
      },
      {
        title: 'Mechanical Rapid-Response Protocol',
        description: 'Standby roadside mechanical support and immediate convoy vehicle swap contingency.'
      },
      {
        title: 'Hotel & Venue Security Liaison',
        description: 'Advance team securing drop-off perimeters and executive parking at conference or event venues.'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Submit Route & Itinerary Schedule',
        description: 'Specify your departure point, destination, dates, convoy size, and executive passenger requirements.'
      },
      {
        step: '02',
        title: 'Security Briefing & Convoy Assignment',
        description: 'Our security operations director prepares the operational route plan and assigns vehicles and operatives.'
      },
      {
        step: '03',
        title: 'Flawless Convoy Execution',
        description: 'Your security detail arrives punctually, briefs the team, and delivers you safely with complete peace of mind.'
      }
    ],
    faqs: [
      {
        question: 'Are your security escorts officially licensed?',
        answer: 'Yes. All armed and unarmed escort operations are fully documented, authorized, and conducted in strict partnership with verified security forces and national regulations.'
      },
      {
        question: 'Do you cover interstate travel across Nigeria?',
        answer: 'Yes. We routinely operate escort convoys across major Nigerian interstate corridors including Lagos to Benin/Warri, Abuja to Kaduna/Kano, and Port Harcourt to Owerri/Enugu.'
      },
      {
        question: 'How much advance notice is required to book an escort convoy?',
        answer: 'For interstate missions, we recommend at least 24 to 48 hours notice for route recon and protocol clearance. Urgent intra-city assignments can be arranged with shorter notice.'
      }
    ],
    seoTitle: 'Escort Cars & VIP Security Convoy Services | D\'Kingsfems Global',
    seoDescription: 'Executive escort cars and secure convoy logistics in Nigeria. Armed escorts, armored vehicles, and interstate VIP transit with D\'Kingsfems Global Ltd.',
    ctaText: 'Book Security Escort Convoy'
  },
  {
    id: 'conference-management',
    slug: 'conference-management',
    title: 'Conference Management',
    tagline: 'End-to-End Corporate Summits, Delegate Logistics, Venue Booking & Protocol',
    iconName: 'Users',
    category: 'Corporate',
    heroImage: '/service9.webp',
    shortSummary: 'Flawless corporate conference organization, international delegate travel logistics, venue procurement, and audiovisual production.',
    fullDescription: `Executing an impactful corporate conference or international summit requires the orchestration of hundreds of moving parts—from international flight schedules and visa accreditations to state-of-the-art audiovisual setups, venue catering, and protocol management. D'Kingsfems Global Ltd is your complete turnkey conference partner.

We take full ownership of delegate management, group flight ticketing, luxury accommodation blocks, airport protocol, on-site registration desks, translation equipment, and gala receptions. Whether you are hosting a 50-person high-stakes board retreat or a 2,000-delegate international symposium, our experienced conference management team guarantees flawless execution that elevates your organization's global prestige.`,
    keyBenefits: [
      'Turnkey summit production from conceptualization to post-event reporting',
      'International delegate visa facilitation, flight ticketing, and meet-and-greet',
      'Preferred venue contracting at top convention centers and 5-star hotels',
      'Advanced AV production, live streaming, staging, and simultaneous translation booths',
      'Digital delegate registration portals and automated badge printing',
      'VIP protocol, dignitary escorts, and customized executive gift packages'
    ],
    whatsIncluded: [
      {
        title: 'Venue Sourcing & Contract Negotiation',
        description: 'Securing top convention halls, banquet spaces, and breakout rooms at preferential group rates.'
      },
      {
        title: 'Delegate Flight & Hotel Coordination',
        description: 'Centralized booking of international airline tickets and synchronized hotel check-ins for delegates.'
      },
      {
        title: 'On-Site Registration & Badging',
        description: 'Smooth digital check-in stations, NFC/QR badges, delegate kits, and information desks.'
      },
      {
        title: 'Audiovisual & Stage Production',
        description: 'High-definition LED screens, studio lighting, surround sound systems, and simultaneous interpretation gear.'
      },
      {
        title: 'VIP Protocol & Hostess Services',
        description: 'Polished corporate hostesses and protocol officers to manage dignitary seating, dining, and ceremonies.'
      },
      {
        title: 'Catering & Gala Dinner Planning',
        description: 'Curated corporate menus, dietary accommodation management, and evening entertainment production.'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Summit Brief & Scope Definition',
        description: 'We meet with your steering committee to define delegate targets, venue criteria, agenda, and budgetary limits.'
      },
      {
        step: '02',
        title: 'Procurement & Logistics Execution',
        description: 'We lock in venues, manage delegate invitations and flight travel, and build the full technical production schedule.'
      },
      {
        step: '03',
        title: 'Live Event Direction & Oversight',
        description: 'Our on-ground production directors manage all staging, delegate movements, and protocol flawlessly.'
      }
    ],
    faqs: [
      {
        question: 'Can you handle international visa letters and protocol for foreign delegates?',
        answer: 'Yes. We issue accredited invitation letters and coordinate directly with consular and airport protocol units to expedite visa-on-arrival or consular processing for your international attendees.'
      },
      {
        question: 'Do you provide hybrid and live streaming equipment for overseas attendees?',
        answer: 'Yes. We deploy high-bandwidth streaming rigs, multi-camera setups, and interactive hybrid webinar platforms allowing global participants to engage seamlessly.'
      },
      {
        question: 'Can you organize post-conference leisure tours for VIP guests?',
        answer: 'Absolutely. We regularly curate executive cultural day trips, golf outings, and sightseeing tours for conference speakers and international delegates.'
      }
    ],
    seoTitle: 'Conference Management & Event Logistics | D\'Kingsfems Global Ltd',
    seoDescription: 'Premier conference management and summit logistics in Nigeria. International delegate travel, venue sourcing, AV production, and VIP protocol.',
    ctaText: 'Plan Your Corporate Conference'
  },
  {
    id: 'school-excursions',
    slug: 'school-excursions',
    title: 'School Excursions',
    tagline: 'Inspiring Educational Journeys, Uncompromised Student Safety & Memorable Discoveries',
    iconName: 'BookOpen',
    category: 'Education',
    heroImage: '/service10.webp',
    shortSummary: 'Curriculum-aligned educational trips and student tours with strict child safety protocols, dedicated guides, and fully insured luxury transport.',
    fullDescription: `Taking learning beyond the four walls of the classroom ignites young imaginations and builds character. At D'Kingsfems Global Ltd, we specialize in organizing safe, educational, and transformative school excursions for primary schools, secondary institutions, and universities.

From historical expeditions to Badagry Slave Route and Olumo Rock, to science visits at tech innovation hubs, national parks, and overseas educational trips to the UK, France, and Kenya, we make student safety our absolute priority. Every itinerary is aligned with educational curricula, operated on modern, seatbelt-equipped coaches with vetted professional drivers, accompanied by first-aid trained tour coordinators, and backed by comprehensive student travel insurance.`,
    keyBenefits: [
      'Zero-compromise child safety protocols and child protection compliance',
      'Curriculum-linked learning objectives (history, geography, STEM, arts)',
      'Modern, air-conditioned coaches equipped with seatbelts and speed limiters',
      'Certified tour guides experienced in engaging student audiences',
      'All-inclusive pricing covering admission fees, meals, and student travel insurance',
      'Dedicated teacher-to-student chaperone ratios and parent communication briefings'
    ],
    whatsIncluded: [
      {
        title: 'Curriculum-Aligned Itineraries',
        description: 'Interactive educational activities and guided questionnaires created to reinforce classroom lessons.'
      },
      {
        title: 'Safety Audited Transport',
        description: 'Mechanically certified luxury coaches with verified drivers, seatbelts, and strict speed-governing rules.'
      },
      {
        title: 'Certified First Aid Escorts',
        description: 'Trained first-response coordinators carrying emergency medical kits accompany every single student group.'
      },
      {
        title: 'Nutritious Student Meals',
        description: 'Hygienically sourced lunches, hydration snacks, and strict monitoring of student dietary allergies.'
      },
      {
        title: 'Comprehensive Student Insurance',
        description: 'Full accidental medical coverage and trip protection for every student and teacher on the tour.'
      },
      {
        title: 'Parental Consent & Briefing Packs',
        description: 'Ready-to-distribute informational brochures, packing lists, and emergency contact registries.'
      }
    ],
    process: [
      {
        step: '01',
        title: 'Consultation with School Leadership',
        description: 'We review your grade level, subject curriculum goals, student headcount, and safety guidelines.'
      },
      {
        step: '02',
        title: 'Detailed Proposal & Parent Package',
        description: 'We prepare the itinerary, risk assessment audit, and parent information letters for school board sign-off.'
      },
      {
        step: '03',
        title: 'Inspiring & Safe Excursion Day',
        description: 'Our coordinators oversee boarding, manage site visits smoothly, and return students safely with lasting memories.'
      }
    ],
    faqs: [
      {
        question: 'What safety measures are implemented during student trips?',
        answer: 'We enforce buddy systems, high-visibility student identification, first-aid trained personnel on every bus, safety-inspected transport with seatbelts, and verified site security.'
      },
      {
        question: 'Do you organize international student summer camps and tours?',
        answer: 'Yes. We curate international educational tours to the UK (Oxford, Cambridge, London science museums), space camps in the USA, and cultural exchanges in France and Kenya.'
      },
      {
        question: 'Do teachers travel for free on group excursions?',
        answer: 'Yes! We provide complimentary chaperone slots for designated school teachers and administrators based on student group size.'
      }
    ],
    seoTitle: 'Educational School Excursions & Student Tours | D\'Kingsfems Global',
    seoDescription: 'Safe, curriculum-aligned school excursions in Nigeria and abroad. Insured student tours, certified guides, and educational adventures with D\'Kingsfems Global.',
    ctaText: 'Plan School Educational Excursion'
  }
];