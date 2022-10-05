import type { PageServerLoad } from './$types';

export const load:PageServerLoad = async ({}) => {
    let data = await (await fetch('https://www.naver.com')).text();
    return { data };
}