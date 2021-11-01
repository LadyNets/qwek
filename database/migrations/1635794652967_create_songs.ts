import BaseSchema from "@ioc:Adonis/Lucid/Schema"

export default class Songs extends BaseSchema {
  protected tableName = "song"

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id")
      table.string("name")
      table.json("music_sheet")
      table
        .integer("artist_id")
        .references("id")
        .inTable("artist")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
      table.timestamps(true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
