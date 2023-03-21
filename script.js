function modal ({modalBodyWindow, modalCenterWindow, modalBtn, modalCloseBtn}) {
   const modalMain = document.querySelector(modalBodyWindow);
   const modalWindow = document.querySelector(modalCenterWindow);
   const openModalBtn = document.querySelector(modalBtn);
   const closeModalBtn = document.querySelector(modalCloseBtn);
   const body = document.querySelector("body");
   function openModal() {
      modalMain.style.visibility = "visible";
      modalWindow.style.transform = "translateY(0%)";
      modalWindow.style.opacity = 1;
   }
   function closeModal(e) {
      if (e.target == modalMain || e.target == closeModalBtn) {
         modalWindow.style.transform = "translateY(-200%)";
         modalWindow.style.opacity = 0;
         modalMain.style.visibility = "hidden";
      }
   }
   openModalBtn.addEventListener("click", openModal);
   closeModalBtn.addEventListener("click", closeModal);
   modalMain.addEventListener("mouseup", closeModal);
   modalMain.addEventListener("touchstart", closeModal);
}
modal({
   modalBodyWindow: ".header__modal",
   modalCenterWindow: ".modal-login__body",
   modalBtn: ".btns-block-header__login-btn",
   modalCloseBtn: ".modal-login__close",
});
modal({
   modalBodyWindow: ".header__modal-tryit",
   modalCenterWindow: ".modal-tryit__body",
   modalBtn: ".btns-block-header__try-btn",
   modalCloseBtn: ".modal-tryit__close",
});
   window.addEventListener("resize", slider);
   if (window.innerWidth <= 1381) {
      console.log(window.innerWidth);
   }
function slider () {
   const sliderContainerWidth = document.querySelector(".body-platforms").offsetWidth;
   const sliderItem = document.querySelectorAll(".body-platforms__item");
   const prev = document.querySelector(".body-platforms__prev");
   const next = document.querySelector(".body-platforms__next");
   let count = 0;
   console.log(count)
   function prevFunc () {
      if (count == 1) {
         return;
      }
      else if (count == 0 && sliderContainerWidth <= 580) {
         return;
      }
      else count++
      sliderItem.forEach((item) => {
         item.style.transform = `translateX(${count * 240}px)`;
      })
   }
   function nextFunc () {
      if (count == -1 && sliderContainerWidth >= 1030) {
         return;
      }
      else if (count == -2 && sliderContainerWidth >= 780) {
         return;
      }
      else if (count == -4) {
         return;
      }
      else count--
      sliderItem.forEach((item) => {
         item.style.transform = `translateX(${count * 240}px)`;
      })
   }
   prev.addEventListener("click", prevFunc);
   next.addEventListener("click", nextFunc);
}
slider();
function podcasts() {
   const viewAll = document.querySelector(".podcasts__explore-btn");
   const columnWindow = document.querySelector(".podcasts__columns");
   const btnBlock = document.querySelector(".podcasts__explore");
   const podcastElems = document.querySelectorAll(".columns-podcast__body");
   const podcastBody = document.querySelector(".podcasts__columns");
   const allBtn = document.querySelector("#btn-all"),
         design = document.querySelector("#btn-design"),
         development = document.querySelector("#btn-dev"),
         marketing = document.querySelector("#btn-marketing"),
         health = document.querySelector("#btn-health");
         window.addEventListener('resize', () => {
            if (window.innerWidth <= 470) {
               podcastBody.style.maxHeight = "275px";
            }
            else if (window.innerWidth <= 530) {
               podcastBody.style.maxHeight = "310px";
            }
            else podcastBody.style.maxHeight = "372px";
         })
   function displayNone () {
      podcastElems.forEach((item) => {
         item.style.display = 'none';
         viewAll.style.display = "none";
      })
   }
   function desFilter() {
      displayNone();
      podcastBody.children[1].style.display = 'flex';
      podcastBody.children[2].style.display = 'flex';
   }
   function devFilter() {
      displayNone();
      podcastBody.children[3].style.display = 'flex';
   }
   function markFilter() {
      displayNone();
      podcastBody.children[1].style.display = 'flex';
      podcastBody.children[2].style.display = 'flex';
      podcastBody.children[3].style.display = 'flex';
   }
   function healthFilter() {
      displayNone();
      podcastBody.children[0].style.display = 'flex';
   }
   function all() {
      podcastElems.forEach((item) => {
         item.style.display = 'flex';
      })
      viewAll.style.display = "flex";
      columnWindow.style.height = "372px";
      columnWindow.style.overflow = "hidden";
      btnBlock.style.visibility = "visible";
         if (window.innerWidth <= 470) {
            podcastBody.style.maxHeight = "275px";
         }
         else if (window.innerWidth <= 530) {
            podcastBody.style.maxHeight = "310px";
         }
   }
   allBtn.addEventListener("click", all);
   design.addEventListener("click", desFilter);
   development.addEventListener("click", devFilter);
   marketing.addEventListener("click", markFilter);
   health.addEventListener("click", healthFilter);

   viewAll.addEventListener("click", () => {
      columnWindow.style.height = "auto";
      columnWindow.style.overflow = "visible";
      btnBlock.style.visibility = "hidden";
      podcastBody.style.maxHeight = "none";
   });
}
// &#128473;
podcasts();
function spoiler () {
   const openClose = document.querySelectorAll(".faq-main__title-container");
   const spoilers = document.querySelectorAll(".faq-main__spoiler-container");
   const open = document.querySelectorAll(".faq-main__open");
   const close = document.querySelectorAll(".faq-main__close");
   openClose.forEach((item) => {
      item.addEventListener("click", () => {
         item.nextElementSibling.classList.toggle("faq-main__spoiler-container-open");
         if (item.children[0].style.display != 'none') {
            item.children[1].style.display = 'flex';
            item.children[0].style.display = 'none';
         }
         else {
            item.children[0].style.display = 'flex';
            item.children[1].style.display = 'none';
         }
      })
   })
}
spoiler();
