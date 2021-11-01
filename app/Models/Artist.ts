import { DateTime } from "luxon"
import { BaseModel, column, hasMany, HasMany } from "@ioc:Adonis/Lucid/Orm"
import Song from "App/Models/Song"

export default class Artist extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column({ columnName: "name" })
  public name: string

  @hasMany(() => Song, {
    foreignKey: "artist_id",
  })
  public song: HasMany<typeof Song>

  @column({ columnName: "cover_image" })
  public cover_image: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  static get table() {
    return "artist" //nome da tabela que está definida na migration...
  }
}
