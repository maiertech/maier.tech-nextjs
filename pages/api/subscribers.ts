import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = { count: number };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const API_KEY = process.env.BUTTONDOWN_API_KEY;
  const response = await fetch('https://api.buttondown.email/v1/subscribers', {
    headers: {
      Authorization: `Token ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    method: 'GET',
  });
  const { count } = await response.json();

  // Subscriber count does not change frequently and is considered good for 5 mins.
  // After 5 minutes deliver stale value and revalidate.
  res.setHeader('Cache-Control', 's-maxage=120, stale-while-revalidate=600');
  return res.status(200).json({ count });
}
