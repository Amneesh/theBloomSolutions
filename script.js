const sections = document.querySelectorAll("main > section");
let isScrolling = false;

let currentSection = 0;
window.addEventListener("wheel", (e) => {
  if (isScrolling) return;
  isScrolling = true;

  if (e.deltaY > 0) {
    currentSection = Math.min(currentSection + 1, sections.length - 1);
  } else {
    currentSection = Math.max(currentSection - 1, 0);
  }

  sections[currentSection].scrollIntoView({ behavior: "smooth" });

  setTimeout(() => {
    isScrolling = false;
  }, 800); // lock time between scrolls
});


// window.addEventListener("load", () => {
//   document.body.classList.add("loaded");
// });
// const track = document.getElementById("promo-track");

// async function fetchPromoLines(sheetId, sheetName = 'Sheet1') {
//   const sheetUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?sheet=${sheetName}&tq=select%20*`;
//   try {
//     const response = await fetch(sheetUrl);
//     const textData = await response.text();

//     const jsonData = JSON.parse(textData.substring(textData.indexOf('{'), textData.lastIndexOf('}') + 1));
//     const rows = jsonData.table.rows;

//     // Clear previous content
//     track.innerHTML = '';

//     // Create promo items
//     rows.forEach(row => {
//       const promoText = row.c[0]?.v || '';

//       const p = document.createElement('p');
//       p.innerHTML = `<i class="fa-solid fa-circle-info"></i> ${promoText}`;
//       track.appendChild(p);
//     });

//     // Duplicate the content for infinite loop effect
//     const clone = track.innerHTML;
//     track.innerHTML += clone;

//     // Add animation class to start scrolling
//     track.classList.add('scrolling');

//   } catch (error) {
//     console.error('Error fetching promo lines:', error);
//   }
// }

// // Call with your Sheet ID and sheet name
// fetchPromoLines('1CKPqUcDt1Y-fZTMopPFhffEa5Gr3GM8hJybsk0Jo_9w', 'promotions');





const toggleBtn1 = document.getElementById('menu-toggle');
const menu = document.getElementById('slide-menu');

toggleBtn1.addEventListener('click', () => {
  const isOpen = menu.classList.contains('active');

  if (isOpen) {
    // Start slide-out
    menu.classList.remove('active');
    toggleBtn1.classList.remove('open');

    // Delay hiding visibility to let transform finish
    setTimeout(() => {
      menu.style.visibility = 'hidden';
    }, 400); // match transition duration
  } else {
    // Show and slide-in
    menu.style.visibility = 'visible';
    menu.classList.add('active');
    toggleBtn1.classList.add('open');
  }
});


// const toggleBtn = document.getElementById('toggleSocial');
// const socialPopup = document.getElementById('socialPopup');

// toggleBtn.addEventListener('click', () => {
//   socialPopup.classList.toggle('hidden');
// });

// document.addEventListener('DOMContentLoaded', function () {
//   const joinUs = document.querySelector('.shake-effect');
//   let hasShaken = false; // to prevent repeated shaking

//   window.addEventListener('scroll', function () {
//     const rect = joinUs.getBoundingClientRect();
//     const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

//     if (isVisible && !hasShaken) {
//       joinUs.classList.add('shake');
//       hasShaken = true;

//       // Optional: remove class after animation ends if you want it reusable
//       setTimeout(() => {
//         joinUs.classList.remove('shake');
//       }, 500);
//     }
//   });
// });
// document.addEventListener("DOMContentLoaded", () => {
//   document.querySelectorAll(".go-to-contact").forEach(button => {
//     button.addEventListener("click", () => {
//       window.location.href = "/contact.html";
//     });
//   });
// });

// document.addEventListener("DOMContentLoaded", () => {
//   document.querySelectorAll(".go-to-boiler").forEach(button => {
//     button.addEventListener("click", () => {
//       window.location.href = "/boilers.html";
//     });
//   });
// });



// document.addEventListener("DOMContentLoaded", () => {
//   document.querySelectorAll(".go-to-portfolio").forEach(button => {
//     button.addEventListener("click", () => {
//       window.location.href = "/portfolio.html";
//     });
//   });
// });






// if (document.body.classList.contains("home-page")) {


//   window.addEventListener("load", () => {
//     const modal = document.getElementById("welcomeModal");
//     const closeBtn = document.getElementById("closeModalBtn");

//     // Check if modal was shown before
//     if (!localStorage.getItem("modalShown")) {
//       modal.classList.add("active");
//     }

//     closeBtn.addEventListener("click", () => {
//       modal.classList.remove("active");
//       localStorage.setItem("modalShown", "true"); // mark as shown
//     });

//     // Optional: close modal if clicking outside content
//     modal.addEventListener("click", (e) => {
//       if (e.target === modal) {
//         modal.classList.remove("active");
//         localStorage.setItem("modalShown", "true"); // mark as shown
//       }
//     });
//   });


//   //   setTimeout(() => {
//   //     // topImg.classList.add("show");
//   //     // bottomImg.classList.add("show");
//   //     overlay.classList.add('show');
//   //   }, 100); // Show after 1 second
//   // });


//   const vertical_slider = {
//     slider_class: ".slider",

//     show_slide(slideIndex, navItem) {
//       const slider = navItem.closest(this.slider_class);
//       const slideContainer = slider.querySelector(".slides");
//       const slides = slideContainer.querySelectorAll(".slide");
//       const navLinks = slider.querySelectorAll(".slide_navigation a");

//       if (!slides[slideIndex]) return;

//       // Update active link
//       navLinks.forEach(link => link.classList.remove("active"));
//       navItem.classList.add("active");

//       if (window.innerWidth >= 1024) {
//         // Desktop: scroll to slide
//         slideContainer.scrollTo({
//           top: slides[slideIndex].offsetTop,
//           behavior: "smooth"
//         });
//       } else {
//         // Mobile: show only active slide
//         slides.forEach(slide => slide.classList.remove("active"));
//         slides[slideIndex].classList.add("active");
//       }
//     },

//     init_slider(slider) {
//       const navLinks = slider.querySelectorAll(".slide_navigation a");

//       navLinks.forEach((link, index) => {
//         link.addEventListener("click", e => {
//           e.preventDefault();
//           this.show_slide(index, link);
//         });
//       });

//       // Set first slide active on mobile by default
//       if (window.innerWidth < 1024) {
//         const slides = slider.querySelectorAll(".slide");
//         if (slides.length) {
//           slides.forEach(s => s.classList.remove("active"));
//           slides[0].classList.add("active");
//         }
//       }
//     },

//     init() {
//       document.querySelectorAll(this.slider_class).forEach(slider => {
//         this.init_slider(slider);

//         // Track scroll position for desktop only
//         const slideContainer = slider.querySelector(".slides");
//         const slides = slideContainer.querySelectorAll(".slide");
//         const navLinks = slider.querySelectorAll(".slide_navigation a");

//         if (window.innerWidth >= 1024) {
//           slideContainer.addEventListener("scroll", () => {
//             let closest = 0;
//             let minDiff = Infinity;

//             slides.forEach((slide, index) => {
//               const diff = Math.abs(slide.offsetTop - slideContainer.scrollTop);
//               if (diff < minDiff) {
//                 minDiff = diff;
//                 closest = index;
//               }
//             });

//             navLinks.forEach((link, i) => {
//               link.classList.toggle("active", i === closest);
//             });
//           });
//         }
//       });
//     }
//   };

//   // Initialize on DOM load
//   const circle = document.getElementById('featureCircle');
//   const desc = document.getElementById('featureDesc');
//   const features = document.querySelectorAll('.feature');

//   function getActiveFeature() {
//     const circleTransform = window.getComputedStyle(circle).transform;

//     if (circleTransform === 'none') return 0;

//     const matrix = new DOMMatrix(circleTransform); // WebKitCSSMatrix works too
//     const angleRad = Math.atan2(matrix.b, matrix.a);
//     const angleDeg = (angleRad * (180 / Math.PI));

//     // Invert rotation to match visual direction
//     const normalized = (360 - angleDeg + 360) % 360;

//     // Each feature is placed every 90 degrees
//     const index = Math.round(normalized / 90) % 4;
//     return index;
//   }

//   function updateDescription() {
//     const index = getActiveFeature();
//     features.forEach((f, i) => {
//       if (i === index) {
//         f.classList.add('active-feature');
//       } else {
//         f.classList.remove('active-feature');
//       }
//     });

//     desc.classList.add('fade-out');

//     const activeFeature = features[index];
//     desc.innerHTML = `
//     <div class = "feature-content-data flex flex-col gap-1 ">
//     <h1>${activeFeature.dataset.title}</h1>
//     <div class="underline"></div>
//     <p> ${activeFeature.dataset.desc}</p>
//     <div class="bagde-flag-wrap">
//       <p href="#" class="bagde-flag"> RED SEAL CERTIFIED </p>
//     </div>
//     </div>`;
//   }
//   // Update description every second
//   setInterval(updateDescription, 10);
//   updateDescription();

//   document.addEventListener("DOMContentLoaded", () => vertical_slider.init());

//   const testimonialsData = [
//     {
//       name: "Ali Altaf",
//       role: "1 review",
//       time: "a month ago",
//       text: "Wonderful experience. Quality work at a very reasonable price. They made sure leak is properly fixed and stayed additional 20 mins to test and confirm. Strongly recommended.",
//       likes: "👍"
//     },
//     {
//       name: "Susi Wang",
//       role: "4 reviews · 2 photos",
//       time: "3 weeks ago",
//       text: "I called a plumber from Facebook but he didn’t show up, I called The bloom solutions, they reached very fast and the technician came in an hour. He equipped a lot of professional equipment and worked with patience. I am very appreciative for his wonderful service.",
//       likes: "❤️"
//     },
//     {
//       name: "Nick Perry",
//       role: "Local Guide · 70 reviews · 49 photos",
//       time: "a month ago",
//       text: "Had a great experience. Showed up on time, was professional, and got the job done quickly. Highly recommend!",
//       likes: "👍"
//     },
//     {
//       name: "Md Rahman",
//       role: "5 reviews",
//       time: "2 weeks ago",
//       text: "Very prompt and affordable service, I am very satisfied, highly recommend people got stuck with any trouble, they do take care with compassion, all the best.",
//       likes: "👍"
//     },
//     {
//       name: "Krista Bowe",
//       role: "1 review",
//       time: "2 months ago",
//       text: "Raj arrived promptly and resolved my plumbing issue in under an hour. He was efficient, professional, and courteous throughout the process. I highly recommend The bloom solutions for fast and reliable service.",
//       likes: "👍"
//     },
//     {
//       name: "Deepkamal Billen",
//       role: "3 reviews",
//       time: "2 months ago",
//       text: "Big help with a little Reno I had for my home, very good communication along with quality work. Highly recommend.",
//       likes: "👍"
//     },
//     {
//       name: "S Mantha",
//       role: "Local Guide · 83 reviews · 87 photos",
//       time: "a month ago",
//       text: "The gentleman tech Mr Raj, who had come to repair was fantastic, very courteous and respectful and did his best to put in an excellent job output. My best wishes to all at The bloom solutions.",
//       likes: "👍"
//     },
//     {
//       name: "Gurminder Gill",
//       role: "1 review",
//       time: "2 months ago",
//       text: "We’ve partnered with The bloom solutions & Drain Services on several renovation projects in the Lower Mainland and Vancouver. The Robust Team has always delivered top quality work. They’re reliable, professional, and quick to respond. Recommended for anyone looking for a solid plumbing company you can count on.",
//       likes: "👍"
//     },
//     {
//       name: "Catherne Gill",
//       role: "4 reviews",
//       time: "a month ago",
//       text: "Raj was quick and professional. He fixed a clogged sink at our salon in Delta and showed up same day. Highly recommend The bloom solutions for any issues.",
//       likes: "👍"
//     },
//     {
//       name: "Steven Purewal",
//       role: "1 review",
//       time: "a month ago",
//       text: "Great Job and service. Highly recommend!",
//       likes: "👍"
//     },
//     {
//       name: "Shawn O'Reilly",
//       role: "2 reviews",
//       time: "a month ago",
//       text: "Quick and fast solved my problem which helped me out greatly.",
//       likes: "👍"
//     },
//     {
//       name: "Bhavjot Dhiman",
//       role: "2 reviews",
//       time: "a month ago",
//       text: "Great quality work and professionalism.",
//       likes: "👍"
//     },
//     {
//       name: "Levin Shum",
//       role: "10 reviews · 1 photo",
//       time: "3 days ago",
//       text: "Shaun replied to my messages promptly. It’s a service call for water heater tank replacement. Their rates are reasonable. Worry free! I recommend them.",
//       likes: "👍"
//     },
//     {
//       name: "Vik P",
//       role: "5 reviews",
//       time: "4 days ago",
//       text: "The guys at Robust are very knowledgeable and precise. Resolved the issue quick and efficiently. Great service!",
//       likes: "👍"
//     },
//     {
//       name: "DIAMOND TREE SERVICE LTD",
//       role: "2 reviews · 6 photos",
//       time: "a month ago",
//       text: "We appreciate your support and are glad you had a positive experience. Feel free to reach out anytime you need us!",
//       likes: "👍"
//     }
//   ];



//   const colors = [
//     '#0000FF',
//     '#ADD8E6',
//     '#00008B',
//     '#002347',
//     '#e5eef7',
//     '#ccddef',
//     '#FF0000',
//     '#FFCCCB',
//     '#8B0000'
//   ];

//   document.addEventListener("DOMContentLoaded", () => {
//     function counter(id, start, end, duration) {
//       let obj = document.getElementById(id),
//         current = start,
//         range = end - start,
//         increment = end > start ? 1 : -1,
//         step = Math.abs(Math.floor(duration / range));

//       const timer = setInterval(() => {
//         current += increment;
//         obj.textContent = current + ' +';
//         if (current === end) clearInterval(timer);
//       }, step);
//     }

//     let hasAnimated = false;

//     const observer = new IntersectionObserver(entries => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting && !hasAnimated) {
//           hasAnimated = true;
//           counter("count1", 0, 400, 3000);
//           counter("count2", 100, 50, 2500);
//           counter("count3", 0, 40, 3000);
//           // counter("count4", 0, 40, 3000);
//         }
//       });
//     }, { threshold: 0.5 });

//     observer.observe(document.getElementById('whoWeAre'));
//   });

//   function truncateWords(str, limit) {
//     const words = str.split(' ');
//     if (words.length <= limit) return str;
//     return words.slice(0, limit).join(' ') + '...';
//   }


//   // Create testimonial divs dynamically
//   const track = document.getElementById('track');
//   track.innerHTML = ''; // Clear if needed

//   testimonialsData.forEach(test => {
//     const firstLetter = test.name.charAt(0).toUpperCase();
//     const colorIndex = firstLetter.charCodeAt(0) % colors.length;
//     const bgColor = colors[colorIndex];

//     const testimonialHTML = `

//      <div class="testimonial-card flex flex-col justify-between items-center">
       
//         <div class="t-card-body">
//         <p class="t-card-body-text">${truncateWords(test.text, 30)}</p>
//         </div>
        
       
//      <div class ="testimonial-card-data">
//        <div class="t-card-header flex flex-row justify-start items-center gap-1">
       
//        <div class="user-pic">   
//         <div class="avatar" style="background-color: ${bgColor};">${firstLetter}</div>
//        </div> 

//        <div class="user-name">
//            <h5>${test.name}</h5>
//            <p> ${test.role}</p>
//       </div>

//         </div>
      
//       </div>
         
//         </div>
     

      

    
//   `;

//     // Create a container and set innerHTML to safely parse the string into DOM elements
//     const wrapper = document.createElement('div');
//     wrapper.innerHTML = testimonialHTML;

//     // Append the parsed element to the track
//     track.appendChild(wrapper.firstElementChild);
//   });


//   if (track) {
//     const cards = track.querySelectorAll('.testimonial-card');

//     let scrollX = 0;
//     const speed = 1;

//     function animateScroll() {
//       scrollX += speed;
//       if (scrollX >= track.scrollWidth / 2) {
//         scrollX = 0;
//       }
//       track.style.transform = `translateX(${-scrollX}px)`;
//       highlightCenterCard();
//       requestAnimationFrame(animateScroll);
//     }

//     function highlightCenterCard() {
//       const containerCenter = window.innerWidth / 2;
//       cards.forEach(card => {
//         const rect = card.getBoundingClientRect();
//         const cardCenter = rect.left + rect.width / 2;
//         const distance = Math.abs(containerCenter - cardCenter);
//         if (distance < rect.width / 2) {
//           card.classList.add('focused');

//         } else {
//           card.classList.remove('focused');

//         }
//       });
//     }

//     animateScroll();
//   }

//   document.querySelectorAll('.service-card').forEach(card => {
//     card.addEventListener('click', () => {
//       const service = card.dataset.service;
//       // Navigate to boilers.html with service query param
//       window.location.href = `boilers.html?service=${service}`;
//     });
//   });




// }
// document.addEventListener("DOMContentLoaded", () => {
//   const subscribedEmail = sessionStorage.getItem("subscribedEmail");

//   if (subscribedEmail) {
//     console.log("User already subscribed with:", subscribedEmail);

//     const subform = document.querySelector('.subscribe-form');
//     const subSuccess = document.getElementById("subSuccess");
//     const subHeading = document.getElementById("subHeading");

//     subform.style.display = "none";
//     subHeading.style.display = "none";
//     subSuccess.style.display = "flex";
//   }
// });

// async function handleSubscribe(event) {
//   event.preventDefault(); // Prevents page reload

//   const emailInput = document.getElementById('subEmail');
//   const email = emailInput.value.trim();
//   const subform = document.querySelector('.subscribe-form');
//   const subSuccess = document.getElementById("subSuccess");
//   const subFail = document.getElementById("subFail");
//   const subHeading = document.getElementById("subHeading");

//   // Hide previous messages
//   subSuccess.style.display = "none";
//   subFail.style.display = "none";

//   if (!email) return;

//   const name = 'robust subscription';
//   const message = `The bloom solutions subscribed by new user: ${email}`;
//   const to = "amneeshsingh5@gmail.com";
//   const subject = `The bloom solutions website inquiry from ${name}`;
//   const html = `
//     <h2>New Inquiry from Website</h2>
//     <p><strong>Name:</strong> ${name}</p>
//     <p><strong>Email:</strong> ${email}</p>
//     <p><strong>Message:</strong><br>${message}</p>
//   `;

//   try {
//     const res = await fetch("https://email-backend-live.vercel.app/api/email", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ name, email, message, to, subject, html }),
//     });

//     if (res.ok) {
//       subHeading.style.display = "none";
//       subform.style.display = "none";
//       subSuccess.style.display = "flex";
//       emailInput.value = ""; // clear input
//       sessionStorage.setItem("subscribedEmail", email);
//     } else {
//       subFail.style.display = "flex";
//     }
//   } catch (err) {
//     console.error("Fetch error:", err);
//     subFail.style.display = "flex";
//   }
// }



// document.getElementById('footerCopyright').innerHTML = `
//    <p> &copy; <span id="year">${new Date().getFullYear()}</span> copyright reserved by <a href="mailto:amneeshsingh5@gmail.com" class="color-accent-light"> amneeshsingh5@gmail.com </a>. All rights reserved.</p>`
