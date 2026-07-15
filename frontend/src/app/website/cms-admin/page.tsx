import { RouteLandingPage } from '@/components/ui/RouteLandingPage';
import { getRoutePage } from '@/data/route-pages';

export default function CmsAdminPage() {
  return <RouteLandingPage page={getRoutePage('/website/cms-admin/')} />;
}
