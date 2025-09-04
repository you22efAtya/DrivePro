
  let currentClickeTrigger;
   // Example translations
    const translations = {
  en: {
    paragraph1: "LEARN TO DRIVE",
    paragraph2: "Drive With Truck Safety And Control",
    paragraph3: `We are a specialized training center that focuses on heavy truck 
        driving and heavy equipment maintenance and operation. 
        Our high-quality training programs aim to develop the skills of 
        drivers and technicians through our qualified and
        experienced instructors.`,
    paragraph4: "Start Your Journy",
    paragraph5: "Our Programs",
    paragraph6: "Home",
    paragraph7: "About Us",
    paragraph8: "Services",
    paragraph9: "Contact",
    paragraph10: "More About Us",
    paragraph11: `We achieve excellence through our qualified 
                    and specialized team, as well as a stimulating 
                    learning environment that prepares drivers and 
                    technicians for the modern transportation industry.`,
    paragraph12: "Abdullah Alghamdi",
    paragraph13: "CEO",
    paragraph14: "\"Leading the transformation of professional driving education.\"",

    // Newly added translations
    paragraph15: "Objectives",
    paragraph16: "Aligning with Vision 2030",
    paragraph17: "Contributing to the Kingdom's Vision 2030 by fostering training aligned with global standards",
    paragraph18: "Safety Enhancement",
    paragraph19: "Working towards enhanced safety standards in the truck driving industry",
    paragraph20: "Economic Contribution",
    paragraph21: "Bolstering the local economy by offering comprehensive training",
    paragraph22: "Expertise Development",
    paragraph23: "Elevating expertise and training levels in truck driving",
    paragraph24: "Perception Shift",
    paragraph25: "Transforming the conventional perception of the truck driving profession",
    paragraph26: "Logistics Support",
    paragraph27: "Strengthening the logistics sector to enhance supply chain efficiency",
    paragraph43: "OUR SERVICES",
    paragraph31: "Truck and Equipment Driving Training",
    paragraph32: "Our training covers both theory and practical aspects of safe heavy truck and vehicle driving, emphasizing economical driving techniques and modern safety systems for driver and environmental protection.",
    paragraph33: "READ MORE",
    paragraph34: "Preparation for Heavy Truck Driver License",
    paragraph35: "We prepare individuals for heavy truck, bus driving license tests, and equipment operation by employing qualified trainers and providing necessary equipment, ensuring compliance with safety standards and local regulations.",
    paragraph36: "READ MORE",
    paragraph37: "Provide drivers to companies in KSA.",
    paragraph38: "We provide professional drivers and heavy equipment operators to companies in Saudi Arabia on demand, meeting diverse sector needs, efficiently streamlining recruitment, enhancing project efficiency, and adapting to market demands.",
    paragraph39: "READ MORE",
    paragraph40: "Evaluating drivers before hiring",
    paragraph41: "We provide a specialized team to evaluate drivers of heavy equipment and vehicles, ensuring professionalism, safety adherence, and reliable cargo delivery. This ensures the safe and reliable delivery of goods.",
    paragraph42: "READ MORE",
    paragraph44: "Our KPI in 2026",
    paragraph45: "Truck Driving Training",
    paragraph46: "Equipment Operation Training",
    paragraph47: "Training Consultations",
    paragraph48: "Professional Competency Tests",

    // Added for WHY CHOOSE US
    paragraph49: "WHY CHOOSE US?",
    paragraph50: "Start <span style=\"color: #39ff14;\">The Drive</span> Learning <span style=\"color: #39ff14;\">Process</span>",
    paragraph51: "Because We are a real opportunity for the student, a specialized training center offering exceptional opportunities to learn heavy truck driving and heavy equipment maintenance and operation skills.",
    paragraph52: "100% Safe",
    paragraph53: "Delivering heavy truck and equipment driving courses with a 100% safety assurance.",
    paragraph54: "Flexible timing",
    paragraph55: "Providing courses with flexible scheduling options to accommodate your needs and busy lifestyle.",
    paragraph56: "Affordable Rate",
    paragraph57: "Delivering high-quality training at an affordable rate, making professional development accessible to all.",
    paragraph58: "24/7 Support",
    paragraph59: "Ensuring round-the-clock support to address any inquiries or concerns, offering peace of mind."
  },

  ar: {
    paragraph1: "تعلم قيادة الشاحنات",
    paragraph2: "قد بأمان وتحكم بالشاحنات",
    paragraph3: `نحن مركز تدريب متخصص يركز على قيادة
        الشاحنات الثقيلة وصيانة وتشغيل المعدات الثقيلة.
        تهدف برامجنا التدريبية عالية الجودة إلى تطوير مهارات
        السائقين والفنيين من خلال مدربينا المؤهلين وذوي الخبرة.`,
    paragraph4: "ابدأ رحلتك",
    paragraph5: "برامجنا",
    paragraph6: "الرئيسية",
    paragraph7: "من نحن",
    paragraph8: "خدماتنا",
    paragraph9: "اتصل بنا",
    paragraph10: "المزيد عنّا",
    paragraph11: `نحقق التميز من خلال فريقنا المؤهل والمتخصص، بالإضافة إلى بيئة 
        تعليمية محفزة تجهز السائقين والفنيين لصناعة النقل`,
    paragraph12: "عبدالله الغامدي",
    paragraph13: "مدير تنفيذي",
    paragraph14: "\"الريادة في تحويل تعليم القيادة الاحترافية.\"",

    // Newly added translations
    paragraph15: "أهدافنا",
    paragraph16: "التوافق مع رؤية 2030",
    paragraph17: "المساهمة في رؤية المملكة 2030 من خلال تعزيز التدريب المتوافق مع المعايير العالمية",
    paragraph18: "تعزيز السلامة",
    paragraph19: "العمل نحو رفع معايير السلامة في مجال قيادة الشاحنات",
    paragraph20: "المساهمة الاقتصادية",
    paragraph21: "دعم الاقتصاد المحلي من خلال تقديم برامج تدريبية شاملة",
    paragraph22: "تطوير الخبرات",
    paragraph23: "رفع مستوى الخبرة والتدريب في قيادة الشاحنات",
    paragraph24: "تغيير الصورة النمطية",
    paragraph25: "تحويل النظرة التقليدية لمهنة قيادة الشاحنات",
    paragraph26: "دعم قطاع اللوجستيات",
    paragraph27: "تعزيز قطاع الخدمات اللوجستية لرفع كفاءة سلاسل الإمداد",
    paragraph43: "خدماتنا",
    paragraph31: "تدريب قيادة الشاحنات والمعدات",
    paragraph32: "يشمل تدريبنا الجوانب النظرية والعملية لقيادة الشاحنات والمركبات الثقيلة بأمان، مع التركيز على تقنيات القيادة الاقتصادية وأنظمة السلامة الحديثة لحماية السائق والبيئة.",
    paragraph33: "اقرأ المزيد",
    paragraph34: "التحضير لرخصة قيادة الشاحنات الثقيلة",
    paragraph35: "نقوم بإعداد الأفراد لاختبارات رخصة قيادة الشاحنات والحافلات وتشغيل المعدات من خلال مدربين مؤهلين وتوفير المعدات اللازمة، مع ضمان الامتثال لمعايير السلامة والأنظمة المحلية.",
    paragraph36: "اقرأ المزيد",
    paragraph37: "توفير سائقين للشركات في السعودية",
    paragraph38: "نوفر سائقين محترفين ومشغلي معدات ثقيلة للشركات في المملكة العربية السعودية عند الطلب، لتلبية احتياجات مختلف القطاعات، وتبسيط التوظيف بكفاءة، وتعزيز كفاءة المشاريع، والتكيف مع متطلبات السوق.",
    paragraph39: "اقرأ المزيد",
    paragraph40: "تقييم السائقين قبل التوظيف",
    paragraph41: "نوفر فريقاً متخصصاً لتقييم سائقي المعدات الثقيلة والمركبات، لضمان الاحترافية والالتزام بالسلامة وتوصيل البضائع بشكل موثوق. هذا يضمن تسليم البضائع بأمان وموثوقية.",
    paragraph42: "اقرأ المزيد",
    paragraph44: "الأرقام المستهدفة في 2025",
    paragraph45: "تدريب قيادة الشاحنات",
    paragraph46: "تدريب تشغيل المعدات",
    paragraph47: "استشارات تدريبيه",
    paragraph48: "اختبارات كفاءة مهنيه",

    // Added for WHY CHOOSE US
    paragraph49: "لماذا تختارنا؟",
    paragraph50: "ابدأ <span style=\"color: #39ff14;\">رحلة القيادة</span> وتعلم <span style=\"color: #39ff14;\">المهارات</span>",
    paragraph51: "لأننا فرصة حقيقية للطالب، نحن مركز تدريب متخصص يقدم فرصاً استثنائية لتعلم قيادة الشاحنات الثقيلة وصيانة وتشغيل المعدات الثقيلة.",
    paragraph52: "100% آمن",
    paragraph53: "نقدم دورات في قيادة الشاحنات والمعدات الثقيلة مع ضمان سلامة بنسبة 100%.",
    paragraph54: "مواعيد مرنة",
    paragraph55: "نوفر دورات بجدول مرن لتناسب احتياجاتك وأسلوب حياتك المزدحم.",
    paragraph56: "أسعار مناسبة",
    paragraph57: "نقدم تدريباً عالي الجودة بأسعار مناسبة، مما يجعل التطوير المهني متاحاً للجميع.",
    paragraph58: "دعم 24/7",
    paragraph59: "نضمن دعماً متواصلاً على مدار الساعة للرد على أي استفسارات أو مخاوف، مما يوفر راحة البال."
  }
};



  // Toggle menu on trigger click
  document.querySelectorAll(".language-dropdown").forEach(option=>{
      option.addEventListener("click", () => {
      option.children[1].classList.toggle("show")
      option.children[1].classList.toggle("open");
      currentClickeTrigger = option.children[0].children[0];
      
      
      
    });
  });

  // Handle language change
  document.querySelectorAll(".language-option").forEach(option => {
    option.addEventListener("click", () => {
      const selectedLang = option.dataset.lang;
      ChangeContent(selectedLang);
    });
  });

  function changeCssPropertiesForArabic() 
  {
      document.querySelector(".home-content .content").classList.add("arabic");
      document.querySelector(".home-content p").classList.add("arabic");
      document.querySelector(".home-content h1").classList.add("arabic");
      document.querySelector(".home-content h2").classList.add("arabic");
      document.querySelector(".buttons .b1").classList.add("arabic");
      document.querySelector(".buttons .b2").classList.add("arabic");
      document.querySelector(".about-section .about-content h1").classList.add("arabic");
      document.querySelector(".about-section .about-content p").classList.add("arabic");
      document.querySelector(".about-section").classList.add("arabic");
      document.querySelector(".about-section .ceo-content h3").classList.add("arabic");
      document.querySelector(".about-section .ceo-content p").classList.add("arabic");
      document.querySelector(".about-section .ceo-content .text").classList.add("arabic");
      document.querySelector(".about-section .r-2 h1").classList.add("arabic");
      document.querySelectorAll(".about-section .r-2 h4").forEach(el => {
        el.classList.add("arabic");
      });

      document.querySelectorAll(".about-section .r-2 p").forEach(el => {
        el.classList.add("arabic");
      });
      document.querySelectorAll(".services-section .head p").forEach(el => {
        el.classList.add("arabic");
      });
      document.querySelectorAll(".services-section .head h1").forEach(el => {
        el.classList.add("arabic");
      });
      document.querySelectorAll(".service .row .image img").forEach(el => {
        el.classList.add("arabic");
      });
      document.querySelector(".services-section").classList.add("arabic");

      document.querySelectorAll(".services-section .row .service .service-content").forEach(el => {
        el.classList.add("arabic");
      });
      document.querySelectorAll(".services-section .row .service h3").forEach(el => {
        el.classList.add("arabic");
      });
      document.querySelectorAll(".services-section .row .service p").forEach(el => {
        el.classList.add("arabic");
      });
      document.querySelectorAll(".services-section .row .service").forEach(el => {
        el.classList.add("arabic");
      });
      document.querySelectorAll(".kpi-card p").forEach(el => {
        el.classList.add("arabic");
      });
      document.querySelectorAll(".why-card p").forEach(el => {
        el.classList.add("arabic");
      });
      document.querySelectorAll(".whyus-section .whyus-head .p1").forEach(el => {
        el.classList.add("arabic");
      });
      document.querySelectorAll(".whyus-section .whyus-head .p2").forEach(el => {
        el.classList.add("arabic");
      });
      document.querySelectorAll(".whyus-section .whyus-head h1").forEach(el => {
        el.classList.add("arabic");
      });



  }
  function changeCssPropertiesForEnglish()
  {
      document.querySelector(".home-content .content").classList.remove("arabic");
      document.querySelector(".home-content p").classList.remove("arabic");
      document.querySelector(".home-content h1").classList.remove("arabic");
      document.querySelector(".home-content h2").classList.remove("arabic");
      document.querySelector(".buttons .b1").classList.remove("arabic");
      document.querySelector(".buttons .b2").classList.remove("arabic");
      document.querySelector(".about-section .about-content h1").classList.remove("arabic");
      document.querySelector(".about-section .about-content p").classList.remove("arabic");
      document.querySelector(".about-section").classList.remove("arabic");
      document.querySelector(".about-section .ceo-content h3").classList.remove("arabic");
      document.querySelector(".about-section .ceo-content p").classList.remove("arabic");
      document.querySelector(".about-section .ceo-content .text").classList.remove("arabic");
      document.querySelector(".about-section .r-2 h1").classList.remove("arabic");
      document.querySelectorAll(".about-section .r-2 h4").forEach(el => {
        el.classList.remove("arabic");
      });

      document.querySelectorAll(".about-section .r-2 p").forEach(el => {
        el.classList.remove("arabic");
      });
      document.querySelectorAll(".services-section .head p").forEach(el => {
        el.classList.remove("arabic");
      });
      document.querySelectorAll(".services-section .head h1").forEach(el => {
        el.classList.remove("arabic");
      });
      document.querySelectorAll(".service .row .image img").forEach(el => {
        el.classList.remove("arabic");
      });
      document.querySelector(".services-section").classList.remove("arabic");
      document.querySelectorAll(".services-section .row .service .service-content").forEach(el => {
        el.classList.remove("arabic");
      });
      document.querySelectorAll(".services-section .row .service h3").forEach(el => {
        el.classList.remove("arabic");
      });
      document.querySelectorAll(".services-section .row .service p").forEach(el => {
        el.classList.remove("arabic");
      });
      document.querySelectorAll(".services-section .row .service").forEach(el => {
        el.classList.remove("arabic");
      });
      document.querySelectorAll(".kpi-card p").forEach(el => {
        el.classList.remove("arabic");
      });
      document.querySelectorAll(".why-card p").forEach(el => {
        el.classList.remove("arabic");
      });
      document.querySelectorAll(".whyus-section .whyus-head .p1").forEach(el => {
        el.classList.remove("arabic");
      });
      document.querySelectorAll(".whyus-section .whyus-head .p2").forEach(el => {
        el.classList.remove("arabic");
      });
      document.querySelectorAll(".whyus-section .whyus-head h1").forEach(el => {
        el.classList.remove("arabic");
      });
  }

  function ChangeContent(lang)
  {
    console.log(lang);
    
      currentClickeTrigger.textContent = lang.toUpperCase();
      document.querySelector(".paragraph1").textContent = translations[lang].paragraph1;
      document.querySelector(".paragraph2").textContent = translations[lang].paragraph2;
      document.querySelector(".paragraph3").textContent = translations[lang].paragraph3;
      document.querySelector(".paragraph4").textContent = translations[lang].paragraph4;
      document.querySelector(".paragraph5").textContent = translations[lang].paragraph5;
      document.querySelector(".nav-home").textContent = translations[lang].paragraph6;
      document.querySelector(".nav-about").textContent = translations[lang].paragraph7;
      document.querySelector(".nav-services").textContent = translations[lang].paragraph8;
      document.querySelector(".nav-contact").textContent = translations[lang].paragraph9;
      document.querySelector(".paragraph10").textContent = translations[lang].paragraph10;
      document.querySelector(".paragraph11").textContent = translations[lang].paragraph11;
      document.querySelector(".paragraph12").textContent = translations[lang].paragraph12;
      document.querySelector(".paragraph13").textContent = translations[lang].paragraph13;
      document.querySelector(".paragraph14").textContent = translations[lang].paragraph14;
      document.querySelector(".paragraph15").textContent = translations[lang].paragraph15;
      document.querySelector(".paragraph16").textContent = translations[lang].paragraph16;
      document.querySelector(".paragraph17").textContent = translations[lang].paragraph17;
      document.querySelector(".paragraph18").textContent = translations[lang].paragraph18;
      document.querySelector(".paragraph19").textContent = translations[lang].paragraph19;
      document.querySelector(".paragraph20").textContent = translations[lang].paragraph20;
      document.querySelector(".paragraph21").textContent = translations[lang].paragraph21;
      document.querySelector(".paragraph22").textContent = translations[lang].paragraph22;
      document.querySelector(".paragraph23").textContent = translations[lang].paragraph23;
      document.querySelector(".paragraph24").textContent = translations[lang].paragraph24;
      document.querySelector(".paragraph25").textContent = translations[lang].paragraph25;
      document.querySelector(".paragraph26").textContent = translations[lang].paragraph26;
      document.querySelector(".paragraph27").textContent = translations[lang].paragraph27;
      document.querySelector(".paragraph43").textContent = translations[lang].paragraph43;
      document.querySelector(".paragraph31").textContent = translations[lang].paragraph31;
      document.querySelector(".paragraph32").textContent = translations[lang].paragraph32;
      document.querySelector(".paragraph33").textContent = translations[lang].paragraph33;
      document.querySelector(".paragraph34").textContent = translations[lang].paragraph34;
      document.querySelector(".paragraph35").textContent = translations[lang].paragraph35;
      document.querySelector(".paragraph36").textContent = translations[lang].paragraph36;
      document.querySelector(".paragraph37").textContent = translations[lang].paragraph37;
      document.querySelector(".paragraph38").textContent = translations[lang].paragraph38;
      document.querySelector(".paragraph39").textContent = translations[lang].paragraph39;
      document.querySelector(".paragraph40").textContent = translations[lang].paragraph40;
      document.querySelector(".paragraph41").textContent = translations[lang].paragraph41;
      document.querySelector(".paragraph42").textContent = translations[lang].paragraph42;
      document.querySelector(".paragraph45").textContent = translations[lang].paragraph45;
      document.querySelector(".paragraph46").textContent = translations[lang].paragraph46;
      document.querySelector(".paragraph47").textContent = translations[lang].paragraph47;
      document.querySelector(".paragraph48").textContent = translations[lang].paragraph48;
      document.querySelector(".paragraph49").textContent = translations[lang].paragraph49;
      document.querySelector(".paragraph50").innerHTML   = translations[lang].paragraph50; // has <span>
      document.querySelector(".paragraph51").textContent = translations[lang].paragraph51;
      document.querySelector(".paragraph52").textContent = translations[lang].paragraph52;
      document.querySelector(".paragraph53").textContent = translations[lang].paragraph53;
      document.querySelector(".paragraph54").textContent = translations[lang].paragraph54;
      document.querySelector(".paragraph55").textContent = translations[lang].paragraph55;
      document.querySelector(".paragraph56").textContent = translations[lang].paragraph56;
      document.querySelector(".paragraph57").textContent = translations[lang].paragraph57;
      document.querySelector(".paragraph58").textContent = translations[lang].paragraph58;
      document.querySelector(".paragraph59").textContent = translations[lang].paragraph59;


      let head = document.querySelector(".paragraph28");
      let kpiHead = document.querySelector(".paragraph44");
      if(lang === 'ar') 
      {
        head.innerHTML = `<span class="paragraph29" style="color: #39ff14;">خدماتنا</span> وما <span class="paragraph30" style="color: #39ff14;">نقدمه</span>`
        kpiHead.innerHTML = ` <h1 class="paragraph44">الارقام <span style="color: #39ff14;">المستهدفة</span> في <span style="color: #39ff14;">2026</span></h1>`
        changeCssPropertiesForArabic();
      }
      else
      {
          head.innerHTML = `Our <span class="paragraph29" style="color: #39ff14;">Services</span>
                     What We <span
                class="paragraph30" style="color: #39ff14;">Provide</span>`
          kpiHead.innerHTML = `<h1 class="paragraph44">Our <span style="color: #39ff14;">KPI</span> in <span style="color: #39ff14;">2026</span></h1>`
          changeCssPropertiesForEnglish();
      }
      document.querySelectorAll(".language-option").forEach(opt => opt.classList.toggle("active"));

  }

  // document.addEventListener("DOMContentLoaded", () => {
  //       // set default language to Arabic
  //       const defaultLang = "ar";
  //         document.querySelectorAll(".language-dropdown").forEach(option=>{
  //           currentClickeTrigger = option.children[0].children[0];
  //         });
        
  //       ChangeContent(defaultLang);
  // });
