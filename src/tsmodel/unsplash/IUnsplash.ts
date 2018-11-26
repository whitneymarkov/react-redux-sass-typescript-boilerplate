export interface IUnsplash { 
    id:	string | number;
    created_at:	string | null;
    updated_at:	string | null;
    width: number | null;
    height: number | null;
    color:	string | null;
    description: string | null;
    urls: IUrls;
    links: ILinks;
    user: IUser;
}

export interface IUrls {
    raw: string | null;
    full: string | null;
    regular: string | null;
    small: string | null;
    thumb: string | null;
}

export interface ILinks {
    self: string | null;
    html: string | null;
    download: string | null;
    download_location: string | null;
    categories:	string[] | null;
    sponsored: boolean | null;
    sponsored_by: string | null;
    sponsored_impressions_id: string | number | null;
    likes: number | null;
    liked_by_user: boolean | null;
    current_user_collections: string[] | null;
    slug: string | null;
}

export interface IUser {
    id:	string | number;
    updated_at:	string | null;
    username: string | null;
    name: string | null;
    first_name: string | null;
    last_name: string | null;
    twitter_username: string | null;
    portfolio_url: string | null;
    bio: string | null;
    location: string | null;
    links: IUserLinks;
    profile_image: IUserProfileImage;
    instagram_username: string | null;
    total_collections: number | null;
    total_likes: number | null;
    total_photos: number | null;
    accepted_tos: boolean | null;
}

export interface IUserLinks {
    self: string | null;
    html: string | null;
    photos: string | null;
    likes: string | null;
    portfolio: string | null;
    following: string | null;
    followers: string | null;
}

export interface IUserProfileImage {
    small: string | null;
    medium: string | null;
    large: string | null;
}