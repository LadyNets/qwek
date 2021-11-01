import Route from '@ioc:Adonis/Core/Route'

Route.get('/artists', 'ArtistsController.show')
Route.get('/songs', 'SongsController.show')
