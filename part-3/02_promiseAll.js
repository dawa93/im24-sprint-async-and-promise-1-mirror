var newsURL = "http://localhost:5000/data/latestNews";
var weatherURL = "http://localhost:5000/data/weather";

function getNewsAndWeatherAll() {
  // TODO: Promise.all을 이용해 작성합니다
  let news = fetch(newsURL).then((res) => res.json());
  let weather = fetch(weatherURL).then((res) => res.json());

  return Promise.all([news, weather]).then((res) => {
    return { news: res[0].data, weather: res[1] };
  });

  // let news = fetch(newsURL);
  // let weather = fetch(weatherURL);

  // return Promise.all([news, weather])
  //   .then((res) => res.map((el) => el.json()))
  //   .then((data) => Promise.all(data))
  //   .then((data) => {
  //     return { news: data[0].data, weather: data[1] };
  //   });
}

if (typeof window === "undefined") {
  module.exports = {
    getNewsAndWeatherAll,
  };
}
