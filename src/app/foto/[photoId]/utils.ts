import { getPhotoAction } from "@/actions/requests/photo";

export async function generatePhotoMetadata(photoId: string) {
    const { data: photo } = await getPhotoAction(photoId);
    return {
        title: `Next Dogs - Foto ${photo?.photo?.title || ""}`,
    };
}
