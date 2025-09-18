document.querySelectorAll(".select_menu").forEach(menu => {
  const select = menu.querySelector(".select");
  const selectHead = menu.querySelector(".select_head");
  const optionList = menu.querySelector(".option_list");
  const options = menu.querySelectorAll(".option");
  const selectArrow = menu.querySelector(".select i");
  let isOpen = false;
  select.addEventListener("click", (e) => {
    e.stopPropagation();
    // Əvvəlcə bütün digər select-ləri bağla
    closeAllSelectsExcept(menu);
    isOpen = !isOpen;
    if (isOpen) {
      optionList.style.maxHeight = optionList.scrollHeight + "px";
      selectArrow.classList.add("rotate");
    } else {
      optionList.style.maxHeight = "0";
      selectArrow.classList.remove("rotate");
    }
  });
  // Secilen option-u select_head-e ver
  options.forEach((option) => {
    option.addEventListener("click", () => {
      options.forEach((opt) => opt.classList.remove("selected"));
      selectHead.innerHTML = option.innerHTML;
      option.classList.add("selected");
      // console.log(option.textContent);
      optionList.style.maxHeight = "0";
      selectArrow.classList.remove("rotate");
      isOpen = false;
    });
  });
  // Kənara klik olduqda bağla
  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target)) {
      optionList.style.maxHeight = "0";
      selectArrow.classList.remove("rotate");
      isOpen = false;
    }
  });
});

// ✅ Bütün digərlərini bağla
function closeAllSelectsExcept(currentMenu) {
  document.querySelectorAll(".select_menu").forEach(menu => {
    if (menu !== currentMenu) {
      const optionList = menu.querySelector(".option_list");
      const selectArrow = menu.querySelector(".select i");
      optionList.style.maxHeight = "0";
      selectArrow.classList.remove("rotate");
      // isOpen statusu burada local olduğu üçün ayrıca idarə olunmur
    }
  });
}
