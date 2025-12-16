/* Esto en una app real NO EXISTE, solo estamos guardando datos de mook (boceto) para hacer pruebas */
const contact_data = [
    {
        contact_id: 1,
        contact_name: 'Frieren',
        contact_avatar: 'https://i.blogs.es/585f08/frieren/1200_800.jpeg',
        contact_unseen_messages: 5,
        last_message_content: 'Tenes libros?',
        last_message_state: 'RECEIVED',/*'NOT_SEND' | 'NOT_RECEIVED' | 'RECEIVED' | 'SEEN'*/
        last_message_created_at: new Date(),
        /* Realizar el renderizado de la lista de mensajes */
        messages: [
            {
                message_id: 1,
                message_content: 'Que onda',
                message_state: 'SEEN',
                message_created_at: new Date(),
                send_by_me: true
            },
            {
                message_id: 2,
                message_content: 'Tenes libros?',
                message_state: 'SEEN',
                message_created_at: new Date(),
                send_by_me: false
            }
        ]
    },
    {
        contact_id: 2,
        contact_name: 'Fern',
        contact_avatar: 'https://cdn.rafled.com/anime-icons/images/80i2sxkUjJNf4A1Ow7m3GYIDGpnKjQWi.jpg',
        contact_unseen_messages: 0,
        last_message_content: 'Que tal?',
        last_message_state: 'SEEN',
        last_message_created_at: new Date(),
        messages: [
            {
                message_id: 1,
                message_content: 'Que tal?',
                message_state: 'SEEN',
                message_created_at: new Date(),
                send_by_me: false
            }
        ]
    },
    {
        contact_id: 3,
        contact_name: 'Stark',
        contact_avatar: 'https://practicaltyping.com/wp-content/uploads/2024/05/stark.jpg',
        contact_unseen_messages: 3,
        last_message_content: 'Soy Stark, que onda?',
        last_message_state: 'SEEN',
        last_message_created_at: new Date(),
        messages: [
            {
                message_id: 1,
                message_content: 'Soy Stark, que onda?',
                message_state: 'SEEN',
                message_created_at: new Date(),
                send_by_me: false
            }
        ]
    },
    {
        contact_id: 4,
        contact_name: 'Himmel',
        contact_avatar: 'https://avatarfiles.alphacoders.com/375/thumb-1920-375914.png',
        contact_unseen_messages: 1,
        last_message_content: 'Frieren me  rechazo, se acabo, its over',
        last_message_state: 'SEEN',
        last_message_created_at: new Date(),
        messages: [
            {
                message_id: 1,
                message_content: 'Frieren me  rechazo, se acabo, its over',
                message_state: 'SEEN',
                message_created_at: new Date(),
                send_by_me: false
            }
        ]
    },
    {
        contact_id: 5,
        contact_name: 'R2-D2',
        contact_avatar: 'https://cdn.deagostini.com/dea/live/media/imagegallery-r2d204/imagegallery-r2d204_optmzd_80.webp',
        contact_unseen_messages: 0,
        last_message_content: '01000001 01101110 01100001 01101011 01101001 01101110 00100000 01101110 01101111 01110011 00100000 01110100 01110010 01100001 01101001 01100011 01101001 01101111 01101110 01100001 01110010 01100001 00101100 00100000 01101100 01101111 00100000 01110000 01110101 01100101 01100100 01101111 00100000 01110011 01100101 01101110 01110100 01101001 01110010',
        last_message_state: 'SEEN',
        last_message_created_at: new Date(),
        messages: [
            {
                message_id: 1,
                message_content: '01000001 01101110 01100001 01101011 01101001 01101110 00100000 01101110 01101111 01110011 00100000 01110100 01110010 01100001 01101001 01100011 01101001 01101111 01101110 01100001 01110010 01100001 00101100 00100000 01101100 01101111 00100000 01110000 01110101 01100101 01100100 01101111 00100000 01110011 01100101 01101110 01110100 01101001 01110010',
                message_state: 'SEEN',
                message_created_at: new Date(),
                send_by_me: false
            }
        ]
    },
    {
        contact_id: 6,
        contact_name: 'Marcille Donato',
        contact_avatar: 'https://i.redd.it/3ympbt8vpjyc1.jpeg',
        contact_unseen_messages: 0,
        last_message_content: '🥘​🍳​🥚​🍲​🥪​',
        last_message_state: 'SEEN',
        last_message_created_at: new Date(),
        messages: [
            {
                message_id: 1,
                message_content: '🥘​🍳​🥚​🍲​🥪​',
                message_state: 'SEEN',
                message_created_at: new Date(),
                send_by_me: false
            }
        ]
    },
    {
        contact_id: 7,
        contact_name: 'Senshi',
        contact_avatar: 'https://scontent-eze1-1.xx.fbcdn.net/v/t39.30808-6/515945587_10163034819918874_2524350637400290004_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=bd9a62&_nc_ohc=HSgwhINBC_YQ7kNvwHP1BDk&_nc_oc=Adk_hx6HxClnX8dtZ5YFhga9WgP_4N6xJu6FqXFgxeMQmIuDwJ9jRzVG2D-SQoetj5Y&_nc_zt=23&_nc_ht=scontent-eze1-1.xx&_nc_gid=jrOjZ1tSlq8zG9590gemZA&oh=00_AfmT7txbZ-8ve-3gQYPD2qa4tPDeVR7PbwJl9PfIICqv6A&oe=694799EA',
        contact_unseen_messages: 2,
        last_message_content: 'ice guiso, queres? 🍲​',
        last_message_state: 'SEEN',
        last_message_created_at: new Date(),
        messages: [
            {
                message_id: 1,
                message_content: 'ice guiso, queres? 🍲​',
                message_state: 'SEEN',
                message_created_at: new Date(),
                send_by_me: false
            }
        ]
    },
    {
        contact_id: 8,
        contact_name: 'El Laios',
        contact_avatar: 'https://fbi.cults3d.com/uploaders/18922083/illustration-file/5626e12e-b140-4ed9-a6e5-1dc50ace9de6/laios.png',
        contact_unseen_messages: 0,
        last_message_content: 'Tengo un hambre... sabes si Senshi estara cocinando algo?',
        last_message_state: 'SEEN',
        last_message_created_at: new Date(),
        messages: [
            {
                message_id: 1,
                message_content: 'Tengo un hambre... sabes si Senshi estara cocinando algo?',
                message_state: 'SEEN',
                message_created_at: new Date(),
                send_by_me: false
            }
        ]
    },
    {
        contact_id: 9,
        contact_name: 'Oguri Cap',
        contact_avatar: 'https://images.steamusercontent.com/ugc/34448283197117091/161A1A2A66C0B67AD14B71A221EFA718F8BFEF46/?imw=268&imh=268&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
        contact_unseen_messages: 1,
        last_message_content: 'Acompañame a comer',
        last_message_state: 'SEEN',
        last_message_created_at: new Date(),
        messages: [
            {
                message_id: 1,
                message_content: 'Acompañame a comer',
                message_state: 'SEEN',
                message_created_at: new Date(),
                send_by_me: false
            }
        ]
    },
    {
        contact_id: 10,
        contact_name: 'Ellis',
        contact_avatar: 'https://image-cdn.flowgpt.com/trans-images/1735710583093-9a748b49-9246-4d5b-aa90-6063d9cdebad.default.webp',
        contact_unseen_messages: 0,
        last_message_content: "I ever tell you about the time me and Keith made a homemade bumper car ride with ridin' mowers in his backyard? Mower blade wounds over 90% of his body. I didn't run him over, either; he somehow managed to fall under his own",
        last_message_state: 'SEEN',
        last_message_created_at: new Date(),
        messages: [
            {
                message_id: 1,
                message_content: "I ever tell you about the time me and Keith made a homemade bumper car ride with ridin' mowers in his backyard? Mower blade wounds over 90% of his body. I didn't run him over, either; he somehow managed to fall under his own",
                message_state: 'SEEN',
                message_created_at: new Date(),
                send_by_me: false
            }
        ]
    },
]

export default contact_data