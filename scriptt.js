const listItems = document.querySelectorAll(".faq");

listItems.forEach((faq) => {
  const question = faq.querySelector(".question-nrm-wrapper");
  const answer = faq.querySelector(".question-answer");
  const hideToggle = faq.querySelector(".faq-svg-wrapper");

  question.addEventListener("click", () => {
    const isOpen = answer.classList.contains("open");

    // Close all
    listItems.forEach((item) => {
      item.querySelector(".question-answer").classList.remove("open");
      item.querySelector(".question-nrm-wrapper").classList.remove("active");
      item.querySelector(".faq-svg-wrapper").style.transform = "initial";
    });

    // Toggle this one
    if (!isOpen) {
      answer.classList.add("open");
      question.classList.add("active");
      hideToggle.style.transform = "rotate(45deg)";
    }
  });
});
