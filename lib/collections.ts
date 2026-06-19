export interface Collection {
    id: string;
    name: string;
    images: string[];
    coverImage: string;
    description: string;
    features: string[];
    price: number;
    originalPrice: number;
}

type CollectionGroup = {
    categoryId: string;
    categoryName: string;
    folderPath: string;
    description: string;
    features: string[];
    price: number;
    originalPrice: number;
    items: Record<string, string[] | { folderName: string; images: string[] }>;
};

const collectionGroups: CollectionGroup[] = [
    {
        categoryId: "girls-jeans",
        categoryName: "Girls Jeans",
        folderPath: "Girls%20jeans",
        description:
            "Explore our girls jeans collection with versatile denim styles made for everyday comfort and easy styling.",
        features: [
            "Comfortable denim fabric",
            "Everyday casual fit",
            "Durable stitching",
            "Easy to pair with tees and tops",
            "Machine washable",
            "Available in multiple sizes",
        ],
        price: 1499,
        originalPrice: 2199,
        items: {
            "1": [
                "379016A6-4166-4EE1-B951-4A23CEDB38F9.png",
                "5FE1C2A7-5E93-4608-B72A-A523924B2CF3.png",
                "711D910B-D4DB-4C58-9500-5F9165D95127.png",
                "E2FEDF4B-F06D-4E62-94AC-3970369153D9.png",
                "EC3889B4-6847-47E5-A66B-532BF007354E.png",
            ],
            "2": [
                "2043DF83-6E7A-483E-AE43-8B94E20DB256.png",
                "89854761-1301-4B22-A445-61754601A5C0.png",
                "AF64F142-7824-47A4-9384-DBDC369D6799.png",
                "B43DAE8A-369A-469F-982B-CB6137777C92.png",
                "B704A449-41D6-4093-A4F2-82387F93D3DF.png",
            ],
            "3": [
                "1049A039-8D30-421B-99A5-AA8CAE7477F6.png",
                "218CA158-2851-48AF-8113-F1FC225E4620.png",
                "475BC2E4-B667-4AE4-A2D7-EE6E5D62F5B8.png",
                "673A4950-8AE8-4678-935F-D2C2FD89E174.png",
                "EB8EDD5E-187A-4EE0-917E-F2C339120F15.png",
                "F427221D-6151-4466-9E38-6E9C4B64579D.png",
            ],
            "4": [
                "0BD15834-8466-452F-936E-6FC8FBF8A56C.png",
                "56C0206E-021E-4ED8-B1D3-4D055EFCFC44.png",
                "6CA7E025-D185-4069-A3B4-A0C76BAD57DD.png",
                "AFFD1BB4-B786-4FD3-82FC-372D1F1D8E4A.png",
                "BD96FE93-A17C-42C1-BB49-9226461A6D48.png",
                "C9587E57-7812-4661-8368-744356BF8CF2.png",
                "D298D778-2980-4BFD-802B-4DD4217F5E9F.png",
            ],
            "5": [
                "42E4A43A-B254-4F37-8EB5-F146888D406C.png",
                "57247CAD-8FC9-4EDA-A7C4-06EDF521C292.png",
                "77A6A116-4F3B-4B0C-9A11-17B9BF7A412F.png",
                "BBEC0314-5467-433D-8571-6880D358C3F4.png",
                "D0473BE1-D189-4189-B632-58BC0DB2CF70.png",
            ],
            "6": [
                "236ABE66-73EF-44DC-AA75-7D1621FC363D.png",
                "24493BDF-995F-435F-8A8F-CF014C3B05BD.png",
                "816F873F-D790-4EEB-B3FA-9948BB31B413.png",
                "C577E270-ED72-42E8-8871-A6A01FC1ADCC.png",
            ],
        },
    },
    {
        categoryId: "girls-shorts",
        categoryName: "Girls Shorts",
        folderPath: "Girls%20shorts",
        description:
            "Discover girls shorts designed for warm-weather comfort, playful movement, and simple everyday outfits.",
        features: [
            "Lightweight comfortable fabric",
            "Easy casual styling",
            "Relaxed everyday fit",
            "Durable finish",
            "Machine washable",
            "Available in multiple sizes",
        ],
        price: 999,
        originalPrice: 1499,
        items: {
            "1": ["IMG_7163.PNG", "IMG_7164.PNG", "IMG_7165.PNG", "IMG_7166.PNG"],
            "2": [
                "IMG_7153.PNG",
                "IMG_7154.PNG",
                "IMG_7155.PNG",
                "IMG_7156.PNG",
                "IMG_7157.PNG",
            ],
            "3": [
                "IMG_7148.PNG",
                "IMG_7149.PNG",
                "IMG_7150.PNG",
                "IMG_7151.PNG",
                "IMG_7152.PNG",
            ],
            "4": ["IMG_7158.PNG", "IMG_7159.PNG", "IMG_7160.PNG", "IMG_7161.PNG"],
        },
    },
    {
        categoryId: "boys-tshirt",
        categoryName: "Boys T-Shirt",
        folderPath: "Boys%20tshirt%20",
        description:
            "Explore boys t-shirts made for everyday comfort, easy movement, and a clean casual look.",
        features: [
            "Soft breathable fabric",
            "Comfortable everyday fit",
            "Polo collar styling",
            "Durable stitching",
            "Machine washable",
            "Available in multiple sizes",
        ],
        price: 899,
        originalPrice: 1299,
        items: {
            "1-polo": {
                folderName: "1%20polo",
                images: [
                    "IMG-20260618-WA0004.jpg",
                    "IMG-20260618-WA0007.jpg",
                    "IMG-20260618-WA0008.jpg",
                    "IMG-20260618-WA0009.jpg",
                    "IMG-20260618-WA0010.jpg",
                    "IMG-20260618-WA0011.jpg",
                ],
            },
            "2-polo": {
                folderName: "2%20polo",
                images: [
                    "IMG-20260618-WA0003.jpg",
                    "IMG-20260618-WA0012.jpg",
                    "IMG-20260618-WA0017.jpg",
                    "IMG-20260618-WA0018.jpg",
                    "IMG-20260618-WA0019.jpg",
                ],
            },
            "3-polo": {
                folderName: "3%20polo",
                images: [
                    "IMG-20260618-WA0001.jpg",
                    "IMG-20260618-WA0002.jpg",
                    "IMG-20260618-WA0005.jpg",
                    "IMG-20260618-WA0009.jpg",
                    "IMG-20260618-WA0013.jpg",
                    "IMG-20260618-WA0014.jpg",
                ],
            },
            "4-polo": {
                folderName: "4%20polo",
                images: [
                    "IMG-20260618-WA0020.jpg",
                    "IMG-20260618-WA0021.jpg",
                    "IMG-20260618-WA0022.jpg",
                    "IMG-20260618-WA0023.jpg",
                ],
            },
        },
    },
];

export const collections: Collection[] = collectionGroups.flatMap((group) =>
    Object.entries(group.items).map(([itemId, item]) => {
        const folderName = Array.isArray(item) ? itemId : item.folderName;
        const fileNames = Array.isArray(item) ? item : item.images;
        const images = fileNames.map(
            (fileName) => `/assets/${group.folderPath}/${folderName}/${fileName}`,
        );

        return {
            id: `${group.categoryId}-${itemId}`,
            name: `${group.categoryName} ${itemId}`,
            images,
            coverImage: images[0],
            description: group.description,
            features: group.features,
            price: group.price,
            originalPrice: group.originalPrice,
        };
    }),
);

export function getCollectionById(id: string): Collection | undefined {
    return collections.find((collection) => collection.id === id);
}
