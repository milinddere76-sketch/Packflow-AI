const https = require('https');
const runId = process.argv[2] || '33540513891';
const repo = 'milinddere76-sketch/Packflow-AI';
const api = `https://api.github.com/repos/${repo}/actions/runs/${runId}/jobs`;
const headers = { 'User-Agent': 'ci-log-fetcher' };

function getJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers }, (res) => {
      let buf = '';
      res.on('data', c => buf += c);
      res.on('end', () => {
        try { resolve(JSON.parse(buf)); } catch (e) { reject(e); }
      });
    }).on('error', reject);
  });
}

(async ()=>{
  try {
    const r = await getJson(api);
    if (!r || !r.jobs) { console.error('No jobs data'); return; }
    for (const job of r.jobs) {
      console.log('---');
      console.log(`Job: ${job.name}`);
      console.log(`Status: ${job.status}  Conclusion: ${job.conclusion}`);
      console.log(`HTML: ${job.html_url}`);
      if (Array.isArray(job.steps)) {
        for (const step of job.steps) {
          if (step.conclusion && step.conclusion !== 'success') {
            console.log(`  STEP FAIL: ${step.name} -> ${step.conclusion}`);
          }
        }
      }
      // If job failed and no failing step listed, print last few steps
      if (job.conclusion && job.conclusion !== 'success' && Array.isArray(job.steps)) {
        console.log('  All steps:');
        for (const step of job.steps) console.log(`    ${step.name} - ${step.status}/${step.conclusion || 'n/a'}`);
      }
    }
  } catch (e) {
    console.error('Error fetching jobs:', e && e.message ? e.message : e);
  }
})();
