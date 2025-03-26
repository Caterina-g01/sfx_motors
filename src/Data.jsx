import imgOne from "./assets/imgs/1.jpeg";

export const Data = {
  catalog: {
    arrivels: [
      {
        id: 1,
        price: {
          byn: 10000,
          rub: 300000,
          dollars: 3500,
        },
        params: {
          model: "MV Agusta Dragster 800 RR",
          engine: "798cc 3-cylinder",
          transmission: "6-speed manual",
          mileage: "0 km",
        },
        description: "Новый спортбайк с мощным двигателем.",
        photos: [imgOne, imgOne, imgOne],
      },
      {
        id: 2,
        price: {
          byn: 12000,
          rub: 350000,
          dollars: 4200,
        },
        params: {
          engine: "821cc L-Twin",
          transmission: "6-speed manual",
          mileage: "0 km",
          model: "Ducati Monster 821",
        },
        description: "Современный мотоцикл с агрессивным дизайном.",
        photos: [imgOne, imgOne],
      },
    ],
    stock: [
      {
        id: 1,
        price: {
          byn: 9000,
          rub: 280000,
          dollars: 3200,
        },
        params: {
          model: "Yamaha MT-07",
          engine: "689cc Parallel Twin",
          transmission: "6-speed manual",
          mileage: "5000 km",
        },
        description: "Лёгкий и манёвренный городской байк.",
        photos: [imgOne, imgOne, imgOne],
      },
    ],
  },
  configs: {
    showcase: [
      {
        id: 1,
        image: imgOne,
        model: "Yamaha MT-07",
      },
    ],
  },
};
