import { RouteLandingPage } from '@/components/ui/RouteLandingPage';
import { getRoutePage } from '@/data/route-pages';

export default function ProjectsPage() {
  return <RouteLandingPage page={getRoutePage('/projects/')} />;
}
