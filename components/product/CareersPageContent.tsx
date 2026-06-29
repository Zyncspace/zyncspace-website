import Link from 'next/link';
import { careersContent as c, type JobListing } from '@/content/careers';

function JobCard({ job }: { job: JobListing }) {
  return (
    <article className="careers-job-card" id={job.id}>
      <div className="careers-job-header">
        <h3>{job.title}</h3>
        <div className="careers-job-meta">
          <span className="careers-job-type">{job.type}</span>
          <span>{job.location}</span>
          <span>{job.department}</span>
        </div>
      </div>
      <p className="careers-job-desc">{job.description}</p>
      {job.details ? (
        <div className="careers-job-block">
          <h4>Details</h4>
          <ul>
            {job.details.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}
      <div className="careers-job-block">
        <h4>Requirements</h4>
        <ul>
          {job.requirements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <Link
        href={job.applyUrl}
        className="btn btn-dark careers-apply-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        Apply Now →
      </Link>
    </article>
  );
}

export default function CareersPageContent() {
  return (
    <>
      <header className="careers-hero">
        <div className="container">
          <span className="label careers-hero-label">{c.label}</span>
          <h1>{c.title}</h1>
          <p className="careers-hero-lead">{c.description}</p>
        </div>
      </header>

      <section className="careers-body">
        <div className="container careers-container">
          <p className="careers-intro">{c.intro}</p>

          <div className="careers-openings">
            <span className="label">{c.openingsLabel}</span>
            <div className="careers-jobs-grid">
              {c.jobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </div>

          <section className="careers-benefits" aria-labelledby="careers-benefits-title">
            <h2 id="careers-benefits-title">{c.benefits.title}</h2>
            <div className="careers-benefits-grid">
              {c.benefits.items.map((benefit) => (
                <article key={benefit.title} className="careers-benefit-card">
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </article>
              ))}
            </div>
          </section>

          <aside className="careers-open-application">
            <h2>{c.openApplication.title}</h2>
            <p>{c.openApplication.description}</p>
            <p>
              <strong>Email:</strong>{' '}
              <Link href={`mailto:${c.openApplication.email}`}>{c.openApplication.email}</Link>
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
