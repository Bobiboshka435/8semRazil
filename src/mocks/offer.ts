import { FullOffer } from "../types/offer";

const mockOffers: FullOffer[] = [
    {
        id: "1",
        title: "Уютная квартира в центре",
        type: "apartment",
        price: 120,
        city: {
            name: "Москва",
            location: {
                latitude: 55.7558,
                longitude: 37.6173,
                zoom: 12,
            },
        },
        location: {
            latitude: 55.751,
            longitude: 37.618,
            zoom: 15,
        },
        isFavorite: false,
        isPremium: true,
        rating: 4.7,
        description: "Просторная квартира с видом на Кремль.",
        bedrooms: 2,
        goods: ["Wi-Fi", "Кухня", "Кондиционер"],
        host: {
            name: "Анна",
            avatarUrt: "avatar-angelina.jpg",
            isPro: true,
        },
        images: [
            "kremlnkvartira.webp",
            "kremlnkvartira1.webp",
            "kremlnkvartira2.webp",
            "kremlnkvartira3.webp",
            "kremlnkvartira4.webp",
            "kremlnkvartira5.webp",
        ],
        maxAdults: 4,
    },
    {
        id: "2",
        title: "Просторный дом с садом",
        type: "house",
        price: 250,
        city: {
            name: "Санкт-Петербург",
            location: {
                latitude: 59.9343,
                longitude: 30.3351,
                zoom: 12,
            },
        },
        location: {
            latitude: 59.931,
            longitude: 30.338,
            zoom: 15,
        },
        isFavorite: true,
        isPremium: false,
        rating: 4.5,
        description: "Дом с террасой и большим садом.",
        bedrooms: 4,
        goods: ["Парковка", "Wi-Fi", "Бассейн"],
        host: {
            name: "Иван",
            avatarUrt: "avatar-max.jpg",
            isPro: false,
        },
        images: [
            "domwithsad.webp",
            "domwithsad1.webp",
            "domwithsad2.webp",
            "domwithsad3.webp",
            "domwithsad4.webp",
            "domwithsad5.webp",
        ],
        maxAdults: 6,
    },
    {
        id: "3",
        title: "Роскошный отель с видом на море",
        type: "hotel",
        price: 350,
        city: {
            name: "Сочи",
            location: {
                latitude: 43.6028,
                longitude: 39.7342,
                zoom: 12,
            },
        },
        location: {
            latitude: 43.600,
            longitude: 39.730,
            zoom: 15,
        },
        isFavorite: false,
        isPremium: true,
        rating: 4.8,
        description: "Комфортабельные номера с панорамным видом.",
        bedrooms: 1,
        goods: ["Ресторан", "Wi-Fi", "Фитнес-центр"],
        host: {
            name: "Гранд Отель",
            avatarUrt: "avatar-max.jpg",
            isPro: true,
        },
        images: [
            "otelwithmore.webp",
            "otelwithmore1.webp",
            "otelwithmore2.webp",
            "otelwithmore3.webp",
            "otelwithmore4.webp",
            "otelwithmore5.webp",
        ],
        maxAdults: 2,
    },
    {
        id: "4",
        title: "Гостевой дом в горах",
        type: "guesthouse",
        price: 90,
        city: {
            name: "Красная Поляна",
            location: {
                latitude: 43.6803,
                longitude: 40.2104,
                zoom: 12,
            },
        },
        location: {
            latitude: 43.678,
            longitude: 40.208,
            zoom: 15,
        },
        isFavorite: true,
        isPremium: false,
        rating: 4.3,
        description: "Тихое место среди природы.",
        bedrooms: 2,
        goods: ["Wi-Fi", "Завтрак", "Камин"],
        host: {
            name: "Алексей",
            avatarUrt: "avatar.svg",
            isPro: false,
        },
        images: [
            "domwithgori.webp",
            "domwithgori1.webp",
            "domwithgori2.webp",
            "domwithgori3.webp",
            "domwithgori4.webp",
            "domwithgori5.webp",
        ],
        maxAdults: 3,
    },
];

export default mockOffers;
