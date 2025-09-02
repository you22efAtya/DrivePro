
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
    paragraph14: "Leading the transformation of professional driving education.",

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
    paragraph27: "Strengthening the logistics sector to enhance supply chain efficiency"
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
    paragraph14: "الريادة في تحويل تعليم القيادة الاحترافية.",

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
    paragraph27: "تعزيز قطاع اللوجستيات لرفع كفاءة سلاسل الإمداد"
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
      if(lang === 'ar') 
      {
          changeCssPropertiesForArabic();
      }
      else
      {
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
