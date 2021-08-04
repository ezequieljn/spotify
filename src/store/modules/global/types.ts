
export interface AlbumProps {
    id: string;
    name: string;
    artist: string;
    created_at: string;
    image: string
}


export interface songProps {
    id: string;
    album_id: string;
    artist: string;
    name: string;
    photoAlbum: string;
    minutes: string;
}

export interface artistMainProps {
    id: string;
    artist: string;
    image: string
}

export interface artistAllProps {
    id: string;
    artist: string;
    image: string
}