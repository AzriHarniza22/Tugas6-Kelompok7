import router from '@adonisjs/core/services/router'
import ParticipantsController from '#controllers/participants_controller'

router.get('/', async ({ view }) => {
    return view.render('welcome') 
  })
router.get('participants/create', [ParticipantsController, 'create'])
router.post('participants', [ParticipantsController, 'store'])
router.get('participants', [ParticipantsController, 'index'])
router.get('participants/:id', [ParticipantsController, 'show'])
