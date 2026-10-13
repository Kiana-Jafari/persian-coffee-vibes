import { createFileRoute, redirect } from '@tanstack/react-router';
export const Route = createFileRoute('/products/$id')({ beforeLoad: () => { throw redirect({ to: '/' }); }, component: () => null });
