import http from 'k6/http';
import { check, sleep } from 'k6';


export const options = {
    stages: [
        { duration: '30s', target: 100},
        { duration: '1m', target: 100},
        { duration: '30s', target: 0},
    ]
};

export default function () {
  let res = http.get('https://loukazard.github.io');
  check(res, {
    'response status is 200': (r) => r.status === 200,
    'response time is < 500ms': (r) => r.timings.duration < 500,
  });

  sleep(1);
}
