import { NextApiRequest, NextApiResponse } from 'next';


function errorRes(res: NextApiResponse, status: number, message: string) {
  return res.status(status).json({ message });
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return errorRes(res, 405, 'Method not allowed');
  }

  const { startsWith, limit }: { startsWith?: string; limit?: string } = req.query as { startsWith?: string; limit?: string };


  if (!startsWith) {
    return errorRes(res, 400, 'startsWith parameter is required');
  }

  if (!limit) {
    return errorRes(res, 400, 'limit parameter is required');
  }

  const limitNum = parseInt(limit, 10);

  if (Number.isNaN(limitNum)) {
    return errorRes(res, 400, 'limit parameter must be of type number');
  }
}

export default handler;
