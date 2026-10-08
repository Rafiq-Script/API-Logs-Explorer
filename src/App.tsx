import { Code2, Database, FileText, ShieldCheck } from "lucide-react";

export default function App() {
  return (
    <div className="app">
      <div className="topline" />
      <header>
        <div className="header-inner">
          <div className="brand">
            <span className="brand-icon">
              <Database size={20} />
            </span>
            <span>
              <b>API Logs Project</b>
              <small>Operations log template</small>
            </span>
          </div>
          <span className="template-badge">API-free template</span>
        </div>
      </header>

      <main>
        <section className="guide-card" aria-labelledby="guide-title">
          <div className="guide-icon">
            <Code2 size={30} />
          </div>
          <p className="eyebrow">Integration is not configured</p>
          <h1 id="guide-title">Connect your data source</h1>
          <p className="guide-text">
            This template makes no requests and contains no API endpoints. Add
            your own GET request, response mapping, and log table for your
            system's data format.
          </p>
          <div className="guide-steps">
            <div>
              <FileText size={18} />
              <span>
                <b>1. Define your data</b>
                <small>Create log entry types in the <code>src</code> directory.</small>
              </span>
            </div>
            <div>
              <Code2 size={18} />
              <span>
                <b>2. Use the fetch example</b>
                <small>Copy <code>src/api.example.ts</code> to <code>src/api.ts</code> and configure the GET request.</small>
              </span>
            </div>
            <div>
              <ShieldCheck size={18} />
              <span>
                <b>3. Keep secrets out of Git</b>
                <small>Provide API keys and endpoints through environment variables.</small>
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
