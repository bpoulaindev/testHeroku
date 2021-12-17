const sequelize = require('./models');

console.log(`On teste la connexion à la BDD`);


sequelize.authenticate()
.then(() => {
    console.log('Connexion établie!')

    // Forcer la synchronisation entre mon code et la BDD
    // Code génère la BDD
    sequelize.sync({ force: true })
    .then(() => {
        console.log('Les tables de ma BDD ont été bien générées!')
        sequelize.models.task.create(
            {
                content: "manger",
                status: false,
            }
        )
        sequelize.models.task.create(
            {
                content: "dormir",
                status: false,
            }
        )
        sequelize.models.task.create(
            {
                content: "parler",
                status: false,
            }
        )
        sequelize.models.task.create(
            {
                content: "vendre",
                status: false,
            }
        )
        sequelize.models.task.create(
            {
                content: "rouler",
                status: false,
            }
        )
        sequelize.models.user.create(
            {
                firstname: "JB",
                lastname: "Lavisse",
                email: "ksfksdh@gsld.fr"
            }
        )
        sequelize.models.user.create(
            {
                firstname: "Moi",
                lastname: "CestMoi",
                email: "moi@cmoi.fr"
            }
        )
        sequelize.models.user.create(
            {
                firstname: "Wsh",
                lastname: "maiscestmoi",
                email: "maiscestmoi@wesh.fr"
            }
        )
        sequelize.models.tag.create(
            {
                name: "importnant",
            }
        )
        sequelize.models.tag.create(
            {
                name: "chill",
            }
        )
    })
})
.catch((err) => {
    console.log(`Ma BDD plante, voici l'erreur: ${err}`)
})