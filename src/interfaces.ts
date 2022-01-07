// Props for Destination
export interface ItemData {
    name: string;
    images: {
        png: string;
        webp: string;
    };
    description: string;
    distance: string;
    travel: string;
}[]

// Props for Crew
export interface ItemDataCrew {
    name: string;
    images: {
        png: string;
        webp: string;
    };
    role: string;
    bio: string;
}[]