// animations.js

document.addEventListener("DOMContentLoaded", () => {
    const animationClasses = {
      "animate-fade-in": {
        opacity: [0, 1],
        transform: ["none", "none"]
      },
      "animate-slide-up": {
        opacity: [0, 1],
        transform: ["translateY(20px)", "translateY(0)"]
      },
      "animate-slide-down": {
        opacity: [0, 1],
        transform: ["translateY(-20px)", "translateY(0)"]
      },
      "animate-slide-left": {
        opacity: [0, 1],
        transform: ["translateX(20px)", "translateX(0)"]
      },
      "animate-slide-right": {
        opacity: [0, 1],
        transform: ["translateX(-20px)", "translateX(0)"]
      },
      "animate-zoom-in": {
        opacity: [0, 1],
        transform: ["scale(0.8)", "scale(1)"]
      },
      "animate-fade-zoom": {
        opacity: [0, 1],
        transform: ["scale(0.9)", "scale(1)"]
      },
      "animate-rotate-in": {
        opacity: [0, 1],
        transform: ["rotate(-180deg)", "rotate(0deg)"]
      },
      "animate-flip-x": {
        opacity: [0, 1],
        transform: ["rotateX(90deg)", "rotateX(0deg)"]
      },
      "animate-flip-y": {
        opacity: [0, 1],
        transform: ["rotateY(90deg)", "rotateY(0deg)"]
      },
      "animate-blur-in": {
        opacity: [0, 1],
        transform: ["none", "none"],
        filter: ["blur(8px)", "blur(0px)"]
      }
    };
  
    const defaultDuration = "0.8s";
    const defaultEasing = "ease-out";
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          for (const [animClass, config] of Object.entries(animationClasses)) {
            if (el.classList.contains(animClass)) {
              const delay = el.dataset.delay || "0s";
              el.style.transition = `all ${defaultDuration} ${defaultEasing} ${delay}`;
              el.style.opacity = config.opacity?.[1] ?? 1;
              el.style.transform = config.transform?.[1] ?? "none";
              if (config.filter) {
                el.style.filter = config.filter[1];
              }
            }
          }
          observer.unobserve(el); // animate once
        }
      });
    }, { threshold: 0.1 });
  
    for (const [animClass, config] of Object.entries(animationClasses)) {
      document.querySelectorAll(`.${animClass}`).forEach(el => {
        el.style.opacity = config.opacity?.[0] ?? 0;
        el.style.transform = config.transform?.[0] ?? "none";
        if (config.filter) {
          el.style.filter = config.filter[0];
        }
        el.style.transition = "none";
        observer.observe(el);
      });
    }
  });
  