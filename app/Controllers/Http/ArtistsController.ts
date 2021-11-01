import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Artist from 'App/Models/Artist';



export default class ArtistsController {
  Artist: Artist;

  constructor(){
    this.Artist = new Artist();
  }

  public async show ({request, response}: HttpContextContract) {
    const queryParams = request.qs()
    const page = queryParams.page ? queryParams.page : 1
    let artists = Artist.query()
    
    if(queryParams.name){
      artists = artists.where('name', 'ILIKE', `%${queryParams.name}%`)
    }
    
    const data = await artists.paginate(page, 5)

    return response.status(200).send(data)
  }

  public async store ({}: HttpContextContract) {
  }

  public async update ({}: HttpContextContract) {
  }
}
