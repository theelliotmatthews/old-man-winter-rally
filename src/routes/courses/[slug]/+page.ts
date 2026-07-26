import { error } from '@sveltejs/kit';
import { courses, getCourse } from '$lib/data/content';
import type { EntryGenerator, PageLoad } from './$types';

export const entries: EntryGenerator = () => courses.map((c) => ({ slug: c.slug }));

export const load: PageLoad = ({ params }) => {
	const course = getCourse(params.slug);
	if (!course) throw error(404, 'Course not found');
	return { course };
};
