export type FeedPhoto = {
    id: number;
    title: string;
    src: string;
    idade: string;
    peso: string;
    acessos: number;
    total_comments: string;
    date: string;
    author: string;
};

type FeedPhotoCommentKeys =
    | "comment_ID"
    | "comment_post_ID"
    | "comment_author"
    | "comment_author_email"
    | "comment_author_url"
    | "comment_author_IP"
    | "comment_date"
    | "comment_date_gmt"
    | "comment_content"
    | "comment_karma"
    | "comment_approved"
    | "comment_agent"
    | "comment_type"
    | "comment_parent"
    | "user_id";

export type FeedPhotoComment = {
    [key in FeedPhotoCommentKeys]: string;
};
