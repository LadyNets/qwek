import { DateTime } from "luxon"
import { BaseModel, BelongsTo, belongsTo, column } from "@ioc:Adonis/Lucid/Orm"
import Artist from "App/Models/Artist"

interface MusicSheet {
  id: number
  note: string
  duration: string
}

export default class Song extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public name: string

  @column()
  public music_sheet: MusicSheet

  @belongsTo(() => Artist, {
    foreignKey: "id",
  })
  public artist: BelongsTo<typeof Artist>

  @column()
  public artist_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  public serializeExtras() {
    return {
      artist_name: this.$extras.artist_name,
    }
  }

  static get table() {
    return "song" //nome da tabela que está definida na migration...
  }
}
