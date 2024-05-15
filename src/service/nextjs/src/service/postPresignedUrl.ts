import { postFetcher } from './api';

export const postPresignedUrl = async (path: string): Promise<any> =>
	await postFetcher<any>('/image/presigned', { path }).catch((error: any) => {
		throw error;
	});
