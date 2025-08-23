import jobsData from './jobs.json';

export function getAllJobIds() {
  return jobsData.map((job) => {
    return {
      params: {
        id: job.id,
      },
    };
  });
}

export function getJobData(id: string) {
  const job = jobsData.find((job) => job.id === id);
  return job || null;
}
