import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'participants'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.string('email').notNullable()
      table.string('phone').notNullable()
      table.string('workshop').notNullable()
      table.timestamp('created_at', { useTz: true }).nullable()
      table.timestamp('updated_at', { useTz: true }).nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
