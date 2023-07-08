const URL = "http://localhost:3000/films";

async function getFilms() {
  const response = await fetch(URL);

  if (response.status === 200) {
    const jsonData = await response.json();
    const films = jsonData;

    return films;
  } else {
    throw new Error("Error getting films");
  }
}

async function buyTicket(filmId) {
  const response = await fetch(URL + "/" + filmId, {
    method: "POST",
  });

  if (response.status === 200) {
    return true;
  } else {
    return false;
  }
}

export { getFilms, buyTicket };
const URL = "http://localhost:3000/films";

async function getFilms() {
  const response = await fetch(URL);

  if (response.status === 200) {
    const jsonData = await response.json();
    const films = jsonData;

    return films;
  } else {
    throw new Error("Error getting films");
  }
}

async function buyTicket(filmId) {
  const response = await fetch(URL + "/" + filmId, {
    method: "POST",
  });

  if (response.status === 200) {
    return true;
  } else {
    return false;
  }
}

export { getFilms, buyTicket };
