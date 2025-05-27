type LoginKeys = "token" | "user_display_name" | "user_email" | "user_nicename" | "message";

export type Login = {
    [key in LoginKeys]: string;
};
