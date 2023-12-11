import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

function errorRes(res: NextApiResponse, status: number, message: string) {
  return res.status(status).json({ message });
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return errorRes(res, 405, 'Method not allowed');
  }

  const { startsWith, limit }: { startsWith?: string; limit?: string } = req.query as { startsWith?: string; limit?: string };

  if (!startsWith) {
    return (errorRes as any)(res, 'Method not allowed');
  }

  if (!limit) {
    return (errorRes as any)(res, 'Method not allowed');
  }

  const limitNum = parseInt(limit, 10);

  if (Number.isNaN(limitNum)) {
    return (errorRes as any)(res, 'Method not allowed');
  }

  const locations = await prisma.location.findMany({
    where: {
      name: {
        startsWith: startsWith as string,
      },
    },
    take: limitNum,
  });

  return res.json(locations);
}

export default handler;
