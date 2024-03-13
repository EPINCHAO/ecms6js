let floats = [
  {
    city: "Quito",
    streetName: "Av Shirys",
    streetNumber: "N10-324",
    areaSize: 23,
    yearBuild: 2023,
    rentPrice: 234,
    dateAvailable: "20-Ago-2023",
    hasAc: true,
  },
  {
    city: "Quito",
    streetName: "Av Montalvo",
    streetNumber: "N12-324",
    areaSize: 63,
    yearBuild: 2010,
    rentPrice: 294,
    dateAvailable: "10-Ago-2021",
    hasAc: true,
  },
  {
    city: "Ibarra",
    streetName: "Av Atahualpa",
    streetNumber: "50-34",
    areaSize: 239,
    yearBuild: 2022,
    rentPrice: 2304,
    dateAvailable: "10-Ago-2023",
    hasAc: false,
  },
  {
    city: "Atuntaqui",
    streetName: "Av Juan Leo Mera",
    streetNumber: "13-24",
    areaSize: 400,
    yearBuild: 2021,
    rentPrice: 244,
    dateAvailable: "20-Ago-2009",
    hasAc: true,
  },
];

let cityFilter = "Quito";
let areaMinFilter = 0;
let areaMaxFilter = 500;
let priceMinFilter = "20";
let priceMaxFilter = "400";
//city
floats = floats.filter(function (item) {
  if (cityFilter == "" || item.city.toLowerCase() == cityFilter.toLowerCase()) {
    return item;
  }
});
//areaMin
floats = floats.filter(function (item) {
  if (item.areaSize > areaMinFilter && item.areaSize < areaMaxFilter) {
    return item;
  }
});
