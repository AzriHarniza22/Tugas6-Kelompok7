import type { HttpContext } from '@adonisjs/core/http'
import Participant from '#models/participant'

export default class ParticipantsController {
  public async create({ view }: HttpContext) {
    return view.render('participants/create')
  }

  public async store({ request, response, session }: HttpContext) {
    const name = request.input('name')
    const email = request.input('email')
    const phone = request.input('phone')
    const workshop = request.input('workshop')

    if (!name || !email || !phone || !workshop) {
      session.flash('error', 'Semua field harus diisi')
      return response.redirect('back')
    }

    await Participant.create({ name, email, phone, workshop })

    session.flash('success', 'Pendaftaran berhasil!')
    return response.redirect('/participants')
  }

  public async index({ view }: HttpContext) {
    const participants = await Participant.all()
    return view.render('participants/index', { participants })
  }

  public async show({ params, view, response }: HttpContext) {
    const participant = await Participant.find(params.id)
    if (!participant) {
      return response.status(404).send('Peserta tidak ditemukan')
    }
    return view.render('participants/show', { participant })
  }
}
