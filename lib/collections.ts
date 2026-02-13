// Product collections data
export interface Collection {
    id: string;
    name: string;
    images: string[];
    coverImage: string;
    description?: string;
}

export const collections: Collection[] = [
    {
        id: "3",
        name: "Collection 3",
        coverImage: "/assets/final-collection/3/IMG-20260202-WA0058.jpg",
        images: [
            "/assets/final-collection/3/IMG-20260202-WA0058.jpg",
            "/assets/final-collection/3/IMG-20260202-WA0059.jpg",
            "/assets/final-collection/3/IMG-20260202-WA0060.jpg",
            "/assets/final-collection/3/IMG-20260202-WA0061.jpg",
        ],
        description: "Explore our latest designs from Collection 3"
    },
    {
        id: "5",
        name: "Collection 5",
        coverImage: "/assets/final-collection/5/IMG-20260202-WA0042.jpg",
        images: [
            "/assets/final-collection/5/IMG-20260202-WA0042.jpg",
            "/assets/final-collection/5/IMG-20260202-WA0044.jpg",
            "/assets/final-collection/5/IMG-20260202-WA0049.jpg",
            "/assets/final-collection/5/IMG-20260202-WA0050.jpg",
            "/assets/final-collection/5/IMG-20260202-WA0051.jpg",
            "/assets/final-collection/5/IMG-20260202-WA0052.jpg",
        ],
        description: "Explore our latest designs from Collection 5"
    },
    {
        id: "6",
        name: "Collection 6",
        coverImage: "/assets/final-collection/6/IMG-20260202-WA0027.jpg",
        images: [
            "/assets/final-collection/6/IMG-20260202-WA0027.jpg",
            "/assets/final-collection/6/IMG-20260202-WA0028.jpg",
            "/assets/final-collection/6/IMG-20260202-WA0029.jpg",
            "/assets/final-collection/6/IMG-20260202-WA0030.jpg",
            "/assets/final-collection/6/IMG-20260202-WA0031.jpg",
        ],
        description: "Explore our latest designs from Collection 6"
    },
    {
        id: "7",
        name: "Collection 7",
        coverImage: "/assets/final-collection/7/IMG-20260205-WA0002.jpg",
        images: [
            "/assets/final-collection/7/IMG-20260205-WA0002.jpg",
            "/assets/final-collection/7/IMG-20260205-WA0003.jpg",
            "/assets/final-collection/7/IMG-20260205-WA0004.jpg",
            "/assets/final-collection/7/IMG-20260205-WA0005.jpg",
            "/assets/final-collection/7/IMG-20260205-WA0006.jpg",
        ],
        description: "Explore our latest designs from Collection 7"
    },
    {
        id: "9",
        name: "Collection 9",
        coverImage: "/assets/final-collection/9/IMG-20260203-WA0018.jpg",
        images: [
            "/assets/final-collection/9/IMG-20260203-WA0018.jpg",
            "/assets/final-collection/9/IMG-20260203-WA0019.jpg",
            "/assets/final-collection/9/IMG-20260203-WA0020.jpg",
            "/assets/final-collection/9/IMG-20260203-WA0021.jpg",
        ],
        description: "Explore our latest designs from Collection 9"
    },
];

export function getCollectionById(id: string): Collection | undefined {
    return collections.find(collection => collection.id === id);
}
