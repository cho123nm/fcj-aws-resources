// Tìm kiếm tài liệu
const searchInput = document.getElementById("searchInput");
const resourceCards = document.querySelectorAll(".resource-card");

searchInput.addEventListener("input", function (e) {
  const searchTerm = e.target.value.toLowerCase().trim();

  resourceCards.forEach((card) => {
    const title = card.querySelector("h3").textContent.toLowerCase();
    const description = card
      .querySelector(".card-description")
      .textContent.toLowerCase();
    const category = card.getAttribute("data-category");

    if (
      title.includes(searchTerm) ||
      description.includes(searchTerm) ||
      category.includes(searchTerm)
    ) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });

  // Hiển thị thông báo nếu không tìm thấy
  const visibleCards = Array.from(resourceCards).filter(
    (card) => !card.classList.contains("hidden")
  );
  if (visibleCards.length === 0 && searchTerm !== "") {
    showNoResultsMessage();
  } else {
    hideNoResultsMessage();
  }
});

// Hiển thị thông báo không tìm thấy kết quả
function showNoResultsMessage() {
  let noResultsMsg = document.getElementById("noResultsMessage");
  if (!noResultsMsg) {
    noResultsMsg = document.createElement("div");
    noResultsMsg.id = "noResultsMessage";
    noResultsMsg.style.cssText = `
            text-align: center;
            color: white;
            padding: 30px;
            font-size: 1.2rem;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 12px;
            margin: 20px 0;
        `;
    noResultsMsg.textContent = "😔 Không tìm thấy tài liệu nào phù hợp";
    document
      .querySelector(".container")
      .insertBefore(noResultsMsg, document.querySelector(".resource-section"));
  }
  noResultsMsg.style.display = "block";
}

// Ẩn thông báo không tìm thấy kết quả
function hideNoResultsMessage() {
  const noResultsMsg = document.getElementById("noResultsMessage");
  if (noResultsMsg) {
    noResultsMsg.style.display = "none";
  }
}

// Thêm hiệu ứng khi scroll
window.addEventListener("scroll", function () {
  const cards = document.querySelectorAll(".resource-card:not(.hidden)");
  cards.forEach((card, index) => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (cardTop < windowHeight - 100) {
      setTimeout(() => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "all 0.5s ease";

        setTimeout(() => {
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }, 50);
      }, index * 50);
    }
  });
});

// Thêm animation khi load trang
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".resource-card");
  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";

    setTimeout(() => {
      card.style.transition = "all 0.5s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 100);
  });
});
