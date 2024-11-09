import JobList from "@/components/JobList";
import VacancyDetail from "@/components/VacancyDetail";

// Fetch data on the server side
export default async function Page() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  const jobs = await response.json();

  return (
    <main className="bg-[#F4FBF9] min-h-screen py-10">
      {/* Page title */}
      <h1 className="text-4xl font-bold text-center text-green-800 mb-10">
        Vacancies For Seafarers
      </h1>
      {/* Job listing and vacancy detail section */}
      <JobList jobs={jobs.slice(0, 5)} />
      <VacancyDetail />
    </main>
  );
}
