import 'source-map-support/register'

import { NextFunction, Request, Response } from 'express'

import { getArchivistBoundWitnessesMongoSdk } from '../../../lib'

const getCount = async (archive: string) => {
  const sdk = await getArchivistBoundWitnessesMongoSdk(archive)
  return await sdk.fetchCount()
}

export const getArchiveBlockStats = async (req: Request, res: Response, next: NextFunction) => {
  const { archive } = req.params
  res.json({
    count: await getCount(archive),
  })
  next()
}