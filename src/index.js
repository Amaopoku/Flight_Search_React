const jobs = [
  {
    title: "Los Angeles to Tokyo",
    image: "Images/tokyo.jpg",
    openPositions: "12",
    link: "flight_search.html",
  },
  {
    title: "NYC to Los Angeles",
    image: "Images/la.jpg",
    openPositions: "3",
    link: "flight_search.html",
  },
  {
    title: "NYC to Dubai",
    image: "Images/dubai.jpg",
    openPositions: "1",
    link: "flight_search.html",
  },
  {
    title: "San Francisco to London",
    image: "Images/london.jpg",
    openPositions: "20",
    link: "flight_search.html",
  },
  {
    title: "Miami to Paris",
    image: "Images/paris.jpg",
    openPositions: "6",
    link: "flight_search.html",
  },
  {
    title: "Chicago to Rome",
    image: "Images/rome.jpg",
    openPositions: "1",
    link: "flight_search.html",
  },
];

const jobsHeading = document.querySelector(".jobs-list-container h2");
const jobsContainer = document.querySelector(".jobs-list-container .jobs");
const jobSearch = document.querySelector(".jobs-list-container .job-search");

let searchTerm = "";

if (jobs.length == 1) {
  jobsHeading.innerHTML = `${jobs.length} Flight Deals`;
} else {
  jobsHeading.innerHTML = `${jobs.length} Flight Deals`;
}

const createJobListingCards = () => {
  jobsContainer.innerHTML = "";

  jobs.forEach((job) => {
    if (job.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      let jobCard = document.createElement("div");
      jobCard.classList.add("job");

      let image = document.createElement("img");
      image.src = job.image;
      image.style.borderRadius = "8px";
      image.style.height = "175px";
      image.style.width = "280px";

      let title = document.createElement("h3");
      title.innerHTML = job.title;
      title.classList.add("job-title");

      let openPositions = document.createElement("span");
      openPositions.classList.add("open-positions");
      if (job.openPositions == 1) {
        openPositions.innerHTML = `${job.openPositions} available seat`;
      } else {
        openPositions.innerHTML = `${job.openPositions} available seats`;
      }

      let detailsBtn = document.createElement("a");
      detailsBtn.href = job.link;
      detailsBtn.innerHTML = "More Details";
      detailsBtn.classList.add("details-btn");

      jobCard.appendChild(image);
      jobCard.appendChild(title);
      jobCard.appendChild(openPositions);
      jobCard.appendChild(detailsBtn);

      jobsContainer.appendChild(jobCard);
    }
  });
};

createJobListingCards();

jobSearch.addEventListener("input", (e) => {
  searchTerm = e.target.value;
  createJobListingCards();
});
