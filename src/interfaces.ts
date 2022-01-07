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

// Props for Technology 
export interface ItemTech {
    name: string;
    images: {
        portrait: string;
        landscape: string;
    };
    description: string;
}[]