const https = require('https');

const repo = 'milinddere76-sketch/Packflow-AI';
const api = `https://api.github.com/repos/${repo}/actions/runs`;
const headers = { 'User-Agent': 'ci-watcher' };

function fetchRuns() {
  return new Promise((resolve, reject) => {
    https.get(api, { headers }, (res) => {
      let buf = '';
      res.on('data', (c) => buf += c);
      res.on('end', () => {
        try { resolve(JSON.parse(buf)); } catch (e) { reject(e); }
      });
    }).on('error', reject);
  });
}

(async function watch(){
  const deadline = Date.now() + 5 * 60 * 1000; // 5 minutes
  while(Date.now() < deadline) {
    try {
      const r = await fetchRuns();
      if (!r || !Array.isArray(r.workflow_runs) || r.workflow_runs.length === 0) {
        console.log(new Date().toISOString(), 'No workflow runs found');
        break;
      }
      const run = r.workflow_runs.sort((a,b)=> new Date(b.created_at)-new Date(a.created_at))[0];
      console.log(new Date().toISOString(), `status=${run.status} conclusion=${run.conclusion} name=${run.name} url=${run.html_url}`);
      if (run.status !== 'in_progress' && run.status !== 'queued' && run.status !== 'waiting') break;
    } catch (e) {
      console.error('Error fetching runs:', e && e.message ? e.message : e);
      break;
    }
    await new Promise(res=>setTimeout(res, 8000));
  }
  console.log('Watcher finished');
})();
