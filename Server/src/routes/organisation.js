import { Router } from 'express'
import {
    ArchiveOrganisation,
    CreateOrganisation,
    GetOrganisation,
    UpdateOrganisation,
} from '../controller/organisation.js'
import { attachOrganisationMiddleware } from '../middleware/organisation.js'

const organisationRouter = Router()

organisationRouter.post('/', CreateOrganisation)
organisationRouter.get('/:orgId', attachOrganisationMiddleware, GetOrganisation)
organisationRouter.put(
    '/:orgId',
    attachOrganisationMiddleware,
    UpdateOrganisation
)
organisationRouter.delete(
    '/:orgId',
    attachOrganisationMiddleware,
    ArchiveOrganisation
)

export default organisationRouter
