import imgOne from "./assets/imgs/1.jpeg";
import imgTwo from "./assets/imgs/2.jpeg";
import imgThree from "./assets/imgs/3.jpeg";

export interface ProductItem {
  id: number;
  photos: string[];
  price: {
    byn: number;
    rub: number;
    dollars: number;
  };
  params: {
    model: string;
    engine: string;
    transmission: string;
    drive: string;
    mileage: string;
  };
  description: string;
}

export interface Catalog {
  arrivals: ProductItem[];
  stock: ProductItem[];
}

export interface Data {
  catalog: Catalog;
}

const Data = {
  catalog: {
    arrivals: [
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
          drive: "Кардан",
          mileage: "0 km",
        },
        description: "Новый спортбайк с мощным двигателем.",
        photos: [
          imgTwo,
          imgOne,
          imgOne,
          imgOne,
          imgThree,
          imgOne,
          imgTwo,
          imgThree,
        ],
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
          drive: "Кардан",
          model: "Ducati Monster 821",
        },
        description: "Современный мотоцикл с агрессивным дизайном.",
        photos: [
          imgTwo,
          imgOne,
          imgOne,
          imgOne,
          imgThree,
          imgOne,
          imgTwo,
          imgThree,
        ],
      },
      {
        id: 3,
        price: {
          byn: 12000,
          rub: 350000,
          dollars: 4200,
        },
        params: {
          engine: "821cc L-Twin",
          transmission: "6-speed manual",
          mileage: "0 km",
          drive: "Кардан",
          model: "Ducati Monster 821",
        },
        description: "Современный мотоцикл с агрессивным дизайном.",
        photos: [
          imgTwo,
          imgOne,
          imgOne,
          imgOne,
          imgThree,
          imgOne,
          imgTwo,
          imgThree,
        ],
      },
      {
        id: 4,
        price: {
          byn: 12000,
          rub: 350000,
          dollars: 4200,
        },
        params: {
          engine: "821cc L-Twin",
          transmission: "6-speed manual",
          drive: "Кардан",
          mileage: "0 km",
          model: "Ducati Monster 821",
        },
        description: "Современный мотоцикл с агрессивным дизайном.",
        photos: [
          imgTwo,
          imgOne,
          imgOne,
          imgOne,
          imgThree,
          imgOne,
          imgTwo,
          imgThree,
        ],
      },
      {
        id: 5,
        price: {
          byn: 12000,
          rub: 350000,
          dollars: 4200,
        },
        params: {
          engine: "821cc L-Twin",
          transmission: "6-speed manual",
          drive: "Кардан",
          mileage: "0 km",
          model: "Ducati Monster 821",
        },
        description: "Современный мотоцикл с агрессивным дизайном.",
        photos: [
          imgTwo,
          imgOne,
          imgOne,
          imgOne,
          imgThree,
          imgOne,
          imgTwo,
          imgThree,
        ],
      },
      {
        id: 6,
        price: {
          byn: 12000,
          rub: 350000,
          dollars: 4200,
        },
        params: {
          engine: "821cc L-Twin",
          transmission: "6-speed manual",
          mileage: "0 km",
          drive: "Кардан",
          model: "Ducati Monster 821",
        },
        description: "Современный мотоцикл с агрессивным дизайном.",
        photos: [
          imgTwo,
          imgOne,
          imgOne,
          imgOne,
          imgThree,
          imgOne,
          imgTwo,
          imgThree,
        ],
      },
      {
        id: 7,
        price: {
          byn: 12000,
          rub: 350000,
          dollars: 4200,
        },
        params: {
          engine: "821cc L-Twin",
          transmission: "6-speed manual",
          mileage: "0 km",
          drive: "Кардан",
          model: "Ducati Monster 821",
        },
        description: "Современный мотоцикл с агрессивным дизайном.",
        photos: [
          imgTwo,
          imgOne,
          imgOne,
          imgOne,
          imgThree,
          imgOne,
          imgTwo,
          imgThree,
        ],
      },
      {
        id: 8,
        price: {
          byn: 12000,
          rub: 350000,
          dollars: 4200,
        },
        params: {
          engine: "821cc L-Twin",
          transmission: "6-speed manual",
          mileage: "0 km",
          drive: "Кардан",
          model: "Ducati Monster 821",
        },
        description: "Современный мотоцикл с агрессивным дизайном.",
        photos: [
          imgTwo,
          imgOne,
          imgOne,
          imgOne,
          imgThree,
          imgOne,
          imgTwo,
          imgThree,
        ],
      },
      {
        id: 9,
        price: {
          byn: 12000,
          rub: 350000,
          dollars: 4200,
        },
        params: {
          engine: "821cc L-Twin",
          transmission: "6-speed manual",
          mileage: "0 km",
          drive: "Кардан",
          model: "Ducati Monster 821",
        },
        description: "Современный мотоцикл с агрессивным дизайном.",
        photos: [imgTwo, imgTwo],
      },
      {
        id: 10,
        price: {
          byn: 12000,
          rub: 350000,
          dollars: 4200,
        },
        params: {
          engine: "821cc L-Twin",
          transmission: "6-speed manual",
          mileage: "0 km",
          drive: "Кардан",
          model: "Ducati Monster 821",
        },
        description: "Современный мотоцикл с агрессивным дизайном.",
        photos: [imgTwo, imgTwo],
      },
      {
        id: 11,
        price: {
          byn: 12000,
          rub: 350000,
          dollars: 4200,
        },
        params: {
          engine: "821cc L-Twin",
          transmission: "6-speed manual",
          mileage: "0 km",
          drive: "Кардан",
          model: "Ducati Monster 821",
        },
        description: "Современный мотоцикл с агрессивным дизайном.",
        photos: [imgTwo, imgTwo],
      },
    ],
    stock: [
      {
        id: 1,
        price: {
          byn: 95000,
          rub: 280000,
          dollars: 3200,
        },
        params: {
          model: "Yamaha MT-07",
          engine: "689cc Parallel Twin",
          transmission: "6-speed manual",
          mileage: "5000 km",
          drive: "Кардан",
        },
        description: "Лёгкий и манёвренный городской байк.",
        photos: [
          imgTwo,
          imgOne,
          imgOne,
          imgOne,
          imgThree,
          imgOne,
          imgTwo,
          imgThree,
        ],
      },
      {
        id: 2,
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
          drive: "Кардан",
        },
        description: "Лёгкий и манёвренный городской байк.",
        photos: [imgOne, imgOne, imgOne, imgThree, imgOne],
      },
      {
        id: 3,
        price: {
          byn: 95000,
          rub: 280000,
          dollars: 3200,
        },
        params: {
          model: "Yamaha MT-07",
          engine: "689cc Parallel Twin",
          transmission: "6-speed manual",
          mileage: "5000 km",
          drive: "Кардан",
        },
        description: "Лёгкий и манёвренный городской байк.",
        photos: [imgThree, imgOne, imgOne],
      },
      {
        id: 4,
        price: {
          byn: 49000,
          rub: 280000,
          dollars: 3200,
        },
        params: {
          model: "Yamaha MT-07",
          engine: "689cc Parallel Twin",
          transmission: "6-speed manual",
          mileage: "5000 km",
          drive: "Кардан",
        },
        description: "Лёгкий и манёвренный городской байк.",
        photos: [imgOne, imgOne, imgOne],
      },
      {
        id: 5,
        price: {
          byn: 39000,
          rub: 280000,
          dollars: 3200,
        },
        params: {
          model: "Yamaha MT-07",
          engine: "689cc Parallel Twin",
          transmission: "6-speed manual",
          mileage: "5000 km",
          drive: "Кардан",
        },
        description: "Лёгкий и манёвренный городской байк.",
        photos: [imgTwo, imgOne, imgOne],
      },
      {
        id: 6,
        price: {
          byn: 29000,
          rub: 280000,
          dollars: 3200,
        },
        params: {
          model: "Yamaha MT-07",
          engine: "689cc Parallel Twin",
          transmission: "6-speed manual",
          mileage: "5000 km",
          drive: "Кардан",
        },
        description: "Лёгкий и манёвренный городской байк.",
        photos: [imgThree, imgOne, imgOne],
      },
      {
        id: 7,
        price: {
          byn: 91000,
          rub: 280000,
          dollars: 3200,
        },
        params: {
          model: "Yamaha MT-07",
          engine: "689cc Parallel Twin",
          transmission: "6-speed manual",
          mileage: "5000 km",
          drive: "Кардан",
        },
        description: "Лёгкий и манёвренный городской байк.",
        photos: [imgOne, imgOne, imgOne],
      },
      {
        id: 8,
        price: {
          byn: 10000,
          rub: 280000,
          dollars: 3200,
        },
        params: {
          model: "Yamaha MT-07",
          engine: "689cc Parallel Twin",
          transmission: "6-speed manual",
          mileage: "5000 km",
          drive: "Кардан",
        },
        description: "Лёгкий и манёвренный городской байк.",
        photos: [imgTwo, imgOne, imgOne],
      },
      {
        id: 9,
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
          drive: "Кардан",
        },
        description: "Лёгкий и манёвренный городской байк.",
        photos: [imgThree, imgOne, imgOne],
      },
      {
        id: 10,
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
          drive: "Кардан",
        },
        description: "Лёгкий и манёвренный городской байк.",
        photos: [imgOne, imgOne, imgOne],
      },
      {
        id: 11,
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
          drive: "Кардан",
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

export default Data;
