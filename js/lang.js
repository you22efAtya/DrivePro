
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
        paragraph10:"More About Us",
        paragraph11:`We achieve excellence through our qualified 
                    and specialized team, as well as a stimulating 
                    learning environment that prepares drivers and 
                    technicians for the modern transportation industry.`,
        paragraph12:"Abdullah Alghamdi",
        paragraph13:"CEO",
        paragraph14:"Leading the transformation of professional driving education."
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
        paragraph13:"مدير تنفيذي",
        paragraph14:"الريادة في تحويل تعليم القيادة الاحترافية."


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
