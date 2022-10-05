import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Comments, CommentsRelations} from '../models';

export class CommentsRepository extends DefaultCrudRepository<
  Comments,
  typeof Comments.prototype._id,
  CommentsRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Comments, dataSource);
  }
}
