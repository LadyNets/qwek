import BaseSchema from "@ioc:Adonis/Lucid/Schema"

export default class Artists extends BaseSchema {
  protected tableName = "artist"

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id")
      table.string("name", 80).notNullable()
      table.string("cover_image", 200).notNullable()
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
