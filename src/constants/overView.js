import { v4 } from "uuid";

export const OVERVIEW = [
    {
        id: v4(),
        planet: "Mercury",
        description: "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
        image: "./public/assets/images/planet-mercury.svg",
        rotation: '58.6 DAYS',
        revolution: '87.97 DAYS',
        radius: '2,439.7 KM',
        temperature: '430°C'
    },
    {
        id: v4(),
        planet: "Venus",
        description: "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
        image: "./public/assets/images/planet-venus.svg",
        rotation: '243 DAYS',
        revolution: '224.7 DAYS',
        radius: '6,051.8 KM',
        temperature: '471°C'
    },
    {
        id: v4(),
        planet: "Earth",
        description: "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
        image: "./public/assets/images/planet-earth.svg",
        rotation: '0.99 DAYS',
        revolution: '365.26 DAYS',
        radius: '6,371 KM',
        temperature: '16°C'
    },
];
