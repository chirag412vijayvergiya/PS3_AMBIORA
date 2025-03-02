export default function JobFilters({ addFilter }) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="font-bold text-lg mb-4">Filters</h3>

      <div className="mb-6">
        <h4 className="font-medium mb-2">Job Type</h4>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="rounded text-blue-600 mr-2"
              onChange={() => addFilter("Full-time")}
            />
            <span>Full-time</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="rounded text-blue-600 mr-2"
              onChange={() => addFilter("Part-time")}
            />
            <span>Part-time</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="rounded text-blue-600 mr-2"
              onChange={() => addFilter("Contract")}
            />
            <span>Contract</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="rounded text-blue-600 mr-2"
              onChange={() => addFilter("Internship")}
            />
            <span>Internship</span>
          </label>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-medium mb-2">Experience Level</h4>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="rounded text-blue-600 mr-2"
              onChange={() => addFilter("Entry Level")}
            />
            <span>Entry Level</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="rounded text-blue-600 mr-2"
              onChange={() => addFilter("Mid Level")}
            />
            <span>Mid Level</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="rounded text-blue-600 mr-2"
              onChange={() => addFilter("Senior Level")}
            />
            <span>Senior Level</span>
          </label>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-medium mb-2">Salary Range</h4>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="rounded text-blue-600 mr-2"
              onChange={() => addFilter("$0-$50K")}
            />
            <span>$0 - $50K</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="rounded text-blue-600 mr-2"
              onChange={() => addFilter("$50K-$100K")}
            />
            <span>$50K - $100K</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="rounded text-blue-600 mr-2"
              onChange={() => addFilter("$100K-$150K")}
            />
            <span>$100K - $150K</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="rounded text-blue-600 mr-2"
              onChange={() => addFilter("$150K+")}
            />
            <span>$150K+</span>
          </label>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-medium mb-2">Remote Options</h4>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="rounded text-blue-600 mr-2"
              onChange={() => addFilter("Remote")}
            />
            <span>Remote</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="rounded text-blue-600 mr-2"
              onChange={() => addFilter("Hybrid")}
            />
            <span>Hybrid</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="rounded text-blue-600 mr-2"
              onChange={() => addFilter("On-site")}
            />
            <span>On-site</span>
          </label>
        </div>
      </div>

      <div>
        <h4 className="font-medium mb-2">Date Posted</h4>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="rounded text-blue-600 mr-2"
              onChange={() => addFilter("Past 24 hours")}
            />
            <span>Past 24 hours</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="rounded text-blue-600 mr-2"
              onChange={() => addFilter("Past week")}
            />
            <span>Past week</span>
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              className="rounded text-blue-600 mr-2"
              onChange={() => addFilter("Past month")}
            />
            <span>Past month</span>
          </label>
        </div>
      </div>
    </div>
  );
}
