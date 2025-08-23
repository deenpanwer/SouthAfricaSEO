import { getJobData, getAllJobIds } from '@/app/automations/lib/jobs/get-job-data';
import { Metadata } from 'next';
import { RoleDetailsPanel } from '@/components/automations/careers/RoleDetailsPanel';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const jobData = getJobData(params.id);
  if (!jobData) {
    return { title: "Job Not Found" };
  }
  return {
    title: jobData.title + " - AILab Careers",
    description: jobData.description,
  };
}

export async function generateStaticParams() {
  const paths = getAllJobIds();
  return paths;
}

export default function JobDetailsPage({ params }: Props) {
  const jobData = getJobData(params.id);

  if (!jobData) {
    return (
      <div className="min-h-screen bg-background text-foreground py-16 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Job Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground py-16">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <RoleDetailsPanel job={jobData} />
      </div>
    </div>
  );
}
