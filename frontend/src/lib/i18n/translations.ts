export type Lang = "en" | "ar";

const translations = {
  en: {
    // ── Navbar ──────────────────────────────────────────────────────────
    nav: {
      whatWeDo: "WHAT WE DO",
      whoWeHelp: "WHO WE HELP",
      whoWeAre: "WHO WE ARE",
      joinITech: "JOIN I-TECH",
      letsTalkBusiness: "Let's Talk Business",
      subWhatWeDo: [
        "Web & App Development",
        "Social Media Management",
        "Photography & Videography",
        "3D Design",
        "Animation",
        "Illustration",
        "Interior Design",
        "Printing",
        "Digital Marketing",
      ],
      subWhoWeHelp: [
        "Web & App Projects",
        "Social Media Campaigns",
        "Photography & Video",
        "3D Design & Rendering",
        "Animation & Motion",
        "Illustration & Art",
        "Interior Spaces",
        "Digital Marketing & SEO",
        "Branding & Identity",
      ],
      subWhoWeAre: ["Our Story", "Our Mission", "Our Vision", "Our Values"],
      subJoinITech: ["Job Openings", "Benefits & Perks", "Why Work With Us"],
    },

    // ── Hero ─────────────────────────────────────────────────────────────
    hero: {
      tag: "LEADING TECH & DESIGN AGENCY",
      heading: "I-TECH Digitals: Pioneering Design Excellence for Your Success",
      sub: "We redefine design excellence, transforming your vision into captivating reality. Elevate your brand with our bespoke solutions crafted for success.",
      learnMore: "Learn More",
      watchVideo: "Watch Video",
      clientSatisfaction: "Client Satisfaction",
      successRate: "Success Rate",
      features: [
        { title: "Branding", desc: "Crafting unique identities." },
        { title: "App Development", desc: "Scalable mobile solutions." },
        { title: "Web Solutions", desc: "High-performance websites." },
        { title: "Animations", desc: "Engaging visual stories." },
        { title: "Digital Marketing", desc: "Data-driven growth." },
      ],
    },

    // ── About (homepage section) ──────────────────────────────────────────
    about: {
      tag: "About Us",
      heading: "Essential IT Solutions For Modern",
      headingSpan: "Businesses.",
      sub: "I-TECH Digitals is a leading tech & design agency. We blend technical expertise with creative artistry to craft experiences that captivate, convert, and endure across Kuwait and Pakistan.",
      innovation: "Innovation",
      innovationDesc: "Pushing boundaries with cutting-edge solutions.",
      precision: "Precision",
      precisionDesc: "Meticulous attention to quality and pixel-perfect work.",
      discoverMore: "Discover More",
    },

    // ── Services (homepage section) ───────────────────────────────────────
    services: {
      tag: "Our Services",
      heading: "How Professional IT Services Can Drive",
      headingSpan: "Success.",
      readMore: "Read More",
      seeMore: "See More",
      seeLess: "See Less",
    },

    // ── Contact (homepage section) ────────────────────────────────────────
    contact: {
      tag: "Get In Touch",
      heading: "Ready to elevate your brand",
      headingSpan: "with I-TECH?",
      sub: "Fill out the form and our team will get back to you within 24 hours to discuss your project.",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      phonePlaceholder: "Phone Number",
      servicePlaceholder: "Select a service (optional)",
      messagePlaceholder: "Write your message here...",
      sendMessage: "Send Message",
      sending: "Sending...",
      successTitle: "Message Sent Successfully!",
      successDefault: "Thank you for reaching out. We will contact you soon.",
      sendAnother: "Send Another",
      errorDefault: "Something went wrong. Please try again.",
    },

    // ── Footer ────────────────────────────────────────────────────────────
    footer: {
      callUsFor: "Call Us For Any Inquiry",
      getFreeConsultation: "Get Free Consultation",
      tagline:
        "Envision. Execute. Elevate. Pioneering design excellence and transforming your vision into captivating reality across Kuwait and Pakistan.",
      itServices: "IT Services",
      quickLinks: "Quick Links",
      contactInfo: "Contact Info",
      kuwaitOffice: "Kuwait Office",
      kuwaitAddress: "Zawya Complex, Hawally",
      pakistanOffice: "Pakistan Office",
      pakistanAddress: "E-11/3, Islamabad",
      emailUs: "Email Us",
      poweredBy: "Powered by I-TECH Digitals",
      allRightsReserved: "All Rights Reserved.",
      quickLinkLabels: [
        "About Us",
        "Our Work",
        "Contact Us",
        "Privacy Policy",
        "Terms & Conditions",
      ],
    },

    // ── About page ────────────────────────────────────────────────────────
    aboutPage: {
      heroTag: "Our Story",
      heroHeading: "About I-TECH Digitals",
      heroSub:
        "We are a passionate team of designers, developers, and storytellers — united by a love for creating exceptional digital experiences.",
      mission: "Our Mission",
      missionText:
        "To empower businesses with world-class creative and technological solutions that drive measurable growth, foster brand loyalty, and establish lasting digital presence.",
      vision: "Our Vision",
      visionText:
        "To be the most trusted creative partner in the MENA and South Asia region — known for innovation, reliability, and transformative outcomes for every client we serve.",
      values: "Our Values",
      valuesText:
        "We believe in absolute transparency, relentless innovation, and a customer-first approach. Excellence is not just our goal—it is our standard in every single project.",
      ctaHeading: "Ready to Work With Us?",
      ctaSub: "Let's create something extraordinary together.",
      ctaBtn: "Start a Conversation",
    },

    // ── Services page ─────────────────────────────────────────────────────
    servicesPage: {
      heroTag: "— What We Offer",
      heroHeading: "Our Services",
      heroSub: "End-to-end digital and creative services — from strategy to execution — all under one roof.",
      getAQuote: "Get a Quote",
      ctaHeading: "Not Sure Which Service You Need?",
      ctaSub: "Let's have a conversation. We'll help you find the best solution for your goals.",
      ctaBtn: "Talk to an Expert",
    },

    // ── Our Work page ─────────────────────────────────────────────────────
    ourWorkPage: {
      heroTag: "— Portfolio",
      heroHeading: "Our Creative Work",
      heroSub: "A curated showcase of projects we're proud of — organized by service type.",
      categories: "categories",
      projects: "projects",
      project: "project",
      showing: "Showing",
      in: "in",
      ctaTag: "Let's Collaborate",
      ctaHeading: "Your Project Could Be",
      ctaHeadingSpan: "Next",
      ctaSub: "We take on select projects that align with our passion for quality. Let's talk about yours.",
      ctaBtn: "Start a Project",
    },

    // ── Contact page ──────────────────────────────────────────────────────
    contactPage: {
      heroTag: "Contact",
      heroHeading: "Let's Work Together",
      heroSub: "Send us a message. We'd love to hear from you.",
    },

    // ── Careers page ──────────────────────────────────────────────────────
    careersPage: {
      heroTag: "Join Our Team",
      heroHeading: "Build Your Career",
      heroHeadingSpan: "With I-TECH",
    },
  },

  ar: {
    // ── Navbar ──────────────────────────────────────────────────────────
    nav: {
      whatWeDo: "خدماتنا",
      whoWeHelp: "أعمالنا",
      whoWeAre: "من نحن",
      joinITech: "انضم إلينا",
      letsTalkBusiness: "تحدث معنا",
      subWhatWeDo: [
        "تطوير الويب والتطبيقات",
        "إدارة وسائل التواصل الاجتماعي",
        "التصوير الفوتوغرافي والفيديو",
        "التصميم ثلاثي الأبعاد",
        "الرسوم المتحركة",
        "الرسم التوضيحي",
        "التصميم الداخلي",
        "الطباعة",
        "التسويق الرقمي",
      ],
      subWhoWeHelp: [
        "مشاريع الويب والتطبيقات",
        "حملات التواصل الاجتماعي",
        "التصوير والفيديو",
        "التصميم ثلاثي الأبعاد",
        "الرسوم المتحركة",
        "الرسم الفني",
        "المساحات الداخلية",
        "التسويق الرقمي وتحسين محركات البحث",
        "العلامة التجارية والهوية",
      ],
      subWhoWeAre: ["قصتنا", "مهمتنا", "رؤيتنا", "قيمنا"],
      subJoinITech: ["الوظائف المتاحة", "المزايا والامتيازات", "لماذا العمل معنا"],
    },

    // ── Hero ─────────────────────────────────────────────────────────────
    hero: {
      tag: "وكالة التقنية والتصميم الرائدة",
      heading: "آي-تك ديجيتالز: ريادة التميز في التصميم من أجل نجاحك",
      sub: "نعيد تعريف التميز في التصميم، ونحوّل رؤيتك إلى واقع مبهر. ارفع مستوى علامتك التجارية بحلول مصممة خصيصاً لنجاحك.",
      learnMore: "اعرف المزيد",
      watchVideo: "شاهد الفيديو",
      clientSatisfaction: "رضا العملاء",
      successRate: "معدل النجاح",
      features: [
        { title: "العلامة التجارية", desc: "بناء هويات فريدة." },
        { title: "تطوير التطبيقات", desc: "حلول متنقلة قابلة للتطوير." },
        { title: "حلول الويب", desc: "مواقع عالية الأداء." },
        { title: "الرسوم المتحركة", desc: "قصص بصرية جذابة." },
        { title: "التسويق الرقمي", desc: "نمو مبني على البيانات." },
      ],
    },

    // ── About (homepage section) ──────────────────────────────────────────
    about: {
      tag: "من نحن",
      heading: "حلول تقنية متكاملة للشركات",
      headingSpan: "الحديثة.",
      sub: "آي-تك ديجيتالز وكالة تقنية وتصميم رائدة. نمزج الخبرة التقنية مع الإبداع الفني لصياغة تجارب تأسر الجمهور وتحقق النتائج في الكويت وباكستان.",
      innovation: "الابتكار",
      innovationDesc: "تجاوز الحدود بحلول متطورة.",
      precision: "الدقة",
      precisionDesc: "اهتمام دقيق بالجودة والكمال في كل تفصيل.",
      discoverMore: "اكتشف المزيد",
    },

    // ── Services (homepage section) ───────────────────────────────────────
    services: {
      tag: "خدماتنا",
      heading: "كيف يمكن لخدمات تقنية المعلومات الاحترافية أن تدفع",
      headingSpan: "النجاح.",
      readMore: "اقرأ المزيد",
      seeMore: "عرض المزيد",
      seeLess: "عرض أقل",
    },

    // ── Contact (homepage section) ────────────────────────────────────────
    contact: {
      tag: "تواصل معنا",
      heading: "هل أنت مستعد لرفع مستوى علامتك التجارية",
      headingSpan: "مع آي-تك؟",
      sub: "املأ النموذج وسيتواصل فريقنا معك خلال 24 ساعة لمناقشة مشروعك.",
      namePlaceholder: "اسمك",
      emailPlaceholder: "بريدك الإلكتروني",
      phonePlaceholder: "رقم الهاتف",
      servicePlaceholder: "اختر خدمة (اختياري)",
      messagePlaceholder: "اكتب رسالتك هنا...",
      sendMessage: "إرسال الرسالة",
      sending: "جاري الإرسال...",
      successTitle: "تم إرسال الرسالة بنجاح!",
      successDefault: "شكراً لتواصلك معنا. سنتصل بك قريباً.",
      sendAnother: "إرسال رسالة أخرى",
      errorDefault: "حدث خطأ ما. يرجى المحاولة مجدداً.",
    },

    // ── Footer ────────────────────────────────────────────────────────────
    footer: {
      callUsFor: "اتصل بنا لأي استفسار",
      getFreeConsultation: "احصل على استشارة مجانية",
      tagline:
        "تخيّل. نفّذ. ارتقِ. ريادة التميز في التصميم وتحويل رؤيتك إلى واقع مبهر في الكويت وباكستان.",
      itServices: "الخدمات التقنية",
      quickLinks: "روابط سريعة",
      contactInfo: "معلومات التواصل",
      kuwaitOffice: "مكتب الكويت",
      kuwaitAddress: "مجمع الزاوية، حولي",
      pakistanOffice: "مكتب باكستان",
      pakistanAddress: "E-11/3، إسلام آباد",
      emailUs: "راسلنا",
      poweredBy: "بدعم من آي-تك ديجيتالز",
      allRightsReserved: "جميع الحقوق محفوظة.",
      quickLinkLabels: [
        "من نحن",
        "أعمالنا",
        "اتصل بنا",
        "سياسة الخصوصية",
        "الشروط والأحكام",
      ],
    },

    // ── About page ────────────────────────────────────────────────────────
    aboutPage: {
      heroTag: "قصتنا",
      heroHeading: "عن آي-تك ديجيتالز",
      heroSub:
        "نحن فريق شغوف من المصممين والمطورين ورواة القصص — متحدون بحب إنشاء تجارب رقمية استثنائية.",
      mission: "مهمتنا",
      missionText:
        "تمكين الشركات بحلول إبداعية وتكنولوجية عالمية المستوى تدفع النمو القابل للقياس، وتعزز ولاء العلامة التجارية، وتؤسس حضوراً رقمياً دائماً.",
      vision: "رؤيتنا",
      visionText:
        "أن نكون الشريك الإبداعي الأكثر موثوقية في منطقة الشرق الأوسط وشمال أفريقيا وجنوب آسيا — المعروف بالابتكار والموثوقية والنتائج التحويلية لكل عميل نخدمه.",
      values: "قيمنا",
      valuesText:
        "نؤمن بالشفافية المطلقة والابتكار المستمر ومنهج يضع العميل أولاً. التميز ليس مجرد هدفنا — بل معيارنا في كل مشروع.",
      ctaHeading: "هل أنت مستعد للعمل معنا؟",
      ctaSub: "لنصنع معاً شيئاً استثنائياً.",
      ctaBtn: "ابدأ محادثة",
    },

    // ── Services page ─────────────────────────────────────────────────────
    servicesPage: {
      heroTag: "— ما نقدمه",
      heroHeading: "خدماتنا",
      heroSub: "خدمات رقمية وإبداعية متكاملة — من الاستراتيجية إلى التنفيذ — تحت سقف واحد.",
      getAQuote: "احصل على عرض سعر",
      ctaHeading: "لست متأكداً من الخدمة التي تحتاجها؟",
      ctaSub: "لنتحدث. سنساعدك في إيجاد الحل الأنسب لأهدافك.",
      ctaBtn: "تحدث مع خبير",
    },

    // ── Our Work page ─────────────────────────────────────────────────────
    ourWorkPage: {
      heroTag: "— معرض الأعمال",
      heroHeading: "أعمالنا الإبداعية",
      heroSub: "عرض منتقى للمشاريع التي نفخر بها — مصنفة حسب نوع الخدمة.",
      categories: "فئات",
      projects: "مشاريع",
      project: "مشروع",
      showing: "عرض",
      in: "في",
      ctaTag: "لنتعاون",
      ctaHeading: "مشروعك قد يكون",
      ctaHeadingSpan: "التالي",
      ctaSub: "نقبل مشاريع مختارة تتوافق مع شغفنا بالجودة. تحدث معنا عن مشروعك.",
      ctaBtn: "ابدأ مشروعاً",
    },

    // ── Contact page ──────────────────────────────────────────────────────
    contactPage: {
      heroTag: "تواصل",
      heroHeading: "لنعمل معاً",
      heroSub: "أرسل لنا رسالة. يسعدنا سماعك.",
    },

    // ── Careers page ──────────────────────────────────────────────────────
    careersPage: {
      heroTag: "انضم لفريقنا",
      heroHeading: "ابنِ مسيرتك المهنية",
      heroHeadingSpan: "مع آي-تك",
    },
  },
} as const;

export type Translations = typeof translations.en;
export default translations;
