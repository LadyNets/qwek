import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Song from 'App/Models/Song';

export default class SongsController {
  Song: Song;

  constructor(){
    this.Song = new Song();
  }

  public async show ({request, response}: HttpContextContract) {
    const queryParams = request.qs()
    const page = queryParams.page ? queryParams.page : 1
    let songs = Song.query().preload('artist')
      .select('*')
    
    if(queryParams.name){
      songs = songs
        .where('name', 'ILIKE', `%${queryParams.name}%`)
        .orWhereHas('artist', (query) => {
          query.where('name', 'ILIKE', `%${queryParams.name}%`)
        })
    }
    
    const data = await songs.paginate(page, 5)

    return response.status(200).send(data)
  }

  public async store ({}: HttpContextContract) {
  }

  public async update ({}: HttpContextContract) {
  }
}
