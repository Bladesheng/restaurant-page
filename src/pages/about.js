function createAbout() {
  const aboutWrapper = document.createElement("div");
  aboutWrapper.classList.add("aboutWrapper");


  const hoursWrapper = document.createElement("div");
  hoursWrapper.classList.add("hoursWrapper");
  aboutWrapper.appendChild(hoursWrapper);

  const hoursHeading = document.createElement("h2");
  hoursHeading.textContent = "Opening Hours";
  hoursWrapper.appendChild(hoursHeading);

  const monFri = document.createElement("p");
  monFri.textContent = "Monday - Friday";
  hoursWrapper.appendChild(monFri);

  const monFriHours = document.createElement("p");
  monFriHours.textContent = "9:00am - 5:30pm";
  hoursWrapper.appendChild(monFriHours);

  const satSun = document.createElement("p");
  satSun.textContent = "Saturday & Sunday";
  hoursWrapper.appendChild(satSun);

  const satSunHours = document.createElement("p");
  satSunHours.textContent = "10:00am - 4:00pm";
  hoursWrapper.appendChild(satSunHours);


  const phoneEmailWrapper = document.createElement("div");
  phoneEmailWrapper.classList.add("phoneEmailWrapper");
  aboutWrapper.appendChild(phoneEmailWrapper);

  const phoneEmailHeading = document.createElement("h2");
  phoneEmailHeading.textContent = "Contact and reservations";
  phoneEmailWrapper.appendChild(phoneEmailHeading);

  const phone = document.createElement("p");
  phone.textContent = "Phone: ";
  phoneEmailWrapper.appendChild(phone);

  const phoneNum = document.createElement("span");
  phoneNum.textContent = "785 459 123";
  phone.appendChild(phoneNum);

  const email = document.createElement("a");
  email.textContent = "somemail@email.com";
  email.setAttribute("href", "https://youtu.be/dQw4w9WgXcQ");
  phoneEmailWrapper.appendChild(email);
  

  const adressWrapper = document.createElement("div");
  adressWrapper.classList.add("adressWrapper");
  aboutWrapper.appendChild(adressWrapper);

  const adressHeading = document.createElement("h2");
  adressHeading.textContent = "Adress";
  adressWrapper.appendChild(adressHeading);

  const street = document.createElement("p");
  street.textContent = "Some street 86"
  adressWrapper.appendChild(street);

  const city = document.createElement("p");
  city.textContent = "85462 Big City";
  adressWrapper.appendChild(city);


  return aboutWrapper;
}

export default createAbout;